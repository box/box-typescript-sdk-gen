import { serializeAiAgentBasicGenTool } from './aiAgentBasicGenTool.generated.js';
import { deserializeAiAgentBasicGenTool } from './aiAgentBasicGenTool.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsMap } from '../serialization/json.js';
export class AiAgentTextGen {
    constructor(fields) {
        /**
         * The type of AI agent used for generating text. */
        this.type = 'ai_agent_text_gen';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.basicGen !== undefined) {
            this.basicGen = fields.basicGen;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeAiAgentTextGenTypeField(val) {
    return val;
}
export function deserializeAiAgentTextGenTypeField(val) {
    if (val == 'ai_agent_text_gen') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize AiAgentTextGenTypeField",
    });
}
export function serializeAiAgentTextGen(val) {
    return {
        ['type']: serializeAiAgentTextGenTypeField(val.type),
        ['basic_gen']: val.basicGen == void 0
            ? val.basicGen
            : serializeAiAgentBasicGenTool(val.basicGen),
    };
}
export function deserializeAiAgentTextGen(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "AiAgentTextGen"' });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "AiAgentTextGen" to be defined',
        });
    }
    const type = deserializeAiAgentTextGenTypeField(val.type);
    const basicGen = val.basic_gen == void 0
        ? void 0
        : deserializeAiAgentBasicGenTool(val.basic_gen);
    return { type: type, basicGen: basicGen };
}
export function serializeAiAgentTextGenInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeAiAgentTextGenTypeField(val.type),
        ['basic_gen']: val.basicGen == void 0
            ? val.basicGen
            : serializeAiAgentBasicGenTool(val.basicGen),
    };
}
export function deserializeAiAgentTextGenInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiAgentTextGenInput"',
        });
    }
    const type = val.type == void 0 ? void 0 : deserializeAiAgentTextGenTypeField(val.type);
    const basicGen = val.basic_gen == void 0
        ? void 0
        : deserializeAiAgentBasicGenTool(val.basic_gen);
    return { type: type, basicGen: basicGen };
}
//# sourceMappingURL=aiAgentTextGen.generated.js.map