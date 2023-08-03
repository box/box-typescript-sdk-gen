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
exports.deserializeCopyFolderRequestBodyArg = exports.serializeCopyFolderRequestBodyArg = exports.deserializeCopyFolderRequestBodyArgParentField = exports.serializeCopyFolderRequestBodyArgParentField = exports.deserializeCreateFolderRequestBodyArg = exports.serializeCreateFolderRequestBodyArg = exports.deserializeCreateFolderRequestBodyArgSyncStateField = exports.serializeCreateFolderRequestBodyArgSyncStateField = exports.deserializeCreateFolderRequestBodyArgFolderUploadEmailField = exports.serializeCreateFolderRequestBodyArgFolderUploadEmailField = exports.deserializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField = exports.serializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField = exports.deserializeCreateFolderRequestBodyArgParentField = exports.serializeCreateFolderRequestBodyArgParentField = exports.deserializeUpdateFolderByIdRequestBodyArg = exports.serializeUpdateFolderByIdRequestBodyArg = exports.deserializeUpdateFolderByIdRequestBodyArgCollectionsField = exports.serializeUpdateFolderByIdRequestBodyArgCollectionsField = exports.deserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField = exports.serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField = exports.deserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField = exports.serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField = exports.deserializeUpdateFolderByIdRequestBodyArgSharedLinkField = exports.serializeUpdateFolderByIdRequestBodyArgSharedLinkField = exports.deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField = exports.serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField = exports.deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField = exports.serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField = exports.deserializeUpdateFolderByIdRequestBodyArgParentField = exports.serializeUpdateFolderByIdRequestBodyArgParentField = exports.deserializeUpdateFolderByIdRequestBodyArgSyncStateField = exports.serializeUpdateFolderByIdRequestBodyArgSyncStateField = exports.FoldersManager = exports.CopyFolderHeadersArg = exports.CreateFolderHeadersArg = exports.GetFolderItemsHeadersArg = exports.DeleteFolderByIdHeadersArg = exports.UpdateFolderByIdHeadersArg = exports.GetFolderByIdHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetFolderByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetFolderByIdHeadersArg = GetFolderByIdHeadersArg;
class UpdateFolderByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UpdateFolderByIdHeadersArg = UpdateFolderByIdHeadersArg;
class DeleteFolderByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteFolderByIdHeadersArg = DeleteFolderByIdHeadersArg;
class GetFolderItemsHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetFolderItemsHeadersArg = GetFolderItemsHeadersArg;
class CreateFolderHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateFolderHeadersArg = CreateFolderHeadersArg;
class CopyFolderHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CopyFolderHeadersArg = CopyFolderHeadersArg;
class FoldersManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFolderById(folderId, queryParams = {}, headers = new GetFolderByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields), ["sort"]: (0, utils_js_2.toString)(queryParams.sort), ["direction"]: (0, utils_js_2.toString)(queryParams.direction), ["offset"]: (0, utils_js_2.toString)(queryParams.offset), ["limit"]: (0, utils_js_2.toString)(queryParams.limit) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ["if-none-match"]: (0, utils_js_2.toString)(headers.ifNoneMatch), ["boxapi"]: (0, utils_js_2.toString)(headers.boxapi) }, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFolderById(folderId, requestBody, queryParams = {}, headers = new UpdateFolderByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ["if-match"]: (0, utils_js_2.toString)(headers.ifMatch) }, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId), { method: "PUT", params: queryParamsMap, headers: headersMap, body: (0, json_js_2.serializeJson)(serializeUpdateFolderByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFolderById(folderId, queryParams = {}, headers = new DeleteFolderByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["recursive"]: (0, utils_js_2.toString)(queryParams.recursive) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ["if-match"]: (0, utils_js_2.toString)(headers.ifMatch) }, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId), { method: "DELETE", params: queryParamsMap, headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    getFolderItems(folderId, queryParams = {}, headers = new GetFolderItemsHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields), ["usemarker"]: (0, utils_js_2.toString)(queryParams.usemarker), ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["offset"]: (0, utils_js_2.toString)(queryParams.offset), ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["sort"]: (0, utils_js_2.toString)(queryParams.sort), ["direction"]: (0, utils_js_2.toString)(queryParams.direction) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ["boxapi"]: (0, utils_js_2.toString)(headers.boxapi) }, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/items"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeItems)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createFolder(requestBody, queryParams = {}, headers = new CreateFolderHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders"), { method: "POST", params: queryParamsMap, headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateFolderRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    copyFolder(folderId, requestBody, queryParams = {}, headers = new CopyFolderHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/copy"), { method: "POST", params: queryParamsMap, headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCopyFolderRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.FoldersManager = FoldersManager;
function serializeUpdateFolderByIdRequestBodyArgSyncStateField(val) {
    return val;
}
exports.serializeUpdateFolderByIdRequestBodyArgSyncStateField = serializeUpdateFolderByIdRequestBodyArgSyncStateField;
function deserializeUpdateFolderByIdRequestBodyArgSyncStateField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateFolderByIdRequestBodyArgSyncStateField\"";
    }
    if (val == "synced") {
        return "synced";
    }
    if (val == "not_synced") {
        return "not_synced";
    }
    if (val == "partially_synced") {
        return "partially_synced";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUpdateFolderByIdRequestBodyArgSyncStateField = deserializeUpdateFolderByIdRequestBodyArgSyncStateField;
function serializeUpdateFolderByIdRequestBodyArgParentField(val) {
    return { ["id"]: val.id };
}
exports.serializeUpdateFolderByIdRequestBodyArgParentField = serializeUpdateFolderByIdRequestBodyArgParentField;
function deserializeUpdateFolderByIdRequestBodyArgParentField(val) {
    const id = (0, json_js_3.isJson)(val.id, "string") ? val.id : void 0;
    return { id: id };
}
exports.deserializeUpdateFolderByIdRequestBodyArgParentField = deserializeUpdateFolderByIdRequestBodyArgParentField;
function serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField = serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField;
function deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField\"";
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
exports.deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField = deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField;
function serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(val) {
    return { ["can_download"]: val.canDownload };
}
exports.serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField = serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField;
function deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(val) {
    const canDownload = (0, json_js_3.isJson)(val.can_download, "boolean") ? val.can_download : void 0;
    return { canDownload: canDownload };
}
exports.deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField = deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField;
function serializeUpdateFolderByIdRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanity_name"]: val.vanityName, ["unshared_at"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
exports.serializeUpdateFolderByIdRequestBodyArgSharedLinkField = serializeUpdateFolderByIdRequestBodyArgSharedLinkField;
function deserializeUpdateFolderByIdRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_3.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_3.isJson)(val.vanity_name, "string") ? val.vanity_name : void 0;
    const unsharedAt = (0, json_js_3.isJson)(val.unshared_at, "string") ? val.unshared_at : void 0;
    const permissions = val.permissions == void 0 ? void 0 : deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions };
}
exports.deserializeUpdateFolderByIdRequestBodyArgSharedLinkField = deserializeUpdateFolderByIdRequestBodyArgSharedLinkField;
function serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(val) {
    return val;
}
exports.serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField = serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField;
function deserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField = deserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField;
function serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(val.access) };
}
exports.serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField = serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField;
function deserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(val) {
    const access = val.access == void 0 ? void 0 : deserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(val.access);
    return { access: access };
}
exports.deserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField = deserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField;
function serializeUpdateFolderByIdRequestBodyArgCollectionsField(val) {
    return { ["id"]: val.id, ["type"]: val.type };
}
exports.serializeUpdateFolderByIdRequestBodyArgCollectionsField = serializeUpdateFolderByIdRequestBodyArgCollectionsField;
function deserializeUpdateFolderByIdRequestBodyArgCollectionsField(val) {
    const id = (0, json_js_3.isJson)(val.id, "string") ? val.id : void 0;
    const type = (0, json_js_3.isJson)(val.type, "string") ? val.type : void 0;
    return { id: id, type: type };
}
exports.deserializeUpdateFolderByIdRequestBodyArgCollectionsField = deserializeUpdateFolderByIdRequestBodyArgCollectionsField;
function serializeUpdateFolderByIdRequestBodyArg(val) {
    return { ["name"]: val.name, ["description"]: val.description, ["sync_state"]: val.syncState == void 0 ? void 0 : serializeUpdateFolderByIdRequestBodyArgSyncStateField(val.syncState), ["can_non_owners_invite"]: val.canNonOwnersInvite, ["parent"]: val.parent == void 0 ? void 0 : serializeUpdateFolderByIdRequestBodyArgParentField(val.parent), ["shared_link"]: val.sharedLink == void 0 ? void 0 : serializeUpdateFolderByIdRequestBodyArgSharedLinkField(val.sharedLink), ["folder_upload_email"]: val.folderUploadEmail == void 0 ? void 0 : serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(val.folderUploadEmail), ["tags"]: val.tags == void 0 ? void 0 : val.tags.map(function (item) {
            return void 0;
        }), ["is_collaboration_restricted_to_enterprise"]: val.isCollaborationRestrictedToEnterprise, ["collections"]: val.collections == void 0 ? void 0 : val.collections.map(function (item) {
            return serializeUpdateFolderByIdRequestBodyArgCollectionsField(item);
        }), ["can_non_owners_view_collaborators"]: val.canNonOwnersViewCollaborators };
}
exports.serializeUpdateFolderByIdRequestBodyArg = serializeUpdateFolderByIdRequestBodyArg;
function deserializeUpdateFolderByIdRequestBodyArg(val) {
    const name = (0, json_js_3.isJson)(val.name, "string") ? val.name : void 0;
    const description = (0, json_js_3.isJson)(val.description, "string") ? val.description : void 0;
    const syncState = val.sync_state == void 0 ? void 0 : deserializeUpdateFolderByIdRequestBodyArgSyncStateField(val.sync_state);
    const canNonOwnersInvite = (0, json_js_3.isJson)(val.can_non_owners_invite, "boolean") ? val.can_non_owners_invite : void 0;
    const parent = val.parent == void 0 ? void 0 : deserializeUpdateFolderByIdRequestBodyArgParentField(val.parent);
    const sharedLink = val.shared_link == void 0 ? void 0 : deserializeUpdateFolderByIdRequestBodyArgSharedLinkField(val.shared_link);
    const folderUploadEmail = val.folder_upload_email == void 0 ? void 0 : deserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(val.folder_upload_email);
    const tags = (0, json_js_3.isJson)(val.tags, "array") ? val.tags.map(function (itm) {
        return void 0;
    }) : void 0;
    const isCollaborationRestrictedToEnterprise = (0, json_js_3.isJson)(val.is_collaboration_restricted_to_enterprise, "boolean") ? val.is_collaboration_restricted_to_enterprise : void 0;
    const collections = (0, json_js_3.isJson)(val.collections, "array") ? val.collections.map(function (itm) {
        return deserializeUpdateFolderByIdRequestBodyArgCollectionsField(itm);
    }) : void 0;
    const canNonOwnersViewCollaborators = (0, json_js_3.isJson)(val.can_non_owners_view_collaborators, "boolean") ? val.can_non_owners_view_collaborators : void 0;
    return { name: name, description: description, syncState: syncState, canNonOwnersInvite: canNonOwnersInvite, parent: parent, sharedLink: sharedLink, folderUploadEmail: folderUploadEmail, tags: tags, isCollaborationRestrictedToEnterprise: isCollaborationRestrictedToEnterprise, collections: collections, canNonOwnersViewCollaborators: canNonOwnersViewCollaborators };
}
exports.deserializeUpdateFolderByIdRequestBodyArg = deserializeUpdateFolderByIdRequestBodyArg;
function serializeCreateFolderRequestBodyArgParentField(val) {
    return { ["id"]: val.id };
}
exports.serializeCreateFolderRequestBodyArgParentField = serializeCreateFolderRequestBodyArgParentField;
function deserializeCreateFolderRequestBodyArgParentField(val) {
    const id = val.id;
    return { id: id };
}
exports.deserializeCreateFolderRequestBodyArgParentField = deserializeCreateFolderRequestBodyArgParentField;
function serializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField(val) {
    return val;
}
exports.serializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField = serializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField;
function deserializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateFolderRequestBodyArgFolderUploadEmailFieldAccessField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField = deserializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField;
function serializeCreateFolderRequestBodyArgFolderUploadEmailField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : serializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField(val.access) };
}
exports.serializeCreateFolderRequestBodyArgFolderUploadEmailField = serializeCreateFolderRequestBodyArgFolderUploadEmailField;
function deserializeCreateFolderRequestBodyArgFolderUploadEmailField(val) {
    const access = val.access == void 0 ? void 0 : deserializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField(val.access);
    return { access: access };
}
exports.deserializeCreateFolderRequestBodyArgFolderUploadEmailField = deserializeCreateFolderRequestBodyArgFolderUploadEmailField;
function serializeCreateFolderRequestBodyArgSyncStateField(val) {
    return val;
}
exports.serializeCreateFolderRequestBodyArgSyncStateField = serializeCreateFolderRequestBodyArgSyncStateField;
function deserializeCreateFolderRequestBodyArgSyncStateField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateFolderRequestBodyArgSyncStateField\"";
    }
    if (val == "synced") {
        return "synced";
    }
    if (val == "not_synced") {
        return "not_synced";
    }
    if (val == "partially_synced") {
        return "partially_synced";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateFolderRequestBodyArgSyncStateField = deserializeCreateFolderRequestBodyArgSyncStateField;
function serializeCreateFolderRequestBodyArg(val) {
    return { ["name"]: val.name, ["parent"]: serializeCreateFolderRequestBodyArgParentField(val.parent), ["folder_upload_email"]: val.folderUploadEmail == void 0 ? void 0 : serializeCreateFolderRequestBodyArgFolderUploadEmailField(val.folderUploadEmail), ["sync_state"]: val.syncState == void 0 ? void 0 : serializeCreateFolderRequestBodyArgSyncStateField(val.syncState) };
}
exports.serializeCreateFolderRequestBodyArg = serializeCreateFolderRequestBodyArg;
function deserializeCreateFolderRequestBodyArg(val) {
    const name = val.name;
    const parent = deserializeCreateFolderRequestBodyArgParentField(val.parent);
    const folderUploadEmail = val.folder_upload_email == void 0 ? void 0 : deserializeCreateFolderRequestBodyArgFolderUploadEmailField(val.folder_upload_email);
    const syncState = val.sync_state == void 0 ? void 0 : deserializeCreateFolderRequestBodyArgSyncStateField(val.sync_state);
    return { name: name, parent: parent, folderUploadEmail: folderUploadEmail, syncState: syncState };
}
exports.deserializeCreateFolderRequestBodyArg = deserializeCreateFolderRequestBodyArg;
function serializeCopyFolderRequestBodyArgParentField(val) {
    return { ["id"]: val.id };
}
exports.serializeCopyFolderRequestBodyArgParentField = serializeCopyFolderRequestBodyArgParentField;
function deserializeCopyFolderRequestBodyArgParentField(val) {
    const id = val.id;
    return { id: id };
}
exports.deserializeCopyFolderRequestBodyArgParentField = deserializeCopyFolderRequestBodyArgParentField;
function serializeCopyFolderRequestBodyArg(val) {
    return { ["name"]: val.name, ["parent"]: serializeCopyFolderRequestBodyArgParentField(val.parent) };
}
exports.serializeCopyFolderRequestBodyArg = serializeCopyFolderRequestBodyArg;
function deserializeCopyFolderRequestBodyArg(val) {
    const name = (0, json_js_3.isJson)(val.name, "string") ? val.name : void 0;
    const parent = deserializeCopyFolderRequestBodyArgParentField(val.parent);
    return { name: name, parent: parent };
}
exports.deserializeCopyFolderRequestBodyArg = deserializeCopyFolderRequestBodyArg;
//# sourceMappingURL=folders.generated.js.map