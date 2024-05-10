import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface OAuth2Error {
  readonly error?: string;
  readonly errorDescription?: string;
}
export function serializeOAuth2Error(val: OAuth2Error): SerializedData {
  return {
    ['error']: val.error == void 0 ? void 0 : val.error,
    ['error_description']:
      val.errorDescription == void 0 ? void 0 : val.errorDescription,
  };
}
export function deserializeOAuth2Error(val: any): OAuth2Error {
  const error: undefined | string = val.error == void 0 ? void 0 : val.error;
  const errorDescription: undefined | string =
    val.error_description == void 0 ? void 0 : val.error_description;
  return {
    error: error,
    errorDescription: errorDescription,
  } satisfies OAuth2Error;
}
