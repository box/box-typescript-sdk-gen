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
exports.newDeserializeUpdateFileRemoveSharedLinkQueryParamsArg = exports.newSerializeUpdateFileRemoveSharedLinkQueryParamsArg = exports.newDeserializeUpdateFileRemoveSharedLinkRequestBodyArg = exports.newSerializeUpdateFileRemoveSharedLinkRequestBodyArg = exports.newDeserializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField = exports.newSerializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField = exports.newDeserializeUpdateFileUpdateSharedLinkQueryParamsArg = exports.newSerializeUpdateFileUpdateSharedLinkQueryParamsArg = exports.newDeserializeUpdateFileUpdateSharedLinkRequestBodyArg = exports.newSerializeUpdateFileUpdateSharedLinkRequestBodyArg = exports.newDeserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField = exports.newSerializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField = exports.newDeserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.newSerializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.newDeserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.newSerializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.newDeserializeUpdateFileAddSharedLinkQueryParamsArg = exports.newSerializeUpdateFileAddSharedLinkQueryParamsArg = exports.newDeserializeUpdateFileAddSharedLinkRequestBodyArg = exports.newSerializeUpdateFileAddSharedLinkRequestBodyArg = exports.newDeserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField = exports.newSerializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField = exports.newDeserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.newSerializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.newDeserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.newSerializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.newDeserializeGetFileGetSharedLinkQueryParamsArg = exports.newSerializeGetFileGetSharedLinkQueryParamsArg = exports.newDeserializeGetSharedItemsHeadersArg = exports.newSerializeGetSharedItemsHeadersArg = exports.newDeserializeGetSharedItemsQueryParamsArg = exports.newSerializeGetSharedItemsQueryParamsArg = exports.SharedLinksFilesManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class SharedLinksFilesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getSharedItems(queryParams = {}, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shared_items"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), headers: (0, utils_js_1.toMap)(headers), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFileGetSharedLink(fileId, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "#get_shared_link"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFileAddSharedLink(fileId, requestBody, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "#add_shared_link"), { method: "PUT", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFileUpdateSharedLink(fileId, requestBody, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "#update_shared_link"), { method: "PUT", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFileRemoveSharedLink(fileId, requestBody, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "#remove_shared_link"), { method: "PUT", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.SharedLinksFilesManager = SharedLinksFilesManager;
function newSerializeGetSharedItemsQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeGetSharedItemsQueryParamsArg = newSerializeGetSharedItemsQueryParamsArg;
function newDeserializeGetSharedItemsQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeGetSharedItemsQueryParamsArg = newDeserializeGetSharedItemsQueryParamsArg;
function newSerializeGetSharedItemsHeadersArg(val) {
    return { ["ifNoneMatch"]: val.ifNoneMatch, ["boxapi"]: val.boxapi };
}
exports.newSerializeGetSharedItemsHeadersArg = newSerializeGetSharedItemsHeadersArg;
function newDeserializeGetSharedItemsHeadersArg(val) {
    const ifNoneMatch = (0, json_js_2.isJson)(val.ifNoneMatch, "string") ? val.ifNoneMatch : void 0;
    const boxapi = val.boxapi;
    return { ifNoneMatch: ifNoneMatch, boxapi: boxapi };
}
exports.newDeserializeGetSharedItemsHeadersArg = newDeserializeGetSharedItemsHeadersArg;
function newSerializeGetFileGetSharedLinkQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeGetFileGetSharedLinkQueryParamsArg = newSerializeGetFileGetSharedLinkQueryParamsArg;
function newDeserializeGetFileGetSharedLinkQueryParamsArg(val) {
    const fields = val.fields;
    return { fields: fields };
}
exports.newDeserializeGetFileGetSharedLinkQueryParamsArg = newDeserializeGetFileGetSharedLinkQueryParamsArg;
function newSerializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.newSerializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = newSerializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function newDeserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField\"";
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
exports.newDeserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = newDeserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function newSerializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    return { ["canDownload"]: val.canDownload, ["canPreview"]: val.canPreview, ["canEdit"]: val.canEdit };
}
exports.newSerializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = newSerializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function newDeserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    const canDownload = (0, json_js_2.isJson)(val.canDownload, "boolean") ? val.canDownload : void 0;
    const canPreview = (0, json_js_2.isJson)(val.canPreview, "boolean") ? val.canPreview : void 0;
    const canEdit = (0, json_js_2.isJson)(val.canEdit, "boolean") ? val.canEdit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit };
}
exports.newDeserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = newDeserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function newSerializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : newSerializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
exports.newSerializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField = newSerializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField;
function newDeserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : newDeserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_2.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_2.isJson)(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt = (0, json_js_2.isJson)(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions = val.permissions == void 0 ? void 0 : newDeserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions };
}
exports.newDeserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField = newDeserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField;
function newSerializeUpdateFileAddSharedLinkRequestBodyArg(val) {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.newSerializeUpdateFileAddSharedLinkRequestBodyArg = newSerializeUpdateFileAddSharedLinkRequestBodyArg;
function newDeserializeUpdateFileAddSharedLinkRequestBodyArg(val) {
    const sharedLink = val.sharedLink == void 0 ? void 0 : newDeserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink };
}
exports.newDeserializeUpdateFileAddSharedLinkRequestBodyArg = newDeserializeUpdateFileAddSharedLinkRequestBodyArg;
function newSerializeUpdateFileAddSharedLinkQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeUpdateFileAddSharedLinkQueryParamsArg = newSerializeUpdateFileAddSharedLinkQueryParamsArg;
function newDeserializeUpdateFileAddSharedLinkQueryParamsArg(val) {
    const fields = val.fields;
    return { fields: fields };
}
exports.newDeserializeUpdateFileAddSharedLinkQueryParamsArg = newDeserializeUpdateFileAddSharedLinkQueryParamsArg;
function newSerializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.newSerializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = newSerializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function newDeserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField\"";
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
exports.newDeserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = newDeserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function newSerializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    return { ["canDownload"]: val.canDownload, ["canPreview"]: val.canPreview, ["canEdit"]: val.canEdit };
}
exports.newSerializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = newSerializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function newDeserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    const canDownload = (0, json_js_2.isJson)(val.canDownload, "boolean") ? val.canDownload : void 0;
    const canPreview = (0, json_js_2.isJson)(val.canPreview, "boolean") ? val.canPreview : void 0;
    const canEdit = (0, json_js_2.isJson)(val.canEdit, "boolean") ? val.canEdit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit };
}
exports.newDeserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = newDeserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function newSerializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : newSerializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
exports.newSerializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField = newSerializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField;
function newDeserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : newDeserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_2.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_2.isJson)(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt = (0, json_js_2.isJson)(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions = val.permissions == void 0 ? void 0 : newDeserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions };
}
exports.newDeserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField = newDeserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField;
function newSerializeUpdateFileUpdateSharedLinkRequestBodyArg(val) {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.newSerializeUpdateFileUpdateSharedLinkRequestBodyArg = newSerializeUpdateFileUpdateSharedLinkRequestBodyArg;
function newDeserializeUpdateFileUpdateSharedLinkRequestBodyArg(val) {
    const sharedLink = val.sharedLink == void 0 ? void 0 : newDeserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink };
}
exports.newDeserializeUpdateFileUpdateSharedLinkRequestBodyArg = newDeserializeUpdateFileUpdateSharedLinkRequestBodyArg;
function newSerializeUpdateFileUpdateSharedLinkQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeUpdateFileUpdateSharedLinkQueryParamsArg = newSerializeUpdateFileUpdateSharedLinkQueryParamsArg;
function newDeserializeUpdateFileUpdateSharedLinkQueryParamsArg(val) {
    const fields = val.fields;
    return { fields: fields };
}
exports.newDeserializeUpdateFileUpdateSharedLinkQueryParamsArg = newDeserializeUpdateFileUpdateSharedLinkQueryParamsArg;
function newSerializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField(val) {
    return {};
}
exports.newSerializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField = newSerializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField;
function newDeserializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField(val) {
    return {};
}
exports.newDeserializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField = newDeserializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField;
function newSerializeUpdateFileRemoveSharedLinkRequestBodyArg(val) {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.newSerializeUpdateFileRemoveSharedLinkRequestBodyArg = newSerializeUpdateFileRemoveSharedLinkRequestBodyArg;
function newDeserializeUpdateFileRemoveSharedLinkRequestBodyArg(val) {
    const sharedLink = val.sharedLink == void 0 ? void 0 : newDeserializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink };
}
exports.newDeserializeUpdateFileRemoveSharedLinkRequestBodyArg = newDeserializeUpdateFileRemoveSharedLinkRequestBodyArg;
function newSerializeUpdateFileRemoveSharedLinkQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeUpdateFileRemoveSharedLinkQueryParamsArg = newSerializeUpdateFileRemoveSharedLinkQueryParamsArg;
function newDeserializeUpdateFileRemoveSharedLinkQueryParamsArg(val) {
    const fields = val.fields;
    return { fields: fields };
}
exports.newDeserializeUpdateFileRemoveSharedLinkQueryParamsArg = newDeserializeUpdateFileRemoveSharedLinkQueryParamsArg;
//# sourceMappingURL=sharedLinksFiles.generated.js.map