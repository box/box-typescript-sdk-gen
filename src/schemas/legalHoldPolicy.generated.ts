import { serializeLegalHoldPolicyMiniTypeField } from './legalHoldPolicyMini.generated.js';
import { deserializeLegalHoldPolicyMiniTypeField } from './legalHoldPolicyMini.generated.js';
import { serializeLegalHoldPolicyMini } from './legalHoldPolicyMini.generated.js';
import { deserializeLegalHoldPolicyMini } from './legalHoldPolicyMini.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { LegalHoldPolicyMiniTypeField } from './legalHoldPolicyMini.generated.js';
import { LegalHoldPolicyMini } from './legalHoldPolicyMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type LegalHoldPolicyStatusField =
  | 'active'
  | 'applying'
  | 'releasing'
  | 'released';
export interface LegalHoldPolicyAssignmentCountsField {
  readonly user?: number;
  readonly folder?: number;
  readonly file?: number;
  readonly fileVersion?: number;
}
export class LegalHoldPolicy extends LegalHoldPolicyMini {
  readonly policyName?: string;
  readonly description?: string;
  readonly status?: LegalHoldPolicyStatusField;
  readonly assignmentCounts?: LegalHoldPolicyAssignmentCountsField;
  readonly createdBy?: UserMini;
  readonly createdAt?: DateTime;
  readonly modifiedAt?: DateTime;
  readonly deletedAt?: DateTime;
  readonly filterStartedAt?: DateTime;
  readonly filterEndedAt?: DateTime;
  readonly releaseNotes?: string;
  constructor(fields: LegalHoldPolicy) {
    super(fields);
  }
}
export function serializeLegalHoldPolicyStatusField(
  val: LegalHoldPolicyStatusField
): SerializedData {
  return val;
}
export function deserializeLegalHoldPolicyStatusField(
  val: any
): LegalHoldPolicyStatusField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "LegalHoldPolicyStatusField"',
    });
  }
  if (val == 'active') {
    return 'active';
  }
  if (val == 'applying') {
    return 'applying';
  }
  if (val == 'releasing') {
    return 'releasing';
  }
  if (val == 'released') {
    return 'released';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeLegalHoldPolicyAssignmentCountsField(
  val: LegalHoldPolicyAssignmentCountsField
): SerializedData {
  return {
    ['user']: val.user == void 0 ? void 0 : val.user,
    ['folder']: val.folder == void 0 ? void 0 : val.folder,
    ['file']: val.file == void 0 ? void 0 : val.file,
    ['file_version']: val.fileVersion == void 0 ? void 0 : val.fileVersion,
  };
}
export function deserializeLegalHoldPolicyAssignmentCountsField(
  val: any
): LegalHoldPolicyAssignmentCountsField {
  const user: undefined | number = val.user == void 0 ? void 0 : val.user;
  const folder: undefined | number = val.folder == void 0 ? void 0 : val.folder;
  const file: undefined | number = val.file == void 0 ? void 0 : val.file;
  const fileVersion: undefined | number =
    val.file_version == void 0 ? void 0 : val.file_version;
  return {
    user: user,
    folder: folder,
    file: file,
    fileVersion: fileVersion,
  } satisfies LegalHoldPolicyAssignmentCountsField;
}
export function serializeLegalHoldPolicy(val: LegalHoldPolicy): SerializedData {
  const base: any = serializeLegalHoldPolicyMini(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "LegalHoldPolicy"' });
  }
  return {
    ...base,
    ...{
      ['policy_name']: val.policyName == void 0 ? void 0 : val.policyName,
      ['description']: val.description == void 0 ? void 0 : val.description,
      ['status']:
        val.status == void 0
          ? void 0
          : serializeLegalHoldPolicyStatusField(val.status),
      ['assignment_counts']:
        val.assignmentCounts == void 0
          ? void 0
          : serializeLegalHoldPolicyAssignmentCountsField(val.assignmentCounts),
      ['created_by']:
        val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
      ['created_at']:
        val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
      ['modified_at']:
        val.modifiedAt == void 0 ? void 0 : serializeDateTime(val.modifiedAt),
      ['deleted_at']:
        val.deletedAt == void 0 ? void 0 : serializeDateTime(val.deletedAt),
      ['filter_started_at']:
        val.filterStartedAt == void 0
          ? void 0
          : serializeDateTime(val.filterStartedAt),
      ['filter_ended_at']:
        val.filterEndedAt == void 0
          ? void 0
          : serializeDateTime(val.filterEndedAt),
      ['release_notes']: val.releaseNotes == void 0 ? void 0 : val.releaseNotes,
    },
  };
}
export function deserializeLegalHoldPolicy(val: any): LegalHoldPolicy {
  const policyName: undefined | string =
    val.policy_name == void 0 ? void 0 : val.policy_name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const status: undefined | LegalHoldPolicyStatusField =
    val.status == void 0
      ? void 0
      : deserializeLegalHoldPolicyStatusField(val.status);
  const assignmentCounts: undefined | LegalHoldPolicyAssignmentCountsField =
    val.assignment_counts == void 0
      ? void 0
      : deserializeLegalHoldPolicyAssignmentCountsField(val.assignment_counts);
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  const deletedAt: undefined | DateTime =
    val.deleted_at == void 0 ? void 0 : deserializeDateTime(val.deleted_at);
  const filterStartedAt: undefined | DateTime =
    val.filter_started_at == void 0
      ? void 0
      : deserializeDateTime(val.filter_started_at);
  const filterEndedAt: undefined | DateTime =
    val.filter_ended_at == void 0
      ? void 0
      : deserializeDateTime(val.filter_ended_at);
  const releaseNotes: undefined | string =
    val.release_notes == void 0 ? void 0 : val.release_notes;
  const id: string = val.id;
  const type: LegalHoldPolicyMiniTypeField =
    deserializeLegalHoldPolicyMiniTypeField(val.type);
  return {
    policyName: policyName,
    description: description,
    status: status,
    assignmentCounts: assignmentCounts,
    createdBy: createdBy,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    deletedAt: deletedAt,
    filterStartedAt: filterStartedAt,
    filterEndedAt: filterEndedAt,
    releaseNotes: releaseNotes,
    id: id,
    type: type,
  } satisfies LegalHoldPolicy;
}
