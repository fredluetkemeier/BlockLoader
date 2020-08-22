module Main exposing (main)

import Browser
import Element
    exposing
        ( alignRight
        , centerX
        , column
        , el
        , fill
        , none
        , rgb255
        , text
        , width
        )
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


colors =
    { backgroundMain = rgb255 54 54 54
    , fontMain = rgb255 227 227 227
    }



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
        [ Background.color colors.backgroundMain
        , Font.color colors.fontMain
        , Font.family
            [ Font.typeface "Quicksand"
            , Font.sansSerif
            ]
        ]
        (column
            [ centerX, width fill ]
            [ viewHeader
            ]
        )


viewHeader =
    el [ Font.center, width fill ]
        (text "Hello World!")
