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
exports.CollaborationAllowlistExemptTargetsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class CollaborationAllowlistExemptTargetsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getCollaborationWhitelistExemptTargets(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets"), { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth });
            return (0, schemas_generated_js_1.deserializeCollaborationAllowlistExemptTargets)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createCollaborationWhitelistExemptTarget(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth });
            return (0, schemas_generated_js_2.deserializeCollaborationAllowlistExemptTarget)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets/", collaborationWhitelistExemptTargetId), { method: "GET", auth: this.auth });
            return (0, schemas_generated_js_2.deserializeCollaborationAllowlistExemptTarget)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets/", collaborationWhitelistExemptTargetId), { method: "DELETE", auth: this.auth });
            return response.content;
        });
    }
}
exports.CollaborationAllowlistExemptTargetsManager = CollaborationAllowlistExemptTargetsManager;
//# sourceMappingURL=collaborationAllowlistExemptTargets.generated.js.map