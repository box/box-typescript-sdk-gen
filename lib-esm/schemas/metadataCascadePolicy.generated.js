import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class MetadataCascadePolicy {
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
export function serializeMetadataCascadePolicyTypeField(val) {
    return val;
}
export function deserializeMetadataCascadePolicyTypeField(val) {
    if (val == 'metadata_cascade_policy') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize MetadataCascadePolicyTypeField",
    });
}
export function serializeMetadataCascadePolicyOwnerEnterpriseTypeField(val) {
    return val;
}
export function deserializeMetadataCascadePolicyOwnerEnterpriseTypeField(val) {
    if (val == 'enterprise') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize MetadataCascadePolicyOwnerEnterpriseTypeField",
    });
}
export function serializeMetadataCascadePolicyOwnerEnterpriseField(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeMetadataCascadePolicyOwnerEnterpriseTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeMetadataCascadePolicyOwnerEnterpriseField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "MetadataCascadePolicyOwnerEnterpriseField"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeMetadataCascadePolicyOwnerEnterpriseTypeField(val.type);
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "MetadataCascadePolicyOwnerEnterpriseField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return {
        type: type,
        id: id,
    };
}
export function serializeMetadataCascadePolicyParentTypeField(val) {
    return val;
}
export function deserializeMetadataCascadePolicyParentTypeField(val) {
    if (val == 'folder') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize MetadataCascadePolicyParentTypeField",
    });
}
export function serializeMetadataCascadePolicyParentField(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeMetadataCascadePolicyParentTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeMetadataCascadePolicyParentField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "MetadataCascadePolicyParentField"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeMetadataCascadePolicyParentTypeField(val.type);
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "MetadataCascadePolicyParentField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return { type: type, id: id };
}
export function serializeMetadataCascadePolicy(val) {
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
export function deserializeMetadataCascadePolicy(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "MetadataCascadePolicy"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "MetadataCascadePolicy" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "MetadataCascadePolicy"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
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
    if (!(val.scope == void 0) && !sdIsString(val.scope)) {
        throw new BoxSdkError({
            message: 'Expecting string for "scope" of type "MetadataCascadePolicy"',
        });
    }
    const scope = val.scope == void 0 ? void 0 : val.scope;
    if (!(val.templateKey == void 0) && !sdIsString(val.templateKey)) {
        throw new BoxSdkError({
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
export function serializeMetadataCascadePolicyInput(val) {
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
export function deserializeMetadataCascadePolicyInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "MetadataCascadePolicyInput"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "MetadataCascadePolicyInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
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
    if (!(val.scope == void 0) && !sdIsString(val.scope)) {
        throw new BoxSdkError({
            message: 'Expecting string for "scope" of type "MetadataCascadePolicyInput"',
        });
    }
    const scope = val.scope == void 0 ? void 0 : val.scope;
    if (!(val.templateKey == void 0) && !sdIsString(val.templateKey)) {
        throw new BoxSdkError({
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