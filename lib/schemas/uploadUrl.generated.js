"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeUploadUrl = serializeUploadUrl;
exports.deserializeUploadUrl = deserializeUploadUrl;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeUploadUrl(val) {
    return { ['upload_url']: val.uploadUrl, ['upload_token']: val.uploadToken };
}
function deserializeUploadUrl(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "UploadUrl"' });
    }
    if (!(val.upload_url == void 0) && !(0, json_js_1.sdIsString)(val.upload_url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "upload_url" of type "UploadUrl"',
        });
    }
    const uploadUrl = val.upload_url == void 0 ? void 0 : val.upload_url;
    if (!(val.upload_token == void 0) && !(0, json_js_1.sdIsString)(val.upload_token)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "upload_token" of type "UploadUrl"',
        });
    }
    const uploadToken = val.upload_token == void 0 ? void 0 : val.upload_token;
    return { uploadUrl: uploadUrl, uploadToken: uploadToken };
}
//# sourceMappingURL=uploadUrl.generated.js.map