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
exports.deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArg = exports.serializeCreateMetadataTemplateSchemaClassificationRequestBodyArg = exports.deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField = exports.serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField = exports.deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField = exports.serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField = exports.deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField = exports.serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField = exports.deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField = exports.serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField = exports.deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField = exports.serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField = exports.deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField = exports.serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField = exports.deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField = exports.serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField = exports.deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField = exports.serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField = exports.deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField = exports.serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField = exports.deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField = exports.serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField = exports.ClassificationsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class ClassificationsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getMetadataTemplateEnterpriseSecurityClassificationSchema() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema"), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeClassificationTemplate)((0, json_js_1.deserializeJson)(response.text));
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
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/schema#classifications"), { method: "POST", body: (0, json_js_2.serializeJson)(serializeCreateMetadataTemplateSchemaClassificationRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeClassificationTemplate)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.ClassificationsManager = ClassificationsManager;
function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField(val) {
    return val;
}
exports.serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField = serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField;
function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField = deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField;
function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField(val) {
    return val;
}
exports.serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField = serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField;
function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField\"";
    }
    if (val == "securityClassification-6VMVochwUWo") {
        return "securityClassification-6VMVochwUWo";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField = deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField;
function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField(val) {
    return val;
}
exports.serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField = serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField;
function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField\"";
    }
    if (val == "Classification") {
        return "Classification";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField = deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField;
function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField(val) {
    return val;
}
exports.serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField = serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField;
function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField\"";
    }
    if (val == "enum") {
        return "enum";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField = deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField;
function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField(val) {
    return val;
}
exports.serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField = serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField;
function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField\"";
    }
    if (val == "Box__Security__Classification__Key") {
        return "Box__Security__Classification__Key";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField = deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField;
function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField(val) {
    return val;
}
exports.serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField = serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField;
function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField\"";
    }
    if (val == "Classification") {
        return "Classification";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField = deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField;
function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val) {
    return { ["classificationDefinition"]: val.classificationDefinition, ["colorID"]: val.colorId };
}
exports.serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField = serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField;
function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val) {
    const classificationDefinition = (0, json_js_3.isJson)(val.classificationDefinition, "string") ? val.classificationDefinition : void 0;
    const colorId = (0, json_js_3.isJson)(val.colorID, "number") ? val.colorID : void 0;
    return { classificationDefinition: classificationDefinition, colorId: colorId };
}
exports.deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField = deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField;
function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField(val) {
    return { ["classification"]: val.classification == void 0 ? void 0 : serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val.classification) };
}
exports.serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField = serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField;
function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField(val) {
    const classification = val.classification == void 0 ? void 0 : deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val.classification);
    return { classification: classification };
}
exports.deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField = deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField;
function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField(val) {
    return { ["key"]: val.key, ["staticConfig"]: val.staticConfig == void 0 ? void 0 : serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField(val.staticConfig) };
}
exports.serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField = serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField;
function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField(val) {
    const key = (0, json_js_3.isJson)(val.key, "string") ? val.key : void 0;
    const staticConfig = val.staticConfig == void 0 ? void 0 : deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField(val.staticConfig);
    return { key: key, staticConfig: staticConfig };
}
exports.deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField = deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField;
function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField(val) {
    return { ["type"]: val.type == void 0 ? void 0 : serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField(val.type), ["key"]: val.key == void 0 ? void 0 : serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField(val.key), ["displayName"]: val.displayName == void 0 ? void 0 : serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField(val.displayName), ["hidden"]: val.hidden, ["options"]: val.options == void 0 ? void 0 : val.options.map(function (item) {
            return serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField(item);
        }) };
}
exports.serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField = serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField;
function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField(val) {
    const type = val.type == void 0 ? void 0 : deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField(val.type);
    const key = val.key == void 0 ? void 0 : deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField(val.key);
    const displayName = val.displayName == void 0 ? void 0 : deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField(val.displayName);
    const hidden = (0, json_js_3.isJson)(val.hidden, "boolean") ? val.hidden : void 0;
    const options = (0, json_js_3.isJson)(val.options, "array") ? val.options.map(function (itm) {
        return deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField(itm);
    }) : void 0;
    return { type: type, key: key, displayName: displayName, hidden: hidden, options: options };
}
exports.deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField = deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField;
function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArg(val) {
    return { ["scope"]: serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField(val.scope), ["templateKey"]: val.templateKey == void 0 ? void 0 : serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField(val.templateKey), ["displayName"]: serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField(val.displayName), ["hidden"]: val.hidden, ["copyInstanceOnItemCopy"]: val.copyInstanceOnItemCopy, ["fields"]: val.fields == void 0 ? void 0 : val.fields.map(function (item) {
            return serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField(item);
        }) };
}
exports.serializeCreateMetadataTemplateSchemaClassificationRequestBodyArg = serializeCreateMetadataTemplateSchemaClassificationRequestBodyArg;
function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArg(val) {
    const scope = deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField(val.scope);
    const templateKey = val.templateKey == void 0 ? void 0 : deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField(val.templateKey);
    const displayName = deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField(val.displayName);
    const hidden = (0, json_js_3.isJson)(val.hidden, "boolean") ? val.hidden : void 0;
    const copyInstanceOnItemCopy = (0, json_js_3.isJson)(val.copyInstanceOnItemCopy, "boolean") ? val.copyInstanceOnItemCopy : void 0;
    const fields = (0, json_js_3.isJson)(val.fields, "array") ? val.fields.map(function (itm) {
        return deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField(itm);
    }) : void 0;
    return { scope: scope, templateKey: templateKey, displayName: displayName, hidden: hidden, copyInstanceOnItemCopy: copyInstanceOnItemCopy, fields: fields };
}
exports.deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArg = deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArg;
//# sourceMappingURL=classifications.generated.js.map