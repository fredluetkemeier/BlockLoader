port module Page.Search exposing (Model, Msg, init, subscriptions, update, view)

import Context exposing (Context)
import Dict
import Element exposing (..)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input exposing (button)
import Element.Keyed as Keyed
import Element.Lazy exposing (lazy, lazy2)
import GraphQl exposing (Named, Operation, Query)
import GraphQl.Http as GraphQl
import Html.Attributes exposing (style)
import Json.Decode as Decode exposing (Decoder, field, int, list, string)
import Json.Decode.Pipeline exposing (optional, required)
import List.Extra as List
import Models exposing (InstalledMod, Thumbnail, thumbnailDecoder)
import Process
import Progress exposing (Progress)
import RemoteData exposing (WebData)
import Round as Round
import String exposing (fromFloat)
import String.Extra as String
import Styles exposing (colors, edges, sizes)
import Task
import Time


init : ( Model, Cmd Msg )
init =
    let
        initialModel =
            { searchTerm = ""
            , lastInputTime = 0
            , lastResultTime = Nothing
            , mods = RemoteData.Loading
            }
    in
    ( initialModel, Task.perform (Time.posixToMillis >> Search initialModel.searchTerm) Time.now )



-- PORTS


port downloadMod :
    { url : String
    , modPath : String
    , mod :
        { id : String
        , name : String
        , versionDate : String
        , fileName : String
        , image :
            { url : String
            , description : String
            }
        }
    }
    -> Cmd msg



-- MODEL


debounceTime : Int
debounceTime =
    350


type alias Result =
    { mod : Mod
    , progress : Progress Float
    }


type alias Model =
    { searchTerm : String
    , lastInputTime : Int
    , lastResultTime : Maybe Int
    , mods : WebData (List Mod)
    }


type alias Mod =
    { id : String
    , name : String
    , downloadCount : Int
    , latestFile : File
    , authors : List Author
    , thumbnail : Thumbnail
    }


type alias File =
    { url : String
    , name : String
    , date : String
    }


type alias Author =
    { id : String
    , name : String
    }



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none



-- UPDATE


type Msg
    = SetInputText String
    | SetInputTime Int
    | Debounce Int
    | Search String Int
    | ReceivedMods Int (WebData (List Mod))
    | SetResultTime Int
    | DownloadMod Mod


update : Context -> Msg -> Model -> ( Context, Model, Cmd Msg )
update context msg model =
    case msg of
        SetInputText text ->
            case text of
                "" ->
                    ( context
                    , { model
                        | searchTerm = text
                        , mods = RemoteData.Loading
                      }
                    , Task.perform (Time.posixToMillis >> Search text) Time.now
                    )

                _ ->
                    ( context
                    , { model | searchTerm = text }
                    , Task.perform (Time.posixToMillis >> SetInputTime) Time.now
                    )

        SetInputTime currentTime ->
            ( context
            , { model | lastInputTime = currentTime }
            , Task.perform
                Debounce
                (Process.sleep (toFloat debounceTime)
                    |> Task.andThen (\_ -> Task.map Time.posixToMillis Time.now)
                )
            )

        Debounce currentTime ->
            if ( currentTime, model.lastInputTime ) |> areFurtherApartThan debounceTime then
                ( context
                , { model | mods = RemoteData.Loading }
                , Task.perform (Time.posixToMillis >> Search model.searchTerm) Time.now
                )

            else
                ( context, model, Cmd.none )

        Search searchTerm currentTime ->
            ( context, model, findMods currentTime searchTerm )

        ReceivedMods timeOfSearch result ->
            let
                ( updatedModel, newCmd ) =
                    case model.lastResultTime of
                        Just lastResultTime ->
                            if timeOfSearch >= lastResultTime then
                                ( { model | mods = result }, Task.perform (Time.posixToMillis >> SetResultTime) Time.now )

                            else
                                ( model, Cmd.none )

                        Nothing ->
                            ( { model | mods = result }, Task.perform (Time.posixToMillis >> SetResultTime) Time.now )
            in
            ( context, updatedModel, newCmd )

        SetResultTime currentTime ->
            ( context, { model | lastResultTime = Just currentTime }, Cmd.none )

        DownloadMod mod ->
            let
                newInstalledMod =
                    { progress = Progress.Loading 0.0
                    , id = mod.id
                    , name = mod.name
                    , versionDate = mod.latestFile.date
                    , fileName = mod.latestFile.name
                    , image =
                        { url = mod.thumbnail.url
                        , description = mod.thumbnail.description
                        }
                    }
            in
            ( { context | installedMods = newInstalledMod :: context.installedMods }
            , model
            , downloadMod
                { url = mod.latestFile.url
                , modPath = context.modPath
                , mod =
                    { id = mod.id
                    , name = mod.name
                    , versionDate = mod.latestFile.date
                    , fileName = mod.latestFile.name
                    , image =
                        { url = mod.thumbnail.url
                        , description = mod.thumbnail.description
                        }
                    }
                }
            )


areFurtherApartThan : Int -> ( Int, Int ) -> Bool
areFurtherApartThan timeSpan ( currentTime, pastTime ) =
    currentTime - pastTime >= timeSpan


findMods : Int -> String -> Cmd Msg
findMods timeOfSearch searchTerm =
    GraphQl.query (findModsQuery searchTerm)
        |> GraphQl.send
            { url = "/graphql"
            , headers = []
            }
            (RemoteData.fromResult >> ReceivedMods timeOfSearch)
            (field "findMods" (list modDecoder))


