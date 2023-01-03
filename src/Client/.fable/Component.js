import { class_type } from "./fable_modules/fable-library.3.7.2/Reflection.js";
import { createElement } from "react";
import { useFeliz_React__React_useState_Static_1505 } from "./fable_modules/Feliz.1.68.0/React.fs.js";
import { ofArray } from "./fable_modules/fable-library.3.7.2/List.js";
import { Interop_reactApi } from "./fable_modules/Feliz.1.68.0/Interop.fs.js";

export class Components {
    constructor() {
    }
}

export function Components$reflection() {
    return class_type("Client.Component.Components", void 0, Components);
}

export function Components_HelloWorld() {
    return createElement("h1", {
        children: ["Hello World"],
    });
}

export function Components_Counter_Z524259A4(components_Counter_Z524259A4InputProps) {
    const patternInput = useFeliz_React__React_useState_Static_1505(components_Counter_Z524259A4InputProps.init);
    const count = patternInput[0] | 0;
    const children = ofArray([createElement("h1", {
        children: [count],
    }), createElement("button", {
        onClick: (_arg1) => {
            patternInput[1](count + 1);
        },
        children: "Increment",
    })]);
    return createElement("div", {
        children: Interop_reactApi.Children.toArray(Array.from(children)),
    });
}

//# sourceMappingURL=Component.js.map
