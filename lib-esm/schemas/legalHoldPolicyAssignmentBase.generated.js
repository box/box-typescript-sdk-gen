import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeLegalHoldPolicyAssignmentBaseTypeField(val) {
    return val;
}
export function deserializeLegalHoldPolicyAssignmentBaseTypeField(val) {
    if (val == 'legal_hold_policy_assignment') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize LegalHoldPolicyAssignmentBaseTypeField",
    });
}
export function serializeLegalHoldPolicyAssignmentBase(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeLegalHoldPolicyAssignmentBaseTypeField(val.type),
    };
}
export function deserializeLegalHoldPolicyAssignmentBase(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "LegalHoldPolicyAssignmentBase"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "LegalHoldPolicyAssignmentBase"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeLegalHoldPolicyAssignmentBaseTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=legalHoldPolicyAssignmentBase.generated.js.map