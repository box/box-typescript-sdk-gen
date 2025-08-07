import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeUserAvatarPicUrlsField(val) {
    return {
        ['small']: val.small,
        ['large']: val.large,
        ['preview']: val.preview,
    };
}
export function deserializeUserAvatarPicUrlsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UserAvatarPicUrlsField"',
        });
    }
    if (!(val.small == void 0) && !sdIsString(val.small)) {
        throw new BoxSdkError({
            message: 'Expecting string for "small" of type "UserAvatarPicUrlsField"',
        });
    }
    const small = val.small == void 0 ? void 0 : val.small;
    if (!(val.large == void 0) && !sdIsString(val.large)) {
        throw new BoxSdkError({
            message: 'Expecting string for "large" of type "UserAvatarPicUrlsField"',
        });
    }
    const large = val.large == void 0 ? void 0 : val.large;
    if (!(val.preview == void 0) && !sdIsString(val.preview)) {
        throw new BoxSdkError({
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
export function serializeUserAvatar(val) {
    return {
        ['pic_urls']: val.picUrls == void 0
            ? val.picUrls
            : serializeUserAvatarPicUrlsField(val.picUrls),
    };
}
export function deserializeUserAvatar(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "UserAvatar"' });
    }
    const picUrls = val.pic_urls == void 0
        ? void 0
        : deserializeUserAvatarPicUrlsField(val.pic_urls);
    return { picUrls: picUrls };
}
//# sourceMappingURL=userAvatar.generated.js.map