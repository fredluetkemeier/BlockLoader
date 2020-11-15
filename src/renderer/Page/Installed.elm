port module Page.Installed exposing (Model, Msg, init, subscriptions, update, view)

import Context exposing (Context)
import Element exposing (..)
import Element.Background as Background
import Element.Border as Border
import Element.Events as Events
import Element.Font as Font
import Element.Input as Input exposing (button)
import Element.Lazy exposing (lazy2)
import Html.Attributes exposing (style)
import List.Extra as List
import Models exposing (InstalledMod)
import Ports exposing (modUninstalled)
import String.Extra as String
import Styles exposing (colors, edges, sizes)


init : ( Model, Cmd Msg )
init =
    let
        initialModel =
            { searchTerm = ""
            , filteredMods = []
            , inspectedCardId = Nothing
            }
    in
    ( initialModel, Cmd.none )



-- PORTS


port uninstallMod :
    { id : String
    , fileName : String
    }
    -> Cmd msg



-- MODEL


type alias Model =
    { searchTerm : String
    , filteredMods : List InstalledMod
    , inspectedCardId : Maybe String
    }


type DetailsSize
    = Expanded
    | Default



-- UPDATE


type Msg
    = SearchForMods String
    | FocusCard String
    | ClearFocus
    | UninstallMod String
    | RemoveInstalledMod String


update : Context -> Msg -> Model -> ( Context, Model, Cmd Msg )
update context msg model =
    case msg of
        SearchForMods newSearchTerm ->
            let
                normalize string =
                    string
                        |> String.trim
                        |> String.toLower

                newFilteredMods =
                    List.filter
                        (\mod ->
                            String.contains (normalize newSearchTerm)
                                (normalize mod.name)
                        )
                        context.installedMods
            in
            ( context
            , { model
                | searchTerm = newSearchTerm
                , filteredMods = newFilteredMods
              }
            , Cmd.none
            )

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

        RemoveInstalledMod id ->
            let
                newFilteredMods =
                    model.filteredMods |> List.filter (\mod -> mod.id /= id)
            in
            ( context, { model | filteredMods = newFilteredMods }, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.batch
        [ modUninstalled RemoveInstalledMod
        ]



-- VIEW


view : Context -> Model -> Element Msg
view context model =
    let
        modCount =
            List.length context.installedMods

        modsToShow =
            if model.searchTerm |> String.trim |> String.isEmpty then
                context.installedMods

            else
                model.filteredMods
    in
    column
        [ width sizes.content
        , centerX
        , spacing 20
        , paddingEach { edges | top = 20, bottom = 2 }
        , htmlAttribute (style "height" "calc(100vh - 84px)")
        ]
        [ lazy2 viewHeading model.searchTerm modCount
        , lazy2 viewInstalledMods modsToShow model.inspectedCardId
        ]


viewHeading : String -> Int -> Element Msg
viewHeading searchTerm modCount =
    row
        [ width fill
        , paddingEach { edges | bottom = 16, left = 6, right = 6 }
        , Border.dashed
        , Border.color colors.backgroundLight
        , Border.widthEach { edges | bottom = 2 }
        ]
        [ viewSearchInput searchTerm
        , viewModCount modCount
        ]


viewSearchInput : String -> Element Msg
viewSearchInput searchTerm =
    Input.search
        [ Background.color colors.backgroundLight
        , Border.rounded 4
        , padding 8
        , width (fillPortion 1)
        , Font.color colors.font
        , Font.size 16
        ]
        { onChange = SearchForMods
        , text = searchTerm
        , placeholder =
            Just
                (Input.placeholder
                    [ centerY
                    , height fill
                    , Font.color colors.fontDark
                    , Font.size 16
                    ]
                    (text "Search your installed mods")
                )
        , label = Input.labelHidden "Search your installed mods"
        }


viewModCount : Int -> Element msg
viewModCount count =
    el
        [ alignRight
        , width (fillPortion 1)
        , Font.color colors.fontDark
        , Font.size 18
        , Font.center
        , Font.alignRight
        ]
        (text (String.fromInt count ++ " mods installed"))


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
            [ width fill
            , spacing 14
            , centerX
            , paddingEach
                { edges
                    | top = 4
                    , left = 6
                }
            ]
         <|
            List.map
                (\mod -> viewInstalledMod (getDetailsSize mod.id) mod)
                installedMods
        )


viewInstalledMod : DetailsSize -> InstalledMod -> Element Msg
viewInstalledMod detailsSize mod =
    el
        [ paddingEach { edges | bottom = 6 }
        ]
        (column
            [ height (px 250)
            , width (px 250)
            , centerX
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
        )


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
