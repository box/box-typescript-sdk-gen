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
exports.MetadataTemplatesManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class MetadataTemplatesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getMetadataTemplates(metadataInstanceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates"), { method: "GET", params: { ["metadata_instance_id"]: metadataInstanceId }, auth: this.auth });
            return (0, schemas_generated_js_1.deserializeMetadataTemplates)(deserializeJSON(response.text));
        });
    }
    getMetadataTemplateSchema(scope, templateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/", scope, "/", templateKey, "/schema"), { method: "GET", auth: this.auth });
            return (0, schemas_generated_js_2.deserializeMetadataTemplate)(deserializeJSON(response.text));
        });
    }
    deleteMetadataTemplateSchema(scope, templateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/", scope, "/", templateKey, "/schema"), { method: "DELETE", auth: this.auth });
            return response.content;
        });
    }
    getMetadataTemplateById(templateId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/", templateId), { method: "GET", auth: this.auth });
            return (0, schemas_generated_js_2.deserializeMetadataTemplate)(deserializeJSON(response.text));
        });
    }
    getMetadataTemplateGlobal(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/global"), { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth });
            return (0, schemas_generated_js_1.deserializeMetadataTemplates)(deserializeJSON(response.text));
        });
    }
    getMetadataTemplateEnterprise(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/enterprise"), { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth });
            return (0, schemas_generated_js_1.deserializeMetadataTemplates)(deserializeJSON(response.text));
        });
    }
    createMetadataTemplateSchema(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/schema"), { method: "POST", body: json_js_1.JSON.stringify(requestBody), auth: this.auth });
            return (0, schemas_generated_js_2.deserializeMetadataTemplate)(deserializeJSON(response.text));
        });
    }
}
exports.MetadataTemplatesManager = MetadataTemplatesManager;
//# sourceMappingURL=metadataTemplates.generated.js.map