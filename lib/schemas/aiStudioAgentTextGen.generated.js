"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiStudioAgentTextGen = void 0;
exports.serializeAiStudioAgentTextGenTypeField = serializeAiStudioAgentTextGenTypeField;
exports.deserializeAiStudioAgentTextGenTypeField = deserializeAiStudioAgentTextGenTypeField;
exports.serializeAiStudioAgentTextGen = serializeAiStudioAgentTextGen;
exports.deserializeAiStudioAgentTextGen = deserializeAiStudioAgentTextGen;
exports.serializeAiStudioAgentTextGenInput = serializeAiStudioAgentTextGenInput;
exports.deserializeAiStudioAgentTextGenInput = deserializeAiStudioAgentTextGenInput;
const aiStudioAgentBasicGenTool_generated_js_1 = require("./aiStudioAgentBasicGenTool.generated.js");
const aiStudioAgentBasicGenTool_generated_js_2 = require("./aiStudioAgentBasicGenTool.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class AiStudioAgentTextGen {
    constructor(fields) {
        /**
         * The type of AI agent used for generating text. */
        this.type = 'ai_agent_text_gen';
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
        if (fields.basicGen !== undefined) {
            this.basicGen = fields.basicGen;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.AiStudioAgentTextGen = AiStudioAgentTextGen;
function serializeAiStudioAgentTextGenTypeField(val) {
    return val;
}
function deserializeAiStudioAgentTextGenTypeField(val) {
    if (val == 'ai_agent_text_gen') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AiStudioAgentTextGenTypeField",
    });
}
function serializeAiStudioAgentTextGen(val) {
    return {
        ['type']: serializeAiStudioAgentTextGenTypeField(val.type),
        ['access_state']: val.accessState,
        ['description']: val.description,
        ['custom_instructions']: val.customInstructions,
        ['suggested_questions']: val.suggestedQuestions == void 0
            ? val.suggestedQuestions
            : val.suggestedQuestions.map(function (item) {
                return item;
            }),
        ['basic_gen']: val.basicGen == void 0
            ? val.basicGen
            : (0, aiStudioAgentBasicGenTool_generated_js_1.serializeAiStudioAgentBasicGenTool)(val.basicGen),
    };
}
function deserializeAiStudioAgentTextGen(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentTextGen"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "AiStudioAgentTextGen" to be defined',
        });
    }
    const type = deserializeAiStudioAgentTextGenTypeField(val.type);
    if (val.access_state == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "access_state" of type "AiStudioAgentTextGen" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.access_state)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "access_state" of type "AiStudioAgentTextGen"',
        });
    }
    const accessState = val.access_state;
    if (val.description == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "description" of type "AiStudioAgentTextGen" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "AiStudioAgentTextGen"',
        });
    }
    const description = val.description;
    if (!(val.custom_instructions == void 0) &&
        !(0, json_js_1.sdIsString)(val.custom_instructions)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "custom_instructions" of type "AiStudioAgentTextGen"',
        });
    }
    const customInstructions = val.custom_instructions == void 0 ? void 0 : val.custom_instructions;
    if (!(val.suggested_questions == void 0) &&
        !(0, json_js_2.sdIsList)(val.suggested_questions)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "suggested_questions" of type "AiStudioAgentTextGen"',
        });
    }
    const suggestedQuestions = val.suggested_questions == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.suggested_questions)
            ? val.suggested_questions.map(function (itm) {
                if (!(0, json_js_1.sdIsString)(itm)) {
                    throw new errors_js_1.BoxSdkError({
                        message: 'Expecting string for "AiStudioAgentTextGen"',
                    });
                }
                return itm;
            })
            : [];
    const basicGen = val.basic_gen == void 0
        ? void 0
        : (0, aiStudioAgentBasicGenTool_generated_js_2.deserializeAiStudioAgentBasicGenTool)(val.basic_gen);
    return {
        type: type,
        accessState: accessState,
        description: description,
        customInstructions: customInstructions,
        suggestedQuestions: suggestedQuestions,
        basicGen: basicGen,
    };
}
function serializeAiStudioAgentTextGenInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeAiStudioAgentTextGenTypeField(val.type),
        ['access_state']: val.accessState,
        ['description']: val.description,
        ['custom_instructions']: val.customInstructions,
        ['suggested_questions']: val.suggestedQuestions == void 0
            ? val.suggestedQuestions
            : val.suggestedQuestions.map(function (item) {
                return item;
            }),
        ['basic_gen']: val.basicGen == void 0
            ? val.basicGen
            : (0, aiStudioAgentBasicGenTool_generated_js_1.serializeAiStudioAgentBasicGenTool)(val.basicGen),
    };
}
function deserializeAiStudioAgentTextGenInput(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentTextGenInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeAiStudioAgentTextGenTypeField(val.type);
    if (val.access_state == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "access_state" of type "AiStudioAgentTextGenInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.access_state)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "access_state" of type "AiStudioAgentTextGenInput"',
        });
    }
    const accessState = val.access_state;
    if (val.description == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "description" of type "AiStudioAgentTextGenInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "AiStudioAgentTextGenInput"',
        });
    }
    const description = val.description;
    if (!(val.custom_instructions == void 0) &&
        !(0, json_js_1.sdIsString)(val.custom_instructions)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "custom_instructions" of type "AiStudioAgentTextGenInput"',
        });
    }
    const customInstructions = val.custom_instructions == void 0 ? void 0 : val.custom_instructions;
    if (!(val.suggested_questions == void 0) &&
        !(0, json_js_2.sdIsList)(val.suggested_questions)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "suggested_questions" of type "AiStudioAgentTextGenInput"',
        });
    }
    const suggestedQuestions = val.suggested_questions == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.suggested_questions)
            ? val.suggested_questions.map(function (itm) {
                if (!(0, json_js_1.sdIsString)(itm)) {
                    throw new errors_js_1.BoxSdkError({
                        message: 'Expecting string for "AiStudioAgentTextGenInput"',
                    });
                }
                return itm;
            })
            : [];
    const basicGen = val.basic_gen == void 0
        ? void 0
        : (0, aiStudioAgentBasicGenTool_generated_js_2.deserializeAiStudioAgentBasicGenTool)(val.basic_gen);
    return {
        type: type,
        accessState: accessState,
        description: description,
        customInstructions: customInstructions,
        suggestedQuestions: suggestedQuestions,
        basicGen: basicGen,
    };
}
//# sourceMappingURL=aiStudioAgentTextGen.generated.js.map