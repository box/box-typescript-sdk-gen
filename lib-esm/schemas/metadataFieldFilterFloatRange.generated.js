import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeMetadataFieldFilterFloatRange(val) {
    return { ['lt']: val.lt, ['gt']: val.gt };
}
export function deserializeMetadataFieldFilterFloatRange(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "MetadataFieldFilterFloatRange"',
        });
    }
    if (!(val.lt == void 0) && !sdIsNumber(val.lt)) {
        throw new BoxSdkError({
            message: 'Expecting number for "lt" of type "MetadataFieldFilterFloatRange"',
        });
    }
    const lt = val.lt == void 0 ? void 0 : val.lt;
    if (!(val.gt == void 0) && !sdIsNumber(val.gt)) {
        throw new BoxSdkError({
            message: 'Expecting number for "gt" of type "MetadataFieldFilterFloatRange"',
        });
    }
    const gt = val.gt == void 0 ? void 0 : val.gt;
    return { lt: lt, gt: gt };
}
//# sourceMappingURL=metadataFieldFilterFloatRange.generated.js.map