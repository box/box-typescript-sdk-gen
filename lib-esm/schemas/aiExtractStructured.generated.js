import { serializeAiItemBase } from './aiItemBase.generated.js';
import { deserializeAiItemBase } from './aiItemBase.generated.js';
import { serializeAiAgentExtractStructuredOrAiAgentReference } from './aiAgentExtractStructuredOrAiAgentReference.generated.js';
import { deserializeAiAgentExtractStructuredOrAiAgentReference } from './aiAgentExtractStructuredOrAiAgentReference.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiExtractStructuredMetadataTemplateTypeField(val) {
    return val;
}
export function deserializeAiExtractStructuredMetadataTemplateTypeField(val) {
    if (val == 'metadata_template') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize AiExtractStructuredMetadataTemplateTypeField",
    });
}
export function serializeAiExtractStructuredMetadataTemplateField(val) {
    return {
        ['template_key']: val.templateKey,
        ['type']: val.type == void 0
            ? val.type
            : serializeAiExtractStructuredMetadataTemplateTypeField(val.type),
        ['scope']: val.scope,
    };
}
export function deserializeAiExtractStructuredMetadataTemplateField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiExtractStructuredMetadataTemplateField"',
        });
    }
    if (!(val.template_key == void 0) && !sdIsString(val.template_key)) {
        throw new BoxSdkError({
            message: 'Expecting string for "template_key" of type "AiExtractStructuredMetadataTemplateField"',
        });
    }
    const templateKey = val.template_key == void 0 ? void 0 : val.template_key;
    const type = val.type == void 0
        ? void 0
        : deserializeAiExtractStructuredMetadataTemplateTypeField(val.type);
    if (!(val.scope == void 0) && !sdIsString(val.scope)) {
        throw new BoxSdkError({
            message: 'Expecting string for "scope" of type "AiExtractStructuredMetadataTemplateField"',
        });
    }
    const scope = val.scope == void 0 ? void 0 : val.scope;
    return {
        templateKey: templateKey,
        type: type,
        scope: scope,
    };
}
export function serializeAiExtractStructuredFieldsOptionsField(val) {
    return { ['key']: val.key };
}
export function deserializeAiExtractStructuredFieldsOptionsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiExtractStructuredFieldsOptionsField"',
        });
    }
    if (val.key == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "key" of type "AiExtractStructuredFieldsOptionsField" to be defined',
        });
    }
    if (!sdIsString(val.key)) {
        throw new BoxSdkError({
            message: 'Expecting string for "key" of type "AiExtractStructuredFieldsOptionsField"',
        });
    }
    const key = val.key;
    return { key: key };
}
export function serializeAiExtractStructuredFieldsField(val) {
    return {
        ['key']: val.key,
        ['description']: val.description,
        ['displayName']: val.displayName,
        ['prompt']: val.prompt,
        ['type']: val.type,
        ['options']: val.options == void 0
            ? val.options
            : val.options.map(function (item) {
                return serializeAiExtractStructuredFieldsOptionsField(item);
            }),
    };
}
export function deserializeAiExtractStructuredFieldsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiExtractStructuredFieldsField"',
        });
    }
    if (val.key == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "key" of type "AiExtractStructuredFieldsField" to be defined',
        });
    }
    if (!sdIsString(val.key)) {
        throw new BoxSdkError({
            message: 'Expecting string for "key" of type "AiExtractStructuredFieldsField"',
        });
    }
    const key = val.key;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "AiExtractStructuredFieldsField"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.displayName == void 0) && !sdIsString(val.displayName)) {
        throw new BoxSdkError({
            message: 'Expecting string for "displayName" of type "AiExtractStructuredFieldsField"',
        });
    }
    const displayName = val.displayName == void 0 ? void 0 : val.displayName;
    if (!(val.prompt == void 0) && !sdIsString(val.prompt)) {
        throw new BoxSdkError({
            message: 'Expecting string for "prompt" of type "AiExtractStructuredFieldsField"',
        });
    }
    const prompt = val.prompt == void 0 ? void 0 : val.prompt;
    if (!(val.type == void 0) && !sdIsString(val.type)) {
        throw new BoxSdkError({
            message: 'Expecting string for "type" of type "AiExtractStructuredFieldsField"',
        });
    }
    const type = val.type == void 0 ? void 0 : val.type;
    if (!(val.options == void 0) && !sdIsList(val.options)) {
        throw new BoxSdkError({
            message: 'Expecting array for "options" of type "AiExtractStructuredFieldsField"',
        });
    }
    const options = val.options == void 0
        ? void 0
        : sdIsList(val.options)
            ? val.options.map(function (itm) {
                return deserializeAiExtractStructuredFieldsOptionsField(itm);
            })
            : [];
    return {
        key: key,
        description: description,
        displayName: displayName,
        prompt: prompt,
        type: type,
        options: options,
    };
}
export function serializeAiExtractStructured(val) {
    return {
        ['items']: val.items.map(function (item) {
            return serializeAiItemBase(item);
        }),
        ['metadata_template']: val.metadataTemplate == void 0
            ? val.metadataTemplate
            : serializeAiExtractStructuredMetadataTemplateField(val.metadataTemplate),
        ['fields']: val.fields == void 0
            ? val.fields
            : val.fields.map(function (item) {
                return serializeAiExtractStructuredFieldsField(item);
            }),
        ['ai_agent']: val.aiAgent == void 0
            ? val.aiAgent
            : serializeAiAgentExtractStructuredOrAiAgentReference(val.aiAgent),
    };
}
export function deserializeAiExtractStructured(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiExtractStructured"',
        });
    }
    if (val.items == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "items" of type "AiExtractStructured" to be defined',
        });
    }
    if (!sdIsList(val.items)) {
        throw new BoxSdkError({
            message: 'Expecting array for "items" of type "AiExtractStructured"',
        });
    }
    const items = sdIsList(val.items)
        ? val.items.map(function (itm) {
            return deserializeAiItemBase(itm);
        })
        : [];
    const metadataTemplate = val.metadata_template == void 0
        ? void 0
        : deserializeAiExtractStructuredMetadataTemplateField(val.metadata_template);
    if (!(val.fields == void 0) && !sdIsList(val.fields)) {
        throw new BoxSdkError({
            message: 'Expecting array for "fields" of type "AiExtractStructured"',
        });
    }
    const fields = val.fields == void 0
        ? void 0
        : sdIsList(val.fields)
            ? val.fields.map(function (itm) {
                return deserializeAiExtractStructuredFieldsField(itm);
            })
            : [];
    const aiAgent = val.ai_agent == void 0
        ? void 0
        : deserializeAiAgentExtractStructuredOrAiAgentReference(val.ai_agent);
    return {
        items: items,
        metadataTemplate: metadataTemplate,
        fields: fields,
        aiAgent: aiAgent,
    };
}
//# sourceMappingURL=aiExtractStructured.generated.js.map