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
exports.TermsOfServicesManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class TermsOfServicesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getTermOfServices(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/terms_of_services"), { method: "GET", params: { ["tos_type"]: options.tosType }, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeTermsOfServices)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createTermOfService(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/terms_of_services"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeTask)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getTermOfServiceById(termsOfServiceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/terms_of_services/", termsOfServiceId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.deserializeTermsOfService)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateTermOfServiceById(termsOfServiceId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/terms_of_services/", termsOfServiceId), { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.deserializeTermsOfService)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.TermsOfServicesManager = TermsOfServicesManager;
//# sourceMappingURL=termsOfServices.generated.js.map