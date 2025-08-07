"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiStudioAgentTextGenResponse = void 0;
exports.serializeAiStudioAgentTextGenResponseTypeField = serializeAiStudioAgentTextGenResponseTypeField;
exports.deserializeAiStudioAgentTextGenResponseTypeField = deserializeAiStudioAgentTextGenResponseTypeField;
exports.serializeAiStudioAgentTextGenResponse = serializeAiStudioAgentTextGenResponse;
exports.deserializeAiStudioAgentTextGenResponse = deserializeAiStudioAgentTextGenResponse;
exports.serializeAiStudioAgentTextGenResponseInput = serializeAiStudioAgentTextGenResponseInput;
exports.deserializeAiStudioAgentTextGenResponseInput = deserializeAiStudioAgentTextGenResponseInput;
const aiStudioAgentBasicGenToolResponse_generated_js_1 = require("./aiStudioAgentBasicGenToolResponse.generated.js");
const aiStudioAgentBasicGenToolResponse_generated_js_2 = require("./aiStudioAgentBasicGenToolResponse.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class AiStudioAgentTextGenResponse {
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
exports.AiStudioAgentTextGenResponse = AiStudioAgentTextGenResponse;
function serializeAiStudioAgentTextGenResponseTypeField(val) {
    return val;
}
function deserializeAiStudioAgentTextGenResponseTypeField(val) {
    if (val == 'ai_agent_text_gen') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AiStudioAgentTextGenResponseTypeField",
    });
}
function serializeAiStudioAgentTextGenResponse(val) {
    return {
        ['type']: serializeAiStudioAgentTextGenResponseTypeField(val.type),
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
            : (0, aiStudioAgentBasicGenToolResponse_generated_js_1.serializeAiStudioAgentBasicGenToolResponse)(val.basicGen),
    };
}
function deserializeAiStudioAgentTextGenResponse(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentTextGenResponse"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "AiStudioAgentTextGenResponse" to be defined',
        });
    }
    const type = deserializeAiStudioAgentTextGenResponseTypeField(val.type);
    if (val.access_state == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "access_state" of type "AiStudioAgentTextGenResponse" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.access_state)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "access_state" of type "AiStudioAgentTextGenResponse"',
        });
    }
    const accessState = val.access_state;
    if (val.description == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "description" of type "AiStudioAgentTextGenResponse" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "AiStudioAgentTextGenResponse"',
        });
    }
    const description = val.description;
    if (!(val.custom_instructions == void 0) &&
        !(0, json_js_1.sdIsString)(val.custom_instructions)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "custom_instructions" of type "AiStudioAgentTextGenResponse"',
        });
    }
    const customInstructions = val.custom_instructions == void 0 ? void 0 : val.custom_instructions;
    if (!(val.suggested_questions == void 0) &&
        !(0, json_js_2.sdIsList)(val.suggested_questions)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "suggested_questions" of type "AiStudioAgentTextGenResponse"',
        });
    }
    const suggestedQuestions = val.suggested_questions == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.suggested_questions)
            ? val.suggested_questions.map(function (itm) {
                if (!(0, json_js_1.sdIsString)(itm)) {
                    throw new errors_js_1.BoxSdkError({
                        message: 'Expecting string for "AiStudioAgentTextGenResponse"',
                    });
                }
                return itm;
            })
            : [];
    const basicGen = val.basic_gen == void 0
        ? void 0
        : (0, aiStudioAgentBasicGenToolResponse_generated_js_2.deserializeAiStudioAgentBasicGenToolResponse)(val.basic_gen);
    return {
        type: type,
        accessState: accessState,
        description: description,
        customInstructions: customInstructions,
        suggestedQuestions: suggestedQuestions,
        basicGen: basicGen,
    };
}
function serializeAiStudioAgentTextGenResponseInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeAiStudioAgentTextGenResponseTypeField(val.type),
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
            : (0, aiStudioAgentBasicGenToolResponse_generated_js_1.serializeAiStudioAgentBasicGenToolResponse)(val.basicGen),
    };
}
function deserializeAiStudioAgentTextGenResponseInput(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentTextGenResponseInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeAiStudioAgentTextGenResponseTypeField(val.type);
    if (val.access_state == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "access_state" of type "AiStudioAgentTextGenResponseInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.access_state)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "access_state" of type "AiStudioAgentTextGenResponseInput"',
        });
    }
    const accessState = val.access_state;
    if (val.description == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "description" of type "AiStudioAgentTextGenResponseInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "AiStudioAgentTextGenResponseInput"',
        });
    }
    const description = val.description;
    if (!(val.custom_instructions == void 0) &&
        !(0, json_js_1.sdIsString)(val.custom_instructions)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "custom_instructions" of type "AiStudioAgentTextGenResponseInput"',
        });
    }
    const customInstructions = val.custom_instructions == void 0 ? void 0 : val.custom_instructions;
    if (!(val.suggested_questions == void 0) &&
        !(0, json_js_2.sdIsList)(val.suggested_questions)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "suggested_questions" of type "AiStudioAgentTextGenResponseInput"',
        });
    }
    const suggestedQuestions = val.suggested_questions == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.suggested_questions)
            ? val.suggested_questions.map(function (itm) {
                if (!(0, json_js_1.sdIsString)(itm)) {
                    throw new errors_js_1.BoxSdkError({
                        message: 'Expecting string for "AiStudioAgentTextGenResponseInput"',
                    });
                }
                return itm;
            })
            : [];
    const basicGen = val.basic_gen == void 0
        ? void 0
        : (0, aiStudioAgentBasicGenToolResponse_generated_js_2.deserializeAiStudioAgentBasicGenToolResponse)(val.basic_gen);
    return {
        type: type,
        accessState: accessState,
        description: description,
        customInstructions: customInstructions,
        suggestedQuestions: suggestedQuestions,
        basicGen: basicGen,
    };
}
//# sourceMappingURL=aiStudioAgentTextGenResponse.generated.js.map