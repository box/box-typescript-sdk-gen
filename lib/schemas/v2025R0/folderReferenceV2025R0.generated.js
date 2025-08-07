"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderReferenceV2025R0 = void 0;
exports.serializeFolderReferenceV2025R0TypeField = serializeFolderReferenceV2025R0TypeField;
exports.deserializeFolderReferenceV2025R0TypeField = deserializeFolderReferenceV2025R0TypeField;
exports.serializeFolderReferenceV2025R0 = serializeFolderReferenceV2025R0;
exports.deserializeFolderReferenceV2025R0 = deserializeFolderReferenceV2025R0;
exports.serializeFolderReferenceV2025R0Input = serializeFolderReferenceV2025R0Input;
exports.deserializeFolderReferenceV2025R0Input = deserializeFolderReferenceV2025R0Input;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
class FolderReferenceV2025R0 {
    constructor(fields) {
        /**
         * The value will always be `folder`. */
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
exports.FolderReferenceV2025R0 = FolderReferenceV2025R0;
function serializeFolderReferenceV2025R0TypeField(val) {
    return val;
}
function deserializeFolderReferenceV2025R0TypeField(val) {
    if (val == 'folder') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize FolderReferenceV2025R0TypeField",
    });
}
function serializeFolderReferenceV2025R0(val) {
    return {
        ['type']: serializeFolderReferenceV2025R0TypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeFolderReferenceV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FolderReferenceV2025R0"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "FolderReferenceV2025R0" to be defined',
        });
    }
    const type = deserializeFolderReferenceV2025R0TypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "FolderReferenceV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FolderReferenceV2025R0"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
function serializeFolderReferenceV2025R0Input(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeFolderReferenceV2025R0TypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeFolderReferenceV2025R0Input(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FolderReferenceV2025R0Input"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeFolderReferenceV2025R0TypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "FolderReferenceV2025R0Input" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FolderReferenceV2025R0Input"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
//# sourceMappingURL=folderReferenceV2025R0.generated.js.map