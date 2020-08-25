module Page.Search exposing (Model, Msg, init, initialModel, update, view)

import Element exposing (..)
import Element.Background as Background
import Element.Font as Font
import Element.Input as Input
import GraphQl exposing (Named, Operation, Query)
import GraphQl.Http as GraphQl
import Html exposing (input)
import Json.Decode as Decode exposing (Decoder, list, string)
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
    = ReceivedMods (WebData (List Mod))
    | SetSearchTerm String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ReceivedMods response ->
            ( { model | results = response }, Cmd.none )

        SetSearchTerm searchTerm ->
            ( { model | searchTerm = searchTerm }, findMods searchTerm )


findMods : String -> Cmd Msg
findMods searchTerm =
    GraphQl.query (findModsQuery searchTerm)
        |> GraphQl.send
            { url = "http://localhost:4000/graphql"
            , headers = []
            }
            (RemoteData.fromResult >> ReceivedMods)
            (list modDecoder)


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
        [ viewSearchInput model.searchTerm
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
