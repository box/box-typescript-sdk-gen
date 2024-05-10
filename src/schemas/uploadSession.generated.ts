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
export type UploadSessionTypeField = 'upload_session';
export interface UploadSessionSessionEndpointsField {
  readonly uploadPart?: string;
  readonly commit?: string;
  readonly abort?: string;
  readonly listParts?: string;
  readonly status?: string;
  readonly logEvent?: string;
}
export interface UploadSession {
  readonly id?: string;
  readonly type?: UploadSessionTypeField;
  readonly sessionExpiresAt?: DateTime;
  readonly partSize?: number;
  readonly totalParts?: number;
  readonly numPartsProcessed?: number;
  readonly sessionEndpoints?: UploadSessionSessionEndpointsField;
}
export function serializeUploadSessionTypeField(
  val: UploadSessionTypeField
): SerializedData {
  return val;
}
export function deserializeUploadSessionTypeField(
  val: any
): UploadSessionTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "UploadSessionTypeField"',
    });
  }
  if (val == 'upload_session') {
    return 'upload_session';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUploadSessionSessionEndpointsField(
  val: UploadSessionSessionEndpointsField
): SerializedData {
  return {
    ['upload_part']: val.uploadPart == void 0 ? void 0 : val.uploadPart,
    ['commit']: val.commit == void 0 ? void 0 : val.commit,
    ['abort']: val.abort == void 0 ? void 0 : val.abort,
    ['list_parts']: val.listParts == void 0 ? void 0 : val.listParts,
    ['status']: val.status == void 0 ? void 0 : val.status,
    ['log_event']: val.logEvent == void 0 ? void 0 : val.logEvent,
  };
}
export function deserializeUploadSessionSessionEndpointsField(
  val: any
): UploadSessionSessionEndpointsField {
  const uploadPart: undefined | string =
    val.upload_part == void 0 ? void 0 : val.upload_part;
  const commit: undefined | string = val.commit == void 0 ? void 0 : val.commit;
  const abort: undefined | string = val.abort == void 0 ? void 0 : val.abort;
  const listParts: undefined | string =
    val.list_parts == void 0 ? void 0 : val.list_parts;
  const status: undefined | string = val.status == void 0 ? void 0 : val.status;
  const logEvent: undefined | string =
    val.log_event == void 0 ? void 0 : val.log_event;
  return {
    uploadPart: uploadPart,
    commit: commit,
    abort: abort,
    listParts: listParts,
    status: status,
    logEvent: logEvent,
  } satisfies UploadSessionSessionEndpointsField;
}
export function serializeUploadSession(val: UploadSession): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeUploadSessionTypeField(val.type),
    ['session_expires_at']:
      val.sessionExpiresAt == void 0
        ? void 0
        : serializeDateTime(val.sessionExpiresAt),
    ['part_size']: val.partSize == void 0 ? void 0 : val.partSize,
    ['total_parts']: val.totalParts == void 0 ? void 0 : val.totalParts,
    ['num_parts_processed']:
      val.numPartsProcessed == void 0 ? void 0 : val.numPartsProcessed,
    ['session_endpoints']:
      val.sessionEndpoints == void 0
        ? void 0
        : serializeUploadSessionSessionEndpointsField(val.sessionEndpoints),
  };
}
export function deserializeUploadSession(val: any): UploadSession {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | UploadSessionTypeField =
    val.type == void 0 ? void 0 : deserializeUploadSessionTypeField(val.type);
  const sessionExpiresAt: undefined | DateTime =
    val.session_expires_at == void 0
      ? void 0
      : deserializeDateTime(val.session_expires_at);
  const partSize: undefined | number =
    val.part_size == void 0 ? void 0 : val.part_size;
  const totalParts: undefined | number =
    val.total_parts == void 0 ? void 0 : val.total_parts;
  const numPartsProcessed: undefined | number =
    val.num_parts_processed == void 0 ? void 0 : val.num_parts_processed;
  const sessionEndpoints: undefined | UploadSessionSessionEndpointsField =
    val.session_endpoints == void 0
      ? void 0
      : deserializeUploadSessionSessionEndpointsField(val.session_endpoints);
  return {
    id: id,
    type: type,
    sessionExpiresAt: sessionExpiresAt,
    partSize: partSize,
    totalParts: totalParts,
    numPartsProcessed: numPartsProcessed,
    sessionEndpoints: sessionEndpoints,
  } satisfies UploadSession;
}
