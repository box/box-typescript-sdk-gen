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
exports.deserializeUpdateWebLinkByIdRequestBodyArg = exports.serializeUpdateWebLinkByIdRequestBodyArg = exports.deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkField = exports.serializeUpdateWebLinkByIdRequestBodyArgSharedLinkField = exports.deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField = exports.serializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField = exports.deserializeUpdateWebLinkByIdRequestBodyArgParentField = exports.serializeUpdateWebLinkByIdRequestBodyArgParentField = exports.deserializeGetWebLinkByIdHeadersArg = exports.serializeGetWebLinkByIdHeadersArg = exports.deserializeCreateWebLinkRequestBodyArg = exports.serializeCreateWebLinkRequestBodyArg = exports.deserializeCreateWebLinkRequestBodyArgSharedLinkField = exports.serializeCreateWebLinkRequestBodyArgSharedLinkField = exports.deserializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField = exports.serializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField = exports.deserializeCreateWebLinkRequestBodyArgParentField = exports.serializeCreateWebLinkRequestBodyArgParentField = exports.WebLinksManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class WebLinksManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    createWebLink(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getWebLinkById(webLinkId, headers = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId), { method: "GET", headers: (0, utils_js_1.prepareParams)(headers), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateWebLinkById(webLinkId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId), { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteWebLinkById(webLinkId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
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
function serializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.serializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField = serializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField;
function deserializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateWebLinkRequestBodyArgSharedLinkFieldAccessField\"";
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
exports.deserializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField = deserializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField;
function serializeCreateWebLinkRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : serializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt };
}
exports.serializeCreateWebLinkRequestBodyArgSharedLinkField = serializeCreateWebLinkRequestBodyArgSharedLinkField;
function deserializeCreateWebLinkRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : deserializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_2.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_2.isJson)(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt = (0, json_js_2.isJson)(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt };
}
exports.deserializeCreateWebLinkRequestBodyArgSharedLinkField = deserializeCreateWebLinkRequestBodyArgSharedLinkField;
function serializeCreateWebLinkRequestBodyArg(val) {
    return { ["url"]: val.url, ["parent"]: serializeCreateWebLinkRequestBodyArgParentField(val.parent), ["name"]: val.name, ["description"]: val.description, ["sharedLink"]: val.sharedLink == void 0 ? void 0 : serializeCreateWebLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.serializeCreateWebLinkRequestBodyArg = serializeCreateWebLinkRequestBodyArg;
function deserializeCreateWebLinkRequestBodyArg(val) {
    const url = val.url;
    const parent = deserializeCreateWebLinkRequestBodyArgParentField(val.parent);
    const name = (0, json_js_2.isJson)(val.name, "string") ? val.name : void 0;
    const description = (0, json_js_2.isJson)(val.description, "string") ? val.description : void 0;
    const sharedLink = val.sharedLink == void 0 ? void 0 : deserializeCreateWebLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { url: url, parent: parent, name: name, description: description, sharedLink: sharedLink };
}
exports.deserializeCreateWebLinkRequestBodyArg = deserializeCreateWebLinkRequestBodyArg;
function serializeGetWebLinkByIdHeadersArg(val) {
    return { ["boxapi"]: val.boxapi };
}
exports.serializeGetWebLinkByIdHeadersArg = serializeGetWebLinkByIdHeadersArg;
function deserializeGetWebLinkByIdHeadersArg(val) {
    const boxapi = (0, json_js_2.isJson)(val.boxapi, "string") ? val.boxapi : void 0;
    return { boxapi: boxapi };
}
exports.deserializeGetWebLinkByIdHeadersArg = deserializeGetWebLinkByIdHeadersArg;
function serializeUpdateWebLinkByIdRequestBodyArgParentField(val) {
    return { ["id"]: val.id };
}
exports.serializeUpdateWebLinkByIdRequestBodyArgParentField = serializeUpdateWebLinkByIdRequestBodyArgParentField;
function deserializeUpdateWebLinkByIdRequestBodyArgParentField(val) {
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    return { id: id };
}
exports.deserializeUpdateWebLinkByIdRequestBodyArgParentField = deserializeUpdateWebLinkByIdRequestBodyArgParentField;
function serializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.serializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField = serializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField;
function deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt };
}
exports.serializeUpdateWebLinkByIdRequestBodyArgSharedLinkField = serializeUpdateWebLinkByIdRequestBodyArgSharedLinkField;
function deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_2.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_2.isJson)(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt = (0, json_js_2.isJson)(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt };
}
exports.deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkField = deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkField;
function serializeUpdateWebLinkByIdRequestBodyArg(val) {
    return { ["url"]: val.url, ["parent"]: val.parent == void 0 ? void 0 : serializeUpdateWebLinkByIdRequestBodyArgParentField(val.parent), ["name"]: val.name, ["description"]: val.description, ["sharedLink"]: val.sharedLink == void 0 ? void 0 : serializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.serializeUpdateWebLinkByIdRequestBodyArg = serializeUpdateWebLinkByIdRequestBodyArg;
function deserializeUpdateWebLinkByIdRequestBodyArg(val) {
    const url = (0, json_js_2.isJson)(val.url, "string") ? val.url : void 0;
    const parent = val.parent == void 0 ? void 0 : deserializeUpdateWebLinkByIdRequestBodyArgParentField(val.parent);
    const name = (0, json_js_2.isJson)(val.name, "string") ? val.name : void 0;
    const description = (0, json_js_2.isJson)(val.description, "string") ? val.description : void 0;
    const sharedLink = val.sharedLink == void 0 ? void 0 : deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(val.sharedLink);
    return { url: url, parent: parent, name: name, description: description, sharedLink: sharedLink };
}
exports.deserializeUpdateWebLinkByIdRequestBodyArg = deserializeUpdateWebLinkByIdRequestBodyArg;
//# sourceMappingURL=webLinks.generated.js.map