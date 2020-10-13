port module Main exposing (main)

import Browser exposing (Document, UrlRequest)
import Browser.Navigation as Nav
import Context exposing (Context)
import Element exposing (..)
import Element.Background as Background
import Element.Events as Events exposing (onClick)
import Element.Font as Font
import Element.Input exposing (button)
import Element.Lazy exposing (lazy, lazy2)
import Html.Attributes exposing (class)
import Html.Events exposing (onMouseOver)
import Json.Decode as Decode exposing (Decoder, list, string)
import Json.Decode.Pipeline exposing (required)
import List.Extra as List
import Models exposing (InstalledMod, installedModDecoder)
import Page.Installed as Installed
import Page.Search as Search
import Page.Welcome as Welcome
import Progress
import Route exposing (Route)
import Styles exposing (colors, edges, sizes)
import Url as Url exposing (Protocol(..), Url)


main : Program (Maybe String) Model Msg
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        , onUrlRequest = ClickedLink
        , onUrlChange = ChangedUrl
        }



-- PORTS


port sendMinimize : () -> Cmd msg


port sendMaximize : () -> Cmd msg


port sendExit : () -> Cmd msg


port updateApp : () -> Cmd msg


port changedUrl : (String -> msg) -> Sub msg


port downloadProgress : ({ id : String, percentage : Float } -> msg) -> Sub msg


port updateAvailable : (() -> msg) -> Sub msg


port modUninstalled : (String -> msg) -> Sub msg



-- MODEL


init : Maybe String -> Url -> Nav.Key -> ( Model, Cmd Msg )
init flags url navKey =
    let
        initialContext =
            case flags of
                Just flagsJson ->
                    decodeFlags flagsJson

                Nothing ->
                    Flags "" []

        initialModel =
            { route = Route.parseUrl urlIntercept
            , page = None
            , navKey = navKey
            , context = initialContext
            , isUpdateAvailable = False
            }

        urlIntercept =
            case initialContext.modPath of
                "" ->
                    { url | path = "/welcome" }

                _ ->
                    url
    in
    initCurrentPage ( initialModel, Cmd.none )


decodeFlags : String -> Flags
decodeFlags flagsJson =
    case Decode.decodeString flagsDecoder flagsJson of
        Ok decodedFlags ->
            { modPath = decodedFlags.modPath
            , installedMods = decodedFlags.installedMods
            }

        Err _ ->
            { modPath = ""
            , installedMods = []
            }


flagsDecoder : Decoder Flags
flagsDecoder =
    Decode.succeed Flags
        |> required "modPath" string
        |> required "installedMods" (list installedModDecoder)


initCurrentPage : ( Model, Cmd Msg ) -> ( Model, Cmd Msg )
initCurrentPage ( model, existingCmds ) =
    let
        ( currentPage, mappedPageCmds ) =
            case model.route of
                Route.Search ->
                    let
                        ( pageModel, pageCmds ) =
                            Search.init
                    in
                    ( SearchPage pageModel, Cmd.map SearchPageMsg pageCmds )

                Route.Welcome ->
                    let
                        ( pageModel, pageCmds ) =
                            Welcome.init
                    in
                    ( WelcomePage pageModel, Cmd.map WelcomePageMsg pageCmds )

                Route.Installed ->
                    let
                        ( pageModel, pageCmds ) =
                            Installed.init
                    in
                    ( InstalledPage pageModel, Cmd.map InstalledPageMsg pageCmds )
    in
    ( { model | page = currentPage }
    , Cmd.batch [ existingCmds, mappedPageCmds ]
    )


type alias Flags =
    { modPath : String
    , installedMods : List InstalledMod
    }


type alias Model =
    { route : Route
    , page : Page
    , navKey : Nav.Key
    , context : Context
    , isUpdateAvailable : Bool
    }



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    let
        pageSubscriptions =
            case model.page of
                WelcomePage pageModel ->
                    Sub.map WelcomePageMsg (Welcome.subscriptions pageModel)

                SearchPage pageModel ->
                    Sub.map SearchPageMsg (Search.subscriptions pageModel)

                _ ->
                    Sub.none
    in
    Sub.batch
        [ pageSubscriptions
        , changedUrl (toUrl >> ChangedUrl)
        , downloadProgress SetDownloadProgress
        , updateAvailable (always UpdateAvailable)
        , modUninstalled RemoveInstalledMod
        ]


