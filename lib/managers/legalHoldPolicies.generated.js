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
exports.LegalHoldPoliciesManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class LegalHoldPoliciesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getLegalHoldPolicies(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policies"), { method: "GET", params: { ["policy_name"]: options.policyName, ["fields"]: options.fields, ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeLegalHoldPolicies)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createLegalHoldPolicy(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policies"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeLegalHoldPolicy)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getLegalHoldPolicyById(legalHoldPolicyId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policies/", legalHoldPolicyId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeLegalHoldPolicy)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateLegalHoldPolicyById(legalHoldPolicyId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policies/", legalHoldPolicyId), { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeLegalHoldPolicy)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteLegalHoldPolicyById(legalHoldPolicyId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policies/", legalHoldPolicyId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.LegalHoldPoliciesManager = LegalHoldPoliciesManager;
//# sourceMappingURL=legalHoldPolicies.generated.js.map