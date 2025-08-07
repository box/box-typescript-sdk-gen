"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoragePolicyMini = void 0;
exports.serializeStoragePolicyMiniTypeField = serializeStoragePolicyMiniTypeField;
exports.deserializeStoragePolicyMiniTypeField = deserializeStoragePolicyMiniTypeField;
exports.serializeStoragePolicyMini = serializeStoragePolicyMini;
exports.deserializeStoragePolicyMini = deserializeStoragePolicyMini;
exports.serializeStoragePolicyMiniInput = serializeStoragePolicyMiniInput;
exports.deserializeStoragePolicyMiniInput = deserializeStoragePolicyMiniInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class StoragePolicyMini {
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
exports.StoragePolicyMini = StoragePolicyMini;
function serializeStoragePolicyMiniTypeField(val) {
    return val;
}
function deserializeStoragePolicyMiniTypeField(val) {
    if (val == 'storage_policy') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize StoragePolicyMiniTypeField",
    });
}
function serializeStoragePolicyMini(val) {
    return {
        ['id']: val.id,
        ['type']: serializeStoragePolicyMiniTypeField(val.type),
    };
}
function deserializeStoragePolicyMini(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "StoragePolicyMini"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "StoragePolicyMini" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "StoragePolicyMini"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "StoragePolicyMini" to be defined',
        });
    }
    const type = deserializeStoragePolicyMiniTypeField(val.type);
    return { id: id, type: type };
}
function serializeStoragePolicyMiniInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeStoragePolicyMiniTypeField(val.type),
    };
}
function deserializeStoragePolicyMiniInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "StoragePolicyMiniInput"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "StoragePolicyMiniInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
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