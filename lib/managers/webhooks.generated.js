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
exports.WebhooksManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class WebhooksManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getWebhooks(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/webhooks"), { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth });
            return yield (0, schemas_generated_js_1.deserializeWebhooks)((0, json_js_1.deserializeJSON)(response.text));
        });
    }
    postWebhooks(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/webhooks"), { method: "POST", body: JSON.stringify(requestBody), auth: this.auth });
            return yield (0, schemas_generated_js_2.deserializeWebhook)((0, json_js_1.deserializeJSON)(response.text));
        });
    }
    getWebhooksId(webhookId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/webhooks/", webhookId), { method: "GET", auth: this.auth });
            return yield (0, schemas_generated_js_2.deserializeWebhook)((0, json_js_1.deserializeJSON)(response.text));
        });
    }
    putWebhooksId(webhookId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/webhooks/", webhookId), { method: "PUT", body: JSON.stringify(requestBody), auth: this.auth });
            return yield (0, schemas_generated_js_2.deserializeWebhook)((0, json_js_1.deserializeJSON)(response.text));
        });
    }
    deleteWebhooksId(webhookId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/webhooks/", webhookId), { method: "DELETE", auth: this.auth });
            return response.content;
        });
    }
}
exports.WebhooksManager = WebhooksManager;
//# sourceMappingURL=webhooks.generated.js.map