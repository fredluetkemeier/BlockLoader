module Page.Settings exposing (Model, Msg, init, subscriptions, update, view)

import Context exposing (Context)
import Element exposing (..)



-- MODEL


init : ( Model, Cmd Msg )
init =
    let
        initialModel =
            {}
    in
    ( initialModel, Cmd.none )


type alias Model =
    {}



-- UPDATE


type Msg
    = NoOp


update : Context -> Msg -> Model -> ( Context, Model, Cmd Msg )
update context msg model =
    case msg of
        NoOp ->
            ( context, model, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none



-- VIEW


view : Context -> Model -> Element Msg
view context model =
    el [] (text "Hello World")
