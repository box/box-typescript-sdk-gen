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
exports.newDeserializeGetWebLinkTrashQueryParamsArg = exports.newSerializeGetWebLinkTrashQueryParamsArg = exports.newDeserializeCreateWebLinkByIdQueryParamsArg = exports.newSerializeCreateWebLinkByIdQueryParamsArg = exports.newDeserializeCreateWebLinkByIdRequestBodyArg = exports.newSerializeCreateWebLinkByIdRequestBodyArg = exports.newDeserializeCreateWebLinkByIdRequestBodyArgParentField = exports.newSerializeCreateWebLinkByIdRequestBodyArgParentField = exports.TrashedWebLinksManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class TrashedWebLinksManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    createWebLinkById(webLinkId, requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId), { method: "POST", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeTrashWebLinkRestored)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getWebLinkTrash(webLinkId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId, "/trash"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeTrashWebLink)((0, json_js_1.deserializeJson)(response.text));
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
function newSerializeCreateWebLinkByIdRequestBodyArgParentField(val) {
    return { ["id"]: val.id };
}
exports.newSerializeCreateWebLinkByIdRequestBodyArgParentField = newSerializeCreateWebLinkByIdRequestBodyArgParentField;
function newDeserializeCreateWebLinkByIdRequestBodyArgParentField(val) {
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    return { id: id };
}
exports.newDeserializeCreateWebLinkByIdRequestBodyArgParentField = newDeserializeCreateWebLinkByIdRequestBodyArgParentField;
function newSerializeCreateWebLinkByIdRequestBodyArg(val) {
    return { ["name"]: val.name, ["parent"]: val.parent == void 0 ? void 0 : newSerializeCreateWebLinkByIdRequestBodyArgParentField(val.parent) };
}
exports.newSerializeCreateWebLinkByIdRequestBodyArg = newSerializeCreateWebLinkByIdRequestBodyArg;
function newDeserializeCreateWebLinkByIdRequestBodyArg(val) {
    const name = (0, json_js_2.isJson)(val.name, "string") ? val.name : void 0;
    const parent = val.parent == void 0 ? void 0 : newDeserializeCreateWebLinkByIdRequestBodyArgParentField(val.parent);
    return { name: name, parent: parent };
}
exports.newDeserializeCreateWebLinkByIdRequestBodyArg = newDeserializeCreateWebLinkByIdRequestBodyArg;
function newSerializeCreateWebLinkByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeCreateWebLinkByIdQueryParamsArg = newSerializeCreateWebLinkByIdQueryParamsArg;
function newDeserializeCreateWebLinkByIdQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeCreateWebLinkByIdQueryParamsArg = newDeserializeCreateWebLinkByIdQueryParamsArg;
function newSerializeGetWebLinkTrashQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeGetWebLinkTrashQueryParamsArg = newSerializeGetWebLinkTrashQueryParamsArg;
function newDeserializeGetWebLinkTrashQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeGetWebLinkTrashQueryParamsArg = newDeserializeGetWebLinkTrashQueryParamsArg;
//# sourceMappingURL=trashedWebLinks.generated.js.map