import { serializeLegalHoldPolicyAssignmentBaseTypeField } from './legalHoldPolicyAssignmentBase.generated.js';
import { deserializeLegalHoldPolicyAssignmentBaseTypeField } from './legalHoldPolicyAssignmentBase.generated.js';
import { serializeLegalHoldPolicyAssignmentBase } from './legalHoldPolicyAssignmentBase.generated.js';
import { deserializeLegalHoldPolicyAssignmentBase } from './legalHoldPolicyAssignmentBase.generated.js';
import { serializeLegalHoldPolicyMini } from './legalHoldPolicyMini.generated.js';
import { deserializeLegalHoldPolicyMini } from './legalHoldPolicyMini.generated.js';
import { serializeFileOrFolderOrWebLink } from './fileOrFolderOrWebLink.generated.js';
import { deserializeFileOrFolderOrWebLink } from './fileOrFolderOrWebLink.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { LegalHoldPolicyAssignmentBaseTypeField } from './legalHoldPolicyAssignmentBase.generated.js';
import { LegalHoldPolicyAssignmentBase } from './legalHoldPolicyAssignmentBase.generated.js';
import { LegalHoldPolicyMini } from './legalHoldPolicyMini.generated.js';
import { FileOrFolderOrWebLink } from './fileOrFolderOrWebLink.generated.js';
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
export type LegalHoldPolicyAssignment = LegalHoldPolicyAssignmentBase & {
  readonly legalHoldPolicy?: LegalHoldPolicyMini;
  readonly assignedTo?: FileOrFolderOrWebLink;
  readonly assignedBy?: UserMini;
  readonly assignedAt?: DateTime;
  readonly deletedAt?: DateTime;
};
export function serializeLegalHoldPolicyAssignment(
  val: LegalHoldPolicyAssignment
): SerializedData {
  const base: any = serializeLegalHoldPolicyAssignmentBase(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "LegalHoldPolicyAssignment"',
    });
  }
  return {
    ...base,
    ...{
      ['legal_hold_policy']:
        val.legalHoldPolicy == void 0
          ? void 0
          : serializeLegalHoldPolicyMini(val.legalHoldPolicy),
      ['assigned_to']:
        val.assignedTo == void 0
          ? void 0
          : serializeFileOrFolderOrWebLink(val.assignedTo),
      ['assigned_by']:
        val.assignedBy == void 0 ? void 0 : serializeUserMini(val.assignedBy),
      ['assigned_at']:
        val.assignedAt == void 0 ? void 0 : serializeDateTime(val.assignedAt),
      ['deleted_at']:
        val.deletedAt == void 0 ? void 0 : serializeDateTime(val.deletedAt),
    },
  };
}
export function deserializeLegalHoldPolicyAssignment(
  val: any
): LegalHoldPolicyAssignment {
  const legalHoldPolicy: undefined | LegalHoldPolicyMini =
    val.legal_hold_policy == void 0
      ? void 0
      : deserializeLegalHoldPolicyMini(val.legal_hold_policy);
  const assignedTo: undefined | FileOrFolderOrWebLink =
    val.assigned_to == void 0
      ? void 0
      : deserializeFileOrFolderOrWebLink(val.assigned_to);
  const assignedBy: undefined | UserMini =
    val.assigned_by == void 0 ? void 0 : deserializeUserMini(val.assigned_by);
  const assignedAt: undefined | DateTime =
    val.assigned_at == void 0 ? void 0 : deserializeDateTime(val.assigned_at);
  const deletedAt: undefined | DateTime =
    val.deleted_at == void 0 ? void 0 : deserializeDateTime(val.deleted_at);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | LegalHoldPolicyAssignmentBaseTypeField =
    val.type == void 0
      ? void 0
      : deserializeLegalHoldPolicyAssignmentBaseTypeField(val.type);
  return {
    legalHoldPolicy: legalHoldPolicy,
    assignedTo: assignedTo,
    assignedBy: assignedBy,
    assignedAt: assignedAt,
    deletedAt: deletedAt,
    id: id,
    type: type,
  } satisfies LegalHoldPolicyAssignment;
}
