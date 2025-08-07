"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiStudioAgentAsk = void 0;
exports.serializeAiStudioAgentAskTypeField = serializeAiStudioAgentAskTypeField;
exports.deserializeAiStudioAgentAskTypeField = deserializeAiStudioAgentAskTypeField;
exports.serializeAiStudioAgentAsk = serializeAiStudioAgentAsk;
exports.deserializeAiStudioAgentAsk = deserializeAiStudioAgentAsk;
exports.serializeAiStudioAgentAskInput = serializeAiStudioAgentAskInput;
exports.deserializeAiStudioAgentAskInput = deserializeAiStudioAgentAskInput;
const aiStudioAgentLongTextTool_generated_js_1 = require("./aiStudioAgentLongTextTool.generated.js");
const aiStudioAgentLongTextTool_generated_js_2 = require("./aiStudioAgentLongTextTool.generated.js");
const aiStudioAgentBasicTextTool_generated_js_1 = require("./aiStudioAgentBasicTextTool.generated.js");
const aiStudioAgentBasicTextTool_generated_js_2 = require("./aiStudioAgentBasicTextTool.generated.js");
const aiStudioAgentSpreadsheetTool_generated_js_1 = require("./aiStudioAgentSpreadsheetTool.generated.js");
const aiStudioAgentSpreadsheetTool_generated_js_2 = require("./aiStudioAgentSpreadsheetTool.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class AiStudioAgentAsk {
    constructor(fields) {
        /**
         * The type of AI agent used to handle queries. */
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
exports.AiStudioAgentAsk = AiStudioAgentAsk;
function serializeAiStudioAgentAskTypeField(val) {
    return val;
}
function deserializeAiStudioAgentAskTypeField(val) {
    if (val == 'ai_agent_ask') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AiStudioAgentAskTypeField",
    });
}
function serializeAiStudioAgentAsk(val) {
    return {
        ['type']: serializeAiStudioAgentAskTypeField(val.type),
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
            : (0, aiStudioAgentLongTextTool_generated_js_1.serializeAiStudioAgentLongTextTool)(val.longText),
        ['basic_text']: val.basicText == void 0
            ? val.basicText
            : (0, aiStudioAgentBasicTextTool_generated_js_1.serializeAiStudioAgentBasicTextTool)(val.basicText),
        ['basic_image']: val.basicImage == void 0
            ? val.basicImage
            : (0, aiStudioAgentBasicTextTool_generated_js_1.serializeAiStudioAgentBasicTextTool)(val.basicImage),
        ['spreadsheet']: val.spreadsheet == void 0
            ? val.spreadsheet
            : (0, aiStudioAgentSpreadsheetTool_generated_js_1.serializeAiStudioAgentSpreadsheetTool)(val.spreadsheet),
        ['long_text_multi']: val.longTextMulti == void 0
            ? val.longTextMulti
            : (0, aiStudioAgentLongTextTool_generated_js_1.serializeAiStudioAgentLongTextTool)(val.longTextMulti),
        ['basic_text_multi']: val.basicTextMulti == void 0
            ? val.basicTextMulti
            : (0, aiStudioAgentBasicTextTool_generated_js_1.serializeAiStudioAgentBasicTextTool)(val.basicTextMulti),
        ['basic_image_multi']: val.basicImageMulti == void 0
            ? val.basicImageMulti
            : (0, aiStudioAgentBasicTextTool_generated_js_1.serializeAiStudioAgentBasicTextTool)(val.basicImageMulti),
    };
}
function deserializeAiStudioAgentAsk(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentAsk"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "AiStudioAgentAsk" to be defined',
        });
    }
    const type = deserializeAiStudioAgentAskTypeField(val.type);
    if (val.access_state == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "access_state" of type "AiStudioAgentAsk" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.access_state)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "access_state" of type "AiStudioAgentAsk"',
        });
    }
    const accessState = val.access_state;
    if (val.description == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "description" of type "AiStudioAgentAsk" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "AiStudioAgentAsk"',
        });
    }
    const description = val.description;
    if (!(val.custom_instructions == void 0) &&
        !(0, json_js_1.sdIsString)(val.custom_instructions)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "custom_instructions" of type "AiStudioAgentAsk"',
        });
    }
    const customInstructions = val.custom_instructions == void 0 ? void 0 : val.custom_instructions;
    if (!(val.suggested_questions == void 0) &&
        !(0, json_js_2.sdIsList)(val.suggested_questions)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "suggested_questions" of type "AiStudioAgentAsk"',
        });
    }
    const suggestedQuestions = val.suggested_questions == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.suggested_questions)
            ? val.suggested_questions.map(function (itm) {
                if (!(0, json_js_1.sdIsString)(itm)) {
                    throw new errors_js_1.BoxSdkError({
                        message: 'Expecting string for "AiStudioAgentAsk"',
                    });
                }
                return itm;
            })
            : [];
    const longText = val.long_text == void 0
        ? void 0
        : (0, aiStudioAgentLongTextTool_generated_js_2.deserializeAiStudioAgentLongTextTool)(val.long_text);
    const basicText = val.basic_text == void 0
        ? void 0
        : (0, aiStudioAgentBasicTextTool_generated_js_2.deserializeAiStudioAgentBasicTextTool)(val.basic_text);
    const basicImage = val.basic_image == void 0
        ? void 0
        : (0, aiStudioAgentBasicTextTool_generated_js_2.deserializeAiStudioAgentBasicTextTool)(val.basic_image);
    const spreadsheet = val.spreadsheet == void 0
        ? void 0
        : (0, aiStudioAgentSpreadsheetTool_generated_js_2.deserializeAiStudioAgentSpreadsheetTool)(val.spreadsheet);
    const longTextMulti = val.long_text_multi == void 0
        ? void 0
        : (0, aiStudioAgentLongTextTool_generated_js_2.deserializeAiStudioAgentLongTextTool)(val.long_text_multi);
    const basicTextMulti = val.basic_text_multi == void 0
        ? void 0
        : (0, aiStudioAgentBasicTextTool_generated_js_2.deserializeAiStudioAgentBasicTextTool)(val.basic_text_multi);
    const basicImageMulti = val.basic_image_multi == void 0
        ? void 0
        : (0, aiStudioAgentBasicTextTool_generated_js_2.deserializeAiStudioAgentBasicTextTool)(val.basic_image_multi);
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
function serializeAiStudioAgentAskInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeAiStudioAgentAskTypeField(val.type),
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
            : (0, aiStudioAgentLongTextTool_generated_js_1.serializeAiStudioAgentLongTextTool)(val.longText),
        ['basic_text']: val.basicText == void 0
            ? val.basicText
            : (0, aiStudioAgentBasicTextTool_generated_js_1.serializeAiStudioAgentBasicTextTool)(val.basicText),
        ['basic_image']: val.basicImage == void 0
            ? val.basicImage
            : (0, aiStudioAgentBasicTextTool_generated_js_1.serializeAiStudioAgentBasicTextTool)(val.basicImage),
        ['spreadsheet']: val.spreadsheet == void 0
            ? val.spreadsheet
            : (0, aiStudioAgentSpreadsheetTool_generated_js_1.serializeAiStudioAgentSpreadsheetTool)(val.spreadsheet),
        ['long_text_multi']: val.longTextMulti == void 0
            ? val.longTextMulti
            : (0, aiStudioAgentLongTextTool_generated_js_1.serializeAiStudioAgentLongTextTool)(val.longTextMulti),
        ['basic_text_multi']: val.basicTextMulti == void 0
            ? val.basicTextMulti
            : (0, aiStudioAgentBasicTextTool_generated_js_1.serializeAiStudioAgentBasicTextTool)(val.basicTextMulti),
        ['basic_image_multi']: val.basicImageMulti == void 0
            ? val.basicImageMulti
            : (0, aiStudioAgentBasicTextTool_generated_js_1.serializeAiStudioAgentBasicTextTool)(val.basicImageMulti),
    };
}
function deserializeAiStudioAgentAskInput(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentAskInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeAiStudioAgentAskTypeField(val.type);
    if (val.access_state == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "access_state" of type "AiStudioAgentAskInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.access_state)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "access_state" of type "AiStudioAgentAskInput"',
        });
    }
    const accessState = val.access_state;
    if (val.description == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "description" of type "AiStudioAgentAskInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "AiStudioAgentAskInput"',
        });
    }
    const description = val.description;
    if (!(val.custom_instructions == void 0) &&
        !(0, json_js_1.sdIsString)(val.custom_instructions)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "custom_instructions" of type "AiStudioAgentAskInput"',
        });
    }
    const customInstructions = val.custom_instructions == void 0 ? void 0 : val.custom_instructions;
    if (!(val.suggested_questions == void 0) &&
        !(0, json_js_2.sdIsList)(val.suggested_questions)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "suggested_questions" of type "AiStudioAgentAskInput"',
        });
    }
    const suggestedQuestions = val.suggested_questions == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.suggested_questions)
            ? val.suggested_questions.map(function (itm) {
                if (!(0, json_js_1.sdIsString)(itm)) {
                    throw new errors_js_1.BoxSdkError({
                        message: 'Expecting string for "AiStudioAgentAskInput"',
                    });
                }
                return itm;
            })
            : [];
    const longText = val.long_text == void 0
        ? void 0
        : (0, aiStudioAgentLongTextTool_generated_js_2.deserializeAiStudioAgentLongTextTool)(val.long_text);
    const basicText = val.basic_text == void 0
        ? void 0
        : (0, aiStudioAgentBasicTextTool_generated_js_2.deserializeAiStudioAgentBasicTextTool)(val.basic_text);
    const basicImage = val.basic_image == void 0
        ? void 0
        : (0, aiStudioAgentBasicTextTool_generated_js_2.deserializeAiStudioAgentBasicTextTool)(val.basic_image);
    const spreadsheet = val.spreadsheet == void 0
        ? void 0
        : (0, aiStudioAgentSpreadsheetTool_generated_js_2.deserializeAiStudioAgentSpreadsheetTool)(val.spreadsheet);
    const longTextMulti = val.long_text_multi == void 0
        ? void 0
        : (0, aiStudioAgentLongTextTool_generated_js_2.deserializeAiStudioAgentLongTextTool)(val.long_text_multi);
    const basicTextMulti = val.basic_text_multi == void 0
        ? void 0
        : (0, aiStudioAgentBasicTextTool_generated_js_2.deserializeAiStudioAgentBasicTextTool)(val.basic_text_multi);
    const basicImageMulti = val.basic_image_multi == void 0
        ? void 0
        : (0, aiStudioAgentBasicTextTool_generated_js_2.deserializeAiStudioAgentBasicTextTool)(val.basic_image_multi);
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
//# sourceMappingURL=aiStudioAgentAsk.generated.js.map