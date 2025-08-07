import { deserializeStoragePolicyMiniTypeField } from './storagePolicyMini.generated.js';
import { serializeStoragePolicyMini } from './storagePolicyMini.generated.js';
import { StoragePolicyMini } from './storagePolicyMini.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class StoragePolicy extends StoragePolicyMini {
    constructor(fields) {
        super(fields);
        if (fields.name !== undefined) {
            this.name = fields.name;
        }
    }
}
export function serializeStoragePolicy(val) {
    const base = serializeStoragePolicyMini(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({ message: 'Expecting a map for "StoragePolicy"' });
    }
    return { ...base, ...{ ['name']: val.name } };
}
export function deserializeStoragePolicy(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "StoragePolicy"' });
    }
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "StoragePolicy"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "StoragePolicy" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "StoragePolicy"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "StoragePolicy" to be defined',
        });
    }
    const type = deserializeStoragePolicyMiniTypeField(val.type);
    return { name: name, id: id, type: type };
}
//# sourceMappingURL=storagePolicy.generated.js.map