"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArg = exports.newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArg = exports.newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField = exports.newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField = exports.newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField = exports.newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField = exports.newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField = exports.newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField = exports.newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField = exports.newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField = exports.newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField = exports.newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField = exports.newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField = exports.newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField = exports.newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField = exports.newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField = exports.newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField = exports.newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField = exports.newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField = exports.newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField = exports.newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField = exports.newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField = exports.ClassificationsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class ClassificationsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getMetadataTemplateEnterpriseSecurityClassificationSchema() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema"), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeClassificationTemplate)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteMetadataTemplateEnterpriseSecurityClassificationSchema() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema"), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
    createMetadataTemplateSchemaClassification(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/schema#classifications"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeClassificationTemplate)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.ClassificationsManager = ClassificationsManager;
function newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField(val) {
    return val;
}
exports.newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField = newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField;
function newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField = newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField;
function newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField(val) {
    return val;
}
exports.newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField = newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField;
function newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField\"";
    }
    if (val == "securityClassification-6VMVochwUWo") {
        return "securityClassification-6VMVochwUWo";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField = newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField;
function newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField(val) {
    return val;
}
exports.newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField = newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField;
function newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField\"";
    }
    if (val == "Classification") {
        return "Classification";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField = newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField;
function newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField(val) {
    return val;
}
exports.newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField = newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField;
function newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField\"";
    }
    if (val == "enum") {
        return "enum";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField = newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField;
function newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField(val) {
    return val;
}
exports.newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField = newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField;
function newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField\"";
    }
    if (val == "Box__Security__Classification__Key") {
        return "Box__Security__Classification__Key";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField = newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField;
function newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField(val) {
    return val;
}
exports.newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField = newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField;
function newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField\"";
    }
    if (val == "Classification") {
        return "Classification";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField = newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField;
function newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val) {
    return { ["classificationDefinition"]: val.classificationDefinition, ["colorId"]: val.colorId };
}
exports.newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField = newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField;
function newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val) {
    const classificationDefinition = (0, json_js_2.isJson)(val.classificationDefinition, "string") ? val.classificationDefinition : void 0;
    const colorId = (0, json_js_2.isJson)(val.colorId, "number") ? val.colorId : void 0;
    return { classificationDefinition: classificationDefinition, colorId: colorId };
}
exports.newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField = newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField;
function newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField(val) {
    return { ["classification"]: val.classification == void 0 ? void 0 : newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val.classification) };
}
exports.newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField = newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField;
function newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField(val) {
    const classification = val.classification == void 0 ? void 0 : newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val.classification);
    return { classification: classification };
}
exports.newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField = newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField;
function newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField(val) {
    return { ["key"]: val.key, ["staticConfig"]: val.staticConfig == void 0 ? void 0 : newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField(val.staticConfig) };
}
exports.newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField = newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField;
function newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField(val) {
    const key = (0, json_js_2.isJson)(val.key, "string") ? val.key : void 0;
    const staticConfig = val.staticConfig == void 0 ? void 0 : newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField(val.staticConfig);
    return { key: key, staticConfig: staticConfig };
}
exports.newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField = newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField;
function newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField(val) {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField(val.type), ["key"]: val.key == void 0 ? void 0 : newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField(val.key), ["displayName"]: val.displayName == void 0 ? void 0 : newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField(val.displayName), ["hidden"]: val.hidden, ["options"]: val.options == void 0 ? void 0 : val.options.map(function (item) {
            return newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField(item);
        }) };
}
exports.newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField = newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField;
function newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField(val) {
    const type = val.type == void 0 ? void 0 : newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField(val.type);
    const key = val.key == void 0 ? void 0 : newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField(val.key);
    const displayName = val.displayName == void 0 ? void 0 : newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField(val.displayName);
    const hidden = (0, json_js_2.isJson)(val.hidden, "boolean") ? val.hidden : void 0;
    const options = (0, json_js_2.isJson)(val.options, "array") ? val.options.map(function (itm) {
        return newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField(itm);
    }) : void 0;
    return { type: type, key: key, displayName: displayName, hidden: hidden, options: options };
}
exports.newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField = newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField;
function newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArg(val) {
    return { ["scope"]: newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField(val.scope), ["templateKey"]: val.templateKey == void 0 ? void 0 : newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField(val.templateKey), ["displayName"]: newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField(val.displayName), ["hidden"]: val.hidden, ["copyInstanceOnItemCopy"]: val.copyInstanceOnItemCopy, ["fields"]: val.fields == void 0 ? void 0 : val.fields.map(function (item) {
            return newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField(item);
        }) };
}
exports.newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArg = newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArg;
function newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArg(val) {
    const scope = newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField(val.scope);
    const templateKey = val.templateKey == void 0 ? void 0 : newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField(val.templateKey);
    const displayName = newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField(val.displayName);
    const hidden = (0, json_js_2.isJson)(val.hidden, "boolean") ? val.hidden : void 0;
    const copyInstanceOnItemCopy = (0, json_js_2.isJson)(val.copyInstanceOnItemCopy, "boolean") ? val.copyInstanceOnItemCopy : void 0;
    const fields = (0, json_js_2.isJson)(val.fields, "array") ? val.fields.map(function (itm) {
        return newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField(itm);
    }) : void 0;
    return { scope: scope, templateKey: templateKey, displayName: displayName, hidden: hidden, copyInstanceOnItemCopy: copyInstanceOnItemCopy, fields: fields };
}
exports.newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArg = newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArg;
//# sourceMappingURL=classifications.generated.js.map