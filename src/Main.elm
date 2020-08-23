module Main exposing (main)

import Browser
import Element exposing (..)
import Element.Background as Background
import Element.Font as Font
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



-- CONSTANTS


colors =
    { background = rgb255 54 54 54
    , backgroundSecondary = rgb255 90 83 167
    , font = rgb255 227 227 227
    , accent = rgb255 204 240 255
    }


edges =
    { top = 0
    , right = 0
    , bottom = 0
    , left = 0
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
        [ Background.color colors.background
        , Font.color colors.font
        , Font.family
            [ Font.typeface "Quicksand"
            , Font.sansSerif
            ]
        ]
        (column
            [ width fill ]
            [ viewHeader
            ]
        )


viewHeader : Element msg
viewHeader =
    el
        [ Background.color colors.backgroundSecondary
        , width fill
        ]
        (el [ centerX ]
            (row
                [ height fill
                , width (px 800)
                , centerY
                , spaceEvenly
                , paddingEach { edges | top = 12, bottom = 12 }
                ]
                [ viewLogo
                , viewSignInLink
                ]
            )
        )


viewLogo : Element msg
viewLogo =
    row
        [ Font.size 28
        , spacing 12
        ]
        [ image [ height (px 32) ]
            { src = "./assets/logo.svg", description = "The MPM logo" }
        , text "MPM"
        ]


viewSignInLink : Element msg
viewSignInLink =
    link []
        { url = "/signIn"
        , label = text "Sign In"
        }
