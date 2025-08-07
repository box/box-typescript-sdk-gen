"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeUserAvatarPicUrlsField = serializeUserAvatarPicUrlsField;
exports.deserializeUserAvatarPicUrlsField = deserializeUserAvatarPicUrlsField;
exports.serializeUserAvatar = serializeUserAvatar;
exports.deserializeUserAvatar = deserializeUserAvatar;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeUserAvatarPicUrlsField(val) {
    return {
        ['small']: val.small,
        ['large']: val.large,
        ['preview']: val.preview,
    };
}
function deserializeUserAvatarPicUrlsField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UserAvatarPicUrlsField"',
        });
    }
    if (!(val.small == void 0) && !(0, json_js_1.sdIsString)(val.small)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "small" of type "UserAvatarPicUrlsField"',
        });
    }
    const small = val.small == void 0 ? void 0 : val.small;
    if (!(val.large == void 0) && !(0, json_js_1.sdIsString)(val.large)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "large" of type "UserAvatarPicUrlsField"',
        });
    }
    const large = val.large == void 0 ? void 0 : val.large;
    if (!(val.preview == void 0) && !(0, json_js_1.sdIsString)(val.preview)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "preview" of type "UserAvatarPicUrlsField"',
        });
    }
    const preview = val.preview == void 0 ? void 0 : val.preview;
    return {
        small: small,
        large: large,
        preview: preview,
    };
}
function serializeUserAvatar(val) {
    return {
        ['pic_urls']: val.picUrls == void 0
            ? val.picUrls
            : serializeUserAvatarPicUrlsField(val.picUrls),
    };
}
function deserializeUserAvatar(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "UserAvatar"' });
    }
    const picUrls = val.pic_urls == void 0
        ? void 0
        : deserializeUserAvatarPicUrlsField(val.pic_urls);
    return { picUrls: picUrls };
}
//# sourceMappingURL=userAvatar.generated.js.map