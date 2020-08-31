port module Page.Welcome exposing (Model, Msg, init, subscriptions, update, view)

import Element exposing (..)
import Element.Border as Border
import Element.Font as Font
import Element.Input exposing (button)
import Navigation exposing (pushUrl)
import Styles exposing (colors, edges, sizes)



-- PORTS


port choosePath : () -> Cmd msg


port pathChosen : (String -> msg) -> Sub msg


port savePath : String -> Cmd msg



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
    | PathChosen String
    | Continue


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ChoosePath ->
            ( model, choosePath () )

        PathChosen path ->
            ( { model | path = path }, Cmd.none )

        Continue ->
            ( model, Cmd.batch [ savePath model.path, pushUrl "/search" ] )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    pathChosen PathChosen



-- VIEW


view : Model -> Element Msg
view model =
    column
        [ height fill
        , width sizes.content
        , centerX
        , paddingEach { edges | top = 80 }
        ]
        [ viewHeading
        , viewPathSelection model.path
        ]


viewHeading : Element msg
viewHeading =
    column [ spacing 40 ]
        [ el [ Font.size 44, Font.color colors.fontLight ]
            (text "Welcome!")
        , paragraph [ Font.size 18 ]
            [ text "You're seeing this because your "
            , el [ Font.extraBold ] (text "mod path")
            , text " has not been set. Please set it below, so I know where to install mods for you."
            ]
        , paragraph
            [ Font.size 14
            , Font.color colors.fontDark
            ]
            [ text "Keep in mind that I have no idea which mods you currently have installed. I won't delete the ones that you have, but they won't show up in your library either!" ]
        ]


viewPathSelection : String -> Element Msg
viewPathSelection path =
    column
        [ height fill
        , width fill
        , spacing 20
        , paddingEach { edges | bottom = 100 }
        , alignBottom
        ]
        [ row [ spacing 5, alignBottom ]
            [ el [ Font.bold, Font.size 16 ] (text "Path: ")
            , el [ Font.extraBold, Font.size 16 ]
                (case path of
                    "" ->
                        el [ Font.color colors.danger ]
                            (text "Not Set")

                    _ ->
                        el [ Font.color colors.accent ]
                            (text path)
                )
            ]
        , row [ width fill, spaceEvenly, alignBottom ]
            [ button
                [ width (px 220)
                , height (px 50)
                , Border.rounded 8
                , Border.width 2
                , Border.color colors.backgroundColorful
                , Font.extraBold
                ]
                { onPress = Just ChoosePath
                , label = el [ centerX, centerY, Font.size 18 ] (text "Choose path")
                }
            , case path of
                "" ->
                    none

                _ ->
                    button
                        [ width (px 220)
                        , height (px 50)
                        , Border.rounded 8
                        , Border.width 2
                        , Border.color colors.accent
                        , Font.extraBold
                        ]
                        { onPress = Just Continue
                        , label = el [ centerX, centerY, Font.size 18 ] (text "Continue")
                        }
            ]
        ]
