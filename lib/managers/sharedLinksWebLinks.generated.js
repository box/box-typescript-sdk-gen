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
exports.deserializeUpdateWebLinkRemoveSharedLinkRequestBodyArg = exports.serializeUpdateWebLinkRemoveSharedLinkRequestBodyArg = exports.deserializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField = exports.serializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField = exports.deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArg = exports.serializeUpdateWebLinkUpdateSharedLinkRequestBodyArg = exports.deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField = exports.serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField = exports.deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.deserializeUpdateWebLinkAddSharedLinkRequestBodyArg = exports.serializeUpdateWebLinkAddSharedLinkRequestBodyArg = exports.deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField = exports.serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField = exports.deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.SharedLinksWebLinksManager = exports.UpdateWebLinkRemoveSharedLinkHeadersArg = exports.UpdateWebLinkUpdateSharedLinkHeadersArg = exports.UpdateWebLinkAddSharedLinkHeadersArg = exports.GetWebLinkGetSharedLinkHeadersArg = exports.GetSharedItemWebLinksHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetSharedItemWebLinksHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetSharedItemWebLinksHeadersArg = GetSharedItemWebLinksHeadersArg;
class GetWebLinkGetSharedLinkHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetWebLinkGetSharedLinkHeadersArg = GetWebLinkGetSharedLinkHeadersArg;
class UpdateWebLinkAddSharedLinkHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UpdateWebLinkAddSharedLinkHeadersArg = UpdateWebLinkAddSharedLinkHeadersArg;
class UpdateWebLinkUpdateSharedLinkHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UpdateWebLinkUpdateSharedLinkHeadersArg = UpdateWebLinkUpdateSharedLinkHeadersArg;
class UpdateWebLinkRemoveSharedLinkHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UpdateWebLinkRemoveSharedLinkHeadersArg = UpdateWebLinkRemoveSharedLinkHeadersArg;
class SharedLinksWebLinksManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getSharedItemWebLinks(queryParams = {}, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ["if-none-match"]: (0, utils_js_2.toString)(headers.ifNoneMatch), ["boxapi"]: (0, utils_js_2.toString)(headers.boxapi) }, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shared_items#web_links"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getWebLinkGetSharedLink(webLinkId, queryParams, headers = new GetWebLinkGetSharedLinkHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#get_shared_link"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateWebLinkAddSharedLink(webLinkId, requestBody, queryParams, headers = new UpdateWebLinkAddSharedLinkHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#add_shared_link"), { method: "PUT", params: queryParamsMap, headers: headersMap, body: (0, json_js_2.serializeJson)(serializeUpdateWebLinkAddSharedLinkRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateWebLinkUpdateSharedLink(webLinkId, requestBody, queryParams, headers = new UpdateWebLinkUpdateSharedLinkHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#update_shared_link"), { method: "PUT", params: queryParamsMap, headers: headersMap, body: (0, json_js_2.serializeJson)(serializeUpdateWebLinkUpdateSharedLinkRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateWebLinkRemoveSharedLink(webLinkId, requestBody, queryParams, headers = new UpdateWebLinkRemoveSharedLinkHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#remove_shared_link"), { method: "PUT", params: queryParamsMap, headers: headersMap, body: (0, json_js_2.serializeJson)(serializeUpdateWebLinkRemoveSharedLinkRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWebLink)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.SharedLinksWebLinksManager = SharedLinksWebLinksManager;
function serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
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
    return { ["can_download"]: val.canDownload, ["can_preview"]: val.canPreview, ["can_edit"]: val.canEdit };
}
exports.serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    const canDownload = (0, json_js_3.isJson)(val.can_download, "boolean") ? val.can_download : void 0;
    const canPreview = (0, json_js_3.isJson)(val.can_preview, "boolean") ? val.can_preview : void 0;
    const canEdit = (0, json_js_3.isJson)(val.can_edit, "boolean") ? val.can_edit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit };
}
exports.deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanity_name"]: val.vanityName, ["unshared_at"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
exports.serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField = serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField;
function deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_3.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_3.isJson)(val.vanity_name, "string") ? val.vanity_name : void 0;
    const unsharedAt = (0, json_js_3.isJson)(val.unshared_at, "string") ? val.unshared_at : void 0;
    const permissions = val.permissions == void 0 ? void 0 : deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions };
}
exports.deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField = deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField;
function serializeUpdateWebLinkAddSharedLinkRequestBodyArg(val) {
    return { ["shared_link"]: val.sharedLink == void 0 ? void 0 : serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.serializeUpdateWebLinkAddSharedLinkRequestBodyArg = serializeUpdateWebLinkAddSharedLinkRequestBodyArg;
function deserializeUpdateWebLinkAddSharedLinkRequestBodyArg(val) {
    const sharedLink = val.shared_link == void 0 ? void 0 : deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField(val.shared_link);
    return { sharedLink: sharedLink };
}
exports.deserializeUpdateWebLinkAddSharedLinkRequestBodyArg = deserializeUpdateWebLinkAddSharedLinkRequestBodyArg;
function serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
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
    return { ["can_download"]: val.canDownload, ["can_preview"]: val.canPreview, ["can_edit"]: val.canEdit };
}
exports.serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    const canDownload = (0, json_js_3.isJson)(val.can_download, "boolean") ? val.can_download : void 0;
    const canPreview = (0, json_js_3.isJson)(val.can_preview, "boolean") ? val.can_preview : void 0;
    const canEdit = (0, json_js_3.isJson)(val.can_edit, "boolean") ? val.can_edit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit };
}
exports.deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanity_name"]: val.vanityName, ["unshared_at"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
exports.serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField = serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField;
function deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_3.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_3.isJson)(val.vanity_name, "string") ? val.vanity_name : void 0;
    const unsharedAt = (0, json_js_3.isJson)(val.unshared_at, "string") ? val.unshared_at : void 0;
    const permissions = val.permissions == void 0 ? void 0 : deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions };
}
exports.deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField = deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField;
function serializeUpdateWebLinkUpdateSharedLinkRequestBodyArg(val) {
    return { ["shared_link"]: val.sharedLink == void 0 ? void 0 : serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.serializeUpdateWebLinkUpdateSharedLinkRequestBodyArg = serializeUpdateWebLinkUpdateSharedLinkRequestBodyArg;
function deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArg(val) {
    const sharedLink = val.shared_link == void 0 ? void 0 : deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField(val.shared_link);
    return { sharedLink: sharedLink };
}
exports.deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArg = deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArg;
function serializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField(val) {
    return {};
}
exports.serializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField = serializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField;
function deserializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField(val) {
    return {};
}
exports.deserializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField = deserializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField;
function serializeUpdateWebLinkRemoveSharedLinkRequestBodyArg(val) {
    return { ["shared_link"]: val.sharedLink == void 0 ? void 0 : serializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.serializeUpdateWebLinkRemoveSharedLinkRequestBodyArg = serializeUpdateWebLinkRemoveSharedLinkRequestBodyArg;
function deserializeUpdateWebLinkRemoveSharedLinkRequestBodyArg(val) {
    const sharedLink = val.shared_link == void 0 ? void 0 : deserializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField(val.shared_link);
    return { sharedLink: sharedLink };
}
exports.deserializeUpdateWebLinkRemoveSharedLinkRequestBodyArg = deserializeUpdateWebLinkRemoveSharedLinkRequestBodyArg;
//# sourceMappingURL=sharedLinksWebLinks.generated.js.map