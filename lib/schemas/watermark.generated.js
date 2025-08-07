"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeWatermarkWatermarkField = serializeWatermarkWatermarkField;
exports.deserializeWatermarkWatermarkField = deserializeWatermarkWatermarkField;
exports.serializeWatermark = serializeWatermark;
exports.deserializeWatermark = deserializeWatermark;
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeWatermarkWatermarkField(val) {
    return {
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : (0, utils_js_1.serializeDateTime)(val.modifiedAt),
    };
}
function deserializeWatermarkWatermarkField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "WatermarkWatermarkField"',
        });
    }
    if (!(val.created_at == void 0) && !(0, json_js_1.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "WatermarkWatermarkField"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_1.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "WatermarkWatermarkField"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.modified_at);
    return {
        createdAt: createdAt,
        modifiedAt: modifiedAt,
    };
}
function serializeWatermark(val) {
    return {
        ['watermark']: val.watermark == void 0
            ? val.watermark
            : serializeWatermarkWatermarkField(val.watermark),
    };
}
function deserializeWatermark(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "Watermark"' });
    }
    const watermark = val.watermark == void 0
        ? void 0
        : deserializeWatermarkWatermarkField(val.watermark);
    return { watermark: watermark };
}
//# sourceMappingURL=watermark.generated.js.map