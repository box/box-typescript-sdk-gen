"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeMetadataFieldFilterFloatRange = serializeMetadataFieldFilterFloatRange;
exports.deserializeMetadataFieldFilterFloatRange = deserializeMetadataFieldFilterFloatRange;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeMetadataFieldFilterFloatRange(val) {
    return { ['lt']: val.lt, ['gt']: val.gt };
}
function deserializeMetadataFieldFilterFloatRange(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "MetadataFieldFilterFloatRange"',
        });
    }
    if (!(val.lt == void 0) && !(0, json_js_1.sdIsNumber)(val.lt)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "lt" of type "MetadataFieldFilterFloatRange"',
        });
    }
    const lt = val.lt == void 0 ? void 0 : val.lt;
    if (!(val.gt == void 0) && !(0, json_js_1.sdIsNumber)(val.gt)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "gt" of type "MetadataFieldFilterFloatRange"',
        });
    }
    const gt = val.gt == void 0 ? void 0 : val.gt;
    return { lt: lt, gt: gt };
}
//# sourceMappingURL=metadataFieldFilterFloatRange.generated.js.map