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
exports.newDeserializeUpdateWebLinkByIdRequestBodyArg = exports.newSerializeUpdateWebLinkByIdRequestBodyArg = exports.newDeserializeUpdateWebLinkByIdRequestBodyArgSharedLinkField = exports.newSerializeUpdateWebLinkByIdRequestBodyArgSharedLinkField = exports.newDeserializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField = exports.newSerializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField = exports.newDeserializeUpdateWebLinkByIdRequestBodyArgParentField = exports.newSerializeUpdateWebLinkByIdRequestBodyArgParentField = exports.newDeserializeGetWebLinkByIdHeadersArg = exports.newSerializeGetWebLinkByIdHeadersArg = exports.newDeserializeCreateWebLinkRequestBodyArg = exports.newSerializeCreateWebLinkRequestBodyArg = exports.newDeserializeCreateWebLinkRequestBodyArgSharedLinkField = exports.newSerializeCreateWebLinkRequestBodyArgSharedLinkField = exports.newDeserializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField = exports.newSerializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField = exports.newDeserializeCreateWebLinkRequestBodyArgParentField = exports.newSerializeCreateWebLinkRequestBodyArgParentField = exports.WebLinksManager = void 0;
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
            return (0, schemas_generated_js_1.newDeserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getWebLinkById(webLinkId, headers = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId), { method: "GET", headers: (0, utils_js_1.toMap)(headers), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateWebLinkById(webLinkId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId), { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
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
function newSerializeCreateWebLinkRequestBodyArgParentField(val) {
    return { ["id"]: val.id };
}
exports.newSerializeCreateWebLinkRequestBodyArgParentField = newSerializeCreateWebLinkRequestBodyArgParentField;
function newDeserializeCreateWebLinkRequestBodyArgParentField(val) {
    const id = val.id;
    return { id: id };
}
exports.newDeserializeCreateWebLinkRequestBodyArgParentField = newDeserializeCreateWebLinkRequestBodyArgParentField;
function newSerializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.newSerializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField = newSerializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField;
function newDeserializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField(val) {
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
exports.newDeserializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField = newDeserializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField;
function newSerializeCreateWebLinkRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt };
}
exports.newSerializeCreateWebLinkRequestBodyArgSharedLinkField = newSerializeCreateWebLinkRequestBodyArgSharedLinkField;
function newDeserializeCreateWebLinkRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : newDeserializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_2.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_2.isJson)(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt = (0, json_js_2.isJson)(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt };
}
exports.newDeserializeCreateWebLinkRequestBodyArgSharedLinkField = newDeserializeCreateWebLinkRequestBodyArgSharedLinkField;
function newSerializeCreateWebLinkRequestBodyArg(val) {
    return { ["url"]: val.url, ["parent"]: newSerializeCreateWebLinkRequestBodyArgParentField(val.parent), ["name"]: val.name, ["description"]: val.description, ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeCreateWebLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.newSerializeCreateWebLinkRequestBodyArg = newSerializeCreateWebLinkRequestBodyArg;
function newDeserializeCreateWebLinkRequestBodyArg(val) {
    const url = val.url;
    const parent = newDeserializeCreateWebLinkRequestBodyArgParentField(val.parent);
    const name = (0, json_js_2.isJson)(val.name, "string") ? val.name : void 0;
    const description = (0, json_js_2.isJson)(val.description, "string") ? val.description : void 0;
    const sharedLink = val.sharedLink == void 0 ? void 0 : newDeserializeCreateWebLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { url: url, parent: parent, name: name, description: description, sharedLink: sharedLink };
}
exports.newDeserializeCreateWebLinkRequestBodyArg = newDeserializeCreateWebLinkRequestBodyArg;
function newSerializeGetWebLinkByIdHeadersArg(val) {
    return { ["boxapi"]: val.boxapi };
}
exports.newSerializeGetWebLinkByIdHeadersArg = newSerializeGetWebLinkByIdHeadersArg;
function newDeserializeGetWebLinkByIdHeadersArg(val) {
    const boxapi = (0, json_js_2.isJson)(val.boxapi, "string") ? val.boxapi : void 0;
    return { boxapi: boxapi };
}
exports.newDeserializeGetWebLinkByIdHeadersArg = newDeserializeGetWebLinkByIdHeadersArg;
function newSerializeUpdateWebLinkByIdRequestBodyArgParentField(val) {
    return { ["id"]: val.id };
}
exports.newSerializeUpdateWebLinkByIdRequestBodyArgParentField = newSerializeUpdateWebLinkByIdRequestBodyArgParentField;
function newDeserializeUpdateWebLinkByIdRequestBodyArgParentField(val) {
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    return { id: id };
}
exports.newDeserializeUpdateWebLinkByIdRequestBodyArgParentField = newDeserializeUpdateWebLinkByIdRequestBodyArgParentField;
function newSerializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.newSerializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField = newSerializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField;
function newDeserializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(val) {
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
exports.newDeserializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField = newDeserializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField;
function newSerializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt };
}
exports.newSerializeUpdateWebLinkByIdRequestBodyArgSharedLinkField = newSerializeUpdateWebLinkByIdRequestBodyArgSharedLinkField;
function newDeserializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : newDeserializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_2.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_2.isJson)(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt = (0, json_js_2.isJson)(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt };
}
exports.newDeserializeUpdateWebLinkByIdRequestBodyArgSharedLinkField = newDeserializeUpdateWebLinkByIdRequestBodyArgSharedLinkField;
function newSerializeUpdateWebLinkByIdRequestBodyArg(val) {
    return { ["url"]: val.url, ["parent"]: val.parent == void 0 ? void 0 : newSerializeUpdateWebLinkByIdRequestBodyArgParentField(val.parent), ["name"]: val.name, ["description"]: val.description, ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.newSerializeUpdateWebLinkByIdRequestBodyArg = newSerializeUpdateWebLinkByIdRequestBodyArg;
function newDeserializeUpdateWebLinkByIdRequestBodyArg(val) {
    const url = (0, json_js_2.isJson)(val.url, "string") ? val.url : void 0;
    const parent = val.parent == void 0 ? void 0 : newDeserializeUpdateWebLinkByIdRequestBodyArgParentField(val.parent);
    const name = (0, json_js_2.isJson)(val.name, "string") ? val.name : void 0;
    const description = (0, json_js_2.isJson)(val.description, "string") ? val.description : void 0;
    const sharedLink = val.sharedLink == void 0 ? void 0 : newDeserializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(val.sharedLink);
    return { url: url, parent: parent, name: name, description: description, sharedLink: sharedLink };
}
exports.newDeserializeUpdateWebLinkByIdRequestBodyArg = newDeserializeUpdateWebLinkByIdRequestBodyArg;
//# sourceMappingURL=webLinks.generated.js.map