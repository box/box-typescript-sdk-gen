import { serializeAiStudioAgentBasicGenToolResponse } from './aiStudioAgentBasicGenToolResponse.generated.js';
import { deserializeAiStudioAgentBasicGenToolResponse } from './aiStudioAgentBasicGenToolResponse.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class AiStudioAgentTextGenResponse {
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
export function serializeAiStudioAgentTextGenResponseTypeField(val) {
    return val;
}
export function deserializeAiStudioAgentTextGenResponseTypeField(val) {
    if (val == 'ai_agent_text_gen') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize AiStudioAgentTextGenResponseTypeField",
    });
}
export function serializeAiStudioAgentTextGenResponse(val) {
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
            : serializeAiStudioAgentBasicGenToolResponse(val.basicGen),
    };
}
export function deserializeAiStudioAgentTextGenResponse(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentTextGenResponse"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "AiStudioAgentTextGenResponse" to be defined',
        });
    }
    const type = deserializeAiStudioAgentTextGenResponseTypeField(val.type);
    if (val.access_state == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "access_state" of type "AiStudioAgentTextGenResponse" to be defined',
        });
    }
    if (!sdIsString(val.access_state)) {
        throw new BoxSdkError({
            message: 'Expecting string for "access_state" of type "AiStudioAgentTextGenResponse"',
        });
    }
    const accessState = val.access_state;
    if (val.description == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "description" of type "AiStudioAgentTextGenResponse" to be defined',
        });
    }
    if (!sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "AiStudioAgentTextGenResponse"',
        });
    }
    const description = val.description;
    if (!(val.custom_instructions == void 0) &&
        !sdIsString(val.custom_instructions)) {
        throw new BoxSdkError({
            message: 'Expecting string for "custom_instructions" of type "AiStudioAgentTextGenResponse"',
        });
    }
    const customInstructions = val.custom_instructions == void 0 ? void 0 : val.custom_instructions;
    if (!(val.suggested_questions == void 0) &&
        !sdIsList(val.suggested_questions)) {
        throw new BoxSdkError({
            message: 'Expecting array for "suggested_questions" of type "AiStudioAgentTextGenResponse"',
        });
    }
    const suggestedQuestions = val.suggested_questions == void 0
        ? void 0
        : sdIsList(val.suggested_questions)
            ? val.suggested_questions.map(function (itm) {
                if (!sdIsString(itm)) {
                    throw new BoxSdkError({
                        message: 'Expecting string for "AiStudioAgentTextGenResponse"',
                    });
                }
                return itm;
            })
            : [];
    const basicGen = val.basic_gen == void 0
        ? void 0
        : deserializeAiStudioAgentBasicGenToolResponse(val.basic_gen);
    return {
        type: type,
        accessState: accessState,
        description: description,
        customInstructions: customInstructions,
        suggestedQuestions: suggestedQuestions,
        basicGen: basicGen,
    };
}
export function serializeAiStudioAgentTextGenResponseInput(val) {
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
            : serializeAiStudioAgentBasicGenToolResponse(val.basicGen),
    };
}
export function deserializeAiStudioAgentTextGenResponseInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentTextGenResponseInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeAiStudioAgentTextGenResponseTypeField(val.type);
    if (val.access_state == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "access_state" of type "AiStudioAgentTextGenResponseInput" to be defined',
        });
    }
    if (!sdIsString(val.access_state)) {
        throw new BoxSdkError({
            message: 'Expecting string for "access_state" of type "AiStudioAgentTextGenResponseInput"',
        });
    }
    const accessState = val.access_state;
    if (val.description == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "description" of type "AiStudioAgentTextGenResponseInput" to be defined',
        });
    }
    if (!sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "AiStudioAgentTextGenResponseInput"',
        });
    }
    const description = val.description;
    if (!(val.custom_instructions == void 0) &&
        !sdIsString(val.custom_instructions)) {
        throw new BoxSdkError({
            message: 'Expecting string for "custom_instructions" of type "AiStudioAgentTextGenResponseInput"',
        });
    }
    const customInstructions = val.custom_instructions == void 0 ? void 0 : val.custom_instructions;
    if (!(val.suggested_questions == void 0) &&
        !sdIsList(val.suggested_questions)) {
        throw new BoxSdkError({
            message: 'Expecting array for "suggested_questions" of type "AiStudioAgentTextGenResponseInput"',
        });
    }
    const suggestedQuestions = val.suggested_questions == void 0
        ? void 0
        : sdIsList(val.suggested_questions)
            ? val.suggested_questions.map(function (itm) {
                if (!sdIsString(itm)) {
                    throw new BoxSdkError({
                        message: 'Expecting string for "AiStudioAgentTextGenResponseInput"',
                    });
                }
                return itm;
            })
            : [];
    const basicGen = val.basic_gen == void 0
        ? void 0
        : deserializeAiStudioAgentBasicGenToolResponse(val.basic_gen);
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