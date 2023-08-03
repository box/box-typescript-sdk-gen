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
exports.deserializeUpdateFolderRemoveSharedLinkRequestBodyArg = exports.serializeUpdateFolderRemoveSharedLinkRequestBodyArg = exports.deserializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField = exports.serializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField = exports.deserializeUpdateFolderUpdateSharedLinkRequestBodyArg = exports.serializeUpdateFolderUpdateSharedLinkRequestBodyArg = exports.deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField = exports.serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField = exports.deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.deserializeUpdateFolderAddSharedLinkRequestBodyArg = exports.serializeUpdateFolderAddSharedLinkRequestBodyArg = exports.deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField = exports.serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField = exports.deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.SharedLinksFoldersManager = exports.UpdateFolderRemoveSharedLinkHeadersArg = exports.UpdateFolderUpdateSharedLinkHeadersArg = exports.UpdateFolderAddSharedLinkHeadersArg = exports.GetFolderGetSharedLinkHeadersArg = exports.GetSharedItemFoldersHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetSharedItemFoldersHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetSharedItemFoldersHeadersArg = GetSharedItemFoldersHeadersArg;
class GetFolderGetSharedLinkHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetFolderGetSharedLinkHeadersArg = GetFolderGetSharedLinkHeadersArg;
class UpdateFolderAddSharedLinkHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UpdateFolderAddSharedLinkHeadersArg = UpdateFolderAddSharedLinkHeadersArg;
class UpdateFolderUpdateSharedLinkHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UpdateFolderUpdateSharedLinkHeadersArg = UpdateFolderUpdateSharedLinkHeadersArg;
class UpdateFolderRemoveSharedLinkHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UpdateFolderRemoveSharedLinkHeadersArg = UpdateFolderRemoveSharedLinkHeadersArg;
class SharedLinksFoldersManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getSharedItemFolders(queryParams = {}, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ["if-none-match"]: (0, utils_js_2.toString)(headers.ifNoneMatch), ["boxapi"]: (0, utils_js_2.toString)(headers.boxapi) }, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shared_items#folders"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFolderGetSharedLink(folderId, queryParams, headers = new GetFolderGetSharedLinkHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "#get_shared_link"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFolderAddSharedLink(folderId, requestBody, queryParams, headers = new UpdateFolderAddSharedLinkHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "#add_shared_link"), { method: "PUT", params: queryParamsMap, headers: headersMap, body: (0, json_js_2.serializeJson)(serializeUpdateFolderAddSharedLinkRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFolderUpdateSharedLink(folderId, requestBody, queryParams, headers = new UpdateFolderUpdateSharedLinkHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "#update_shared_link"), { method: "PUT", params: queryParamsMap, headers: headersMap, body: (0, json_js_2.serializeJson)(serializeUpdateFolderUpdateSharedLinkRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFolderRemoveSharedLink(folderId, requestBody, queryParams, headers = new UpdateFolderRemoveSharedLinkHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "#remove_shared_link"), { method: "PUT", params: queryParamsMap, headers: headersMap, body: (0, json_js_2.serializeJson)(serializeUpdateFolderRemoveSharedLinkRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.SharedLinksFoldersManager = SharedLinksFoldersManager;
function serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField\"";
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
exports.deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    return { ["can_download"]: val.canDownload, ["can_preview"]: val.canPreview, ["can_edit"]: val.canEdit };
}
exports.serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    const canDownload = (0, json_js_3.isJson)(val.can_download, "boolean") ? val.can_download : void 0;
    const canPreview = (0, json_js_3.isJson)(val.can_preview, "boolean") ? val.can_preview : void 0;
    const canEdit = (0, json_js_3.isJson)(val.can_edit, "boolean") ? val.can_edit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit };
}
exports.deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanity_name"]: val.vanityName, ["unshared_at"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
exports.serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField = serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField;
function deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_3.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_3.isJson)(val.vanity_name, "string") ? val.vanity_name : void 0;
    const unsharedAt = (0, json_js_3.isJson)(val.unshared_at, "string") ? val.unshared_at : void 0;
    const permissions = val.permissions == void 0 ? void 0 : deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions };
}
exports.deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField = deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField;
function serializeUpdateFolderAddSharedLinkRequestBodyArg(val) {
    return { ["shared_link"]: val.sharedLink == void 0 ? void 0 : serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.serializeUpdateFolderAddSharedLinkRequestBodyArg = serializeUpdateFolderAddSharedLinkRequestBodyArg;
function deserializeUpdateFolderAddSharedLinkRequestBodyArg(val) {
    const sharedLink = val.shared_link == void 0 ? void 0 : deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(val.shared_link);
    return { sharedLink: sharedLink };
}
exports.deserializeUpdateFolderAddSharedLinkRequestBodyArg = deserializeUpdateFolderAddSharedLinkRequestBodyArg;
function serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField\"";
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
exports.deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    return { ["can_download"]: val.canDownload, ["can_preview"]: val.canPreview, ["can_edit"]: val.canEdit };
}
exports.serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    const canDownload = (0, json_js_3.isJson)(val.can_download, "boolean") ? val.can_download : void 0;
    const canPreview = (0, json_js_3.isJson)(val.can_preview, "boolean") ? val.can_preview : void 0;
    const canEdit = (0, json_js_3.isJson)(val.can_edit, "boolean") ? val.can_edit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit };
}
exports.deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanity_name"]: val.vanityName, ["unshared_at"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
exports.serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField = serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField;
function deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_3.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_3.isJson)(val.vanity_name, "string") ? val.vanity_name : void 0;
    const unsharedAt = (0, json_js_3.isJson)(val.unshared_at, "string") ? val.unshared_at : void 0;
    const permissions = val.permissions == void 0 ? void 0 : deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions };
}
exports.deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField = deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField;
function serializeUpdateFolderUpdateSharedLinkRequestBodyArg(val) {
    return { ["shared_link"]: val.sharedLink == void 0 ? void 0 : serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.serializeUpdateFolderUpdateSharedLinkRequestBodyArg = serializeUpdateFolderUpdateSharedLinkRequestBodyArg;
function deserializeUpdateFolderUpdateSharedLinkRequestBodyArg(val) {
    const sharedLink = val.shared_link == void 0 ? void 0 : deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(val.shared_link);
    return { sharedLink: sharedLink };
}
exports.deserializeUpdateFolderUpdateSharedLinkRequestBodyArg = deserializeUpdateFolderUpdateSharedLinkRequestBodyArg;
function serializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(val) {
    return {};
}
exports.serializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField = serializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField;
function deserializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(val) {
    return {};
}
exports.deserializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField = deserializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField;
function serializeUpdateFolderRemoveSharedLinkRequestBodyArg(val) {
    return { ["shared_link"]: val.sharedLink == void 0 ? void 0 : serializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.serializeUpdateFolderRemoveSharedLinkRequestBodyArg = serializeUpdateFolderRemoveSharedLinkRequestBodyArg;
function deserializeUpdateFolderRemoveSharedLinkRequestBodyArg(val) {
    const sharedLink = val.shared_link == void 0 ? void 0 : deserializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(val.shared_link);
    return { sharedLink: sharedLink };
}
exports.deserializeUpdateFolderRemoveSharedLinkRequestBodyArg = deserializeUpdateFolderRemoveSharedLinkRequestBodyArg;
//# sourceMappingURL=sharedLinksFolders.generated.js.map