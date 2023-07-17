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
exports.deserializeGetWebLinkTrashQueryParamsArg = exports.serializeGetWebLinkTrashQueryParamsArg = exports.deserializeCreateWebLinkByIdQueryParamsArg = exports.serializeCreateWebLinkByIdQueryParamsArg = exports.deserializeCreateWebLinkByIdRequestBodyArg = exports.serializeCreateWebLinkByIdRequestBodyArg = exports.deserializeCreateWebLinkByIdRequestBodyArgParentField = exports.serializeCreateWebLinkByIdRequestBodyArgParentField = exports.TrashedWebLinksManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class TrashedWebLinksManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    createWebLinkById(webLinkId, requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId), { method: "POST", params: (0, utils_js_1.prepareParams)(serializeCreateWebLinkByIdQueryParamsArg(queryParams)), body: (0, json_js_1.serializeJson)(serializeCreateWebLinkByIdRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeTrashWebLinkRestored)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    getWebLinkTrash(webLinkId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId, "/trash"), { method: "GET", params: (0, utils_js_1.prepareParams)(serializeGetWebLinkTrashQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeTrashWebLink)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    deleteWebLinkTrash(webLinkId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId, "/trash"), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
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
function serializeCreateWebLinkByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeCreateWebLinkByIdQueryParamsArg = serializeCreateWebLinkByIdQueryParamsArg;
function deserializeCreateWebLinkByIdQueryParamsArg(val) {
    const fields = (0, json_js_3.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeCreateWebLinkByIdQueryParamsArg = deserializeCreateWebLinkByIdQueryParamsArg;
function serializeGetWebLinkTrashQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeGetWebLinkTrashQueryParamsArg = serializeGetWebLinkTrashQueryParamsArg;
function deserializeGetWebLinkTrashQueryParamsArg(val) {
    const fields = (0, json_js_3.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeGetWebLinkTrashQueryParamsArg = deserializeGetWebLinkTrashQueryParamsArg;
//# sourceMappingURL=trashedWebLinks.generated.js.map