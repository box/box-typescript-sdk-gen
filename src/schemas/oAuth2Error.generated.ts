import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface OAuth2Error {
  /**
   * The type of the error returned. */
  readonly error?: string;
  /**
   * The type of the error returned. */
  readonly errorDescription?: string;
}
export function serializeOAuth2Error(val: OAuth2Error): SerializedData {
  return {
    ['error']: val.error == void 0 ? void 0 : val.error,
    ['error_description']:
      val.errorDescription == void 0 ? void 0 : val.errorDescription,
  };
}
export function deserializeOAuth2Error(val: SerializedData): OAuth2Error {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "OAuth2Error"' });
  }
  if (!(val.error == void 0) && !sdIsString(val.error)) {
    throw new BoxSdkError({
      message: 'Expecting string for "error" of type "OAuth2Error"',
    });
  }
  const error: undefined | string = val.error == void 0 ? void 0 : val.error;
  if (
    !(val.error_description == void 0) &&
    !sdIsString(val.error_description)
  ) {
    throw new BoxSdkError({
      message: 'Expecting string for "error_description" of type "OAuth2Error"',
    });
  }
  const errorDescription: undefined | string =
    val.error_description == void 0 ? void 0 : val.error_description;
  return {
    error: error,
    errorDescription: errorDescription,
  } satisfies OAuth2Error;
}
