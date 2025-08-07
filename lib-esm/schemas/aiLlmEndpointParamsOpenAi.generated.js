import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class AiLlmEndpointParamsOpenAi {
    constructor(fields) {
        /**
         * The type of the AI LLM endpoint params object for OpenAI.
         * This parameter is **required**. */
        this.type = 'openai_params';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.temperature !== undefined) {
            this.temperature = fields.temperature;
        }
        if (fields.topP !== undefined) {
            this.topP = fields.topP;
        }
        if (fields.frequencyPenalty !== undefined) {
            this.frequencyPenalty = fields.frequencyPenalty;
        }
        if (fields.presencePenalty !== undefined) {
            this.presencePenalty = fields.presencePenalty;
        }
        if (fields.stop !== undefined) {
            this.stop = fields.stop;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeAiLlmEndpointParamsOpenAiTypeField(val) {
    return val;
}
export function deserializeAiLlmEndpointParamsOpenAiTypeField(val) {
    if (val == 'openai_params') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize AiLlmEndpointParamsOpenAiTypeField",
    });
}
export function serializeAiLlmEndpointParamsOpenAi(val) {
    return {
        ['type']: serializeAiLlmEndpointParamsOpenAiTypeField(val.type),
        ['temperature']: val.temperature,
        ['top_p']: val.topP,
        ['frequency_penalty']: val.frequencyPenalty,
        ['presence_penalty']: val.presencePenalty,
        ['stop']: val.stop,
    };
}
export function deserializeAiLlmEndpointParamsOpenAi(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiLlmEndpointParamsOpenAi"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "AiLlmEndpointParamsOpenAi" to be defined',
        });
    }
    const type = deserializeAiLlmEndpointParamsOpenAiTypeField(val.type);
    if (!(val.temperature == void 0) && !sdIsNumber(val.temperature)) {
        throw new BoxSdkError({
            message: 'Expecting number for "temperature" of type "AiLlmEndpointParamsOpenAi"',
        });
    }
    const temperature = val.temperature == void 0 ? void 0 : val.temperature;
    if (!(val.top_p == void 0) && !sdIsNumber(val.top_p)) {
        throw new BoxSdkError({
            message: 'Expecting number for "top_p" of type "AiLlmEndpointParamsOpenAi"',
        });
    }
    const topP = val.top_p == void 0 ? void 0 : val.top_p;
    if (!(val.frequency_penalty == void 0) &&
        !sdIsNumber(val.frequency_penalty)) {
        throw new BoxSdkError({
            message: 'Expecting number for "frequency_penalty" of type "AiLlmEndpointParamsOpenAi"',
        });
    }
    const frequencyPenalty = val.frequency_penalty == void 0 ? void 0 : val.frequency_penalty;
    if (!(val.presence_penalty == void 0) && !sdIsNumber(val.presence_penalty)) {
        throw new BoxSdkError({
            message: 'Expecting number for "presence_penalty" of type "AiLlmEndpointParamsOpenAi"',
        });
    }
    const presencePenalty = val.presence_penalty == void 0 ? void 0 : val.presence_penalty;
    if (!(val.stop == void 0) && !sdIsString(val.stop)) {
        throw new BoxSdkError({
            message: 'Expecting string for "stop" of type "AiLlmEndpointParamsOpenAi"',
        });
    }
    const stop = val.stop == void 0 ? void 0 : val.stop;
    return {
        type: type,
        temperature: temperature,
        topP: topP,
        frequencyPenalty: frequencyPenalty,
        presencePenalty: presencePenalty,
        stop: stop,
    };
}
export function serializeAiLlmEndpointParamsOpenAiInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeAiLlmEndpointParamsOpenAiTypeField(val.type),
        ['temperature']: val.temperature,
        ['top_p']: val.topP,
        ['frequency_penalty']: val.frequencyPenalty,
        ['presence_penalty']: val.presencePenalty,
        ['stop']: val.stop,
    };
}
export function deserializeAiLlmEndpointParamsOpenAiInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiLlmEndpointParamsOpenAiInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeAiLlmEndpointParamsOpenAiTypeField(val.type);
    if (!(val.temperature == void 0) && !sdIsNumber(val.temperature)) {
        throw new BoxSdkError({
            message: 'Expecting number for "temperature" of type "AiLlmEndpointParamsOpenAiInput"',
        });
    }
    const temperature = val.temperature == void 0 ? void 0 : val.temperature;
    if (!(val.top_p == void 0) && !sdIsNumber(val.top_p)) {
        throw new BoxSdkError({
            message: 'Expecting number for "top_p" of type "AiLlmEndpointParamsOpenAiInput"',
        });
    }
    const topP = val.top_p == void 0 ? void 0 : val.top_p;
    if (!(val.frequency_penalty == void 0) &&
        !sdIsNumber(val.frequency_penalty)) {
        throw new BoxSdkError({
            message: 'Expecting number for "frequency_penalty" of type "AiLlmEndpointParamsOpenAiInput"',
        });
    }
    const frequencyPenalty = val.frequency_penalty == void 0 ? void 0 : val.frequency_penalty;
    if (!(val.presence_penalty == void 0) && !sdIsNumber(val.presence_penalty)) {
        throw new BoxSdkError({
            message: 'Expecting number for "presence_penalty" of type "AiLlmEndpointParamsOpenAiInput"',
        });
    }
    const presencePenalty = val.presence_penalty == void 0 ? void 0 : val.presence_penalty;
    if (!(val.stop == void 0) && !sdIsString(val.stop)) {
        throw new BoxSdkError({
            message: 'Expecting string for "stop" of type "AiLlmEndpointParamsOpenAiInput"',
        });
    }
    const stop = val.stop == void 0 ? void 0 : val.stop;
    return {
        type: type,
        temperature: temperature,
        topP: topP,
        frequencyPenalty: frequencyPenalty,
        presencePenalty: presencePenalty,
        stop: stop,
    };
}
//# sourceMappingURL=aiLlmEndpointParamsOpenAi.generated.js.map