"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchiveV2025R0 = void 0;
exports.serializeArchiveV2025R0TypeField = serializeArchiveV2025R0TypeField;
exports.deserializeArchiveV2025R0TypeField = deserializeArchiveV2025R0TypeField;
exports.serializeArchiveV2025R0 = serializeArchiveV2025R0;
exports.deserializeArchiveV2025R0 = deserializeArchiveV2025R0;
exports.serializeArchiveV2025R0Input = serializeArchiveV2025R0Input;
exports.deserializeArchiveV2025R0Input = deserializeArchiveV2025R0Input;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
const json_js_3 = require("../../serialization/json.js");
class ArchiveV2025R0 {
    constructor(fields) {
        /**
         * The value will always be `archive`. */
        this.type = 'archive';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.name !== undefined) {
            this.name = fields.name;
        }
        if (fields.size !== undefined) {
            this.size = fields.size;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.ArchiveV2025R0 = ArchiveV2025R0;
function serializeArchiveV2025R0TypeField(val) {
    return val;
}
function deserializeArchiveV2025R0TypeField(val) {
    if (val == 'archive') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ArchiveV2025R0TypeField",
    });
}
function serializeArchiveV2025R0(val) {
    return {
        ['id']: val.id,
        ['type']: serializeArchiveV2025R0TypeField(val.type),
        ['name']: val.name,
        ['size']: val.size,
    };
}
function deserializeArchiveV2025R0(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "ArchiveV2025R0"' });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "ArchiveV2025R0" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ArchiveV2025R0"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "ArchiveV2025R0" to be defined',
        });
    }
    const type = deserializeArchiveV2025R0TypeField(val.type);
    if (val.name == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "name" of type "ArchiveV2025R0" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "ArchiveV2025R0"',
        });
    }
    const name = val.name;
    if (val.size == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "size" of type "ArchiveV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsNumber)(val.size)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "size" of type "ArchiveV2025R0"',
        });
    }
    const size = val.size;
    return {
        id: id,
        type: type,
        name: name,
        size: size,
    };
}
function serializeArchiveV2025R0Input(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeArchiveV2025R0TypeField(val.type),
        ['name']: val.name,
        ['size']: val.size,
    };
}
function deserializeArchiveV2025R0Input(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ArchiveV2025R0Input"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "ArchiveV2025R0Input" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ArchiveV2025R0Input"',
        });
    }
    const id = val.id;
    const type = val.type == void 0 ? void 0 : deserializeArchiveV2025R0TypeField(val.type);
    if (val.name == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "name" of type "ArchiveV2025R0Input" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "ArchiveV2025R0Input"',
        });
    }
    const name = val.name;
    if (val.size == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "size" of type "ArchiveV2025R0Input" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsNumber)(val.size)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "size" of type "ArchiveV2025R0Input"',
        });
    }
    const size = val.size;
    return {
        id: id,
        type: type,
        name: name,
        size: size,
    };
}
//# sourceMappingURL=archiveV2025R0.generated.js.map