import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class AiLlmEndpointParamsAws {
    constructor(fields) {
        /**
         * The type of the AI LLM endpoint params object for AWS.
         * This parameter is **required**. */
        this.type = 'aws_params';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.temperature !== undefined) {
            this.temperature = fields.temperature;
        }
        if (fields.topP !== undefined) {
            this.topP = fields.topP;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeAiLlmEndpointParamsAwsTypeField(val) {
    return val;
}
export function deserializeAiLlmEndpointParamsAwsTypeField(val) {
    if (val == 'aws_params') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize AiLlmEndpointParamsAwsTypeField",
    });
}
export function serializeAiLlmEndpointParamsAws(val) {
    return {
        ['type']: serializeAiLlmEndpointParamsAwsTypeField(val.type),
        ['temperature']: val.temperature,
        ['top_p']: val.topP,
    };
}
export function deserializeAiLlmEndpointParamsAws(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiLlmEndpointParamsAws"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "AiLlmEndpointParamsAws" to be defined',
        });
    }
    const type = deserializeAiLlmEndpointParamsAwsTypeField(val.type);
    if (!(val.temperature == void 0) && !sdIsNumber(val.temperature)) {
        throw new BoxSdkError({
            message: 'Expecting number for "temperature" of type "AiLlmEndpointParamsAws"',
        });
    }
    const temperature = val.temperature == void 0 ? void 0 : val.temperature;
    if (!(val.top_p == void 0) && !sdIsNumber(val.top_p)) {
        throw new BoxSdkError({
            message: 'Expecting number for "top_p" of type "AiLlmEndpointParamsAws"',
        });
    }
    const topP = val.top_p == void 0 ? void 0 : val.top_p;
    return {
        type: type,
        temperature: temperature,
        topP: topP,
    };
}
export function serializeAiLlmEndpointParamsAwsInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeAiLlmEndpointParamsAwsTypeField(val.type),
        ['temperature']: val.temperature,
        ['top_p']: val.topP,
    };
}
export function deserializeAiLlmEndpointParamsAwsInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiLlmEndpointParamsAwsInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeAiLlmEndpointParamsAwsTypeField(val.type);
    if (!(val.temperature == void 0) && !sdIsNumber(val.temperature)) {
        throw new BoxSdkError({
            message: 'Expecting number for "temperature" of type "AiLlmEndpointParamsAwsInput"',
        });
    }
    const temperature = val.temperature == void 0 ? void 0 : val.temperature;
    if (!(val.top_p == void 0) && !sdIsNumber(val.top_p)) {
        throw new BoxSdkError({
            message: 'Expecting number for "top_p" of type "AiLlmEndpointParamsAwsInput"',
        });
    }
    const topP = val.top_p == void 0 ? void 0 : val.top_p;
    return {
        type: type,
        temperature: temperature,
        topP: topP,
    };
}
//# sourceMappingURL=aiLlmEndpointParamsAws.generated.js.map