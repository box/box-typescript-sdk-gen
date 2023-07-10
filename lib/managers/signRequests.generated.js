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
exports.deserializeGetSignRequestsQueryParamsArg = exports.serializeGetSignRequestsQueryParamsArg = exports.SignRequestsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class SignRequestsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    cancelSignRequest(signRequestId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/sign_requests/", signRequestId, "/cancel"), { method: "POST", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeSignRequest)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    resendSignRequest(signRequestId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/sign_requests/", signRequestId, "/resend"), { method: "POST", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
    getSignRequestById(signRequestId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/sign_requests/", signRequestId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeSignRequest)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getSignRequests(queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/sign_requests"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeSignRequests)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createSignRequest(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/sign_requests"), { method: "POST", body: (0, json_js_2.serializeJson)((0, schemas_generated_js_3.serializeSignRequestCreateRequest)(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeSignRequest)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.SignRequestsManager = SignRequestsManager;
function serializeGetSignRequestsQueryParamsArg(val) {
    return { ["marker"]: val.marker, ["limit"]: val.limit };
}
exports.serializeGetSignRequestsQueryParamsArg = serializeGetSignRequestsQueryParamsArg;
function deserializeGetSignRequestsQueryParamsArg(val) {
    const marker = (0, json_js_3.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_3.isJson)(val.limit, "number") ? val.limit : void 0;
    return { marker: marker, limit: limit };
}
exports.deserializeGetSignRequestsQueryParamsArg = deserializeGetSignRequestsQueryParamsArg;
//# sourceMappingURL=signRequests.generated.js.map