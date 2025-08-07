import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class IntegrationMappingBase {
    constructor(fields) {
        /**
         * Mapping type. */
        this.type = 'integration_mapping';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeIntegrationMappingBaseTypeField(val) {
    return val;
}
export function deserializeIntegrationMappingBaseTypeField(val) {
    if (val == 'integration_mapping') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize IntegrationMappingBaseTypeField",
    });
}
export function serializeIntegrationMappingBase(val) {
    return {
        ['id']: val.id,
        ['type']: serializeIntegrationMappingBaseTypeField(val.type),
    };
}
export function deserializeIntegrationMappingBase(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingBase"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "IntegrationMappingBase" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "IntegrationMappingBase"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "IntegrationMappingBase" to be defined',
        });
    }
    const type = deserializeIntegrationMappingBaseTypeField(val.type);
    return { id: id, type: type };
}
export function serializeIntegrationMappingBaseInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeIntegrationMappingBaseTypeField(val.type),
    };
}
export function deserializeIntegrationMappingBaseInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingBaseInput"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "IntegrationMappingBaseInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "IntegrationMappingBaseInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeIntegrationMappingBaseTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=integrationMappingBase.generated.js.map