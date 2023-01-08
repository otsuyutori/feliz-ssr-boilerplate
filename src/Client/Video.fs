module Client.Video

open Feliz
open Client.Component

let Video (number : int, videoId:string) =
    Html.div 
        [
            Html.div [Components.Counter(number)]
            Html.div [Components.MyReactYouTube(videoId)]
        ]