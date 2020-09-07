port module Page.Search exposing (Model, Msg, init, subscriptions, update, view)

import Element exposing (..)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input exposing (button)
import Element.Keyed as Keyed
import Element.Lazy exposing (lazy, lazy2)
import GraphQl exposing (Named, Operation, Query)
import GraphQl.Http as GraphQl
import Html.Attributes
import Json.Decode as Decode exposing (Decoder, field, list, string)
import Json.Decode.Pipeline exposing (required)
import List.Extra as List
import Models exposing (InstalledMod)
import Process
import Progress exposing (Progress)
import RemoteData exposing (WebData)
import String exposing (fromFloat)
import Styles exposing (colors, edges, sizes)
import Task
import Time



-- PORTS


port downloadMod :
    { id : String
    , url : String
    , modPath : String
    , fileName : String
    }
    -> Cmd msg


port downloadProgress : ({ id : String, percentage : Float } -> msg) -> Sub msg



-- MODEL


init : Flags -> ( Model, Cmd Msg )
init flags =
    let
        initialModel =
            { searchTerm = ""
            , lastInputTime = 0
            , mods = RemoteData.Loading
            , installedMods = flags.installedMods
            , modPath = flags.modPath
            }
    in
    ( initialModel, findMods initialModel.searchTerm )


debounceTime : Int
debounceTime =
    350


type alias Flags =
    { installedMods : List InstalledMod
    , modPath : String
    }


type alias Model =
    { searchTerm : String
    , lastInputTime : Int
    , mods : WebData (List Mod)
    , installedMods : List InstalledMod
    , modPath : String
    }


type alias Result =
    { mod : Mod
    , progress : Progress Float
    }


type alias Mod =
    { id : String
    , name : String
    , latestFile : File
    , authors : List Author
    }


type alias File =
    { url : String
    , name : String
    }


type alias Author =
    { id : String
    , name : String
    }



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    downloadProgress SetDownloadProgress



-- UPDATE


type Msg
    = SetInputText String
    | SetTime Time.Posix
    | Debounce Int
    | ReceivedMods (WebData (List Mod))
    | DownloadMod Mod
    | SetDownloadProgress { id : String, percentage : Float }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SetInputText text ->
            case text of
                "" ->
                    ( { model
                        | searchTerm = text
                        , mods = RemoteData.Loading
                      }
                    , findMods text
                    )

                _ ->
                    ( { model | searchTerm = text }, Task.perform SetTime Time.now )

        SetTime time ->
            ( { model | lastInputTime = Time.posixToMillis time }
            , Task.perform
                Debounce
                (Process.sleep (toFloat debounceTime)
                    |> Task.andThen (\_ -> Task.map Time.posixToMillis Time.now)
                )
            )

        Debounce currentTime ->
            if ( currentTime, model.lastInputTime ) |> areFurtherApartThan debounceTime then
                ( { model | mods = RemoteData.Loading }, findMods model.searchTerm )

            else
                ( model, Cmd.none )

        ReceivedMods response ->
            ( { model | mods = response }, Cmd.none )

        DownloadMod mod ->
            let
                newInstalledMod =
                    { id = mod.id
                    , progress = Progress.Loading 0.0
                    }
            in
            ( { model | installedMods = newInstalledMod :: model.installedMods }
            , downloadMod
                { id = mod.id
                , url = mod.latestFile.url
                , modPath = model.modPath
                , fileName = mod.latestFile.name
                }
            )

        SetDownloadProgress { id, percentage } ->
            let
                updateInstalledMod mod =
                    if mod.id == id then
                        if percentage == 1.0 then
                            { mod | progress = Progress.Succeeded }

                        else
                            { mod | progress = Progress.Loading percentage }

                    else
                        mod
            in
            ( { model | installedMods = List.map updateInstalledMod model.installedMods }, Cmd.none )


areFurtherApartThan : Int -> ( Int, Int ) -> Bool
areFurtherApartThan timeSpan ( currentTime, pastTime ) =
    currentTime - pastTime >= timeSpan


findMods : String -> Cmd Msg
findMods searchTerm =
    GraphQl.query (findModsQuery searchTerm)
        |> GraphQl.send
            { url = "http://localhost:4000/graphql"
            , headers = []
            }
            (RemoteData.fromResult >> ReceivedMods)
            (field "findMods" (list modDecoder))


findModsQuery : String -> Operation Query Named
findModsQuery searchTerm =
    GraphQl.named "FindMods"
        [ GraphQl.field "findMods"
            |> GraphQl.withArgument "searchTerm" (GraphQl.string searchTerm)
            |> GraphQl.withSelectors
                [ GraphQl.field "id"
                , GraphQl.field "name"
                , GraphQl.field "latestFile"
                    |> GraphQl.withSelectors
                        [ GraphQl.field "url"
                        , GraphQl.field "name"
                        ]
                , GraphQl.field "authors"
                    |> GraphQl.withSelectors
                        [ GraphQl.field "id"
                        , GraphQl.field "name"
                        ]
                ]
        ]


modDecoder : Decoder Mod
modDecoder =
    Decode.succeed Mod
        |> required "id" string
        |> required "name" string
        |> required "latestFile" fileDecoder
        |> required "authors" (list authorDecoder)


