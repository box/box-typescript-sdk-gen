"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShieldListMiniV2025R0 = void 0;
exports.serializeShieldListMiniV2025R0TypeField = serializeShieldListMiniV2025R0TypeField;
exports.deserializeShieldListMiniV2025R0TypeField = deserializeShieldListMiniV2025R0TypeField;
exports.serializeShieldListMiniV2025R0ContentField = serializeShieldListMiniV2025R0ContentField;
exports.deserializeShieldListMiniV2025R0ContentField = deserializeShieldListMiniV2025R0ContentField;
exports.serializeShieldListMiniV2025R0 = serializeShieldListMiniV2025R0;
exports.deserializeShieldListMiniV2025R0 = deserializeShieldListMiniV2025R0;
exports.serializeShieldListMiniV2025R0Input = serializeShieldListMiniV2025R0Input;
exports.deserializeShieldListMiniV2025R0Input = deserializeShieldListMiniV2025R0Input;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
class ShieldListMiniV2025R0 {
    constructor(fields) {
        /**
         * The type of object. */
        this.type = 'shield_list';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.name !== undefined) {
            this.name = fields.name;
        }
        if (fields.content !== undefined) {
            this.content = fields.content;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.ShieldListMiniV2025R0 = ShieldListMiniV2025R0;
function serializeShieldListMiniV2025R0TypeField(val) {
    return val;
}
function deserializeShieldListMiniV2025R0TypeField(val) {
    if (val == 'shield_list') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ShieldListMiniV2025R0TypeField",
    });
}
function serializeShieldListMiniV2025R0ContentField(val) {
    return { ['type']: val.type };
}
function deserializeShieldListMiniV2025R0ContentField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldListMiniV2025R0ContentField"',
        });
    }
    if (!(val.type == void 0) && !(0, json_js_1.sdIsString)(val.type)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "type" of type "ShieldListMiniV2025R0ContentField"',
        });
    }
    const type = val.type == void 0 ? void 0 : val.type;
    return { type: type };
}
function serializeShieldListMiniV2025R0(val) {
    return {
        ['id']: val.id,
        ['type']: serializeShieldListMiniV2025R0TypeField(val.type),
        ['name']: val.name,
        ['content']: serializeShieldListMiniV2025R0ContentField(val.content),
    };
}
function deserializeShieldListMiniV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldListMiniV2025R0"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "ShieldListMiniV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldListMiniV2025R0"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "ShieldListMiniV2025R0" to be defined',
        });
    }
    const type = deserializeShieldListMiniV2025R0TypeField(val.type);
    if (val.name == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "name" of type "ShieldListMiniV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "ShieldListMiniV2025R0"',
        });
    }
    const name = val.name;
    if (val.content == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "content" of type "ShieldListMiniV2025R0" to be defined',
        });
    }
    const content = deserializeShieldListMiniV2025R0ContentField(val.content);
    return {
        id: id,
        type: type,
        name: name,
        content: content,
    };
}
function serializeShieldListMiniV2025R0Input(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldListMiniV2025R0TypeField(val.type),
        ['name']: val.name,
        ['content']: serializeShieldListMiniV2025R0ContentField(val.content),
    };
}
function deserializeShieldListMiniV2025R0Input(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldListMiniV2025R0Input"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "ShieldListMiniV2025R0Input" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldListMiniV2025R0Input"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeShieldListMiniV2025R0TypeField(val.type);
    if (val.name == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "name" of type "ShieldListMiniV2025R0Input" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "ShieldListMiniV2025R0Input"',
        });
    }
    const name = val.name;
    if (val.content == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "content" of type "ShieldListMiniV2025R0Input" to be defined',
        });
    }
    const content = deserializeShieldListMiniV2025R0ContentField(val.content);
    return {
        id: id,
        type: type,
        name: name,
        content: content,
    };
}
//# sourceMappingURL=shieldListMiniV2025R0.generated.js.map