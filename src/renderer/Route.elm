module Route exposing (Route(..), parseUrl)

import Url exposing (Url)
import Url.Parser exposing (..)


type Route
    = Search


parseUrl : Url -> Route
parseUrl url =
    case parse matchRoute url of
        Just route ->
            route

        Nothing ->
            Search


matchRoute : Parser (Route -> a) a
matchRoute =
    oneOf
        [ map Search top
        , map Search (s "search")
        ]
