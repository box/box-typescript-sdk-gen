import { serializeAiAgentLongTextTool } from './aiAgentLongTextTool.generated.js';
import { deserializeAiAgentLongTextTool } from './aiAgentLongTextTool.generated.js';
import { serializeAiAgentBasicTextTool } from './aiAgentBasicTextTool.generated.js';
import { deserializeAiAgentBasicTextTool } from './aiAgentBasicTextTool.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsMap } from '../serialization/json.js';
export class AiAgentExtract {
    constructor(fields) {
        /**
         * The type of AI agent to be used for extraction. */
        this.type = 'ai_agent_extract';
        if (fields.type !== undefined) {
            this.type = fields.type;
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
export function serializeAiAgentExtractTypeField(val) {
    return val;
}
export function deserializeAiAgentExtractTypeField(val) {
    if (val == 'ai_agent_extract') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize AiAgentExtractTypeField",
    });
}
export function serializeAiAgentExtract(val) {
    return {
        ['type']: serializeAiAgentExtractTypeField(val.type),
        ['long_text']: val.longText == void 0
            ? val.longText
            : serializeAiAgentLongTextTool(val.longText),
        ['basic_text']: val.basicText == void 0
            ? val.basicText
            : serializeAiAgentBasicTextTool(val.basicText),
        ['basic_image']: val.basicImage == void 0
            ? val.basicImage
            : serializeAiAgentBasicTextTool(val.basicImage),
    };
}
export function deserializeAiAgentExtract(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "AiAgentExtract"' });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "AiAgentExtract" to be defined',
        });
    }
    const type = deserializeAiAgentExtractTypeField(val.type);
    const longText = val.long_text == void 0
        ? void 0
        : deserializeAiAgentLongTextTool(val.long_text);
    const basicText = val.basic_text == void 0
        ? void 0
        : deserializeAiAgentBasicTextTool(val.basic_text);
    const basicImage = val.basic_image == void 0
        ? void 0
        : deserializeAiAgentBasicTextTool(val.basic_image);
    return {
        type: type,
        longText: longText,
        basicText: basicText,
        basicImage: basicImage,
    };
}
export function serializeAiAgentExtractInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeAiAgentExtractTypeField(val.type),
        ['long_text']: val.longText == void 0
            ? val.longText
            : serializeAiAgentLongTextTool(val.longText),
        ['basic_text']: val.basicText == void 0
            ? val.basicText
            : serializeAiAgentBasicTextTool(val.basicText),
        ['basic_image']: val.basicImage == void 0
            ? val.basicImage
            : serializeAiAgentBasicTextTool(val.basicImage),
    };
}
export function deserializeAiAgentExtractInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiAgentExtractInput"',
        });
    }
    const type = val.type == void 0 ? void 0 : deserializeAiAgentExtractTypeField(val.type);
    const longText = val.long_text == void 0
        ? void 0
        : deserializeAiAgentLongTextTool(val.long_text);
    const basicText = val.basic_text == void 0
        ? void 0
        : deserializeAiAgentBasicTextTool(val.basic_text);
    const basicImage = val.basic_image == void 0
        ? void 0
        : deserializeAiAgentBasicTextTool(val.basic_image);
    return {
        type: type,
        longText: longText,
        basicText: basicText,
        basicImage: basicImage,
    };
}
//# sourceMappingURL=aiAgentExtract.generated.js.map