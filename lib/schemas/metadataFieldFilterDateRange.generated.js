"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeMetadataFieldFilterDateRange = serializeMetadataFieldFilterDateRange;
exports.deserializeMetadataFieldFilterDateRange = deserializeMetadataFieldFilterDateRange;
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeMetadataFieldFilterDateRange(val) {
    return {
        ['lt']: val.lt == void 0 ? val.lt : (0, utils_js_1.serializeDateTime)(val.lt),
        ['gt']: val.gt == void 0 ? val.gt : (0, utils_js_1.serializeDateTime)(val.gt),
    };
}
function deserializeMetadataFieldFilterDateRange(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "MetadataFieldFilterDateRange"',
        });
    }
    if (!(val.lt == void 0) && !(0, json_js_1.sdIsString)(val.lt)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "lt" of type "MetadataFieldFilterDateRange"',
        });
    }
    const lt = val.lt == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.lt);
    if (!(val.gt == void 0) && !(0, json_js_1.sdIsString)(val.gt)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "gt" of type "MetadataFieldFilterDateRange"',
        });
    }
    const gt = val.gt == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.gt);
    return { lt: lt, gt: gt };
}
//# sourceMappingURL=metadataFieldFilterDateRange.generated.js.map