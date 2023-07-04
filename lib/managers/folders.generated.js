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
exports.newSerializeCreateFolderQueryParamsArg = exports.newDeserializeCreateFolderRequestBodyArg = exports.newSerializeCreateFolderRequestBodyArg = exports.newDeserializeCreateFolderRequestBodyArgSyncStateField = exports.newSerializeCreateFolderRequestBodyArgSyncStateField = exports.newDeserializeCreateFolderRequestBodyArgFolderUploadEmailField = exports.newSerializeCreateFolderRequestBodyArgFolderUploadEmailField = exports.newDeserializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField = exports.newSerializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField = exports.newDeserializeCreateFolderRequestBodyArgParentField = exports.newSerializeCreateFolderRequestBodyArgParentField = exports.newDeserializeGetFolderItemsHeadersArg = exports.newSerializeGetFolderItemsHeadersArg = exports.newDeserializeGetFolderItemsQueryParamsArg = exports.newSerializeGetFolderItemsQueryParamsArg = exports.newDeserializeGetFolderItemsQueryParamsArgDirectionField = exports.newSerializeGetFolderItemsQueryParamsArgDirectionField = exports.newDeserializeGetFolderItemsQueryParamsArgSortField = exports.newSerializeGetFolderItemsQueryParamsArgSortField = exports.newDeserializeDeleteFolderByIdHeadersArg = exports.newSerializeDeleteFolderByIdHeadersArg = exports.newDeserializeDeleteFolderByIdQueryParamsArg = exports.newSerializeDeleteFolderByIdQueryParamsArg = exports.newDeserializeUpdateFolderByIdHeadersArg = exports.newSerializeUpdateFolderByIdHeadersArg = exports.newDeserializeUpdateFolderByIdQueryParamsArg = exports.newSerializeUpdateFolderByIdQueryParamsArg = exports.newDeserializeUpdateFolderByIdRequestBodyArg = exports.newSerializeUpdateFolderByIdRequestBodyArg = exports.newDeserializeUpdateFolderByIdRequestBodyArgCollectionsField = exports.newSerializeUpdateFolderByIdRequestBodyArgCollectionsField = exports.newDeserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField = exports.newSerializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField = exports.newDeserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField = exports.newSerializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField = exports.newDeserializeUpdateFolderByIdRequestBodyArgSharedLinkField = exports.newSerializeUpdateFolderByIdRequestBodyArgSharedLinkField = exports.newDeserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField = exports.newSerializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField = exports.newDeserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField = exports.newSerializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField = exports.newDeserializeUpdateFolderByIdRequestBodyArgParentField = exports.newSerializeUpdateFolderByIdRequestBodyArgParentField = exports.newDeserializeUpdateFolderByIdRequestBodyArgSyncStateField = exports.newSerializeUpdateFolderByIdRequestBodyArgSyncStateField = exports.newDeserializeGetFolderByIdHeadersArg = exports.newSerializeGetFolderByIdHeadersArg = exports.newDeserializeGetFolderByIdQueryParamsArg = exports.newSerializeGetFolderByIdQueryParamsArg = exports.FoldersManager = void 0;
exports.newDeserializeCopyFolderQueryParamsArg = exports.newSerializeCopyFolderQueryParamsArg = exports.newDeserializeCopyFolderRequestBodyArg = exports.newSerializeCopyFolderRequestBodyArg = exports.newDeserializeCopyFolderRequestBodyArgParentField = exports.newSerializeCopyFolderRequestBodyArgParentField = exports.newDeserializeCreateFolderQueryParamsArg = void 0;
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
            return (0, schemas_generated_js_1.newDeserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFolderById(folderId, requestBody, queryParams = {}, headers = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId), { method: "PUT", params: (0, utils_js_1.toMap)(queryParams), headers: (0, utils_js_1.toMap)(headers), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
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
            return (0, schemas_generated_js_2.newDeserializeItems)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createFolder(requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders"), { method: "POST", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    copyFolder(folderId, requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/copy"), { method: "POST", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.FoldersManager = FoldersManager;
function newSerializeGetFolderByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeGetFolderByIdQueryParamsArg = newSerializeGetFolderByIdQueryParamsArg;
function newDeserializeGetFolderByIdQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeGetFolderByIdQueryParamsArg = newDeserializeGetFolderByIdQueryParamsArg;
function newSerializeGetFolderByIdHeadersArg(val) {
    return { ["ifNoneMatch"]: val.ifNoneMatch, ["boxapi"]: val.boxapi };
}
exports.newSerializeGetFolderByIdHeadersArg = newSerializeGetFolderByIdHeadersArg;
function newDeserializeGetFolderByIdHeadersArg(val) {
    const ifNoneMatch = (0, json_js_2.isJson)(val.ifNoneMatch, "string") ? val.ifNoneMatch : void 0;
    const boxapi = (0, json_js_2.isJson)(val.boxapi, "string") ? val.boxapi : void 0;
    return { ifNoneMatch: ifNoneMatch, boxapi: boxapi };
}
exports.newDeserializeGetFolderByIdHeadersArg = newDeserializeGetFolderByIdHeadersArg;
function newSerializeUpdateFolderByIdRequestBodyArgSyncStateField(val) {
    return val;
}
exports.newSerializeUpdateFolderByIdRequestBodyArgSyncStateField = newSerializeUpdateFolderByIdRequestBodyArgSyncStateField;
function newDeserializeUpdateFolderByIdRequestBodyArgSyncStateField(val) {
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
exports.newDeserializeUpdateFolderByIdRequestBodyArgSyncStateField = newDeserializeUpdateFolderByIdRequestBodyArgSyncStateField;
function newSerializeUpdateFolderByIdRequestBodyArgParentField(val) {
    return { ["id"]: val.id };
}
exports.newSerializeUpdateFolderByIdRequestBodyArgParentField = newSerializeUpdateFolderByIdRequestBodyArgParentField;
function newDeserializeUpdateFolderByIdRequestBodyArgParentField(val) {
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    return { id: id };
}
exports.newDeserializeUpdateFolderByIdRequestBodyArgParentField = newDeserializeUpdateFolderByIdRequestBodyArgParentField;
function newSerializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.newSerializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField = newSerializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField;
function newDeserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(val) {
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
exports.newDeserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField = newDeserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField;
function newSerializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(val) {
    return { ["canDownload"]: val.canDownload };
}
exports.newSerializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField = newSerializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField;
function newDeserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(val) {
    const canDownload = (0, json_js_2.isJson)(val.canDownload, "boolean") ? val.canDownload : void 0;
    return { canDownload: canDownload };
}
exports.newDeserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField = newDeserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField;
function newSerializeUpdateFolderByIdRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : newSerializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
exports.newSerializeUpdateFolderByIdRequestBodyArgSharedLinkField = newSerializeUpdateFolderByIdRequestBodyArgSharedLinkField;
function newDeserializeUpdateFolderByIdRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : newDeserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_2.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_2.isJson)(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt = (0, json_js_2.isJson)(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions = val.permissions == void 0 ? void 0 : newDeserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions };
}
exports.newDeserializeUpdateFolderByIdRequestBodyArgSharedLinkField = newDeserializeUpdateFolderByIdRequestBodyArgSharedLinkField;
function newSerializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(val) {
    return val;
}
exports.newSerializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField = newSerializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField;
function newDeserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(val) {
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
exports.newDeserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField = newDeserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField;
function newSerializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(val.access) };
}
exports.newSerializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField = newSerializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField;
function newDeserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(val) {
    const access = val.access == void 0 ? void 0 : newDeserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(val.access);
    return { access: access };
}
exports.newDeserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField = newDeserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField;
function newSerializeUpdateFolderByIdRequestBodyArgCollectionsField(val) {
    return { ["id"]: val.id, ["type"]: val.type };
}
exports.newSerializeUpdateFolderByIdRequestBodyArgCollectionsField = newSerializeUpdateFolderByIdRequestBodyArgCollectionsField;
function newDeserializeUpdateFolderByIdRequestBodyArgCollectionsField(val) {
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    const type = (0, json_js_2.isJson)(val.type, "string") ? val.type : void 0;
    return { id: id, type: type };
}
exports.newDeserializeUpdateFolderByIdRequestBodyArgCollectionsField = newDeserializeUpdateFolderByIdRequestBodyArgCollectionsField;
function newSerializeUpdateFolderByIdRequestBodyArg(val) {
    return { ["name"]: val.name, ["description"]: val.description, ["syncState"]: val.syncState == void 0 ? void 0 : newSerializeUpdateFolderByIdRequestBodyArgSyncStateField(val.syncState), ["canNonOwnersInvite"]: val.canNonOwnersInvite, ["parent"]: val.parent == void 0 ? void 0 : newSerializeUpdateFolderByIdRequestBodyArgParentField(val.parent), ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeUpdateFolderByIdRequestBodyArgSharedLinkField(val.sharedLink), ["folderUploadEmail"]: val.folderUploadEmail == void 0 ? void 0 : newSerializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(val.folderUploadEmail), ["tags"]: val.tags == void 0 ? void 0 : val.tags.map(function (item) {
            return void 0;
        }), ["isCollaborationRestrictedToEnterprise"]: val.isCollaborationRestrictedToEnterprise, ["collections"]: val.collections == void 0 ? void 0 : val.collections.map(function (item) {
            return newSerializeUpdateFolderByIdRequestBodyArgCollectionsField(item);
        }), ["canNonOwnersViewCollaborators"]: val.canNonOwnersViewCollaborators };
}
exports.newSerializeUpdateFolderByIdRequestBodyArg = newSerializeUpdateFolderByIdRequestBodyArg;
function newDeserializeUpdateFolderByIdRequestBodyArg(val) {
    const name = (0, json_js_2.isJson)(val.name, "string") ? val.name : void 0;
    const description = (0, json_js_2.isJson)(val.description, "string") ? val.description : void 0;
    const syncState = val.syncState == void 0 ? void 0 : newDeserializeUpdateFolderByIdRequestBodyArgSyncStateField(val.syncState);
    const canNonOwnersInvite = (0, json_js_2.isJson)(val.canNonOwnersInvite, "boolean") ? val.canNonOwnersInvite : void 0;
    const parent = val.parent == void 0 ? void 0 : newDeserializeUpdateFolderByIdRequestBodyArgParentField(val.parent);
    const sharedLink = val.sharedLink == void 0 ? void 0 : newDeserializeUpdateFolderByIdRequestBodyArgSharedLinkField(val.sharedLink);
    const folderUploadEmail = val.folderUploadEmail == void 0 ? void 0 : newDeserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(val.folderUploadEmail);
    const tags = (0, json_js_2.isJson)(val.tags, "array") ? val.tags.map(function (itm) {
        return void 0;
    }) : void 0;
    const isCollaborationRestrictedToEnterprise = (0, json_js_2.isJson)(val.isCollaborationRestrictedToEnterprise, "boolean") ? val.isCollaborationRestrictedToEnterprise : void 0;
    const collections = (0, json_js_2.isJson)(val.collections, "array") ? val.collections.map(function (itm) {
        return newDeserializeUpdateFolderByIdRequestBodyArgCollectionsField(itm);
    }) : void 0;
    const canNonOwnersViewCollaborators = (0, json_js_2.isJson)(val.canNonOwnersViewCollaborators, "boolean") ? val.canNonOwnersViewCollaborators : void 0;
    return { name: name, description: description, syncState: syncState, canNonOwnersInvite: canNonOwnersInvite, parent: parent, sharedLink: sharedLink, folderUploadEmail: folderUploadEmail, tags: tags, isCollaborationRestrictedToEnterprise: isCollaborationRestrictedToEnterprise, collections: collections, canNonOwnersViewCollaborators: canNonOwnersViewCollaborators };
}
exports.newDeserializeUpdateFolderByIdRequestBodyArg = newDeserializeUpdateFolderByIdRequestBodyArg;
function newSerializeUpdateFolderByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeUpdateFolderByIdQueryParamsArg = newSerializeUpdateFolderByIdQueryParamsArg;
function newDeserializeUpdateFolderByIdQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeUpdateFolderByIdQueryParamsArg = newDeserializeUpdateFolderByIdQueryParamsArg;
function newSerializeUpdateFolderByIdHeadersArg(val) {
    return { ["ifMatch"]: val.ifMatch };
}
exports.newSerializeUpdateFolderByIdHeadersArg = newSerializeUpdateFolderByIdHeadersArg;
function newDeserializeUpdateFolderByIdHeadersArg(val) {
    const ifMatch = (0, json_js_2.isJson)(val.ifMatch, "string") ? val.ifMatch : void 0;
    return { ifMatch: ifMatch };
}
exports.newDeserializeUpdateFolderByIdHeadersArg = newDeserializeUpdateFolderByIdHeadersArg;
function newSerializeDeleteFolderByIdQueryParamsArg(val) {
    return { ["recursive"]: val.recursive };
}
exports.newSerializeDeleteFolderByIdQueryParamsArg = newSerializeDeleteFolderByIdQueryParamsArg;
function newDeserializeDeleteFolderByIdQueryParamsArg(val) {
    const recursive = (0, json_js_2.isJson)(val.recursive, "boolean") ? val.recursive : void 0;
    return { recursive: recursive };
}
exports.newDeserializeDeleteFolderByIdQueryParamsArg = newDeserializeDeleteFolderByIdQueryParamsArg;
function newSerializeDeleteFolderByIdHeadersArg(val) {
    return { ["ifMatch"]: val.ifMatch };
}
exports.newSerializeDeleteFolderByIdHeadersArg = newSerializeDeleteFolderByIdHeadersArg;
function newDeserializeDeleteFolderByIdHeadersArg(val) {
    const ifMatch = (0, json_js_2.isJson)(val.ifMatch, "string") ? val.ifMatch : void 0;
    return { ifMatch: ifMatch };
}
exports.newDeserializeDeleteFolderByIdHeadersArg = newDeserializeDeleteFolderByIdHeadersArg;
function newSerializeGetFolderItemsQueryParamsArgSortField(val) {
    return val;
}
exports.newSerializeGetFolderItemsQueryParamsArgSortField = newSerializeGetFolderItemsQueryParamsArgSortField;
function newDeserializeGetFolderItemsQueryParamsArgSortField(val) {
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
exports.newDeserializeGetFolderItemsQueryParamsArgSortField = newDeserializeGetFolderItemsQueryParamsArgSortField;
function newSerializeGetFolderItemsQueryParamsArgDirectionField(val) {
    return val;
}
exports.newSerializeGetFolderItemsQueryParamsArgDirectionField = newSerializeGetFolderItemsQueryParamsArgDirectionField;
function newDeserializeGetFolderItemsQueryParamsArgDirectionField(val) {
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
exports.newDeserializeGetFolderItemsQueryParamsArgDirectionField = newDeserializeGetFolderItemsQueryParamsArgDirectionField;
function newSerializeGetFolderItemsQueryParamsArg(val) {
    return { ["fields"]: val.fields, ["usemarker"]: val.usemarker, ["marker"]: val.marker, ["offset"]: val.offset, ["limit"]: val.limit, ["sort"]: val.sort == void 0 ? void 0 : newSerializeGetFolderItemsQueryParamsArgSortField(val.sort), ["direction"]: val.direction == void 0 ? void 0 : newSerializeGetFolderItemsQueryParamsArgDirectionField(val.direction) };
}
exports.newSerializeGetFolderItemsQueryParamsArg = newSerializeGetFolderItemsQueryParamsArg;
function newDeserializeGetFolderItemsQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    const usemarker = (0, json_js_2.isJson)(val.usemarker, "boolean") ? val.usemarker : void 0;
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const offset = (0, json_js_2.isJson)(val.offset, "number") ? val.offset : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    const sort = val.sort == void 0 ? void 0 : newDeserializeGetFolderItemsQueryParamsArgSortField(val.sort);
    const direction = val.direction == void 0 ? void 0 : newDeserializeGetFolderItemsQueryParamsArgDirectionField(val.direction);
    return { fields: fields, usemarker: usemarker, marker: marker, offset: offset, limit: limit, sort: sort, direction: direction };
}
exports.newDeserializeGetFolderItemsQueryParamsArg = newDeserializeGetFolderItemsQueryParamsArg;
function newSerializeGetFolderItemsHeadersArg(val) {
    return { ["boxapi"]: val.boxapi };
}
exports.newSerializeGetFolderItemsHeadersArg = newSerializeGetFolderItemsHeadersArg;
function newDeserializeGetFolderItemsHeadersArg(val) {
    const boxapi = (0, json_js_2.isJson)(val.boxapi, "string") ? val.boxapi : void 0;
    return { boxapi: boxapi };
}
exports.newDeserializeGetFolderItemsHeadersArg = newDeserializeGetFolderItemsHeadersArg;
function newSerializeCreateFolderRequestBodyArgParentField(val) {
    return { ["id"]: val.id };
}
exports.newSerializeCreateFolderRequestBodyArgParentField = newSerializeCreateFolderRequestBodyArgParentField;
function newDeserializeCreateFolderRequestBodyArgParentField(val) {
    const id = val.id;
    return { id: id };
}
exports.newDeserializeCreateFolderRequestBodyArgParentField = newDeserializeCreateFolderRequestBodyArgParentField;
function newSerializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField(val) {
    return val;
}
exports.newSerializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField = newSerializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField;
function newDeserializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField(val) {
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
exports.newDeserializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField = newDeserializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField;
function newSerializeCreateFolderRequestBodyArgFolderUploadEmailField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField(val.access) };
}
exports.newSerializeCreateFolderRequestBodyArgFolderUploadEmailField = newSerializeCreateFolderRequestBodyArgFolderUploadEmailField;
function newDeserializeCreateFolderRequestBodyArgFolderUploadEmailField(val) {
    const access = val.access == void 0 ? void 0 : newDeserializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField(val.access);
    return { access: access };
}
exports.newDeserializeCreateFolderRequestBodyArgFolderUploadEmailField = newDeserializeCreateFolderRequestBodyArgFolderUploadEmailField;
function newSerializeCreateFolderRequestBodyArgSyncStateField(val) {
    return val;
}
exports.newSerializeCreateFolderRequestBodyArgSyncStateField = newSerializeCreateFolderRequestBodyArgSyncStateField;
function newDeserializeCreateFolderRequestBodyArgSyncStateField(val) {
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
exports.newDeserializeCreateFolderRequestBodyArgSyncStateField = newDeserializeCreateFolderRequestBodyArgSyncStateField;
function newSerializeCreateFolderRequestBodyArg(val) {
    return { ["name"]: val.name, ["parent"]: newSerializeCreateFolderRequestBodyArgParentField(val.parent), ["folderUploadEmail"]: val.folderUploadEmail == void 0 ? void 0 : newSerializeCreateFolderRequestBodyArgFolderUploadEmailField(val.folderUploadEmail), ["syncState"]: val.syncState == void 0 ? void 0 : newSerializeCreateFolderRequestBodyArgSyncStateField(val.syncState) };
}
exports.newSerializeCreateFolderRequestBodyArg = newSerializeCreateFolderRequestBodyArg;
function newDeserializeCreateFolderRequestBodyArg(val) {
    const name = val.name;
    const parent = newDeserializeCreateFolderRequestBodyArgParentField(val.parent);
    const folderUploadEmail = val.folderUploadEmail == void 0 ? void 0 : newDeserializeCreateFolderRequestBodyArgFolderUploadEmailField(val.folderUploadEmail);
    const syncState = val.syncState == void 0 ? void 0 : newDeserializeCreateFolderRequestBodyArgSyncStateField(val.syncState);
    return { name: name, parent: parent, folderUploadEmail: folderUploadEmail, syncState: syncState };
}
exports.newDeserializeCreateFolderRequestBodyArg = newDeserializeCreateFolderRequestBodyArg;
function newSerializeCreateFolderQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeCreateFolderQueryParamsArg = newSerializeCreateFolderQueryParamsArg;
function newDeserializeCreateFolderQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeCreateFolderQueryParamsArg = newDeserializeCreateFolderQueryParamsArg;
function newSerializeCopyFolderRequestBodyArgParentField(val) {
    return { ["id"]: val.id };
}
exports.newSerializeCopyFolderRequestBodyArgParentField = newSerializeCopyFolderRequestBodyArgParentField;
function newDeserializeCopyFolderRequestBodyArgParentField(val) {
    const id = val.id;
    return { id: id };
}
exports.newDeserializeCopyFolderRequestBodyArgParentField = newDeserializeCopyFolderRequestBodyArgParentField;
function newSerializeCopyFolderRequestBodyArg(val) {
    return { ["name"]: val.name, ["parent"]: newSerializeCopyFolderRequestBodyArgParentField(val.parent) };
}
exports.newSerializeCopyFolderRequestBodyArg = newSerializeCopyFolderRequestBodyArg;
function newDeserializeCopyFolderRequestBodyArg(val) {
    const name = (0, json_js_2.isJson)(val.name, "string") ? val.name : void 0;
    const parent = newDeserializeCopyFolderRequestBodyArgParentField(val.parent);
    return { name: name, parent: parent };
}
exports.newDeserializeCopyFolderRequestBodyArg = newDeserializeCopyFolderRequestBodyArg;
function newSerializeCopyFolderQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeCopyFolderQueryParamsArg = newSerializeCopyFolderQueryParamsArg;
function newDeserializeCopyFolderQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeCopyFolderQueryParamsArg = newDeserializeCopyFolderQueryParamsArg;
//# sourceMappingURL=folders.generated.js.map