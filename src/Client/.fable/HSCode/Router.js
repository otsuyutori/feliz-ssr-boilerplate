import { useFeliz_React__React_useState_Static_1505 } from "../fable_modules/Feliz.1.68.0/React.fs.js";
import { Route_$007CInt$007C_$007C, RouterModule_router, RouterModule_urlSegments } from "../fable_modules/Feliz.Router.3.10.0/Router.fs.js";
import { createObj } from "../fable_modules/fable-library.3.7.2/Util.js";
import { singleton, delay, toList } from "../fable_modules/fable-library.3.7.2/Seq.js";
import { ofArray, tail, head, isEmpty } from "../fable_modules/fable-library.3.7.2/List.js";
import { createElement } from "react";
import * as react from "react";
import { Components_Counter_Z524259A4 } from "./Component.js";
import { MyReactYouTube } from "../../Components/youtube.jsx";
import { printf, toText } from "../fable_modules/fable-library.3.7.2/String.js";

export function Router() {
    let elements;
    const patternInput = useFeliz_React__React_useState_Static_1505(RouterModule_urlSegments(window.location.hash, 1));
    const currentUrl = patternInput[0];
    return RouterModule_router(createObj(ofArray([["onUrlChanged", patternInput[1]], (elements = toList(delay(() => {
        let activePatternResult14871, userId, value_1;
        return (!isEmpty(currentUrl)) ? ((head(currentUrl) === "suggest") ? (isEmpty(tail(currentUrl)) ? singleton(createElement(Components_Counter_Z524259A4, {
            init: 42,
        })) : ((!isEmpty(currentUrl)) ? ((head(currentUrl) === "youtube") ? (isEmpty(tail(currentUrl)) ? singleton(createElement(MyReactYouTube, {
            videoId: "ujLBD9pFPtY",
        })) : singleton(createElement("h1", {
            children: ["Not found"],
        }))) : singleton(createElement("h1", {
            children: ["Not found"],
        }))) : singleton(createElement("h1", {
            children: ["Not found"],
        })))) : ((head(currentUrl) === "master") ? ((!isEmpty(tail(currentUrl))) ? ((activePatternResult14871 = Route_$007CInt$007C_$007C(head(tail(currentUrl))), (activePatternResult14871 != null) ? (isEmpty(tail(tail(currentUrl))) ? ((userId = (activePatternResult14871 | 0), singleton((value_1 = toText(printf("User ID %d"))(userId), createElement("h1", {
            children: [value_1],
        }))))) : ((!isEmpty(currentUrl)) ? ((head(currentUrl) === "youtube") ? (isEmpty(tail(currentUrl)) ? singleton(createElement(MyReactYouTube, {
            videoId: "ujLBD9pFPtY",
        })) : singleton(createElement("h1", {
            children: ["Not found"],
        }))) : singleton(createElement("h1", {
            children: ["Not found"],
        }))) : singleton(createElement("h1", {
            children: ["Not found"],
        })))) : ((!isEmpty(currentUrl)) ? ((head(currentUrl) === "youtube") ? (isEmpty(tail(currentUrl)) ? singleton(createElement(MyReactYouTube, {
            videoId: "ujLBD9pFPtY",
        })) : singleton(createElement("h1", {
            children: ["Not found"],
        }))) : singleton(createElement("h1", {
            children: ["Not found"],
        }))) : singleton(createElement("h1", {
            children: ["Not found"],
        }))))) : ((!isEmpty(currentUrl)) ? ((head(currentUrl) === "youtube") ? (isEmpty(tail(currentUrl)) ? singleton(createElement(MyReactYouTube, {
            videoId: "ujLBD9pFPtY",
        })) : singleton(createElement("h1", {
            children: ["Not found"],
        }))) : singleton(createElement("h1", {
            children: ["Not found"],
        }))) : singleton(createElement("h1", {
            children: ["Not found"],
        })))) : ((!isEmpty(currentUrl)) ? ((head(currentUrl) === "youtube") ? (isEmpty(tail(currentUrl)) ? singleton(createElement(MyReactYouTube, {
            videoId: "ujLBD9pFPtY",
        })) : singleton(createElement("h1", {
            children: ["Not found"],
        }))) : singleton(createElement("h1", {
            children: ["Not found"],
        }))) : singleton(createElement("h1", {
            children: ["Not found"],
        }))))) : singleton(createElement("h1", {
            children: ["Index"],
        }));
    })), ["application", react.createElement(react.Fragment, {}, ...elements)])])));
}

//# sourceMappingURL=Router.js.map
