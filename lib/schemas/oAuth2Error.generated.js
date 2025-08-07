"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeOAuth2Error = serializeOAuth2Error;
exports.deserializeOAuth2Error = deserializeOAuth2Error;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeOAuth2Error(val) {
    return { ['error']: val.error, ['error_description']: val.errorDescription };
}
function deserializeOAuth2Error(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "OAuth2Error"' });
    }
    if (!(val.error == void 0) && !(0, json_js_1.sdIsString)(val.error)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "error" of type "OAuth2Error"',
        });
    }
    const error = val.error == void 0 ? void 0 : val.error;
    if (!(val.error_description == void 0) &&
        !(0, json_js_1.sdIsString)(val.error_description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "error_description" of type "OAuth2Error"',
        });
    }
    const errorDescription = val.error_description == void 0 ? void 0 : val.error_description;
    return {
        error: error,
        errorDescription: errorDescription,
    };
}
//# sourceMappingURL=oAuth2Error.generated.js.map