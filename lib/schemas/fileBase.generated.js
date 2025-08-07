"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileBase = void 0;
exports.serializeFileBaseTypeField = serializeFileBaseTypeField;
exports.deserializeFileBaseTypeField = deserializeFileBaseTypeField;
exports.serializeFileBase = serializeFileBase;
exports.deserializeFileBase = deserializeFileBase;
exports.serializeFileBaseInput = serializeFileBaseInput;
exports.deserializeFileBaseInput = deserializeFileBaseInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class FileBase {
    constructor(fields) {
        /**
         * The value will always be `file`. */
        this.type = 'file';
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
exports.FileBase = FileBase;
function serializeFileBaseTypeField(val) {
    return val;
}
function deserializeFileBaseTypeField(val) {
    if (val == 'file') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize FileBaseTypeField" });
}
function serializeFileBase(val) {
    return {
        ['id']: val.id,
        ['etag']: val.etag,
        ['type']: serializeFileBaseTypeField(val.type),
    };
}
function deserializeFileBase(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "FileBase"' });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "FileBase" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FileBase"',
        });
    }
    const id = val.id;
    if (!(val.etag == void 0) && !(0, json_js_1.sdIsString)(val.etag)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "etag" of type "FileBase"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "FileBase" to be defined',
        });
    }
    const type = deserializeFileBaseTypeField(val.type);
    return { id: id, etag: etag, type: type };
}
function serializeFileBaseInput(val) {
    return {
        ['id']: val.id,
        ['etag']: val.etag,
        ['type']: val.type == void 0 ? val.type : serializeFileBaseTypeField(val.type),
    };
}
function deserializeFileBaseInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "FileBaseInput"' });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "FileBaseInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FileBaseInput"',
        });
    }
    const id = val.id;
    if (!(val.etag == void 0) && !(0, json_js_1.sdIsString)(val.etag)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "etag" of type "FileBaseInput"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    const type = val.type == void 0 ? void 0 : deserializeFileBaseTypeField(val.type);
    return { id: id, etag: etag, type: type };
}
//# sourceMappingURL=fileBase.generated.js.map