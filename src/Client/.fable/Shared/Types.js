import { Record } from "../fable_modules/fable-library.3.7.2/Types.js";
import { record_type, option_type, int32_type } from "../fable_modules/fable-library.3.7.2/Reflection.js";

export class Model extends Record {
    constructor(counter) {
        super();
        this.counter = counter;
    }
}

export function Model$reflection() {
    return record_type("Shared.Types.Model", [], Model, () => [["counter", option_type(int32_type)]]);
}

export function Model_get_Empty() {
    return new Model(void 0);
}

//# sourceMappingURL=Types.js.map
