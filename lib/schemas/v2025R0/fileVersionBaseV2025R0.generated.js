"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileVersionBaseV2025R0 = void 0;
exports.serializeFileVersionBaseV2025R0TypeField = serializeFileVersionBaseV2025R0TypeField;
exports.deserializeFileVersionBaseV2025R0TypeField = deserializeFileVersionBaseV2025R0TypeField;
exports.serializeFileVersionBaseV2025R0 = serializeFileVersionBaseV2025R0;
exports.deserializeFileVersionBaseV2025R0 = deserializeFileVersionBaseV2025R0;
exports.serializeFileVersionBaseV2025R0Input = serializeFileVersionBaseV2025R0Input;
exports.deserializeFileVersionBaseV2025R0Input = deserializeFileVersionBaseV2025R0Input;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
class FileVersionBaseV2025R0 {
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
exports.FileVersionBaseV2025R0 = FileVersionBaseV2025R0;
function serializeFileVersionBaseV2025R0TypeField(val) {
    return val;
}
function deserializeFileVersionBaseV2025R0TypeField(val) {
    if (val == 'file_version') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize FileVersionBaseV2025R0TypeField",
    });
}
function serializeFileVersionBaseV2025R0(val) {
    return {
        ['id']: val.id,
        ['type']: serializeFileVersionBaseV2025R0TypeField(val.type),
    };
}
function deserializeFileVersionBaseV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileVersionBaseV2025R0"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "FileVersionBaseV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FileVersionBaseV2025R0"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "FileVersionBaseV2025R0" to be defined',
        });
    }
    const type = deserializeFileVersionBaseV2025R0TypeField(val.type);
    return { id: id, type: type };
}
function serializeFileVersionBaseV2025R0Input(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeFileVersionBaseV2025R0TypeField(val.type),
    };
}
function deserializeFileVersionBaseV2025R0Input(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileVersionBaseV2025R0Input"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "FileVersionBaseV2025R0Input" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FileVersionBaseV2025R0Input"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeFileVersionBaseV2025R0TypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=fileVersionBaseV2025R0.generated.js.map