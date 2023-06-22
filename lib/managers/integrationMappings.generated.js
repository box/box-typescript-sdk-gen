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
exports.IntegrationMappingsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class IntegrationMappingsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getIntegrationMappingSlack(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/integration_mappings/slack"), { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit, ["partner_item_type"]: options.partnerItemType, ["partner_item_id"]: options.partnerItemId, ["box_item_id"]: options.boxItemId, ["box_item_type"]: options.boxItemType, ["is_manually_created"]: options.isManuallyCreated }, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeIntegrationMappings)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createIntegrationMappingSlack(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/integration_mappings/slack"), { method: "POST", body: (0, json_js_2.serializeJson)((0, schemas_generated_js_3.serializeIntegrationMappingSlackCreateRequest)(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeIntegrationMapping)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateIntegrationMappingSlackById(integrationMappingId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/integration_mappings/slack/", integrationMappingId), { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeIntegrationMapping)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteIntegrationMappingSlackById(integrationMappingId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/integration_mappings/slack/", integrationMappingId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.IntegrationMappingsManager = IntegrationMappingsManager;
//# sourceMappingURL=integrationMappings.generated.js.map