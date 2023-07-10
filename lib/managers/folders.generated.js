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
exports.serializeCreateFolderQueryParamsArg = exports.deserializeCreateFolderRequestBodyArg = exports.serializeCreateFolderRequestBodyArg = exports.deserializeCreateFolderRequestBodyArgSyncStateField = exports.serializeCreateFolderRequestBodyArgSyncStateField = exports.deserializeCreateFolderRequestBodyArgFolderUploadEmailField = exports.serializeCreateFolderRequestBodyArgFolderUploadEmailField = exports.deserializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField = exports.serializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField = exports.deserializeCreateFolderRequestBodyArgParentField = exports.serializeCreateFolderRequestBodyArgParentField = exports.deserializeGetFolderItemsHeadersArg = exports.serializeGetFolderItemsHeadersArg = exports.deserializeGetFolderItemsQueryParamsArg = exports.serializeGetFolderItemsQueryParamsArg = exports.deserializeGetFolderItemsQueryParamsArgDirectionField = exports.serializeGetFolderItemsQueryParamsArgDirectionField = exports.deserializeGetFolderItemsQueryParamsArgSortField = exports.serializeGetFolderItemsQueryParamsArgSortField = exports.deserializeDeleteFolderByIdHeadersArg = exports.serializeDeleteFolderByIdHeadersArg = exports.deserializeDeleteFolderByIdQueryParamsArg = exports.serializeDeleteFolderByIdQueryParamsArg = exports.deserializeUpdateFolderByIdHeadersArg = exports.serializeUpdateFolderByIdHeadersArg = exports.deserializeUpdateFolderByIdQueryParamsArg = exports.serializeUpdateFolderByIdQueryParamsArg = exports.deserializeUpdateFolderByIdRequestBodyArg = exports.serializeUpdateFolderByIdRequestBodyArg = exports.deserializeUpdateFolderByIdRequestBodyArgCollectionsField = exports.serializeUpdateFolderByIdRequestBodyArgCollectionsField = exports.deserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField = exports.serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField = exports.deserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField = exports.serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField = exports.deserializeUpdateFolderByIdRequestBodyArgSharedLinkField = exports.serializeUpdateFolderByIdRequestBodyArgSharedLinkField = exports.deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField = exports.serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField = exports.deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField = exports.serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField = exports.deserializeUpdateFolderByIdRequestBodyArgParentField = exports.serializeUpdateFolderByIdRequestBodyArgParentField = exports.deserializeUpdateFolderByIdRequestBodyArgSyncStateField = exports.serializeUpdateFolderByIdRequestBodyArgSyncStateField = exports.deserializeGetFolderByIdHeadersArg = exports.serializeGetFolderByIdHeadersArg = exports.deserializeGetFolderByIdQueryParamsArg = exports.serializeGetFolderByIdQueryParamsArg = exports.FoldersManager = void 0;
exports.deserializeCopyFolderQueryParamsArg = exports.serializeCopyFolderQueryParamsArg = exports.deserializeCopyFolderRequestBodyArg = exports.serializeCopyFolderRequestBodyArg = exports.deserializeCopyFolderRequestBodyArgParentField = exports.serializeCopyFolderRequestBodyArgParentField = exports.deserializeCreateFolderQueryParamsArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class FoldersManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFolderById(folderId, queryParams = {}, headers = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), headers: (0, utils_js_1.toMap)(headers), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFolderById(folderId, requestBody, queryParams = {}, headers = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId), { method: "PUT", params: (0, utils_js_1.toMap)(queryParams), headers: (0, utils_js_1.toMap)(headers), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFolderById(folderId, queryParams = {}, headers = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId), { method: "DELETE", params: (0, utils_js_1.toMap)(queryParams), headers: (0, utils_js_1.toMap)(headers), auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
    getFolderItems(folderId, queryParams = {}, headers = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/items"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), headers: (0, utils_js_1.toMap)(headers), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeItems)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createFolder(requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders"), { method: "POST", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    copyFolder(folderId, requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/copy"), { method: "POST", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.FoldersManager = FoldersManager;
function serializeGetFolderByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeGetFolderByIdQueryParamsArg = serializeGetFolderByIdQueryParamsArg;
function deserializeGetFolderByIdQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeGetFolderByIdQueryParamsArg = deserializeGetFolderByIdQueryParamsArg;
function serializeGetFolderByIdHeadersArg(val) {
    return { ["ifNoneMatch"]: val.ifNoneMatch, ["boxapi"]: val.boxapi };
}
exports.serializeGetFolderByIdHeadersArg = serializeGetFolderByIdHeadersArg;
function deserializeGetFolderByIdHeadersArg(val) {
    const ifNoneMatch = (0, json_js_2.isJson)(val.ifNoneMatch, "string") ? val.ifNoneMatch : void 0;
    const boxapi = (0, json_js_2.isJson)(val.boxapi, "string") ? val.boxapi : void 0;
    return { ifNoneMatch: ifNoneMatch, boxapi: boxapi };
}
exports.deserializeGetFolderByIdHeadersArg = deserializeGetFolderByIdHeadersArg;
function serializeUpdateFolderByIdRequestBodyArgSyncStateField(val) {
    return val;
}
exports.serializeUpdateFolderByIdRequestBodyArgSyncStateField = serializeUpdateFolderByIdRequestBodyArgSyncStateField;
function deserializeUpdateFolderByIdRequestBodyArgSyncStateField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    return { id: id };
}
exports.deserializeUpdateFolderByIdRequestBodyArgParentField = deserializeUpdateFolderByIdRequestBodyArgParentField;
function serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField = serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField;
function deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
    return { ["canDownload"]: val.canDownload };
}
exports.serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField = serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField;
function deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(val) {
    const canDownload = (0, json_js_2.isJson)(val.canDownload, "boolean") ? val.canDownload : void 0;
    return { canDownload: canDownload };
}
exports.deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField = deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField;
function serializeUpdateFolderByIdRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
exports.serializeUpdateFolderByIdRequestBodyArgSharedLinkField = serializeUpdateFolderByIdRequestBodyArgSharedLinkField;
function deserializeUpdateFolderByIdRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_2.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_2.isJson)(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt = (0, json_js_2.isJson)(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions = val.permissions == void 0 ? void 0 : deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions };
}
exports.deserializeUpdateFolderByIdRequestBodyArgSharedLinkField = deserializeUpdateFolderByIdRequestBodyArgSharedLinkField;
function serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(val) {
    return val;
}
exports.serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField = serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField;
function deserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    const type = (0, json_js_2.isJson)(val.type, "string") ? val.type : void 0;
    return { id: id, type: type };
}
exports.deserializeUpdateFolderByIdRequestBodyArgCollectionsField = deserializeUpdateFolderByIdRequestBodyArgCollectionsField;
function serializeUpdateFolderByIdRequestBodyArg(val) {
    return { ["name"]: val.name, ["description"]: val.description, ["syncState"]: val.syncState == void 0 ? void 0 : serializeUpdateFolderByIdRequestBodyArgSyncStateField(val.syncState), ["canNonOwnersInvite"]: val.canNonOwnersInvite, ["parent"]: val.parent == void 0 ? void 0 : serializeUpdateFolderByIdRequestBodyArgParentField(val.parent), ["sharedLink"]: val.sharedLink == void 0 ? void 0 : serializeUpdateFolderByIdRequestBodyArgSharedLinkField(val.sharedLink), ["folderUploadEmail"]: val.folderUploadEmail == void 0 ? void 0 : serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(val.folderUploadEmail), ["tags"]: val.tags == void 0 ? void 0 : val.tags.map(function (item) {
            return void 0;
        }), ["isCollaborationRestrictedToEnterprise"]: val.isCollaborationRestrictedToEnterprise, ["collections"]: val.collections == void 0 ? void 0 : val.collections.map(function (item) {
            return serializeUpdateFolderByIdRequestBodyArgCollectionsField(item);
        }), ["canNonOwnersViewCollaborators"]: val.canNonOwnersViewCollaborators };
}
exports.serializeUpdateFolderByIdRequestBodyArg = serializeUpdateFolderByIdRequestBodyArg;
function deserializeUpdateFolderByIdRequestBodyArg(val) {
    const name = (0, json_js_2.isJson)(val.name, "string") ? val.name : void 0;
    const description = (0, json_js_2.isJson)(val.description, "string") ? val.description : void 0;
    const syncState = val.syncState == void 0 ? void 0 : deserializeUpdateFolderByIdRequestBodyArgSyncStateField(val.syncState);
    const canNonOwnersInvite = (0, json_js_2.isJson)(val.canNonOwnersInvite, "boolean") ? val.canNonOwnersInvite : void 0;
    const parent = val.parent == void 0 ? void 0 : deserializeUpdateFolderByIdRequestBodyArgParentField(val.parent);
    const sharedLink = val.sharedLink == void 0 ? void 0 : deserializeUpdateFolderByIdRequestBodyArgSharedLinkField(val.sharedLink);
    const folderUploadEmail = val.folderUploadEmail == void 0 ? void 0 : deserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(val.folderUploadEmail);
    const tags = (0, json_js_2.isJson)(val.tags, "array") ? val.tags.map(function (itm) {
        return void 0;
    }) : void 0;
    const isCollaborationRestrictedToEnterprise = (0, json_js_2.isJson)(val.isCollaborationRestrictedToEnterprise, "boolean") ? val.isCollaborationRestrictedToEnterprise : void 0;
    const collections = (0, json_js_2.isJson)(val.collections, "array") ? val.collections.map(function (itm) {
        return deserializeUpdateFolderByIdRequestBodyArgCollectionsField(itm);
    }) : void 0;
    const canNonOwnersViewCollaborators = (0, json_js_2.isJson)(val.canNonOwnersViewCollaborators, "boolean") ? val.canNonOwnersViewCollaborators : void 0;
    return { name: name, description: description, syncState: syncState, canNonOwnersInvite: canNonOwnersInvite, parent: parent, sharedLink: sharedLink, folderUploadEmail: folderUploadEmail, tags: tags, isCollaborationRestrictedToEnterprise: isCollaborationRestrictedToEnterprise, collections: collections, canNonOwnersViewCollaborators: canNonOwnersViewCollaborators };
}
exports.deserializeUpdateFolderByIdRequestBodyArg = deserializeUpdateFolderByIdRequestBodyArg;
function serializeUpdateFolderByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeUpdateFolderByIdQueryParamsArg = serializeUpdateFolderByIdQueryParamsArg;
function deserializeUpdateFolderByIdQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeUpdateFolderByIdQueryParamsArg = deserializeUpdateFolderByIdQueryParamsArg;
function serializeUpdateFolderByIdHeadersArg(val) {
    return { ["ifMatch"]: val.ifMatch };
}
exports.serializeUpdateFolderByIdHeadersArg = serializeUpdateFolderByIdHeadersArg;
function deserializeUpdateFolderByIdHeadersArg(val) {
    const ifMatch = (0, json_js_2.isJson)(val.ifMatch, "string") ? val.ifMatch : void 0;
    return { ifMatch: ifMatch };
}
exports.deserializeUpdateFolderByIdHeadersArg = deserializeUpdateFolderByIdHeadersArg;
function serializeDeleteFolderByIdQueryParamsArg(val) {
    return { ["recursive"]: val.recursive };
}
exports.serializeDeleteFolderByIdQueryParamsArg = serializeDeleteFolderByIdQueryParamsArg;
function deserializeDeleteFolderByIdQueryParamsArg(val) {
    const recursive = (0, json_js_2.isJson)(val.recursive, "boolean") ? val.recursive : void 0;
    return { recursive: recursive };
}
exports.deserializeDeleteFolderByIdQueryParamsArg = deserializeDeleteFolderByIdQueryParamsArg;
function serializeDeleteFolderByIdHeadersArg(val) {
    return { ["ifMatch"]: val.ifMatch };
}
exports.serializeDeleteFolderByIdHeadersArg = serializeDeleteFolderByIdHeadersArg;
function deserializeDeleteFolderByIdHeadersArg(val) {
    const ifMatch = (0, json_js_2.isJson)(val.ifMatch, "string") ? val.ifMatch : void 0;
    return { ifMatch: ifMatch };
}
exports.deserializeDeleteFolderByIdHeadersArg = deserializeDeleteFolderByIdHeadersArg;
function serializeGetFolderItemsQueryParamsArgSortField(val) {
    return val;
}
exports.serializeGetFolderItemsQueryParamsArgSortField = serializeGetFolderItemsQueryParamsArgSortField;
function deserializeGetFolderItemsQueryParamsArgSortField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"GetFolderItemsQueryParamsArgSortField\"";
    }
    if (val == "id") {
        return "id";
    }
    if (val == "name") {
        return "name";
    }
    if (val == "date") {
        return "date";
    }
    if (val == "size") {
        return "size";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeGetFolderItemsQueryParamsArgSortField = deserializeGetFolderItemsQueryParamsArgSortField;
function serializeGetFolderItemsQueryParamsArgDirectionField(val) {
    return val;
}
exports.serializeGetFolderItemsQueryParamsArgDirectionField = serializeGetFolderItemsQueryParamsArgDirectionField;
function deserializeGetFolderItemsQueryParamsArgDirectionField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"GetFolderItemsQueryParamsArgDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeGetFolderItemsQueryParamsArgDirectionField = deserializeGetFolderItemsQueryParamsArgDirectionField;
function serializeGetFolderItemsQueryParamsArg(val) {
    return { ["fields"]: val.fields, ["usemarker"]: val.usemarker, ["marker"]: val.marker, ["offset"]: val.offset, ["limit"]: val.limit, ["sort"]: val.sort == void 0 ? void 0 : serializeGetFolderItemsQueryParamsArgSortField(val.sort), ["direction"]: val.direction == void 0 ? void 0 : serializeGetFolderItemsQueryParamsArgDirectionField(val.direction) };
}
exports.serializeGetFolderItemsQueryParamsArg = serializeGetFolderItemsQueryParamsArg;
function deserializeGetFolderItemsQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    const usemarker = (0, json_js_2.isJson)(val.usemarker, "boolean") ? val.usemarker : void 0;
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const offset = (0, json_js_2.isJson)(val.offset, "number") ? val.offset : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    const sort = val.sort == void 0 ? void 0 : deserializeGetFolderItemsQueryParamsArgSortField(val.sort);
    const direction = val.direction == void 0 ? void 0 : deserializeGetFolderItemsQueryParamsArgDirectionField(val.direction);
    return { fields: fields, usemarker: usemarker, marker: marker, offset: offset, limit: limit, sort: sort, direction: direction };
}
exports.deserializeGetFolderItemsQueryParamsArg = deserializeGetFolderItemsQueryParamsArg;
function serializeGetFolderItemsHeadersArg(val) {
    return { ["boxapi"]: val.boxapi };
}
exports.serializeGetFolderItemsHeadersArg = serializeGetFolderItemsHeadersArg;
function deserializeGetFolderItemsHeadersArg(val) {
    const boxapi = (0, json_js_2.isJson)(val.boxapi, "string") ? val.boxapi : void 0;
    return { boxapi: boxapi };
}
exports.deserializeGetFolderItemsHeadersArg = deserializeGetFolderItemsHeadersArg;
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
    if (!(0, json_js_2.isJson)(val, "string")) {
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
    if (!(0, json_js_2.isJson)(val, "string")) {
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
    return { ["name"]: val.name, ["parent"]: serializeCreateFolderRequestBodyArgParentField(val.parent), ["folderUploadEmail"]: val.folderUploadEmail == void 0 ? void 0 : serializeCreateFolderRequestBodyArgFolderUploadEmailField(val.folderUploadEmail), ["syncState"]: val.syncState == void 0 ? void 0 : serializeCreateFolderRequestBodyArgSyncStateField(val.syncState) };
}
exports.serializeCreateFolderRequestBodyArg = serializeCreateFolderRequestBodyArg;
function deserializeCreateFolderRequestBodyArg(val) {
    const name = val.name;
    const parent = deserializeCreateFolderRequestBodyArgParentField(val.parent);
    const folderUploadEmail = val.folderUploadEmail == void 0 ? void 0 : deserializeCreateFolderRequestBodyArgFolderUploadEmailField(val.folderUploadEmail);
    const syncState = val.syncState == void 0 ? void 0 : deserializeCreateFolderRequestBodyArgSyncStateField(val.syncState);
    return { name: name, parent: parent, folderUploadEmail: folderUploadEmail, syncState: syncState };
}
exports.deserializeCreateFolderRequestBodyArg = deserializeCreateFolderRequestBodyArg;
function serializeCreateFolderQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeCreateFolderQueryParamsArg = serializeCreateFolderQueryParamsArg;
function deserializeCreateFolderQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeCreateFolderQueryParamsArg = deserializeCreateFolderQueryParamsArg;
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
    const name = (0, json_js_2.isJson)(val.name, "string") ? val.name : void 0;
    const parent = deserializeCopyFolderRequestBodyArgParentField(val.parent);
    return { name: name, parent: parent };
}
exports.deserializeCopyFolderRequestBodyArg = deserializeCopyFolderRequestBodyArg;
function serializeCopyFolderQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeCopyFolderQueryParamsArg = serializeCopyFolderQueryParamsArg;
function deserializeCopyFolderQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeCopyFolderQueryParamsArg = deserializeCopyFolderQueryParamsArg;
//# sourceMappingURL=folders.generated.js.map