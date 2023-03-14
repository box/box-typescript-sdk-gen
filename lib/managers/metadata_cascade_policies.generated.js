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
exports.MetadataCascadePoliciesManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class MetadataCascadePoliciesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getMetadataCascadePolicies(folderId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_cascade_policies"), { method: "GET", params: { ["folder_id"]: folderId, ["owner_enterprise_id"]: options.ownerEnterpriseId, ["marker"]: options.marker, ["offset"]: options.offset }, auth: this.auth });
            return yield (0, schemas_generated_js_1.deserializeMetadataCascadePolicies)((0, json_js_1.deserializeJSON)(response.text));
        });
    }
    postMetadataCascadePolicies(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_cascade_policies"), { method: "POST", body: JSON.stringify(requestBody), auth: this.auth });
            return yield (0, schemas_generated_js_2.deserializeMetadataCascadePolicy)((0, json_js_1.deserializeJSON)(response.text));
        });
    }
    getMetadataCascadePoliciesId(metadataCascadePolicyId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_cascade_policies/", metadataCascadePolicyId), { method: "GET", auth: this.auth });
            return yield (0, schemas_generated_js_2.deserializeMetadataCascadePolicy)((0, json_js_1.deserializeJSON)(response.text));
        });
    }
    deleteMetadataCascadePoliciesId(metadataCascadePolicyId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_cascade_policies/", metadataCascadePolicyId), { method: "DELETE", auth: this.auth });
            return response.content;
        });
    }
    postMetadataCascadePoliciesIdApply(metadataCascadePolicyId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_cascade_policies/", metadataCascadePolicyId, "/apply"), { method: "POST", body: JSON.stringify(requestBody), auth: this.auth });
            return response.content;
        });
    }
}
exports.MetadataCascadePoliciesManager = MetadataCascadePoliciesManager;
//# sourceMappingURL=metadata_cascade_policies.generated.js.map