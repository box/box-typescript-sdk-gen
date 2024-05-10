import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface UserAvatarPicUrlsField {
  readonly small?: string;
  readonly large?: string;
  readonly preview?: string;
}
export interface UserAvatar {
  readonly picUrls?: UserAvatarPicUrlsField;
}
export function serializeUserAvatarPicUrlsField(
  val: UserAvatarPicUrlsField
): SerializedData {
  return {
    ['small']: val.small == void 0 ? void 0 : val.small,
    ['large']: val.large == void 0 ? void 0 : val.large,
    ['preview']: val.preview == void 0 ? void 0 : val.preview,
  };
}
export function deserializeUserAvatarPicUrlsField(
  val: any
): UserAvatarPicUrlsField {
  const small: undefined | string = val.small == void 0 ? void 0 : val.small;
  const large: undefined | string = val.large == void 0 ? void 0 : val.large;
  const preview: undefined | string =
    val.preview == void 0 ? void 0 : val.preview;
  return {
    small: small,
    large: large,
    preview: preview,
  } satisfies UserAvatarPicUrlsField;
}
export function serializeUserAvatar(val: UserAvatar): SerializedData {
  return {
    ['pic_urls']:
      val.picUrls == void 0
        ? void 0
        : serializeUserAvatarPicUrlsField(val.picUrls),
  };
}
export function deserializeUserAvatar(val: any): UserAvatar {
  const picUrls: undefined | UserAvatarPicUrlsField =
    val.pic_urls == void 0
      ? void 0
      : deserializeUserAvatarPicUrlsField(val.pic_urls);
  return { picUrls: picUrls } satisfies UserAvatar;
}