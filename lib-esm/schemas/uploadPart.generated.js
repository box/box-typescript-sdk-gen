import { serializeUploadPartMini } from './uploadPartMini.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeUploadPart(val) {
    const base = serializeUploadPartMini(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({ message: 'Expecting a map for "UploadPart"' });
    }
    return { ...base, ...{ ['sha1']: val.sha1 } };
}
export function deserializeUploadPart(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "UploadPart"' });
    }
    if (!(val.sha1 == void 0) && !sdIsString(val.sha1)) {
        throw new BoxSdkError({
            message: 'Expecting string for "sha1" of type "UploadPart"',
        });
    }
    const sha1 = val.sha1 == void 0 ? void 0 : val.sha1;
    if (!(val.part_id == void 0) && !sdIsString(val.part_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "part_id" of type "UploadPart"',
        });
    }
    const partId = val.part_id == void 0 ? void 0 : val.part_id;
    if (!(val.offset == void 0) && !sdIsNumber(val.offset)) {
        throw new BoxSdkError({
            message: 'Expecting number for "offset" of type "UploadPart"',
        });
    }
    const offset = val.offset == void 0 ? void 0 : val.offset;
    if (!(val.size == void 0) && !sdIsNumber(val.size)) {
        throw new BoxSdkError({
            message: 'Expecting number for "size" of type "UploadPart"',
        });
    }
    const size = val.size == void 0 ? void 0 : val.size;
    return {
        sha1: sha1,
        partId: partId,
        offset: offset,
        size: size,
    };
}
//# sourceMappingURL=uploadPart.generated.js.map