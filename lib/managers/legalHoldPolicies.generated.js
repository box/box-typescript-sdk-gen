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
exports.newDeserializeUpdateLegalHoldPolicyByIdRequestBodyArg = exports.newSerializeUpdateLegalHoldPolicyByIdRequestBodyArg = exports.newDeserializeCreateLegalHoldPolicyRequestBodyArg = exports.newSerializeCreateLegalHoldPolicyRequestBodyArg = exports.newDeserializeGetLegalHoldPoliciesQueryParamsArg = exports.newSerializeGetLegalHoldPoliciesQueryParamsArg = exports.LegalHoldPoliciesManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class LegalHoldPoliciesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getLegalHoldPolicies(queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policies"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeLegalHoldPolicies)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createLegalHoldPolicy(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policies"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeLegalHoldPolicy)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getLegalHoldPolicyById(legalHoldPolicyId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policies/", legalHoldPolicyId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeLegalHoldPolicy)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateLegalHoldPolicyById(legalHoldPolicyId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policies/", legalHoldPolicyId), { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeLegalHoldPolicy)((0, json_js_1.deserializeJson)(response.text));
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
function newSerializeGetLegalHoldPoliciesQueryParamsArg(val) {
    return { ["policyName"]: val.policyName, ["fields"]: val.fields, ["marker"]: val.marker, ["limit"]: val.limit };
}
exports.newSerializeGetLegalHoldPoliciesQueryParamsArg = newSerializeGetLegalHoldPoliciesQueryParamsArg;
function newDeserializeGetLegalHoldPoliciesQueryParamsArg(val) {
    const policyName = (0, json_js_2.isJson)(val.policyName, "string") ? val.policyName : void 0;
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    return { policyName: policyName, fields: fields, marker: marker, limit: limit };
}
exports.newDeserializeGetLegalHoldPoliciesQueryParamsArg = newDeserializeGetLegalHoldPoliciesQueryParamsArg;
function newSerializeCreateLegalHoldPolicyRequestBodyArg(val) {
    return { ["policyName"]: val.policyName, ["description"]: val.description, ["filterStartedAt"]: val.filterStartedAt, ["filterEndedAt"]: val.filterEndedAt, ["isOngoing"]: val.isOngoing };
}
exports.newSerializeCreateLegalHoldPolicyRequestBodyArg = newSerializeCreateLegalHoldPolicyRequestBodyArg;
function newDeserializeCreateLegalHoldPolicyRequestBodyArg(val) {
    const policyName = val.policyName;
    const description = (0, json_js_2.isJson)(val.description, "string") ? val.description : void 0;
    const filterStartedAt = (0, json_js_2.isJson)(val.filterStartedAt, "string") ? val.filterStartedAt : void 0;
    const filterEndedAt = (0, json_js_2.isJson)(val.filterEndedAt, "string") ? val.filterEndedAt : void 0;
    const isOngoing = (0, json_js_2.isJson)(val.isOngoing, "boolean") ? val.isOngoing : void 0;
    return { policyName: policyName, description: description, filterStartedAt: filterStartedAt, filterEndedAt: filterEndedAt, isOngoing: isOngoing };
}
exports.newDeserializeCreateLegalHoldPolicyRequestBodyArg = newDeserializeCreateLegalHoldPolicyRequestBodyArg;
function newSerializeUpdateLegalHoldPolicyByIdRequestBodyArg(val) {
    return { ["policyName"]: val.policyName, ["description"]: val.description, ["releaseNotes"]: val.releaseNotes };
}
exports.newSerializeUpdateLegalHoldPolicyByIdRequestBodyArg = newSerializeUpdateLegalHoldPolicyByIdRequestBodyArg;
function newDeserializeUpdateLegalHoldPolicyByIdRequestBodyArg(val) {
    const policyName = (0, json_js_2.isJson)(val.policyName, "string") ? val.policyName : void 0;
    const description = (0, json_js_2.isJson)(val.description, "string") ? val.description : void 0;
    const releaseNotes = (0, json_js_2.isJson)(val.releaseNotes, "string") ? val.releaseNotes : void 0;
    return { policyName: policyName, description: description, releaseNotes: releaseNotes };
}
exports.newDeserializeUpdateLegalHoldPolicyByIdRequestBodyArg = newDeserializeUpdateLegalHoldPolicyByIdRequestBodyArg;
//# sourceMappingURL=legalHoldPolicies.generated.js.map