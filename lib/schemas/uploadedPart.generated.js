"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeUploadedPart = serializeUploadedPart;
exports.deserializeUploadedPart = deserializeUploadedPart;
const uploadPart_generated_js_1 = require("./uploadPart.generated.js");
const uploadPart_generated_js_2 = require("./uploadPart.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeUploadedPart(val) {
    return {
        ['part']: val.part == void 0 ? val.part : (0, uploadPart_generated_js_1.serializeUploadPart)(val.part),
    };
}
function deserializeUploadedPart(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "UploadedPart"' });
    }
    const part = val.part == void 0 ? void 0 : (0, uploadPart_generated_js_2.deserializeUploadPart)(val.part);
    return { part: part };
}
//# sourceMappingURL=uploadedPart.generated.js.map