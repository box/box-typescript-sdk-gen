"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassificationTemplate = exports.ClassificationTemplateFieldsField = void 0;
exports.serializeClassificationTemplateTypeField = serializeClassificationTemplateTypeField;
exports.deserializeClassificationTemplateTypeField = deserializeClassificationTemplateTypeField;
exports.serializeClassificationTemplateTemplateKeyField = serializeClassificationTemplateTemplateKeyField;
exports.deserializeClassificationTemplateTemplateKeyField = deserializeClassificationTemplateTemplateKeyField;
exports.serializeClassificationTemplateDisplayNameField = serializeClassificationTemplateDisplayNameField;
exports.deserializeClassificationTemplateDisplayNameField = deserializeClassificationTemplateDisplayNameField;
exports.serializeClassificationTemplateFieldsTypeField = serializeClassificationTemplateFieldsTypeField;
exports.deserializeClassificationTemplateFieldsTypeField = deserializeClassificationTemplateFieldsTypeField;
exports.serializeClassificationTemplateFieldsKeyField = serializeClassificationTemplateFieldsKeyField;
exports.deserializeClassificationTemplateFieldsKeyField = deserializeClassificationTemplateFieldsKeyField;
exports.serializeClassificationTemplateFieldsDisplayNameField = serializeClassificationTemplateFieldsDisplayNameField;
exports.deserializeClassificationTemplateFieldsDisplayNameField = deserializeClassificationTemplateFieldsDisplayNameField;
exports.serializeClassificationTemplateFieldsOptionsStaticConfigClassificationField = serializeClassificationTemplateFieldsOptionsStaticConfigClassificationField;
exports.deserializeClassificationTemplateFieldsOptionsStaticConfigClassificationField = deserializeClassificationTemplateFieldsOptionsStaticConfigClassificationField;
exports.serializeClassificationTemplateFieldsOptionsStaticConfigField = serializeClassificationTemplateFieldsOptionsStaticConfigField;
exports.deserializeClassificationTemplateFieldsOptionsStaticConfigField = deserializeClassificationTemplateFieldsOptionsStaticConfigField;
exports.serializeClassificationTemplateFieldsOptionsField = serializeClassificationTemplateFieldsOptionsField;
exports.deserializeClassificationTemplateFieldsOptionsField = deserializeClassificationTemplateFieldsOptionsField;
exports.serializeClassificationTemplateFieldsField = serializeClassificationTemplateFieldsField;
exports.deserializeClassificationTemplateFieldsField = deserializeClassificationTemplateFieldsField;
exports.serializeClassificationTemplateFieldsFieldInput = serializeClassificationTemplateFieldsFieldInput;
exports.deserializeClassificationTemplateFieldsFieldInput = deserializeClassificationTemplateFieldsFieldInput;
exports.serializeClassificationTemplate = serializeClassificationTemplate;
exports.deserializeClassificationTemplate = deserializeClassificationTemplate;
exports.serializeClassificationTemplateInput = serializeClassificationTemplateInput;
exports.deserializeClassificationTemplateInput = deserializeClassificationTemplateInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
const json_js_5 = require("../serialization/json.js");
class ClassificationTemplateFieldsField {
    constructor(fields) {
        /**
         * The array item type. */
        this.type = 'enum';
        /**
         * Defines classifications
         * available in the enterprise. */
        this.key = 'Box__Security__Classification__Key';
        /**
         * The value will always be `Classification`. */
        this.displayName = 'Classification';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.key !== undefined) {
            this.key = fields.key;
        }
        if (fields.displayName !== undefined) {
            this.displayName = fields.displayName;
        }
        if (fields.hidden !== undefined) {
            this.hidden = fields.hidden;
        }
        if (fields.options !== undefined) {
            this.options = fields.options;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.ClassificationTemplateFieldsField = ClassificationTemplateFieldsField;
class ClassificationTemplate {
    constructor(fields) {
        /**
         * The value will always be `metadata_template`. */
        this.type = 'metadata_template';
        /**
         * The value will always be `securityClassification-6VMVochwUWo`. */
        this.templateKey = 'securityClassification-6VMVochwUWo';
        /**
         * The name of this template as shown in web and mobile interfaces. */
        this.displayName = 'Classification';
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
        if (fields.copyInstanceOnItemCopy !== undefined) {
            this.copyInstanceOnItemCopy = fields.copyInstanceOnItemCopy;
        }
        if (fields.fields !== undefined) {
            this.fields = fields.fields;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.ClassificationTemplate = ClassificationTemplate;
function serializeClassificationTemplateTypeField(val) {
    return val;
}
function deserializeClassificationTemplateTypeField(val) {
    if (val == 'metadata_template') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ClassificationTemplateTypeField",
    });
}
function serializeClassificationTemplateTemplateKeyField(val) {
    return val;
}
function deserializeClassificationTemplateTemplateKeyField(val) {
    if (val == 'securityClassification-6VMVochwUWo') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ClassificationTemplateTemplateKeyField",
    });
}
function serializeClassificationTemplateDisplayNameField(val) {
    return val;
}
function deserializeClassificationTemplateDisplayNameField(val) {
    if (val == 'Classification') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ClassificationTemplateDisplayNameField",
    });
}
function serializeClassificationTemplateFieldsTypeField(val) {
    return val;
}
function deserializeClassificationTemplateFieldsTypeField(val) {
    if (val == 'enum') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ClassificationTemplateFieldsTypeField",
    });
}
function serializeClassificationTemplateFieldsKeyField(val) {
    return val;
}
function deserializeClassificationTemplateFieldsKeyField(val) {
    if (val == 'Box__Security__Classification__Key') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ClassificationTemplateFieldsKeyField",
    });
}
function serializeClassificationTemplateFieldsDisplayNameField(val) {
    return val;
}
function deserializeClassificationTemplateFieldsDisplayNameField(val) {
    if (val == 'Classification') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ClassificationTemplateFieldsDisplayNameField",
    });
}
function serializeClassificationTemplateFieldsOptionsStaticConfigClassificationField(val) {
    return {
        ['classificationDefinition']: val.classificationDefinition,
        ['colorID']: val.colorId,
    };
}
function deserializeClassificationTemplateFieldsOptionsStaticConfigClassificationField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ClassificationTemplateFieldsOptionsStaticConfigClassificationField"',
        });
    }
    if (!(val.classificationDefinition == void 0) &&
        !(0, json_js_3.sdIsString)(val.classificationDefinition)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "classificationDefinition" of type "ClassificationTemplateFieldsOptionsStaticConfigClassificationField"',
        });
    }
    const classificationDefinition = val.classificationDefinition == void 0
        ? void 0
        : val.classificationDefinition;
    if (!(val.colorID == void 0) && !(0, json_js_2.sdIsNumber)(val.colorID)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "colorID" of type "ClassificationTemplateFieldsOptionsStaticConfigClassificationField"',
        });
    }
    const colorId = val.colorID == void 0 ? void 0 : val.colorID;
    return {
        classificationDefinition: classificationDefinition,
        colorId: colorId,
    };
}
function serializeClassificationTemplateFieldsOptionsStaticConfigField(val) {
    return {
        ['classification']: val.classification == void 0
            ? val.classification
            : serializeClassificationTemplateFieldsOptionsStaticConfigClassificationField(val.classification),
    };
}
function deserializeClassificationTemplateFieldsOptionsStaticConfigField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ClassificationTemplateFieldsOptionsStaticConfigField"',
        });
    }
    const classification = val.classification == void 0
        ? void 0
        : deserializeClassificationTemplateFieldsOptionsStaticConfigClassificationField(val.classification);
    return {
        classification: classification,
    };
}
function serializeClassificationTemplateFieldsOptionsField(val) {
    return {
        ['id']: val.id,
        ['key']: val.key,
        ['staticConfig']: val.staticConfig == void 0
            ? val.staticConfig
            : serializeClassificationTemplateFieldsOptionsStaticConfigField(val.staticConfig),
    };
}
function deserializeClassificationTemplateFieldsOptionsField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ClassificationTemplateFieldsOptionsField"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "ClassificationTemplateFieldsOptionsField" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ClassificationTemplateFieldsOptionsField"',
        });
    }
    const id = val.id;
    if (val.key == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "key" of type "ClassificationTemplateFieldsOptionsField" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.key)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "key" of type "ClassificationTemplateFieldsOptionsField"',
        });
    }
    const key = val.key;
    const staticConfig = val.staticConfig == void 0
        ? void 0
        : deserializeClassificationTemplateFieldsOptionsStaticConfigField(val.staticConfig);
    return {
        id: id,
        key: key,
        staticConfig: staticConfig,
    };
}
function serializeClassificationTemplateFieldsField(val) {
    return {
        ['id']: val.id,
        ['type']: serializeClassificationTemplateFieldsTypeField(val.type),
        ['key']: serializeClassificationTemplateFieldsKeyField(val.key),
        ['displayName']: serializeClassificationTemplateFieldsDisplayNameField(val.displayName),
        ['hidden']: val.hidden,
        ['options']: val.options.map(function (item) {
            return serializeClassificationTemplateFieldsOptionsField(item);
        }),
    };
}
function deserializeClassificationTemplateFieldsField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ClassificationTemplateFieldsField"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "ClassificationTemplateFieldsField" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ClassificationTemplateFieldsField"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "ClassificationTemplateFieldsField" to be defined',
        });
    }
    const type = deserializeClassificationTemplateFieldsTypeField(val.type);
    if (val.key == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "key" of type "ClassificationTemplateFieldsField" to be defined',
        });
    }
    const key = deserializeClassificationTemplateFieldsKeyField(val.key);
    if (val.displayName == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "displayName" of type "ClassificationTemplateFieldsField" to be defined',
        });
    }
    const displayName = deserializeClassificationTemplateFieldsDisplayNameField(val.displayName);
    if (!(val.hidden == void 0) && !(0, json_js_1.sdIsBoolean)(val.hidden)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "ClassificationTemplateFieldsField"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (val.options == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "options" of type "ClassificationTemplateFieldsField" to be defined',
        });
    }
    if (!(0, json_js_4.sdIsList)(val.options)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "options" of type "ClassificationTemplateFieldsField"',
        });
    }
    const options = (0, json_js_4.sdIsList)(val.options)
        ? val.options.map(function (itm) {
            return deserializeClassificationTemplateFieldsOptionsField(itm);
        })
        : [];
    return {
        id: id,
        type: type,
        key: key,
        displayName: displayName,
        hidden: hidden,
        options: options,
    };
}
function serializeClassificationTemplateFieldsFieldInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeClassificationTemplateFieldsTypeField(val.type),
        ['key']: val.key == void 0
            ? val.key
            : serializeClassificationTemplateFieldsKeyField(val.key),
        ['displayName']: val.displayName == void 0
            ? val.displayName
            : serializeClassificationTemplateFieldsDisplayNameField(val.displayName),
        ['hidden']: val.hidden,
        ['options']: val.options.map(function (item) {
            return serializeClassificationTemplateFieldsOptionsField(item);
        }),
    };
}
function deserializeClassificationTemplateFieldsFieldInput(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ClassificationTemplateFieldsFieldInput"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "ClassificationTemplateFieldsFieldInput" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ClassificationTemplateFieldsFieldInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeClassificationTemplateFieldsTypeField(val.type);
    const key = val.key == void 0
        ? void 0
        : deserializeClassificationTemplateFieldsKeyField(val.key);
    const displayName = val.displayName == void 0
        ? void 0
        : deserializeClassificationTemplateFieldsDisplayNameField(val.displayName);
    if (!(val.hidden == void 0) && !(0, json_js_1.sdIsBoolean)(val.hidden)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "ClassificationTemplateFieldsFieldInput"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (val.options == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "options" of type "ClassificationTemplateFieldsFieldInput" to be defined',
        });
    }
    if (!(0, json_js_4.sdIsList)(val.options)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "options" of type "ClassificationTemplateFieldsFieldInput"',
        });
    }
    const options = (0, json_js_4.sdIsList)(val.options)
        ? val.options.map(function (itm) {
            return deserializeClassificationTemplateFieldsOptionsField(itm);
        })
        : [];
    return {
        id: id,
        type: type,
        key: key,
        displayName: displayName,
        hidden: hidden,
        options: options,
    };
}
function serializeClassificationTemplate(val) {
    return {
        ['id']: val.id,
        ['type']: serializeClassificationTemplateTypeField(val.type),
        ['scope']: val.scope,
        ['templateKey']: serializeClassificationTemplateTemplateKeyField(val.templateKey),
        ['displayName']: serializeClassificationTemplateDisplayNameField(val.displayName),
        ['hidden']: val.hidden,
        ['copyInstanceOnItemCopy']: val.copyInstanceOnItemCopy,
        ['fields']: val.fields.map(function (item) {
            return serializeClassificationTemplateFieldsField(item);
        }),
    };
}
function deserializeClassificationTemplate(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ClassificationTemplate"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "ClassificationTemplate" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ClassificationTemplate"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "ClassificationTemplate" to be defined',
        });
    }
    const type = deserializeClassificationTemplateTypeField(val.type);
    if (val.scope == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "scope" of type "ClassificationTemplate" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.scope)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "scope" of type "ClassificationTemplate"',
        });
    }
    const scope = val.scope;
    if (val.templateKey == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "templateKey" of type "ClassificationTemplate" to be defined',
        });
    }
    const templateKey = deserializeClassificationTemplateTemplateKeyField(val.templateKey);
    if (val.displayName == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "displayName" of type "ClassificationTemplate" to be defined',
        });
    }
    const displayName = deserializeClassificationTemplateDisplayNameField(val.displayName);
    if (!(val.hidden == void 0) && !(0, json_js_1.sdIsBoolean)(val.hidden)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "ClassificationTemplate"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (!(val.copyInstanceOnItemCopy == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.copyInstanceOnItemCopy)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "copyInstanceOnItemCopy" of type "ClassificationTemplate"',
        });
    }
    const copyInstanceOnItemCopy = val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
    if (val.fields == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "fields" of type "ClassificationTemplate" to be defined',
        });
    }
    if (!(0, json_js_4.sdIsList)(val.fields)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "fields" of type "ClassificationTemplate"',
        });
    }
    const fields = (0, json_js_4.sdIsList)(val.fields)
        ? val.fields.map(function (itm) {
            return deserializeClassificationTemplateFieldsField(itm);
        })
        : [];
    return {
        id: id,
        type: type,
        scope: scope,
        templateKey: templateKey,
        displayName: displayName,
        hidden: hidden,
        copyInstanceOnItemCopy: copyInstanceOnItemCopy,
        fields: fields,
    };
}
function serializeClassificationTemplateInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeClassificationTemplateTypeField(val.type),
        ['scope']: val.scope,
        ['templateKey']: val.templateKey == void 0
            ? val.templateKey
            : serializeClassificationTemplateTemplateKeyField(val.templateKey),
        ['displayName']: val.displayName == void 0
            ? val.displayName
            : serializeClassificationTemplateDisplayNameField(val.displayName),
        ['hidden']: val.hidden,
        ['copyInstanceOnItemCopy']: val.copyInstanceOnItemCopy,
        ['fields']: val.fields.map(function (item) {
            return serializeClassificationTemplateFieldsField(item);
        }),
    };
}
function deserializeClassificationTemplateInput(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ClassificationTemplateInput"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "ClassificationTemplateInput" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ClassificationTemplateInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeClassificationTemplateTypeField(val.type);
    if (val.scope == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "scope" of type "ClassificationTemplateInput" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.scope)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "scope" of type "ClassificationTemplateInput"',
        });
    }
    const scope = val.scope;
    const templateKey = val.templateKey == void 0
        ? void 0
        : deserializeClassificationTemplateTemplateKeyField(val.templateKey);
    const displayName = val.displayName == void 0
        ? void 0
        : deserializeClassificationTemplateDisplayNameField(val.displayName);
    if (!(val.hidden == void 0) && !(0, json_js_1.sdIsBoolean)(val.hidden)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "ClassificationTemplateInput"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (!(val.copyInstanceOnItemCopy == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.copyInstanceOnItemCopy)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "copyInstanceOnItemCopy" of type "ClassificationTemplateInput"',
        });
    }
    const copyInstanceOnItemCopy = val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
    if (val.fields == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "fields" of type "ClassificationTemplateInput" to be defined',
        });
    }
    if (!(0, json_js_4.sdIsList)(val.fields)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "fields" of type "ClassificationTemplateInput"',
        });
    }
    const fields = (0, json_js_4.sdIsList)(val.fields)
        ? val.fields.map(function (itm) {
            return deserializeClassificationTemplateFieldsField(itm);
        })
        : [];
    return {
        id: id,
        type: type,
        scope: scope,
        templateKey: templateKey,
        displayName: displayName,
        hidden: hidden,
        copyInstanceOnItemCopy: copyInstanceOnItemCopy,
        fields: fields,
    };
}
//# sourceMappingURL=classificationTemplate.generated.js.map