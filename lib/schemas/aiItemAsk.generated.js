"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiItemAskTypeField = serializeAiItemAskTypeField;
exports.deserializeAiItemAskTypeField = deserializeAiItemAskTypeField;
exports.serializeAiItemAsk = serializeAiItemAsk;
exports.deserializeAiItemAsk = deserializeAiItemAsk;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeAiItemAskTypeField(val) {
    return val;
}
function deserializeAiItemAskTypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'hubs') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize AiItemAskTypeField" });
}
function serializeAiItemAsk(val) {
    return {
        ['id']: val.id,
        ['type']: serializeAiItemAskTypeField(val.type),
        ['content']: val.content,
    };
}
function deserializeAiItemAsk(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "AiItemAsk"' });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "AiItemAsk" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "AiItemAsk"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "AiItemAsk" to be defined',
        });
    }
    const type = deserializeAiItemAskTypeField(val.type);
    if (!(val.content == void 0) && !(0, json_js_1.sdIsString)(val.content)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "content" of type "AiItemAsk"',
        });
    }
    const content = val.content == void 0 ? void 0 : val.content;
    return { id: id, type: type, content: content };
}
//# sourceMappingURL=aiItemAsk.generated.js.map