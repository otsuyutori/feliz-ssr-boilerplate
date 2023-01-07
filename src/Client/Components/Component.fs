module Client.HSCode.Component

open Feliz

type Components =

    /// <summary>
    /// Counter
    /// </summary>
    [<ReactComponent>]
    static member Counter(init:int) =
        let (count, setCount) = React.useState(init)
        Html.div [
            Html.h1 count
            Html.button [
                prop.onClick (fun _ -> setCount(count + 1))
                prop.text "Increment"
            ]
        ]

    /// <summary>
    /// Import External Component
    /// </summary>
    [<ReactComponent(import = "MyReactYouTube", from = "../Components/youtube.jsx")>]
    static member MyReactYouTube(videoId: string) = React.imported ()