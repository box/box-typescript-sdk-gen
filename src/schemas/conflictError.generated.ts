import { serializeClientErrorTypeField } from './clientError.generated.js';
import { deserializeClientErrorTypeField } from './clientError.generated.js';
import { serializeClientErrorCodeField } from './clientError.generated.js';
import { deserializeClientErrorCodeField } from './clientError.generated.js';
import { serializeClientErrorContextInfoField } from './clientError.generated.js';
import { deserializeClientErrorContextInfoField } from './clientError.generated.js';
import { serializeClientError } from './clientError.generated.js';
import { deserializeClientError } from './clientError.generated.js';
import { serializeFileConflict } from './fileConflict.generated.js';
import { deserializeFileConflict } from './fileConflict.generated.js';
import { ClientErrorTypeField } from './clientError.generated.js';
import { ClientErrorCodeField } from './clientError.generated.js';
import { ClientErrorContextInfoField } from './clientError.generated.js';
import { ClientError } from './clientError.generated.js';
import { FileConflict } from './fileConflict.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface ConflictErrorContextInfoField {
  readonly conflicts?: readonly FileConflict[];
}
export type ConflictError = ClientError & {};
export function serializeConflictErrorContextInfoField(
  val: ConflictErrorContextInfoField
): SerializedData {
  return {
    ['conflicts']:
      val.conflicts == void 0
        ? void 0
        : (val.conflicts.map(function (item: FileConflict): SerializedData {
            return serializeFileConflict(item);
          }) as readonly any[]),
  };
}
export function deserializeConflictErrorContextInfoField(
  val: any
): ConflictErrorContextInfoField {
  const conflicts: undefined | readonly FileConflict[] =
    val.conflicts == void 0
      ? void 0
      : sdIsList(val.conflicts)
      ? (val.conflicts.map(function (itm: SerializedData): FileConflict {
          return deserializeFileConflict(itm);
        }) as readonly any[])
      : [];
  return { conflicts: conflicts } satisfies ConflictErrorContextInfoField;
}
export function serializeConflictError(val: ConflictError): SerializedData {
  const base: any = serializeClientError(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "ConflictError"' });
  }
  return { ...base, ...{} };
}
export function deserializeConflictError(val: any): ConflictError {
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
  } satisfies ConflictError;
}
