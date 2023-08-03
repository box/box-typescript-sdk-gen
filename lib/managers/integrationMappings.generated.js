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
exports.deserializeUpdateIntegrationMappingSlackByIdRequestBodyArg = exports.serializeUpdateIntegrationMappingSlackByIdRequestBodyArg = exports.deserializeUpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField = exports.serializeUpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField = exports.deserializeUpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField = exports.serializeUpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField = exports.IntegrationMappingsManager = exports.DeleteIntegrationMappingSlackByIdHeadersArg = exports.UpdateIntegrationMappingSlackByIdHeadersArg = exports.CreateIntegrationMappingSlackHeadersArg = exports.GetIntegrationMappingSlackHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class GetIntegrationMappingSlackHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetIntegrationMappingSlackHeadersArg = GetIntegrationMappingSlackHeadersArg;
class CreateIntegrationMappingSlackHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateIntegrationMappingSlackHeadersArg = CreateIntegrationMappingSlackHeadersArg;
class UpdateIntegrationMappingSlackByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UpdateIntegrationMappingSlackByIdHeadersArg = UpdateIntegrationMappingSlackByIdHeadersArg;
class DeleteIntegrationMappingSlackByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteIntegrationMappingSlackByIdHeadersArg = DeleteIntegrationMappingSlackByIdHeadersArg;
class IntegrationMappingsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getIntegrationMappingSlack(queryParams = {}, headers = new GetIntegrationMappingSlackHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["partner_item_type"]: (0, utils_js_2.toString)(queryParams.partnerItemType), ["partner_item_id"]: (0, utils_js_2.toString)(queryParams.partnerItemId), ["box_item_id"]: (0, utils_js_2.toString)(queryParams.boxItemId), ["box_item_type"]: (0, utils_js_2.toString)(queryParams.boxItemType), ["is_manually_created"]: (0, utils_js_2.toString)(queryParams.isManuallyCreated) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/integration_mappings/slack"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeIntegrationMappings)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createIntegrationMappingSlack(requestBody, headers = new CreateIntegrationMappingSlackHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/integration_mappings/slack"), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)((0, schemas_generated_js_3.serializeIntegrationMappingSlackCreateRequest)(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeIntegrationMapping)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateIntegrationMappingSlackById(integrationMappingId, requestBody, headers = new UpdateIntegrationMappingSlackByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/integration_mappings/slack/", integrationMappingId), { method: "PUT", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeUpdateIntegrationMappingSlackByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeIntegrationMapping)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteIntegrationMappingSlackById(integrationMappingId, headers = new DeleteIntegrationMappingSlackByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/integration_mappings/slack/", integrationMappingId), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
}
exports.IntegrationMappingsManager = IntegrationMappingsManager;
function serializeUpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField(val) {
    return {};
}
exports.serializeUpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField = serializeUpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField;
function deserializeUpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField(val) {
    return {};
}
exports.deserializeUpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField = deserializeUpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField;
function serializeUpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField(val) {
    return {};
}
exports.serializeUpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField = serializeUpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField;
function deserializeUpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField(val) {
    return {};
}
exports.deserializeUpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField = deserializeUpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField;
function serializeUpdateIntegrationMappingSlackByIdRequestBodyArg(val) {
    return { ["box_item"]: val.boxItem == void 0 ? void 0 : serializeUpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField(val.boxItem), ["options"]: val.options == void 0 ? void 0 : serializeUpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField(val.options) };
}
exports.serializeUpdateIntegrationMappingSlackByIdRequestBodyArg = serializeUpdateIntegrationMappingSlackByIdRequestBodyArg;
function deserializeUpdateIntegrationMappingSlackByIdRequestBodyArg(val) {
    const boxItem = val.box_item == void 0 ? void 0 : deserializeUpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField(val.box_item);
    const options = val.options == void 0 ? void 0 : deserializeUpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField(val.options);
    return { boxItem: boxItem, options: options };
}
exports.deserializeUpdateIntegrationMappingSlackByIdRequestBodyArg = deserializeUpdateIntegrationMappingSlackByIdRequestBodyArg;
//# sourceMappingURL=integrationMappings.generated.js.map