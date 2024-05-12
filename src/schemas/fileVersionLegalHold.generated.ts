import { serializeFileVersionMini } from './fileVersionMini.generated.js';
import { deserializeFileVersionMini } from './fileVersionMini.generated.js';
import { serializeFileMini } from './fileMini.generated.js';
import { deserializeFileMini } from './fileMini.generated.js';
import { serializeLegalHoldPolicyAssignment } from './legalHoldPolicyAssignment.generated.js';
import { deserializeLegalHoldPolicyAssignment } from './legalHoldPolicyAssignment.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { FileVersionMini } from './fileVersionMini.generated.js';
import { FileMini } from './fileMini.generated.js';
import { LegalHoldPolicyAssignment } from './legalHoldPolicyAssignment.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type FileVersionLegalHoldTypeField = 'file_version_legal_hold';
export interface FileVersionLegalHold {
  readonly id?: string;
  readonly type?: FileVersionLegalHoldTypeField;
  readonly fileVersion?: FileVersionMini;
  readonly file?: FileMini;
  readonly legalHoldPolicyAssignments?: readonly LegalHoldPolicyAssignment[];
  readonly deletedAt?: DateTime;
}
export function serializeFileVersionLegalHoldTypeField(
  val: FileVersionLegalHoldTypeField
): SerializedData {
  return val;
}
export function deserializeFileVersionLegalHoldTypeField(
  val: SerializedData
): FileVersionLegalHoldTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "FileVersionLegalHoldTypeField"',
    });
  }
  if (val == 'file_version_legal_hold') {
    return 'file_version_legal_hold';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeFileVersionLegalHold(
  val: FileVersionLegalHold
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeFileVersionLegalHoldTypeField(val.type),
    ['file_version']:
      val.fileVersion == void 0
        ? void 0
        : serializeFileVersionMini(val.fileVersion),
    ['file']: val.file == void 0 ? void 0 : serializeFileMini(val.file),
    ['legal_hold_policy_assignments']:
      val.legalHoldPolicyAssignments == void 0
        ? void 0
        : (val.legalHoldPolicyAssignments.map(function (
            item: LegalHoldPolicyAssignment
          ): SerializedData {
            return serializeLegalHoldPolicyAssignment(item);
          }) as readonly any[]),
    ['deleted_at']:
      val.deletedAt == void 0 ? void 0 : serializeDateTime(val.deletedAt),
  };
}
export function deserializeFileVersionLegalHold(
  val: SerializedData
): FileVersionLegalHold {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "FileVersionLegalHold"',
    });
  }
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "FileVersionLegalHold"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | FileVersionLegalHoldTypeField =
    val.type == void 0
      ? void 0
      : deserializeFileVersionLegalHoldTypeField(val.type);
  const fileVersion: undefined | FileVersionMini =
    val.file_version == void 0
      ? void 0
      : deserializeFileVersionMini(val.file_version);
  const file: undefined | FileMini =
    val.file == void 0 ? void 0 : deserializeFileMini(val.file);
  if (
    !(val.legal_hold_policy_assignments == void 0) &&
    !sdIsList(val.legal_hold_policy_assignments)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting array for "legal_hold_policy_assignments" of type "FileVersionLegalHold"',
    });
  }
  const legalHoldPolicyAssignments:
    | undefined
    | readonly LegalHoldPolicyAssignment[] =
    val.legal_hold_policy_assignments == void 0
      ? void 0
      : sdIsList(val.legal_hold_policy_assignments)
      ? (val.legal_hold_policy_assignments.map(function (
          itm: SerializedData
        ): LegalHoldPolicyAssignment {
          return deserializeLegalHoldPolicyAssignment(itm);
        }) as readonly any[])
      : [];
  if (!(val.deleted_at == void 0) && !sdIsString(val.deleted_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "deleted_at" of type "FileVersionLegalHold"',
    });
  }
  const deletedAt: undefined | DateTime =
    val.deleted_at == void 0 ? void 0 : deserializeDateTime(val.deleted_at);
  return {
    id: id,
    type: type,
    fileVersion: fileVersion,
    file: file,
    legalHoldPolicyAssignments: legalHoldPolicyAssignments,
    deletedAt: deletedAt,
  } satisfies FileVersionLegalHold;
}
