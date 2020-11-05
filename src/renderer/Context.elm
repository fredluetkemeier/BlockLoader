module Context exposing (Context)

import Models exposing (InstalledMod)


type alias Context =
    { appVersion : String
    , modPath : String
    , installedMods : List InstalledMod
    }
