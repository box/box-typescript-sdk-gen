import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeCollaborationAllowlistExemptTargetTypeField(val) {
    return val;
}
export function deserializeCollaborationAllowlistExemptTargetTypeField(val) {
    if (val == 'collaboration_whitelist_exempt_target') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CollaborationAllowlistExemptTargetTypeField",
    });
}
export function serializeCollaborationAllowlistExemptTargetEnterpriseTypeField(val) {
    return val;
}
export function deserializeCollaborationAllowlistExemptTargetEnterpriseTypeField(val) {
    if (val == 'enterprise') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CollaborationAllowlistExemptTargetEnterpriseTypeField",
    });
}
export function serializeCollaborationAllowlistExemptTargetEnterpriseField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeCollaborationAllowlistExemptTargetEnterpriseTypeField(val.type),
        ['name']: val.name,
    };
}
export function deserializeCollaborationAllowlistExemptTargetEnterpriseField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CollaborationAllowlistExemptTargetEnterpriseField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CollaborationAllowlistExemptTargetEnterpriseField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeCollaborationAllowlistExemptTargetEnterpriseTypeField(val.type);
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "CollaborationAllowlistExemptTargetEnterpriseField"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    return {
        id: id,
        type: type,
        name: name,
    };
}
export function serializeCollaborationAllowlistExemptTarget(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeCollaborationAllowlistExemptTargetTypeField(val.type),
        ['enterprise']: val.enterprise == void 0
            ? val.enterprise
            : serializeCollaborationAllowlistExemptTargetEnterpriseField(val.enterprise),
        ['user']: val.user == void 0 ? val.user : serializeUserMini(val.user),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : serializeDateTime(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : serializeDateTime(val.modifiedAt),
    };
}
export function deserializeCollaborationAllowlistExemptTarget(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CollaborationAllowlistExemptTarget"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CollaborationAllowlistExemptTarget"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeCollaborationAllowlistExemptTargetTypeField(val.type);
    const enterprise = val.enterprise == void 0
        ? void 0
        : deserializeCollaborationAllowlistExemptTargetEnterpriseField(val.enterprise);
    const user = val.user == void 0 ? void 0 : deserializeUserMini(val.user);
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "CollaborationAllowlistExemptTarget"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "modified_at" of type "CollaborationAllowlistExemptTarget"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
    return {
        id: id,
        type: type,
        enterprise: enterprise,
        user: user,
        createdAt: createdAt,
        modifiedAt: modifiedAt,
    };
}
//# sourceMappingURL=collaborationAllowlistExemptTarget.generated.js.map