module Models exposing (Author, Mod)


type alias Mod =
    { id : String
    , name : String
    , authors : List Author
    }


type alias Author =
    { id : String
    , name : String
    }
