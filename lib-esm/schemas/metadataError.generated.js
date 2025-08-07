import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeMetadataError(val) {
    return {
        ['code']: val.code,
        ['message']: val.message,
        ['request_id']: val.requestId,
    };
}
export function deserializeMetadataError(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "MetadataError"' });
    }
    if (!(val.code == void 0) && !sdIsString(val.code)) {
        throw new BoxSdkError({
            message: 'Expecting string for "code" of type "MetadataError"',
        });
    }
    const code = val.code == void 0 ? void 0 : val.code;
    if (!(val.message == void 0) && !sdIsString(val.message)) {
        throw new BoxSdkError({
            message: 'Expecting string for "message" of type "MetadataError"',
        });
    }
    const message = val.message == void 0 ? void 0 : val.message;
    if (!(val.request_id == void 0) && !sdIsString(val.request_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "request_id" of type "MetadataError"',
        });
    }
    const requestId = val.request_id == void 0 ? void 0 : val.request_id;
    return {
        code: code,
        message: message,
        requestId: requestId,
    };
}
//# sourceMappingURL=metadataError.generated.js.map