module Models exposing (InstalledMod, SavedMod, Thumbnail, thumbnailDecoder)

import Element.Region exposing (description)
import Json.Decode as Decode exposing (Decoder, string)
import Json.Decode.Pipeline exposing (required)
import Progress exposing (Progress)



-- MODELS


type alias SavedMod =
    { id : String
    , name : String
    , versionDate : String
    , fileName : String
    , image : Thumbnail
    }


type alias InstalledMod =
    { id : String
    , progress : Progress Float
    }


type alias Thumbnail =
    { url : String
    , description : String
    }



-- DECODERS


thumbnailDecoder : Decoder Thumbnail
thumbnailDecoder =
    Decode.succeed Thumbnail
        |> required "url" string
        |> required "description" string
