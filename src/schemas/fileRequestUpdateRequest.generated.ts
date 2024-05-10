import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type FileRequestUpdateRequestStatusField = 'active' | 'inactive';
export interface FileRequestUpdateRequest {
  readonly title?: string;
  readonly description?: string;
  readonly status?: FileRequestUpdateRequestStatusField;
  readonly isEmailRequired?: boolean;
  readonly isDescriptionRequired?: boolean;
  readonly expiresAt?: DateTime;
}
export function serializeFileRequestUpdateRequestStatusField(
  val: FileRequestUpdateRequestStatusField
): SerializedData {
  return val;
}
export function deserializeFileRequestUpdateRequestStatusField(
  val: any
): FileRequestUpdateRequestStatusField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "FileRequestUpdateRequestStatusField"',
    });
  }
  if (val == 'active') {
    return 'active';
  }
  if (val == 'inactive') {
    return 'inactive';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeFileRequestUpdateRequest(
  val: FileRequestUpdateRequest
): SerializedData {
  return {
    ['title']: val.title == void 0 ? void 0 : val.title,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['status']:
      val.status == void 0
        ? void 0
        : serializeFileRequestUpdateRequestStatusField(val.status),
    ['is_email_required']:
      val.isEmailRequired == void 0 ? void 0 : val.isEmailRequired,
    ['is_description_required']:
      val.isDescriptionRequired == void 0 ? void 0 : val.isDescriptionRequired,
    ['expires_at']:
      val.expiresAt == void 0 ? void 0 : serializeDateTime(val.expiresAt),
  };
}
export function deserializeFileRequestUpdateRequest(
  val: any
): FileRequestUpdateRequest {
  const title: undefined | string = val.title == void 0 ? void 0 : val.title;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const status: undefined | FileRequestUpdateRequestStatusField =
    val.status == void 0
      ? void 0
      : deserializeFileRequestUpdateRequestStatusField(val.status);
  const isEmailRequired: undefined | boolean =
    val.is_email_required == void 0 ? void 0 : val.is_email_required;
  const isDescriptionRequired: undefined | boolean =
    val.is_description_required == void 0
      ? void 0
      : val.is_description_required;
  const expiresAt: undefined | DateTime =
    val.expires_at == void 0 ? void 0 : deserializeDateTime(val.expires_at);
  return {
    title: title,
    description: description,
    status: status,
    isEmailRequired: isEmailRequired,
    isDescriptionRequired: isDescriptionRequired,
    expiresAt: expiresAt,
  } satisfies FileRequestUpdateRequest;
}
