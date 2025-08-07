"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeMetadataFilterScopeField = serializeMetadataFilterScopeField;
exports.deserializeMetadataFilterScopeField = deserializeMetadataFilterScopeField;
exports.serializeMetadataFilter = serializeMetadataFilter;
exports.deserializeMetadataFilter = deserializeMetadataFilter;
const metadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString_generated_js_1 = require("./metadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString.generated.js");
const metadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString_generated_js_2 = require("./metadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeMetadataFilterScopeField(val) {
    return val;
}
function deserializeMetadataFilterScopeField(val) {
    if (val == 'global') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    if (val == 'enterprise_{enterprise_id}') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize MetadataFilterScopeField",
    });
}
function serializeMetadataFilter(val) {
    return {
        ['scope']: val.scope == void 0
            ? val.scope
            : serializeMetadataFilterScopeField(val.scope),
        ['templateKey']: val.templateKey,
        ['filters']: val.filters == void 0
            ? val.filters
            : Object.fromEntries(Object.entries(val.filters).map(([k, v]) => [
                k,
                (0, metadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString_generated_js_1.serializeMetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString)(v),
            ])),
    };
}
function deserializeMetadataFilter(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "MetadataFilter"' });
    }
    const scope = val.scope == void 0
        ? void 0
        : deserializeMetadataFilterScopeField(val.scope);
    if (!(val.templateKey == void 0) && !(0, json_js_1.sdIsString)(val.templateKey)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "templateKey" of type "MetadataFilter"',
        });
    }
    const templateKey = val.templateKey == void 0 ? void 0 : val.templateKey;
    if (!(val.filters == void 0) && !(0, json_js_2.sdIsMap)(val.filters)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting object for "filters" of type "MetadataFilter"',
        });
    }
    const filters = val.filters == void 0
        ? void 0
        : (0, json_js_2.sdIsMap)(val.filters)
            ? Object.fromEntries(Object.entries(val.filters).map(([k, v]) => [
                k,
                (0, metadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString_generated_js_2.deserializeMetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString)(v),
            ]))
            : {};
    return {
        scope: scope,
        templateKey: templateKey,
        filters: filters,
    };
}
//# sourceMappingURL=metadataFilter.generated.js.map