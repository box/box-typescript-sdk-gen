"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiLlmEndpointParamsAws = void 0;
exports.serializeAiLlmEndpointParamsAwsTypeField = serializeAiLlmEndpointParamsAwsTypeField;
exports.deserializeAiLlmEndpointParamsAwsTypeField = deserializeAiLlmEndpointParamsAwsTypeField;
exports.serializeAiLlmEndpointParamsAws = serializeAiLlmEndpointParamsAws;
exports.deserializeAiLlmEndpointParamsAws = deserializeAiLlmEndpointParamsAws;
exports.serializeAiLlmEndpointParamsAwsInput = serializeAiLlmEndpointParamsAwsInput;
exports.deserializeAiLlmEndpointParamsAwsInput = deserializeAiLlmEndpointParamsAwsInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class AiLlmEndpointParamsAws {
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
exports.AiLlmEndpointParamsAws = AiLlmEndpointParamsAws;
function serializeAiLlmEndpointParamsAwsTypeField(val) {
    return val;
}
function deserializeAiLlmEndpointParamsAwsTypeField(val) {
    if (val == 'aws_params') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AiLlmEndpointParamsAwsTypeField",
    });
}
function serializeAiLlmEndpointParamsAws(val) {
    return {
        ['type']: serializeAiLlmEndpointParamsAwsTypeField(val.type),
        ['temperature']: val.temperature,
        ['top_p']: val.topP,
    };
}
function deserializeAiLlmEndpointParamsAws(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiLlmEndpointParamsAws"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "AiLlmEndpointParamsAws" to be defined',
        });
    }
    const type = deserializeAiLlmEndpointParamsAwsTypeField(val.type);
    if (!(val.temperature == void 0) && !(0, json_js_1.sdIsNumber)(val.temperature)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "temperature" of type "AiLlmEndpointParamsAws"',
        });
    }
    const temperature = val.temperature == void 0 ? void 0 : val.temperature;
    if (!(val.top_p == void 0) && !(0, json_js_1.sdIsNumber)(val.top_p)) {
        throw new errors_js_1.BoxSdkError({
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
function serializeAiLlmEndpointParamsAwsInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeAiLlmEndpointParamsAwsTypeField(val.type),
        ['temperature']: val.temperature,
        ['top_p']: val.topP,
    };
}
function deserializeAiLlmEndpointParamsAwsInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiLlmEndpointParamsAwsInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeAiLlmEndpointParamsAwsTypeField(val.type);
    if (!(val.temperature == void 0) && !(0, json_js_1.sdIsNumber)(val.temperature)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "temperature" of type "AiLlmEndpointParamsAwsInput"',
        });
    }
    const temperature = val.temperature == void 0 ? void 0 : val.temperature;
    if (!(val.top_p == void 0) && !(0, json_js_1.sdIsNumber)(val.top_p)) {
        throw new errors_js_1.BoxSdkError({
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