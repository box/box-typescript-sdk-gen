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
exports.deserializeCreateMetadataCascadePolicyApplyRequestBodyArg = exports.serializeCreateMetadataCascadePolicyApplyRequestBodyArg = exports.deserializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField = exports.serializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField = exports.deserializeCreateMetadataCascadePolicyRequestBodyArg = exports.serializeCreateMetadataCascadePolicyRequestBodyArg = exports.deserializeCreateMetadataCascadePolicyRequestBodyArgScopeField = exports.serializeCreateMetadataCascadePolicyRequestBodyArgScopeField = exports.MetadataCascadePoliciesManager = exports.CreateMetadataCascadePolicyApplyHeadersArg = exports.DeleteMetadataCascadePolicyByIdHeadersArg = exports.GetMetadataCascadePolicyByIdHeadersArg = exports.CreateMetadataCascadePolicyHeadersArg = exports.GetMetadataCascadePoliciesHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetMetadataCascadePoliciesHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetMetadataCascadePoliciesHeadersArg = GetMetadataCascadePoliciesHeadersArg;
class CreateMetadataCascadePolicyHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateMetadataCascadePolicyHeadersArg = CreateMetadataCascadePolicyHeadersArg;
class GetMetadataCascadePolicyByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetMetadataCascadePolicyByIdHeadersArg = GetMetadataCascadePolicyByIdHeadersArg;
class DeleteMetadataCascadePolicyByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteMetadataCascadePolicyByIdHeadersArg = DeleteMetadataCascadePolicyByIdHeadersArg;
class CreateMetadataCascadePolicyApplyHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateMetadataCascadePolicyApplyHeadersArg = CreateMetadataCascadePolicyApplyHeadersArg;
class MetadataCascadePoliciesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getMetadataCascadePolicies(queryParams, headers = new GetMetadataCascadePoliciesHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["folder_id"]: (0, utils_js_2.toString)(queryParams.folderId), ["owner_enterprise_id"]: (0, utils_js_2.toString)(queryParams.ownerEnterpriseId), ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["offset"]: (0, utils_js_2.toString)(queryParams.offset) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_cascade_policies"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeMetadataCascadePolicies)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createMetadataCascadePolicy(requestBody, headers = new CreateMetadataCascadePolicyHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_cascade_policies"), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateMetadataCascadePolicyRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeMetadataCascadePolicy)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getMetadataCascadePolicyById(metadataCascadePolicyId, headers = new GetMetadataCascadePolicyByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_cascade_policies/", metadataCascadePolicyId), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeMetadataCascadePolicy)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteMetadataCascadePolicyById(metadataCascadePolicyId, headers = new DeleteMetadataCascadePolicyByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_cascade_policies/", metadataCascadePolicyId), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    createMetadataCascadePolicyApply(metadataCascadePolicyId, requestBody, headers = new CreateMetadataCascadePolicyApplyHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_cascade_policies/", metadataCascadePolicyId, "/apply"), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateMetadataCascadePolicyApplyRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
}
exports.MetadataCascadePoliciesManager = MetadataCascadePoliciesManager;
function serializeCreateMetadataCascadePolicyRequestBodyArgScopeField(val) {
    return val;
}
exports.serializeCreateMetadataCascadePolicyRequestBodyArgScopeField = serializeCreateMetadataCascadePolicyRequestBodyArgScopeField;
function deserializeCreateMetadataCascadePolicyRequestBodyArgScopeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateMetadataCascadePolicyRequestBodyArgScopeField\"";
    }
    if (val == "global") {
        return "global";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateMetadataCascadePolicyRequestBodyArgScopeField = deserializeCreateMetadataCascadePolicyRequestBodyArgScopeField;
function serializeCreateMetadataCascadePolicyRequestBodyArg(val) {
    return { ["folder_id"]: val.folderId, ["scope"]: serializeCreateMetadataCascadePolicyRequestBodyArgScopeField(val.scope), ["templateKey"]: val.templateKey };
}
exports.serializeCreateMetadataCascadePolicyRequestBodyArg = serializeCreateMetadataCascadePolicyRequestBodyArg;
function deserializeCreateMetadataCascadePolicyRequestBodyArg(val) {
    const folderId = val.folder_id;
    const scope = deserializeCreateMetadataCascadePolicyRequestBodyArgScopeField(val.scope);
    const templateKey = val.templateKey;
    return { folderId: folderId, scope: scope, templateKey: templateKey };
}
exports.deserializeCreateMetadataCascadePolicyRequestBodyArg = deserializeCreateMetadataCascadePolicyRequestBodyArg;
function serializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(val) {
    return val;
}
exports.serializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField = serializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField;
function deserializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField\"";
    }
    if (val == "none") {
        return "none";
    }
    if (val == "overwrite") {
        return "overwrite";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField = deserializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField;
function serializeCreateMetadataCascadePolicyApplyRequestBodyArg(val) {
    return { ["conflict_resolution"]: serializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(val.conflictResolution) };
}
exports.serializeCreateMetadataCascadePolicyApplyRequestBodyArg = serializeCreateMetadataCascadePolicyApplyRequestBodyArg;
function deserializeCreateMetadataCascadePolicyApplyRequestBodyArg(val) {
    const conflictResolution = deserializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(val.conflict_resolution);
    return { conflictResolution: conflictResolution };
}
exports.deserializeCreateMetadataCascadePolicyApplyRequestBodyArg = deserializeCreateMetadataCascadePolicyApplyRequestBodyArg;
//# sourceMappingURL=metadataCascadePolicies.generated.js.map