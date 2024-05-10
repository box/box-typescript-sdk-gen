import { serializeRetentionPolicyMini } from './retentionPolicyMini.generated.js';
import { deserializeRetentionPolicyMini } from './retentionPolicyMini.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { RetentionPolicyMini } from './retentionPolicyMini.generated.js';
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
export type RetentionPolicyAssignmentTypeField = 'retention_policy_assignment';
export type RetentionPolicyAssignmentAssignedToTypeField =
  | 'folder'
  | 'enterprise'
  | 'metadata_template';
export interface RetentionPolicyAssignmentAssignedToField {
  readonly id?: string;
  readonly type?: RetentionPolicyAssignmentAssignedToTypeField;
}
export interface RetentionPolicyAssignmentFilterFieldsField {
  readonly field?: string;
  readonly value?: string;
}
export class RetentionPolicyAssignment {
  readonly id!: string;
  readonly type: RetentionPolicyAssignmentTypeField =
    'retention_policy_assignment' as RetentionPolicyAssignmentTypeField;
  readonly retentionPolicy?: RetentionPolicyMini;
  readonly assignedTo?: RetentionPolicyAssignmentAssignedToField;
  readonly filterFields?: readonly RetentionPolicyAssignmentFilterFieldsField[];
  readonly assignedBy?: UserMini;
  readonly assignedAt?: DateTime;
  readonly startDateField?: string;
  constructor(
    fields: Omit<RetentionPolicyAssignment, 'type'> &
      Partial<Pick<RetentionPolicyAssignment, 'type'>>
  ) {
    if (fields.id) {
      this.id = fields.id;
    }
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.retentionPolicy) {
      this.retentionPolicy = fields.retentionPolicy;
    }
    if (fields.assignedTo) {
      this.assignedTo = fields.assignedTo;
    }
    if (fields.filterFields) {
      this.filterFields = fields.filterFields;
    }
    if (fields.assignedBy) {
      this.assignedBy = fields.assignedBy;
    }
    if (fields.assignedAt) {
      this.assignedAt = fields.assignedAt;
    }
    if (fields.startDateField) {
      this.startDateField = fields.startDateField;
    }
  }
}
export interface RetentionPolicyAssignmentInput {
  readonly id: string;
  readonly type?: RetentionPolicyAssignmentTypeField;
  readonly retentionPolicy?: RetentionPolicyMini;
  readonly assignedTo?: RetentionPolicyAssignmentAssignedToField;
  readonly filterFields?: readonly RetentionPolicyAssignmentFilterFieldsField[];
  readonly assignedBy?: UserMini;
  readonly assignedAt?: DateTime;
  readonly startDateField?: string;
}
export function serializeRetentionPolicyAssignmentTypeField(
  val: RetentionPolicyAssignmentTypeField
): SerializedData {
  return val;
}
export function deserializeRetentionPolicyAssignmentTypeField(
  val: any
): RetentionPolicyAssignmentTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "RetentionPolicyAssignmentTypeField"',
    });
  }
  if (val == 'retention_policy_assignment') {
    return 'retention_policy_assignment';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeRetentionPolicyAssignmentAssignedToTypeField(
  val: RetentionPolicyAssignmentAssignedToTypeField
): SerializedData {
  return val;
}
export function deserializeRetentionPolicyAssignmentAssignedToTypeField(
  val: any
): RetentionPolicyAssignmentAssignedToTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "RetentionPolicyAssignmentAssignedToTypeField"',
    });
  }
  if (val == 'folder') {
    return 'folder';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  if (val == 'metadata_template') {
    return 'metadata_template';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeRetentionPolicyAssignmentAssignedToField(
  val: RetentionPolicyAssignmentAssignedToField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeRetentionPolicyAssignmentAssignedToTypeField(val.type),
  };
}
export function deserializeRetentionPolicyAssignmentAssignedToField(
  val: any
): RetentionPolicyAssignmentAssignedToField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | RetentionPolicyAssignmentAssignedToTypeField =
    val.type == void 0
      ? void 0
      : deserializeRetentionPolicyAssignmentAssignedToTypeField(val.type);
  return {
    id: id,
    type: type,
  } satisfies RetentionPolicyAssignmentAssignedToField;
}
export function serializeRetentionPolicyAssignmentFilterFieldsField(
  val: RetentionPolicyAssignmentFilterFieldsField
): SerializedData {
  return {
    ['field']: val.field == void 0 ? void 0 : val.field,
    ['value']: val.value == void 0 ? void 0 : val.value,
  };
}
export function deserializeRetentionPolicyAssignmentFilterFieldsField(
  val: any
): RetentionPolicyAssignmentFilterFieldsField {
  const field: undefined | string = val.field == void 0 ? void 0 : val.field;
  const value: undefined | string = val.value == void 0 ? void 0 : val.value;
  return {
    field: field,
    value: value,
  } satisfies RetentionPolicyAssignmentFilterFieldsField;
}
export function serializeRetentionPolicyAssignment(
  val: RetentionPolicyAssignment
): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeRetentionPolicyAssignmentTypeField(val.type),
    ['retention_policy']:
      val.retentionPolicy == void 0
        ? void 0
        : serializeRetentionPolicyMini(val.retentionPolicy),
    ['assigned_to']:
      val.assignedTo == void 0
        ? void 0
        : serializeRetentionPolicyAssignmentAssignedToField(val.assignedTo),
    ['filter_fields']:
      val.filterFields == void 0
        ? void 0
        : (val.filterFields.map(function (
            item: RetentionPolicyAssignmentFilterFieldsField
          ): SerializedData {
            return serializeRetentionPolicyAssignmentFilterFieldsField(item);
          }) as readonly any[]),
    ['assigned_by']:
      val.assignedBy == void 0 ? void 0 : serializeUserMini(val.assignedBy),
    ['assigned_at']:
      val.assignedAt == void 0 ? void 0 : serializeDateTime(val.assignedAt),
    ['start_date_field']:
      val.startDateField == void 0 ? void 0 : val.startDateField,
  };
}
export function deserializeRetentionPolicyAssignment(
  val: any
): RetentionPolicyAssignment {
  const id: string = val.id;
  const type: RetentionPolicyAssignmentTypeField =
    deserializeRetentionPolicyAssignmentTypeField(val.type);
  const retentionPolicy: undefined | RetentionPolicyMini =
    val.retention_policy == void 0
      ? void 0
      : deserializeRetentionPolicyMini(val.retention_policy);
  const assignedTo: undefined | RetentionPolicyAssignmentAssignedToField =
    val.assigned_to == void 0
      ? void 0
      : deserializeRetentionPolicyAssignmentAssignedToField(val.assigned_to);
  const filterFields:
    | undefined
    | readonly RetentionPolicyAssignmentFilterFieldsField[] =
    val.filter_fields == void 0
      ? void 0
      : sdIsList(val.filter_fields)
      ? (val.filter_fields.map(function (
          itm: SerializedData
        ): RetentionPolicyAssignmentFilterFieldsField {
          return deserializeRetentionPolicyAssignmentFilterFieldsField(itm);
        }) as readonly any[])
      : [];
  const assignedBy: undefined | UserMini =
    val.assigned_by == void 0 ? void 0 : deserializeUserMini(val.assigned_by);
  const assignedAt: undefined | DateTime =
    val.assigned_at == void 0 ? void 0 : deserializeDateTime(val.assigned_at);
  const startDateField: undefined | string =
    val.start_date_field == void 0 ? void 0 : val.start_date_field;
  return {
    id: id,
    type: type,
    retentionPolicy: retentionPolicy,
    assignedTo: assignedTo,
    filterFields: filterFields,
    assignedBy: assignedBy,
    assignedAt: assignedAt,
    startDateField: startDateField,
  } satisfies RetentionPolicyAssignment;
}
export function serializeRetentionPolicyAssignmentInput(
  val: RetentionPolicyAssignmentInput
): SerializedData {
  return {
    ['id']: val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeRetentionPolicyAssignmentTypeField(val.type),
    ['retention_policy']:
      val.retentionPolicy == void 0
        ? void 0
        : serializeRetentionPolicyMini(val.retentionPolicy),
    ['assigned_to']:
      val.assignedTo == void 0
        ? void 0
        : serializeRetentionPolicyAssignmentAssignedToField(val.assignedTo),
    ['filter_fields']:
      val.filterFields == void 0
        ? void 0
        : (val.filterFields.map(function (
            item: RetentionPolicyAssignmentFilterFieldsField
          ): SerializedData {
            return serializeRetentionPolicyAssignmentFilterFieldsField(item);
          }) as readonly any[]),
    ['assigned_by']:
      val.assignedBy == void 0 ? void 0 : serializeUserMini(val.assignedBy),
    ['assigned_at']:
      val.assignedAt == void 0 ? void 0 : serializeDateTime(val.assignedAt),
    ['start_date_field']:
      val.startDateField == void 0 ? void 0 : val.startDateField,
  };
}
export function deserializeRetentionPolicyAssignmentInput(
  val: any
): RetentionPolicyAssignmentInput {
  const id: string = val.id;
  const type: undefined | RetentionPolicyAssignmentTypeField =
    val.type == void 0
      ? void 0
      : deserializeRetentionPolicyAssignmentTypeField(val.type);
  const retentionPolicy: undefined | RetentionPolicyMini =
    val.retention_policy == void 0
      ? void 0
      : deserializeRetentionPolicyMini(val.retention_policy);
  const assignedTo: undefined | RetentionPolicyAssignmentAssignedToField =
    val.assigned_to == void 0
      ? void 0
      : deserializeRetentionPolicyAssignmentAssignedToField(val.assigned_to);
  const filterFields:
    | undefined
    | readonly RetentionPolicyAssignmentFilterFieldsField[] =
    val.filter_fields == void 0
      ? void 0
      : sdIsList(val.filter_fields)
      ? (val.filter_fields.map(function (
          itm: SerializedData
        ): RetentionPolicyAssignmentFilterFieldsField {
          return deserializeRetentionPolicyAssignmentFilterFieldsField(itm);
        }) as readonly any[])
      : [];
  const assignedBy: undefined | UserMini =
    val.assigned_by == void 0 ? void 0 : deserializeUserMini(val.assigned_by);
  const assignedAt: undefined | DateTime =
    val.assigned_at == void 0 ? void 0 : deserializeDateTime(val.assigned_at);
  const startDateField: undefined | string =
    val.start_date_field == void 0 ? void 0 : val.start_date_field;
  return {
    id: id,
    type: type,
    retentionPolicy: retentionPolicy,
    assignedTo: assignedTo,
    filterFields: filterFields,
    assignedBy: assignedBy,
    assignedAt: assignedAt,
    startDateField: startDateField,
  } satisfies RetentionPolicyAssignmentInput;
}
