"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiAgentInfoModelsField = serializeAiAgentInfoModelsField;
exports.deserializeAiAgentInfoModelsField = deserializeAiAgentInfoModelsField;
exports.serializeAiAgentInfo = serializeAiAgentInfo;
exports.deserializeAiAgentInfo = deserializeAiAgentInfo;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeAiAgentInfoModelsField(val) {
    return {
        ['name']: val.name,
        ['provider']: val.provider,
        ['supported_purpose']: val.supportedPurpose,
    };
}
function deserializeAiAgentInfoModelsField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiAgentInfoModelsField"',
        });
    }
    if (!(val.name == void 0) && !(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "AiAgentInfoModelsField"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.provider == void 0) && !(0, json_js_1.sdIsString)(val.provider)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "provider" of type "AiAgentInfoModelsField"',
        });
    }
    const provider = val.provider == void 0 ? void 0 : val.provider;
    if (!(val.supported_purpose == void 0) &&
        !(0, json_js_1.sdIsString)(val.supported_purpose)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "supported_purpose" of type "AiAgentInfoModelsField"',
        });
    }
    const supportedPurpose = val.supported_purpose == void 0 ? void 0 : val.supported_purpose;
    return {
        name: name,
        provider: provider,
        supportedPurpose: supportedPurpose,
    };
}
function serializeAiAgentInfo(val) {
    return {
        ['models']: val.models == void 0
            ? val.models
            : val.models.map(function (item) {
                return serializeAiAgentInfoModelsField(item);
            }),
        ['processor']: val.processor,
    };
}
function deserializeAiAgentInfo(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "AiAgentInfo"' });
    }
    if (!(val.models == void 0) && !(0, json_js_2.sdIsList)(val.models)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "models" of type "AiAgentInfo"',
        });
    }
    const models = val.models == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.models)
            ? val.models.map(function (itm) {
                return deserializeAiAgentInfoModelsField(itm);
            })
            : [];
    if (!(val.processor == void 0) && !(0, json_js_1.sdIsString)(val.processor)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "processor" of type "AiAgentInfo"',
        });
    }
    const processor = val.processor == void 0 ? void 0 : val.processor;
    return { models: models, processor: processor };
}
//# sourceMappingURL=aiAgentInfo.generated.js.map