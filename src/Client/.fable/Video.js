import { createElement } from "react";
import { Components_Counter_Z524259A4 } from "./Components/Component.js";
import { ofArray, singleton } from "./fable_modules/fable-library.3.7.2/List.js";
import { Interop_reactApi } from "./fable_modules/Feliz.1.68.0/Interop.fs.js";
import { MyReactYouTube } from "../Components/youtube.jsx";

export function Video(number, videoId) {
    let children, children_2;
    const children_4 = ofArray([(children = singleton(createElement(Components_Counter_Z524259A4, {
        init: number,
    })), createElement("div", {
        children: Interop_reactApi.Children.toArray(Array.from(children)),
    })), (children_2 = singleton(createElement(MyReactYouTube, {
        videoId: videoId,
    })), createElement("div", {
        children: Interop_reactApi.Children.toArray(Array.from(children_2)),
    }))]);
    return createElement("div", {
        children: Interop_reactApi.Children.toArray(Array.from(children_4)),
    });
}

//# sourceMappingURL=Video.js.map
