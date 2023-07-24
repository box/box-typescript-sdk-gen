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
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const utils_js_3 = require("../utils.js");
const client_generated_js_1 = require("../client.generated.js");
const jwtAuth_js_1 = require("../jwtAuth.js");
const jwtAuth_js_2 = require("../jwtAuth.js");
const jwtConfig = jwtAuth_js_2.JwtConfig.fromConfigJsonString((0, utils_js_1.decodeBase64)((0, utils_js_2.getEnvVar)("JWT_CONFIG_BASE_64")));
const auth = new jwtAuth_js_1.JwtAuth({ config: jwtConfig });
const client = new client_generated_js_1.Client({ auth: auth });
test("testWebhooksCRUD", function testWebhooksCRUD() {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = yield client.folders.createFolder({ name: (0, utils_js_3.getUuid)(), parent: { id: "0" } });
        const webhook = yield client.webhooks.createWebhook({ target: { id: folder.id, type: "folder" }, address: "https://example.com/new-webhook", triggers: ["FILE.UPLOADED"] });
        if (!(webhook.target.id == folder.id)) {
            throw "Assertion failed";
        }
        if (!(webhook.target.type == "folder")) {
            throw "Assertion failed";
        }
        if (!(webhook.triggers.length == ["FILE.UPLOADED"].length)) {
            throw "Assertion failed";
        }
        if (!(webhook.address == "https://example.com/new-webhook")) {
            throw "Assertion failed";
        }
        const webhooks = yield client.webhooks.getWebhooks();
        if (!(webhooks.entries.length > 0)) {
            throw "Assertion failed";
        }
        const webhookFromApi = yield client.webhooks.getWebhookById(webhook.id);
        if (!(webhook.id == webhookFromApi.id)) {
            throw "Assertion failed";
        }
        if (!(webhook.target.id == webhookFromApi.target.id)) {
            throw "Assertion failed";
        }
        if (!(webhook.address == webhookFromApi.address)) {
            throw "Assertion failed";
        }
        const updatedWebhook = yield client.webhooks.updateWebhookById(webhook.id, { address: "https://example.com/updated-webhook" });
        if (!(updatedWebhook.id == webhook.id)) {
            throw "Assertion failed";
        }
        if (!(updatedWebhook.address == "https://example.com/updated-webhook")) {
            throw "Assertion failed";
        }
        yield client.webhooks.deleteWebhookById(webhook.id);
        expect(() => __awaiter(this, void 0, void 0, function* () { yield client.webhooks.deleteWebhookById(webhook.id); })).rejects.toThrow();
        yield client.folders.deleteFolderById(folder.id);
    });
});
//# sourceMappingURL=webhooks.generated.test.js.map