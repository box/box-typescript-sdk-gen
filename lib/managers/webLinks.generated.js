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
exports.deserializeUpdateWebLinkByIdRequestBodyArg = exports.serializeUpdateWebLinkByIdRequestBodyArg = exports.deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkField = exports.serializeUpdateWebLinkByIdRequestBodyArgSharedLinkField = exports.deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField = exports.serializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField = exports.deserializeUpdateWebLinkByIdRequestBodyArgParentField = exports.serializeUpdateWebLinkByIdRequestBodyArgParentField = exports.deserializeCreateWebLinkRequestBodyArg = exports.serializeCreateWebLinkRequestBodyArg = exports.deserializeCreateWebLinkRequestBodyArgParentField = exports.serializeCreateWebLinkRequestBodyArgParentField = exports.WebLinksManager = exports.DeleteWebLinkByIdHeadersArg = exports.UpdateWebLinkByIdHeadersArg = exports.GetWebLinkByIdHeadersArg = exports.CreateWebLinkHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class CreateWebLinkHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateWebLinkHeadersArg = CreateWebLinkHeadersArg;
class GetWebLinkByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetWebLinkByIdHeadersArg = GetWebLinkByIdHeadersArg;
class UpdateWebLinkByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UpdateWebLinkByIdHeadersArg = UpdateWebLinkByIdHeadersArg;
class DeleteWebLinkByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteWebLinkByIdHeadersArg = DeleteWebLinkByIdHeadersArg;
class WebLinksManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    createWebLink(requestBody, headers = new CreateWebLinkHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links"), { method: "POST", headers: headersMap, body: (0, json_js_1.serializeJson)(serializeCreateWebLinkRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWebLink)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    getWebLinkById(webLinkId, headers = new GetWebLinkByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ["boxapi"]: (0, utils_js_2.toString)(headers.boxapi) }, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWebLink)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    updateWebLinkById(webLinkId, requestBody, headers = new UpdateWebLinkByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId), { method: "PUT", headers: headersMap, body: (0, json_js_1.serializeJson)(serializeUpdateWebLinkByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWebLink)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    deleteWebLinkById(webLinkId, headers = new DeleteWebLinkByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
}
exports.WebLinksManager = WebLinksManager;
function serializeCreateWebLinkRequestBodyArgParentField(val) {
    return { ["id"]: val.id };
}
exports.serializeCreateWebLinkRequestBodyArgParentField = serializeCreateWebLinkRequestBodyArgParentField;
function deserializeCreateWebLinkRequestBodyArgParentField(val) {
    const id = val.id;
    return { id: id };
}
exports.deserializeCreateWebLinkRequestBodyArgParentField = deserializeCreateWebLinkRequestBodyArgParentField;
function serializeCreateWebLinkRequestBodyArg(val) {
    return { ["url"]: val.url, ["parent"]: serializeCreateWebLinkRequestBodyArgParentField(val.parent), ["name"]: val.name, ["description"]: val.description };
}
exports.serializeCreateWebLinkRequestBodyArg = serializeCreateWebLinkRequestBodyArg;
function deserializeCreateWebLinkRequestBodyArg(val) {
    const url = val.url;
    const parent = deserializeCreateWebLinkRequestBodyArgParentField(val.parent);
    const name = (0, json_js_3.isJson)(val.name, "string") ? val.name : void 0;
    const description = (0, json_js_3.isJson)(val.description, "string") ? val.description : void 0;
    return { url: url, parent: parent, name: name, description: description };
}
exports.deserializeCreateWebLinkRequestBodyArg = deserializeCreateWebLinkRequestBodyArg;
function serializeUpdateWebLinkByIdRequestBodyArgParentField(val) {
    return { ["id"]: val.id };
}
exports.serializeUpdateWebLinkByIdRequestBodyArgParentField = serializeUpdateWebLinkByIdRequestBodyArgParentField;
function deserializeUpdateWebLinkByIdRequestBodyArgParentField(val) {
    const id = (0, json_js_3.isJson)(val.id, "string") ? val.id : void 0;
    return { id: id };
}
exports.deserializeUpdateWebLinkByIdRequestBodyArgParentField = deserializeUpdateWebLinkByIdRequestBodyArgParentField;
function serializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.serializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField = serializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField;
function deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "company") {
        return "company";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField = deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField;
function serializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanity_name"]: val.vanityName, ["unshared_at"]: val.unsharedAt };
}
exports.serializeUpdateWebLinkByIdRequestBodyArgSharedLinkField = serializeUpdateWebLinkByIdRequestBodyArgSharedLinkField;
function deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_3.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_3.isJson)(val.vanity_name, "string") ? val.vanity_name : void 0;
    const unsharedAt = (0, json_js_3.isJson)(val.unshared_at, "string") ? val.unshared_at : void 0;
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt };
}
exports.deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkField = deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkField;
function serializeUpdateWebLinkByIdRequestBodyArg(val) {
    return { ["url"]: val.url, ["parent"]: val.parent == void 0 ? void 0 : serializeUpdateWebLinkByIdRequestBodyArgParentField(val.parent), ["name"]: val.name, ["description"]: val.description, ["shared_link"]: val.sharedLink == void 0 ? void 0 : serializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.serializeUpdateWebLinkByIdRequestBodyArg = serializeUpdateWebLinkByIdRequestBodyArg;
function deserializeUpdateWebLinkByIdRequestBodyArg(val) {
    const url = (0, json_js_3.isJson)(val.url, "string") ? val.url : void 0;
    const parent = val.parent == void 0 ? void 0 : deserializeUpdateWebLinkByIdRequestBodyArgParentField(val.parent);
    const name = (0, json_js_3.isJson)(val.name, "string") ? val.name : void 0;
    const description = (0, json_js_3.isJson)(val.description, "string") ? val.description : void 0;
    const sharedLink = val.shared_link == void 0 ? void 0 : deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(val.shared_link);
    return { url: url, parent: parent, name: name, description: description, sharedLink: sharedLink };
}
exports.deserializeUpdateWebLinkByIdRequestBodyArg = deserializeUpdateWebLinkByIdRequestBodyArg;
//# sourceMappingURL=webLinks.generated.js.map