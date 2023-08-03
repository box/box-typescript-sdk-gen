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
exports.deserializeCreateWebLinkByIdRequestBodyArg = exports.serializeCreateWebLinkByIdRequestBodyArg = exports.deserializeCreateWebLinkByIdRequestBodyArgParentField = exports.serializeCreateWebLinkByIdRequestBodyArgParentField = exports.TrashedWebLinksManager = exports.DeleteWebLinkTrashHeadersArg = exports.GetWebLinkTrashHeadersArg = exports.CreateWebLinkByIdHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class CreateWebLinkByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateWebLinkByIdHeadersArg = CreateWebLinkByIdHeadersArg;
class GetWebLinkTrashHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetWebLinkTrashHeadersArg = GetWebLinkTrashHeadersArg;
class DeleteWebLinkTrashHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteWebLinkTrashHeadersArg = DeleteWebLinkTrashHeadersArg;
class TrashedWebLinksManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    createWebLinkById(webLinkId, requestBody, queryParams = {}, headers = new CreateWebLinkByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId), { method: "POST", params: queryParamsMap, headers: headersMap, body: (0, json_js_1.serializeJson)(serializeCreateWebLinkByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeTrashWebLinkRestored)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    getWebLinkTrash(webLinkId, queryParams = {}, headers = new GetWebLinkTrashHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId, "/trash"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeTrashWebLink)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    deleteWebLinkTrash(webLinkId, headers = new DeleteWebLinkTrashHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId, "/trash"), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
}
exports.TrashedWebLinksManager = TrashedWebLinksManager;
function serializeCreateWebLinkByIdRequestBodyArgParentField(val) {
    return { ["id"]: val.id };
}
exports.serializeCreateWebLinkByIdRequestBodyArgParentField = serializeCreateWebLinkByIdRequestBodyArgParentField;
function deserializeCreateWebLinkByIdRequestBodyArgParentField(val) {
    const id = (0, json_js_3.isJson)(val.id, "string") ? val.id : void 0;
    return { id: id };
}
exports.deserializeCreateWebLinkByIdRequestBodyArgParentField = deserializeCreateWebLinkByIdRequestBodyArgParentField;
function serializeCreateWebLinkByIdRequestBodyArg(val) {
    return { ["name"]: val.name, ["parent"]: val.parent == void 0 ? void 0 : serializeCreateWebLinkByIdRequestBodyArgParentField(val.parent) };
}
exports.serializeCreateWebLinkByIdRequestBodyArg = serializeCreateWebLinkByIdRequestBodyArg;
function deserializeCreateWebLinkByIdRequestBodyArg(val) {
    const name = (0, json_js_3.isJson)(val.name, "string") ? val.name : void 0;
    const parent = val.parent == void 0 ? void 0 : deserializeCreateWebLinkByIdRequestBodyArgParentField(val.parent);
    return { name: name, parent: parent };
}
exports.deserializeCreateWebLinkByIdRequestBodyArg = deserializeCreateWebLinkByIdRequestBodyArg;
//# sourceMappingURL=trashedWebLinks.generated.js.map