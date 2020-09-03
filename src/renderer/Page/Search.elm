module Page.Search exposing (Model, Msg, init, subscriptions, update, view)

import Element exposing (..)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Element.Keyed as Keyed
import Element.Lazy exposing (lazy)
import GraphQl exposing (Named, Operation, Query)
import GraphQl.Http as GraphQl
import Html.Attributes
import Json.Decode as Decode exposing (Decoder, field, list, string)
import Json.Decode.Pipeline exposing (required)
import Models exposing (Author, Mod)
import Process
import RemoteData exposing (WebData)
import Styles exposing (colors, edges, sizes)
import Task
import Time



-- MODEL


init : Flags -> ( Model, Cmd Msg )
init flags =
    let
        initialModel =
            { searchTerm = ""
            , lastInputTime = 0
            , results = RemoteData.Loading
            , installedMods = flags.installedMods
            }
    in
    ( initialModel, findMods initialModel.searchTerm )


debounceTime : Int
debounceTime =
    350


type alias Model =
    { searchTerm : String
    , lastInputTime : Int
    , results : WebData (List Mod)
    , installedMods : List Mod
    }


type alias Flags =
    { installedMods : List Mod
    }



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- UPDATE


type Msg
    = SetInputText String
    | SetTime Time.Posix
    | Debounce Int
    | ReceivedMods (WebData (List Mod))


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SetInputText text ->
            let
                newModel =
                    { model | searchTerm = text }
            in
            case text of
                "" ->
                    ( newModel, findMods text )

                _ ->
                    ( newModel, Task.perform SetTime Time.now )

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
                ( { model | results = RemoteData.Loading }, findMods model.searchTerm )

            else
                ( model, Cmd.none )

        ReceivedMods response ->
            ( { model | results = response }, Cmd.none )


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
        |> required "authors" (list authorDecoder)


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
        , lazy viewContent model.results
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
        , placeholder = Just (Input.placeholder [ Font.color colors.fontLight ] (text "Start typing to search"))
        , label = Input.labelHidden "Start typing to search"
        }


viewContent : WebData (List Mod) -> Element msg
viewContent results =
    el
        [ centerX
        , paddingEach { edges | top = 20 }
        , width fill
        , Element.htmlAttribute (Html.Attributes.style "position" "relative")
        ]
        (case results of
            RemoteData.Loading ->
                image
                    [ height (px 50), centerX ]
                    { src = "./assets/icons/loading.svg"
                    , description = "Loading icon"
                    }

            RemoteData.Success mods ->
                viewMods mods

            RemoteData.Failure _ ->
                el [ Font.size 18 ]
                    (text "I couldn't load any mods! Are you offline?")

            RemoteData.NotAsked ->
                none
        )


viewMods : List Mod -> Element msg
viewMods mods =
    Keyed.column
        [ width fill
        , height fill
        , spacing 10
        ]
    <|
        List.map viewKeyedMod mods


viewKeyedMod : Mod -> ( String, Element msg )
viewKeyedMod mod =
    ( mod.id, viewMod mod )


viewMod : Mod -> Element msg
viewMod mod =
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
        , el [ alignRight, width (px 50) ]
            (image [ height (px 20) ]
                { src = "/assets/icons/download.svg"
                , description = "Download this mod"
                }
            )
        ]


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
