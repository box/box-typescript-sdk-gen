"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoragePolicy = void 0;
exports.serializeStoragePolicy = serializeStoragePolicy;
exports.deserializeStoragePolicy = deserializeStoragePolicy;
const storagePolicyMini_generated_js_1 = require("./storagePolicyMini.generated.js");
const storagePolicyMini_generated_js_2 = require("./storagePolicyMini.generated.js");
const storagePolicyMini_generated_js_3 = require("./storagePolicyMini.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class StoragePolicy extends storagePolicyMini_generated_js_3.StoragePolicyMini {
    constructor(fields) {
        super(fields);
        if (fields.name !== undefined) {
            this.name = fields.name;
        }
    }
}
exports.StoragePolicy = StoragePolicy;
function serializeStoragePolicy(val) {
    const base = (0, storagePolicyMini_generated_js_2.serializeStoragePolicyMini)(val);
    if (!(0, json_js_2.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "StoragePolicy"' });
    }
    return Object.assign(Object.assign({}, base), { ['name']: val.name });
}
function deserializeStoragePolicy(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "StoragePolicy"' });
    }
    if (!(val.name == void 0) && !(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "StoragePolicy"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "StoragePolicy" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "StoragePolicy"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "StoragePolicy" to be defined',
        });
    }
    const type = (0, storagePolicyMini_generated_js_1.deserializeStoragePolicyMiniTypeField)(val.type);
    return { name: name, id: id, type: type };
}
//# sourceMappingURL=storagePolicy.generated.js.map