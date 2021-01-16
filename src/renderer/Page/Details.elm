module Page.Details exposing (Model, Msg, init, subscriptions, update, view)

import Context exposing (Context)
import Element exposing (..)
import GraphQl as GQL exposing (Named, Operation, Query)
import GraphQl.Http as GQL
import Json.Decode as Decode exposing (Decoder, field, int, list, string)
import Json.Decode.Pipeline exposing (optional, required)
import Models exposing (Thumbnail, thumbnailDecoder)
import RemoteData exposing (WebData)



-- INIT


init : Flags -> ( Model, Cmd Msg )
init flags =
    let
        initialModel =
            { id = flags.id
            , mod = RemoteData.Loading
            }
    in
    ( initialModel, getModDetails flags.id )



-- MODEL


type alias Flags =
    { id : String
    }


type alias Model =
    { id : String
    , mod : WebData Mod
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



-- UPDATE


type Msg
    = ReceivedDetails (WebData Mod)


update : Context -> Msg -> Model -> ( Context, Model, Cmd Msg )
update context msg model =
    case msg of
        ReceivedDetails mod ->
            ( context, { model | mod = mod }, Cmd.none )


getModDetails : String -> Cmd Msg
getModDetails id =
    GQL.query (getModDetailsQuery id)
        |> GQL.send
            { url = "/graphql"
            , headers = []
            }
            (RemoteData.fromResult >> ReceivedDetails)
            (field "mod" modDecoder)


getModDetailsQuery : String -> Operation Query Named
getModDetailsQuery id =
    GQL.named "GetDetails"
        [ GQL.field "mod"
            |> GQL.withArgument "id" (GQL.string id)
            |> GQL.withSelectors
                [ GQL.field "id"
                , GQL.field "name"
                , GQL.field "downloadCount"
                , GQL.field "latestFile"
                    |> GQL.withSelectors
                        [ GQL.field "url"
                        , GQL.field "name"
                        , GQL.field "date"
                        ]
                , GQL.field "authors"
                    |> GQL.withSelectors
                        [ GQL.field "id"
                        , GQL.field "name"
                        ]
                , GQL.field "thumbnail"
                    |> GQL.withSelectors
                        [ GQL.field "url"
                        , GQL.field "description"
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



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none



-- VIEW


view : Context -> Model -> Element Msg
view _ model =
    text model.id
