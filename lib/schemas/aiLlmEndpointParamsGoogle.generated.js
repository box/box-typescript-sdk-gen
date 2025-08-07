"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiLlmEndpointParamsGoogle = void 0;
exports.serializeAiLlmEndpointParamsGoogleTypeField = serializeAiLlmEndpointParamsGoogleTypeField;
exports.deserializeAiLlmEndpointParamsGoogleTypeField = deserializeAiLlmEndpointParamsGoogleTypeField;
exports.serializeAiLlmEndpointParamsGoogle = serializeAiLlmEndpointParamsGoogle;
exports.deserializeAiLlmEndpointParamsGoogle = deserializeAiLlmEndpointParamsGoogle;
exports.serializeAiLlmEndpointParamsGoogleInput = serializeAiLlmEndpointParamsGoogleInput;
exports.deserializeAiLlmEndpointParamsGoogleInput = deserializeAiLlmEndpointParamsGoogleInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class AiLlmEndpointParamsGoogle {
    constructor(fields) {
        /**
         * The type of the AI LLM endpoint params object for Google.
         * This parameter is **required**. */
        this.type = 'google_params';
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
exports.AiLlmEndpointParamsGoogle = AiLlmEndpointParamsGoogle;
function serializeAiLlmEndpointParamsGoogleTypeField(val) {
    return val;
}
function deserializeAiLlmEndpointParamsGoogleTypeField(val) {
    if (val == 'google_params') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AiLlmEndpointParamsGoogleTypeField",
    });
}
function serializeAiLlmEndpointParamsGoogle(val) {
    return {
        ['type']: serializeAiLlmEndpointParamsGoogleTypeField(val.type),
        ['temperature']: val.temperature,
        ['top_p']: val.topP,
        ['top_k']: val.topK,
    };
}
function deserializeAiLlmEndpointParamsGoogle(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiLlmEndpointParamsGoogle"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "AiLlmEndpointParamsGoogle" to be defined',
        });
    }
    const type = deserializeAiLlmEndpointParamsGoogleTypeField(val.type);
    if (!(val.temperature == void 0) && !(0, json_js_1.sdIsNumber)(val.temperature)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "temperature" of type "AiLlmEndpointParamsGoogle"',
        });
    }
    const temperature = val.temperature == void 0 ? void 0 : val.temperature;
    if (!(val.top_p == void 0) && !(0, json_js_1.sdIsNumber)(val.top_p)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "top_p" of type "AiLlmEndpointParamsGoogle"',
        });
    }
    const topP = val.top_p == void 0 ? void 0 : val.top_p;
    if (!(val.top_k == void 0) && !(0, json_js_1.sdIsNumber)(val.top_k)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "top_k" of type "AiLlmEndpointParamsGoogle"',
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
function serializeAiLlmEndpointParamsGoogleInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeAiLlmEndpointParamsGoogleTypeField(val.type),
        ['temperature']: val.temperature,
        ['top_p']: val.topP,
        ['top_k']: val.topK,
    };
}
function deserializeAiLlmEndpointParamsGoogleInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiLlmEndpointParamsGoogleInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeAiLlmEndpointParamsGoogleTypeField(val.type);
    if (!(val.temperature == void 0) && !(0, json_js_1.sdIsNumber)(val.temperature)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "temperature" of type "AiLlmEndpointParamsGoogleInput"',
        });
    }
    const temperature = val.temperature == void 0 ? void 0 : val.temperature;
    if (!(val.top_p == void 0) && !(0, json_js_1.sdIsNumber)(val.top_p)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "top_p" of type "AiLlmEndpointParamsGoogleInput"',
        });
    }
    const topP = val.top_p == void 0 ? void 0 : val.top_p;
    if (!(val.top_k == void 0) && !(0, json_js_1.sdIsNumber)(val.top_k)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "top_k" of type "AiLlmEndpointParamsGoogleInput"',
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
//# sourceMappingURL=aiLlmEndpointParamsGoogle.generated.js.map