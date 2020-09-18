module Models exposing
    ( InstalledMod
    , Thumbnail
    , installedModDecoder
    , thumbnailDecoder
    )

import Json.Decode as Decode exposing (Decoder, string)
import Json.Decode.Pipeline exposing (hardcoded, required)
import Progress exposing (Progress)



-- MODELS


type alias InstalledMod =
    { progress : Progress Float
    , id : String
    , name : String
    , versionDate : String
    , fileName : String
    , image : Thumbnail
    }


type alias Thumbnail =
    { url : String
    , description : String
    }



-- DECODERS


installedModDecoder : Decoder InstalledMod
installedModDecoder =
    Decode.succeed InstalledMod
        |> hardcoded Progress.Succeeded
        |> required "id" string
        |> required "name" string
        |> required "versionDate" string
        |> required "fileName" string
        |> required "image" thumbnailDecoder


thumbnailDecoder : Decoder Thumbnail
thumbnailDecoder =
    Decode.succeed Thumbnail
        |> required "url" string
        |> required "description" string
