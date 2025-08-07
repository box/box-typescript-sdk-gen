"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiStudioAgentExtractResponse = void 0;
exports.serializeAiStudioAgentExtractResponseTypeField = serializeAiStudioAgentExtractResponseTypeField;
exports.deserializeAiStudioAgentExtractResponseTypeField = deserializeAiStudioAgentExtractResponseTypeField;
exports.serializeAiStudioAgentExtractResponse = serializeAiStudioAgentExtractResponse;
exports.deserializeAiStudioAgentExtractResponse = deserializeAiStudioAgentExtractResponse;
exports.serializeAiStudioAgentExtractResponseInput = serializeAiStudioAgentExtractResponseInput;
exports.deserializeAiStudioAgentExtractResponseInput = deserializeAiStudioAgentExtractResponseInput;
const aiStudioAgentLongTextToolResponse_generated_js_1 = require("./aiStudioAgentLongTextToolResponse.generated.js");
const aiStudioAgentLongTextToolResponse_generated_js_2 = require("./aiStudioAgentLongTextToolResponse.generated.js");
const aiStudioAgentBasicTextToolResponse_generated_js_1 = require("./aiStudioAgentBasicTextToolResponse.generated.js");
const aiStudioAgentBasicTextToolResponse_generated_js_2 = require("./aiStudioAgentBasicTextToolResponse.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class AiStudioAgentExtractResponse {
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
exports.AiStudioAgentExtractResponse = AiStudioAgentExtractResponse;
function serializeAiStudioAgentExtractResponseTypeField(val) {
    return val;
}
function deserializeAiStudioAgentExtractResponseTypeField(val) {
    if (val == 'ai_agent_extract') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AiStudioAgentExtractResponseTypeField",
    });
}
function serializeAiStudioAgentExtractResponse(val) {
    return {
        ['type']: serializeAiStudioAgentExtractResponseTypeField(val.type),
        ['access_state']: val.accessState,
        ['description']: val.description,
        ['custom_instructions']: val.customInstructions,
        ['long_text']: val.longText == void 0
            ? val.longText
            : (0, aiStudioAgentLongTextToolResponse_generated_js_1.serializeAiStudioAgentLongTextToolResponse)(val.longText),
        ['basic_text']: val.basicText == void 0
            ? val.basicText
            : (0, aiStudioAgentBasicTextToolResponse_generated_js_1.serializeAiStudioAgentBasicTextToolResponse)(val.basicText),
        ['basic_image']: val.basicImage == void 0
            ? val.basicImage
            : (0, aiStudioAgentBasicTextToolResponse_generated_js_1.serializeAiStudioAgentBasicTextToolResponse)(val.basicImage),
    };
}
function deserializeAiStudioAgentExtractResponse(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentExtractResponse"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "AiStudioAgentExtractResponse" to be defined',
        });
    }
    const type = deserializeAiStudioAgentExtractResponseTypeField(val.type);
    if (val.access_state == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "access_state" of type "AiStudioAgentExtractResponse" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.access_state)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "access_state" of type "AiStudioAgentExtractResponse"',
        });
    }
    const accessState = val.access_state;
    if (val.description == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "description" of type "AiStudioAgentExtractResponse" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "AiStudioAgentExtractResponse"',
        });
    }
    const description = val.description;
    if (!(val.custom_instructions == void 0) &&
        !(0, json_js_1.sdIsString)(val.custom_instructions)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "custom_instructions" of type "AiStudioAgentExtractResponse"',
        });
    }
    const customInstructions = val.custom_instructions == void 0 ? void 0 : val.custom_instructions;
    const longText = val.long_text == void 0
        ? void 0
        : (0, aiStudioAgentLongTextToolResponse_generated_js_2.deserializeAiStudioAgentLongTextToolResponse)(val.long_text);
    const basicText = val.basic_text == void 0
        ? void 0
        : (0, aiStudioAgentBasicTextToolResponse_generated_js_2.deserializeAiStudioAgentBasicTextToolResponse)(val.basic_text);
    const basicImage = val.basic_image == void 0
        ? void 0
        : (0, aiStudioAgentBasicTextToolResponse_generated_js_2.deserializeAiStudioAgentBasicTextToolResponse)(val.basic_image);
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
function serializeAiStudioAgentExtractResponseInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeAiStudioAgentExtractResponseTypeField(val.type),
        ['access_state']: val.accessState,
        ['description']: val.description,
        ['custom_instructions']: val.customInstructions,
        ['long_text']: val.longText == void 0
            ? val.longText
            : (0, aiStudioAgentLongTextToolResponse_generated_js_1.serializeAiStudioAgentLongTextToolResponse)(val.longText),
        ['basic_text']: val.basicText == void 0
            ? val.basicText
            : (0, aiStudioAgentBasicTextToolResponse_generated_js_1.serializeAiStudioAgentBasicTextToolResponse)(val.basicText),
        ['basic_image']: val.basicImage == void 0
            ? val.basicImage
            : (0, aiStudioAgentBasicTextToolResponse_generated_js_1.serializeAiStudioAgentBasicTextToolResponse)(val.basicImage),
    };
}
function deserializeAiStudioAgentExtractResponseInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentExtractResponseInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeAiStudioAgentExtractResponseTypeField(val.type);
    if (val.access_state == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "access_state" of type "AiStudioAgentExtractResponseInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.access_state)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "access_state" of type "AiStudioAgentExtractResponseInput"',
        });
    }
    const accessState = val.access_state;
    if (val.description == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "description" of type "AiStudioAgentExtractResponseInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "AiStudioAgentExtractResponseInput"',
        });
    }
    const description = val.description;
    if (!(val.custom_instructions == void 0) &&
        !(0, json_js_1.sdIsString)(val.custom_instructions)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "custom_instructions" of type "AiStudioAgentExtractResponseInput"',
        });
    }
    const customInstructions = val.custom_instructions == void 0 ? void 0 : val.custom_instructions;
    const longText = val.long_text == void 0
        ? void 0
        : (0, aiStudioAgentLongTextToolResponse_generated_js_2.deserializeAiStudioAgentLongTextToolResponse)(val.long_text);
    const basicText = val.basic_text == void 0
        ? void 0
        : (0, aiStudioAgentBasicTextToolResponse_generated_js_2.deserializeAiStudioAgentBasicTextToolResponse)(val.basic_text);
    const basicImage = val.basic_image == void 0
        ? void 0
        : (0, aiStudioAgentBasicTextToolResponse_generated_js_2.deserializeAiStudioAgentBasicTextToolResponse)(val.basic_image);
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
//# sourceMappingURL=aiStudioAgentExtractResponse.generated.js.map