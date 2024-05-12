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
  val: SerializedData
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
  val: SerializedData
): FileRequestUpdateRequest {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "FileRequestUpdateRequest"',
    });
  }
  if (!(val.title == void 0) && !sdIsString(val.title)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "title" of type "FileRequestUpdateRequest"',
    });
  }
  const title: undefined | string = val.title == void 0 ? void 0 : val.title;
  if (!(val.description == void 0) && !sdIsString(val.description)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "description" of type "FileRequestUpdateRequest"',
    });
  }
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const status: undefined | FileRequestUpdateRequestStatusField =
    val.status == void 0
      ? void 0
      : deserializeFileRequestUpdateRequestStatusField(val.status);
  if (
    !(val.is_email_required == void 0) &&
    !sdIsBoolean(val.is_email_required)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_email_required" of type "FileRequestUpdateRequest"',
    });
  }
  const isEmailRequired: undefined | boolean =
    val.is_email_required == void 0 ? void 0 : val.is_email_required;
  if (
    !(val.is_description_required == void 0) &&
    !sdIsBoolean(val.is_description_required)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_description_required" of type "FileRequestUpdateRequest"',
    });
  }
  const isDescriptionRequired: undefined | boolean =
    val.is_description_required == void 0
      ? void 0
      : val.is_description_required;
  if (!(val.expires_at == void 0) && !sdIsString(val.expires_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "expires_at" of type "FileRequestUpdateRequest"',
    });
  }
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
