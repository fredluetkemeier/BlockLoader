port module Ports exposing (..)


port choosePath : () -> Cmd msg


port pathChosen : (String -> msg) -> Sub msg


port savePath : String -> Cmd msg
