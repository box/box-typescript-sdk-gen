import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class StoragePolicyMini {
    constructor(fields) {
        /**
         * The value will always be `storage_policy`. */
        this.type = 'storage_policy';
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
export function serializeStoragePolicyMiniTypeField(val) {
    return val;
}
export function deserializeStoragePolicyMiniTypeField(val) {
    if (val == 'storage_policy') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize StoragePolicyMiniTypeField",
    });
}
export function serializeStoragePolicyMini(val) {
    return {
        ['id']: val.id,
        ['type']: serializeStoragePolicyMiniTypeField(val.type),
    };
}
export function deserializeStoragePolicyMini(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "StoragePolicyMini"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "StoragePolicyMini" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "StoragePolicyMini"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "StoragePolicyMini" to be defined',
        });
    }
    const type = deserializeStoragePolicyMiniTypeField(val.type);
    return { id: id, type: type };
}
export function serializeStoragePolicyMiniInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeStoragePolicyMiniTypeField(val.type),
    };
}
export function deserializeStoragePolicyMiniInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "StoragePolicyMiniInput"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "StoragePolicyMiniInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "StoragePolicyMiniInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeStoragePolicyMiniTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=storagePolicyMini.generated.js.map