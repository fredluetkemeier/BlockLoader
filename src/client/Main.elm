module Main exposing (main)

import Browser
import Element exposing (Element, el, none)
import Html exposing (Html)


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = \_ -> Sub.none
        }


init : () -> ( Model, Cmd msg )
init _ =
    ( {}, Cmd.none )



-- MODEL


type alias Model =
    {}



-- UPDATE


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )



-- VIEW


view : Model -> Html msg
view model =
    Element.layout [] none
