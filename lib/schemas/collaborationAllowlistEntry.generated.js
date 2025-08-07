"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeCollaborationAllowlistEntryTypeField = serializeCollaborationAllowlistEntryTypeField;
exports.deserializeCollaborationAllowlistEntryTypeField = deserializeCollaborationAllowlistEntryTypeField;
exports.serializeCollaborationAllowlistEntryDirectionField = serializeCollaborationAllowlistEntryDirectionField;
exports.deserializeCollaborationAllowlistEntryDirectionField = deserializeCollaborationAllowlistEntryDirectionField;
exports.serializeCollaborationAllowlistEntryEnterpriseTypeField = serializeCollaborationAllowlistEntryEnterpriseTypeField;
exports.deserializeCollaborationAllowlistEntryEnterpriseTypeField = deserializeCollaborationAllowlistEntryEnterpriseTypeField;
exports.serializeCollaborationAllowlistEntryEnterpriseField = serializeCollaborationAllowlistEntryEnterpriseField;
exports.deserializeCollaborationAllowlistEntryEnterpriseField = deserializeCollaborationAllowlistEntryEnterpriseField;
exports.serializeCollaborationAllowlistEntry = serializeCollaborationAllowlistEntry;
exports.deserializeCollaborationAllowlistEntry = deserializeCollaborationAllowlistEntry;
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeCollaborationAllowlistEntryTypeField(val) {
    return val;
}
function deserializeCollaborationAllowlistEntryTypeField(val) {
    if (val == 'collaboration_whitelist_entry') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CollaborationAllowlistEntryTypeField",
    });
}
function serializeCollaborationAllowlistEntryDirectionField(val) {
    return val;
}
function deserializeCollaborationAllowlistEntryDirectionField(val) {
    if (val == 'inbound') {
        return val;
    }
    if (val == 'outbound') {
        return val;
    }
    if (val == 'both') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CollaborationAllowlistEntryDirectionField",
    });
}
function serializeCollaborationAllowlistEntryEnterpriseTypeField(val) {
    return val;
}
function deserializeCollaborationAllowlistEntryEnterpriseTypeField(val) {
    if (val == 'enterprise') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CollaborationAllowlistEntryEnterpriseTypeField",
    });
}
function serializeCollaborationAllowlistEntryEnterpriseField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeCollaborationAllowlistEntryEnterpriseTypeField(val.type),
        ['name']: val.name,
    };
}
function deserializeCollaborationAllowlistEntryEnterpriseField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CollaborationAllowlistEntryEnterpriseField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CollaborationAllowlistEntryEnterpriseField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeCollaborationAllowlistEntryEnterpriseTypeField(val.type);
    if (!(val.name == void 0) && !(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
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
function serializeCollaborationAllowlistEntry(val) {
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
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
    };
}
function deserializeCollaborationAllowlistEntry(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CollaborationAllowlistEntry"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CollaborationAllowlistEntry"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeCollaborationAllowlistEntryTypeField(val.type);
    if (!(val.domain == void 0) && !(0, json_js_1.sdIsString)(val.domain)) {
        throw new errors_js_1.BoxSdkError({
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
    if (!(val.created_at == void 0) && !(0, json_js_1.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "CollaborationAllowlistEntry"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
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