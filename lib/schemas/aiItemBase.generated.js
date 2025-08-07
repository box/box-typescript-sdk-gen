"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiItemBase = void 0;
exports.serializeAiItemBaseTypeField = serializeAiItemBaseTypeField;
exports.deserializeAiItemBaseTypeField = deserializeAiItemBaseTypeField;
exports.serializeAiItemBase = serializeAiItemBase;
exports.deserializeAiItemBase = deserializeAiItemBase;
exports.serializeAiItemBaseInput = serializeAiItemBaseInput;
exports.deserializeAiItemBaseInput = deserializeAiItemBaseInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class AiItemBase {
    constructor(fields) {
        /**
         * The type of the item. Currently the value can be `file` only. */
        this.type = 'file';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.content !== undefined) {
            this.content = fields.content;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.AiItemBase = AiItemBase;
function serializeAiItemBaseTypeField(val) {
    return val;
}
function deserializeAiItemBaseTypeField(val) {
    if (val == 'file') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize AiItemBaseTypeField" });
}
function serializeAiItemBase(val) {
    return {
        ['id']: val.id,
        ['type']: serializeAiItemBaseTypeField(val.type),
        ['content']: val.content,
    };
}
function deserializeAiItemBase(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "AiItemBase"' });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "AiItemBase" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "AiItemBase"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "AiItemBase" to be defined',
        });
    }
    const type = deserializeAiItemBaseTypeField(val.type);
    if (!(val.content == void 0) && !(0, json_js_1.sdIsString)(val.content)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "content" of type "AiItemBase"',
        });
    }
    const content = val.content == void 0 ? void 0 : val.content;
    return { id: id, type: type, content: content };
}
function serializeAiItemBaseInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeAiItemBaseTypeField(val.type),
        ['content']: val.content,
    };
}
function deserializeAiItemBaseInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "AiItemBaseInput"' });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "AiItemBaseInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "AiItemBaseInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0 ? void 0 : deserializeAiItemBaseTypeField(val.type);
    if (!(val.content == void 0) && !(0, json_js_1.sdIsString)(val.content)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "content" of type "AiItemBaseInput"',
        });
    }
    const content = val.content == void 0 ? void 0 : val.content;
    return { id: id, type: type, content: content };
}
//# sourceMappingURL=aiItemBase.generated.js.map