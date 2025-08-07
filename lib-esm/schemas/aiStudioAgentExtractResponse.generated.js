import { serializeAiStudioAgentLongTextToolResponse } from './aiStudioAgentLongTextToolResponse.generated.js';
import { deserializeAiStudioAgentLongTextToolResponse } from './aiStudioAgentLongTextToolResponse.generated.js';
import { serializeAiStudioAgentBasicTextToolResponse } from './aiStudioAgentBasicTextToolResponse.generated.js';
import { deserializeAiStudioAgentBasicTextToolResponse } from './aiStudioAgentBasicTextToolResponse.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class AiStudioAgentExtractResponse {
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
export function serializeAiStudioAgentExtractResponseTypeField(val) {
    return val;
}
export function deserializeAiStudioAgentExtractResponseTypeField(val) {
    if (val == 'ai_agent_extract') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize AiStudioAgentExtractResponseTypeField",
    });
}
export function serializeAiStudioAgentExtractResponse(val) {
    return {
        ['type']: serializeAiStudioAgentExtractResponseTypeField(val.type),
        ['access_state']: val.accessState,
        ['description']: val.description,
        ['custom_instructions']: val.customInstructions,
        ['long_text']: val.longText == void 0
            ? val.longText
            : serializeAiStudioAgentLongTextToolResponse(val.longText),
        ['basic_text']: val.basicText == void 0
            ? val.basicText
            : serializeAiStudioAgentBasicTextToolResponse(val.basicText),
        ['basic_image']: val.basicImage == void 0
            ? val.basicImage
            : serializeAiStudioAgentBasicTextToolResponse(val.basicImage),
    };
}
export function deserializeAiStudioAgentExtractResponse(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentExtractResponse"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "AiStudioAgentExtractResponse" to be defined',
        });
    }
    const type = deserializeAiStudioAgentExtractResponseTypeField(val.type);
    if (val.access_state == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "access_state" of type "AiStudioAgentExtractResponse" to be defined',
        });
    }
    if (!sdIsString(val.access_state)) {
        throw new BoxSdkError({
            message: 'Expecting string for "access_state" of type "AiStudioAgentExtractResponse"',
        });
    }
    const accessState = val.access_state;
    if (val.description == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "description" of type "AiStudioAgentExtractResponse" to be defined',
        });
    }
    if (!sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "AiStudioAgentExtractResponse"',
        });
    }
    const description = val.description;
    if (!(val.custom_instructions == void 0) &&
        !sdIsString(val.custom_instructions)) {
        throw new BoxSdkError({
            message: 'Expecting string for "custom_instructions" of type "AiStudioAgentExtractResponse"',
        });
    }
    const customInstructions = val.custom_instructions == void 0 ? void 0 : val.custom_instructions;
    const longText = val.long_text == void 0
        ? void 0
        : deserializeAiStudioAgentLongTextToolResponse(val.long_text);
    const basicText = val.basic_text == void 0
        ? void 0
        : deserializeAiStudioAgentBasicTextToolResponse(val.basic_text);
    const basicImage = val.basic_image == void 0
        ? void 0
        : deserializeAiStudioAgentBasicTextToolResponse(val.basic_image);
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
export function serializeAiStudioAgentExtractResponseInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeAiStudioAgentExtractResponseTypeField(val.type),
        ['access_state']: val.accessState,
        ['description']: val.description,
        ['custom_instructions']: val.customInstructions,
        ['long_text']: val.longText == void 0
            ? val.longText
            : serializeAiStudioAgentLongTextToolResponse(val.longText),
        ['basic_text']: val.basicText == void 0
            ? val.basicText
            : serializeAiStudioAgentBasicTextToolResponse(val.basicText),
        ['basic_image']: val.basicImage == void 0
            ? val.basicImage
            : serializeAiStudioAgentBasicTextToolResponse(val.basicImage),
    };
}
export function deserializeAiStudioAgentExtractResponseInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentExtractResponseInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeAiStudioAgentExtractResponseTypeField(val.type);
    if (val.access_state == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "access_state" of type "AiStudioAgentExtractResponseInput" to be defined',
        });
    }
    if (!sdIsString(val.access_state)) {
        throw new BoxSdkError({
            message: 'Expecting string for "access_state" of type "AiStudioAgentExtractResponseInput"',
        });
    }
    const accessState = val.access_state;
    if (val.description == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "description" of type "AiStudioAgentExtractResponseInput" to be defined',
        });
    }
    if (!sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "AiStudioAgentExtractResponseInput"',
        });
    }
    const description = val.description;
    if (!(val.custom_instructions == void 0) &&
        !sdIsString(val.custom_instructions)) {
        throw new BoxSdkError({
            message: 'Expecting string for "custom_instructions" of type "AiStudioAgentExtractResponseInput"',
        });
    }
    const customInstructions = val.custom_instructions == void 0 ? void 0 : val.custom_instructions;
    const longText = val.long_text == void 0
        ? void 0
        : deserializeAiStudioAgentLongTextToolResponse(val.long_text);
    const basicText = val.basic_text == void 0
        ? void 0
        : deserializeAiStudioAgentBasicTextToolResponse(val.basic_text);
    const basicImage = val.basic_image == void 0
        ? void 0
        : deserializeAiStudioAgentBasicTextToolResponse(val.basic_image);
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