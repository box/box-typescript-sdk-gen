import { serializeStoragePolicyMini } from './storagePolicyMini.generated.js';
import { deserializeStoragePolicyMini } from './storagePolicyMini.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class StoragePolicyAssignment {
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
export function serializeStoragePolicyAssignmentTypeField(val) {
    return val;
}
export function deserializeStoragePolicyAssignmentTypeField(val) {
    if (val == 'storage_policy_assignment') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize StoragePolicyAssignmentTypeField",
    });
}
export function serializeStoragePolicyAssignmentAssignedToField(val) {
    return { ['id']: val.id, ['type']: val.type };
}
export function deserializeStoragePolicyAssignmentAssignedToField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "StoragePolicyAssignmentAssignedToField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "StoragePolicyAssignmentAssignedToField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.type == void 0) && !sdIsString(val.type)) {
        throw new BoxSdkError({
            message: 'Expecting string for "type" of type "StoragePolicyAssignmentAssignedToField"',
        });
    }
    const type = val.type == void 0 ? void 0 : val.type;
    return {
        id: id,
        type: type,
    };
}
export function serializeStoragePolicyAssignment(val) {
    return {
        ['id']: val.id,
        ['type']: serializeStoragePolicyAssignmentTypeField(val.type),
        ['storage_policy']: val.storagePolicy == void 0
            ? val.storagePolicy
            : serializeStoragePolicyMini(val.storagePolicy),
        ['assigned_to']: val.assignedTo == void 0
            ? val.assignedTo
            : serializeStoragePolicyAssignmentAssignedToField(val.assignedTo),
    };
}
export function deserializeStoragePolicyAssignment(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "StoragePolicyAssignment"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "StoragePolicyAssignment" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "StoragePolicyAssignment"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "StoragePolicyAssignment" to be defined',
        });
    }
    const type = deserializeStoragePolicyAssignmentTypeField(val.type);
    const storagePolicy = val.storage_policy == void 0
        ? void 0
        : deserializeStoragePolicyMini(val.storage_policy);
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
export function serializeStoragePolicyAssignmentInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeStoragePolicyAssignmentTypeField(val.type),
        ['storage_policy']: val.storagePolicy == void 0
            ? val.storagePolicy
            : serializeStoragePolicyMini(val.storagePolicy),
        ['assigned_to']: val.assignedTo == void 0
            ? val.assignedTo
            : serializeStoragePolicyAssignmentAssignedToField(val.assignedTo),
    };
}
export function deserializeStoragePolicyAssignmentInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "StoragePolicyAssignmentInput"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "StoragePolicyAssignmentInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "StoragePolicyAssignmentInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeStoragePolicyAssignmentTypeField(val.type);
    const storagePolicy = val.storage_policy == void 0
        ? void 0
        : deserializeStoragePolicyMini(val.storage_policy);
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