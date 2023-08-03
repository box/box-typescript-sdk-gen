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
exports.deserializeCreateShieldInformationBarrierChangeStatusRequestBodyArg = exports.serializeCreateShieldInformationBarrierChangeStatusRequestBodyArg = exports.deserializeCreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField = exports.serializeCreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField = exports.ShieldInformationBarriersManager = exports.CreateShieldInformationBarrierHeadersArg = exports.GetShieldInformationBarriersHeadersArg = exports.CreateShieldInformationBarrierChangeStatusHeadersArg = exports.GetShieldInformationBarrierByIdHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetShieldInformationBarrierByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetShieldInformationBarrierByIdHeadersArg = GetShieldInformationBarrierByIdHeadersArg;
class CreateShieldInformationBarrierChangeStatusHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateShieldInformationBarrierChangeStatusHeadersArg = CreateShieldInformationBarrierChangeStatusHeadersArg;
class GetShieldInformationBarriersHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetShieldInformationBarriersHeadersArg = GetShieldInformationBarriersHeadersArg;
class CreateShieldInformationBarrierHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateShieldInformationBarrierHeadersArg = CreateShieldInformationBarrierHeadersArg;
class ShieldInformationBarriersManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getShieldInformationBarrierById(shieldInformationBarrierId, headers = new GetShieldInformationBarrierByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barriers/", shieldInformationBarrierId), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeShieldInformationBarrier)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createShieldInformationBarrierChangeStatus(requestBody, headers = new CreateShieldInformationBarrierChangeStatusHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barriers/change_status"), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateShieldInformationBarrierChangeStatusRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeShieldInformationBarrier)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getShieldInformationBarriers(queryParams = {}, headers = new GetShieldInformationBarriersHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["limit"]: (0, utils_js_2.toString)(queryParams.limit) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barriers"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    createShieldInformationBarrier(requestBody, headers = new CreateShieldInformationBarrierHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barriers"), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)((0, schemas_generated_js_1.serializeShieldInformationBarrier)(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeShieldInformationBarrier)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.ShieldInformationBarriersManager = ShieldInformationBarriersManager;
function serializeCreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField(val) {
    return val;
}
exports.serializeCreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField = serializeCreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField;
function deserializeCreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField\"";
    }
    if (val == "pending") {
        return "pending";
    }
    if (val == "disabled") {
        return "disabled";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField = deserializeCreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField;
function serializeCreateShieldInformationBarrierChangeStatusRequestBodyArg(val) {
    return { ["id"]: val.id, ["status"]: serializeCreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField(val.status) };
}
exports.serializeCreateShieldInformationBarrierChangeStatusRequestBodyArg = serializeCreateShieldInformationBarrierChangeStatusRequestBodyArg;
function deserializeCreateShieldInformationBarrierChangeStatusRequestBodyArg(val) {
    const id = val.id;
    const status = deserializeCreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField(val.status);
    return { id: id, status: status };
}
exports.deserializeCreateShieldInformationBarrierChangeStatusRequestBodyArg = deserializeCreateShieldInformationBarrierChangeStatusRequestBodyArg;
//# sourceMappingURL=shieldInformationBarriers.generated.js.map