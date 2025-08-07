import { SerializedData } from '../serialization/json.js';
export interface UserAvatarPicUrlsField {
    /**
     * The location of a small-sized avatar. */
    readonly small?: string;
    /**
     * The location of a large-sized avatar. */
    readonly large?: string;
    /**
     * The location of the avatar preview. */
    readonly preview?: string;
    readonly rawData?: SerializedData;
}
export interface UserAvatar {
    /**
     * Represents an object with user avatar URLs. */
    readonly picUrls?: UserAvatarPicUrlsField;
    readonly rawData?: SerializedData;
}
export declare function serializeUserAvatarPicUrlsField(val: UserAvatarPicUrlsField): SerializedData;
export declare function deserializeUserAvatarPicUrlsField(val: SerializedData): UserAvatarPicUrlsField;
export declare function serializeUserAvatar(val: UserAvatar): SerializedData;
export declare function deserializeUserAvatar(val: SerializedData): UserAvatar;
//# sourceMappingURL=userAvatar.generated.d.ts.map