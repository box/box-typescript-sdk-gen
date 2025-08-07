"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiAgentExtractStructured = void 0;
exports.serializeAiAgentExtractStructuredTypeField = serializeAiAgentExtractStructuredTypeField;
exports.deserializeAiAgentExtractStructuredTypeField = deserializeAiAgentExtractStructuredTypeField;
exports.serializeAiAgentExtractStructured = serializeAiAgentExtractStructured;
exports.deserializeAiAgentExtractStructured = deserializeAiAgentExtractStructured;
exports.serializeAiAgentExtractStructuredInput = serializeAiAgentExtractStructuredInput;
exports.deserializeAiAgentExtractStructuredInput = deserializeAiAgentExtractStructuredInput;
const aiAgentLongTextTool_generated_js_1 = require("./aiAgentLongTextTool.generated.js");
const aiAgentLongTextTool_generated_js_2 = require("./aiAgentLongTextTool.generated.js");
const aiAgentBasicTextTool_generated_js_1 = require("./aiAgentBasicTextTool.generated.js");
const aiAgentBasicTextTool_generated_js_2 = require("./aiAgentBasicTextTool.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
class AiAgentExtractStructured {
    constructor(fields) {
        /**
         * The type of AI agent to be used for extraction. */
        this.type = 'ai_agent_extract_structured';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.longText !== undefined) {
            this.longText = fields.longText;
        }
        if (fields.basicText !== undefined) {
            this.basicText = fields.basicText;
        }
        if (fields.basicImage !== undefined) {
            this.basicImage = fields.basicImage;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.AiAgentExtractStructured = AiAgentExtractStructured;
function serializeAiAgentExtractStructuredTypeField(val) {
    return val;
}
function deserializeAiAgentExtractStructuredTypeField(val) {
    if (val == 'ai_agent_extract_structured') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AiAgentExtractStructuredTypeField",
    });
}
function serializeAiAgentExtractStructured(val) {
    return {
        ['type']: serializeAiAgentExtractStructuredTypeField(val.type),
        ['long_text']: val.longText == void 0
            ? val.longText
            : (0, aiAgentLongTextTool_generated_js_1.serializeAiAgentLongTextTool)(val.longText),
        ['basic_text']: val.basicText == void 0
            ? val.basicText
            : (0, aiAgentBasicTextTool_generated_js_1.serializeAiAgentBasicTextTool)(val.basicText),
        ['basic_image']: val.basicImage == void 0
            ? val.basicImage
            : (0, aiAgentBasicTextTool_generated_js_1.serializeAiAgentBasicTextTool)(val.basicImage),
    };
}
function deserializeAiAgentExtractStructured(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiAgentExtractStructured"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "AiAgentExtractStructured" to be defined',
        });
    }
    const type = deserializeAiAgentExtractStructuredTypeField(val.type);
    const longText = val.long_text == void 0
        ? void 0
        : (0, aiAgentLongTextTool_generated_js_2.deserializeAiAgentLongTextTool)(val.long_text);
    const basicText = val.basic_text == void 0
        ? void 0
        : (0, aiAgentBasicTextTool_generated_js_2.deserializeAiAgentBasicTextTool)(val.basic_text);
    const basicImage = val.basic_image == void 0
        ? void 0
        : (0, aiAgentBasicTextTool_generated_js_2.deserializeAiAgentBasicTextTool)(val.basic_image);
    return {
        type: type,
        longText: longText,
        basicText: basicText,
        basicImage: basicImage,
    };
}
function serializeAiAgentExtractStructuredInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeAiAgentExtractStructuredTypeField(val.type),
        ['long_text']: val.longText == void 0
            ? val.longText
            : (0, aiAgentLongTextTool_generated_js_1.serializeAiAgentLongTextTool)(val.longText),
        ['basic_text']: val.basicText == void 0
            ? val.basicText
            : (0, aiAgentBasicTextTool_generated_js_1.serializeAiAgentBasicTextTool)(val.basicText),
        ['basic_image']: val.basicImage == void 0
            ? val.basicImage
            : (0, aiAgentBasicTextTool_generated_js_1.serializeAiAgentBasicTextTool)(val.basicImage),
    };
}
function deserializeAiAgentExtractStructuredInput(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiAgentExtractStructuredInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeAiAgentExtractStructuredTypeField(val.type);
    const longText = val.long_text == void 0
        ? void 0
        : (0, aiAgentLongTextTool_generated_js_2.deserializeAiAgentLongTextTool)(val.long_text);
    const basicText = val.basic_text == void 0
        ? void 0
        : (0, aiAgentBasicTextTool_generated_js_2.deserializeAiAgentBasicTextTool)(val.basic_text);
    const basicImage = val.basic_image == void 0
        ? void 0
        : (0, aiAgentBasicTextTool_generated_js_2.deserializeAiAgentBasicTextTool)(val.basic_image);
    return {
        type: type,
        longText: longText,
        basicText: basicText,
        basicImage: basicImage,
    };
}
//# sourceMappingURL=aiAgentExtractStructured.generated.js.map