toUrl : String -> Url
toUrl string =
    let
        maybeUrl =
            Url.fromString string
    in
    case maybeUrl of
        Just url ->
            url

        Nothing ->
            { protocol = Http
            , host = ""
            , port_ = Nothing
            , path = ""
            , query = Nothing
            , fragment = Nothing
            }



-- UPDATE


type Msg
    = WelcomePageMsg Welcome.Msg
    | SearchPageMsg Search.Msg
    | InstalledPageMsg Installed.Msg
    | ChangedUrl Url
    | ClickedLink UrlRequest
    | Minimize
    | Maximize
    | Exit
    | SetDownloadProgress { id : String, percentage : Float }
    | UpdateAvailable
    | UpdateApp
    | RemoveInstalledMod String


type Page
    = None
    | WelcomePage Welcome.Model
    | SearchPage Search.Model
    | InstalledPage Installed.Model


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    let
        context =
            model.context
    in
    case ( msg, model.page ) of
        ( WelcomePageMsg pageMsg, WelcomePage pageModel ) ->
            let
                ( updatedContext, updatedPageModel, updatedCmd ) =
                    Welcome.update context pageMsg pageModel
            in
            ( { model
                | page = WelcomePage updatedPageModel
                , context = updatedContext
              }
            , Cmd.map WelcomePageMsg updatedCmd
            )

        ( SearchPageMsg pageMsg, SearchPage pageModel ) ->
            let
                ( updatedContext, updatedPageModel, updatedCmd ) =
                    Search.update context pageMsg pageModel
            in
            ( { model
                | page = SearchPage updatedPageModel
                , context = updatedContext
              }
            , Cmd.map SearchPageMsg updatedCmd
            )

        ( InstalledPageMsg pageMsg, InstalledPage pageModel ) ->
            let
                ( updatedContext, updatedPageModel, updatedCmd ) =
                    Installed.update context pageMsg pageModel
            in
            ( { model
                | page = InstalledPage updatedPageModel
                , context = updatedContext
              }
            , Cmd.map InstalledPageMsg updatedCmd
            )

        ( ClickedLink urlRequest, _ ) ->
            case urlRequest of
                Browser.Internal url ->
                    ( model
                    , Nav.pushUrl model.navKey (Url.toString url)
                    )

                Browser.External _ ->
                    ( model
                    , Cmd.none
                    )

        ( ChangedUrl url, _ ) ->
            let
                newRoute =
                    Route.parseUrl url
            in
            ( { model | route = newRoute }, Cmd.none )
                |> initCurrentPage

        ( Minimize, _ ) ->
            ( model, sendMinimize () )

        ( Maximize, _ ) ->
            ( model, sendMaximize () )

        ( Exit, _ ) ->
            ( model, sendExit () )

        ( SetDownloadProgress { id, percentage }, _ ) ->
            let
                progress =
                    if percentage == 1.0 then
                        Progress.Succeeded

                    else
                        Progress.Loading percentage

                updateInstalledMod mod =
                    if mod.id == id then
                        { mod | progress = progress }

                    else
                        mod

                updatedContext =
                    { context
                        | installedMods = List.map updateInstalledMod context.installedMods
                    }
            in
            ( { model | context = updatedContext }, Cmd.none )

        ( UpdateAvailable, _ ) ->
            ( { model | isUpdateAvailable = True }, Cmd.none )

        ( UpdateApp, _ ) ->
            ( model, updateApp () )

        ( RemoveInstalledMod id, _ ) ->
            let
                updatedContext =
                    { context
                        | installedMods = List.filter (\mod -> mod.id /= id) context.installedMods
                    }
            in
            ( { model | context = updatedContext }, Cmd.none )

        ( _, _ ) ->
            ( model, Cmd.none )



-- VIEW


view : Model -> Document Msg
view model =
    { title = "Block Loader"
    , body =
        [ Element.layout
            [ Background.color colors.background
            , Font.color colors.font
            , Font.family
                [ Font.typeface "Quicksand"
                , Font.sansSerif
                ]
            ]
            (column
                [ width fill
                , height fill
                ]
                [ viewTitleBar
                , lazy2 viewHeader model.page model.isUpdateAvailable
                , lazy2 viewPage model.context model.page
                ]
            )
        ]
    }


