import { serializeEnterpriseReferenceV2025R0 } from './enterpriseReferenceV2025R0.generated.js';
import { deserializeEnterpriseReferenceV2025R0 } from './enterpriseReferenceV2025R0.generated.js';
import { serializeShieldListContentV2025R0 } from './shieldListContentV2025R0.generated.js';
import { deserializeShieldListContentV2025R0 } from './shieldListContentV2025R0.generated.js';
import { serializeDateTime } from '../../internal/utils.js';
import { deserializeDateTime } from '../../internal/utils.js';
import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export function serializeShieldListV2025R0(val) {
    return {
        ['id']: val.id,
        ['type']: val.type,
        ['name']: val.name,
        ['enterprise']: serializeEnterpriseReferenceV2025R0(val.enterprise),
        ['description']: val.description,
        ['created_at']: serializeDateTime(val.createdAt),
        ['updated_at']: serializeDateTime(val.updatedAt),
        ['content']: serializeShieldListContentV2025R0(val.content),
    };
}
export function deserializeShieldListV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldListV2025R0"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "ShieldListV2025R0" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldListV2025R0"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "ShieldListV2025R0" to be defined',
        });
    }
    if (!sdIsString(val.type)) {
        throw new BoxSdkError({
            message: 'Expecting string for "type" of type "ShieldListV2025R0"',
        });
    }
    const type = val.type;
    if (val.name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "name" of type "ShieldListV2025R0" to be defined',
        });
    }
    if (!sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "ShieldListV2025R0"',
        });
    }
    const name = val.name;
    if (val.enterprise == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "enterprise" of type "ShieldListV2025R0" to be defined',
        });
    }
    const enterprise = deserializeEnterpriseReferenceV2025R0(val.enterprise);
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "ShieldListV2025R0"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (val.created_at == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "created_at" of type "ShieldListV2025R0" to be defined',
        });
    }
    if (!sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "ShieldListV2025R0"',
        });
    }
    const createdAt = deserializeDateTime(val.created_at);
    if (val.updated_at == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "updated_at" of type "ShieldListV2025R0" to be defined',
        });
    }
    if (!sdIsString(val.updated_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "updated_at" of type "ShieldListV2025R0"',
        });
    }
    const updatedAt = deserializeDateTime(val.updated_at);
    if (val.content == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "content" of type "ShieldListV2025R0" to be defined',
        });
    }
    const content = deserializeShieldListContentV2025R0(val.content);
    return {
        id: id,
        type: type,
        name: name,
        enterprise: enterprise,
        description: description,
        createdAt: createdAt,
        updatedAt: updatedAt,
        content: content,
    };
}
//# sourceMappingURL=shieldListV2025R0.generated.js.map