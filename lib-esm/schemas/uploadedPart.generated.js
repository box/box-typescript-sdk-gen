import { serializeUploadPart } from './uploadPart.generated.js';
import { deserializeUploadPart } from './uploadPart.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeUploadedPart(val) {
    return {
        ['part']: val.part == void 0 ? val.part : serializeUploadPart(val.part),
    };
}
export function deserializeUploadedPart(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "UploadedPart"' });
    }
    const part = val.part == void 0 ? void 0 : deserializeUploadPart(val.part);
    return { part: part };
}
//# sourceMappingURL=uploadedPart.generated.js.map