"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiCitationTypeField = serializeAiCitationTypeField;
exports.deserializeAiCitationTypeField = deserializeAiCitationTypeField;
exports.serializeAiCitation = serializeAiCitation;
exports.deserializeAiCitation = deserializeAiCitation;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeAiCitationTypeField(val) {
    return val;
}
function deserializeAiCitationTypeField(val) {
    if (val == 'file') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize AiCitationTypeField" });
}
function serializeAiCitation(val) {
    return {
        ['content']: val.content,
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeAiCitationTypeField(val.type),
        ['name']: val.name,
    };
}
function deserializeAiCitation(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "AiCitation"' });
    }
    if (!(val.content == void 0) && !(0, json_js_1.sdIsString)(val.content)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "content" of type "AiCitation"',
        });
    }
    const content = val.content == void 0 ? void 0 : val.content;
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "AiCitation"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeAiCitationTypeField(val.type);
    if (!(val.name == void 0) && !(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "AiCitation"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    return {
        content: content,
        id: id,
        type: type,
        name: name,
    };
}
//# sourceMappingURL=aiCitation.generated.js.map