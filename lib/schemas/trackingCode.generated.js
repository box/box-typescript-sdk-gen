"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeTrackingCodeTypeField = serializeTrackingCodeTypeField;
exports.deserializeTrackingCodeTypeField = deserializeTrackingCodeTypeField;
exports.serializeTrackingCode = serializeTrackingCode;
exports.deserializeTrackingCode = deserializeTrackingCode;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeTrackingCodeTypeField(val) {
    return val;
}
function deserializeTrackingCodeTypeField(val) {
    if (val == 'tracking_code') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize TrackingCodeTypeField" });
}
function serializeTrackingCode(val) {
    return {
        ['type']: val.type == void 0 ? val.type : serializeTrackingCodeTypeField(val.type),
        ['name']: val.name,
        ['value']: val.value,
    };
}
function deserializeTrackingCode(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "TrackingCode"' });
    }
    const type = val.type == void 0 ? void 0 : deserializeTrackingCodeTypeField(val.type);
    if (!(val.name == void 0) && !(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "TrackingCode"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.value == void 0) && !(0, json_js_1.sdIsString)(val.value)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "value" of type "TrackingCode"',
        });
    }
    const value = val.value == void 0 ? void 0 : val.value;
    return { type: type, name: name, value: value };
}
//# sourceMappingURL=trackingCode.generated.js.map