viewTitleBar : Element Msg
viewTitleBar =
    el
        [ width fill
        , Background.color colors.backgroundColorfulDark
        , htmlAttribute (class "draggable")
        ]
        (row
            [ height (px 20)
            , alignRight
            ]
            [ viewTitleBarButton colors.background
                [ Events.onMouseUp Minimize ]
                (image [ height (px 12), centerX, centerY ]
                    { src = "/assets/icons/minimize.svg"
                    , description = "Minimize the window"
                    }
                )
            , viewTitleBarButton colors.background
                [ Events.onMouseUp Maximize ]
                (image [ height (px 12), centerX, centerY ]
                    { src = "/assets/icons/maximize.svg"
                    , description = "Maximize or restore the window"
                    }
                )
            , viewTitleBarButton colors.danger
                [ Events.onMouseUp Exit ]
                (image [ height (px 16), centerX, centerY ]
                    { src = "/assets/icons/exit.svg"
                    , description = "Exit the app"
                    }
                )
            ]
        )


viewTitleBarButton : Color -> List (Attribute msg) -> Element msg -> Element msg
viewTitleBarButton hoverColor attrs children =
    el
        (attrs
            ++ [ height fill
               , width (px 25)
               , mouseOver [ Background.color hoverColor ]
               , htmlAttribute (class "non-draggable")
               , pointer
               ]
        )
        children


viewHeader : Page -> Bool -> Element Msg
viewHeader page isUpdateAvailable =
    case page of
        WelcomePage _ ->
            none

        _ ->
            el
                [ Background.color colors.backgroundColorful
                , width fill
                ]
                (el [ centerX ]
                    (row
                        [ height fill
                        , width sizes.content
                        , centerY
                        , spaceEvenly
                        , paddingEach { edges | top = 12, bottom = 12 }
                        ]
                        [ viewLogo
                        , row [ spacing 12 ]
                            [ viewUpdateButton |> onlyIf isUpdateAvailable
                            , viewSearchLink
                            , viewInstalledLink
                            , viewSettingsLink
                            ]
                        ]
                    )
                )


viewLogo : Element msg
viewLogo =
    link []
        { url = "/search"
        , label =
            row
                [ Font.size 28
                , spacing 12
                ]
                [ image [ height (px 36) ]
                    { src = "/assets/icons/logo.svg"
                    , description = "The app logo"
                    }
                , el [ height fill ]
                    (column
                        [ height fill
                        , centerY
                        , Font.size 18
                        , Font.color colors.accent
                        ]
                        [ el
                            [ Font.alignLeft
                            , Font.extraBold
                            ]
                            (text "Block")
                        , el
                            [ Font.alignLeft
                            ]
                            (text "Loader")
                        ]
                    )
                ]
        }


viewUpdateButton : Element Msg
viewUpdateButton =
    button []
        { onPress = Just UpdateApp
        , label =
            image
                [ height (px 22)
                , paddingEach { edges | right = 8 }
                ]
                { src = "/assets/icons/update.svg"
                , description = "Update available icon"
                }
        }


viewInstalledLink : Element msg
viewInstalledLink =
    link []
        { url = "/installed"
        , label =
            image [ height (px 22) ]
                { src = "/assets/icons/th-list.svg"
                , description = "Installed mods icon"
                }
        }


viewSettingsLink : Element msg
viewSettingsLink =
    link []
        { url = "/settings"
        , label =
            image [ height (px 22) ]
                { src = "/assets/icons/settings.svg"
                , description = "Settings icon"
                }
        }


viewSearchLink : Element msg
viewSearchLink =
    link []
        { url = "/search"
        , label =
            image [ height (px 22) ]
                { src = "./assets/icons/search.svg"
                , description = "Search icon"
                }
        }


viewPage : Context -> Page -> Element Msg
viewPage context page =
    case page of
        None ->
            none

        SearchPage model ->
            Search.view context model
                |> Element.map SearchPageMsg

        WelcomePage model ->
            Welcome.view context model
                |> Element.map WelcomePageMsg

        InstalledPage model ->
            Installed.view context model
                |> Element.map InstalledPageMsg



-- EXTRAS


onlyIf : Bool -> Element msg -> Element msg
onlyIf condition children =
    if condition then
        children

    else
        none
