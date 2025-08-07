import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export class HubCollaborationCreateRequestV2025R0HubField {
    constructor(fields) {
        /**
         * The value will always be `hubs`. */
        this.type = 'hubs';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeHubCollaborationCreateRequestV2025R0HubTypeField(val) {
    return val;
}
export function deserializeHubCollaborationCreateRequestV2025R0HubTypeField(val) {
    if (val == 'hubs') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize HubCollaborationCreateRequestV2025R0HubTypeField",
    });
}
export function serializeHubCollaborationCreateRequestV2025R0HubField(val) {
    return {
        ['type']: serializeHubCollaborationCreateRequestV2025R0HubTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeHubCollaborationCreateRequestV2025R0HubField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "HubCollaborationCreateRequestV2025R0HubField"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "HubCollaborationCreateRequestV2025R0HubField" to be defined',
        });
    }
    const type = deserializeHubCollaborationCreateRequestV2025R0HubTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "HubCollaborationCreateRequestV2025R0HubField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "HubCollaborationCreateRequestV2025R0HubField"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
export function serializeHubCollaborationCreateRequestV2025R0HubFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeHubCollaborationCreateRequestV2025R0HubTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeHubCollaborationCreateRequestV2025R0HubFieldInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "HubCollaborationCreateRequestV2025R0HubFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeHubCollaborationCreateRequestV2025R0HubTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "HubCollaborationCreateRequestV2025R0HubFieldInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "HubCollaborationCreateRequestV2025R0HubFieldInput"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
export function serializeHubCollaborationCreateRequestV2025R0AccessibleByField(val) {
    return { ['type']: val.type, ['id']: val.id, ['login']: val.login };
}
export function deserializeHubCollaborationCreateRequestV2025R0AccessibleByField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "HubCollaborationCreateRequestV2025R0AccessibleByField"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "HubCollaborationCreateRequestV2025R0AccessibleByField" to be defined',
        });
    }
    if (!sdIsString(val.type)) {
        throw new BoxSdkError({
            message: 'Expecting string for "type" of type "HubCollaborationCreateRequestV2025R0AccessibleByField"',
        });
    }
    const type = val.type;
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "HubCollaborationCreateRequestV2025R0AccessibleByField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.login == void 0) && !sdIsString(val.login)) {
        throw new BoxSdkError({
            message: 'Expecting string for "login" of type "HubCollaborationCreateRequestV2025R0AccessibleByField"',
        });
    }
    const login = val.login == void 0 ? void 0 : val.login;
    return {
        type: type,
        id: id,
        login: login,
    };
}
export function serializeHubCollaborationCreateRequestV2025R0(val) {
    return {
        ['hub']: serializeHubCollaborationCreateRequestV2025R0HubField(val.hub),
        ['accessible_by']: serializeHubCollaborationCreateRequestV2025R0AccessibleByField(val.accessibleBy),
        ['role']: val.role,
    };
}
export function deserializeHubCollaborationCreateRequestV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "HubCollaborationCreateRequestV2025R0"',
        });
    }
    if (val.hub == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "hub" of type "HubCollaborationCreateRequestV2025R0" to be defined',
        });
    }
    const hub = deserializeHubCollaborationCreateRequestV2025R0HubField(val.hub);
    if (val.accessible_by == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "accessible_by" of type "HubCollaborationCreateRequestV2025R0" to be defined',
        });
    }
    const accessibleBy = deserializeHubCollaborationCreateRequestV2025R0AccessibleByField(val.accessible_by);
    if (val.role == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "role" of type "HubCollaborationCreateRequestV2025R0" to be defined',
        });
    }
    if (!sdIsString(val.role)) {
        throw new BoxSdkError({
            message: 'Expecting string for "role" of type "HubCollaborationCreateRequestV2025R0"',
        });
    }
    const role = val.role;
    return {
        hub: hub,
        accessibleBy: accessibleBy,
        role: role,
    };
}
//# sourceMappingURL=hubCollaborationCreateRequestV2025R0.generated.js.map