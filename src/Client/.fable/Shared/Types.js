import { Record } from "../fable_modules/fable-library.3.7.2/Types.js";
import { record_type, string_type, option_type, int32_type } from "../fable_modules/fable-library.3.7.2/Reflection.js";

export class Model extends Record {
    constructor(counter, videoId) {
        super();
        this.counter = counter;
        this.videoId = videoId;
    }
}

export function Model$reflection() {
    return record_type("Shared.Types.Model", [], Model, () => [["counter", option_type(int32_type)], ["videoId", option_type(string_type)]]);
}

export function Model_get_Empty() {
    return new Model(void 0, void 0);
}

//# sourceMappingURL=Types.js.map
