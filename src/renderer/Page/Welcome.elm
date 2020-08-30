module Page.Welcome exposing (Model, Msg, init, update, view)

import Element exposing (..)
import Element.Border as Border
import Element.Font as Font
import Element.Input exposing (button, focusedOnLoad)
import Styles exposing (colors, edges, sizes)



-- PORTS
-- MODEL


init : ( Model, Cmd Msg )
init =
    let
        initialModel =
            { path = ""
            }
    in
    ( initialModel, Cmd.none )


type alias Model =
    { path : String
    }



-- UPDATE


type Msg
    = ChoosePath


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ChoosePath ->
            ( model, Cmd.none )



-- VIEW


view : Model -> Element Msg
view model =
    column [ width sizes.content, centerX ]
        [ el [ Font.size 44, Font.color colors.fontLight, paddingEach { edges | top = 80 } ]
            (text "Welcome!")
        , paragraph [ Font.size 18, paddingEach { edges | top = 40 } ]
            [ text "You're seeing this because your "
            , el [ Font.extraBold ] (text "mod path")
            , text " has not been set. Please set it below, so I know where to install mods for you."
            ]
        , paragraph
            [ Font.size 14
            , Font.color colors.fontDark
            , paddingEach { edges | top = 40 }
            , alignBottom
            ]
            [ text "Keep in mind that I have no idea which mods you currently have installed. I won't delete the ones that you have, but they won't show up in your library either!" ]
        , el [ paddingEach { edges | top = 30 } ]
            (button
                [ width (px 300)
                , height (px 50)
                , Border.rounded 8
                , Border.width 2
                , Border.color colors.backgroundColorful
                ]
                { onPress = Just ChoosePath
                , label = el [ centerX, centerY, Font.size 18 ] (text "Choose mod path")
                }
            )
        ]
