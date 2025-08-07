"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeDevicePinnerTypeField = serializeDevicePinnerTypeField;
exports.deserializeDevicePinnerTypeField = deserializeDevicePinnerTypeField;
exports.serializeDevicePinner = serializeDevicePinner;
exports.deserializeDevicePinner = deserializeDevicePinner;
const userMini_generated_js_1 = require("./userMini.generated.js");
const userMini_generated_js_2 = require("./userMini.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeDevicePinnerTypeField(val) {
    return val;
}
function deserializeDevicePinnerTypeField(val) {
    if (val == 'device_pinner') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize DevicePinnerTypeField" });
}
function serializeDevicePinner(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeDevicePinnerTypeField(val.type),
        ['owned_by']: val.ownedBy == void 0 ? val.ownedBy : (0, userMini_generated_js_1.serializeUserMini)(val.ownedBy),
        ['product_name']: val.productName,
    };
}
function deserializeDevicePinner(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "DevicePinner"' });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "DevicePinner"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeDevicePinnerTypeField(val.type);
    const ownedBy = val.owned_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.owned_by);
    if (!(val.product_name == void 0) && !(0, json_js_1.sdIsString)(val.product_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "product_name" of type "DevicePinner"',
        });
    }
    const productName = val.product_name == void 0 ? void 0 : val.product_name;
    return {
        id: id,
        type: type,
        ownedBy: ownedBy,
        productName: productName,
    };
}
//# sourceMappingURL=devicePinner.generated.js.map