module Client

open Feliz
open Fable.Core.JsInterop
open Thoth.Json
open Client.Component
open Shared.Types

open Browser


let init () =
  let model =
    match Decode.Auto.fromString<Model> window?__INIT_STATE__ with
    | Ok model -> model
    | Error er ->
        console.error("Cannot decode init state", er, window?__INIT_STATE__)
        Model.Empty
  model

let model = init()

ReactDOM.render(
    Components.Counter(model.counter.Value),
    document.getElementById "feliz-app"
)
