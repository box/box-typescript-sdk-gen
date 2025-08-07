"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeMetadataInstanceValue = serializeMetadataInstanceValue;
exports.deserializeMetadataInstanceValue = deserializeMetadataInstanceValue;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeMetadataInstanceValue(val) {
    return val;
}
function deserializeMetadataInstanceValue(val) {
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    if ((0, json_js_1.sdIsNumber)(val)) {
        return val;
    }
    if ((0, json_js_3.sdIsList)(val) && val.every(json_js_2.sdIsString)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize MetadataInstanceValue" });
}
//# sourceMappingURL=metadataInstanceValue.generated.js.map