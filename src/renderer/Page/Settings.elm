port module Page.Settings exposing (Model, Msg, init, subscriptions, update, view)

import Context exposing (Context)
import Element exposing (..)
import Element.Background as Background exposing (gradient)
import Element.Border as Border
import Element.Font as Font
import Element.Input exposing (button)
import Element.Lazy exposing (lazy)
import Ports exposing (choosePath, pathChosen, savePath)
import Styles exposing (colors, edges, sizes)



-- PORTS


port moveMods : { from : String, to : String } -> Cmd msg


port modsMoved : (() -> msg) -> Sub msg



-- INIT


init : ( Model, Cmd Msg )
init =
    let
        initialModel =
            { newModPath = Empty
            }
    in
    ( initialModel, Cmd.none )



-- MODEL


type alias Model =
    { newModPath : SettingProgress String
    }



-- UPDATE


type Msg
    = ChoosePath
    | PathChosen String
    | ModsMoved


type SettingProgress a
    = Empty
    | Saving a


update : Context -> Msg -> Model -> ( Context, Model, Cmd Msg )
update context msg model =
    case msg of
        ChoosePath ->
            ( context, model, choosePath () )

        PathChosen path ->
            ( context
            , { model | newModPath = Saving path }
            , moveMods
                { from = context.modPath
                , to = path
                }
            )

        ModsMoved ->
            let
                newModPath =
                    case model.newModPath of
                        Saving path ->
                            path

                        Empty ->
                            ""
            in
            ( { context | modPath = newModPath }
            , { model | newModPath = Empty }
            , savePath newModPath
            )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.batch
        [ pathChosen PathChosen
        , modsMoved (always ModsMoved)
        ]



-- VIEW


view : Context -> Model -> Element Msg
view context model =
    column
        [ centerX
        , width sizes.content
        , height fill
        ]
        [ viewHeader
        , lazy viewModPath context.modPath
        ]


viewHeader : Element msg
viewHeader =
    el
        [ paddingEach { edges | top = 20, bottom = 15 }
        , width fill
        , Font.size 40
        , Font.color colors.fontLight
        , Border.dashed
        , Border.widthEach { edges | bottom = 2 }
        , Border.color colors.backgroundLight
        ]
        (text "Settings")


viewModPath : String -> Element Msg
viewModPath path =
    el
        [ paddingEach { edges | top = 28 }
        , spacing 20
        , width fill
        ]
        (column [ spacing 20, width fill ]
            [ viewSectionTitle "MOD PATH"
            , row
                [ width fill
                , height (px 40)
                , spacing 10
                ]
                [ el
                    [ width fill
                    , height fill
                    , padding 8
                    , Background.color colors.backgroundMedium
                    , Border.rounded 6
                    ]
                    (el
                        [ centerY
                        , Font.size 16
                        , Font.color colors.fontMediumDark
                        ]
                        (text path)
                    )
                , button
                    [ centerY
                    , height fill
                    , alignRight
                    , padding 10
                    , Border.rounded 6
                    , Border.width 1
                    , Border.color colors.backgroundColorful
                    , Background.color colors.backgroundMedium
                    ]
                    { onPress = Just ChoosePath
                    , label =
                        el
                            [ Font.size 16
                            , Font.color colors.backgroundColorfulLight
                            , Font.bold
                            , Font.letterSpacing 0.5
                            ]
                            (text "Change")
                    }
                ]
            ]
        )


viewSectionTitle : String -> Element msg
viewSectionTitle content =
    el
        [ Font.size 16
        , Font.extraBold
        , Font.letterSpacing 1.0
        , Font.color colors.fontLight
        ]
        (text content)
