import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeUploadUrl(val) {
    return { ['upload_url']: val.uploadUrl, ['upload_token']: val.uploadToken };
}
export function deserializeUploadUrl(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "UploadUrl"' });
    }
    if (!(val.upload_url == void 0) && !sdIsString(val.upload_url)) {
        throw new BoxSdkError({
            message: 'Expecting string for "upload_url" of type "UploadUrl"',
        });
    }
    const uploadUrl = val.upload_url == void 0 ? void 0 : val.upload_url;
    if (!(val.upload_token == void 0) && !sdIsString(val.upload_token)) {
        throw new BoxSdkError({
            message: 'Expecting string for "upload_token" of type "UploadUrl"',
        });
    }
    const uploadToken = val.upload_token == void 0 ? void 0 : val.upload_token;
    return { uploadUrl: uploadUrl, uploadToken: uploadToken };
}
//# sourceMappingURL=uploadUrl.generated.js.map