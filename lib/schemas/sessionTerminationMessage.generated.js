"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeSessionTerminationMessage = serializeSessionTerminationMessage;
exports.deserializeSessionTerminationMessage = deserializeSessionTerminationMessage;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeSessionTerminationMessage(val) {
    return { ['message']: val.message };
}
function deserializeSessionTerminationMessage(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "SessionTerminationMessage"',
        });
    }
    if (!(val.message == void 0) && !(0, json_js_1.sdIsString)(val.message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "message" of type "SessionTerminationMessage"',
        });
    }
    const message = val.message == void 0 ? void 0 : val.message;
    return { message: message };
}
//# sourceMappingURL=sessionTerminationMessage.generated.js.map