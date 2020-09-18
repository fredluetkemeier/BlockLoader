module Page.Installed exposing (Model, Msg, init, subscriptions, update, view)

import Context exposing (Context)
import Element exposing (..)
import Element.Keyed as Keyed
import Models exposing (InstalledMod)
import Styles exposing (sizes)



-- PORTS
-- MODEl


init : ( Model, Cmd Msg )
init =
    let
        initialModel =
            {}
    in
    ( initialModel, Cmd.none )


type alias Model =
    {}



-- UPDATE


type Msg
    = NoOp


update : Context -> Msg -> Model -> ( Context, Model, Cmd Msg )
update context msg model =
    case msg of
        NoOp ->
            ( context, model, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none



-- VIEW


view : Context -> Model -> Element msg
view context model =
    column [ width sizes.content, centerX ]
        [ viewHeading
        , viewInstalledMods context.installedMods
        ]


viewHeading : Element msg
viewHeading =
    text "Heading"


viewInstalledMods : List InstalledMod -> Element msg
viewInstalledMods installedMods =
    Keyed.row [] <|
        List.map viewKeyedMod installedMods


viewKeyedMod : InstalledMod -> ( String, Element msg )
viewKeyedMod mod =
    ( mod.id, viewMod mod )


viewMod : InstalledMod -> Element msg
viewMod mod =
    text mod.name
