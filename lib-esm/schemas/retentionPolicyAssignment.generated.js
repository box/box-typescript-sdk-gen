import { serializeRetentionPolicyMini } from './retentionPolicyMini.generated.js';
import { deserializeRetentionPolicyMini } from './retentionPolicyMini.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class RetentionPolicyAssignment {
    constructor(fields) {
        /**
         * The value will always be `retention_policy_assignment`. */
        this.type = 'retention_policy_assignment';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.retentionPolicy !== undefined) {
            this.retentionPolicy = fields.retentionPolicy;
        }
        if (fields.assignedTo !== undefined) {
            this.assignedTo = fields.assignedTo;
        }
        if (fields.filterFields !== undefined) {
            this.filterFields = fields.filterFields;
        }
        if (fields.assignedBy !== undefined) {
            this.assignedBy = fields.assignedBy;
        }
        if (fields.assignedAt !== undefined) {
            this.assignedAt = fields.assignedAt;
        }
        if (fields.startDateField !== undefined) {
            this.startDateField = fields.startDateField;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeRetentionPolicyAssignmentTypeField(val) {
    return val;
}
export function deserializeRetentionPolicyAssignmentTypeField(val) {
    if (val == 'retention_policy_assignment') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize RetentionPolicyAssignmentTypeField",
    });
}
export function serializeRetentionPolicyAssignmentAssignedToTypeField(val) {
    return val;
}
export function deserializeRetentionPolicyAssignmentAssignedToTypeField(val) {
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
export function serializeRetentionPolicyAssignmentAssignedToField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeRetentionPolicyAssignmentAssignedToTypeField(val.type),
    };
}
export function deserializeRetentionPolicyAssignmentAssignedToField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "RetentionPolicyAssignmentAssignedToField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "RetentionPolicyAssignmentAssignedToField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeRetentionPolicyAssignmentAssignedToTypeField(val.type);
    return {
        id: id,
        type: type,
    };
}
export function serializeRetentionPolicyAssignmentFilterFieldsField(val) {
    return { ['field']: val.field, ['value']: val.value };
}
export function deserializeRetentionPolicyAssignmentFilterFieldsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "RetentionPolicyAssignmentFilterFieldsField"',
        });
    }
    if (!(val.field == void 0) && !sdIsString(val.field)) {
        throw new BoxSdkError({
            message: 'Expecting string for "field" of type "RetentionPolicyAssignmentFilterFieldsField"',
        });
    }
    const field = val.field == void 0 ? void 0 : val.field;
    if (!(val.value == void 0) && !sdIsString(val.value)) {
        throw new BoxSdkError({
            message: 'Expecting string for "value" of type "RetentionPolicyAssignmentFilterFieldsField"',
        });
    }
    const value = val.value == void 0 ? void 0 : val.value;
    return {
        field: field,
        value: value,
    };
}
export function serializeRetentionPolicyAssignment(val) {
    return {
        ['id']: val.id,
        ['type']: serializeRetentionPolicyAssignmentTypeField(val.type),
        ['retention_policy']: val.retentionPolicy == void 0
            ? val.retentionPolicy
            : serializeRetentionPolicyMini(val.retentionPolicy),
        ['assigned_to']: val.assignedTo == void 0
            ? val.assignedTo
            : serializeRetentionPolicyAssignmentAssignedToField(val.assignedTo),
        ['filter_fields']: val.filterFields == void 0
            ? val.filterFields
            : val.filterFields.map(function (item) {
                return serializeRetentionPolicyAssignmentFilterFieldsField(item);
            }),
        ['assigned_by']: val.assignedBy == void 0
            ? val.assignedBy
            : serializeUserMini(val.assignedBy),
        ['assigned_at']: val.assignedAt == void 0
            ? val.assignedAt
            : serializeDateTime(val.assignedAt),
        ['start_date_field']: val.startDateField,
    };
}
export function deserializeRetentionPolicyAssignment(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "RetentionPolicyAssignment"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "RetentionPolicyAssignment" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "RetentionPolicyAssignment"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "RetentionPolicyAssignment" to be defined',
        });
    }
    const type = deserializeRetentionPolicyAssignmentTypeField(val.type);
    const retentionPolicy = val.retention_policy == void 0
        ? void 0
        : deserializeRetentionPolicyMini(val.retention_policy);
    const assignedTo = val.assigned_to == void 0
        ? void 0
        : deserializeRetentionPolicyAssignmentAssignedToField(val.assigned_to);
    if (!(val.filter_fields == void 0) && !sdIsList(val.filter_fields)) {
        throw new BoxSdkError({
            message: 'Expecting array for "filter_fields" of type "RetentionPolicyAssignment"',
        });
    }
    const filterFields = val.filter_fields == void 0
        ? void 0
        : sdIsList(val.filter_fields)
            ? val.filter_fields.map(function (itm) {
                return deserializeRetentionPolicyAssignmentFilterFieldsField(itm);
            })
            : [];
    const assignedBy = val.assigned_by == void 0 ? void 0 : deserializeUserMini(val.assigned_by);
    if (!(val.assigned_at == void 0) && !sdIsString(val.assigned_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "assigned_at" of type "RetentionPolicyAssignment"',
        });
    }
    const assignedAt = val.assigned_at == void 0 ? void 0 : deserializeDateTime(val.assigned_at);
    if (!(val.start_date_field == void 0) && !sdIsString(val.start_date_field)) {
        throw new BoxSdkError({
            message: 'Expecting string for "start_date_field" of type "RetentionPolicyAssignment"',
        });
    }
    const startDateField = val.start_date_field == void 0 ? void 0 : val.start_date_field;
    return {
        id: id,
        type: type,
        retentionPolicy: retentionPolicy,
        assignedTo: assignedTo,
        filterFields: filterFields,
        assignedBy: assignedBy,
        assignedAt: assignedAt,
        startDateField: startDateField,
    };
}
export function serializeRetentionPolicyAssignmentInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeRetentionPolicyAssignmentTypeField(val.type),
        ['retention_policy']: val.retentionPolicy == void 0
            ? val.retentionPolicy
            : serializeRetentionPolicyMini(val.retentionPolicy),
        ['assigned_to']: val.assignedTo == void 0
            ? val.assignedTo
            : serializeRetentionPolicyAssignmentAssignedToField(val.assignedTo),
        ['filter_fields']: val.filterFields == void 0
            ? val.filterFields
            : val.filterFields.map(function (item) {
                return serializeRetentionPolicyAssignmentFilterFieldsField(item);
            }),
        ['assigned_by']: val.assignedBy == void 0
            ? val.assignedBy
            : serializeUserMini(val.assignedBy),
        ['assigned_at']: val.assignedAt == void 0
            ? val.assignedAt
            : serializeDateTime(val.assignedAt),
        ['start_date_field']: val.startDateField,
    };
}
export function deserializeRetentionPolicyAssignmentInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "RetentionPolicyAssignmentInput"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "RetentionPolicyAssignmentInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "RetentionPolicyAssignmentInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeRetentionPolicyAssignmentTypeField(val.type);
    const retentionPolicy = val.retention_policy == void 0
        ? void 0
        : deserializeRetentionPolicyMini(val.retention_policy);
    const assignedTo = val.assigned_to == void 0
        ? void 0
        : deserializeRetentionPolicyAssignmentAssignedToField(val.assigned_to);
    if (!(val.filter_fields == void 0) && !sdIsList(val.filter_fields)) {
        throw new BoxSdkError({
            message: 'Expecting array for "filter_fields" of type "RetentionPolicyAssignmentInput"',
        });
    }
    const filterFields = val.filter_fields == void 0
        ? void 0
        : sdIsList(val.filter_fields)
            ? val.filter_fields.map(function (itm) {
                return deserializeRetentionPolicyAssignmentFilterFieldsField(itm);
            })
            : [];
    const assignedBy = val.assigned_by == void 0 ? void 0 : deserializeUserMini(val.assigned_by);
    if (!(val.assigned_at == void 0) && !sdIsString(val.assigned_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "assigned_at" of type "RetentionPolicyAssignmentInput"',
        });
    }
    const assignedAt = val.assigned_at == void 0 ? void 0 : deserializeDateTime(val.assigned_at);
    if (!(val.start_date_field == void 0) && !sdIsString(val.start_date_field)) {
        throw new BoxSdkError({
            message: 'Expecting string for "start_date_field" of type "RetentionPolicyAssignmentInput"',
        });
    }
    const startDateField = val.start_date_field == void 0 ? void 0 : val.start_date_field;
    return {
        id: id,
        type: type,
        retentionPolicy: retentionPolicy,
        assignedTo: assignedTo,
        filterFields: filterFields,
        assignedBy: assignedBy,
        assignedAt: assignedAt,
        startDateField: startDateField,
    };
}
//# sourceMappingURL=retentionPolicyAssignment.generated.js.map