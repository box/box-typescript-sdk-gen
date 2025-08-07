import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class MetadataTemplate {
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
export function serializeMetadataTemplateTypeField(val) {
    return val;
}
export function deserializeMetadataTemplateTypeField(val) {
    if (val == 'metadata_template') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize MetadataTemplateTypeField",
    });
}
export function serializeMetadataTemplateFieldsTypeField(val) {
    return val;
}
export function deserializeMetadataTemplateFieldsTypeField(val) {
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
    throw new BoxSdkError({
        message: "Can't deserialize MetadataTemplateFieldsTypeField",
    });
}
export function serializeMetadataTemplateFieldsOptionsField(val) {
    return { ['key']: val.key, ['id']: val.id };
}
export function deserializeMetadataTemplateFieldsOptionsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "MetadataTemplateFieldsOptionsField"',
        });
    }
    if (val.key == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "key" of type "MetadataTemplateFieldsOptionsField" to be defined',
        });
    }
    if (!sdIsString(val.key)) {
        throw new BoxSdkError({
            message: 'Expecting string for "key" of type "MetadataTemplateFieldsOptionsField"',
        });
    }
    const key = val.key;
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "MetadataTemplateFieldsOptionsField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return { key: key, id: id };
}
export function serializeMetadataTemplateFieldsField(val) {
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
export function deserializeMetadataTemplateFieldsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "MetadataTemplateFieldsField"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "MetadataTemplateFieldsField" to be defined',
        });
    }
    const type = deserializeMetadataTemplateFieldsTypeField(val.type);
    if (val.key == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "key" of type "MetadataTemplateFieldsField" to be defined',
        });
    }
    if (!sdIsString(val.key)) {
        throw new BoxSdkError({
            message: 'Expecting string for "key" of type "MetadataTemplateFieldsField"',
        });
    }
    const key = val.key;
    if (val.displayName == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "displayName" of type "MetadataTemplateFieldsField" to be defined',
        });
    }
    if (!sdIsString(val.displayName)) {
        throw new BoxSdkError({
            message: 'Expecting string for "displayName" of type "MetadataTemplateFieldsField"',
        });
    }
    const displayName = val.displayName;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "MetadataTemplateFieldsField"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.hidden == void 0) && !sdIsBoolean(val.hidden)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "MetadataTemplateFieldsField"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (!(val.options == void 0) && !sdIsList(val.options)) {
        throw new BoxSdkError({
            message: 'Expecting array for "options" of type "MetadataTemplateFieldsField"',
        });
    }
    const options = val.options == void 0
        ? void 0
        : sdIsList(val.options)
            ? val.options.map(function (itm) {
                return deserializeMetadataTemplateFieldsOptionsField(itm);
            })
            : [];
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
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
export function serializeMetadataTemplate(val) {
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
export function deserializeMetadataTemplate(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "MetadataTemplate"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "MetadataTemplate" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "MetadataTemplate"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "MetadataTemplate" to be defined',
        });
    }
    const type = deserializeMetadataTemplateTypeField(val.type);
    if (!(val.scope == void 0) && !sdIsString(val.scope)) {
        throw new BoxSdkError({
            message: 'Expecting string for "scope" of type "MetadataTemplate"',
        });
    }
    const scope = val.scope == void 0 ? void 0 : val.scope;
    if (!(val.templateKey == void 0) && !sdIsString(val.templateKey)) {
        throw new BoxSdkError({
            message: 'Expecting string for "templateKey" of type "MetadataTemplate"',
        });
    }
    const templateKey = val.templateKey == void 0 ? void 0 : val.templateKey;
    if (!(val.displayName == void 0) && !sdIsString(val.displayName)) {
        throw new BoxSdkError({
            message: 'Expecting string for "displayName" of type "MetadataTemplate"',
        });
    }
    const displayName = val.displayName == void 0 ? void 0 : val.displayName;
    if (!(val.hidden == void 0) && !sdIsBoolean(val.hidden)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "MetadataTemplate"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (!(val.fields == void 0) && !sdIsList(val.fields)) {
        throw new BoxSdkError({
            message: 'Expecting array for "fields" of type "MetadataTemplate"',
        });
    }
    const fields = val.fields == void 0
        ? void 0
        : sdIsList(val.fields)
            ? val.fields.map(function (itm) {
                return deserializeMetadataTemplateFieldsField(itm);
            })
            : [];
    if (!(val.copyInstanceOnItemCopy == void 0) &&
        !sdIsBoolean(val.copyInstanceOnItemCopy)) {
        throw new BoxSdkError({
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
export function serializeMetadataTemplateInput(val) {
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
export function deserializeMetadataTemplateInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "MetadataTemplateInput"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "MetadataTemplateInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "MetadataTemplateInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeMetadataTemplateTypeField(val.type);
    if (!(val.scope == void 0) && !sdIsString(val.scope)) {
        throw new BoxSdkError({
            message: 'Expecting string for "scope" of type "MetadataTemplateInput"',
        });
    }
    const scope = val.scope == void 0 ? void 0 : val.scope;
    if (!(val.templateKey == void 0) && !sdIsString(val.templateKey)) {
        throw new BoxSdkError({
            message: 'Expecting string for "templateKey" of type "MetadataTemplateInput"',
        });
    }
    const templateKey = val.templateKey == void 0 ? void 0 : val.templateKey;
    if (!(val.displayName == void 0) && !sdIsString(val.displayName)) {
        throw new BoxSdkError({
            message: 'Expecting string for "displayName" of type "MetadataTemplateInput"',
        });
    }
    const displayName = val.displayName == void 0 ? void 0 : val.displayName;
    if (!(val.hidden == void 0) && !sdIsBoolean(val.hidden)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "MetadataTemplateInput"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (!(val.fields == void 0) && !sdIsList(val.fields)) {
        throw new BoxSdkError({
            message: 'Expecting array for "fields" of type "MetadataTemplateInput"',
        });
    }
    const fields = val.fields == void 0
        ? void 0
        : sdIsList(val.fields)
            ? val.fields.map(function (itm) {
                return deserializeMetadataTemplateFieldsField(itm);
            })
            : [];
    if (!(val.copyInstanceOnItemCopy == void 0) &&
        !sdIsBoolean(val.copyInstanceOnItemCopy)) {
        throw new BoxSdkError({
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