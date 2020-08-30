module Main exposing (main)

import Browser exposing (Document, UrlRequest)
import Browser.Navigation as Nav
import Element exposing (..)
import Element.Background as Background
import Element.Font as Font
import Html.Attributes exposing (class, src)
import Page.Search as Search
import Route exposing (Route)
import Styles exposing (colors, edges)
import Url exposing (Url)


main : Program () Model Msg
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = \_ -> Sub.none
        , onUrlRequest = ClickedLink
        , onUrlChange = ChangedUrl
        }


init : () -> Url -> Nav.Key -> ( Model, Cmd Msg )
init _ url navKey =
    let
        model =
            { route = Route.parseUrl url
            , page = SearchPage Search.initialModel
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
                            Search.init
                    in
                    ( SearchPage pageModel, Cmd.map SearchPageMsg pageCmds )
    in
    ( { model | page = currentPage }
    , Cmd.batch [ existingCmds, mappedPageCmds ]
    )



-- MODEL


type alias Model =
    { route : Route
    , page : Page
    , navKey : Nav.Key
    }



-- UPDATE


type Msg
    = ChangedUrl Url
    | ClickedLink UrlRequest
    | SearchPageMsg Search.Msg


type Page
    = SearchPage Search.Model


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case ( msg, model.page ) of
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

                Browser.External url ->
                    ( model
                    , Nav.load url
                    )

        ( ChangedUrl url, _ ) ->
            let
                newRoute =
                    Route.parseUrl url
            in
            ( { model | route = newRoute }, Cmd.none )
                |> initCurrentPage



-- VIEW


view : Model -> Document Msg
view model =
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
                [ width fill ]
                [ viewTitleBar
                , viewHeader
                , viewPage model.page
                ]
            )
        ]
    }


viewTitleBar : Element msg
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
                (image [ height (px 12), centerX, centerY ]
                    { src = "/assets/icons/minimize.svg"
                    , description = "Minimize the window"
                    }
                )
            , viewTitleBarButton colors.background
                (image [ height (px 12), centerX, centerY ]
                    { src = "/assets/icons/maximize.svg"
                    , description = "Maximize the window"
                    }
                )
            , viewTitleBarButton colors.danger
                (image [ height (px 16), centerX, centerY ]
                    { src = "/assets/icons/exit.svg"
                    , description = "Exit the app"
                    }
                )
            ]
        )


viewTitleBarButton : Color -> Element msg -> Element msg
viewTitleBarButton hoverColor children =
    el
        [ height fill
        , width (px 25)
        , mouseOver [ Background.color hoverColor ]
        , htmlAttribute (class "non-draggable")
        , pointer
        ]
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
                , width (px 800)
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
        SearchPage model ->
            Search.view model
                |> Element.map SearchPageMsg
