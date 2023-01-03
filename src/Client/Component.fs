module Client.Component

open Feliz

type Components =
    /// <summary>
    /// Hello World
    /// </summary>
    [<ReactComponent>]
    static member HelloWorld() = Html.h1 "Hello World"

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