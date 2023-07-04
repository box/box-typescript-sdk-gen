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
exports.newDeserializeUpdateTermOfServiceByIdRequestBodyArg = exports.newSerializeUpdateTermOfServiceByIdRequestBodyArg = exports.newDeserializeUpdateTermOfServiceByIdRequestBodyArgStatusField = exports.newSerializeUpdateTermOfServiceByIdRequestBodyArgStatusField = exports.newDeserializeCreateTermOfServiceRequestBodyArg = exports.newSerializeCreateTermOfServiceRequestBodyArg = exports.newDeserializeCreateTermOfServiceRequestBodyArgTosTypeField = exports.newSerializeCreateTermOfServiceRequestBodyArgTosTypeField = exports.newDeserializeCreateTermOfServiceRequestBodyArgStatusField = exports.newSerializeCreateTermOfServiceRequestBodyArgStatusField = exports.newDeserializeGetTermOfServicesQueryParamsArg = exports.newSerializeGetTermOfServicesQueryParamsArg = exports.newDeserializeGetTermOfServicesQueryParamsArgTosTypeField = exports.newSerializeGetTermOfServicesQueryParamsArgTosTypeField = exports.TermsOfServicesManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class TermsOfServicesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getTermOfServices(queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/terms_of_services"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeTermsOfServices)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createTermOfService(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/terms_of_services"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeTask)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getTermOfServiceById(termsOfServiceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/terms_of_services/", termsOfServiceId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.newDeserializeTermsOfService)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateTermOfServiceById(termsOfServiceId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/terms_of_services/", termsOfServiceId), { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.newDeserializeTermsOfService)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.TermsOfServicesManager = TermsOfServicesManager;
function newSerializeGetTermOfServicesQueryParamsArgTosTypeField(val) {
    return val;
}
exports.newSerializeGetTermOfServicesQueryParamsArgTosTypeField = newSerializeGetTermOfServicesQueryParamsArgTosTypeField;
function newDeserializeGetTermOfServicesQueryParamsArgTosTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"GetTermOfServicesQueryParamsArgTosTypeField\"";
    }
    if (val == "external") {
        return "external";
    }
    if (val == "managed") {
        return "managed";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeGetTermOfServicesQueryParamsArgTosTypeField = newDeserializeGetTermOfServicesQueryParamsArgTosTypeField;
function newSerializeGetTermOfServicesQueryParamsArg(val) {
    return { ["tosType"]: val.tosType == void 0 ? void 0 : newSerializeGetTermOfServicesQueryParamsArgTosTypeField(val.tosType) };
}
exports.newSerializeGetTermOfServicesQueryParamsArg = newSerializeGetTermOfServicesQueryParamsArg;
function newDeserializeGetTermOfServicesQueryParamsArg(val) {
    const tosType = val.tosType == void 0 ? void 0 : newDeserializeGetTermOfServicesQueryParamsArgTosTypeField(val.tosType);
    return { tosType: tosType };
}
exports.newDeserializeGetTermOfServicesQueryParamsArg = newDeserializeGetTermOfServicesQueryParamsArg;
function newSerializeCreateTermOfServiceRequestBodyArgStatusField(val) {
    return val;
}
exports.newSerializeCreateTermOfServiceRequestBodyArgStatusField = newSerializeCreateTermOfServiceRequestBodyArgStatusField;
function newDeserializeCreateTermOfServiceRequestBodyArgStatusField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeCreateTermOfServiceRequestBodyArgStatusField = newDeserializeCreateTermOfServiceRequestBodyArgStatusField;
function newSerializeCreateTermOfServiceRequestBodyArgTosTypeField(val) {
    return val;
}
exports.newSerializeCreateTermOfServiceRequestBodyArgTosTypeField = newSerializeCreateTermOfServiceRequestBodyArgTosTypeField;
function newDeserializeCreateTermOfServiceRequestBodyArgTosTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeCreateTermOfServiceRequestBodyArgTosTypeField = newDeserializeCreateTermOfServiceRequestBodyArgTosTypeField;
function newSerializeCreateTermOfServiceRequestBodyArg(val) {
    return { ["status"]: newSerializeCreateTermOfServiceRequestBodyArgStatusField(val.status), ["tosType"]: val.tosType == void 0 ? void 0 : newSerializeCreateTermOfServiceRequestBodyArgTosTypeField(val.tosType), ["text"]: val.text };
}
exports.newSerializeCreateTermOfServiceRequestBodyArg = newSerializeCreateTermOfServiceRequestBodyArg;
function newDeserializeCreateTermOfServiceRequestBodyArg(val) {
    const status = newDeserializeCreateTermOfServiceRequestBodyArgStatusField(val.status);
    const tosType = val.tosType == void 0 ? void 0 : newDeserializeCreateTermOfServiceRequestBodyArgTosTypeField(val.tosType);
    const text = val.text;
    return { status: status, tosType: tosType, text: text };
}
exports.newDeserializeCreateTermOfServiceRequestBodyArg = newDeserializeCreateTermOfServiceRequestBodyArg;
function newSerializeUpdateTermOfServiceByIdRequestBodyArgStatusField(val) {
    return val;
}
exports.newSerializeUpdateTermOfServiceByIdRequestBodyArgStatusField = newSerializeUpdateTermOfServiceByIdRequestBodyArgStatusField;
function newDeserializeUpdateTermOfServiceByIdRequestBodyArgStatusField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeUpdateTermOfServiceByIdRequestBodyArgStatusField = newDeserializeUpdateTermOfServiceByIdRequestBodyArgStatusField;
function newSerializeUpdateTermOfServiceByIdRequestBodyArg(val) {
    return { ["status"]: newSerializeUpdateTermOfServiceByIdRequestBodyArgStatusField(val.status), ["text"]: val.text };
}
exports.newSerializeUpdateTermOfServiceByIdRequestBodyArg = newSerializeUpdateTermOfServiceByIdRequestBodyArg;
function newDeserializeUpdateTermOfServiceByIdRequestBodyArg(val) {
    const status = newDeserializeUpdateTermOfServiceByIdRequestBodyArgStatusField(val.status);
    const text = val.text;
    return { status: status, text: text };
}
exports.newDeserializeUpdateTermOfServiceByIdRequestBodyArg = newDeserializeUpdateTermOfServiceByIdRequestBodyArg;
//# sourceMappingURL=termsOfServices.generated.js.map