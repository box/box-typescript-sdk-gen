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
exports.SignRequestsManager = exports.CreateSignRequestHeadersArg = exports.GetSignRequestsHeadersArg = exports.GetSignRequestByIdHeadersArg = exports.ResendSignRequestHeadersArg = exports.CancelSignRequestHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class CancelSignRequestHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CancelSignRequestHeadersArg = CancelSignRequestHeadersArg;
class ResendSignRequestHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.ResendSignRequestHeadersArg = ResendSignRequestHeadersArg;
class GetSignRequestByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetSignRequestByIdHeadersArg = GetSignRequestByIdHeadersArg;
class GetSignRequestsHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetSignRequestsHeadersArg = GetSignRequestsHeadersArg;
class CreateSignRequestHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateSignRequestHeadersArg = CreateSignRequestHeadersArg;
class SignRequestsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    cancelSignRequest(signRequestId, headers = new CancelSignRequestHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/sign_requests/", signRequestId, "/cancel"), { method: "POST", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeSignRequest)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    resendSignRequest(signRequestId, headers = new ResendSignRequestHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/sign_requests/", signRequestId, "/resend"), { method: "POST", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    getSignRequestById(signRequestId, headers = new GetSignRequestByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/sign_requests/", signRequestId), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeSignRequest)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getSignRequests(queryParams = {}, headers = new GetSignRequestsHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["limit"]: (0, utils_js_2.toString)(queryParams.limit) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/sign_requests"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeSignRequests)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createSignRequest(requestBody, headers = new CreateSignRequestHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/sign_requests"), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)((0, schemas_generated_js_3.serializeSignRequestCreateRequest)(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeSignRequest)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.SignRequestsManager = SignRequestsManager;
//# sourceMappingURL=signRequests.generated.js.map