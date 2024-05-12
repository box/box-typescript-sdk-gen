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
export function deserializeUploadUrl(val: any): UploadUrl {
  const uploadUrl: undefined | string =
    val.upload_url == void 0 ? void 0 : val.upload_url;
  const uploadToken: undefined | string =
    val.upload_token == void 0 ? void 0 : val.upload_token;
  return { uploadUrl: uploadUrl, uploadToken: uploadToken } satisfies UploadUrl;
}
