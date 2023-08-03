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
exports.deserializeUpdateTermOfServiceByIdRequestBodyArg = exports.serializeUpdateTermOfServiceByIdRequestBodyArg = exports.deserializeUpdateTermOfServiceByIdRequestBodyArgStatusField = exports.serializeUpdateTermOfServiceByIdRequestBodyArgStatusField = exports.deserializeCreateTermOfServiceRequestBodyArg = exports.serializeCreateTermOfServiceRequestBodyArg = exports.deserializeCreateTermOfServiceRequestBodyArgTosTypeField = exports.serializeCreateTermOfServiceRequestBodyArgTosTypeField = exports.deserializeCreateTermOfServiceRequestBodyArgStatusField = exports.serializeCreateTermOfServiceRequestBodyArgStatusField = exports.TermsOfServicesManager = exports.UpdateTermOfServiceByIdHeadersArg = exports.GetTermOfServiceByIdHeadersArg = exports.CreateTermOfServiceHeadersArg = exports.GetTermOfServicesHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetTermOfServicesHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetTermOfServicesHeadersArg = GetTermOfServicesHeadersArg;
class CreateTermOfServiceHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateTermOfServiceHeadersArg = CreateTermOfServiceHeadersArg;
class GetTermOfServiceByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetTermOfServiceByIdHeadersArg = GetTermOfServiceByIdHeadersArg;
class UpdateTermOfServiceByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UpdateTermOfServiceByIdHeadersArg = UpdateTermOfServiceByIdHeadersArg;
class TermsOfServicesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getTermOfServices(queryParams = {}, headers = new GetTermOfServicesHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["tos_type"]: (0, utils_js_2.toString)(queryParams.tosType) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/terms_of_services"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeTermsOfServices)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createTermOfService(requestBody, headers = new CreateTermOfServiceHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/terms_of_services"), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateTermOfServiceRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeTask)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getTermOfServiceById(termsOfServiceId, headers = new GetTermOfServiceByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/terms_of_services/", termsOfServiceId), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.deserializeTermsOfService)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateTermOfServiceById(termsOfServiceId, requestBody, headers = new UpdateTermOfServiceByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/terms_of_services/", termsOfServiceId), { method: "PUT", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeUpdateTermOfServiceByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.deserializeTermsOfService)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.TermsOfServicesManager = TermsOfServicesManager;
function serializeCreateTermOfServiceRequestBodyArgStatusField(val) {
    return val;
}
exports.serializeCreateTermOfServiceRequestBodyArgStatusField = serializeCreateTermOfServiceRequestBodyArgStatusField;
function deserializeCreateTermOfServiceRequestBodyArgStatusField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateTermOfServiceRequestBodyArgStatusField\"";
    }
    if (val == "enabled") {
        return "enabled";
    }
    if (val == "disabled") {
        return "disabled";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateTermOfServiceRequestBodyArgStatusField = deserializeCreateTermOfServiceRequestBodyArgStatusField;
function serializeCreateTermOfServiceRequestBodyArgTosTypeField(val) {
    return val;
}
exports.serializeCreateTermOfServiceRequestBodyArgTosTypeField = serializeCreateTermOfServiceRequestBodyArgTosTypeField;
function deserializeCreateTermOfServiceRequestBodyArgTosTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateTermOfServiceRequestBodyArgTosTypeField\"";
    }
    if (val == "external") {
        return "external";
    }
    if (val == "managed") {
        return "managed";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateTermOfServiceRequestBodyArgTosTypeField = deserializeCreateTermOfServiceRequestBodyArgTosTypeField;
function serializeCreateTermOfServiceRequestBodyArg(val) {
    return { ["status"]: serializeCreateTermOfServiceRequestBodyArgStatusField(val.status), ["tos_type"]: val.tosType == void 0 ? void 0 : serializeCreateTermOfServiceRequestBodyArgTosTypeField(val.tosType), ["text"]: val.text };
}
exports.serializeCreateTermOfServiceRequestBodyArg = serializeCreateTermOfServiceRequestBodyArg;
function deserializeCreateTermOfServiceRequestBodyArg(val) {
    const status = deserializeCreateTermOfServiceRequestBodyArgStatusField(val.status);
    const tosType = val.tos_type == void 0 ? void 0 : deserializeCreateTermOfServiceRequestBodyArgTosTypeField(val.tos_type);
    const text = val.text;
    return { status: status, tosType: tosType, text: text };
}
exports.deserializeCreateTermOfServiceRequestBodyArg = deserializeCreateTermOfServiceRequestBodyArg;
function serializeUpdateTermOfServiceByIdRequestBodyArgStatusField(val) {
    return val;
}
exports.serializeUpdateTermOfServiceByIdRequestBodyArgStatusField = serializeUpdateTermOfServiceByIdRequestBodyArgStatusField;
function deserializeUpdateTermOfServiceByIdRequestBodyArgStatusField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateTermOfServiceByIdRequestBodyArgStatusField\"";
    }
    if (val == "enabled") {
        return "enabled";
    }
    if (val == "disabled") {
        return "disabled";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUpdateTermOfServiceByIdRequestBodyArgStatusField = deserializeUpdateTermOfServiceByIdRequestBodyArgStatusField;
function serializeUpdateTermOfServiceByIdRequestBodyArg(val) {
    return { ["status"]: serializeUpdateTermOfServiceByIdRequestBodyArgStatusField(val.status), ["text"]: val.text };
}
exports.serializeUpdateTermOfServiceByIdRequestBodyArg = serializeUpdateTermOfServiceByIdRequestBodyArg;
function deserializeUpdateTermOfServiceByIdRequestBodyArg(val) {
    const status = deserializeUpdateTermOfServiceByIdRequestBodyArgStatusField(val.status);
    const text = val.text;
    return { status: status, text: text };
}
exports.deserializeUpdateTermOfServiceByIdRequestBodyArg = deserializeUpdateTermOfServiceByIdRequestBodyArg;
//# sourceMappingURL=termsOfServices.generated.js.map