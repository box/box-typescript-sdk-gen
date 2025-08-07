"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeMetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString = serializeMetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString;
exports.deserializeMetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString = deserializeMetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString;
const metadataFieldFilterDateRange_generated_js_1 = require("./metadataFieldFilterDateRange.generated.js");
const metadataFieldFilterDateRange_generated_js_2 = require("./metadataFieldFilterDateRange.generated.js");
const metadataFieldFilterFloatRange_generated_js_1 = require("./metadataFieldFilterFloatRange.generated.js");
const metadataFieldFilterFloatRange_generated_js_2 = require("./metadataFieldFilterFloatRange.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeMetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString(val) {
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    if ((0, json_js_1.sdIsNumber)(val)) {
        return val;
    }
    if ((0, json_js_3.sdIsList)(val) && val.every(json_js_2.sdIsString)) {
        return val;
    }
    try {
        return (0, metadataFieldFilterDateRange_generated_js_1.serializeMetadataFieldFilterDateRange)(val);
    }
    catch (error) {
        void 0;
    }
    finally {
    }
    try {
        return (0, metadataFieldFilterFloatRange_generated_js_1.serializeMetadataFieldFilterFloatRange)(val);
    }
    catch (error) {
        void 0;
    }
    finally {
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't serialize MetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString",
    });
}
function deserializeMetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString(val) {
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    if ((0, json_js_1.sdIsNumber)(val)) {
        return val;
    }
    if ((0, json_js_3.sdIsList)(val) && val.every(json_js_2.sdIsString)) {
        return val;
    }
    try {
        return (0, metadataFieldFilterDateRange_generated_js_2.deserializeMetadataFieldFilterDateRange)(val);
    }
    catch (error) {
        void 0;
    }
    finally {
    }
    try {
        return (0, metadataFieldFilterFloatRange_generated_js_2.deserializeMetadataFieldFilterFloatRange)(val);
    }
    catch (error) {
        void 0;
    }
    finally {
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize MetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString",
    });
}
//# sourceMappingURL=metadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString.generated.js.map