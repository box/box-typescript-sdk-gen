import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class AiLlmEndpointParamsIbm {
    constructor(fields) {
        /**
         * The type of the AI LLM endpoint params object for IBM.
         * This parameter is **required**. */
        this.type = 'ibm_params';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.temperature !== undefined) {
            this.temperature = fields.temperature;
        }
        if (fields.topP !== undefined) {
            this.topP = fields.topP;
        }
        if (fields.topK !== undefined) {
            this.topK = fields.topK;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeAiLlmEndpointParamsIbmTypeField(val) {
    return val;
}
export function deserializeAiLlmEndpointParamsIbmTypeField(val) {
    if (val == 'ibm_params') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize AiLlmEndpointParamsIbmTypeField",
    });
}
export function serializeAiLlmEndpointParamsIbm(val) {
    return {
        ['type']: serializeAiLlmEndpointParamsIbmTypeField(val.type),
        ['temperature']: val.temperature,
        ['top_p']: val.topP,
        ['top_k']: val.topK,
    };
}
export function deserializeAiLlmEndpointParamsIbm(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiLlmEndpointParamsIbm"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "AiLlmEndpointParamsIbm" to be defined',
        });
    }
    const type = deserializeAiLlmEndpointParamsIbmTypeField(val.type);
    if (!(val.temperature == void 0) && !sdIsNumber(val.temperature)) {
        throw new BoxSdkError({
            message: 'Expecting number for "temperature" of type "AiLlmEndpointParamsIbm"',
        });
    }
    const temperature = val.temperature == void 0 ? void 0 : val.temperature;
    if (!(val.top_p == void 0) && !sdIsNumber(val.top_p)) {
        throw new BoxSdkError({
            message: 'Expecting number for "top_p" of type "AiLlmEndpointParamsIbm"',
        });
    }
    const topP = val.top_p == void 0 ? void 0 : val.top_p;
    if (!(val.top_k == void 0) && !sdIsNumber(val.top_k)) {
        throw new BoxSdkError({
            message: 'Expecting number for "top_k" of type "AiLlmEndpointParamsIbm"',
        });
    }
    const topK = val.top_k == void 0 ? void 0 : val.top_k;
    return {
        type: type,
        temperature: temperature,
        topP: topP,
        topK: topK,
    };
}
export function serializeAiLlmEndpointParamsIbmInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeAiLlmEndpointParamsIbmTypeField(val.type),
        ['temperature']: val.temperature,
        ['top_p']: val.topP,
        ['top_k']: val.topK,
    };
}
export function deserializeAiLlmEndpointParamsIbmInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiLlmEndpointParamsIbmInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeAiLlmEndpointParamsIbmTypeField(val.type);
    if (!(val.temperature == void 0) && !sdIsNumber(val.temperature)) {
        throw new BoxSdkError({
            message: 'Expecting number for "temperature" of type "AiLlmEndpointParamsIbmInput"',
        });
    }
    const temperature = val.temperature == void 0 ? void 0 : val.temperature;
    if (!(val.top_p == void 0) && !sdIsNumber(val.top_p)) {
        throw new BoxSdkError({
            message: 'Expecting number for "top_p" of type "AiLlmEndpointParamsIbmInput"',
        });
    }
    const topP = val.top_p == void 0 ? void 0 : val.top_p;
    if (!(val.top_k == void 0) && !sdIsNumber(val.top_k)) {
        throw new BoxSdkError({
            message: 'Expecting number for "top_k" of type "AiLlmEndpointParamsIbmInput"',
        });
    }
    const topK = val.top_k == void 0 ? void 0 : val.top_k;
    return {
        type: type,
        temperature: temperature,
        topP: topP,
        topK: topK,
    };
}
//# sourceMappingURL=aiLlmEndpointParamsIbm.generated.js.map