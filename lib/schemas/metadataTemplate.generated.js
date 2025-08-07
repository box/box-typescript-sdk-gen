"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataTemplate = void 0;
exports.serializeMetadataTemplateTypeField = serializeMetadataTemplateTypeField;
exports.deserializeMetadataTemplateTypeField = deserializeMetadataTemplateTypeField;
exports.serializeMetadataTemplateFieldsTypeField = serializeMetadataTemplateFieldsTypeField;
exports.deserializeMetadataTemplateFieldsTypeField = deserializeMetadataTemplateFieldsTypeField;
exports.serializeMetadataTemplateFieldsOptionsField = serializeMetadataTemplateFieldsOptionsField;
exports.deserializeMetadataTemplateFieldsOptionsField = deserializeMetadataTemplateFieldsOptionsField;
exports.serializeMetadataTemplateFieldsField = serializeMetadataTemplateFieldsField;
exports.deserializeMetadataTemplateFieldsField = deserializeMetadataTemplateFieldsField;
exports.serializeMetadataTemplate = serializeMetadataTemplate;
exports.deserializeMetadataTemplate = deserializeMetadataTemplate;
exports.serializeMetadataTemplateInput = serializeMetadataTemplateInput;
exports.deserializeMetadataTemplateInput = deserializeMetadataTemplateInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
class MetadataTemplate {
    constructor(fields) {
        /**
         * The value will always be `metadata_template`. */
        this.type = 'metadata_template';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.scope !== undefined) {
            this.scope = fields.scope;
        }
        if (fields.templateKey !== undefined) {
            this.templateKey = fields.templateKey;
        }
        if (fields.displayName !== undefined) {
            this.displayName = fields.displayName;
        }
        if (fields.hidden !== undefined) {
            this.hidden = fields.hidden;
        }
        if (fields.fields !== undefined) {
            this.fields = fields.fields;
        }
        if (fields.copyInstanceOnItemCopy !== undefined) {
            this.copyInstanceOnItemCopy = fields.copyInstanceOnItemCopy;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.MetadataTemplate = MetadataTemplate;
function serializeMetadataTemplateTypeField(val) {
    return val;
}
function deserializeMetadataTemplateTypeField(val) {
    if (val == 'metadata_template') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize MetadataTemplateTypeField",
    });
}
function serializeMetadataTemplateFieldsTypeField(val) {
    return val;
}
function deserializeMetadataTemplateFieldsTypeField(val) {
    if (val == 'string') {
        return val;
    }
    if (val == 'float') {
        return val;
    }
    if (val == 'date') {
        return val;
    }
    if (val == 'enum') {
        return val;
    }
    if (val == 'multiSelect') {
        return val;
    }
    if (val == 'integer') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize MetadataTemplateFieldsTypeField",
    });
}
function serializeMetadataTemplateFieldsOptionsField(val) {
    return { ['key']: val.key, ['id']: val.id };
}
function deserializeMetadataTemplateFieldsOptionsField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "MetadataTemplateFieldsOptionsField"',
        });
    }
    if (val.key == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "key" of type "MetadataTemplateFieldsOptionsField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.key)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "key" of type "MetadataTemplateFieldsOptionsField"',
        });
    }
    const key = val.key;
    if (!(val.id == void 0) && !(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "MetadataTemplateFieldsOptionsField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return { key: key, id: id };
}
function serializeMetadataTemplateFieldsField(val) {
    return {
        ['type']: serializeMetadataTemplateFieldsTypeField(val.type),
        ['key']: val.key,
        ['displayName']: val.displayName,
        ['description']: val.description,
        ['hidden']: val.hidden,
        ['options']: val.options == void 0
            ? val.options
            : val.options.map(function (item) {
                return serializeMetadataTemplateFieldsOptionsField(item);
            }),
        ['id']: val.id,
    };
}
function deserializeMetadataTemplateFieldsField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "MetadataTemplateFieldsField"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "MetadataTemplateFieldsField" to be defined',
        });
    }
    const type = deserializeMetadataTemplateFieldsTypeField(val.type);
    if (val.key == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "key" of type "MetadataTemplateFieldsField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.key)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "key" of type "MetadataTemplateFieldsField"',
        });
    }
    const key = val.key;
    if (val.displayName == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "displayName" of type "MetadataTemplateFieldsField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.displayName)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "displayName" of type "MetadataTemplateFieldsField"',
        });
    }
    const displayName = val.displayName;
    if (!(val.description == void 0) && !(0, json_js_2.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "MetadataTemplateFieldsField"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.hidden == void 0) && !(0, json_js_1.sdIsBoolean)(val.hidden)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "MetadataTemplateFieldsField"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (!(val.options == void 0) && !(0, json_js_3.sdIsList)(val.options)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "options" of type "MetadataTemplateFieldsField"',
        });
    }
    const options = val.options == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.options)
            ? val.options.map(function (itm) {
                return deserializeMetadataTemplateFieldsOptionsField(itm);
            })
            : [];
    if (!(val.id == void 0) && !(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "MetadataTemplateFieldsField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return {
        type: type,
        key: key,
        displayName: displayName,
        description: description,
        hidden: hidden,
        options: options,
        id: id,
    };
}
function serializeMetadataTemplate(val) {
    return {
        ['id']: val.id,
        ['type']: serializeMetadataTemplateTypeField(val.type),
        ['scope']: val.scope,
        ['templateKey']: val.templateKey,
        ['displayName']: val.displayName,
        ['hidden']: val.hidden,
        ['fields']: val.fields == void 0
            ? val.fields
            : val.fields.map(function (item) {
                return serializeMetadataTemplateFieldsField(item);
            }),
        ['copyInstanceOnItemCopy']: val.copyInstanceOnItemCopy,
    };
}
function deserializeMetadataTemplate(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "MetadataTemplate"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "MetadataTemplate" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "MetadataTemplate"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "MetadataTemplate" to be defined',
        });
    }
    const type = deserializeMetadataTemplateTypeField(val.type);
    if (!(val.scope == void 0) && !(0, json_js_2.sdIsString)(val.scope)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "scope" of type "MetadataTemplate"',
        });
    }
    const scope = val.scope == void 0 ? void 0 : val.scope;
    if (!(val.templateKey == void 0) && !(0, json_js_2.sdIsString)(val.templateKey)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "templateKey" of type "MetadataTemplate"',
        });
    }
    const templateKey = val.templateKey == void 0 ? void 0 : val.templateKey;
    if (!(val.displayName == void 0) && !(0, json_js_2.sdIsString)(val.displayName)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "displayName" of type "MetadataTemplate"',
        });
    }
    const displayName = val.displayName == void 0 ? void 0 : val.displayName;
    if (!(val.hidden == void 0) && !(0, json_js_1.sdIsBoolean)(val.hidden)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "MetadataTemplate"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (!(val.fields == void 0) && !(0, json_js_3.sdIsList)(val.fields)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "fields" of type "MetadataTemplate"',
        });
    }
    const fields = val.fields == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.fields)
            ? val.fields.map(function (itm) {
                return deserializeMetadataTemplateFieldsField(itm);
            })
            : [];
    if (!(val.copyInstanceOnItemCopy == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.copyInstanceOnItemCopy)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "copyInstanceOnItemCopy" of type "MetadataTemplate"',
        });
    }
    const copyInstanceOnItemCopy = val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
    return {
        id: id,
        type: type,
        scope: scope,
        templateKey: templateKey,
        displayName: displayName,
        hidden: hidden,
        fields: fields,
        copyInstanceOnItemCopy: copyInstanceOnItemCopy,
    };
}
function serializeMetadataTemplateInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeMetadataTemplateTypeField(val.type),
        ['scope']: val.scope,
        ['templateKey']: val.templateKey,
        ['displayName']: val.displayName,
        ['hidden']: val.hidden,
        ['fields']: val.fields == void 0
            ? val.fields
            : val.fields.map(function (item) {
                return serializeMetadataTemplateFieldsField(item);
            }),
        ['copyInstanceOnItemCopy']: val.copyInstanceOnItemCopy,
    };
}
function deserializeMetadataTemplateInput(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "MetadataTemplateInput"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "MetadataTemplateInput" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "MetadataTemplateInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeMetadataTemplateTypeField(val.type);
    if (!(val.scope == void 0) && !(0, json_js_2.sdIsString)(val.scope)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "scope" of type "MetadataTemplateInput"',
        });
    }
    const scope = val.scope == void 0 ? void 0 : val.scope;
    if (!(val.templateKey == void 0) && !(0, json_js_2.sdIsString)(val.templateKey)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "templateKey" of type "MetadataTemplateInput"',
        });
    }
    const templateKey = val.templateKey == void 0 ? void 0 : val.templateKey;
    if (!(val.displayName == void 0) && !(0, json_js_2.sdIsString)(val.displayName)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "displayName" of type "MetadataTemplateInput"',
        });
    }
    const displayName = val.displayName == void 0 ? void 0 : val.displayName;
    if (!(val.hidden == void 0) && !(0, json_js_1.sdIsBoolean)(val.hidden)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "MetadataTemplateInput"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (!(val.fields == void 0) && !(0, json_js_3.sdIsList)(val.fields)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "fields" of type "MetadataTemplateInput"',
        });
    }
    const fields = val.fields == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.fields)
            ? val.fields.map(function (itm) {
                return deserializeMetadataTemplateFieldsField(itm);
            })
            : [];
    if (!(val.copyInstanceOnItemCopy == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.copyInstanceOnItemCopy)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "copyInstanceOnItemCopy" of type "MetadataTemplateInput"',
        });
    }
    const copyInstanceOnItemCopy = val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
    return {
        id: id,
        type: type,
        scope: scope,
        templateKey: templateKey,
        displayName: displayName,
        hidden: hidden,
        fields: fields,
        copyInstanceOnItemCopy: copyInstanceOnItemCopy,
    };
}
//# sourceMappingURL=metadataTemplate.generated.js.map