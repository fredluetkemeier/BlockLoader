port module Page.Installed exposing (Model, Msg, init, subscriptions, update, view)

import Context exposing (Context)
import Element exposing (..)
import Element.Background as Background
import Element.Border as Border
import Element.Events as Events
import Element.Font as Font
import Element.Input exposing (button)
import Element.Lazy exposing (lazy, lazy2)
import Html.Attributes exposing (style)
import List.Extra as List
import Models exposing (InstalledMod)
import String.Extra as String
import Styles exposing (colors, edges, sizes)



-- PORTS


port uninstallMod :
    { id : String
    , fileName : String
    }
    -> Cmd msg



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


type DetailsSize
    = Expanded
    | Default



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
            let
                maybeMod =
                    List.find (\mod -> mod.id == id) context.installedMods

                newCmd =
                    case maybeMod of
                        Just mod ->
                            uninstallMod
                                { id = mod.id
                                , fileName = mod.fileName
                                }

                        Nothing ->
                            Cmd.none
            in
            ( context, model, newCmd )



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
        , htmlAttribute (style "height" "calc(100vh - 84px)")
        ]
        [ lazy viewHeading (List.length context.installedMods)
        , lazy2 viewInstalledMods context.installedMods model.inspectedCardId
        ]


viewHeading : Int -> Element Msg
viewHeading modCount =
    el
        [ width fill
        , paddingEach { edges | bottom = 12 }
        , Font.color colors.fontDark
        , Font.size 18
        , Font.center
        , Border.dashed
        , Border.color colors.backgroundLight
        , Border.widthEach { edges | bottom = 2 }
        ]
        (text (String.fromInt modCount ++ " mods installed"))


viewInstalledMods : List InstalledMod -> Maybe String -> Element Msg
viewInstalledMods installedMods inspectedCardId =
    let
        getDetailsSize id =
            case inspectedCardId of
                Nothing ->
                    Default

                Just inspectedId ->
                    if id == inspectedId then
                        Expanded

                    else
                        Default
    in
    el
        [ height fill
        , width fill
        , scrollbarY
        ]
        (wrappedRow
            [ spacing 12
            , paddingEach
                { edges
                    | top = 5
                    , left = 5
                    , bottom = 5
                    , right = 8
                }
            ]
         <|
            List.map
                (\mod -> viewMod (getDetailsSize mod.id) mod)
                installedMods
        )


viewMod : DetailsSize -> InstalledMod -> Element Msg
viewMod detailsSize mod =
    column
        [ height (px 250)
        , width (px 250)
        , Border.rounded 8
        , Border.shadow
            { offset = ( 0, 0 )
            , size = 3.0
            , blur = 3.0
            , color = colors.backgroundDark
            }
        , Background.color colors.backgroundMedium
        , Events.onMouseEnter (FocusCard mod.id)
        , Events.onMouseLeave ClearFocus
        ]
        [ viewImage
            mod.image.description
            mod.image.url
        , viewDetails detailsSize mod
        ]


viewImage : String -> String -> Element msg
viewImage description url =
    image
        [ width fill
        , height fill
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


viewDetails : DetailsSize -> InstalledMod -> Element Msg
viewDetails size mod =
    let
        containerHeight =
            case size of
                Expanded ->
                    150

                Default ->
                    40
    in
    column
        [ width (px 250)
        , height (px containerHeight)
        , alignBottom
        , centerX
        , moveUp 4
        , paddingEach { edges | top = 10, bottom = 4 }
        , Background.color colors.backgroundMedium
        , Border.rounded 8
        , Border.shadow
            { offset = ( 0, -2 )
            , size = 0.6
            , blur = 3
            , color = colors.backgroundDark
            }
        ]
        [ viewName mod.name
        , case size of
            Expanded ->
                viewUninstallButton mod.id

            Default ->
                none
        ]


viewName : String -> Element msg
viewName name =
    el
        [ height fill
        , width fill
        , Font.color colors.fontLight
        , Font.center
        ]
        (text (String.ellipsis 24 name))


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
