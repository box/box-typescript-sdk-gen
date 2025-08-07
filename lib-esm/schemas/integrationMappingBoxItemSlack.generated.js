import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class IntegrationMappingBoxItemSlack {
    constructor(fields) {
        /**
         * Type of the mapped item referenced in `id`. */
        this.type = 'folder';
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
export function serializeIntegrationMappingBoxItemSlackTypeField(val) {
    return val;
}
export function deserializeIntegrationMappingBoxItemSlackTypeField(val) {
    if (val == 'folder') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize IntegrationMappingBoxItemSlackTypeField",
    });
}
export function serializeIntegrationMappingBoxItemSlack(val) {
    return {
        ['type']: serializeIntegrationMappingBoxItemSlackTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeIntegrationMappingBoxItemSlack(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingBoxItemSlack"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "IntegrationMappingBoxItemSlack" to be defined',
        });
    }
    const type = deserializeIntegrationMappingBoxItemSlackTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "IntegrationMappingBoxItemSlack" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "IntegrationMappingBoxItemSlack"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
export function serializeIntegrationMappingBoxItemSlackInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeIntegrationMappingBoxItemSlackTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeIntegrationMappingBoxItemSlackInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingBoxItemSlackInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeIntegrationMappingBoxItemSlackTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "IntegrationMappingBoxItemSlackInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "IntegrationMappingBoxItemSlackInput"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
//# sourceMappingURL=integrationMappingBoxItemSlack.generated.js.map