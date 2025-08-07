import { deserializeLegalHoldPolicyAssignmentBaseTypeField } from './legalHoldPolicyAssignmentBase.generated.js';
import { serializeLegalHoldPolicyAssignmentBase } from './legalHoldPolicyAssignmentBase.generated.js';
import { serializeLegalHoldPolicyMini } from './legalHoldPolicyMini.generated.js';
import { deserializeLegalHoldPolicyMini } from './legalHoldPolicyMini.generated.js';
import { serializeFileOrFolderOrWebLink } from './fileOrFolderOrWebLink.generated.js';
import { deserializeFileOrFolderOrWebLink } from './fileOrFolderOrWebLink.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeLegalHoldPolicyAssignment(val) {
    const base = serializeLegalHoldPolicyAssignmentBase(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "LegalHoldPolicyAssignment"',
        });
    }
    return {
        ...base,
        ...{
            ['legal_hold_policy']: val.legalHoldPolicy == void 0
                ? val.legalHoldPolicy
                : serializeLegalHoldPolicyMini(val.legalHoldPolicy),
            ['assigned_to']: val.assignedTo == void 0
                ? val.assignedTo
                : serializeFileOrFolderOrWebLink(val.assignedTo),
            ['assigned_by']: val.assignedBy == void 0
                ? val.assignedBy
                : serializeUserMini(val.assignedBy),
            ['assigned_at']: val.assignedAt == void 0
                ? val.assignedAt
                : serializeDateTime(val.assignedAt),
            ['deleted_at']: val.deletedAt == void 0
                ? val.deletedAt
                : serializeDateTime(val.deletedAt),
        },
    };
}
export function deserializeLegalHoldPolicyAssignment(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "LegalHoldPolicyAssignment"',
        });
    }
    const legalHoldPolicy = val.legal_hold_policy == void 0
        ? void 0
        : deserializeLegalHoldPolicyMini(val.legal_hold_policy);
    const assignedTo = val.assigned_to == void 0
        ? void 0
        : deserializeFileOrFolderOrWebLink(val.assigned_to);
    const assignedBy = val.assigned_by == void 0 ? void 0 : deserializeUserMini(val.assigned_by);
    if (!(val.assigned_at == void 0) && !sdIsString(val.assigned_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "assigned_at" of type "LegalHoldPolicyAssignment"',
        });
    }
    const assignedAt = val.assigned_at == void 0 ? void 0 : deserializeDateTime(val.assigned_at);
    if (!(val.deleted_at == void 0) && !sdIsString(val.deleted_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "deleted_at" of type "LegalHoldPolicyAssignment"',
        });
    }
    const deletedAt = val.deleted_at == void 0 ? void 0 : deserializeDateTime(val.deleted_at);
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "LegalHoldPolicyAssignment"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
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
    };
}
//# sourceMappingURL=legalHoldPolicyAssignment.generated.js.map