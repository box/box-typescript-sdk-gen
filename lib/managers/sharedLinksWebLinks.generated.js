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
exports.deserializeUpdateWebLinkRemoveSharedLinkQueryParamsArg = exports.serializeUpdateWebLinkRemoveSharedLinkQueryParamsArg = exports.deserializeUpdateWebLinkRemoveSharedLinkRequestBodyArg = exports.serializeUpdateWebLinkRemoveSharedLinkRequestBodyArg = exports.deserializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField = exports.serializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField = exports.deserializeUpdateWebLinkUpdateSharedLinkQueryParamsArg = exports.serializeUpdateWebLinkUpdateSharedLinkQueryParamsArg = exports.deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArg = exports.serializeUpdateWebLinkUpdateSharedLinkRequestBodyArg = exports.deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField = exports.serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField = exports.deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.deserializeUpdateWebLinkAddSharedLinkQueryParamsArg = exports.serializeUpdateWebLinkAddSharedLinkQueryParamsArg = exports.deserializeUpdateWebLinkAddSharedLinkRequestBodyArg = exports.serializeUpdateWebLinkAddSharedLinkRequestBodyArg = exports.deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField = exports.serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField = exports.deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.deserializeGetWebLinkGetSharedLinkQueryParamsArg = exports.serializeGetWebLinkGetSharedLinkQueryParamsArg = exports.deserializeGetSharedItemWebLinksHeadersArg = exports.serializeGetSharedItemWebLinksHeadersArg = exports.deserializeGetSharedItemWebLinksQueryParamsArg = exports.serializeGetSharedItemWebLinksQueryParamsArg = exports.SharedLinksWebLinksManager = void 0;
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
            return (0, schemas_generated_js_1.deserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getWebLinkGetSharedLink(webLinkId, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#get_shared_link"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateWebLinkAddSharedLink(webLinkId, requestBody, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#add_shared_link"), { method: "PUT", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateWebLinkUpdateSharedLink(webLinkId, requestBody, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#update_shared_link"), { method: "PUT", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateWebLinkRemoveSharedLink(webLinkId, requestBody, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#remove_shared_link"), { method: "PUT", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.SharedLinksWebLinksManager = SharedLinksWebLinksManager;
function serializeGetSharedItemWebLinksQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeGetSharedItemWebLinksQueryParamsArg = serializeGetSharedItemWebLinksQueryParamsArg;
function deserializeGetSharedItemWebLinksQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeGetSharedItemWebLinksQueryParamsArg = deserializeGetSharedItemWebLinksQueryParamsArg;
function serializeGetSharedItemWebLinksHeadersArg(val) {
    return { ["ifNoneMatch"]: val.ifNoneMatch, ["boxapi"]: val.boxapi };
}
exports.serializeGetSharedItemWebLinksHeadersArg = serializeGetSharedItemWebLinksHeadersArg;
function deserializeGetSharedItemWebLinksHeadersArg(val) {
    const ifNoneMatch = (0, json_js_2.isJson)(val.ifNoneMatch, "string") ? val.ifNoneMatch : void 0;
    const boxapi = val.boxapi;
    return { ifNoneMatch: ifNoneMatch, boxapi: boxapi };
}
exports.deserializeGetSharedItemWebLinksHeadersArg = deserializeGetSharedItemWebLinksHeadersArg;
function serializeGetWebLinkGetSharedLinkQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeGetWebLinkGetSharedLinkQueryParamsArg = serializeGetWebLinkGetSharedLinkQueryParamsArg;
function deserializeGetWebLinkGetSharedLinkQueryParamsArg(val) {
    const fields = val.fields;
    return { fields: fields };
}
exports.deserializeGetWebLinkGetSharedLinkQueryParamsArg = deserializeGetWebLinkGetSharedLinkQueryParamsArg;
function serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
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
exports.deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    return { ["canDownload"]: val.canDownload, ["canPreview"]: val.canPreview, ["canEdit"]: val.canEdit };
}
exports.serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    const canDownload = (0, json_js_2.isJson)(val.canDownload, "boolean") ? val.canDownload : void 0;
    const canPreview = (0, json_js_2.isJson)(val.canPreview, "boolean") ? val.canPreview : void 0;
    const canEdit = (0, json_js_2.isJson)(val.canEdit, "boolean") ? val.canEdit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit };
}
exports.deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
exports.serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField = serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField;
function deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_2.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_2.isJson)(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt = (0, json_js_2.isJson)(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions = val.permissions == void 0 ? void 0 : deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions };
}
exports.deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField = deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField;
function serializeUpdateWebLinkAddSharedLinkRequestBodyArg(val) {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.serializeUpdateWebLinkAddSharedLinkRequestBodyArg = serializeUpdateWebLinkAddSharedLinkRequestBodyArg;
function deserializeUpdateWebLinkAddSharedLinkRequestBodyArg(val) {
    const sharedLink = val.sharedLink == void 0 ? void 0 : deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink };
}
exports.deserializeUpdateWebLinkAddSharedLinkRequestBodyArg = deserializeUpdateWebLinkAddSharedLinkRequestBodyArg;
function serializeUpdateWebLinkAddSharedLinkQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeUpdateWebLinkAddSharedLinkQueryParamsArg = serializeUpdateWebLinkAddSharedLinkQueryParamsArg;
function deserializeUpdateWebLinkAddSharedLinkQueryParamsArg(val) {
    const fields = val.fields;
    return { fields: fields };
}
exports.deserializeUpdateWebLinkAddSharedLinkQueryParamsArg = deserializeUpdateWebLinkAddSharedLinkQueryParamsArg;
function serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
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
exports.deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    return { ["canDownload"]: val.canDownload, ["canPreview"]: val.canPreview, ["canEdit"]: val.canEdit };
}
exports.serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    const canDownload = (0, json_js_2.isJson)(val.canDownload, "boolean") ? val.canDownload : void 0;
    const canPreview = (0, json_js_2.isJson)(val.canPreview, "boolean") ? val.canPreview : void 0;
    const canEdit = (0, json_js_2.isJson)(val.canEdit, "boolean") ? val.canEdit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit };
}
exports.deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
exports.serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField = serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField;
function deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_2.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_2.isJson)(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt = (0, json_js_2.isJson)(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions = val.permissions == void 0 ? void 0 : deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions };
}
exports.deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField = deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField;
function serializeUpdateWebLinkUpdateSharedLinkRequestBodyArg(val) {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.serializeUpdateWebLinkUpdateSharedLinkRequestBodyArg = serializeUpdateWebLinkUpdateSharedLinkRequestBodyArg;
function deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArg(val) {
    const sharedLink = val.sharedLink == void 0 ? void 0 : deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink };
}
exports.deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArg = deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArg;
function serializeUpdateWebLinkUpdateSharedLinkQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeUpdateWebLinkUpdateSharedLinkQueryParamsArg = serializeUpdateWebLinkUpdateSharedLinkQueryParamsArg;
function deserializeUpdateWebLinkUpdateSharedLinkQueryParamsArg(val) {
    const fields = val.fields;
    return { fields: fields };
}
exports.deserializeUpdateWebLinkUpdateSharedLinkQueryParamsArg = deserializeUpdateWebLinkUpdateSharedLinkQueryParamsArg;
function serializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField(val) {
    return {};
}
exports.serializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField = serializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField;
function deserializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField(val) {
    return {};
}
exports.deserializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField = deserializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField;
function serializeUpdateWebLinkRemoveSharedLinkRequestBodyArg(val) {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : serializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.serializeUpdateWebLinkRemoveSharedLinkRequestBodyArg = serializeUpdateWebLinkRemoveSharedLinkRequestBodyArg;
function deserializeUpdateWebLinkRemoveSharedLinkRequestBodyArg(val) {
    const sharedLink = val.sharedLink == void 0 ? void 0 : deserializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink };
}
exports.deserializeUpdateWebLinkRemoveSharedLinkRequestBodyArg = deserializeUpdateWebLinkRemoveSharedLinkRequestBodyArg;
function serializeUpdateWebLinkRemoveSharedLinkQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeUpdateWebLinkRemoveSharedLinkQueryParamsArg = serializeUpdateWebLinkRemoveSharedLinkQueryParamsArg;
function deserializeUpdateWebLinkRemoveSharedLinkQueryParamsArg(val) {
    const fields = val.fields;
    return { fields: fields };
}
exports.deserializeUpdateWebLinkRemoveSharedLinkQueryParamsArg = deserializeUpdateWebLinkRemoveSharedLinkQueryParamsArg;
//# sourceMappingURL=sharedLinksWebLinks.generated.js.map