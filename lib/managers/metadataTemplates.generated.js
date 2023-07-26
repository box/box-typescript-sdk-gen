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
exports.deserializeCreateMetadataTemplateSchemaRequestBodyArg = exports.serializeCreateMetadataTemplateSchemaRequestBodyArg = exports.deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField = exports.serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField = exports.deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField = exports.serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField = exports.deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField = exports.serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField = exports.deserializeGetMetadataTemplateEnterpriseQueryParamsArg = exports.serializeGetMetadataTemplateEnterpriseQueryParamsArg = exports.deserializeGetMetadataTemplateGlobalQueryParamsArg = exports.serializeGetMetadataTemplateGlobalQueryParamsArg = exports.deserializeDeleteMetadataTemplateSchemaScopeArg = exports.serializeDeleteMetadataTemplateSchemaScopeArg = exports.deserializeGetMetadataTemplateSchemaScopeArg = exports.serializeGetMetadataTemplateSchemaScopeArg = exports.deserializeGetMetadataTemplatesQueryParamsArg = exports.serializeGetMetadataTemplatesQueryParamsArg = exports.MetadataTemplatesManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class MetadataTemplatesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getMetadataTemplates(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates"), { method: "GET", params: (0, utils_js_1.prepareParams)(serializeGetMetadataTemplatesQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeMetadataTemplates)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getMetadataTemplateSchema(scope, templateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/", scope, "/", templateKey, "/schema"), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeMetadataTemplate)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteMetadataTemplateSchema(scope, templateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/", scope, "/", templateKey, "/schema"), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
    getMetadataTemplateById(templateId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/", templateId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeMetadataTemplate)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getMetadataTemplateGlobal(queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/global"), { method: "GET", params: (0, utils_js_1.prepareParams)(serializeGetMetadataTemplateGlobalQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeMetadataTemplates)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getMetadataTemplateEnterprise(queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/enterprise"), { method: "GET", params: (0, utils_js_1.prepareParams)(serializeGetMetadataTemplateEnterpriseQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeMetadataTemplates)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createMetadataTemplateSchema(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/schema"), { method: "POST", body: (0, json_js_2.serializeJson)(serializeCreateMetadataTemplateSchemaRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeMetadataTemplate)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.MetadataTemplatesManager = MetadataTemplatesManager;
function serializeGetMetadataTemplatesQueryParamsArg(val) {
    return { ["metadata_instance_id"]: val.metadataInstanceId };
}
exports.serializeGetMetadataTemplatesQueryParamsArg = serializeGetMetadataTemplatesQueryParamsArg;
function deserializeGetMetadataTemplatesQueryParamsArg(val) {
    const metadataInstanceId = val.metadata_instance_id;
    return { metadataInstanceId: metadataInstanceId };
}
exports.deserializeGetMetadataTemplatesQueryParamsArg = deserializeGetMetadataTemplatesQueryParamsArg;
function serializeGetMetadataTemplateSchemaScopeArg(val) {
    return val;
}
exports.serializeGetMetadataTemplateSchemaScopeArg = serializeGetMetadataTemplateSchemaScopeArg;
function deserializeGetMetadataTemplateSchemaScopeArg(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"GetMetadataTemplateSchemaScopeArg\"";
    }
    if (val == "global") {
        return "global";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeGetMetadataTemplateSchemaScopeArg = deserializeGetMetadataTemplateSchemaScopeArg;
function serializeDeleteMetadataTemplateSchemaScopeArg(val) {
    return val;
}
exports.serializeDeleteMetadataTemplateSchemaScopeArg = serializeDeleteMetadataTemplateSchemaScopeArg;
function deserializeDeleteMetadataTemplateSchemaScopeArg(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"DeleteMetadataTemplateSchemaScopeArg\"";
    }
    if (val == "global") {
        return "global";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeDeleteMetadataTemplateSchemaScopeArg = deserializeDeleteMetadataTemplateSchemaScopeArg;
function serializeGetMetadataTemplateGlobalQueryParamsArg(val) {
    return { ["marker"]: val.marker, ["limit"]: val.limit };
}
exports.serializeGetMetadataTemplateGlobalQueryParamsArg = serializeGetMetadataTemplateGlobalQueryParamsArg;
function deserializeGetMetadataTemplateGlobalQueryParamsArg(val) {
    const marker = (0, json_js_3.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_3.isJson)(val.limit, "number") ? val.limit : void 0;
    return { marker: marker, limit: limit };
}
exports.deserializeGetMetadataTemplateGlobalQueryParamsArg = deserializeGetMetadataTemplateGlobalQueryParamsArg;
function serializeGetMetadataTemplateEnterpriseQueryParamsArg(val) {
    return { ["marker"]: val.marker, ["limit"]: val.limit };
}
exports.serializeGetMetadataTemplateEnterpriseQueryParamsArg = serializeGetMetadataTemplateEnterpriseQueryParamsArg;
function deserializeGetMetadataTemplateEnterpriseQueryParamsArg(val) {
    const marker = (0, json_js_3.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_3.isJson)(val.limit, "number") ? val.limit : void 0;
    return { marker: marker, limit: limit };
}
exports.deserializeGetMetadataTemplateEnterpriseQueryParamsArg = deserializeGetMetadataTemplateEnterpriseQueryParamsArg;
function serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField(val) {
    return val;
}
exports.serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField = serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField;
function deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField\"";
    }
    if (val == "string") {
        return "string";
    }
    if (val == "float") {
        return "float";
    }
    if (val == "date") {
        return "date";
    }
    if (val == "enum") {
        return "enum";
    }
    if (val == "multiSelect") {
        return "multiSelect";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField = deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField;
function serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField(val) {
    return { ["key"]: val.key };
}
exports.serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField = serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField;
function deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField(val) {
    const key = val.key;
    return { key: key };
}
exports.deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField = deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField;
function serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField(val) {
    return { ["type"]: serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField(val.type), ["key"]: val.key, ["displayName"]: val.displayName, ["description"]: val.description, ["hidden"]: val.hidden, ["options"]: val.options == void 0 ? void 0 : val.options.map(function (item) {
            return serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField(item);
        }) };
}
exports.serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField = serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField;
function deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField(val) {
    const type = deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField(val.type);
    const key = val.key;
    const displayName = val.displayName;
    const description = (0, json_js_3.isJson)(val.description, "string") ? val.description : void 0;
    const hidden = (0, json_js_3.isJson)(val.hidden, "boolean") ? val.hidden : void 0;
    const options = (0, json_js_3.isJson)(val.options, "array") ? val.options.map(function (itm) {
        return deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField(itm);
    }) : void 0;
    return { type: type, key: key, displayName: displayName, description: description, hidden: hidden, options: options };
}
exports.deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField = deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField;
function serializeCreateMetadataTemplateSchemaRequestBodyArg(val) {
    return { ["scope"]: val.scope, ["templateKey"]: val.templateKey, ["displayName"]: val.displayName, ["hidden"]: val.hidden, ["fields"]: val.fields == void 0 ? void 0 : val.fields.map(function (item) {
            return serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField(item);
        }), ["copyInstanceOnItemCopy"]: val.copyInstanceOnItemCopy };
}
exports.serializeCreateMetadataTemplateSchemaRequestBodyArg = serializeCreateMetadataTemplateSchemaRequestBodyArg;
function deserializeCreateMetadataTemplateSchemaRequestBodyArg(val) {
    const scope = val.scope;
    const templateKey = (0, json_js_3.isJson)(val.templateKey, "string") ? val.templateKey : void 0;
    const displayName = val.displayName;
    const hidden = (0, json_js_3.isJson)(val.hidden, "boolean") ? val.hidden : void 0;
    const fields = (0, json_js_3.isJson)(val.fields, "array") ? val.fields.map(function (itm) {
        return deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField(itm);
    }) : void 0;
    const copyInstanceOnItemCopy = (0, json_js_3.isJson)(val.copyInstanceOnItemCopy, "boolean") ? val.copyInstanceOnItemCopy : void 0;
    return { scope: scope, templateKey: templateKey, displayName: displayName, hidden: hidden, fields: fields, copyInstanceOnItemCopy: copyInstanceOnItemCopy };
}
exports.deserializeCreateMetadataTemplateSchemaRequestBodyArg = deserializeCreateMetadataTemplateSchemaRequestBodyArg;
//# sourceMappingURL=metadataTemplates.generated.js.map