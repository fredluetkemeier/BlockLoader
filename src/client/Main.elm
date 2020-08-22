module Main exposing (main)

import Browser
import Element exposing (Element, centerX, column, el, none, rgb, rgb255, text)
import Element.Background as Background
import Element.Font as Font
import Element.Region exposing (heading)
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
    Element.layout
        [ Background.color (rgb255 54 54 54)
        , Font.color (rgb255 227 227 227)
        ]
        (column
            [ centerX ]
            [ viewHeader
            ]
        )


viewHeader =
    el [ centerX, heading 1 ] (text "Hello World!")
