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
exports.SignRequestsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class SignRequestsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    createSignRequestCancel(signRequestId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/sign_requests/", signRequestId, "/cancel"), { method: "POST", auth: this.auth });
            return (0, schemas_generated_js_1.deserializeSignRequest)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createSignRequestResend(signRequestId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/sign_requests/", signRequestId, "/resend"), { method: "POST", auth: this.auth });
            return response.content;
        });
    }
    getSignRequestById(signRequestId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/sign_requests/", signRequestId), { method: "GET", auth: this.auth });
            return (0, schemas_generated_js_1.deserializeSignRequest)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getSignRequests(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/sign_requests"), { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth });
            return (0, schemas_generated_js_2.deserializeSignRequests)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createSignRequest(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/sign_requests"), { method: "POST", body: (0, json_js_2.serializeJson)((0, schemas_generated_js_3.serializeSignRequestCreateRequest)(requestBody)), contentType: "application/json", auth: this.auth });
            return (0, schemas_generated_js_1.deserializeSignRequest)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.SignRequestsManager = SignRequestsManager;
//# sourceMappingURL=signRequests.generated.js.map