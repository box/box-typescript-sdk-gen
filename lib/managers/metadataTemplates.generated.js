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
exports.deserializeCreateMetadataTemplateSchemaRequestBodyArg = exports.serializeCreateMetadataTemplateSchemaRequestBodyArg = exports.deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField = exports.serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField = exports.deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField = exports.serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField = exports.deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField = exports.serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField = exports.deserializeDeleteMetadataTemplateSchemaScopeArg = exports.serializeDeleteMetadataTemplateSchemaScopeArg = exports.deserializeGetMetadataTemplateSchemaScopeArg = exports.serializeGetMetadataTemplateSchemaScopeArg = exports.MetadataTemplatesManager = exports.CreateMetadataTemplateSchemaHeadersArg = exports.GetMetadataTemplateEnterpriseHeadersArg = exports.GetMetadataTemplateGlobalHeadersArg = exports.GetMetadataTemplateByIdHeadersArg = exports.DeleteMetadataTemplateSchemaHeadersArg = exports.GetMetadataTemplateSchemaHeadersArg = exports.GetMetadataTemplatesHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetMetadataTemplatesHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetMetadataTemplatesHeadersArg = GetMetadataTemplatesHeadersArg;
class GetMetadataTemplateSchemaHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetMetadataTemplateSchemaHeadersArg = GetMetadataTemplateSchemaHeadersArg;
class DeleteMetadataTemplateSchemaHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteMetadataTemplateSchemaHeadersArg = DeleteMetadataTemplateSchemaHeadersArg;
class GetMetadataTemplateByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetMetadataTemplateByIdHeadersArg = GetMetadataTemplateByIdHeadersArg;
class GetMetadataTemplateGlobalHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetMetadataTemplateGlobalHeadersArg = GetMetadataTemplateGlobalHeadersArg;
class GetMetadataTemplateEnterpriseHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetMetadataTemplateEnterpriseHeadersArg = GetMetadataTemplateEnterpriseHeadersArg;
class CreateMetadataTemplateSchemaHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateMetadataTemplateSchemaHeadersArg = CreateMetadataTemplateSchemaHeadersArg;
class MetadataTemplatesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getMetadataTemplates(queryParams, headers = new GetMetadataTemplatesHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["metadata_instance_id"]: (0, utils_js_2.toString)(queryParams.metadataInstanceId) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeMetadataTemplates)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getMetadataTemplateSchema(scope, templateKey, headers = new GetMetadataTemplateSchemaHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/", scope, "/", templateKey, "/schema"), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeMetadataTemplate)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteMetadataTemplateSchema(scope, templateKey, headers = new DeleteMetadataTemplateSchemaHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/", scope, "/", templateKey, "/schema"), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    getMetadataTemplateById(templateId, headers = new GetMetadataTemplateByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/", templateId), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeMetadataTemplate)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getMetadataTemplateGlobal(queryParams = {}, headers = new GetMetadataTemplateGlobalHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["limit"]: (0, utils_js_2.toString)(queryParams.limit) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/global"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeMetadataTemplates)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getMetadataTemplateEnterprise(queryParams = {}, headers = new GetMetadataTemplateEnterpriseHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["limit"]: (0, utils_js_2.toString)(queryParams.limit) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/enterprise"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeMetadataTemplates)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createMetadataTemplateSchema(requestBody, headers = new CreateMetadataTemplateSchemaHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/schema"), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateMetadataTemplateSchemaRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeMetadataTemplate)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.MetadataTemplatesManager = MetadataTemplatesManager;
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