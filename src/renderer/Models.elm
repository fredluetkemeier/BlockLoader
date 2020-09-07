module Models exposing (..)

import Progress exposing (Progress)


type alias InstalledMod =
    { id : String
    , progress : Progress Float
    }
