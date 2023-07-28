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
exports.deserializeCreateCollaborationWhitelistExemptTargetRequestBodyArg = exports.serializeCreateCollaborationWhitelistExemptTargetRequestBodyArg = exports.deserializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField = exports.serializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField = exports.deserializeGetCollaborationWhitelistExemptTargetsQueryParamsArg = exports.serializeGetCollaborationWhitelistExemptTargetsQueryParamsArg = exports.CollaborationAllowlistExemptTargetsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class CollaborationAllowlistExemptTargetsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getCollaborationWhitelistExemptTargets(queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["limit"]: (0, utils_js_2.toString)(queryParams.limit) });
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets"), { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeCollaborationAllowlistExemptTargets)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createCollaborationWhitelistExemptTarget(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets"), { method: "POST", body: (0, json_js_2.serializeJson)(serializeCreateCollaborationWhitelistExemptTargetRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeCollaborationAllowlistExemptTarget)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets/", collaborationWhitelistExemptTargetId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeCollaborationAllowlistExemptTarget)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets/", collaborationWhitelistExemptTargetId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.CollaborationAllowlistExemptTargetsManager = CollaborationAllowlistExemptTargetsManager;
function serializeGetCollaborationWhitelistExemptTargetsQueryParamsArg(val) {
    return { ["marker"]: val.marker, ["limit"]: val.limit };
}
exports.serializeGetCollaborationWhitelistExemptTargetsQueryParamsArg = serializeGetCollaborationWhitelistExemptTargetsQueryParamsArg;
function deserializeGetCollaborationWhitelistExemptTargetsQueryParamsArg(val) {
    const marker = (0, json_js_3.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_3.isJson)(val.limit, "number") ? val.limit : void 0;
    return { marker: marker, limit: limit };
}
exports.deserializeGetCollaborationWhitelistExemptTargetsQueryParamsArg = deserializeGetCollaborationWhitelistExemptTargetsQueryParamsArg;
function serializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField(val) {
    return { ["id"]: val.id };
}
exports.serializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField = serializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField;
function deserializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField(val) {
    const id = val.id;
    return { id: id };
}
exports.deserializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField = deserializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField;
function serializeCreateCollaborationWhitelistExemptTargetRequestBodyArg(val) {
    return { ["user"]: serializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField(val.user) };
}
exports.serializeCreateCollaborationWhitelistExemptTargetRequestBodyArg = serializeCreateCollaborationWhitelistExemptTargetRequestBodyArg;
function deserializeCreateCollaborationWhitelistExemptTargetRequestBodyArg(val) {
    const user = deserializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField(val.user);
    return { user: user };
}
exports.deserializeCreateCollaborationWhitelistExemptTargetRequestBodyArg = deserializeCreateCollaborationWhitelistExemptTargetRequestBodyArg;
//# sourceMappingURL=collaborationAllowlistExemptTargets.generated.js.map