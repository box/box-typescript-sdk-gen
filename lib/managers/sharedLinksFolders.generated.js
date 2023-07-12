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
exports.deserializeUpdateFolderRemoveSharedLinkQueryParamsArg = exports.serializeUpdateFolderRemoveSharedLinkQueryParamsArg = exports.deserializeUpdateFolderRemoveSharedLinkRequestBodyArg = exports.serializeUpdateFolderRemoveSharedLinkRequestBodyArg = exports.deserializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField = exports.serializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField = exports.deserializeUpdateFolderUpdateSharedLinkQueryParamsArg = exports.serializeUpdateFolderUpdateSharedLinkQueryParamsArg = exports.deserializeUpdateFolderUpdateSharedLinkRequestBodyArg = exports.serializeUpdateFolderUpdateSharedLinkRequestBodyArg = exports.deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField = exports.serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField = exports.deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.deserializeUpdateFolderAddSharedLinkQueryParamsArg = exports.serializeUpdateFolderAddSharedLinkQueryParamsArg = exports.deserializeUpdateFolderAddSharedLinkRequestBodyArg = exports.serializeUpdateFolderAddSharedLinkRequestBodyArg = exports.deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField = exports.serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField = exports.deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.deserializeGetFolderGetSharedLinkQueryParamsArg = exports.serializeGetFolderGetSharedLinkQueryParamsArg = exports.deserializeGetSharedItemFoldersHeadersArg = exports.serializeGetSharedItemFoldersHeadersArg = exports.deserializeGetSharedItemFoldersQueryParamsArg = exports.serializeGetSharedItemFoldersQueryParamsArg = exports.SharedLinksFoldersManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class SharedLinksFoldersManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getSharedItemFolders(queryParams = {}, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shared_items#folders"), { method: "GET", params: (0, utils_js_1.prepareParams)(queryParams), headers: (0, utils_js_1.prepareParams)(headers), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFolderGetSharedLink(folderId, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "#get_shared_link"), { method: "GET", params: (0, utils_js_1.prepareParams)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFolderAddSharedLink(folderId, requestBody, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "#add_shared_link"), { method: "PUT", params: (0, utils_js_1.prepareParams)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFolderUpdateSharedLink(folderId, requestBody, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "#update_shared_link"), { method: "PUT", params: (0, utils_js_1.prepareParams)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFolderRemoveSharedLink(folderId, requestBody, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "#remove_shared_link"), { method: "PUT", params: (0, utils_js_1.prepareParams)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.SharedLinksFoldersManager = SharedLinksFoldersManager;
function serializeGetSharedItemFoldersQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeGetSharedItemFoldersQueryParamsArg = serializeGetSharedItemFoldersQueryParamsArg;
function deserializeGetSharedItemFoldersQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeGetSharedItemFoldersQueryParamsArg = deserializeGetSharedItemFoldersQueryParamsArg;
function serializeGetSharedItemFoldersHeadersArg(val) {
    return { ["ifNoneMatch"]: val.ifNoneMatch, ["boxapi"]: val.boxapi };
}
exports.serializeGetSharedItemFoldersHeadersArg = serializeGetSharedItemFoldersHeadersArg;
function deserializeGetSharedItemFoldersHeadersArg(val) {
    const ifNoneMatch = (0, json_js_2.isJson)(val.ifNoneMatch, "string") ? val.ifNoneMatch : void 0;
    const boxapi = val.boxapi;
    return { ifNoneMatch: ifNoneMatch, boxapi: boxapi };
}
exports.deserializeGetSharedItemFoldersHeadersArg = deserializeGetSharedItemFoldersHeadersArg;
function serializeGetFolderGetSharedLinkQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeGetFolderGetSharedLinkQueryParamsArg = serializeGetFolderGetSharedLinkQueryParamsArg;
function deserializeGetFolderGetSharedLinkQueryParamsArg(val) {
    const fields = val.fields;
    return { fields: fields };
}
exports.deserializeGetFolderGetSharedLinkQueryParamsArg = deserializeGetFolderGetSharedLinkQueryParamsArg;
function serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
    return { ["canDownload"]: val.canDownload, ["canPreview"]: val.canPreview, ["canEdit"]: val.canEdit };
}
exports.serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    const canDownload = (0, json_js_2.isJson)(val.canDownload, "boolean") ? val.canDownload : void 0;
    const canPreview = (0, json_js_2.isJson)(val.canPreview, "boolean") ? val.canPreview : void 0;
    const canEdit = (0, json_js_2.isJson)(val.canEdit, "boolean") ? val.canEdit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit };
}
exports.deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
exports.serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField = serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField;
function deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_2.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_2.isJson)(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt = (0, json_js_2.isJson)(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions = val.permissions == void 0 ? void 0 : deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions };
}
exports.deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField = deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField;
function serializeUpdateFolderAddSharedLinkRequestBodyArg(val) {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.serializeUpdateFolderAddSharedLinkRequestBodyArg = serializeUpdateFolderAddSharedLinkRequestBodyArg;
function deserializeUpdateFolderAddSharedLinkRequestBodyArg(val) {
    const sharedLink = val.sharedLink == void 0 ? void 0 : deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink };
}
exports.deserializeUpdateFolderAddSharedLinkRequestBodyArg = deserializeUpdateFolderAddSharedLinkRequestBodyArg;
function serializeUpdateFolderAddSharedLinkQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeUpdateFolderAddSharedLinkQueryParamsArg = serializeUpdateFolderAddSharedLinkQueryParamsArg;
function deserializeUpdateFolderAddSharedLinkQueryParamsArg(val) {
    const fields = val.fields;
    return { fields: fields };
}
exports.deserializeUpdateFolderAddSharedLinkQueryParamsArg = deserializeUpdateFolderAddSharedLinkQueryParamsArg;
function serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
    return { ["canDownload"]: val.canDownload, ["canPreview"]: val.canPreview, ["canEdit"]: val.canEdit };
}
exports.serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    const canDownload = (0, json_js_2.isJson)(val.canDownload, "boolean") ? val.canDownload : void 0;
    const canPreview = (0, json_js_2.isJson)(val.canPreview, "boolean") ? val.canPreview : void 0;
    const canEdit = (0, json_js_2.isJson)(val.canEdit, "boolean") ? val.canEdit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit };
}
exports.deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
exports.serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField = serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField;
function deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_2.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_2.isJson)(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt = (0, json_js_2.isJson)(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions = val.permissions == void 0 ? void 0 : deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions };
}
exports.deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField = deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField;
function serializeUpdateFolderUpdateSharedLinkRequestBodyArg(val) {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.serializeUpdateFolderUpdateSharedLinkRequestBodyArg = serializeUpdateFolderUpdateSharedLinkRequestBodyArg;
function deserializeUpdateFolderUpdateSharedLinkRequestBodyArg(val) {
    const sharedLink = val.sharedLink == void 0 ? void 0 : deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink };
}
exports.deserializeUpdateFolderUpdateSharedLinkRequestBodyArg = deserializeUpdateFolderUpdateSharedLinkRequestBodyArg;
function serializeUpdateFolderUpdateSharedLinkQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeUpdateFolderUpdateSharedLinkQueryParamsArg = serializeUpdateFolderUpdateSharedLinkQueryParamsArg;
function deserializeUpdateFolderUpdateSharedLinkQueryParamsArg(val) {
    const fields = val.fields;
    return { fields: fields };
}
exports.deserializeUpdateFolderUpdateSharedLinkQueryParamsArg = deserializeUpdateFolderUpdateSharedLinkQueryParamsArg;
function serializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(val) {
    return {};
}
exports.serializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField = serializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField;
function deserializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(val) {
    return {};
}
exports.deserializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField = deserializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField;
function serializeUpdateFolderRemoveSharedLinkRequestBodyArg(val) {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : serializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.serializeUpdateFolderRemoveSharedLinkRequestBodyArg = serializeUpdateFolderRemoveSharedLinkRequestBodyArg;
function deserializeUpdateFolderRemoveSharedLinkRequestBodyArg(val) {
    const sharedLink = val.sharedLink == void 0 ? void 0 : deserializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink };
}
exports.deserializeUpdateFolderRemoveSharedLinkRequestBodyArg = deserializeUpdateFolderRemoveSharedLinkRequestBodyArg;
function serializeUpdateFolderRemoveSharedLinkQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeUpdateFolderRemoveSharedLinkQueryParamsArg = serializeUpdateFolderRemoveSharedLinkQueryParamsArg;
function deserializeUpdateFolderRemoveSharedLinkQueryParamsArg(val) {
    const fields = val.fields;
    return { fields: fields };
}
exports.deserializeUpdateFolderRemoveSharedLinkQueryParamsArg = deserializeUpdateFolderRemoveSharedLinkQueryParamsArg;
//# sourceMappingURL=sharedLinksFolders.generated.js.map