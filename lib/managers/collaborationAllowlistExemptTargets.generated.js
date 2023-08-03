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
exports.deserializeCreateCollaborationWhitelistExemptTargetRequestBodyArg = exports.serializeCreateCollaborationWhitelistExemptTargetRequestBodyArg = exports.deserializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField = exports.serializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField = exports.CollaborationAllowlistExemptTargetsManager = exports.DeleteCollaborationWhitelistExemptTargetByIdHeadersArg = exports.GetCollaborationWhitelistExemptTargetByIdHeadersArg = exports.CreateCollaborationWhitelistExemptTargetHeadersArg = exports.GetCollaborationWhitelistExemptTargetsHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class GetCollaborationWhitelistExemptTargetsHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetCollaborationWhitelistExemptTargetsHeadersArg = GetCollaborationWhitelistExemptTargetsHeadersArg;
class CreateCollaborationWhitelistExemptTargetHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateCollaborationWhitelistExemptTargetHeadersArg = CreateCollaborationWhitelistExemptTargetHeadersArg;
class GetCollaborationWhitelistExemptTargetByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetCollaborationWhitelistExemptTargetByIdHeadersArg = GetCollaborationWhitelistExemptTargetByIdHeadersArg;
class DeleteCollaborationWhitelistExemptTargetByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteCollaborationWhitelistExemptTargetByIdHeadersArg = DeleteCollaborationWhitelistExemptTargetByIdHeadersArg;
class CollaborationAllowlistExemptTargetsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getCollaborationWhitelistExemptTargets(queryParams = {}, headers = new GetCollaborationWhitelistExemptTargetsHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["limit"]: (0, utils_js_2.toString)(queryParams.limit) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeCollaborationAllowlistExemptTargets)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createCollaborationWhitelistExemptTarget(requestBody, headers = new CreateCollaborationWhitelistExemptTargetHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets"), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateCollaborationWhitelistExemptTargetRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeCollaborationAllowlistExemptTarget)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId, headers = new GetCollaborationWhitelistExemptTargetByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets/", collaborationWhitelistExemptTargetId), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeCollaborationAllowlistExemptTarget)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId, headers = new DeleteCollaborationWhitelistExemptTargetByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets/", collaborationWhitelistExemptTargetId), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
}
exports.CollaborationAllowlistExemptTargetsManager = CollaborationAllowlistExemptTargetsManager;
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