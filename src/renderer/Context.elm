module Context exposing (..)

import Models exposing (InstalledMod)


type alias Context =
    { modPath : String
    , installedMods : List InstalledMod
    }
