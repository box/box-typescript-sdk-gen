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
exports.deserializeUpdateIntegrationMappingSlackByIdRequestBodyArg = exports.serializeUpdateIntegrationMappingSlackByIdRequestBodyArg = exports.deserializeUpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField = exports.serializeUpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField = exports.deserializeUpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField = exports.serializeUpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField = exports.deserializeGetIntegrationMappingSlackQueryParamsArg = exports.serializeGetIntegrationMappingSlackQueryParamsArg = exports.deserializeGetIntegrationMappingSlackQueryParamsArgBoxItemTypeField = exports.serializeGetIntegrationMappingSlackQueryParamsArgBoxItemTypeField = exports.deserializeGetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField = exports.serializeGetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField = exports.IntegrationMappingsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class IntegrationMappingsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getIntegrationMappingSlack(queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/integration_mappings/slack"), { method: "GET", params: (0, utils_js_1.prepareParams)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeIntegrationMappings)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createIntegrationMappingSlack(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/integration_mappings/slack"), { method: "POST", body: (0, json_js_2.serializeJson)((0, schemas_generated_js_3.serializeIntegrationMappingSlackCreateRequest)(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeIntegrationMapping)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateIntegrationMappingSlackById(integrationMappingId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/integration_mappings/slack/", integrationMappingId), { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeIntegrationMapping)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteIntegrationMappingSlackById(integrationMappingId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/integration_mappings/slack/", integrationMappingId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.IntegrationMappingsManager = IntegrationMappingsManager;
function serializeGetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField(val) {
    return val;
}
exports.serializeGetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField = serializeGetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField;
function deserializeGetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"GetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField\"";
    }
    if (val == "channel") {
        return "channel";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeGetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField = deserializeGetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField;
function serializeGetIntegrationMappingSlackQueryParamsArgBoxItemTypeField(val) {
    return val;
}
exports.serializeGetIntegrationMappingSlackQueryParamsArgBoxItemTypeField = serializeGetIntegrationMappingSlackQueryParamsArgBoxItemTypeField;
function deserializeGetIntegrationMappingSlackQueryParamsArgBoxItemTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"GetIntegrationMappingSlackQueryParamsArgBoxItemTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeGetIntegrationMappingSlackQueryParamsArgBoxItemTypeField = deserializeGetIntegrationMappingSlackQueryParamsArgBoxItemTypeField;
function serializeGetIntegrationMappingSlackQueryParamsArg(val) {
    return { ["marker"]: val.marker, ["limit"]: val.limit, ["partnerItemType"]: val.partnerItemType == void 0 ? void 0 : serializeGetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField(val.partnerItemType), ["partnerItemId"]: val.partnerItemId, ["boxItemId"]: val.boxItemId, ["boxItemType"]: val.boxItemType == void 0 ? void 0 : serializeGetIntegrationMappingSlackQueryParamsArgBoxItemTypeField(val.boxItemType), ["isManuallyCreated"]: val.isManuallyCreated };
}
exports.serializeGetIntegrationMappingSlackQueryParamsArg = serializeGetIntegrationMappingSlackQueryParamsArg;
function deserializeGetIntegrationMappingSlackQueryParamsArg(val) {
    const marker = (0, json_js_3.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_3.isJson)(val.limit, "number") ? val.limit : void 0;
    const partnerItemType = val.partnerItemType == void 0 ? void 0 : deserializeGetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField(val.partnerItemType);
    const partnerItemId = (0, json_js_3.isJson)(val.partnerItemId, "string") ? val.partnerItemId : void 0;
    const boxItemId = (0, json_js_3.isJson)(val.boxItemId, "string") ? val.boxItemId : void 0;
    const boxItemType = val.boxItemType == void 0 ? void 0 : deserializeGetIntegrationMappingSlackQueryParamsArgBoxItemTypeField(val.boxItemType);
    const isManuallyCreated = (0, json_js_3.isJson)(val.isManuallyCreated, "boolean") ? val.isManuallyCreated : void 0;
    return { marker: marker, limit: limit, partnerItemType: partnerItemType, partnerItemId: partnerItemId, boxItemId: boxItemId, boxItemType: boxItemType, isManuallyCreated: isManuallyCreated };
}
exports.deserializeGetIntegrationMappingSlackQueryParamsArg = deserializeGetIntegrationMappingSlackQueryParamsArg;
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
    return { ["boxItem"]: val.boxItem == void 0 ? void 0 : serializeUpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField(val.boxItem), ["options"]: val.options == void 0 ? void 0 : serializeUpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField(val.options) };
}
exports.serializeUpdateIntegrationMappingSlackByIdRequestBodyArg = serializeUpdateIntegrationMappingSlackByIdRequestBodyArg;
function deserializeUpdateIntegrationMappingSlackByIdRequestBodyArg(val) {
    const boxItem = val.boxItem == void 0 ? void 0 : deserializeUpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField(val.boxItem);
    const options = val.options == void 0 ? void 0 : deserializeUpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField(val.options);
    return { boxItem: boxItem, options: options };
}
exports.deserializeUpdateIntegrationMappingSlackByIdRequestBodyArg = deserializeUpdateIntegrationMappingSlackByIdRequestBodyArg;
//# sourceMappingURL=integrationMappings.generated.js.map