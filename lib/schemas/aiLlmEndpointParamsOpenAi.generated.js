"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiLlmEndpointParamsOpenAi = void 0;
exports.serializeAiLlmEndpointParamsOpenAiTypeField = serializeAiLlmEndpointParamsOpenAiTypeField;
exports.deserializeAiLlmEndpointParamsOpenAiTypeField = deserializeAiLlmEndpointParamsOpenAiTypeField;
exports.serializeAiLlmEndpointParamsOpenAi = serializeAiLlmEndpointParamsOpenAi;
exports.deserializeAiLlmEndpointParamsOpenAi = deserializeAiLlmEndpointParamsOpenAi;
exports.serializeAiLlmEndpointParamsOpenAiInput = serializeAiLlmEndpointParamsOpenAiInput;
exports.deserializeAiLlmEndpointParamsOpenAiInput = deserializeAiLlmEndpointParamsOpenAiInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class AiLlmEndpointParamsOpenAi {
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
exports.AiLlmEndpointParamsOpenAi = AiLlmEndpointParamsOpenAi;
function serializeAiLlmEndpointParamsOpenAiTypeField(val) {
    return val;
}
function deserializeAiLlmEndpointParamsOpenAiTypeField(val) {
    if (val == 'openai_params') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AiLlmEndpointParamsOpenAiTypeField",
    });
}
function serializeAiLlmEndpointParamsOpenAi(val) {
    return {
        ['type']: serializeAiLlmEndpointParamsOpenAiTypeField(val.type),
        ['temperature']: val.temperature,
        ['top_p']: val.topP,
        ['frequency_penalty']: val.frequencyPenalty,
        ['presence_penalty']: val.presencePenalty,
        ['stop']: val.stop,
    };
}
function deserializeAiLlmEndpointParamsOpenAi(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiLlmEndpointParamsOpenAi"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "AiLlmEndpointParamsOpenAi" to be defined',
        });
    }
    const type = deserializeAiLlmEndpointParamsOpenAiTypeField(val.type);
    if (!(val.temperature == void 0) && !(0, json_js_1.sdIsNumber)(val.temperature)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "temperature" of type "AiLlmEndpointParamsOpenAi"',
        });
    }
    const temperature = val.temperature == void 0 ? void 0 : val.temperature;
    if (!(val.top_p == void 0) && !(0, json_js_1.sdIsNumber)(val.top_p)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "top_p" of type "AiLlmEndpointParamsOpenAi"',
        });
    }
    const topP = val.top_p == void 0 ? void 0 : val.top_p;
    if (!(val.frequency_penalty == void 0) &&
        !(0, json_js_1.sdIsNumber)(val.frequency_penalty)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "frequency_penalty" of type "AiLlmEndpointParamsOpenAi"',
        });
    }
    const frequencyPenalty = val.frequency_penalty == void 0 ? void 0 : val.frequency_penalty;
    if (!(val.presence_penalty == void 0) && !(0, json_js_1.sdIsNumber)(val.presence_penalty)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "presence_penalty" of type "AiLlmEndpointParamsOpenAi"',
        });
    }
    const presencePenalty = val.presence_penalty == void 0 ? void 0 : val.presence_penalty;
    if (!(val.stop == void 0) && !(0, json_js_2.sdIsString)(val.stop)) {
        throw new errors_js_1.BoxSdkError({
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
function serializeAiLlmEndpointParamsOpenAiInput(val) {
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
function deserializeAiLlmEndpointParamsOpenAiInput(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiLlmEndpointParamsOpenAiInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeAiLlmEndpointParamsOpenAiTypeField(val.type);
    if (!(val.temperature == void 0) && !(0, json_js_1.sdIsNumber)(val.temperature)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "temperature" of type "AiLlmEndpointParamsOpenAiInput"',
        });
    }
    const temperature = val.temperature == void 0 ? void 0 : val.temperature;
    if (!(val.top_p == void 0) && !(0, json_js_1.sdIsNumber)(val.top_p)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "top_p" of type "AiLlmEndpointParamsOpenAiInput"',
        });
    }
    const topP = val.top_p == void 0 ? void 0 : val.top_p;
    if (!(val.frequency_penalty == void 0) &&
        !(0, json_js_1.sdIsNumber)(val.frequency_penalty)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "frequency_penalty" of type "AiLlmEndpointParamsOpenAiInput"',
        });
    }
    const frequencyPenalty = val.frequency_penalty == void 0 ? void 0 : val.frequency_penalty;
    if (!(val.presence_penalty == void 0) && !(0, json_js_1.sdIsNumber)(val.presence_penalty)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "presence_penalty" of type "AiLlmEndpointParamsOpenAiInput"',
        });
    }
    const presencePenalty = val.presence_penalty == void 0 ? void 0 : val.presence_penalty;
    if (!(val.stop == void 0) && !(0, json_js_2.sdIsString)(val.stop)) {
        throw new errors_js_1.BoxSdkError({
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