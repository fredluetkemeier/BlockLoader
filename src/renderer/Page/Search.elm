module Page.Search exposing (Model, Msg, init, initialModel, update, view)

import Delay
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
    ( initialModel, findMods initialModel.inputText )


initialModel : Model
initialModel =
    { inputText = ""
    , searchTerm = ""
    , results = RemoteData.Loading
    }



-- MODEL


type alias Model =
    { inputText : String
    , searchTerm : String
    , results : WebData (List Mod)
    }


type alias Mod =
    { id : String
    , name : String
    }



-- UPDATE


type Msg
    = SetInputText String
    | ReceivedMods (WebData (List Mod))


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SetInputText text ->
            let
                ( newModel, newCmd ) =
                    case model.results of
                        RemoteData.Loading ->
                            ( { model | inputText = text }
                            , Cmd.none
                            )

                        _ ->
                            ( { model
                                | inputText = text
                                , searchTerm = text
                                , results = RemoteData.Loading
                              }
                            , findMods text
                            )
            in
            ( newModel, newCmd )

        ReceivedMods response ->
            let
                ( newModel, newCmd ) =
                    if model.inputText == model.searchTerm then
                        ( { model | results = response }, Cmd.none )

                    else
                        ( { model
                            | results = RemoteData.Loading
                            , searchTerm = model.inputText
                          }
                        , findMods model.inputText
                        )
            in
            ( newModel, newCmd )


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
        [ lazy viewSearchInput model.inputText
        , lazy viewContent model.results
        ]


viewSearchInput : String -> Element Msg
viewSearchInput inputText =
    el
        [ paddingEach { edges | top = 12 }
        , Font.color colors.font
        , width fill
        ]
        (Input.search
            [ Input.focusedOnLoad
            , Background.color colors.backgroundLight
            ]
            { onChange = SetInputText
            , text = inputText
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
    row [ width fill, paddingEach { edges | top = 12 } ]
        [ text mod.name
        ]
