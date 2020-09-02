port module Main exposing (main)

import Browser exposing (Document, UrlRequest)
import Browser.Events as BrowserEvents
import Browser.Navigation as Nav
import Element exposing (..)
import Element.Background as Background
import Element.Events as Events
import Element.Font as Font
import Element.Lazy exposing (lazy)
import Html.Attributes exposing (class)
import Page.Search as Search
import Page.Welcome as Welcome
import Route exposing (Route)
import Styles exposing (colors, edges, sizes)
import Url as Url exposing (Protocol(..), Url)


main : Program Flags Model Msg
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


port changedUrl : (String -> msg) -> Sub msg



-- MODEL


init : Flags -> Url -> Nav.Key -> ( Model, Cmd Msg )
init flags url navKey =
    let
        urlIntercept =
            case flags.modPath of
                "" ->
                    { url | path = "/welcome" }

                _ ->
                    url

        model =
            { modPath = flags.modPath
            , installedMods = flags.installedMods
            , route = Route.parseUrl urlIntercept
            , page = None
            , navKey = navKey
            }
    in
    initCurrentPage ( model, Cmd.none )


initCurrentPage : ( Model, Cmd Msg ) -> ( Model, Cmd Msg )
initCurrentPage ( model, existingCmds ) =
    let
        ( currentPage, mappedPageCmds ) =
            case model.route of
                Route.Search ->
                    let
                        ( pageModel, pageCmds ) =
                            Search.init { installedMods = model.installedMods }
                    in
                    ( SearchPage pageModel, Cmd.map SearchPageMsg pageCmds )

                Route.Welcome ->
                    let
                        ( pageModel, pageCmds ) =
                            Welcome.init
                    in
                    ( WelcomePage pageModel, Cmd.map WelcomePageMsg pageCmds )
    in
    ( { model | page = currentPage }
    , Cmd.batch [ existingCmds, mappedPageCmds ]
    )


type alias Model =
    { modPath : String
    , installedMods : List Mod
    , route : Route
    , page : Page
    , navKey : Nav.Key
    }


type alias Flags =
    { modPath : String
    , installedMods : List Mod
    }


type alias Mod =
    { id : String
    , name : String
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
    = ChangedUrl Url
    | ClickedLink UrlRequest
    | Minimize
    | Maximize
    | Exit
    | WelcomePageMsg Welcome.Msg
    | SearchPageMsg Search.Msg


type Page
    = None
    | WelcomePage Welcome.Model
    | SearchPage Search.Model


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case ( msg, model.page ) of
        ( WelcomePageMsg pageMsg, WelcomePage pageModel ) ->
            let
                ( updatedPageModel, updatedCmd ) =
                    Welcome.update pageMsg pageModel
            in
            ( { model
                | page = WelcomePage updatedPageModel
                , modPath = updatedPageModel.path
              }
            , Cmd.map WelcomePageMsg updatedCmd
            )

        ( SearchPageMsg pageMsg, SearchPage pageModel ) ->
            let
                ( updatedPageModel, updatedCmd ) =
                    Search.update pageMsg pageModel
            in
            ( { model | page = SearchPage updatedPageModel }
            , Cmd.map SearchPageMsg updatedCmd
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

        ( _, _ ) ->
            ( model, Cmd.none )



-- VIEW


view : Model -> Document Msg
view model =
    let
        viewHeaderMaybe =
            case model.page of
                WelcomePage _ ->
                    none

                _ ->
                    viewHeader
    in
    { title = "MPM"
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
                , Element.htmlAttribute (Html.Attributes.style "max-height" "100vh")
                ]
                [ viewTitleBar
                , viewHeaderMaybe
                , lazy viewPage model.page
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


viewHeader : Element msg
viewHeader =
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
                , viewInstalledLink
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
                [ image [ height (px 32) ]
                    { src = "./assets/icons/logo.svg"
                    , description = "The MPM logo"
                    }
                , text "MPM"
                ]
        }


viewInstalledLink : Element msg
viewInstalledLink =
    link []
        { url = "/installed"
        , label =
            image [ height (px 20) ]
                { src = "./assets/icons/th-list.svg"
                , description = "Installed mods icon"
                }
        }


viewPage : Page -> Element Msg
viewPage page =
    case page of
        None ->
            none

        SearchPage model ->
            Search.view model
                |> Element.map SearchPageMsg

        WelcomePage model ->
            Welcome.view model
                |> Element.map WelcomePageMsg
