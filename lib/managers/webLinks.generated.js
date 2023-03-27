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
exports.WebLinksManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class WebLinksManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    postWebLinks(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links"), { method: "POST", body: json_js_1.JSON.stringify(requestBody), auth: this.auth });
            return (0, schemas_generated_js_1.deserializeWebLink)(deserializeJSON(response.text));
        });
    }
    getWebLinksId(webLinkId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId), { method: "GET", headers: { ["boxapi"]: options.boxapi }, auth: this.auth });
            return (0, schemas_generated_js_1.deserializeWebLink)(deserializeJSON(response.text));
        });
    }
    postWebLinksId(webLinkId, requestBody, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId), { method: "POST", params: { ["fields"]: options.fields }, body: json_js_1.JSON.stringify(requestBody), auth: this.auth });
            return (0, schemas_generated_js_2.deserializeTrashWebLinkRestored)(deserializeJSON(response.text));
        });
    }
    putWebLinksId(webLinkId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId), { method: "PUT", body: json_js_1.JSON.stringify(requestBody), auth: this.auth });
            return (0, schemas_generated_js_1.deserializeWebLink)(deserializeJSON(response.text));
        });
    }
    deleteWebLinksId(webLinkId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId), { method: "DELETE", auth: this.auth });
            return response.content;
        });
    }
}
exports.WebLinksManager = WebLinksManager;
//# sourceMappingURL=webLinks.generated.js.map