module Progress exposing (Progress(..), progressBar)

import Element exposing (..)
import Element.Border as Border
import Html.Attributes
import String exposing (fromFloat)
import Styles exposing (colors)


type Progress a
    = NotStarted
    | Loading a
    | Succeeded
    | Errored


progressBar : Float -> Color -> Element msg
progressBar fillAmount color =
    let
        fillColorRgb =
            colorToHtmlString color

        backgroundColorRgb =
            colorToHtmlString colors.backgroundMedium

        percentage =
            fillAmount * 100

        fillGradientAttr =
            "linear-gradient(to right, "
                ++ fillColorRgb
                ++ ", "
                ++ fillColorRgb
                ++ String.fromFloat percentage
                ++ "%, "
                ++ backgroundColorRgb
                ++ " 0%)"
    in
    el
        [ width fill
        , height (px 10)
        , centerX
        , centerY
        , Border.rounded 10
        , Html.Attributes.style "background" fillGradientAttr
            |> Element.htmlAttribute
        ]
        none


colorToHtmlString : Color -> String
colorToHtmlString color =
    let
        { red, green, blue } =
            toRgb color

        colors =
            [ red, green, blue ]
                |> List.map (\percentage -> percentage * 255)
                |> List.map fromFloat
                |> String.join " "
    in
    "rgb(" ++ colors ++ ")"
