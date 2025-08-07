"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiExtractStructuredMetadataTemplateTypeField = serializeAiExtractStructuredMetadataTemplateTypeField;
exports.deserializeAiExtractStructuredMetadataTemplateTypeField = deserializeAiExtractStructuredMetadataTemplateTypeField;
exports.serializeAiExtractStructuredMetadataTemplateField = serializeAiExtractStructuredMetadataTemplateField;
exports.deserializeAiExtractStructuredMetadataTemplateField = deserializeAiExtractStructuredMetadataTemplateField;
exports.serializeAiExtractStructuredFieldsOptionsField = serializeAiExtractStructuredFieldsOptionsField;
exports.deserializeAiExtractStructuredFieldsOptionsField = deserializeAiExtractStructuredFieldsOptionsField;
exports.serializeAiExtractStructuredFieldsField = serializeAiExtractStructuredFieldsField;
exports.deserializeAiExtractStructuredFieldsField = deserializeAiExtractStructuredFieldsField;
exports.serializeAiExtractStructured = serializeAiExtractStructured;
exports.deserializeAiExtractStructured = deserializeAiExtractStructured;
const aiItemBase_generated_js_1 = require("./aiItemBase.generated.js");
const aiItemBase_generated_js_2 = require("./aiItemBase.generated.js");
const aiAgentExtractStructuredOrAiAgentReference_generated_js_1 = require("./aiAgentExtractStructuredOrAiAgentReference.generated.js");
const aiAgentExtractStructuredOrAiAgentReference_generated_js_2 = require("./aiAgentExtractStructuredOrAiAgentReference.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeAiExtractStructuredMetadataTemplateTypeField(val) {
    return val;
}
function deserializeAiExtractStructuredMetadataTemplateTypeField(val) {
    if (val == 'metadata_template') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AiExtractStructuredMetadataTemplateTypeField",
    });
}
function serializeAiExtractStructuredMetadataTemplateField(val) {
    return {
        ['template_key']: val.templateKey,
        ['type']: val.type == void 0
            ? val.type
            : serializeAiExtractStructuredMetadataTemplateTypeField(val.type),
        ['scope']: val.scope,
    };
}
function deserializeAiExtractStructuredMetadataTemplateField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiExtractStructuredMetadataTemplateField"',
        });
    }
    if (!(val.template_key == void 0) && !(0, json_js_1.sdIsString)(val.template_key)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "template_key" of type "AiExtractStructuredMetadataTemplateField"',
        });
    }
    const templateKey = val.template_key == void 0 ? void 0 : val.template_key;
    const type = val.type == void 0
        ? void 0
        : deserializeAiExtractStructuredMetadataTemplateTypeField(val.type);
    if (!(val.scope == void 0) && !(0, json_js_1.sdIsString)(val.scope)) {
        throw new errors_js_1.BoxSdkError({
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
function serializeAiExtractStructuredFieldsOptionsField(val) {
    return { ['key']: val.key };
}
function deserializeAiExtractStructuredFieldsOptionsField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiExtractStructuredFieldsOptionsField"',
        });
    }
    if (val.key == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "key" of type "AiExtractStructuredFieldsOptionsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.key)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "key" of type "AiExtractStructuredFieldsOptionsField"',
        });
    }
    const key = val.key;
    return { key: key };
}
function serializeAiExtractStructuredFieldsField(val) {
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
function deserializeAiExtractStructuredFieldsField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiExtractStructuredFieldsField"',
        });
    }
    if (val.key == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "key" of type "AiExtractStructuredFieldsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.key)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "key" of type "AiExtractStructuredFieldsField"',
        });
    }
    const key = val.key;
    if (!(val.description == void 0) && !(0, json_js_1.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "AiExtractStructuredFieldsField"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.displayName == void 0) && !(0, json_js_1.sdIsString)(val.displayName)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "displayName" of type "AiExtractStructuredFieldsField"',
        });
    }
    const displayName = val.displayName == void 0 ? void 0 : val.displayName;
    if (!(val.prompt == void 0) && !(0, json_js_1.sdIsString)(val.prompt)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "prompt" of type "AiExtractStructuredFieldsField"',
        });
    }
    const prompt = val.prompt == void 0 ? void 0 : val.prompt;
    if (!(val.type == void 0) && !(0, json_js_1.sdIsString)(val.type)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "type" of type "AiExtractStructuredFieldsField"',
        });
    }
    const type = val.type == void 0 ? void 0 : val.type;
    if (!(val.options == void 0) && !(0, json_js_2.sdIsList)(val.options)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "options" of type "AiExtractStructuredFieldsField"',
        });
    }
    const options = val.options == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.options)
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
function serializeAiExtractStructured(val) {
    return {
        ['items']: val.items.map(function (item) {
            return (0, aiItemBase_generated_js_1.serializeAiItemBase)(item);
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
            : (0, aiAgentExtractStructuredOrAiAgentReference_generated_js_1.serializeAiAgentExtractStructuredOrAiAgentReference)(val.aiAgent),
    };
}
function deserializeAiExtractStructured(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiExtractStructured"',
        });
    }
    if (val.items == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "items" of type "AiExtractStructured" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsList)(val.items)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "items" of type "AiExtractStructured"',
        });
    }
    const items = (0, json_js_2.sdIsList)(val.items)
        ? val.items.map(function (itm) {
            return (0, aiItemBase_generated_js_2.deserializeAiItemBase)(itm);
        })
        : [];
    const metadataTemplate = val.metadata_template == void 0
        ? void 0
        : deserializeAiExtractStructuredMetadataTemplateField(val.metadata_template);
    if (!(val.fields == void 0) && !(0, json_js_2.sdIsList)(val.fields)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "fields" of type "AiExtractStructured"',
        });
    }
    const fields = val.fields == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.fields)
            ? val.fields.map(function (itm) {
                return deserializeAiExtractStructuredFieldsField(itm);
            })
            : [];
    const aiAgent = val.ai_agent == void 0
        ? void 0
        : (0, aiAgentExtractStructuredOrAiAgentReference_generated_js_2.deserializeAiAgentExtractStructuredOrAiAgentReference)(val.ai_agent);
    return {
        items: items,
        metadataTemplate: metadataTemplate,
        fields: fields,
        aiAgent: aiAgent,
    };
}
//# sourceMappingURL=aiExtractStructured.generated.js.map