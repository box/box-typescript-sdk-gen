import { serializeAiStudioAgentLongTextToolResponse } from './aiStudioAgentLongTextToolResponse.generated.js';
import { deserializeAiStudioAgentLongTextToolResponse } from './aiStudioAgentLongTextToolResponse.generated.js';
import { serializeAiStudioAgentBasicTextToolResponse } from './aiStudioAgentBasicTextToolResponse.generated.js';
import { deserializeAiStudioAgentBasicTextToolResponse } from './aiStudioAgentBasicTextToolResponse.generated.js';
import { serializeAiStudioAgentSpreadsheetToolResponse } from './aiStudioAgentSpreadsheetToolResponse.generated.js';
import { deserializeAiStudioAgentSpreadsheetToolResponse } from './aiStudioAgentSpreadsheetToolResponse.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class AiStudioAgentAskResponse {
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
export function serializeAiStudioAgentAskResponseTypeField(val) {
    return val;
}
export function deserializeAiStudioAgentAskResponseTypeField(val) {
    if (val == 'ai_agent_ask') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize AiStudioAgentAskResponseTypeField",
    });
}
export function serializeAiStudioAgentAskResponse(val) {
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
            : serializeAiStudioAgentLongTextToolResponse(val.longText),
        ['basic_text']: val.basicText == void 0
            ? val.basicText
            : serializeAiStudioAgentBasicTextToolResponse(val.basicText),
        ['basic_image']: val.basicImage == void 0
            ? val.basicImage
            : serializeAiStudioAgentBasicTextToolResponse(val.basicImage),
        ['spreadsheet']: val.spreadsheet == void 0
            ? val.spreadsheet
            : serializeAiStudioAgentSpreadsheetToolResponse(val.spreadsheet),
        ['long_text_multi']: val.longTextMulti == void 0
            ? val.longTextMulti
            : serializeAiStudioAgentLongTextToolResponse(val.longTextMulti),
        ['basic_text_multi']: val.basicTextMulti == void 0
            ? val.basicTextMulti
            : serializeAiStudioAgentBasicTextToolResponse(val.basicTextMulti),
        ['basic_image_multi']: val.basicImageMulti == void 0
            ? val.basicImageMulti
            : serializeAiStudioAgentBasicTextToolResponse(val.basicImageMulti),
    };
}
export function deserializeAiStudioAgentAskResponse(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentAskResponse"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "AiStudioAgentAskResponse" to be defined',
        });
    }
    const type = deserializeAiStudioAgentAskResponseTypeField(val.type);
    if (val.access_state == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "access_state" of type "AiStudioAgentAskResponse" to be defined',
        });
    }
    if (!sdIsString(val.access_state)) {
        throw new BoxSdkError({
            message: 'Expecting string for "access_state" of type "AiStudioAgentAskResponse"',
        });
    }
    const accessState = val.access_state;
    if (val.description == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "description" of type "AiStudioAgentAskResponse" to be defined',
        });
    }
    if (!sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "AiStudioAgentAskResponse"',
        });
    }
    const description = val.description;
    if (!(val.custom_instructions == void 0) &&
        !sdIsString(val.custom_instructions)) {
        throw new BoxSdkError({
            message: 'Expecting string for "custom_instructions" of type "AiStudioAgentAskResponse"',
        });
    }
    const customInstructions = val.custom_instructions == void 0 ? void 0 : val.custom_instructions;
    if (!(val.suggested_questions == void 0) &&
        !sdIsList(val.suggested_questions)) {
        throw new BoxSdkError({
            message: 'Expecting array for "suggested_questions" of type "AiStudioAgentAskResponse"',
        });
    }
    const suggestedQuestions = val.suggested_questions == void 0
        ? void 0
        : sdIsList(val.suggested_questions)
            ? val.suggested_questions.map(function (itm) {
                if (!sdIsString(itm)) {
                    throw new BoxSdkError({
                        message: 'Expecting string for "AiStudioAgentAskResponse"',
                    });
                }
                return itm;
            })
            : [];
    const longText = val.long_text == void 0
        ? void 0
        : deserializeAiStudioAgentLongTextToolResponse(val.long_text);
    const basicText = val.basic_text == void 0
        ? void 0
        : deserializeAiStudioAgentBasicTextToolResponse(val.basic_text);
    const basicImage = val.basic_image == void 0
        ? void 0
        : deserializeAiStudioAgentBasicTextToolResponse(val.basic_image);
    const spreadsheet = val.spreadsheet == void 0
        ? void 0
        : deserializeAiStudioAgentSpreadsheetToolResponse(val.spreadsheet);
    const longTextMulti = val.long_text_multi == void 0
        ? void 0
        : deserializeAiStudioAgentLongTextToolResponse(val.long_text_multi);
    const basicTextMulti = val.basic_text_multi == void 0
        ? void 0
        : deserializeAiStudioAgentBasicTextToolResponse(val.basic_text_multi);
    const basicImageMulti = val.basic_image_multi == void 0
        ? void 0
        : deserializeAiStudioAgentBasicTextToolResponse(val.basic_image_multi);
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
export function serializeAiStudioAgentAskResponseInput(val) {
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
            : serializeAiStudioAgentLongTextToolResponse(val.longText),
        ['basic_text']: val.basicText == void 0
            ? val.basicText
            : serializeAiStudioAgentBasicTextToolResponse(val.basicText),
        ['basic_image']: val.basicImage == void 0
            ? val.basicImage
            : serializeAiStudioAgentBasicTextToolResponse(val.basicImage),
        ['spreadsheet']: val.spreadsheet == void 0
            ? val.spreadsheet
            : serializeAiStudioAgentSpreadsheetToolResponse(val.spreadsheet),
        ['long_text_multi']: val.longTextMulti == void 0
            ? val.longTextMulti
            : serializeAiStudioAgentLongTextToolResponse(val.longTextMulti),
        ['basic_text_multi']: val.basicTextMulti == void 0
            ? val.basicTextMulti
            : serializeAiStudioAgentBasicTextToolResponse(val.basicTextMulti),
        ['basic_image_multi']: val.basicImageMulti == void 0
            ? val.basicImageMulti
            : serializeAiStudioAgentBasicTextToolResponse(val.basicImageMulti),
    };
}
export function deserializeAiStudioAgentAskResponseInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentAskResponseInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeAiStudioAgentAskResponseTypeField(val.type);
    if (val.access_state == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "access_state" of type "AiStudioAgentAskResponseInput" to be defined',
        });
    }
    if (!sdIsString(val.access_state)) {
        throw new BoxSdkError({
            message: 'Expecting string for "access_state" of type "AiStudioAgentAskResponseInput"',
        });
    }
    const accessState = val.access_state;
    if (val.description == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "description" of type "AiStudioAgentAskResponseInput" to be defined',
        });
    }
    if (!sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "AiStudioAgentAskResponseInput"',
        });
    }
    const description = val.description;
    if (!(val.custom_instructions == void 0) &&
        !sdIsString(val.custom_instructions)) {
        throw new BoxSdkError({
            message: 'Expecting string for "custom_instructions" of type "AiStudioAgentAskResponseInput"',
        });
    }
    const customInstructions = val.custom_instructions == void 0 ? void 0 : val.custom_instructions;
    if (!(val.suggested_questions == void 0) &&
        !sdIsList(val.suggested_questions)) {
        throw new BoxSdkError({
            message: 'Expecting array for "suggested_questions" of type "AiStudioAgentAskResponseInput"',
        });
    }
    const suggestedQuestions = val.suggested_questions == void 0
        ? void 0
        : sdIsList(val.suggested_questions)
            ? val.suggested_questions.map(function (itm) {
                if (!sdIsString(itm)) {
                    throw new BoxSdkError({
                        message: 'Expecting string for "AiStudioAgentAskResponseInput"',
                    });
                }
                return itm;
            })
            : [];
    const longText = val.long_text == void 0
        ? void 0
        : deserializeAiStudioAgentLongTextToolResponse(val.long_text);
    const basicText = val.basic_text == void 0
        ? void 0
        : deserializeAiStudioAgentBasicTextToolResponse(val.basic_text);
    const basicImage = val.basic_image == void 0
        ? void 0
        : deserializeAiStudioAgentBasicTextToolResponse(val.basic_image);
    const spreadsheet = val.spreadsheet == void 0
        ? void 0
        : deserializeAiStudioAgentSpreadsheetToolResponse(val.spreadsheet);
    const longTextMulti = val.long_text_multi == void 0
        ? void 0
        : deserializeAiStudioAgentLongTextToolResponse(val.long_text_multi);
    const basicTextMulti = val.basic_text_multi == void 0
        ? void 0
        : deserializeAiStudioAgentBasicTextToolResponse(val.basic_text_multi);
    const basicImageMulti = val.basic_image_multi == void 0
        ? void 0
        : deserializeAiStudioAgentBasicTextToolResponse(val.basic_image_multi);
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