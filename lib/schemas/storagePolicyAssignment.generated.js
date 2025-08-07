"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoragePolicyAssignment = void 0;
exports.serializeStoragePolicyAssignmentTypeField = serializeStoragePolicyAssignmentTypeField;
exports.deserializeStoragePolicyAssignmentTypeField = deserializeStoragePolicyAssignmentTypeField;
exports.serializeStoragePolicyAssignmentAssignedToField = serializeStoragePolicyAssignmentAssignedToField;
exports.deserializeStoragePolicyAssignmentAssignedToField = deserializeStoragePolicyAssignmentAssignedToField;
exports.serializeStoragePolicyAssignment = serializeStoragePolicyAssignment;
exports.deserializeStoragePolicyAssignment = deserializeStoragePolicyAssignment;
exports.serializeStoragePolicyAssignmentInput = serializeStoragePolicyAssignmentInput;
exports.deserializeStoragePolicyAssignmentInput = deserializeStoragePolicyAssignmentInput;
const storagePolicyMini_generated_js_1 = require("./storagePolicyMini.generated.js");
const storagePolicyMini_generated_js_2 = require("./storagePolicyMini.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class StoragePolicyAssignment {
    constructor(fields) {
        /**
         * The value will always be `storage_policy_assignment`. */
        this.type = 'storage_policy_assignment';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.storagePolicy !== undefined) {
            this.storagePolicy = fields.storagePolicy;
        }
        if (fields.assignedTo !== undefined) {
            this.assignedTo = fields.assignedTo;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.StoragePolicyAssignment = StoragePolicyAssignment;
function serializeStoragePolicyAssignmentTypeField(val) {
    return val;
}
function deserializeStoragePolicyAssignmentTypeField(val) {
    if (val == 'storage_policy_assignment') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize StoragePolicyAssignmentTypeField",
    });
}
function serializeStoragePolicyAssignmentAssignedToField(val) {
    return { ['id']: val.id, ['type']: val.type };
}
function deserializeStoragePolicyAssignmentAssignedToField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "StoragePolicyAssignmentAssignedToField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "StoragePolicyAssignmentAssignedToField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.type == void 0) && !(0, json_js_1.sdIsString)(val.type)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "type" of type "StoragePolicyAssignmentAssignedToField"',
        });
    }
    const type = val.type == void 0 ? void 0 : val.type;
    return {
        id: id,
        type: type,
    };
}
function serializeStoragePolicyAssignment(val) {
    return {
        ['id']: val.id,
        ['type']: serializeStoragePolicyAssignmentTypeField(val.type),
        ['storage_policy']: val.storagePolicy == void 0
            ? val.storagePolicy
            : (0, storagePolicyMini_generated_js_1.serializeStoragePolicyMini)(val.storagePolicy),
        ['assigned_to']: val.assignedTo == void 0
            ? val.assignedTo
            : serializeStoragePolicyAssignmentAssignedToField(val.assignedTo),
    };
}
function deserializeStoragePolicyAssignment(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "StoragePolicyAssignment"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "StoragePolicyAssignment" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "StoragePolicyAssignment"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "StoragePolicyAssignment" to be defined',
        });
    }
    const type = deserializeStoragePolicyAssignmentTypeField(val.type);
    const storagePolicy = val.storage_policy == void 0
        ? void 0
        : (0, storagePolicyMini_generated_js_2.deserializeStoragePolicyMini)(val.storage_policy);
    const assignedTo = val.assigned_to == void 0
        ? void 0
        : deserializeStoragePolicyAssignmentAssignedToField(val.assigned_to);
    return {
        id: id,
        type: type,
        storagePolicy: storagePolicy,
        assignedTo: assignedTo,
    };
}
function serializeStoragePolicyAssignmentInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeStoragePolicyAssignmentTypeField(val.type),
        ['storage_policy']: val.storagePolicy == void 0
            ? val.storagePolicy
            : (0, storagePolicyMini_generated_js_1.serializeStoragePolicyMini)(val.storagePolicy),
        ['assigned_to']: val.assignedTo == void 0
            ? val.assignedTo
            : serializeStoragePolicyAssignmentAssignedToField(val.assignedTo),
    };
}
function deserializeStoragePolicyAssignmentInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "StoragePolicyAssignmentInput"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "StoragePolicyAssignmentInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "StoragePolicyAssignmentInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeStoragePolicyAssignmentTypeField(val.type);
    const storagePolicy = val.storage_policy == void 0
        ? void 0
        : (0, storagePolicyMini_generated_js_2.deserializeStoragePolicyMini)(val.storage_policy);
    const assignedTo = val.assigned_to == void 0
        ? void 0
        : deserializeStoragePolicyAssignmentAssignedToField(val.assigned_to);
    return {
        id: id,
        type: type,
        storagePolicy: storagePolicy,
        assignedTo: assignedTo,
    };
}
//# sourceMappingURL=storagePolicyAssignment.generated.js.map