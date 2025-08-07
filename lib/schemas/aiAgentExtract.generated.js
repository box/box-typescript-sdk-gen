"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiAgentExtract = void 0;
exports.serializeAiAgentExtractTypeField = serializeAiAgentExtractTypeField;
exports.deserializeAiAgentExtractTypeField = deserializeAiAgentExtractTypeField;
exports.serializeAiAgentExtract = serializeAiAgentExtract;
exports.deserializeAiAgentExtract = deserializeAiAgentExtract;
exports.serializeAiAgentExtractInput = serializeAiAgentExtractInput;
exports.deserializeAiAgentExtractInput = deserializeAiAgentExtractInput;
const aiAgentLongTextTool_generated_js_1 = require("./aiAgentLongTextTool.generated.js");
const aiAgentLongTextTool_generated_js_2 = require("./aiAgentLongTextTool.generated.js");
const aiAgentBasicTextTool_generated_js_1 = require("./aiAgentBasicTextTool.generated.js");
const aiAgentBasicTextTool_generated_js_2 = require("./aiAgentBasicTextTool.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
class AiAgentExtract {
    constructor(fields) {
        /**
         * The type of AI agent to be used for extraction. */
        this.type = 'ai_agent_extract';
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
exports.AiAgentExtract = AiAgentExtract;
function serializeAiAgentExtractTypeField(val) {
    return val;
}
function deserializeAiAgentExtractTypeField(val) {
    if (val == 'ai_agent_extract') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AiAgentExtractTypeField",
    });
}
function serializeAiAgentExtract(val) {
    return {
        ['type']: serializeAiAgentExtractTypeField(val.type),
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
function deserializeAiAgentExtract(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "AiAgentExtract"' });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "AiAgentExtract" to be defined',
        });
    }
    const type = deserializeAiAgentExtractTypeField(val.type);
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
function serializeAiAgentExtractInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeAiAgentExtractTypeField(val.type),
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
function deserializeAiAgentExtractInput(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiAgentExtractInput"',
        });
    }
    const type = val.type == void 0 ? void 0 : deserializeAiAgentExtractTypeField(val.type);
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
//# sourceMappingURL=aiAgentExtract.generated.js.map