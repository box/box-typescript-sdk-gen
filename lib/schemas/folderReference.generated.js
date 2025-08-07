"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderReference = void 0;
exports.serializeFolderReferenceTypeField = serializeFolderReferenceTypeField;
exports.deserializeFolderReferenceTypeField = deserializeFolderReferenceTypeField;
exports.serializeFolderReference = serializeFolderReference;
exports.deserializeFolderReference = deserializeFolderReference;
exports.serializeFolderReferenceInput = serializeFolderReferenceInput;
exports.deserializeFolderReferenceInput = deserializeFolderReferenceInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class FolderReference {
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
exports.FolderReference = FolderReference;
function serializeFolderReferenceTypeField(val) {
    return val;
}
function deserializeFolderReferenceTypeField(val) {
    if (val == 'folder') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize FolderReferenceTypeField",
    });
}
function serializeFolderReference(val) {
    return {
        ['type']: serializeFolderReferenceTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeFolderReference(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "FolderReference"' });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "FolderReference" to be defined',
        });
    }
    const type = deserializeFolderReferenceTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "FolderReference" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FolderReference"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
function serializeFolderReferenceInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeFolderReferenceTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeFolderReferenceInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FolderReferenceInput"',
        });
    }
    const type = val.type == void 0 ? void 0 : deserializeFolderReferenceTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "FolderReferenceInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FolderReferenceInput"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
//# sourceMappingURL=folderReference.generated.js.map