import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type ClientErrorTypeField = 'error';
export type ClientErrorCodeField =
  | 'created'
  | 'accepted'
  | 'no_content'
  | 'redirect'
  | 'not_modified'
  | 'bad_request'
  | 'unauthorized'
  | 'forbidden'
  | 'not_found'
  | 'method_not_allowed'
  | 'conflict'
  | 'precondition_failed'
  | 'too_many_requests'
  | 'internal_server_error'
  | 'unavailable'
  | 'item_name_invalid'
  | 'insufficient_scope';
export interface ClientErrorContextInfoField {
  readonly message?: string;
}
export interface ClientError {
  readonly type?: ClientErrorTypeField;
  readonly status?: number;
  readonly code?: ClientErrorCodeField;
  readonly message?: string;
  readonly contextInfo?: ClientErrorContextInfoField;
  readonly helpUrl?: string;
  readonly requestId?: string;
}
export function serializeClientErrorTypeField(
  val: ClientErrorTypeField
): SerializedData {
  return val;
}
export function deserializeClientErrorTypeField(
  val: any
): ClientErrorTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "ClientErrorTypeField"',
    });
  }
  if (val == 'error') {
    return 'error';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeClientErrorCodeField(
  val: ClientErrorCodeField
): SerializedData {
  return val;
}
export function deserializeClientErrorCodeField(
  val: any
): ClientErrorCodeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "ClientErrorCodeField"',
    });
  }
  if (val == 'created') {
    return 'created';
  }
  if (val == 'accepted') {
    return 'accepted';
  }
  if (val == 'no_content') {
    return 'no_content';
  }
  if (val == 'redirect') {
    return 'redirect';
  }
  if (val == 'not_modified') {
    return 'not_modified';
  }
  if (val == 'bad_request') {
    return 'bad_request';
  }
  if (val == 'unauthorized') {
    return 'unauthorized';
  }
  if (val == 'forbidden') {
    return 'forbidden';
  }
  if (val == 'not_found') {
    return 'not_found';
  }
  if (val == 'method_not_allowed') {
    return 'method_not_allowed';
  }
  if (val == 'conflict') {
    return 'conflict';
  }
  if (val == 'precondition_failed') {
    return 'precondition_failed';
  }
  if (val == 'too_many_requests') {
    return 'too_many_requests';
  }
  if (val == 'internal_server_error') {
    return 'internal_server_error';
  }
  if (val == 'unavailable') {
    return 'unavailable';
  }
  if (val == 'item_name_invalid') {
    return 'item_name_invalid';
  }
  if (val == 'insufficient_scope') {
    return 'insufficient_scope';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeClientErrorContextInfoField(
  val: ClientErrorContextInfoField
): SerializedData {
  return { ['message']: val.message == void 0 ? void 0 : val.message };
}
export function deserializeClientErrorContextInfoField(
  val: any
): ClientErrorContextInfoField {
  const message: undefined | string =
    val.message == void 0 ? void 0 : val.message;
  return { message: message } satisfies ClientErrorContextInfoField;
}
export function serializeClientError(val: ClientError): SerializedData {
  return {
    ['type']:
      val.type == void 0 ? void 0 : serializeClientErrorTypeField(val.type),
    ['status']: val.status == void 0 ? void 0 : val.status,
    ['code']:
      val.code == void 0 ? void 0 : serializeClientErrorCodeField(val.code),
    ['message']: val.message == void 0 ? void 0 : val.message,
    ['context_info']:
      val.contextInfo == void 0
        ? void 0
        : serializeClientErrorContextInfoField(val.contextInfo),
    ['help_url']: val.helpUrl == void 0 ? void 0 : val.helpUrl,
    ['request_id']: val.requestId == void 0 ? void 0 : val.requestId,
  };
}
export function deserializeClientError(val: any): ClientError {
  const type: undefined | ClientErrorTypeField =
    val.type == void 0 ? void 0 : deserializeClientErrorTypeField(val.type);
  const status: undefined | number = val.status == void 0 ? void 0 : val.status;
  const code: undefined | ClientErrorCodeField =
    val.code == void 0 ? void 0 : deserializeClientErrorCodeField(val.code);
  const message: undefined | string =
    val.message == void 0 ? void 0 : val.message;
  const contextInfo: undefined | ClientErrorContextInfoField =
    val.context_info == void 0
      ? void 0
      : deserializeClientErrorContextInfoField(val.context_info);
  const helpUrl: undefined | string =
    val.help_url == void 0 ? void 0 : val.help_url;
  const requestId: undefined | string =
    val.request_id == void 0 ? void 0 : val.request_id;
  return {
    type: type,
    status: status,
    code: code,
    message: message,
    contextInfo: contextInfo,
    helpUrl: helpUrl,
    requestId: requestId,
  } satisfies ClientError;
}