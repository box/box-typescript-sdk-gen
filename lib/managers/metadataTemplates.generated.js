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
            return yield (0, schemas_generated_js_1.deserializeMetadataTemplates)(yield (0, json_js_1.deserializeJson)(response.text));
        });
    }
    getMetadataTemplatesIdIdSchema(scope, templateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/", scope, "/", templateKey, "/schema"), { method: "GET", auth: this.auth });
            return yield (0, schemas_generated_js_2.deserializeMetadataTemplate)(yield (0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteMetadataTemplatesIdIdSchema(scope, templateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/", scope, "/", templateKey, "/schema"), { method: "DELETE", auth: this.auth });
            return response.content;
        });
    }
    getMetadataTemplatesId(templateId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/", templateId), { method: "GET", auth: this.auth });
            return yield (0, schemas_generated_js_2.deserializeMetadataTemplate)(yield (0, json_js_1.deserializeJson)(response.text));
        });
    }
    getMetadataTemplatesGlobal(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/global"), { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth });
            return yield (0, schemas_generated_js_1.deserializeMetadataTemplates)(yield (0, json_js_1.deserializeJson)(response.text));
        });
    }
    getMetadataTemplatesEnterprise(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/enterprise"), { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth });
            return yield (0, schemas_generated_js_1.deserializeMetadataTemplates)(yield (0, json_js_1.deserializeJson)(response.text));
        });
    }
    postMetadataTemplatesSchema(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_templates/schema"), { method: "POST", body: JSON.stringify(requestBody), auth: this.auth });
            return yield (0, schemas_generated_js_2.deserializeMetadataTemplate)(yield (0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.MetadataTemplatesManager = MetadataTemplatesManager;
//# sourceMappingURL=metadataTemplates.generated.js.map