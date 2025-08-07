import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeUploadPartMini(val) {
    return {
        ['part_id']: val.partId,
        ['offset']: val.offset,
        ['size']: val.size,
    };
}
export function deserializeUploadPartMini(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "UploadPartMini"' });
    }
    if (!(val.part_id == void 0) && !sdIsString(val.part_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "part_id" of type "UploadPartMini"',
        });
    }
    const partId = val.part_id == void 0 ? void 0 : val.part_id;
    if (!(val.offset == void 0) && !sdIsNumber(val.offset)) {
        throw new BoxSdkError({
            message: 'Expecting number for "offset" of type "UploadPartMini"',
        });
    }
    const offset = val.offset == void 0 ? void 0 : val.offset;
    if (!(val.size == void 0) && !sdIsNumber(val.size)) {
        throw new BoxSdkError({
            message: 'Expecting number for "size" of type "UploadPartMini"',
        });
    }
    const size = val.size == void 0 ? void 0 : val.size;
    return {
        partId: partId,
        offset: offset,
        size: size,
    };
}
//# sourceMappingURL=uploadPartMini.generated.js.map