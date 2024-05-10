import { serializeStoragePolicyMini } from './storagePolicyMini.generated.js';
import { deserializeStoragePolicyMini } from './storagePolicyMini.generated.js';
import { StoragePolicyMini } from './storagePolicyMini.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type StoragePolicyAssignmentTypeField = 'storage_policy_assignment';
export interface StoragePolicyAssignmentAssignedToField {
  readonly id?: string;
  readonly type?: string;
}
export class StoragePolicyAssignment {
  readonly id!: string;
  readonly type: StoragePolicyAssignmentTypeField =
    'storage_policy_assignment' as StoragePolicyAssignmentTypeField;
  readonly storagePolicy?: StoragePolicyMini;
  readonly assignedTo?: StoragePolicyAssignmentAssignedToField;
  constructor(
    fields: Omit<StoragePolicyAssignment, 'type'> &
      Partial<Pick<StoragePolicyAssignment, 'type'>>
  ) {
    if (fields.id) {
      this.id = fields.id;
    }
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.storagePolicy) {
      this.storagePolicy = fields.storagePolicy;
    }
    if (fields.assignedTo) {
      this.assignedTo = fields.assignedTo;
    }
  }
}
export interface StoragePolicyAssignmentInput {
  readonly id: string;
  readonly type?: StoragePolicyAssignmentTypeField;
  readonly storagePolicy?: StoragePolicyMini;
  readonly assignedTo?: StoragePolicyAssignmentAssignedToField;
}
export function serializeStoragePolicyAssignmentTypeField(
  val: StoragePolicyAssignmentTypeField
): SerializedData {
  return val;
}
export function deserializeStoragePolicyAssignmentTypeField(
  val: any
): StoragePolicyAssignmentTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "StoragePolicyAssignmentTypeField"',
    });
  }
  if (val == 'storage_policy_assignment') {
    return 'storage_policy_assignment';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeStoragePolicyAssignmentAssignedToField(
  val: StoragePolicyAssignmentAssignedToField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']: val.type == void 0 ? void 0 : val.type,
  };
}
export function deserializeStoragePolicyAssignmentAssignedToField(
  val: any
): StoragePolicyAssignmentAssignedToField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | string = val.type == void 0 ? void 0 : val.type;
  return {
    id: id,
    type: type,
  } satisfies StoragePolicyAssignmentAssignedToField;
}
export function serializeStoragePolicyAssignment(
  val: StoragePolicyAssignment
): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeStoragePolicyAssignmentTypeField(val.type),
    ['storage_policy']:
      val.storagePolicy == void 0
        ? void 0
        : serializeStoragePolicyMini(val.storagePolicy),
    ['assigned_to']:
      val.assignedTo == void 0
        ? void 0
        : serializeStoragePolicyAssignmentAssignedToField(val.assignedTo),
  };
}
export function deserializeStoragePolicyAssignment(
  val: any
): StoragePolicyAssignment {
  const id: string = val.id;
  const type: StoragePolicyAssignmentTypeField =
    deserializeStoragePolicyAssignmentTypeField(val.type);
  const storagePolicy: undefined | StoragePolicyMini =
    val.storage_policy == void 0
      ? void 0
      : deserializeStoragePolicyMini(val.storage_policy);
  const assignedTo: undefined | StoragePolicyAssignmentAssignedToField =
    val.assigned_to == void 0
      ? void 0
      : deserializeStoragePolicyAssignmentAssignedToField(val.assigned_to);
  return {
    id: id,
    type: type,
    storagePolicy: storagePolicy,
    assignedTo: assignedTo,
  } satisfies StoragePolicyAssignment;
}
export function serializeStoragePolicyAssignmentInput(
  val: StoragePolicyAssignmentInput
): SerializedData {
  return {
    ['id']: val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeStoragePolicyAssignmentTypeField(val.type),
    ['storage_policy']:
      val.storagePolicy == void 0
        ? void 0
        : serializeStoragePolicyMini(val.storagePolicy),
    ['assigned_to']:
      val.assignedTo == void 0
        ? void 0
        : serializeStoragePolicyAssignmentAssignedToField(val.assignedTo),
  };
}
export function deserializeStoragePolicyAssignmentInput(
  val: any
): StoragePolicyAssignmentInput {
  const id: string = val.id;
  const type: undefined | StoragePolicyAssignmentTypeField =
    val.type == void 0
      ? void 0
      : deserializeStoragePolicyAssignmentTypeField(val.type);
  const storagePolicy: undefined | StoragePolicyMini =
    val.storage_policy == void 0
      ? void 0
      : deserializeStoragePolicyMini(val.storage_policy);
  const assignedTo: undefined | StoragePolicyAssignmentAssignedToField =
    val.assigned_to == void 0
      ? void 0
      : deserializeStoragePolicyAssignmentAssignedToField(val.assigned_to);
  return {
    id: id,
    type: type,
    storagePolicy: storagePolicy,
    assignedTo: assignedTo,
  } satisfies StoragePolicyAssignmentInput;
}
