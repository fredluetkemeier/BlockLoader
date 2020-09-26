module Page.Installed exposing (Model, Msg, init, subscriptions, update, view)

import Context exposing (Context)
import Element exposing (..)
import Element.Background as Background
import Element.Border as Border
import Element.Events as Events
import Element.Font as Font
import Element.Input exposing (button)
import Element.Lazy exposing (lazy2)
import Html.Attributes exposing (style)
import Models exposing (InstalledMod)
import String.Extra as String
import Styles exposing (colors, edges, sizes)



-- PORTS
-- MODEl


init : ( Model, Cmd Msg )
init =
    let
        initialModel =
            { inspectedCardId = Nothing
            }
    in
    ( initialModel, Cmd.none )


type alias Model =
    { inspectedCardId : Maybe String
    }



-- UPDATE


type Msg
    = FocusCard String
    | ClearFocus
    | UninstallMod String


update : Context -> Msg -> Model -> ( Context, Model, Cmd Msg )
update context msg model =
    case msg of
        FocusCard id ->
            ( context, { model | inspectedCardId = Just id }, Cmd.none )

        ClearFocus ->
            ( context, { model | inspectedCardId = Nothing }, Cmd.none )

        UninstallMod id ->
            ( context, model, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none



-- VIEW


view : Context -> Model -> Element Msg
view context model =
    column
        [ width sizes.content
        , centerX
        , spacing 20
        , paddingEach { edges | top = 20 }
        , htmlAttribute (style "height" "calc(100vh - 80px)")
        ]
        [ viewHeading
        , lazy2 viewInstalledMods context.installedMods model.inspectedCardId
        ]


viewHeading : Element Msg
viewHeading =
    el [] (text "Heading")


viewInstalledMods : List InstalledMod -> Maybe String -> Element Msg
viewInstalledMods installedMods inspectedCardId =
    let
        getModHeight id =
            case inspectedCardId of
                Nothing ->
                    ( 100, 200 )

                Just inspectedId ->
                    if id == inspectedId then
                        ( 200, 100 )

                    else
                        ( 100, 200 )
    in
    el
        [ height fill
        , width fill
        , moveLeft 4
        , centerX
        , scrollbarY
        ]
        (wrappedRow
            [ spacing 12
            , paddingEach
                { edges
                    | top = 6
                    , left = 6
                    , bottom = 6
                    , right = 8
                }
            ]
         <|
            List.map
                (\mod -> viewMod mod (getModHeight mod.id))
                installedMods
        )


viewMod : InstalledMod -> ( Int, Int ) -> Element Msg
viewMod mod ( nameHeight, imageHeight ) =
    column
        [ height (px 300)
        , width (px 250)

        -- , paddingEach { edges | top = 2, left = 2, right = 2 }
        , Border.rounded 8
        , Border.shadow
            { offset = ( 0, 0 )
            , size = 3.0
            , blur = 3.0
            , color = colors.backgroundDark
            }
        , Background.color colors.background
        , Events.onMouseEnter (FocusCard mod.id)
        , Events.onMouseLeave ClearFocus
        ]
        [ viewImage
            imageHeight
            mod.image.description
            mod.image.url
        , viewDetails mod
        ]


viewImage : Int -> String -> String -> Element msg
viewImage imageHeight description url =
    image
        [ width fill
        , height (px imageHeight)
        , centerX
        , clip
        , Border.roundEach
            { topLeft = 8
            , topRight = 8
            , bottomLeft = 0
            , bottomRight = 0
            }
        ]
        { src = url
        , description = description
        }


viewDetails : InstalledMod -> Element Msg
viewDetails mod =
    column
        [ width (px 250)
        , height fill
        , alignBottom
        , centerX
        , moveUp 4
        , paddingEach { edges | top = 10, bottom = 4 }
        , Background.color colors.background
        , Border.rounded 8
        , Border.shadow
            { offset = ( 0, -2 )
            , size = 0.1
            , blur = 4
            , color = colors.backgroundDark
            }
        ]
        [ viewName mod.name
        , viewUninstallButton mod.id
        ]


viewName : String -> Element msg
viewName name =
    el
        [ centerX
        , height fill
        , Font.color colors.fontLight
        ]
        (text (String.ellipsis 28 name))


viewUninstallButton : String -> Element Msg
viewUninstallButton modId =
    button [ width (px 50), centerX ]
        { onPress = Just (UninstallMod modId)
        , label =
            image [ height (px 26) ]
                { src = "/assets/icons/uninstall.svg"
                , description = "Uninstall mod"
                }
        }
