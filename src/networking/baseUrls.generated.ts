import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class BaseUrls {
  readonly baseUrl: string = 'https://api.box.com/2.0';
  readonly uploadUrl: string = 'https://upload.box.com/api/2.0';
  readonly oauth2Url: string = 'https://account.box.com/api/oauth2';
  constructor(
    fields:
      | Omit<BaseUrls, 'baseUrl' | 'uploadUrl' | 'oauth2Url'>
      | Partial<Pick<BaseUrls, 'baseUrl' | 'uploadUrl' | 'oauth2Url'>>
  ) {
    Object.assign(this, fields);
  }
}
export function serializeBaseUrls(val: BaseUrls): SerializedData {
  return {
    ['base_url']: val.baseUrl,
    ['upload_url']: val.uploadUrl,
    ['oauth2_url']: val.oauth2Url,
  };
}
export function deserializeBaseUrls(val: any): BaseUrls {
  const baseUrl: string = val.base_url;
  const uploadUrl: string = val.upload_url;
  const oauth2Url: string = val.oauth2_url;
  return {
    baseUrl: baseUrl,
    uploadUrl: uploadUrl,
    oauth2Url: oauth2Url,
  } satisfies BaseUrls;
}