fileDecoder : Decoder File
fileDecoder =
    Decode.succeed File
        |> required "url" string
        |> required "name" string


authorDecoder : Decoder Author
authorDecoder =
    Decode.succeed Author
        |> required "id" string
        |> required "name" string



-- VIEW


view : Model -> Element Msg
view model =
    column
        [ centerX
        , width sizes.content
        , paddingEach { edges | top = 12 }
        ]
        [ lazy viewSearchInput model.searchTerm
        , lazy2 viewContent model.mods model.installedMods
        ]


viewSearchInput : String -> Element Msg
viewSearchInput searchTerm =
    Input.search
        [ Input.focusedOnLoad
        , Background.color colors.backgroundLight
        , padding 12
        , Font.color colors.font
        , width fill
        , height (px 50)
        ]
        { onChange = SetInputText
        , text = searchTerm
        , placeholder = Just (Input.placeholder [ Font.color colors.fontDark ] (text "Start typing to search"))
        , label = Input.labelHidden "Start typing to search"
        }


viewContent : WebData (List Mod) -> List InstalledMod -> Element Msg
viewContent remoteMods installedMods =
    el
        [ centerX
        , paddingEach { edges | top = 20 }
        , width fill
        , Element.htmlAttribute (Html.Attributes.style "position" "relative")
        ]
        (case remoteMods of
            RemoteData.Loading ->
                image
                    [ height (px 50), centerX ]
                    { src = "./assets/icons/loading.svg"
                    , description = "Loading icon"
                    }

            RemoteData.Success mods ->
                let
                    findInstalledMod modId =
                        List.find (\installed -> installed.id == modId) installedMods

                    toResult mod =
                        let
                            progress =
                                case findInstalledMod mod.id of
                                    Just installed ->
                                        installed.progress

                                    Nothing ->
                                        Progress.NotStarted
                        in
                        { mod = mod
                        , progress = progress
                        }

                    results =
                        List.map toResult mods
                in
                viewResults results

            RemoteData.Failure _ ->
                el [ Font.size 18 ]
                    (text "I couldn't load any mods! Are you offline?")

            RemoteData.NotAsked ->
                none
        )


viewResults : List Result -> Element Msg
viewResults result =
    Keyed.column
        [ width fill
        , height fill
        , spacing 10
        ]
    <|
        List.map viewKeyedResult result


viewKeyedResult : Result -> ( String, Element Msg )
viewKeyedResult result =
    ( result.mod.id, viewResult result )


viewResult : Result -> Element Msg
viewResult result =
    let
        { mod, progress } =
            result
    in
    row
        [ width fill
        , padding 20
        , height (px 100)
        , Border.rounded 8
        , Border.shadow
            { offset = ( 0, 0 )
            , size = 1.0
            , blur = 3.0
            , color = colors.backgroundDark
            }
        ]
        [ column
            [ height fill
            , spacing 10
            , centerY
            ]
            [ el [ Font.size 24 ]
                (text mod.name)
            , viewAuthors mod.authors
            ]
        , el
            [ alignRight
            , width (px 75)
            ]
            (el [ centerX, width fill ]
                (case progress of
                    Progress.Loading percentage ->
                        viewProgressBar percentage colors.backgroundColorfulLight

                    Progress.Succeeded ->
                        image [ centerX, height (px 22) ]
                            { src = "/assets/icons/check-square.svg"
                            , description = "This mod is installed"
                            }

                    _ ->
                        button [ centerX ]
                            { onPress = Just (DownloadMod mod)
                            , label =
                                image [ height (px 20), centerX ]
                                    { src = "/assets/icons/download.svg"
                                    , description = "Download this mod"
                                    }
                            }
                )
            )
        ]


viewProgressBar : Float -> Color -> Element msg
viewProgressBar fillAmount color =
    let
        fillColorRgb =
            colorToHtmlString color

        backgroundColorRgb =
            colorToHtmlString colors.backgroundMedium

        percentage =
            fillAmount * 100

        fillGradientAttr =
            "linear-gradient(to right, "
                ++ fillColorRgb
                ++ ", "
                ++ fillColorRgb
                ++ String.fromFloat percentage
                ++ "%, "
                ++ backgroundColorRgb
                ++ " 0%)"
    in
    el
        [ width fill
        , height (px 10)
        , centerX
        , Border.rounded 10
        , Html.Attributes.style "background" fillGradientAttr
            |> Element.htmlAttribute
        ]
        none


colorToHtmlString : Color -> String
colorToHtmlString color =
    let
        { red, green, blue } =
            toRgb color

        colors =
            [ red, green, blue ]
                |> List.map (\percentage -> percentage * 255)
                |> List.map fromFloat
                |> String.join " "
    in
    "rgb(" ++ colors ++ ")"


viewAuthors : List Author -> Element msg
viewAuthors authors =
    Keyed.row [] <|
        List.map viewKeyedAuthor authors


viewKeyedAuthor : Author -> ( String, Element msg )
viewKeyedAuthor author =
    ( author.id, viewAuthor author )


viewAuthor : Author -> Element msg
viewAuthor author =
    el [ Font.size 14 ] (text author.name)