findModsQuery : String -> Operation Query Named
findModsQuery searchTerm =
    GraphQl.named "FindMods"
        [ GraphQl.field "findMods"
            |> GraphQl.withArgument "searchTerm" (GraphQl.string searchTerm)
            |> GraphQl.withSelectors
                [ GraphQl.field "id"
                , GraphQl.field "name"
                , GraphQl.field "downloadCount"
                , GraphQl.field "latestFile"
                    |> GraphQl.withSelectors
                        [ GraphQl.field "url"
                        , GraphQl.field "name"
                        , GraphQl.field "date"
                        ]
                , GraphQl.field "authors"
                    |> GraphQl.withSelectors
                        [ GraphQl.field "id"
                        , GraphQl.field "name"
                        ]
                , GraphQl.field "thumbnail"
                    |> GraphQl.withSelectors
                        [ GraphQl.field "url"
                        , GraphQl.field "description"
                        ]
                ]
        ]


modDecoder : Decoder Mod
modDecoder =
    Decode.succeed Mod
        |> required "id" string
        |> required "name" string
        |> required "downloadCount" int
        |> required "latestFile" fileDecoder
        |> required "authors" (list authorDecoder)
        |> optional "thumbnail"
            thumbnailDecoder
            { url = "/assets/icons/placeholder-thumbnail.svg"
            , description = "A placeholder thumbnail"
            }


fileDecoder : Decoder File
fileDecoder =
    Decode.succeed File
        |> required "url" string
        |> required "name" string
        |> required "date" string


authorDecoder : Decoder Author
authorDecoder =
    Decode.succeed Author
        |> required "id" string
        |> required "name" string



-- VIEW


view : Context -> Model -> Element Msg
view context model =
    column
        [ centerX
        , width sizes.content
        , paddingEach { edges | top = 12 }
        ]
        [ lazy viewSearchInput model.searchTerm
        , lazy2 viewContent context.installedMods model.mods
        ]


viewSearchInput : String -> Element Msg
viewSearchInput searchTerm =
    Input.search
        [ Background.color colors.backgroundLight
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


viewContent : List InstalledMod -> WebData (List Mod) -> Element Msg
viewContent installedMods modResults =
    el
        [ centerX
        , paddingEach { edges | top = 20 }
        , width fill
        , htmlAttribute (style "height" "calc(100vh - 150px")
        ]
        (case modResults of
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
        , spacing 10
        , scrollbarY
        , paddingEach { edges | top = 2, left = 2, right = 6, bottom = 2 }
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
        [ viewModInfo mod
        , viewDownloadStatus progress mod
        ]


viewModInfo : Mod -> Element msg
viewModInfo mod =
    row [ height fill, spacing 20 ]
        [ image [ width (px 50), centerY ]
            { src = mod.thumbnail.url
            , description = mod.thumbnail.description
            }
        , column
            [ spacing 10
            , centerY
            ]
            [ row [ spacing 14 ]
                [ el
                    [ Font.size 22
                    , Font.color colors.fontLight
                    ]
                    (text (String.ellipsis 50 mod.name))
                , viewDownloadCount mod.downloadCount
                ]
            , viewAuthors mod.authors
            ]
        ]


viewDownloadCount : Int -> Element msg
viewDownloadCount count =
    el
        [ centerY ]
        (row
            [ spacing 5
            , Font.color colors.fontDark
            , Font.size 12
            ]
            [ image [ height (px 12) ]
                { src = "./assets/icons/download-alt.svg"
                , description = "Download icon"
                }
            , text (abbreviate count)
            ]
        )


viewAuthors : List Author -> Element msg
viewAuthors authors =
    let
        combinedAuthors =
            authors
                |> List.map .name
                |> String.join ", "
                |> String.ellipsis 60
    in
    el
        [ Font.size 14
        , Font.color colors.fontDark
        ]
        (text combinedAuthors)


viewDownloadStatus : Progress Float -> Mod -> Element Msg
viewDownloadStatus progress mod =
    el
        [ width (px 75)
        , height fill
        , alignRight
        ]
        (case progress of
            Progress.Loading percentage ->
                Progress.progressBar percentage colors.backgroundColorfulLight

            Progress.Succeeded ->
                image [ centerX, centerY, height (px 22) ]
                    { src = "/assets/icons/check-square.svg"
                    , description = "This mod is installed"
                    }

            _ ->
                button [ centerX, centerY ]
                    { onPress = Just (DownloadMod mod)
                    , label =
                        image [ height (px 22), centerX ]
                            { src = "/assets/icons/download.svg"
                            , description = "Download this mod"
                            }
                    }
        )



-- EXTRAS


abbreviate : Int -> String
abbreviate number =
    let
        abbreviations =
            Dict.fromList
                [ ( 1, "K" )
                , ( 2, "M" )
                , ( 3, "B" )
                , ( 4, "T" )
                ]

        lengthOfNumber =
            number
                |> String.fromInt
                |> String.length
                |> toFloat

        numberOfThousands =
            floor ((lengthOfNumber - 1) / 3) |> toFloat

        shortenedNumber =
            toFloat number
                / (10 ^ (lengthOfNumber - 1 - (3 - numberOfThousands)))
                |> Round.round 1

        abbreviation =
            case Dict.get numberOfThousands abbreviations of
                Just value ->
                    value

                Nothing ->
                    ""
    in
    case abbreviation of
        "" ->
            number |> String.fromInt

        _ ->
            String.join " " [ shortenedNumber, abbreviation ]
