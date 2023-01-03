import { Record, toString } from "../fable_modules/fable-library.3.7.2/Types.js";
import { value } from "../fable_modules/fable-library.3.7.2/Option.js";
import { empty, ofArray, map, ofArrayWithTail, singleton, isEmpty, foldBack } from "../fable_modules/fable-library.3.7.2/List.js";
import { Component } from "react";
import * as react from "react";
import { array_type, class_type, record_type, string_type } from "../fable_modules/fable-library.3.7.2/Reflection.js";
import { printf, toText } from "../fable_modules/fable-library.3.7.2/String.js";

export function show(_arg1) {
    if (_arg1 == null) {
        return "Loading...";
    }
    else {
        return toString(value(_arg1));
    }
}

export const safeComponents = (() => {
    let components;
    const children_2 = foldBack((x, _arg1) => (isEmpty(_arg1) ? singleton(x) : ofArrayWithTail([x, ", "], _arg1)), map((tupledArg) => react.createElement("a", {
        href: tupledArg[1],
    }, tupledArg[0]), ofArray([["Giraffe", "https://github.com/giraffe-fsharp/Giraffe"], ["Fable", "http://fable.io"], ["Elmish", "https://fable-elmish.github.io/"]])), empty());
    components = react.createElement("span", {}, ...children_2);
    const children_7 = [react.createElement("strong", {}, "SAFE Template"), " powered by: ", components];
    return react.createElement("p", {}, ...children_7);
})();

export class MyProp extends Record {
    constructor(text) {
        super();
        this.text = text;
    }
}

export function MyProp$reflection() {
    return record_type("Shared.View.MyProp", [], MyProp, () => [["text", string_type]]);
}

export class MyState extends Record {
    constructor(text) {
        super();
        this.text = text;
    }
}

export function MyState$reflection() {
    return record_type("Shared.View.MyState", [], MyState, () => [["text", string_type]]);
}

export class MyReactComp extends Component {
    constructor(initProps) {
        super(initProps);
        this.state = (new MyState("my state"));
    }
    render() {
        let children, arg20, arg10, children_2;
        const x = this;
        const children_4 = [(children = [(arg20 = (x.state).text, (arg10 = (x.props).text, toText(printf("prop: %s state: %s"))(arg10)(arg20)))], react.createElement("div", {}, ...children)), (children_2 = [Array.prototype.concat(x.props.children || [])], react.createElement("div", {}, ...children_2))];
        return react.createElement("div", {
            className: "class-comp children-comp",
        }, ...children_4);
    }
}

export function MyReactComp$reflection() {
    return class_type("Shared.View.MyReactComp", void 0, MyReactComp, class_type("Fable.React.Component`2", [MyProp$reflection(), MyState$reflection()]));
}

export function MyReactComp_$ctor_ZFF22918(initProps) {
    return new MyReactComp(initProps);
}

export class FnCompProps extends Record {
    constructor(text) {
        super();
        this.text = text;
    }
}

export function FnCompProps$reflection() {
    return record_type("Shared.View.FnCompProps", [], FnCompProps, () => [["text", string_type]]);
}

export function fnComp(props) {
    let children;
    const children_2 = [(children = [toText(printf("prop: %s"))(props.text)], react.createElement("span", {}, ...children))];
    return react.createElement("div", {
        className: "fn-comp",
    }, ...children_2);
}

export class FnCompWithChildrenProps extends Record {
    constructor(children, text) {
        super();
        this.children = children;
        this.text = text;
    }
}

export function FnCompWithChildrenProps$reflection() {
    return record_type("Shared.View.FnCompWithChildrenProps", [], FnCompWithChildrenProps, () => [["children", array_type(class_type("Fable.React.ReactElement"))], ["text", string_type]]);
}

export function fnCompWithChildren(props) {
    let children;
    const children_4 = [(children = [toText(printf("prop: %s"))(props.text)], react.createElement("div", {}, ...children)), react.createElement("div", {}, props.children)];
    return react.createElement("div", {
        className: "fn-comp children-comp",
    }, ...children_4);
}

//# sourceMappingURL=View.js.map
