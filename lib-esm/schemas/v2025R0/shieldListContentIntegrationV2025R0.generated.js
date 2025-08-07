import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsList } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export class ShieldListContentIntegrationV2025R0 {
    constructor(fields) {
        /**
         * The type of content in the shield list. */
        this.type = 'integration';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.integrations !== undefined) {
            this.integrations = fields.integrations;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeShieldListContentIntegrationV2025R0TypeField(val) {
    return val;
}
export function deserializeShieldListContentIntegrationV2025R0TypeField(val) {
    if (val == 'integration') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize ShieldListContentIntegrationV2025R0TypeField",
    });
}
export function serializeShieldListContentIntegrationV2025R0IntegrationsField(val) {
    return { ['id']: val.id };
}
export function deserializeShieldListContentIntegrationV2025R0IntegrationsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldListContentIntegrationV2025R0IntegrationsField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldListContentIntegrationV2025R0IntegrationsField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return {
        id: id,
    };
}
export function serializeShieldListContentIntegrationV2025R0(val) {
    return {
        ['type']: serializeShieldListContentIntegrationV2025R0TypeField(val.type),
        ['integrations']: val.integrations.map(function (item) {
            return serializeShieldListContentIntegrationV2025R0IntegrationsField(item);
        }),
    };
}
export function deserializeShieldListContentIntegrationV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldListContentIntegrationV2025R0"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "ShieldListContentIntegrationV2025R0" to be defined',
        });
    }
    const type = deserializeShieldListContentIntegrationV2025R0TypeField(val.type);
    if (val.integrations == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "integrations" of type "ShieldListContentIntegrationV2025R0" to be defined',
        });
    }
    if (!sdIsList(val.integrations)) {
        throw new BoxSdkError({
            message: 'Expecting array for "integrations" of type "ShieldListContentIntegrationV2025R0"',
        });
    }
    const integrations = sdIsList(val.integrations)
        ? val.integrations.map(function (itm) {
            return deserializeShieldListContentIntegrationV2025R0IntegrationsField(itm);
        })
        : [];
    return {
        type: type,
        integrations: integrations,
    };
}
export function serializeShieldListContentIntegrationV2025R0Input(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldListContentIntegrationV2025R0TypeField(val.type),
        ['integrations']: val.integrations.map(function (item) {
            return serializeShieldListContentIntegrationV2025R0IntegrationsField(item);
        }),
    };
}
export function deserializeShieldListContentIntegrationV2025R0Input(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldListContentIntegrationV2025R0Input"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeShieldListContentIntegrationV2025R0TypeField(val.type);
    if (val.integrations == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "integrations" of type "ShieldListContentIntegrationV2025R0Input" to be defined',
        });
    }
    if (!sdIsList(val.integrations)) {
        throw new BoxSdkError({
            message: 'Expecting array for "integrations" of type "ShieldListContentIntegrationV2025R0Input"',
        });
    }
    const integrations = sdIsList(val.integrations)
        ? val.integrations.map(function (itm) {
            return deserializeShieldListContentIntegrationV2025R0IntegrationsField(itm);
        })
        : [];
    return {
        type: type,
        integrations: integrations,
    };
}
//# sourceMappingURL=shieldListContentIntegrationV2025R0.generated.js.map