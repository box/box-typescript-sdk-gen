import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeMetadataFieldFilterDateRange(val) {
    return {
        ['lt']: val.lt == void 0 ? val.lt : serializeDateTime(val.lt),
        ['gt']: val.gt == void 0 ? val.gt : serializeDateTime(val.gt),
    };
}
export function deserializeMetadataFieldFilterDateRange(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "MetadataFieldFilterDateRange"',
        });
    }
    if (!(val.lt == void 0) && !sdIsString(val.lt)) {
        throw new BoxSdkError({
            message: 'Expecting string for "lt" of type "MetadataFieldFilterDateRange"',
        });
    }
    const lt = val.lt == void 0 ? void 0 : deserializeDateTime(val.lt);
    if (!(val.gt == void 0) && !sdIsString(val.gt)) {
        throw new BoxSdkError({
            message: 'Expecting string for "gt" of type "MetadataFieldFilterDateRange"',
        });
    }
    const gt = val.gt == void 0 ? void 0 : deserializeDateTime(val.gt);
    return { lt: lt, gt: gt };
}
//# sourceMappingURL=metadataFieldFilterDateRange.generated.js.map