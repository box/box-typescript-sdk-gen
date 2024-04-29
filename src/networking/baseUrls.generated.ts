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
    fields: Omit<BaseUrls, 'baseUrl' | 'uploadUrl' | 'oauth2Url'> &
      Partial<Pick<BaseUrls, 'baseUrl' | 'uploadUrl' | 'oauth2Url'>>
  ) {
    if (fields.baseUrl) {
      this.baseUrl = fields.baseUrl;
    }
    if (fields.uploadUrl) {
      this.uploadUrl = fields.uploadUrl;
    }
    if (fields.oauth2Url) {
      this.oauth2Url = fields.oauth2Url;
    }
  }
}
export interface BaseUrlsInput {
  readonly baseUrl?: string;
  readonly uploadUrl?: string;
  readonly oauth2Url?: string;
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
export function serializeBaseUrlsInput(val: BaseUrlsInput): SerializedData {
  return {
    ['baseUrl']: val.baseUrl == void 0 ? void 0 : val.baseUrl,
    ['uploadUrl']: val.uploadUrl == void 0 ? void 0 : val.uploadUrl,
    ['oauth2Url']: val.oauth2Url == void 0 ? void 0 : val.oauth2Url,
  };
}
export function deserializeBaseUrlsInput(val: any): BaseUrlsInput {
  const baseUrl: undefined | string =
    val.baseUrl == void 0 ? void 0 : val.baseUrl;
  const uploadUrl: undefined | string =
    val.uploadUrl == void 0 ? void 0 : val.uploadUrl;
  const oauth2Url: undefined | string =
    val.oauth2Url == void 0 ? void 0 : val.oauth2Url;
  return {
    baseUrl: baseUrl,
    uploadUrl: uploadUrl,
    oauth2Url: oauth2Url,
  } satisfies BaseUrlsInput;
}
