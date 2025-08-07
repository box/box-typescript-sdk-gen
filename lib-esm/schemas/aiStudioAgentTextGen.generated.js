import { serializeAiStudioAgentBasicGenTool } from './aiStudioAgentBasicGenTool.generated.js';
import { deserializeAiStudioAgentBasicGenTool } from './aiStudioAgentBasicGenTool.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class AiStudioAgentTextGen {
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
export function serializeAiStudioAgentTextGenTypeField(val) {
    return val;
}
export function deserializeAiStudioAgentTextGenTypeField(val) {
    if (val == 'ai_agent_text_gen') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize AiStudioAgentTextGenTypeField",
    });
}
export function serializeAiStudioAgentTextGen(val) {
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
            : serializeAiStudioAgentBasicGenTool(val.basicGen),
    };
}
export function deserializeAiStudioAgentTextGen(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentTextGen"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "AiStudioAgentTextGen" to be defined',
        });
    }
    const type = deserializeAiStudioAgentTextGenTypeField(val.type);
    if (val.access_state == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "access_state" of type "AiStudioAgentTextGen" to be defined',
        });
    }
    if (!sdIsString(val.access_state)) {
        throw new BoxSdkError({
            message: 'Expecting string for "access_state" of type "AiStudioAgentTextGen"',
        });
    }
    const accessState = val.access_state;
    if (val.description == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "description" of type "AiStudioAgentTextGen" to be defined',
        });
    }
    if (!sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "AiStudioAgentTextGen"',
        });
    }
    const description = val.description;
    if (!(val.custom_instructions == void 0) &&
        !sdIsString(val.custom_instructions)) {
        throw new BoxSdkError({
            message: 'Expecting string for "custom_instructions" of type "AiStudioAgentTextGen"',
        });
    }
    const customInstructions = val.custom_instructions == void 0 ? void 0 : val.custom_instructions;
    if (!(val.suggested_questions == void 0) &&
        !sdIsList(val.suggested_questions)) {
        throw new BoxSdkError({
            message: 'Expecting array for "suggested_questions" of type "AiStudioAgentTextGen"',
        });
    }
    const suggestedQuestions = val.suggested_questions == void 0
        ? void 0
        : sdIsList(val.suggested_questions)
            ? val.suggested_questions.map(function (itm) {
                if (!sdIsString(itm)) {
                    throw new BoxSdkError({
                        message: 'Expecting string for "AiStudioAgentTextGen"',
                    });
                }
                return itm;
            })
            : [];
    const basicGen = val.basic_gen == void 0
        ? void 0
        : deserializeAiStudioAgentBasicGenTool(val.basic_gen);
    return {
        type: type,
        accessState: accessState,
        description: description,
        customInstructions: customInstructions,
        suggestedQuestions: suggestedQuestions,
        basicGen: basicGen,
    };
}
export function serializeAiStudioAgentTextGenInput(val) {
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
            : serializeAiStudioAgentBasicGenTool(val.basicGen),
    };
}
export function deserializeAiStudioAgentTextGenInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentTextGenInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeAiStudioAgentTextGenTypeField(val.type);
    if (val.access_state == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "access_state" of type "AiStudioAgentTextGenInput" to be defined',
        });
    }
    if (!sdIsString(val.access_state)) {
        throw new BoxSdkError({
            message: 'Expecting string for "access_state" of type "AiStudioAgentTextGenInput"',
        });
    }
    const accessState = val.access_state;
    if (val.description == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "description" of type "AiStudioAgentTextGenInput" to be defined',
        });
    }
    if (!sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "AiStudioAgentTextGenInput"',
        });
    }
    const description = val.description;
    if (!(val.custom_instructions == void 0) &&
        !sdIsString(val.custom_instructions)) {
        throw new BoxSdkError({
            message: 'Expecting string for "custom_instructions" of type "AiStudioAgentTextGenInput"',
        });
    }
    const customInstructions = val.custom_instructions == void 0 ? void 0 : val.custom_instructions;
    if (!(val.suggested_questions == void 0) &&
        !sdIsList(val.suggested_questions)) {
        throw new BoxSdkError({
            message: 'Expecting array for "suggested_questions" of type "AiStudioAgentTextGenInput"',
        });
    }
    const suggestedQuestions = val.suggested_questions == void 0
        ? void 0
        : sdIsList(val.suggested_questions)
            ? val.suggested_questions.map(function (itm) {
                if (!sdIsString(itm)) {
                    throw new BoxSdkError({
                        message: 'Expecting string for "AiStudioAgentTextGenInput"',
                    });
                }
                return itm;
            })
            : [];
    const basicGen = val.basic_gen == void 0
        ? void 0
        : deserializeAiStudioAgentBasicGenTool(val.basic_gen);
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