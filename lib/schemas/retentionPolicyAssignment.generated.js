"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetentionPolicyAssignment = void 0;
exports.serializeRetentionPolicyAssignmentTypeField = serializeRetentionPolicyAssignmentTypeField;
exports.deserializeRetentionPolicyAssignmentTypeField = deserializeRetentionPolicyAssignmentTypeField;
exports.serializeRetentionPolicyAssignmentAssignedToTypeField = serializeRetentionPolicyAssignmentAssignedToTypeField;
exports.deserializeRetentionPolicyAssignmentAssignedToTypeField = deserializeRetentionPolicyAssignmentAssignedToTypeField;
exports.serializeRetentionPolicyAssignmentAssignedToField = serializeRetentionPolicyAssignmentAssignedToField;
exports.deserializeRetentionPolicyAssignmentAssignedToField = deserializeRetentionPolicyAssignmentAssignedToField;
exports.serializeRetentionPolicyAssignmentFilterFieldsField = serializeRetentionPolicyAssignmentFilterFieldsField;
exports.deserializeRetentionPolicyAssignmentFilterFieldsField = deserializeRetentionPolicyAssignmentFilterFieldsField;
exports.serializeRetentionPolicyAssignment = serializeRetentionPolicyAssignment;
exports.deserializeRetentionPolicyAssignment = deserializeRetentionPolicyAssignment;
exports.serializeRetentionPolicyAssignmentInput = serializeRetentionPolicyAssignmentInput;
exports.deserializeRetentionPolicyAssignmentInput = deserializeRetentionPolicyAssignmentInput;
const retentionPolicyMini_generated_js_1 = require("./retentionPolicyMini.generated.js");
const retentionPolicyMini_generated_js_2 = require("./retentionPolicyMini.generated.js");
const userMini_generated_js_1 = require("./userMini.generated.js");
const userMini_generated_js_2 = require("./userMini.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class RetentionPolicyAssignment {
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
exports.RetentionPolicyAssignment = RetentionPolicyAssignment;
function serializeRetentionPolicyAssignmentTypeField(val) {
    return val;
}
function deserializeRetentionPolicyAssignmentTypeField(val) {
    if (val == 'retention_policy_assignment') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize RetentionPolicyAssignmentTypeField",
    });
}
function serializeRetentionPolicyAssignmentAssignedToTypeField(val) {
    return val;
}
function deserializeRetentionPolicyAssignmentAssignedToTypeField(val) {
    if (val == 'folder') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    if (val == 'metadata_template') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize RetentionPolicyAssignmentAssignedToTypeField",
    });
}
function serializeRetentionPolicyAssignmentAssignedToField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeRetentionPolicyAssignmentAssignedToTypeField(val.type),
    };
}
function deserializeRetentionPolicyAssignmentAssignedToField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "RetentionPolicyAssignmentAssignedToField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
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
function serializeRetentionPolicyAssignmentFilterFieldsField(val) {
    return { ['field']: val.field, ['value']: val.value };
}
function deserializeRetentionPolicyAssignmentFilterFieldsField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "RetentionPolicyAssignmentFilterFieldsField"',
        });
    }
    if (!(val.field == void 0) && !(0, json_js_1.sdIsString)(val.field)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "field" of type "RetentionPolicyAssignmentFilterFieldsField"',
        });
    }
    const field = val.field == void 0 ? void 0 : val.field;
    if (!(val.value == void 0) && !(0, json_js_1.sdIsString)(val.value)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "value" of type "RetentionPolicyAssignmentFilterFieldsField"',
        });
    }
    const value = val.value == void 0 ? void 0 : val.value;
    return {
        field: field,
        value: value,
    };
}
function serializeRetentionPolicyAssignment(val) {
    return {
        ['id']: val.id,
        ['type']: serializeRetentionPolicyAssignmentTypeField(val.type),
        ['retention_policy']: val.retentionPolicy == void 0
            ? val.retentionPolicy
            : (0, retentionPolicyMini_generated_js_1.serializeRetentionPolicyMini)(val.retentionPolicy),
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
            : (0, userMini_generated_js_1.serializeUserMini)(val.assignedBy),
        ['assigned_at']: val.assignedAt == void 0
            ? val.assignedAt
            : (0, utils_js_1.serializeDateTime)(val.assignedAt),
        ['start_date_field']: val.startDateField,
    };
}
function deserializeRetentionPolicyAssignment(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "RetentionPolicyAssignment"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "RetentionPolicyAssignment" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "RetentionPolicyAssignment"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "RetentionPolicyAssignment" to be defined',
        });
    }
    const type = deserializeRetentionPolicyAssignmentTypeField(val.type);
    const retentionPolicy = val.retention_policy == void 0
        ? void 0
        : (0, retentionPolicyMini_generated_js_2.deserializeRetentionPolicyMini)(val.retention_policy);
    const assignedTo = val.assigned_to == void 0
        ? void 0
        : deserializeRetentionPolicyAssignmentAssignedToField(val.assigned_to);
    if (!(val.filter_fields == void 0) && !(0, json_js_2.sdIsList)(val.filter_fields)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "filter_fields" of type "RetentionPolicyAssignment"',
        });
    }
    const filterFields = val.filter_fields == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.filter_fields)
            ? val.filter_fields.map(function (itm) {
                return deserializeRetentionPolicyAssignmentFilterFieldsField(itm);
            })
            : [];
    const assignedBy = val.assigned_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.assigned_by);
    if (!(val.assigned_at == void 0) && !(0, json_js_1.sdIsString)(val.assigned_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "assigned_at" of type "RetentionPolicyAssignment"',
        });
    }
    const assignedAt = val.assigned_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.assigned_at);
    if (!(val.start_date_field == void 0) && !(0, json_js_1.sdIsString)(val.start_date_field)) {
        throw new errors_js_1.BoxSdkError({
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
function serializeRetentionPolicyAssignmentInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeRetentionPolicyAssignmentTypeField(val.type),
        ['retention_policy']: val.retentionPolicy == void 0
            ? val.retentionPolicy
            : (0, retentionPolicyMini_generated_js_1.serializeRetentionPolicyMini)(val.retentionPolicy),
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
            : (0, userMini_generated_js_1.serializeUserMini)(val.assignedBy),
        ['assigned_at']: val.assignedAt == void 0
            ? val.assignedAt
            : (0, utils_js_1.serializeDateTime)(val.assignedAt),
        ['start_date_field']: val.startDateField,
    };
}
function deserializeRetentionPolicyAssignmentInput(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "RetentionPolicyAssignmentInput"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "RetentionPolicyAssignmentInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "RetentionPolicyAssignmentInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeRetentionPolicyAssignmentTypeField(val.type);
    const retentionPolicy = val.retention_policy == void 0
        ? void 0
        : (0, retentionPolicyMini_generated_js_2.deserializeRetentionPolicyMini)(val.retention_policy);
    const assignedTo = val.assigned_to == void 0
        ? void 0
        : deserializeRetentionPolicyAssignmentAssignedToField(val.assigned_to);
    if (!(val.filter_fields == void 0) && !(0, json_js_2.sdIsList)(val.filter_fields)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "filter_fields" of type "RetentionPolicyAssignmentInput"',
        });
    }
    const filterFields = val.filter_fields == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.filter_fields)
            ? val.filter_fields.map(function (itm) {
                return deserializeRetentionPolicyAssignmentFilterFieldsField(itm);
            })
            : [];
    const assignedBy = val.assigned_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.assigned_by);
    if (!(val.assigned_at == void 0) && !(0, json_js_1.sdIsString)(val.assigned_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "assigned_at" of type "RetentionPolicyAssignmentInput"',
        });
    }
    const assignedAt = val.assigned_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.assigned_at);
    if (!(val.start_date_field == void 0) && !(0, json_js_1.sdIsString)(val.start_date_field)) {
        throw new errors_js_1.BoxSdkError({
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