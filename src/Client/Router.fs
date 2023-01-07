module Client.HSCode

open Feliz
open Feliz.Router
open Client.HSCode.Component

[<ReactComponent>]
let Router() =
    let (currentUrl, updateUrl) = React.useState(Router.currentUrl())
    React.router [
        router.onUrlChanged updateUrl
        router.children [
            match currentUrl with
            | [ ] -> Html.h1 "Index"
            | ["youtube"] -> Components.MyReactYouTube("ujLBD9pFPtY")
            | otherwise -> Html.h1 "Not found"
        ]
    ]