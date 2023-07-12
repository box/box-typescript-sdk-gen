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
exports.deserializeCreateMetadataCascadePolicyApplyRequestBodyArg = exports.serializeCreateMetadataCascadePolicyApplyRequestBodyArg = exports.deserializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField = exports.serializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField = exports.deserializeCreateMetadataCascadePolicyRequestBodyArg = exports.serializeCreateMetadataCascadePolicyRequestBodyArg = exports.deserializeCreateMetadataCascadePolicyRequestBodyArgScopeField = exports.serializeCreateMetadataCascadePolicyRequestBodyArgScopeField = exports.deserializeGetMetadataCascadePoliciesQueryParamsArg = exports.serializeGetMetadataCascadePoliciesQueryParamsArg = exports.MetadataCascadePoliciesManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class MetadataCascadePoliciesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getMetadataCascadePolicies(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_cascade_policies"), { method: "GET", params: (0, utils_js_1.prepareParams)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeMetadataCascadePolicies)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createMetadataCascadePolicy(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_cascade_policies"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeMetadataCascadePolicy)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getMetadataCascadePolicyById(metadataCascadePolicyId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_cascade_policies/", metadataCascadePolicyId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeMetadataCascadePolicy)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteMetadataCascadePolicyById(metadataCascadePolicyId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_cascade_policies/", metadataCascadePolicyId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
    createMetadataCascadePolicyApply(metadataCascadePolicyId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_cascade_policies/", metadataCascadePolicyId, "/apply"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.MetadataCascadePoliciesManager = MetadataCascadePoliciesManager;
function serializeGetMetadataCascadePoliciesQueryParamsArg(val) {
    return { ["folderId"]: val.folderId, ["ownerEnterpriseId"]: val.ownerEnterpriseId, ["marker"]: val.marker, ["offset"]: val.offset };
}
exports.serializeGetMetadataCascadePoliciesQueryParamsArg = serializeGetMetadataCascadePoliciesQueryParamsArg;
function deserializeGetMetadataCascadePoliciesQueryParamsArg(val) {
    const folderId = val.folderId;
    const ownerEnterpriseId = (0, json_js_2.isJson)(val.ownerEnterpriseId, "string") ? val.ownerEnterpriseId : void 0;
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const offset = (0, json_js_2.isJson)(val.offset, "number") ? val.offset : void 0;
    return { folderId: folderId, ownerEnterpriseId: ownerEnterpriseId, marker: marker, offset: offset };
}
exports.deserializeGetMetadataCascadePoliciesQueryParamsArg = deserializeGetMetadataCascadePoliciesQueryParamsArg;
function serializeCreateMetadataCascadePolicyRequestBodyArgScopeField(val) {
    return val;
}
exports.serializeCreateMetadataCascadePolicyRequestBodyArgScopeField = serializeCreateMetadataCascadePolicyRequestBodyArgScopeField;
function deserializeCreateMetadataCascadePolicyRequestBodyArgScopeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
    return { ["folderId"]: val.folderId, ["scope"]: serializeCreateMetadataCascadePolicyRequestBodyArgScopeField(val.scope), ["templateKey"]: val.templateKey };
}
exports.serializeCreateMetadataCascadePolicyRequestBodyArg = serializeCreateMetadataCascadePolicyRequestBodyArg;
function deserializeCreateMetadataCascadePolicyRequestBodyArg(val) {
    const folderId = val.folderId;
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
    if (!(0, json_js_2.isJson)(val, "string")) {
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
    return { ["conflictResolution"]: serializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(val.conflictResolution) };
}
exports.serializeCreateMetadataCascadePolicyApplyRequestBodyArg = serializeCreateMetadataCascadePolicyApplyRequestBodyArg;
function deserializeCreateMetadataCascadePolicyApplyRequestBodyArg(val) {
    const conflictResolution = deserializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(val.conflictResolution);
    return { conflictResolution: conflictResolution };
}
exports.deserializeCreateMetadataCascadePolicyApplyRequestBodyArg = deserializeCreateMetadataCascadePolicyApplyRequestBodyArg;
//# sourceMappingURL=metadataCascadePolicies.generated.js.map