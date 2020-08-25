module Page.Search exposing (Model, Msg, init, initialModel, update, view)

import Element exposing (..)
import GraphQl exposing (Named, Operation, Query)
import GraphQl.Http as GraphQl
import Json.Decode as Decode exposing (Decoder, list, string)
import Json.Decode.Pipeline exposing (required)
import RemoteData exposing (WebData)



-- INIT


init : ( Model, Cmd Msg )
init =
    ( initialModel, findMods "" )


initialModel : Model
initialModel =
    { results = RemoteData.Loading
    }



-- MODEL


type alias Model =
    { results : WebData (List Mod)
    }


type alias Mod =
    { id : String
    , name : String
    }



-- UPDATE


type Msg
    = FindMods
    | ReceivedMods (WebData (List Mod))


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        FindMods ->
            ( { model | results = RemoteData.Loading }, findMods "lithium" )

        ReceivedMods response ->
            ( { model | results = response }, Cmd.none )


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
            |> GraphQl.withArgument "search" (GraphQl.variable searchTerm)
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


view : Model -> Element msg
view model =
    el [] (text "Search")
