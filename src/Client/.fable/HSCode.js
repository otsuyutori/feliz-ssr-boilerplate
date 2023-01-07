import { Auto_generateBoxedDecoder_79988AEF, fromString } from "./fable_modules/Thoth.Json.9.0.0/Decode.fs.js";
import { uncurry } from "./fable_modules/fable-library.3.7.2/Util.js";
import { Model_get_Empty, Model$reflection } from "./Shared/Types.js";
import { some } from "./fable_modules/fable-library.3.7.2/Option.js";
import { render } from "react-dom";
import { createElement } from "react";
import { Router } from "./HSCode/Router.js";

export function init() {
    let matchValue;
    const json = window.__INIT_STATE__;
    matchValue = fromString(uncurry(2, Auto_generateBoxedDecoder_79988AEF(Model$reflection(), void 0, void 0)), json);
    if (matchValue.tag === 1) {
        console.error(some("Cannot decode init state"), matchValue.fields[0], window.__INIT_STATE__);
        return Model_get_Empty();
    }
    else {
        return matchValue.fields[0];
    }
}

export const model = init();

render(createElement(Router, null), document.getElementById("feliz-app"));

//# sourceMappingURL=HSCode.js.map
