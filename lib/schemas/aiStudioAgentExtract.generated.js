"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiStudioAgentExtract = void 0;
exports.serializeAiStudioAgentExtractTypeField = serializeAiStudioAgentExtractTypeField;
exports.deserializeAiStudioAgentExtractTypeField = deserializeAiStudioAgentExtractTypeField;
exports.serializeAiStudioAgentExtract = serializeAiStudioAgentExtract;
exports.deserializeAiStudioAgentExtract = deserializeAiStudioAgentExtract;
exports.serializeAiStudioAgentExtractInput = serializeAiStudioAgentExtractInput;
exports.deserializeAiStudioAgentExtractInput = deserializeAiStudioAgentExtractInput;
const aiStudioAgentLongTextTool_generated_js_1 = require("./aiStudioAgentLongTextTool.generated.js");
const aiStudioAgentLongTextTool_generated_js_2 = require("./aiStudioAgentLongTextTool.generated.js");
const aiStudioAgentBasicTextTool_generated_js_1 = require("./aiStudioAgentBasicTextTool.generated.js");
const aiStudioAgentBasicTextTool_generated_js_2 = require("./aiStudioAgentBasicTextTool.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class AiStudioAgentExtract {
    constructor(fields) {
        /**
         * The type of AI agent to be used for metadata extraction. */
        this.type = 'ai_agent_extract';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.accessState !== undefined) {
            this.accessState = fields.accessState;
        }
        if (fields.description !== undefined) {
            this.description = fields.description;
        }
        if (fields.customInstructions !== undefined) {
            this.customInstructions = fields.customInstructions;
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
exports.AiStudioAgentExtract = AiStudioAgentExtract;
function serializeAiStudioAgentExtractTypeField(val) {
    return val;
}
function deserializeAiStudioAgentExtractTypeField(val) {
    if (val == 'ai_agent_extract') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AiStudioAgentExtractTypeField",
    });
}
function serializeAiStudioAgentExtract(val) {
    return {
        ['type']: serializeAiStudioAgentExtractTypeField(val.type),
        ['access_state']: val.accessState,
        ['description']: val.description,
        ['custom_instructions']: val.customInstructions,
        ['long_text']: val.longText == void 0
            ? val.longText
            : (0, aiStudioAgentLongTextTool_generated_js_1.serializeAiStudioAgentLongTextTool)(val.longText),
        ['basic_text']: val.basicText == void 0
            ? val.basicText
            : (0, aiStudioAgentBasicTextTool_generated_js_1.serializeAiStudioAgentBasicTextTool)(val.basicText),
        ['basic_image']: val.basicImage == void 0
            ? val.basicImage
            : (0, aiStudioAgentBasicTextTool_generated_js_1.serializeAiStudioAgentBasicTextTool)(val.basicImage),
    };
}
function deserializeAiStudioAgentExtract(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentExtract"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "AiStudioAgentExtract" to be defined',
        });
    }
    const type = deserializeAiStudioAgentExtractTypeField(val.type);
    if (val.access_state == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "access_state" of type "AiStudioAgentExtract" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.access_state)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "access_state" of type "AiStudioAgentExtract"',
        });
    }
    const accessState = val.access_state;
    if (val.description == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "description" of type "AiStudioAgentExtract" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "AiStudioAgentExtract"',
        });
    }
    const description = val.description;
    if (!(val.custom_instructions == void 0) &&
        !(0, json_js_1.sdIsString)(val.custom_instructions)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "custom_instructions" of type "AiStudioAgentExtract"',
        });
    }
    const customInstructions = val.custom_instructions == void 0 ? void 0 : val.custom_instructions;
    const longText = val.long_text == void 0
        ? void 0
        : (0, aiStudioAgentLongTextTool_generated_js_2.deserializeAiStudioAgentLongTextTool)(val.long_text);
    const basicText = val.basic_text == void 0
        ? void 0
        : (0, aiStudioAgentBasicTextTool_generated_js_2.deserializeAiStudioAgentBasicTextTool)(val.basic_text);
    const basicImage = val.basic_image == void 0
        ? void 0
        : (0, aiStudioAgentBasicTextTool_generated_js_2.deserializeAiStudioAgentBasicTextTool)(val.basic_image);
    return {
        type: type,
        accessState: accessState,
        description: description,
        customInstructions: customInstructions,
        longText: longText,
        basicText: basicText,
        basicImage: basicImage,
    };
}
function serializeAiStudioAgentExtractInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeAiStudioAgentExtractTypeField(val.type),
        ['access_state']: val.accessState,
        ['description']: val.description,
        ['custom_instructions']: val.customInstructions,
        ['long_text']: val.longText == void 0
            ? val.longText
            : (0, aiStudioAgentLongTextTool_generated_js_1.serializeAiStudioAgentLongTextTool)(val.longText),
        ['basic_text']: val.basicText == void 0
            ? val.basicText
            : (0, aiStudioAgentBasicTextTool_generated_js_1.serializeAiStudioAgentBasicTextTool)(val.basicText),
        ['basic_image']: val.basicImage == void 0
            ? val.basicImage
            : (0, aiStudioAgentBasicTextTool_generated_js_1.serializeAiStudioAgentBasicTextTool)(val.basicImage),
    };
}
function deserializeAiStudioAgentExtractInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentExtractInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeAiStudioAgentExtractTypeField(val.type);
    if (val.access_state == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "access_state" of type "AiStudioAgentExtractInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.access_state)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "access_state" of type "AiStudioAgentExtractInput"',
        });
    }
    const accessState = val.access_state;
    if (val.description == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "description" of type "AiStudioAgentExtractInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "AiStudioAgentExtractInput"',
        });
    }
    const description = val.description;
    if (!(val.custom_instructions == void 0) &&
        !(0, json_js_1.sdIsString)(val.custom_instructions)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "custom_instructions" of type "AiStudioAgentExtractInput"',
        });
    }
    const customInstructions = val.custom_instructions == void 0 ? void 0 : val.custom_instructions;
    const longText = val.long_text == void 0
        ? void 0
        : (0, aiStudioAgentLongTextTool_generated_js_2.deserializeAiStudioAgentLongTextTool)(val.long_text);
    const basicText = val.basic_text == void 0
        ? void 0
        : (0, aiStudioAgentBasicTextTool_generated_js_2.deserializeAiStudioAgentBasicTextTool)(val.basic_text);
    const basicImage = val.basic_image == void 0
        ? void 0
        : (0, aiStudioAgentBasicTextTool_generated_js_2.deserializeAiStudioAgentBasicTextTool)(val.basic_image);
    return {
        type: type,
        accessState: accessState,
        description: description,
        customInstructions: customInstructions,
        longText: longText,
        basicText: basicText,
        basicImage: basicImage,
    };
}
//# sourceMappingURL=aiStudioAgentExtract.generated.js.map