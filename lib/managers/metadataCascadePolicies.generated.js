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
exports.newDeserializeCreateMetadataCascadePolicyApplyRequestBodyArg = exports.newSerializeCreateMetadataCascadePolicyApplyRequestBodyArg = exports.newDeserializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField = exports.newSerializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField = exports.newDeserializeCreateMetadataCascadePolicyRequestBodyArg = exports.newSerializeCreateMetadataCascadePolicyRequestBodyArg = exports.newDeserializeCreateMetadataCascadePolicyRequestBodyArgScopeField = exports.newSerializeCreateMetadataCascadePolicyRequestBodyArgScopeField = exports.newDeserializeGetMetadataCascadePoliciesQueryParamsArg = exports.newSerializeGetMetadataCascadePoliciesQueryParamsArg = exports.MetadataCascadePoliciesManager = void 0;
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
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_cascade_policies"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeMetadataCascadePolicies)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createMetadataCascadePolicy(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_cascade_policies"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeMetadataCascadePolicy)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getMetadataCascadePolicyById(metadataCascadePolicyId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_cascade_policies/", metadataCascadePolicyId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeMetadataCascadePolicy)((0, json_js_1.deserializeJson)(response.text));
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
function newSerializeGetMetadataCascadePoliciesQueryParamsArg(val) {
    return { ["folderId"]: val.folderId, ["ownerEnterpriseId"]: val.ownerEnterpriseId, ["marker"]: val.marker, ["offset"]: val.offset };
}
exports.newSerializeGetMetadataCascadePoliciesQueryParamsArg = newSerializeGetMetadataCascadePoliciesQueryParamsArg;
function newDeserializeGetMetadataCascadePoliciesQueryParamsArg(val) {
    const folderId = val.folderId;
    const ownerEnterpriseId = (0, json_js_2.isJson)(val.ownerEnterpriseId, "string") ? val.ownerEnterpriseId : void 0;
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const offset = (0, json_js_2.isJson)(val.offset, "number") ? val.offset : void 0;
    return { folderId: folderId, ownerEnterpriseId: ownerEnterpriseId, marker: marker, offset: offset };
}
exports.newDeserializeGetMetadataCascadePoliciesQueryParamsArg = newDeserializeGetMetadataCascadePoliciesQueryParamsArg;
function newSerializeCreateMetadataCascadePolicyRequestBodyArgScopeField(val) {
    return val;
}
exports.newSerializeCreateMetadataCascadePolicyRequestBodyArgScopeField = newSerializeCreateMetadataCascadePolicyRequestBodyArgScopeField;
function newDeserializeCreateMetadataCascadePolicyRequestBodyArgScopeField(val) {
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
exports.newDeserializeCreateMetadataCascadePolicyRequestBodyArgScopeField = newDeserializeCreateMetadataCascadePolicyRequestBodyArgScopeField;
function newSerializeCreateMetadataCascadePolicyRequestBodyArg(val) {
    return { ["folderId"]: val.folderId, ["scope"]: newSerializeCreateMetadataCascadePolicyRequestBodyArgScopeField(val.scope), ["templateKey"]: val.templateKey };
}
exports.newSerializeCreateMetadataCascadePolicyRequestBodyArg = newSerializeCreateMetadataCascadePolicyRequestBodyArg;
function newDeserializeCreateMetadataCascadePolicyRequestBodyArg(val) {
    const folderId = val.folderId;
    const scope = newDeserializeCreateMetadataCascadePolicyRequestBodyArgScopeField(val.scope);
    const templateKey = val.templateKey;
    return { folderId: folderId, scope: scope, templateKey: templateKey };
}
exports.newDeserializeCreateMetadataCascadePolicyRequestBodyArg = newDeserializeCreateMetadataCascadePolicyRequestBodyArg;
function newSerializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(val) {
    return val;
}
exports.newSerializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField = newSerializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField;
function newDeserializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(val) {
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
exports.newDeserializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField = newDeserializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField;
function newSerializeCreateMetadataCascadePolicyApplyRequestBodyArg(val) {
    return { ["conflictResolution"]: newSerializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(val.conflictResolution) };
}
exports.newSerializeCreateMetadataCascadePolicyApplyRequestBodyArg = newSerializeCreateMetadataCascadePolicyApplyRequestBodyArg;
function newDeserializeCreateMetadataCascadePolicyApplyRequestBodyArg(val) {
    const conflictResolution = newDeserializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(val.conflictResolution);
    return { conflictResolution: conflictResolution };
}
exports.newDeserializeCreateMetadataCascadePolicyApplyRequestBodyArg = newDeserializeCreateMetadataCascadePolicyApplyRequestBodyArg;
//# sourceMappingURL=metadataCascadePolicies.generated.js.map