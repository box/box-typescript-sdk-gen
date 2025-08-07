import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeCollaborationAllowlistEntryTypeField(val) {
    return val;
}
export function deserializeCollaborationAllowlistEntryTypeField(val) {
    if (val == 'collaboration_whitelist_entry') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CollaborationAllowlistEntryTypeField",
    });
}
export function serializeCollaborationAllowlistEntryDirectionField(val) {
    return val;
}
export function deserializeCollaborationAllowlistEntryDirectionField(val) {
    if (val == 'inbound') {
        return val;
    }
    if (val == 'outbound') {
        return val;
    }
    if (val == 'both') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CollaborationAllowlistEntryDirectionField",
    });
}
export function serializeCollaborationAllowlistEntryEnterpriseTypeField(val) {
    return val;
}
export function deserializeCollaborationAllowlistEntryEnterpriseTypeField(val) {
    if (val == 'enterprise') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CollaborationAllowlistEntryEnterpriseTypeField",
    });
}
export function serializeCollaborationAllowlistEntryEnterpriseField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeCollaborationAllowlistEntryEnterpriseTypeField(val.type),
        ['name']: val.name,
    };
}
export function deserializeCollaborationAllowlistEntryEnterpriseField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CollaborationAllowlistEntryEnterpriseField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CollaborationAllowlistEntryEnterpriseField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeCollaborationAllowlistEntryEnterpriseTypeField(val.type);
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "CollaborationAllowlistEntryEnterpriseField"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    return {
        id: id,
        type: type,
        name: name,
    };
}
export function serializeCollaborationAllowlistEntry(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeCollaborationAllowlistEntryTypeField(val.type),
        ['domain']: val.domain,
        ['direction']: val.direction == void 0
            ? val.direction
            : serializeCollaborationAllowlistEntryDirectionField(val.direction),
        ['enterprise']: val.enterprise == void 0
            ? val.enterprise
            : serializeCollaborationAllowlistEntryEnterpriseField(val.enterprise),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : serializeDateTime(val.createdAt),
    };
}
export function deserializeCollaborationAllowlistEntry(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CollaborationAllowlistEntry"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CollaborationAllowlistEntry"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeCollaborationAllowlistEntryTypeField(val.type);
    if (!(val.domain == void 0) && !sdIsString(val.domain)) {
        throw new BoxSdkError({
            message: 'Expecting string for "domain" of type "CollaborationAllowlistEntry"',
        });
    }
    const domain = val.domain == void 0 ? void 0 : val.domain;
    const direction = val.direction == void 0
        ? void 0
        : deserializeCollaborationAllowlistEntryDirectionField(val.direction);
    const enterprise = val.enterprise == void 0
        ? void 0
        : deserializeCollaborationAllowlistEntryEnterpriseField(val.enterprise);
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "CollaborationAllowlistEntry"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    return {
        id: id,
        type: type,
        domain: domain,
        direction: direction,
        enterprise: enterprise,
        createdAt: createdAt,
    };
}
//# sourceMappingURL=collaborationAllowlistEntry.generated.js.map