import { useFeliz_React__React_useState_Static_1505 } from "./fable_modules/Feliz.1.68.0/React.fs.js";
import { RouterModule_router, RouterModule_urlSegments } from "./fable_modules/Feliz.Router.3.10.0/Router.fs.js";
import { createObj } from "./fable_modules/fable-library.3.7.2/Util.js";
import { singleton, delay, toList } from "./fable_modules/fable-library.3.7.2/Seq.js";
import { ofArray, tail, head, isEmpty } from "./fable_modules/fable-library.3.7.2/List.js";
import { Video } from "./Video.js";
import { value as value_2 } from "./fable_modules/fable-library.3.7.2/Option.js";
import { createElement } from "react";
import * as react from "react";

export function Router(model) {
    let elements;
    const patternInput = useFeliz_React__React_useState_Static_1505(RouterModule_urlSegments(window.location.hash, 1));
    const currentUrl = patternInput[0];
    return RouterModule_router(createObj(ofArray([["onUrlChanged", patternInput[1]], (elements = toList(delay(() => ((!isEmpty(currentUrl)) ? ((head(currentUrl) === "youtube") ? (isEmpty(tail(currentUrl)) ? singleton(Video(value_2(model.counter), value_2(model.videoId))) : singleton(createElement("h1", {
        children: ["Not found"],
    }))) : singleton(createElement("h1", {
        children: ["Not found"],
    }))) : singleton(createElement("h1", {
        children: ["Index"],
    }))))), ["application", react.createElement(react.Fragment, {}, ...elements)])])));
}

//# sourceMappingURL=Router.js.map
