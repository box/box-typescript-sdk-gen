import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class RetentionPolicyAssignmentBase {
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
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeRetentionPolicyAssignmentBaseTypeField(val) {
    return val;
}
export function deserializeRetentionPolicyAssignmentBaseTypeField(val) {
    if (val == 'retention_policy_assignment') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize RetentionPolicyAssignmentBaseTypeField",
    });
}
export function serializeRetentionPolicyAssignmentBase(val) {
    return {
        ['id']: val.id,
        ['type']: serializeRetentionPolicyAssignmentBaseTypeField(val.type),
    };
}
export function deserializeRetentionPolicyAssignmentBase(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "RetentionPolicyAssignmentBase"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "RetentionPolicyAssignmentBase" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "RetentionPolicyAssignmentBase"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "RetentionPolicyAssignmentBase" to be defined',
        });
    }
    const type = deserializeRetentionPolicyAssignmentBaseTypeField(val.type);
    return { id: id, type: type };
}
export function serializeRetentionPolicyAssignmentBaseInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeRetentionPolicyAssignmentBaseTypeField(val.type),
    };
}
export function deserializeRetentionPolicyAssignmentBaseInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "RetentionPolicyAssignmentBaseInput"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "RetentionPolicyAssignmentBaseInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "RetentionPolicyAssignmentBaseInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeRetentionPolicyAssignmentBaseTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=retentionPolicyAssignmentBase.generated.js.map