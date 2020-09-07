module Progress exposing (Progress(..))


type Progress a
    = NotStarted
    | Loading a
    | Succeeded
    | Errored
