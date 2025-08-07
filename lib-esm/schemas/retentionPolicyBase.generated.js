import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class RetentionPolicyBase {
    constructor(fields) {
        /**
         * The value will always be `retention_policy`. */
        this.type = 'retention_policy';
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
export function serializeRetentionPolicyBaseTypeField(val) {
    return val;
}
export function deserializeRetentionPolicyBaseTypeField(val) {
    if (val == 'retention_policy') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize RetentionPolicyBaseTypeField",
    });
}
export function serializeRetentionPolicyBase(val) {
    return {
        ['id']: val.id,
        ['type']: serializeRetentionPolicyBaseTypeField(val.type),
    };
}
export function deserializeRetentionPolicyBase(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "RetentionPolicyBase"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "RetentionPolicyBase" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "RetentionPolicyBase"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "RetentionPolicyBase" to be defined',
        });
    }
    const type = deserializeRetentionPolicyBaseTypeField(val.type);
    return { id: id, type: type };
}
export function serializeRetentionPolicyBaseInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeRetentionPolicyBaseTypeField(val.type),
    };
}
export function deserializeRetentionPolicyBaseInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "RetentionPolicyBaseInput"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "RetentionPolicyBaseInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "RetentionPolicyBaseInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeRetentionPolicyBaseTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=retentionPolicyBase.generated.js.map