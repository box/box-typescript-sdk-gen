"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileVersionBase = void 0;
exports.serializeFileVersionBaseTypeField = serializeFileVersionBaseTypeField;
exports.deserializeFileVersionBaseTypeField = deserializeFileVersionBaseTypeField;
exports.serializeFileVersionBase = serializeFileVersionBase;
exports.deserializeFileVersionBase = deserializeFileVersionBase;
exports.serializeFileVersionBaseInput = serializeFileVersionBaseInput;
exports.deserializeFileVersionBaseInput = deserializeFileVersionBaseInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class FileVersionBase {
    constructor(fields) {
        /**
         * The value will always be `file_version`. */
        this.type = 'file_version';
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
exports.FileVersionBase = FileVersionBase;
function serializeFileVersionBaseTypeField(val) {
    return val;
}
function deserializeFileVersionBaseTypeField(val) {
    if (val == 'file_version') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize FileVersionBaseTypeField",
    });
}
function serializeFileVersionBase(val) {
    return {
        ['id']: val.id,
        ['type']: serializeFileVersionBaseTypeField(val.type),
    };
}
function deserializeFileVersionBase(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "FileVersionBase"' });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "FileVersionBase" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FileVersionBase"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "FileVersionBase" to be defined',
        });
    }
    const type = deserializeFileVersionBaseTypeField(val.type);
    return { id: id, type: type };
}
function serializeFileVersionBaseInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeFileVersionBaseTypeField(val.type),
    };
}
function deserializeFileVersionBaseInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileVersionBaseInput"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "FileVersionBaseInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FileVersionBaseInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0 ? void 0 : deserializeFileVersionBaseTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=fileVersionBase.generated.js.map