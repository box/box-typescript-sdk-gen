"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataCascadePolicy = void 0;
exports.serializeMetadataCascadePolicyTypeField = serializeMetadataCascadePolicyTypeField;
exports.deserializeMetadataCascadePolicyTypeField = deserializeMetadataCascadePolicyTypeField;
exports.serializeMetadataCascadePolicyOwnerEnterpriseTypeField = serializeMetadataCascadePolicyOwnerEnterpriseTypeField;
exports.deserializeMetadataCascadePolicyOwnerEnterpriseTypeField = deserializeMetadataCascadePolicyOwnerEnterpriseTypeField;
exports.serializeMetadataCascadePolicyOwnerEnterpriseField = serializeMetadataCascadePolicyOwnerEnterpriseField;
exports.deserializeMetadataCascadePolicyOwnerEnterpriseField = deserializeMetadataCascadePolicyOwnerEnterpriseField;
exports.serializeMetadataCascadePolicyParentTypeField = serializeMetadataCascadePolicyParentTypeField;
exports.deserializeMetadataCascadePolicyParentTypeField = deserializeMetadataCascadePolicyParentTypeField;
exports.serializeMetadataCascadePolicyParentField = serializeMetadataCascadePolicyParentField;
exports.deserializeMetadataCascadePolicyParentField = deserializeMetadataCascadePolicyParentField;
exports.serializeMetadataCascadePolicy = serializeMetadataCascadePolicy;
exports.deserializeMetadataCascadePolicy = deserializeMetadataCascadePolicy;
exports.serializeMetadataCascadePolicyInput = serializeMetadataCascadePolicyInput;
exports.deserializeMetadataCascadePolicyInput = deserializeMetadataCascadePolicyInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class MetadataCascadePolicy {
    constructor(fields) {
        /**
         * The value will always be `metadata_cascade_policy`. */
        this.type = 'metadata_cascade_policy';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.ownerEnterprise !== undefined) {
            this.ownerEnterprise = fields.ownerEnterprise;
        }
        if (fields.parent !== undefined) {
            this.parent = fields.parent;
        }
        if (fields.scope !== undefined) {
            this.scope = fields.scope;
        }
        if (fields.templateKey !== undefined) {
            this.templateKey = fields.templateKey;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.MetadataCascadePolicy = MetadataCascadePolicy;
function serializeMetadataCascadePolicyTypeField(val) {
    return val;
}
function deserializeMetadataCascadePolicyTypeField(val) {
    if (val == 'metadata_cascade_policy') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize MetadataCascadePolicyTypeField",
    });
}
function serializeMetadataCascadePolicyOwnerEnterpriseTypeField(val) {
    return val;
}
function deserializeMetadataCascadePolicyOwnerEnterpriseTypeField(val) {
    if (val == 'enterprise') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize MetadataCascadePolicyOwnerEnterpriseTypeField",
    });
}
function serializeMetadataCascadePolicyOwnerEnterpriseField(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeMetadataCascadePolicyOwnerEnterpriseTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeMetadataCascadePolicyOwnerEnterpriseField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "MetadataCascadePolicyOwnerEnterpriseField"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeMetadataCascadePolicyOwnerEnterpriseTypeField(val.type);
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "MetadataCascadePolicyOwnerEnterpriseField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return {
        type: type,
        id: id,
    };
}
function serializeMetadataCascadePolicyParentTypeField(val) {
    return val;
}
function deserializeMetadataCascadePolicyParentTypeField(val) {
    if (val == 'folder') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize MetadataCascadePolicyParentTypeField",
    });
}
function serializeMetadataCascadePolicyParentField(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeMetadataCascadePolicyParentTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeMetadataCascadePolicyParentField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "MetadataCascadePolicyParentField"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeMetadataCascadePolicyParentTypeField(val.type);
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "MetadataCascadePolicyParentField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return { type: type, id: id };
}
function serializeMetadataCascadePolicy(val) {
    return {
        ['id']: val.id,
        ['type']: serializeMetadataCascadePolicyTypeField(val.type),
        ['owner_enterprise']: val.ownerEnterprise == void 0
            ? val.ownerEnterprise
            : serializeMetadataCascadePolicyOwnerEnterpriseField(val.ownerEnterprise),
        ['parent']: val.parent == void 0
            ? val.parent
            : serializeMetadataCascadePolicyParentField(val.parent),
        ['scope']: val.scope,
        ['templateKey']: val.templateKey,
    };
}
function deserializeMetadataCascadePolicy(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "MetadataCascadePolicy"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "MetadataCascadePolicy" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "MetadataCascadePolicy"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "MetadataCascadePolicy" to be defined',
        });
    }
    const type = deserializeMetadataCascadePolicyTypeField(val.type);
    const ownerEnterprise = val.owner_enterprise == void 0
        ? void 0
        : deserializeMetadataCascadePolicyOwnerEnterpriseField(val.owner_enterprise);
    const parent = val.parent == void 0
        ? void 0
        : deserializeMetadataCascadePolicyParentField(val.parent);
    if (!(val.scope == void 0) && !(0, json_js_1.sdIsString)(val.scope)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "scope" of type "MetadataCascadePolicy"',
        });
    }
    const scope = val.scope == void 0 ? void 0 : val.scope;
    if (!(val.templateKey == void 0) && !(0, json_js_1.sdIsString)(val.templateKey)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "templateKey" of type "MetadataCascadePolicy"',
        });
    }
    const templateKey = val.templateKey == void 0 ? void 0 : val.templateKey;
    return {
        id: id,
        type: type,
        ownerEnterprise: ownerEnterprise,
        parent: parent,
        scope: scope,
        templateKey: templateKey,
    };
}
function serializeMetadataCascadePolicyInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeMetadataCascadePolicyTypeField(val.type),
        ['owner_enterprise']: val.ownerEnterprise == void 0
            ? val.ownerEnterprise
            : serializeMetadataCascadePolicyOwnerEnterpriseField(val.ownerEnterprise),
        ['parent']: val.parent == void 0
            ? val.parent
            : serializeMetadataCascadePolicyParentField(val.parent),
        ['scope']: val.scope,
        ['templateKey']: val.templateKey,
    };
}
function deserializeMetadataCascadePolicyInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "MetadataCascadePolicyInput"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "MetadataCascadePolicyInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "MetadataCascadePolicyInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeMetadataCascadePolicyTypeField(val.type);
    const ownerEnterprise = val.owner_enterprise == void 0
        ? void 0
        : deserializeMetadataCascadePolicyOwnerEnterpriseField(val.owner_enterprise);
    const parent = val.parent == void 0
        ? void 0
        : deserializeMetadataCascadePolicyParentField(val.parent);
    if (!(val.scope == void 0) && !(0, json_js_1.sdIsString)(val.scope)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "scope" of type "MetadataCascadePolicyInput"',
        });
    }
    const scope = val.scope == void 0 ? void 0 : val.scope;
    if (!(val.templateKey == void 0) && !(0, json_js_1.sdIsString)(val.templateKey)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "templateKey" of type "MetadataCascadePolicyInput"',
        });
    }
    const templateKey = val.templateKey == void 0 ? void 0 : val.templateKey;
    return {
        id: id,
        type: type,
        ownerEnterprise: ownerEnterprise,
        parent: parent,
        scope: scope,
        templateKey: templateKey,
    };
}
//# sourceMappingURL=metadataCascadePolicy.generated.js.map