import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface UploadUrl {
  readonly uploadUrl?: string;
  readonly uploadToken?: string;
}
export function serializeUploadUrl(val: UploadUrl): SerializedData {
  return {
    ['upload_url']: val.uploadUrl == void 0 ? void 0 : val.uploadUrl,
    ['upload_token']: val.uploadToken == void 0 ? void 0 : val.uploadToken,
  };
}
export function deserializeUploadUrl(val: SerializedData): UploadUrl {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "UploadUrl"' });
  }
  if (!(val.upload_url == void 0) && !sdIsString(val.upload_url)) {
    throw new BoxSdkError({
      message: 'Expecting string for "upload_url" of type "UploadUrl"',
    });
  }
  const uploadUrl: undefined | string =
    val.upload_url == void 0 ? void 0 : val.upload_url;
  if (!(val.upload_token == void 0) && !sdIsString(val.upload_token)) {
    throw new BoxSdkError({
      message: 'Expecting string for "upload_token" of type "UploadUrl"',
    });
  }
  const uploadToken: undefined | string =
    val.upload_token == void 0 ? void 0 : val.upload_token;
  return { uploadUrl: uploadUrl, uploadToken: uploadToken } satisfies UploadUrl;
}
