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
exports.newDeserializeUpdateFolderRemoveSharedLinkQueryParamsArg = exports.newSerializeUpdateFolderRemoveSharedLinkQueryParamsArg = exports.newDeserializeUpdateFolderRemoveSharedLinkRequestBodyArg = exports.newSerializeUpdateFolderRemoveSharedLinkRequestBodyArg = exports.newDeserializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField = exports.newSerializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField = exports.newDeserializeUpdateFolderUpdateSharedLinkQueryParamsArg = exports.newSerializeUpdateFolderUpdateSharedLinkQueryParamsArg = exports.newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArg = exports.newSerializeUpdateFolderUpdateSharedLinkRequestBodyArg = exports.newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField = exports.newSerializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField = exports.newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.newSerializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.newSerializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.newDeserializeUpdateFolderAddSharedLinkQueryParamsArg = exports.newSerializeUpdateFolderAddSharedLinkQueryParamsArg = exports.newDeserializeUpdateFolderAddSharedLinkRequestBodyArg = exports.newSerializeUpdateFolderAddSharedLinkRequestBodyArg = exports.newDeserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField = exports.newSerializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField = exports.newDeserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.newSerializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.newDeserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.newSerializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.newDeserializeGetFolderGetSharedLinkQueryParamsArg = exports.newSerializeGetFolderGetSharedLinkQueryParamsArg = exports.newDeserializeGetSharedItemFoldersHeadersArg = exports.newSerializeGetSharedItemFoldersHeadersArg = exports.newDeserializeGetSharedItemFoldersQueryParamsArg = exports.newSerializeGetSharedItemFoldersQueryParamsArg = exports.SharedLinksFoldersManager = void 0;
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
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shared_items#folders"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), headers: (0, utils_js_1.toMap)(headers), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFolderGetSharedLink(folderId, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "#get_shared_link"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFolderAddSharedLink(folderId, requestBody, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "#add_shared_link"), { method: "PUT", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFolderUpdateSharedLink(folderId, requestBody, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "#update_shared_link"), { method: "PUT", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFolderRemoveSharedLink(folderId, requestBody, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "#remove_shared_link"), { method: "PUT", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.SharedLinksFoldersManager = SharedLinksFoldersManager;
function newSerializeGetSharedItemFoldersQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeGetSharedItemFoldersQueryParamsArg = newSerializeGetSharedItemFoldersQueryParamsArg;
function newDeserializeGetSharedItemFoldersQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeGetSharedItemFoldersQueryParamsArg = newDeserializeGetSharedItemFoldersQueryParamsArg;
function newSerializeGetSharedItemFoldersHeadersArg(val) {
    return { ["ifNoneMatch"]: val.ifNoneMatch, ["boxapi"]: val.boxapi };
}
exports.newSerializeGetSharedItemFoldersHeadersArg = newSerializeGetSharedItemFoldersHeadersArg;
function newDeserializeGetSharedItemFoldersHeadersArg(val) {
    const ifNoneMatch = (0, json_js_2.isJson)(val.ifNoneMatch, "string") ? val.ifNoneMatch : void 0;
    const boxapi = val.boxapi;
    return { ifNoneMatch: ifNoneMatch, boxapi: boxapi };
}
exports.newDeserializeGetSharedItemFoldersHeadersArg = newDeserializeGetSharedItemFoldersHeadersArg;
function newSerializeGetFolderGetSharedLinkQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeGetFolderGetSharedLinkQueryParamsArg = newSerializeGetFolderGetSharedLinkQueryParamsArg;
function newDeserializeGetFolderGetSharedLinkQueryParamsArg(val) {
    const fields = val.fields;
    return { fields: fields };
}
exports.newDeserializeGetFolderGetSharedLinkQueryParamsArg = newDeserializeGetFolderGetSharedLinkQueryParamsArg;
function newSerializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.newSerializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = newSerializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function newDeserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
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
exports.newDeserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = newDeserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function newSerializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    return { ["canDownload"]: val.canDownload, ["canPreview"]: val.canPreview, ["canEdit"]: val.canEdit };
}
exports.newSerializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = newSerializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function newDeserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    const canDownload = (0, json_js_2.isJson)(val.canDownload, "boolean") ? val.canDownload : void 0;
    const canPreview = (0, json_js_2.isJson)(val.canPreview, "boolean") ? val.canPreview : void 0;
    const canEdit = (0, json_js_2.isJson)(val.canEdit, "boolean") ? val.canEdit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit };
}
exports.newDeserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = newDeserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function newSerializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : newSerializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
exports.newSerializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField = newSerializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField;
function newDeserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : newDeserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_2.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_2.isJson)(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt = (0, json_js_2.isJson)(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions = val.permissions == void 0 ? void 0 : newDeserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions };
}
exports.newDeserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField = newDeserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField;
function newSerializeUpdateFolderAddSharedLinkRequestBodyArg(val) {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.newSerializeUpdateFolderAddSharedLinkRequestBodyArg = newSerializeUpdateFolderAddSharedLinkRequestBodyArg;
function newDeserializeUpdateFolderAddSharedLinkRequestBodyArg(val) {
    const sharedLink = val.sharedLink == void 0 ? void 0 : newDeserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink };
}
exports.newDeserializeUpdateFolderAddSharedLinkRequestBodyArg = newDeserializeUpdateFolderAddSharedLinkRequestBodyArg;
function newSerializeUpdateFolderAddSharedLinkQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeUpdateFolderAddSharedLinkQueryParamsArg = newSerializeUpdateFolderAddSharedLinkQueryParamsArg;
function newDeserializeUpdateFolderAddSharedLinkQueryParamsArg(val) {
    const fields = val.fields;
    return { fields: fields };
}
exports.newDeserializeUpdateFolderAddSharedLinkQueryParamsArg = newDeserializeUpdateFolderAddSharedLinkQueryParamsArg;
function newSerializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.newSerializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = newSerializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
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
exports.newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function newSerializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    return { ["canDownload"]: val.canDownload, ["canPreview"]: val.canPreview, ["canEdit"]: val.canEdit };
}
exports.newSerializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = newSerializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    const canDownload = (0, json_js_2.isJson)(val.canDownload, "boolean") ? val.canDownload : void 0;
    const canPreview = (0, json_js_2.isJson)(val.canPreview, "boolean") ? val.canPreview : void 0;
    const canEdit = (0, json_js_2.isJson)(val.canEdit, "boolean") ? val.canEdit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit };
}
exports.newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function newSerializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : newSerializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
exports.newSerializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField = newSerializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField;
function newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_2.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_2.isJson)(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt = (0, json_js_2.isJson)(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions = val.permissions == void 0 ? void 0 : newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions };
}
exports.newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField = newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField;
function newSerializeUpdateFolderUpdateSharedLinkRequestBodyArg(val) {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.newSerializeUpdateFolderUpdateSharedLinkRequestBodyArg = newSerializeUpdateFolderUpdateSharedLinkRequestBodyArg;
function newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArg(val) {
    const sharedLink = val.sharedLink == void 0 ? void 0 : newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink };
}
exports.newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArg = newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArg;
function newSerializeUpdateFolderUpdateSharedLinkQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeUpdateFolderUpdateSharedLinkQueryParamsArg = newSerializeUpdateFolderUpdateSharedLinkQueryParamsArg;
function newDeserializeUpdateFolderUpdateSharedLinkQueryParamsArg(val) {
    const fields = val.fields;
    return { fields: fields };
}
exports.newDeserializeUpdateFolderUpdateSharedLinkQueryParamsArg = newDeserializeUpdateFolderUpdateSharedLinkQueryParamsArg;
function newSerializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(val) {
    return {};
}
exports.newSerializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField = newSerializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField;
function newDeserializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(val) {
    return {};
}
exports.newDeserializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField = newDeserializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField;
function newSerializeUpdateFolderRemoveSharedLinkRequestBodyArg(val) {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.newSerializeUpdateFolderRemoveSharedLinkRequestBodyArg = newSerializeUpdateFolderRemoveSharedLinkRequestBodyArg;
function newDeserializeUpdateFolderRemoveSharedLinkRequestBodyArg(val) {
    const sharedLink = val.sharedLink == void 0 ? void 0 : newDeserializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink };
}
exports.newDeserializeUpdateFolderRemoveSharedLinkRequestBodyArg = newDeserializeUpdateFolderRemoveSharedLinkRequestBodyArg;
function newSerializeUpdateFolderRemoveSharedLinkQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeUpdateFolderRemoveSharedLinkQueryParamsArg = newSerializeUpdateFolderRemoveSharedLinkQueryParamsArg;
function newDeserializeUpdateFolderRemoveSharedLinkQueryParamsArg(val) {
    const fields = val.fields;
    return { fields: fields };
}
exports.newDeserializeUpdateFolderRemoveSharedLinkQueryParamsArg = newDeserializeUpdateFolderRemoveSharedLinkQueryParamsArg;
//# sourceMappingURL=sharedLinksFolders.generated.js.map