"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileReferenceV2025R0 = void 0;
exports.serializeFileReferenceV2025R0TypeField = serializeFileReferenceV2025R0TypeField;
exports.deserializeFileReferenceV2025R0TypeField = deserializeFileReferenceV2025R0TypeField;
exports.serializeFileReferenceV2025R0 = serializeFileReferenceV2025R0;
exports.deserializeFileReferenceV2025R0 = deserializeFileReferenceV2025R0;
exports.serializeFileReferenceV2025R0Input = serializeFileReferenceV2025R0Input;
exports.deserializeFileReferenceV2025R0Input = deserializeFileReferenceV2025R0Input;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
class FileReferenceV2025R0 {
    constructor(fields) {
        /**
         * The value will always be `file`. */
        this.type = 'file';
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
exports.FileReferenceV2025R0 = FileReferenceV2025R0;
function serializeFileReferenceV2025R0TypeField(val) {
    return val;
}
function deserializeFileReferenceV2025R0TypeField(val) {
    if (val == 'file') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize FileReferenceV2025R0TypeField",
    });
}
function serializeFileReferenceV2025R0(val) {
    return {
        ['type']: serializeFileReferenceV2025R0TypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeFileReferenceV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileReferenceV2025R0"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "FileReferenceV2025R0" to be defined',
        });
    }
    const type = deserializeFileReferenceV2025R0TypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "FileReferenceV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FileReferenceV2025R0"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
function serializeFileReferenceV2025R0Input(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeFileReferenceV2025R0TypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeFileReferenceV2025R0Input(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileReferenceV2025R0Input"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeFileReferenceV2025R0TypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "FileReferenceV2025R0Input" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FileReferenceV2025R0Input"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
//# sourceMappingURL=fileReferenceV2025R0.generated.js.map