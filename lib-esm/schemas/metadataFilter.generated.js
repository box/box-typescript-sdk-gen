import { serializeMetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString } from './metadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString.generated.js';
import { deserializeMetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString } from './metadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeMetadataFilterScopeField(val) {
    return val;
}
export function deserializeMetadataFilterScopeField(val) {
    if (val == 'global') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    if (val == 'enterprise_{enterprise_id}') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize MetadataFilterScopeField",
    });
}
export function serializeMetadataFilter(val) {
    return {
        ['scope']: val.scope == void 0
            ? val.scope
            : serializeMetadataFilterScopeField(val.scope),
        ['templateKey']: val.templateKey,
        ['filters']: val.filters == void 0
            ? val.filters
            : Object.fromEntries(Object.entries(val.filters).map(([k, v]) => [
                k,
                serializeMetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString(v),
            ])),
    };
}
export function deserializeMetadataFilter(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "MetadataFilter"' });
    }
    const scope = val.scope == void 0
        ? void 0
        : deserializeMetadataFilterScopeField(val.scope);
    if (!(val.templateKey == void 0) && !sdIsString(val.templateKey)) {
        throw new BoxSdkError({
            message: 'Expecting string for "templateKey" of type "MetadataFilter"',
        });
    }
    const templateKey = val.templateKey == void 0 ? void 0 : val.templateKey;
    if (!(val.filters == void 0) && !sdIsMap(val.filters)) {
        throw new BoxSdkError({
            message: 'Expecting object for "filters" of type "MetadataFilter"',
        });
    }
    const filters = val.filters == void 0
        ? void 0
        : sdIsMap(val.filters)
            ? Object.fromEntries(Object.entries(val.filters).map(([k, v]) => [
                k,
                deserializeMetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString(v),
            ]))
            : {};
    return {
        scope: scope,
        templateKey: templateKey,
        filters: filters,
    };
}
//# sourceMappingURL=metadataFilter.generated.js.map