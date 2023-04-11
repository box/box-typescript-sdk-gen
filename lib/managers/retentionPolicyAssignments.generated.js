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
exports.RetentionPolicyAssignmentsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class RetentionPolicyAssignmentsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getRetentionPolicyAssignments(retentionPolicyId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId, "/assignments"), { method: "GET", params: { ["type"]: options.type, ["fields"]: options.fields, ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth });
            return (0, schemas_generated_js_1.deserializeRetentionPolicyAssignments)(deserializeJSON(response.text));
        });
    }
    createRetentionPolicyAssignment(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policy_assignments"), { method: "POST", body: json_js_1.JSON.stringify(requestBody), auth: this.auth });
            return (0, schemas_generated_js_2.deserializeRetentionPolicyAssignment)(deserializeJSON(response.text));
        });
    }
    getRetentionPolicyAssignmentById(retentionPolicyAssignmentId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId), { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth });
            return (0, schemas_generated_js_2.deserializeRetentionPolicyAssignment)(deserializeJSON(response.text));
        });
    }
    deleteRetentionPolicyAssignmentById(retentionPolicyAssignmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId), { method: "DELETE", auth: this.auth });
            return response.content;
        });
    }
    getRetentionPolicyAssignmentFileUnderRetention(retentionPolicyAssignmentId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId, "/files_under_retention"), { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth });
            return (0, schemas_generated_js_3.deserializeFilesUnderRetention)(deserializeJSON(response.text));
        });
    }
    getRetentionPolicyAssignmentFileVersionUnderRetention(retentionPolicyAssignmentId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId, "/file_versions_under_retention"), { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth });
            return (0, schemas_generated_js_3.deserializeFilesUnderRetention)(deserializeJSON(response.text));
        });
    }
}
exports.RetentionPolicyAssignmentsManager = RetentionPolicyAssignmentsManager;
//# sourceMappingURL=retentionPolicyAssignments.generated.js.map