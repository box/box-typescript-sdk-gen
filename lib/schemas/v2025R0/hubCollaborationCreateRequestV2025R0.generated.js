"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HubCollaborationCreateRequestV2025R0HubField = void 0;
exports.serializeHubCollaborationCreateRequestV2025R0HubTypeField = serializeHubCollaborationCreateRequestV2025R0HubTypeField;
exports.deserializeHubCollaborationCreateRequestV2025R0HubTypeField = deserializeHubCollaborationCreateRequestV2025R0HubTypeField;
exports.serializeHubCollaborationCreateRequestV2025R0HubField = serializeHubCollaborationCreateRequestV2025R0HubField;
exports.deserializeHubCollaborationCreateRequestV2025R0HubField = deserializeHubCollaborationCreateRequestV2025R0HubField;
exports.serializeHubCollaborationCreateRequestV2025R0HubFieldInput = serializeHubCollaborationCreateRequestV2025R0HubFieldInput;
exports.deserializeHubCollaborationCreateRequestV2025R0HubFieldInput = deserializeHubCollaborationCreateRequestV2025R0HubFieldInput;
exports.serializeHubCollaborationCreateRequestV2025R0AccessibleByField = serializeHubCollaborationCreateRequestV2025R0AccessibleByField;
exports.deserializeHubCollaborationCreateRequestV2025R0AccessibleByField = deserializeHubCollaborationCreateRequestV2025R0AccessibleByField;
exports.serializeHubCollaborationCreateRequestV2025R0 = serializeHubCollaborationCreateRequestV2025R0;
exports.deserializeHubCollaborationCreateRequestV2025R0 = deserializeHubCollaborationCreateRequestV2025R0;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
class HubCollaborationCreateRequestV2025R0HubField {
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
exports.HubCollaborationCreateRequestV2025R0HubField = HubCollaborationCreateRequestV2025R0HubField;
function serializeHubCollaborationCreateRequestV2025R0HubTypeField(val) {
    return val;
}
function deserializeHubCollaborationCreateRequestV2025R0HubTypeField(val) {
    if (val == 'hubs') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize HubCollaborationCreateRequestV2025R0HubTypeField",
    });
}
function serializeHubCollaborationCreateRequestV2025R0HubField(val) {
    return {
        ['type']: serializeHubCollaborationCreateRequestV2025R0HubTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeHubCollaborationCreateRequestV2025R0HubField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "HubCollaborationCreateRequestV2025R0HubField"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "HubCollaborationCreateRequestV2025R0HubField" to be defined',
        });
    }
    const type = deserializeHubCollaborationCreateRequestV2025R0HubTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "HubCollaborationCreateRequestV2025R0HubField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "HubCollaborationCreateRequestV2025R0HubField"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
function serializeHubCollaborationCreateRequestV2025R0HubFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeHubCollaborationCreateRequestV2025R0HubTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeHubCollaborationCreateRequestV2025R0HubFieldInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "HubCollaborationCreateRequestV2025R0HubFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeHubCollaborationCreateRequestV2025R0HubTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "HubCollaborationCreateRequestV2025R0HubFieldInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "HubCollaborationCreateRequestV2025R0HubFieldInput"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
function serializeHubCollaborationCreateRequestV2025R0AccessibleByField(val) {
    return { ['type']: val.type, ['id']: val.id, ['login']: val.login };
}
function deserializeHubCollaborationCreateRequestV2025R0AccessibleByField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "HubCollaborationCreateRequestV2025R0AccessibleByField"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "HubCollaborationCreateRequestV2025R0AccessibleByField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.type)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "type" of type "HubCollaborationCreateRequestV2025R0AccessibleByField"',
        });
    }
    const type = val.type;
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "HubCollaborationCreateRequestV2025R0AccessibleByField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.login == void 0) && !(0, json_js_1.sdIsString)(val.login)) {
        throw new errors_js_1.BoxSdkError({
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
function serializeHubCollaborationCreateRequestV2025R0(val) {
    return {
        ['hub']: serializeHubCollaborationCreateRequestV2025R0HubField(val.hub),
        ['accessible_by']: serializeHubCollaborationCreateRequestV2025R0AccessibleByField(val.accessibleBy),
        ['role']: val.role,
    };
}
function deserializeHubCollaborationCreateRequestV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "HubCollaborationCreateRequestV2025R0"',
        });
    }
    if (val.hub == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "hub" of type "HubCollaborationCreateRequestV2025R0" to be defined',
        });
    }
    const hub = deserializeHubCollaborationCreateRequestV2025R0HubField(val.hub);
    if (val.accessible_by == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "accessible_by" of type "HubCollaborationCreateRequestV2025R0" to be defined',
        });
    }
    const accessibleBy = deserializeHubCollaborationCreateRequestV2025R0AccessibleByField(val.accessible_by);
    if (val.role == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "role" of type "HubCollaborationCreateRequestV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.role)) {
        throw new errors_js_1.BoxSdkError({
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