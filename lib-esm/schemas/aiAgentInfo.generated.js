import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiAgentInfoModelsField(val) {
    return {
        ['name']: val.name,
        ['provider']: val.provider,
        ['supported_purpose']: val.supportedPurpose,
    };
}
export function deserializeAiAgentInfoModelsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiAgentInfoModelsField"',
        });
    }
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "AiAgentInfoModelsField"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.provider == void 0) && !sdIsString(val.provider)) {
        throw new BoxSdkError({
            message: 'Expecting string for "provider" of type "AiAgentInfoModelsField"',
        });
    }
    const provider = val.provider == void 0 ? void 0 : val.provider;
    if (!(val.supported_purpose == void 0) &&
        !sdIsString(val.supported_purpose)) {
        throw new BoxSdkError({
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
export function serializeAiAgentInfo(val) {
    return {
        ['models']: val.models == void 0
            ? val.models
            : val.models.map(function (item) {
                return serializeAiAgentInfoModelsField(item);
            }),
        ['processor']: val.processor,
    };
}
export function deserializeAiAgentInfo(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "AiAgentInfo"' });
    }
    if (!(val.models == void 0) && !sdIsList(val.models)) {
        throw new BoxSdkError({
            message: 'Expecting array for "models" of type "AiAgentInfo"',
        });
    }
    const models = val.models == void 0
        ? void 0
        : sdIsList(val.models)
            ? val.models.map(function (itm) {
                return deserializeAiAgentInfoModelsField(itm);
            })
            : [];
    if (!(val.processor == void 0) && !sdIsString(val.processor)) {
        throw new BoxSdkError({
            message: 'Expecting string for "processor" of type "AiAgentInfo"',
        });
    }
    const processor = val.processor == void 0 ? void 0 : val.processor;
    return { models: models, processor: processor };
}
//# sourceMappingURL=aiAgentInfo.generated.js.map