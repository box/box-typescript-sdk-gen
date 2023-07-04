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
exports.newDeserializeUpdateWebLinkRemoveSharedLinkQueryParamsArg = exports.newSerializeUpdateWebLinkRemoveSharedLinkQueryParamsArg = exports.newDeserializeUpdateWebLinkRemoveSharedLinkRequestBodyArg = exports.newSerializeUpdateWebLinkRemoveSharedLinkRequestBodyArg = exports.newDeserializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField = exports.newSerializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField = exports.newDeserializeUpdateWebLinkUpdateSharedLinkQueryParamsArg = exports.newSerializeUpdateWebLinkUpdateSharedLinkQueryParamsArg = exports.newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArg = exports.newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArg = exports.newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField = exports.newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField = exports.newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.newDeserializeUpdateWebLinkAddSharedLinkQueryParamsArg = exports.newSerializeUpdateWebLinkAddSharedLinkQueryParamsArg = exports.newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArg = exports.newSerializeUpdateWebLinkAddSharedLinkRequestBodyArg = exports.newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField = exports.newSerializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField = exports.newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.newSerializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.newSerializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.newDeserializeGetWebLinkGetSharedLinkQueryParamsArg = exports.newSerializeGetWebLinkGetSharedLinkQueryParamsArg = exports.newDeserializeGetSharedItemWebLinksHeadersArg = exports.newSerializeGetSharedItemWebLinksHeadersArg = exports.newDeserializeGetSharedItemWebLinksQueryParamsArg = exports.newSerializeGetSharedItemWebLinksQueryParamsArg = exports.SharedLinksWebLinksManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class SharedLinksWebLinksManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getSharedItemWebLinks(queryParams = {}, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shared_items#web_links"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), headers: (0, utils_js_1.toMap)(headers), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getWebLinkGetSharedLink(webLinkId, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#get_shared_link"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateWebLinkAddSharedLink(webLinkId, requestBody, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#add_shared_link"), { method: "PUT", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateWebLinkUpdateSharedLink(webLinkId, requestBody, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#update_shared_link"), { method: "PUT", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateWebLinkRemoveSharedLink(webLinkId, requestBody, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#remove_shared_link"), { method: "PUT", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.SharedLinksWebLinksManager = SharedLinksWebLinksManager;
function newSerializeGetSharedItemWebLinksQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeGetSharedItemWebLinksQueryParamsArg = newSerializeGetSharedItemWebLinksQueryParamsArg;
function newDeserializeGetSharedItemWebLinksQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeGetSharedItemWebLinksQueryParamsArg = newDeserializeGetSharedItemWebLinksQueryParamsArg;
function newSerializeGetSharedItemWebLinksHeadersArg(val) {
    return { ["ifNoneMatch"]: val.ifNoneMatch, ["boxapi"]: val.boxapi };
}
exports.newSerializeGetSharedItemWebLinksHeadersArg = newSerializeGetSharedItemWebLinksHeadersArg;
function newDeserializeGetSharedItemWebLinksHeadersArg(val) {
    const ifNoneMatch = (0, json_js_2.isJson)(val.ifNoneMatch, "string") ? val.ifNoneMatch : void 0;
    const boxapi = val.boxapi;
    return { ifNoneMatch: ifNoneMatch, boxapi: boxapi };
}
exports.newDeserializeGetSharedItemWebLinksHeadersArg = newDeserializeGetSharedItemWebLinksHeadersArg;
function newSerializeGetWebLinkGetSharedLinkQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeGetWebLinkGetSharedLinkQueryParamsArg = newSerializeGetWebLinkGetSharedLinkQueryParamsArg;
function newDeserializeGetWebLinkGetSharedLinkQueryParamsArg(val) {
    const fields = val.fields;
    return { fields: fields };
}
exports.newDeserializeGetWebLinkGetSharedLinkQueryParamsArg = newDeserializeGetWebLinkGetSharedLinkQueryParamsArg;
function newSerializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.newSerializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = newSerializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField\"";
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
exports.newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function newSerializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    return { ["canDownload"]: val.canDownload, ["canPreview"]: val.canPreview, ["canEdit"]: val.canEdit };
}
exports.newSerializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = newSerializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    const canDownload = (0, json_js_2.isJson)(val.canDownload, "boolean") ? val.canDownload : void 0;
    const canPreview = (0, json_js_2.isJson)(val.canPreview, "boolean") ? val.canPreview : void 0;
    const canEdit = (0, json_js_2.isJson)(val.canEdit, "boolean") ? val.canEdit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit };
}
exports.newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function newSerializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : newSerializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
exports.newSerializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField = newSerializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField;
function newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_2.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_2.isJson)(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt = (0, json_js_2.isJson)(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions = val.permissions == void 0 ? void 0 : newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions };
}
exports.newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField = newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField;
function newSerializeUpdateWebLinkAddSharedLinkRequestBodyArg(val) {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.newSerializeUpdateWebLinkAddSharedLinkRequestBodyArg = newSerializeUpdateWebLinkAddSharedLinkRequestBodyArg;
function newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArg(val) {
    const sharedLink = val.sharedLink == void 0 ? void 0 : newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink };
}
exports.newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArg = newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArg;
function newSerializeUpdateWebLinkAddSharedLinkQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeUpdateWebLinkAddSharedLinkQueryParamsArg = newSerializeUpdateWebLinkAddSharedLinkQueryParamsArg;
function newDeserializeUpdateWebLinkAddSharedLinkQueryParamsArg(val) {
    const fields = val.fields;
    return { fields: fields };
}
exports.newDeserializeUpdateWebLinkAddSharedLinkQueryParamsArg = newDeserializeUpdateWebLinkAddSharedLinkQueryParamsArg;
function newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField\"";
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
exports.newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    return { ["canDownload"]: val.canDownload, ["canPreview"]: val.canPreview, ["canEdit"]: val.canEdit };
}
exports.newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    const canDownload = (0, json_js_2.isJson)(val.canDownload, "boolean") ? val.canDownload : void 0;
    const canPreview = (0, json_js_2.isJson)(val.canPreview, "boolean") ? val.canPreview : void 0;
    const canEdit = (0, json_js_2.isJson)(val.canEdit, "boolean") ? val.canEdit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit };
}
exports.newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
exports.newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField = newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField;
function newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_2.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_2.isJson)(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt = (0, json_js_2.isJson)(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions = val.permissions == void 0 ? void 0 : newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions };
}
exports.newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField = newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField;
function newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArg(val) {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArg = newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArg;
function newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArg(val) {
    const sharedLink = val.sharedLink == void 0 ? void 0 : newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink };
}
exports.newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArg = newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArg;
function newSerializeUpdateWebLinkUpdateSharedLinkQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeUpdateWebLinkUpdateSharedLinkQueryParamsArg = newSerializeUpdateWebLinkUpdateSharedLinkQueryParamsArg;
function newDeserializeUpdateWebLinkUpdateSharedLinkQueryParamsArg(val) {
    const fields = val.fields;
    return { fields: fields };
}
exports.newDeserializeUpdateWebLinkUpdateSharedLinkQueryParamsArg = newDeserializeUpdateWebLinkUpdateSharedLinkQueryParamsArg;
function newSerializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField(val) {
    return {};
}
exports.newSerializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField = newSerializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField;
function newDeserializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField(val) {
    return {};
}
exports.newDeserializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField = newDeserializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField;
function newSerializeUpdateWebLinkRemoveSharedLinkRequestBodyArg(val) {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.newSerializeUpdateWebLinkRemoveSharedLinkRequestBodyArg = newSerializeUpdateWebLinkRemoveSharedLinkRequestBodyArg;
function newDeserializeUpdateWebLinkRemoveSharedLinkRequestBodyArg(val) {
    const sharedLink = val.sharedLink == void 0 ? void 0 : newDeserializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink };
}
exports.newDeserializeUpdateWebLinkRemoveSharedLinkRequestBodyArg = newDeserializeUpdateWebLinkRemoveSharedLinkRequestBodyArg;
function newSerializeUpdateWebLinkRemoveSharedLinkQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeUpdateWebLinkRemoveSharedLinkQueryParamsArg = newSerializeUpdateWebLinkRemoveSharedLinkQueryParamsArg;
function newDeserializeUpdateWebLinkRemoveSharedLinkQueryParamsArg(val) {
    const fields = val.fields;
    return { fields: fields };
}
exports.newDeserializeUpdateWebLinkRemoveSharedLinkQueryParamsArg = newDeserializeUpdateWebLinkRemoveSharedLinkQueryParamsArg;
//# sourceMappingURL=sharedLinksWebLinks.generated.js.map