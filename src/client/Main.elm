module Main exposing (main)

import Browser

main : Program () Cmd msg 
main = 
    Browser.element 
    {
        init = init,
        view = view
        update = update,
        subscriptions = \_ -> Sub.none
    }
    