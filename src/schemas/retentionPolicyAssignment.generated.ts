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
  val: SerializedData
): RetentionPolicyAssignmentTypeField {
  if (val == 'retention_policy_assignment') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize RetentionPolicyAssignmentTypeField",
  });
}
export function serializeRetentionPolicyAssignmentAssignedToTypeField(
  val: RetentionPolicyAssignmentAssignedToTypeField
): SerializedData {
  return val;
}
export function deserializeRetentionPolicyAssignmentAssignedToTypeField(
  val: SerializedData
): RetentionPolicyAssignmentAssignedToTypeField {
  if (val == 'folder') {
    return val;
  }
  if (val == 'enterprise') {
    return val;
  }
  if (val == 'metadata_template') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize RetentionPolicyAssignmentAssignedToTypeField",
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
  val: SerializedData
): RetentionPolicyAssignmentAssignedToField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "RetentionPolicyAssignmentAssignedToField"',
    });
  }
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "RetentionPolicyAssignmentAssignedToField"',
    });
  }
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
  val: SerializedData
): RetentionPolicyAssignmentFilterFieldsField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "RetentionPolicyAssignmentFilterFieldsField"',
    });
  }
  if (!(val.field == void 0) && !sdIsString(val.field)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "field" of type "RetentionPolicyAssignmentFilterFieldsField"',
    });
  }
  const field: undefined | string = val.field == void 0 ? void 0 : val.field;
  if (!(val.value == void 0) && !sdIsString(val.value)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "value" of type "RetentionPolicyAssignmentFilterFieldsField"',
    });
  }
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
  val: SerializedData
): RetentionPolicyAssignment {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "RetentionPolicyAssignment"',
    });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "RetentionPolicyAssignment" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "RetentionPolicyAssignment"',
    });
  }
  const id: string = val.id;
  if (val.type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "type" of type "RetentionPolicyAssignment" to be defined',
    });
  }
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
  if (!(val.filter_fields == void 0) && !sdIsList(val.filter_fields)) {
    throw new BoxSdkError({
      message:
        'Expecting array for "filter_fields" of type "RetentionPolicyAssignment"',
    });
  }
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
  if (!(val.assigned_at == void 0) && !sdIsString(val.assigned_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "assigned_at" of type "RetentionPolicyAssignment"',
    });
  }
  const assignedAt: undefined | DateTime =
    val.assigned_at == void 0 ? void 0 : deserializeDateTime(val.assigned_at);
  if (!(val.start_date_field == void 0) && !sdIsString(val.start_date_field)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "start_date_field" of type "RetentionPolicyAssignment"',
    });
  }
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
  val: SerializedData
): RetentionPolicyAssignmentInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "RetentionPolicyAssignmentInput"',
    });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "RetentionPolicyAssignmentInput" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "RetentionPolicyAssignmentInput"',
    });
  }
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
  if (!(val.filter_fields == void 0) && !sdIsList(val.filter_fields)) {
    throw new BoxSdkError({
      message:
        'Expecting array for "filter_fields" of type "RetentionPolicyAssignmentInput"',
    });
  }
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
  if (!(val.assigned_at == void 0) && !sdIsString(val.assigned_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "assigned_at" of type "RetentionPolicyAssignmentInput"',
    });
  }
  const assignedAt: undefined | DateTime =
    val.assigned_at == void 0 ? void 0 : deserializeDateTime(val.assigned_at);
  if (!(val.start_date_field == void 0) && !sdIsString(val.start_date_field)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "start_date_field" of type "RetentionPolicyAssignmentInput"',
    });
  }
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
