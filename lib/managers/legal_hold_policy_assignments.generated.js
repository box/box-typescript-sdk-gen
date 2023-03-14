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
exports.LegalHoldPolicyAssignmentsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class LegalHoldPolicyAssignmentsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getLegalHoldPolicyAssignments(policyId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policy_assignments"), { method: "GET", params: { ["policy_id"]: policyId, ["assign_to_type"]: options.assignToType, ["assign_to_id"]: options.assignToId, ["marker"]: options.marker, ["limit"]: options.limit, ["fields"]: options.fields }, auth: this.auth });
            return yield (0, schemas_generated_js_1.deserializeLegalHoldPolicyAssignments)((0, json_js_1.deserializeJSON)(response.text));
        });
    }
    postLegalHoldPolicyAssignments(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policy_assignments"), { method: "POST", body: JSON.stringify(requestBody), auth: this.auth });
            return yield (0, schemas_generated_js_2.deserializeLegalHoldPolicyAssignment)((0, json_js_1.deserializeJSON)(response.text));
        });
    }
    getLegalHoldPolicyAssignmentsId(legalHoldPolicyAssignmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId), { method: "GET", auth: this.auth });
            return yield (0, schemas_generated_js_2.deserializeLegalHoldPolicyAssignment)((0, json_js_1.deserializeJSON)(response.text));
        });
    }
    deleteLegalHoldPolicyAssignmentsId(legalHoldPolicyAssignmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId), { method: "DELETE", auth: this.auth });
            return response.content;
        });
    }
    getLegalHoldPolicyAssignmentsIdFilesOnHold(legalHoldPolicyAssignmentId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId, "/files_on_hold"), { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit, ["fields"]: options.fields }, auth: this.auth });
            return yield (0, schemas_generated_js_3.deserializeFileVersionLegalHolds)((0, json_js_1.deserializeJSON)(response.text));
        });
    }
    getLegalHoldPolicyAssignmentsIdFileVersionsOnHold(legalHoldPolicyAssignmentId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId, "/file_versions_on_hold"), { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit, ["fields"]: options.fields }, auth: this.auth });
            return yield (0, schemas_generated_js_3.deserializeFileVersionLegalHolds)((0, json_js_1.deserializeJSON)(response.text));
        });
    }
}
exports.LegalHoldPolicyAssignmentsManager = LegalHoldPolicyAssignmentsManager;
//# sourceMappingURL=legal_hold_policy_assignments.generated.js.map