import { SerializedData } from './json.js';
import { sdIsEmpty } from './json.js';
import { sdIsBoolean } from './json.js';
import { sdIsNumber } from './json.js';
import { sdIsString } from './json.js';
import { sdIsList } from './json.js';
import { sdIsMap } from './json.js';
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
