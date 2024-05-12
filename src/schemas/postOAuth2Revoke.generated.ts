import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface PostOAuth2Revoke {
  readonly clientId?: string;
  readonly clientSecret?: string;
  readonly token?: string;
}
export function serializePostOAuth2Revoke(
  val: PostOAuth2Revoke
): SerializedData {
  return {
    ['client_id']: val.clientId == void 0 ? void 0 : val.clientId,
    ['client_secret']: val.clientSecret == void 0 ? void 0 : val.clientSecret,
    ['token']: val.token == void 0 ? void 0 : val.token,
  };
}
export function deserializePostOAuth2Revoke(val: any): PostOAuth2Revoke {
  const clientId: undefined | string =
    val.client_id == void 0 ? void 0 : val.client_id;
  const clientSecret: undefined | string =
    val.client_secret == void 0 ? void 0 : val.client_secret;
  const token: undefined | string = val.token == void 0 ? void 0 : val.token;
  return {
    clientId: clientId,
    clientSecret: clientSecret,
    token: token,
  } satisfies PostOAuth2Revoke;
}
