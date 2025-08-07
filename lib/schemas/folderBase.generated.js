"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderBase = void 0;
exports.serializeFolderBaseTypeField = serializeFolderBaseTypeField;
exports.deserializeFolderBaseTypeField = deserializeFolderBaseTypeField;
exports.serializeFolderBase = serializeFolderBase;
exports.deserializeFolderBase = deserializeFolderBase;
exports.serializeFolderBaseInput = serializeFolderBaseInput;
exports.deserializeFolderBaseInput = deserializeFolderBaseInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class FolderBase {
    constructor(fields) {
        /**
         * The value will always be `folder`. */
        this.type = 'folder';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.etag !== undefined) {
            this.etag = fields.etag;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.FolderBase = FolderBase;
function serializeFolderBaseTypeField(val) {
    return val;
}
function deserializeFolderBaseTypeField(val) {
    if (val == 'folder') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize FolderBaseTypeField" });
}
function serializeFolderBase(val) {
    return {
        ['id']: val.id,
        ['etag']: val.etag,
        ['type']: serializeFolderBaseTypeField(val.type),
    };
}
function deserializeFolderBase(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "FolderBase"' });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "FolderBase" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FolderBase"',
        });
    }
    const id = val.id;
    if (!(val.etag == void 0) && !(0, json_js_1.sdIsString)(val.etag)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "etag" of type "FolderBase"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "FolderBase" to be defined',
        });
    }
    const type = deserializeFolderBaseTypeField(val.type);
    return { id: id, etag: etag, type: type };
}
function serializeFolderBaseInput(val) {
    return {
        ['id']: val.id,
        ['etag']: val.etag,
        ['type']: val.type == void 0 ? val.type : serializeFolderBaseTypeField(val.type),
    };
}
function deserializeFolderBaseInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "FolderBaseInput"' });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "FolderBaseInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FolderBaseInput"',
        });
    }
    const id = val.id;
    if (!(val.etag == void 0) && !(0, json_js_1.sdIsString)(val.etag)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "etag" of type "FolderBaseInput"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    const type = val.type == void 0 ? void 0 : deserializeFolderBaseTypeField(val.type);
    return { id: id, etag: etag, type: type };
}
//# sourceMappingURL=folderBase.generated.js.map