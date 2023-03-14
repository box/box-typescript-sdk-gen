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
exports.RetentionPoliciesManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class RetentionPoliciesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getRetentionPolicies(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policies"), { method: "GET", params: { ["policy_name"]: options.policyName, ["policy_type"]: options.policyType, ["created_by_user_id"]: options.createdByUserId, ["fields"]: options.fields, ["limit"]: options.limit, ["marker"]: options.marker }, auth: this.auth });
            return yield (0, schemas_generated_js_1.deserializeRetentionPolicies)((0, json_js_1.deserializeJSON)(response.text));
        });
    }
    postRetentionPolicies(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policies"), { method: "POST", body: JSON.stringify(requestBody), auth: this.auth });
            return yield (0, schemas_generated_js_2.deserializeRetentionPolicy)((0, json_js_1.deserializeJSON)(response.text));
        });
    }
    getRetentionPoliciesId(retentionPolicyId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId), { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth });
            return yield (0, schemas_generated_js_2.deserializeRetentionPolicy)((0, json_js_1.deserializeJSON)(response.text));
        });
    }
    putRetentionPoliciesId(retentionPolicyId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId), { method: "PUT", body: JSON.stringify(requestBody), auth: this.auth });
            return yield (0, schemas_generated_js_2.deserializeRetentionPolicy)((0, json_js_1.deserializeJSON)(response.text));
        });
    }
    deleteRetentionPoliciesId(retentionPolicyId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId), { method: "DELETE", auth: this.auth });
            return response.content;
        });
    }
}
exports.RetentionPoliciesManager = RetentionPoliciesManager;
//# sourceMappingURL=retention_policies.generated.js.map