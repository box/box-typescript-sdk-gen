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
exports.SharedLinksWebLinksManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class SharedLinksWebLinksManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getSharedItemWebLinks(boxapi, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shared_items#web_links"), { method: "GET", params: { ["fields"]: options.fields }, headers: { ["if-none-match"]: options.ifNoneMatch, ["boxapi"]: boxapi }, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getWebLinkGetSharedLink(webLinkId, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#get_shared_link"), { method: "GET", params: { ["fields"]: fields }, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateWebLinkAddSharedLink(webLinkId, fields, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#add_shared_link"), { method: "PUT", params: { ["fields"]: fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateWebLinkUpdateSharedLink(webLinkId, fields, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#update_shared_link"), { method: "PUT", params: { ["fields"]: fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateWebLinkRemoveSharedLink(webLinkId, fields, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#remove_shared_link"), { method: "PUT", params: { ["fields"]: fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.SharedLinksWebLinksManager = SharedLinksWebLinksManager;
//# sourceMappingURL=sharedLinksWebLinks.generated.js.map