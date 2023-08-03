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
exports.deserializeUpdateLegalHoldPolicyByIdRequestBodyArg = exports.serializeUpdateLegalHoldPolicyByIdRequestBodyArg = exports.deserializeCreateLegalHoldPolicyRequestBodyArg = exports.serializeCreateLegalHoldPolicyRequestBodyArg = exports.LegalHoldPoliciesManager = exports.DeleteLegalHoldPolicyByIdHeadersArg = exports.UpdateLegalHoldPolicyByIdHeadersArg = exports.GetLegalHoldPolicyByIdHeadersArg = exports.CreateLegalHoldPolicyHeadersArg = exports.GetLegalHoldPoliciesHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetLegalHoldPoliciesHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetLegalHoldPoliciesHeadersArg = GetLegalHoldPoliciesHeadersArg;
class CreateLegalHoldPolicyHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateLegalHoldPolicyHeadersArg = CreateLegalHoldPolicyHeadersArg;
class GetLegalHoldPolicyByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetLegalHoldPolicyByIdHeadersArg = GetLegalHoldPolicyByIdHeadersArg;
class UpdateLegalHoldPolicyByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UpdateLegalHoldPolicyByIdHeadersArg = UpdateLegalHoldPolicyByIdHeadersArg;
class DeleteLegalHoldPolicyByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteLegalHoldPolicyByIdHeadersArg = DeleteLegalHoldPolicyByIdHeadersArg;
class LegalHoldPoliciesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getLegalHoldPolicies(queryParams = {}, headers = new GetLegalHoldPoliciesHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["policy_name"]: (0, utils_js_2.toString)(queryParams.policyName), ["fields"]: (0, utils_js_2.toString)(queryParams.fields), ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["limit"]: (0, utils_js_2.toString)(queryParams.limit) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policies"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeLegalHoldPolicies)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createLegalHoldPolicy(requestBody, headers = new CreateLegalHoldPolicyHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policies"), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateLegalHoldPolicyRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeLegalHoldPolicy)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getLegalHoldPolicyById(legalHoldPolicyId, headers = new GetLegalHoldPolicyByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policies/", legalHoldPolicyId), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeLegalHoldPolicy)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateLegalHoldPolicyById(legalHoldPolicyId, requestBody, headers = new UpdateLegalHoldPolicyByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policies/", legalHoldPolicyId), { method: "PUT", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeUpdateLegalHoldPolicyByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeLegalHoldPolicy)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteLegalHoldPolicyById(legalHoldPolicyId, headers = new DeleteLegalHoldPolicyByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policies/", legalHoldPolicyId), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
}
exports.LegalHoldPoliciesManager = LegalHoldPoliciesManager;
function serializeCreateLegalHoldPolicyRequestBodyArg(val) {
    return { ["policy_name"]: val.policyName, ["description"]: val.description, ["filter_started_at"]: val.filterStartedAt, ["filter_ended_at"]: val.filterEndedAt, ["is_ongoing"]: val.isOngoing };
}
exports.serializeCreateLegalHoldPolicyRequestBodyArg = serializeCreateLegalHoldPolicyRequestBodyArg;
function deserializeCreateLegalHoldPolicyRequestBodyArg(val) {
    const policyName = val.policy_name;
    const description = (0, json_js_3.isJson)(val.description, "string") ? val.description : void 0;
    const filterStartedAt = (0, json_js_3.isJson)(val.filter_started_at, "string") ? val.filter_started_at : void 0;
    const filterEndedAt = (0, json_js_3.isJson)(val.filter_ended_at, "string") ? val.filter_ended_at : void 0;
    const isOngoing = (0, json_js_3.isJson)(val.is_ongoing, "boolean") ? val.is_ongoing : void 0;
    return { policyName: policyName, description: description, filterStartedAt: filterStartedAt, filterEndedAt: filterEndedAt, isOngoing: isOngoing };
}
exports.deserializeCreateLegalHoldPolicyRequestBodyArg = deserializeCreateLegalHoldPolicyRequestBodyArg;
function serializeUpdateLegalHoldPolicyByIdRequestBodyArg(val) {
    return { ["policy_name"]: val.policyName, ["description"]: val.description, ["release_notes"]: val.releaseNotes };
}
exports.serializeUpdateLegalHoldPolicyByIdRequestBodyArg = serializeUpdateLegalHoldPolicyByIdRequestBodyArg;
function deserializeUpdateLegalHoldPolicyByIdRequestBodyArg(val) {
    const policyName = (0, json_js_3.isJson)(val.policy_name, "string") ? val.policy_name : void 0;
    const description = (0, json_js_3.isJson)(val.description, "string") ? val.description : void 0;
    const releaseNotes = (0, json_js_3.isJson)(val.release_notes, "string") ? val.release_notes : void 0;
    return { policyName: policyName, description: description, releaseNotes: releaseNotes };
}
exports.deserializeUpdateLegalHoldPolicyByIdRequestBodyArg = deserializeUpdateLegalHoldPolicyByIdRequestBodyArg;
//# sourceMappingURL=legalHoldPolicies.generated.js.map