module Client.Video

open Feliz
open Client.Component

[<ReactComponent>]
let Video (number : int, videoId:string) =
    let (text, setText) = React.useState("")
    Html.div 
        [
            Html.div [prop.text text]
            Html.div [Components.MUITextField("tf-1", "何か入力してください", text, setText)]
            Html.div [Components.MUIButton("Hello", "contained")]
            Html.div [Components.Counter(number)]
            Html.div [Components.MyReactYouTube(videoId)]
        ]