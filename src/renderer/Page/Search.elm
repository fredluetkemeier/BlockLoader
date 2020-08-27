module Page.Search exposing (Model, Msg, init, initialModel, update, view)

import Delay as Delay exposing (..)
import Element exposing (..)
import Element.Background as Background
import Element.Font as Font
import Element.Input as Input
import Element.Keyed as Keyed
import Element.Lazy exposing (lazy)
import GraphQl exposing (Named, Operation, Query)
import GraphQl.Http as GraphQl
import Json.Decode as Decode exposing (Decoder, field, list, string)
import Json.Decode.Pipeline exposing (required)
import RemoteData exposing (WebData)
import Styles exposing (colors, edges)



-- INIT


init : ( Model, Cmd Msg )
init =
    ( initialModel, findMods initialModel.searchTerm )


initialModel : Model
initialModel =
    { searchTerm = ""
    , results = RemoteData.Loading
    }



-- MODEL


type alias Model =
    { searchTerm : String
    , results : WebData (List Mod)
    }


type alias Mod =
    { id : String
    , name : String
    }



-- UPDATE


type Msg
    = FindMods
    | ReceivedMods (WebData (List Mod))
    | SetSearchTerm String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ReceivedMods response ->
            ( { model | results = response }, Cmd.none )

        SetSearchTerm searchTerm ->
            ( { model | searchTerm = searchTerm }, Delay.after 250 Millisecond FindMods )

        FindMods ->
            ( model, findMods model.searchTerm )


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
                ]
        ]


modDecoder : Decoder Mod
modDecoder =
    Decode.succeed Mod
        |> required "id" string
        |> required "name" string



-- VIEW


view : Model -> Element Msg
view model =
    column
        [ centerX
        , width (px 800)
        ]
        [ lazy viewSearchInput model.searchTerm
        , lazy viewContent model.results
        ]


viewSearchInput : String -> Element Msg
viewSearchInput searchTerm =
    el
        [ paddingEach { edges | top = 12 }
        , Font.color colors.font
        , width fill
        ]
        (Input.search
            [ Input.focusedOnLoad
            , Background.color colors.backgroundLight
            ]
            { onChange = SetSearchTerm
            , text = searchTerm
            , placeholder = Just (Input.placeholder [ Font.color colors.fontLight ] (text "Search for a mod"))
            , label = Input.labelHidden "Seach for a mod"
            }
        )


viewContent : WebData (List Mod) -> Element msg
viewContent results =
    el [ centerX, paddingEach { edges | top = 20 }, width fill ]
        (case results of
            RemoteData.Loading ->
                image
                    [ height (px 50), centerX ]
                    { src = "./assets/loading.svg"
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
    Keyed.column [ width fill ] <|
        List.map viewKeyedMod mods


viewKeyedMod : Mod -> ( String, Element msg )
viewKeyedMod mod =
    ( mod.id, viewMod mod )


viewMod : Mod -> Element msg
viewMod mod =
    row [ width fill ]
        [ text mod.name
        ]
