"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiStudioAgentAskResponse = void 0;
exports.serializeAiStudioAgentAskResponseTypeField = serializeAiStudioAgentAskResponseTypeField;
exports.deserializeAiStudioAgentAskResponseTypeField = deserializeAiStudioAgentAskResponseTypeField;
exports.serializeAiStudioAgentAskResponse = serializeAiStudioAgentAskResponse;
exports.deserializeAiStudioAgentAskResponse = deserializeAiStudioAgentAskResponse;
exports.serializeAiStudioAgentAskResponseInput = serializeAiStudioAgentAskResponseInput;
exports.deserializeAiStudioAgentAskResponseInput = deserializeAiStudioAgentAskResponseInput;
const aiStudioAgentLongTextToolResponse_generated_js_1 = require("./aiStudioAgentLongTextToolResponse.generated.js");
const aiStudioAgentLongTextToolResponse_generated_js_2 = require("./aiStudioAgentLongTextToolResponse.generated.js");
const aiStudioAgentBasicTextToolResponse_generated_js_1 = require("./aiStudioAgentBasicTextToolResponse.generated.js");
const aiStudioAgentBasicTextToolResponse_generated_js_2 = require("./aiStudioAgentBasicTextToolResponse.generated.js");
const aiStudioAgentSpreadsheetToolResponse_generated_js_1 = require("./aiStudioAgentSpreadsheetToolResponse.generated.js");
const aiStudioAgentSpreadsheetToolResponse_generated_js_2 = require("./aiStudioAgentSpreadsheetToolResponse.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class AiStudioAgentAskResponse {
    constructor(fields) {
        /**
         * The type of AI agent used to ask questions. */
        this.type = 'ai_agent_ask';
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
        if (fields.suggestedQuestions !== undefined) {
            this.suggestedQuestions = fields.suggestedQuestions;
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
        if (fields.spreadsheet !== undefined) {
            this.spreadsheet = fields.spreadsheet;
        }
        if (fields.longTextMulti !== undefined) {
            this.longTextMulti = fields.longTextMulti;
        }
        if (fields.basicTextMulti !== undefined) {
            this.basicTextMulti = fields.basicTextMulti;
        }
        if (fields.basicImageMulti !== undefined) {
            this.basicImageMulti = fields.basicImageMulti;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.AiStudioAgentAskResponse = AiStudioAgentAskResponse;
function serializeAiStudioAgentAskResponseTypeField(val) {
    return val;
}
function deserializeAiStudioAgentAskResponseTypeField(val) {
    if (val == 'ai_agent_ask') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AiStudioAgentAskResponseTypeField",
    });
}
function serializeAiStudioAgentAskResponse(val) {
    return {
        ['type']: serializeAiStudioAgentAskResponseTypeField(val.type),
        ['access_state']: val.accessState,
        ['description']: val.description,
        ['custom_instructions']: val.customInstructions,
        ['suggested_questions']: val.suggestedQuestions == void 0
            ? val.suggestedQuestions
            : val.suggestedQuestions.map(function (item) {
                return item;
            }),
        ['long_text']: val.longText == void 0
            ? val.longText
            : (0, aiStudioAgentLongTextToolResponse_generated_js_1.serializeAiStudioAgentLongTextToolResponse)(val.longText),
        ['basic_text']: val.basicText == void 0
            ? val.basicText
            : (0, aiStudioAgentBasicTextToolResponse_generated_js_1.serializeAiStudioAgentBasicTextToolResponse)(val.basicText),
        ['basic_image']: val.basicImage == void 0
            ? val.basicImage
            : (0, aiStudioAgentBasicTextToolResponse_generated_js_1.serializeAiStudioAgentBasicTextToolResponse)(val.basicImage),
        ['spreadsheet']: val.spreadsheet == void 0
            ? val.spreadsheet
            : (0, aiStudioAgentSpreadsheetToolResponse_generated_js_1.serializeAiStudioAgentSpreadsheetToolResponse)(val.spreadsheet),
        ['long_text_multi']: val.longTextMulti == void 0
            ? val.longTextMulti
            : (0, aiStudioAgentLongTextToolResponse_generated_js_1.serializeAiStudioAgentLongTextToolResponse)(val.longTextMulti),
        ['basic_text_multi']: val.basicTextMulti == void 0
            ? val.basicTextMulti
            : (0, aiStudioAgentBasicTextToolResponse_generated_js_1.serializeAiStudioAgentBasicTextToolResponse)(val.basicTextMulti),
        ['basic_image_multi']: val.basicImageMulti == void 0
            ? val.basicImageMulti
            : (0, aiStudioAgentBasicTextToolResponse_generated_js_1.serializeAiStudioAgentBasicTextToolResponse)(val.basicImageMulti),
    };
}
function deserializeAiStudioAgentAskResponse(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentAskResponse"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "AiStudioAgentAskResponse" to be defined',
        });
    }
    const type = deserializeAiStudioAgentAskResponseTypeField(val.type);
    if (val.access_state == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "access_state" of type "AiStudioAgentAskResponse" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.access_state)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "access_state" of type "AiStudioAgentAskResponse"',
        });
    }
    const accessState = val.access_state;
    if (val.description == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "description" of type "AiStudioAgentAskResponse" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "AiStudioAgentAskResponse"',
        });
    }
    const description = val.description;
    if (!(val.custom_instructions == void 0) &&
        !(0, json_js_1.sdIsString)(val.custom_instructions)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "custom_instructions" of type "AiStudioAgentAskResponse"',
        });
    }
    const customInstructions = val.custom_instructions == void 0 ? void 0 : val.custom_instructions;
    if (!(val.suggested_questions == void 0) &&
        !(0, json_js_2.sdIsList)(val.suggested_questions)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "suggested_questions" of type "AiStudioAgentAskResponse"',
        });
    }
    const suggestedQuestions = val.suggested_questions == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.suggested_questions)
            ? val.suggested_questions.map(function (itm) {
                if (!(0, json_js_1.sdIsString)(itm)) {
                    throw new errors_js_1.BoxSdkError({
                        message: 'Expecting string for "AiStudioAgentAskResponse"',
                    });
                }
                return itm;
            })
            : [];
    const longText = val.long_text == void 0
        ? void 0
        : (0, aiStudioAgentLongTextToolResponse_generated_js_2.deserializeAiStudioAgentLongTextToolResponse)(val.long_text);
    const basicText = val.basic_text == void 0
        ? void 0
        : (0, aiStudioAgentBasicTextToolResponse_generated_js_2.deserializeAiStudioAgentBasicTextToolResponse)(val.basic_text);
    const basicImage = val.basic_image == void 0
        ? void 0
        : (0, aiStudioAgentBasicTextToolResponse_generated_js_2.deserializeAiStudioAgentBasicTextToolResponse)(val.basic_image);
    const spreadsheet = val.spreadsheet == void 0
        ? void 0
        : (0, aiStudioAgentSpreadsheetToolResponse_generated_js_2.deserializeAiStudioAgentSpreadsheetToolResponse)(val.spreadsheet);
    const longTextMulti = val.long_text_multi == void 0
        ? void 0
        : (0, aiStudioAgentLongTextToolResponse_generated_js_2.deserializeAiStudioAgentLongTextToolResponse)(val.long_text_multi);
    const basicTextMulti = val.basic_text_multi == void 0
        ? void 0
        : (0, aiStudioAgentBasicTextToolResponse_generated_js_2.deserializeAiStudioAgentBasicTextToolResponse)(val.basic_text_multi);
    const basicImageMulti = val.basic_image_multi == void 0
        ? void 0
        : (0, aiStudioAgentBasicTextToolResponse_generated_js_2.deserializeAiStudioAgentBasicTextToolResponse)(val.basic_image_multi);
    return {
        type: type,
        accessState: accessState,
        description: description,
        customInstructions: customInstructions,
        suggestedQuestions: suggestedQuestions,
        longText: longText,
        basicText: basicText,
        basicImage: basicImage,
        spreadsheet: spreadsheet,
        longTextMulti: longTextMulti,
        basicTextMulti: basicTextMulti,
        basicImageMulti: basicImageMulti,
    };
}
function serializeAiStudioAgentAskResponseInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeAiStudioAgentAskResponseTypeField(val.type),
        ['access_state']: val.accessState,
        ['description']: val.description,
        ['custom_instructions']: val.customInstructions,
        ['suggested_questions']: val.suggestedQuestions == void 0
            ? val.suggestedQuestions
            : val.suggestedQuestions.map(function (item) {
                return item;
            }),
        ['long_text']: val.longText == void 0
            ? val.longText
            : (0, aiStudioAgentLongTextToolResponse_generated_js_1.serializeAiStudioAgentLongTextToolResponse)(val.longText),
        ['basic_text']: val.basicText == void 0
            ? val.basicText
            : (0, aiStudioAgentBasicTextToolResponse_generated_js_1.serializeAiStudioAgentBasicTextToolResponse)(val.basicText),
        ['basic_image']: val.basicImage == void 0
            ? val.basicImage
            : (0, aiStudioAgentBasicTextToolResponse_generated_js_1.serializeAiStudioAgentBasicTextToolResponse)(val.basicImage),
        ['spreadsheet']: val.spreadsheet == void 0
            ? val.spreadsheet
            : (0, aiStudioAgentSpreadsheetToolResponse_generated_js_1.serializeAiStudioAgentSpreadsheetToolResponse)(val.spreadsheet),
        ['long_text_multi']: val.longTextMulti == void 0
            ? val.longTextMulti
            : (0, aiStudioAgentLongTextToolResponse_generated_js_1.serializeAiStudioAgentLongTextToolResponse)(val.longTextMulti),
        ['basic_text_multi']: val.basicTextMulti == void 0
            ? val.basicTextMulti
            : (0, aiStudioAgentBasicTextToolResponse_generated_js_1.serializeAiStudioAgentBasicTextToolResponse)(val.basicTextMulti),
        ['basic_image_multi']: val.basicImageMulti == void 0
            ? val.basicImageMulti
            : (0, aiStudioAgentBasicTextToolResponse_generated_js_1.serializeAiStudioAgentBasicTextToolResponse)(val.basicImageMulti),
    };
}
function deserializeAiStudioAgentAskResponseInput(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentAskResponseInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeAiStudioAgentAskResponseTypeField(val.type);
    if (val.access_state == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "access_state" of type "AiStudioAgentAskResponseInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.access_state)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "access_state" of type "AiStudioAgentAskResponseInput"',
        });
    }
    const accessState = val.access_state;
    if (val.description == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "description" of type "AiStudioAgentAskResponseInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "AiStudioAgentAskResponseInput"',
        });
    }
    const description = val.description;
    if (!(val.custom_instructions == void 0) &&
        !(0, json_js_1.sdIsString)(val.custom_instructions)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "custom_instructions" of type "AiStudioAgentAskResponseInput"',
        });
    }
    const customInstructions = val.custom_instructions == void 0 ? void 0 : val.custom_instructions;
    if (!(val.suggested_questions == void 0) &&
        !(0, json_js_2.sdIsList)(val.suggested_questions)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "suggested_questions" of type "AiStudioAgentAskResponseInput"',
        });
    }
    const suggestedQuestions = val.suggested_questions == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.suggested_questions)
            ? val.suggested_questions.map(function (itm) {
                if (!(0, json_js_1.sdIsString)(itm)) {
                    throw new errors_js_1.BoxSdkError({
                        message: 'Expecting string for "AiStudioAgentAskResponseInput"',
                    });
                }
                return itm;
            })
            : [];
    const longText = val.long_text == void 0
        ? void 0
        : (0, aiStudioAgentLongTextToolResponse_generated_js_2.deserializeAiStudioAgentLongTextToolResponse)(val.long_text);
    const basicText = val.basic_text == void 0
        ? void 0
        : (0, aiStudioAgentBasicTextToolResponse_generated_js_2.deserializeAiStudioAgentBasicTextToolResponse)(val.basic_text);
    const basicImage = val.basic_image == void 0
        ? void 0
        : (0, aiStudioAgentBasicTextToolResponse_generated_js_2.deserializeAiStudioAgentBasicTextToolResponse)(val.basic_image);
    const spreadsheet = val.spreadsheet == void 0
        ? void 0
        : (0, aiStudioAgentSpreadsheetToolResponse_generated_js_2.deserializeAiStudioAgentSpreadsheetToolResponse)(val.spreadsheet);
    const longTextMulti = val.long_text_multi == void 0
        ? void 0
        : (0, aiStudioAgentLongTextToolResponse_generated_js_2.deserializeAiStudioAgentLongTextToolResponse)(val.long_text_multi);
    const basicTextMulti = val.basic_text_multi == void 0
        ? void 0
        : (0, aiStudioAgentBasicTextToolResponse_generated_js_2.deserializeAiStudioAgentBasicTextToolResponse)(val.basic_text_multi);
    const basicImageMulti = val.basic_image_multi == void 0
        ? void 0
        : (0, aiStudioAgentBasicTextToolResponse_generated_js_2.deserializeAiStudioAgentBasicTextToolResponse)(val.basic_image_multi);
    return {
        type: type,
        accessState: accessState,
        description: description,
        customInstructions: customInstructions,
        suggestedQuestions: suggestedQuestions,
        longText: longText,
        basicText: basicText,
        basicImage: basicImage,
        spreadsheet: spreadsheet,
        longTextMulti: longTextMulti,
        basicTextMulti: basicTextMulti,
        basicImageMulti: basicImageMulti,
    };
}
//# sourceMappingURL=aiStudioAgentAskResponse.generated.js.map