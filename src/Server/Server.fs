module Server.Main

open System

open System.IO
open System.Threading.Tasks
open Shared.Types

open Saturn

open Thoth.Json.Net

open Giraffe.Core

open Feliz.ViewEngine

open Microsoft.AspNetCore.Http

type Env =
    | Development
    | Production

let getEnv env =
    match env with
    | "Development" -> Development
    | "Production" -> Production
    | _ -> Development

let port = 8080

// let baseUrls env =
//     match env with
//     | Development -> "http://localhost:" + port.ToString()
//     | Production -> "http://localhost"

let staticBase env =
    match env with
    | Development -> Path.Combine(__SOURCE_DIRECTORY__,"..","Client/public")
    | Production -> Path.Combine(__SOURCE_DIRECTORY__,"../..","wwwroot")

let env = getEnv (Environment.GetEnvironmentVariable( "ASPNETCORE_ENVIRONMENT" ))

let staticPath = staticBase env
//let baseUrl = baseUrls env
let baseUrl = "http://localhost:8080"

let initState: Model = {
  counter = Some 42
}
let getInitCounter () : Task<Model> = task { return initState }

let felizTemplate =
  Html.html [
    Html.head
      [
      Html.link
        [
          prop.rel "stylesheet"
          prop.href "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css"
        ]
      Html.link
        [
          prop.rel "stylesheet"
          prop.href (baseUrl + "/index.css")
        ]
      ]
    Html.body
      [
        Html.div
          [
            prop.id "feliz-app"
          ]
        Html.script
          [ prop.text """var __INIT_STATE__ = __init_state__""" ]
        Html.script [ prop.src (baseUrl + "/vendors.js") ]
        Html.script [ prop.src (baseUrl + "/app.js") ]
      ]
  ]

let stateJson = // Serialize twice to output json as js string in html
  Encode.Auto.toString(0, initState)|> Encode.string |> Encode.toString 0

let felizView reactHtml =
    let str =
        Render.htmlView(reactHtml : ReactElement).Replace("__init_state__", stateJson)
    let renderFelizHandler (next : HttpFunc) (ctx : HttpContext) =
        (htmlString str next ctx)

    renderFelizHandler


let defaultView' = router {
    get "/" (setHttpHeader "Cache-Control" "no-cache"  >=> felizView felizTemplate)
    get "/index.html" (redirectTo false "/")
    get "/default.html" (redirectTo false "/")
}


let app = application {
    url "http://0.0.0.0:8080"
    use_static staticPath
    use_router defaultView'
}

run app
