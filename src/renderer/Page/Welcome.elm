module Page.Welcome exposing (Model, Msg, init, update, view)

import Element exposing (..)
import Element.Font as Font
import Styles exposing (edges, sizes)



-- INIT


init : ( Model, Cmd Msg )
init =
    let
        initialModel =
            { path = ""
            }
    in
    ( initialModel, Cmd.none )



-- MODEL


type alias Model =
    { path : String
    }



-- UPDATE


type Msg
    = SetPath String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SetPath path ->
            ( { model | path = path }, Cmd.none )



-- VIEW


view : Model -> Element msg
view model =
    column [ width sizes.content, centerX ]
        [ el [ Font.size 32, paddingEach { edges | top = 50 } ]
            (text "Welcome!")
        , paragraph [ Font.size 18, paddingEach { edges | top = 30 } ]
            [ text "You're seeing this because your "
            , el [ Font.extraBold ] (text "mod path")
            , text " has not been set. Please set it below, so I know where to install mods for you."
            ]
        ]
