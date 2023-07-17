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
exports.deserializeUpdateFileRemoveSharedLinkQueryParamsArg = exports.serializeUpdateFileRemoveSharedLinkQueryParamsArg = exports.deserializeUpdateFileRemoveSharedLinkRequestBodyArg = exports.serializeUpdateFileRemoveSharedLinkRequestBodyArg = exports.deserializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField = exports.serializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField = exports.deserializeUpdateFileUpdateSharedLinkQueryParamsArg = exports.serializeUpdateFileUpdateSharedLinkQueryParamsArg = exports.deserializeUpdateFileUpdateSharedLinkRequestBodyArg = exports.serializeUpdateFileUpdateSharedLinkRequestBodyArg = exports.deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField = exports.serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField = exports.deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.deserializeUpdateFileAddSharedLinkQueryParamsArg = exports.serializeUpdateFileAddSharedLinkQueryParamsArg = exports.deserializeUpdateFileAddSharedLinkRequestBodyArg = exports.serializeUpdateFileAddSharedLinkRequestBodyArg = exports.deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField = exports.serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField = exports.deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = exports.deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = exports.deserializeGetFileGetSharedLinkQueryParamsArg = exports.serializeGetFileGetSharedLinkQueryParamsArg = exports.deserializeGetSharedItemsHeadersArg = exports.serializeGetSharedItemsHeadersArg = exports.deserializeGetSharedItemsQueryParamsArg = exports.serializeGetSharedItemsQueryParamsArg = exports.SharedLinksFilesManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class SharedLinksFilesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getSharedItems(queryParams = {}, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shared_items"), { method: "GET", params: (0, utils_js_1.prepareParams)(serializeGetSharedItemsQueryParamsArg(queryParams)), headers: (0, utils_js_1.prepareParams)(serializeGetSharedItemsHeadersArg(headers)), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFileGetSharedLink(fileId, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "#get_shared_link"), { method: "GET", params: (0, utils_js_1.prepareParams)(serializeGetFileGetSharedLinkQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFileAddSharedLink(fileId, requestBody, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "#add_shared_link"), { method: "PUT", params: (0, utils_js_1.prepareParams)(serializeUpdateFileAddSharedLinkQueryParamsArg(queryParams)), body: (0, json_js_2.serializeJson)(serializeUpdateFileAddSharedLinkRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFileUpdateSharedLink(fileId, requestBody, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "#update_shared_link"), { method: "PUT", params: (0, utils_js_1.prepareParams)(serializeUpdateFileUpdateSharedLinkQueryParamsArg(queryParams)), body: (0, json_js_2.serializeJson)(serializeUpdateFileUpdateSharedLinkRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFileRemoveSharedLink(fileId, requestBody, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "#remove_shared_link"), { method: "PUT", params: (0, utils_js_1.prepareParams)(serializeUpdateFileRemoveSharedLinkQueryParamsArg(queryParams)), body: (0, json_js_2.serializeJson)(serializeUpdateFileRemoveSharedLinkRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.SharedLinksFilesManager = SharedLinksFilesManager;
function serializeGetSharedItemsQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeGetSharedItemsQueryParamsArg = serializeGetSharedItemsQueryParamsArg;
function deserializeGetSharedItemsQueryParamsArg(val) {
    const fields = (0, json_js_3.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeGetSharedItemsQueryParamsArg = deserializeGetSharedItemsQueryParamsArg;
function serializeGetSharedItemsHeadersArg(val) {
    return { ["if-none-match"]: val.ifNoneMatch, ["boxapi"]: val.boxapi };
}
exports.serializeGetSharedItemsHeadersArg = serializeGetSharedItemsHeadersArg;
function deserializeGetSharedItemsHeadersArg(val) {
    const ifNoneMatch = (0, json_js_3.isJson)(val["if-none-match"], "string") ? val["if-none-match"] : void 0;
    const boxapi = val.boxapi;
    return { ifNoneMatch: ifNoneMatch, boxapi: boxapi };
}
exports.deserializeGetSharedItemsHeadersArg = deserializeGetSharedItemsHeadersArg;
function serializeGetFileGetSharedLinkQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeGetFileGetSharedLinkQueryParamsArg = serializeGetFileGetSharedLinkQueryParamsArg;
function deserializeGetFileGetSharedLinkQueryParamsArg(val) {
    const fields = val.fields;
    return { fields: fields };
}
exports.deserializeGetFileGetSharedLinkQueryParamsArg = deserializeGetFileGetSharedLinkQueryParamsArg;
function serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
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
exports.deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    return { ["can_download"]: val.canDownload, ["can_preview"]: val.canPreview, ["can_edit"]: val.canEdit };
}
exports.serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    const canDownload = (0, json_js_3.isJson)(val.can_download, "boolean") ? val.can_download : void 0;
    const canPreview = (0, json_js_3.isJson)(val.can_preview, "boolean") ? val.can_preview : void 0;
    const canEdit = (0, json_js_3.isJson)(val.can_edit, "boolean") ? val.can_edit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit };
}
exports.deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanity_name"]: val.vanityName, ["unshared_at"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
exports.serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField = serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField;
function deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_3.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_3.isJson)(val.vanity_name, "string") ? val.vanity_name : void 0;
    const unsharedAt = (0, json_js_3.isJson)(val.unshared_at, "string") ? val.unshared_at : void 0;
    const permissions = val.permissions == void 0 ? void 0 : deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions };
}
exports.deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField = deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField;
function serializeUpdateFileAddSharedLinkRequestBodyArg(val) {
    return { ["shared_link"]: val.sharedLink == void 0 ? void 0 : serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.serializeUpdateFileAddSharedLinkRequestBodyArg = serializeUpdateFileAddSharedLinkRequestBodyArg;
function deserializeUpdateFileAddSharedLinkRequestBodyArg(val) {
    const sharedLink = val.shared_link == void 0 ? void 0 : deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(val.shared_link);
    return { sharedLink: sharedLink };
}
exports.deserializeUpdateFileAddSharedLinkRequestBodyArg = deserializeUpdateFileAddSharedLinkRequestBodyArg;
function serializeUpdateFileAddSharedLinkQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeUpdateFileAddSharedLinkQueryParamsArg = serializeUpdateFileAddSharedLinkQueryParamsArg;
function deserializeUpdateFileAddSharedLinkQueryParamsArg(val) {
    const fields = val.fields;
    return { fields: fields };
}
exports.deserializeUpdateFileAddSharedLinkQueryParamsArg = deserializeUpdateFileAddSharedLinkQueryParamsArg;
function serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
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
exports.deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
function serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    return { ["can_download"]: val.canDownload, ["can_preview"]: val.canPreview, ["can_edit"]: val.canEdit };
}
exports.serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val) {
    const canDownload = (0, json_js_3.isJson)(val.can_download, "boolean") ? val.can_download : void 0;
    const canPreview = (0, json_js_3.isJson)(val.can_preview, "boolean") ? val.can_preview : void 0;
    const canEdit = (0, json_js_3.isJson)(val.can_edit, "boolean") ? val.can_edit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit };
}
exports.deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
function serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanity_name"]: val.vanityName, ["unshared_at"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
exports.serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField = serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField;
function deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_3.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_3.isJson)(val.vanity_name, "string") ? val.vanity_name : void 0;
    const unsharedAt = (0, json_js_3.isJson)(val.unshared_at, "string") ? val.unshared_at : void 0;
    const permissions = val.permissions == void 0 ? void 0 : deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions };
}
exports.deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField = deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField;
function serializeUpdateFileUpdateSharedLinkRequestBodyArg(val) {
    return { ["shared_link"]: val.sharedLink == void 0 ? void 0 : serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.serializeUpdateFileUpdateSharedLinkRequestBodyArg = serializeUpdateFileUpdateSharedLinkRequestBodyArg;
function deserializeUpdateFileUpdateSharedLinkRequestBodyArg(val) {
    const sharedLink = val.shared_link == void 0 ? void 0 : deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(val.shared_link);
    return { sharedLink: sharedLink };
}
exports.deserializeUpdateFileUpdateSharedLinkRequestBodyArg = deserializeUpdateFileUpdateSharedLinkRequestBodyArg;
function serializeUpdateFileUpdateSharedLinkQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeUpdateFileUpdateSharedLinkQueryParamsArg = serializeUpdateFileUpdateSharedLinkQueryParamsArg;
function deserializeUpdateFileUpdateSharedLinkQueryParamsArg(val) {
    const fields = val.fields;
    return { fields: fields };
}
exports.deserializeUpdateFileUpdateSharedLinkQueryParamsArg = deserializeUpdateFileUpdateSharedLinkQueryParamsArg;
function serializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField(val) {
    return {};
}
exports.serializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField = serializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField;
function deserializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField(val) {
    return {};
}
exports.deserializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField = deserializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField;
function serializeUpdateFileRemoveSharedLinkRequestBodyArg(val) {
    return { ["shared_link"]: val.sharedLink == void 0 ? void 0 : serializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
exports.serializeUpdateFileRemoveSharedLinkRequestBodyArg = serializeUpdateFileRemoveSharedLinkRequestBodyArg;
function deserializeUpdateFileRemoveSharedLinkRequestBodyArg(val) {
    const sharedLink = val.shared_link == void 0 ? void 0 : deserializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField(val.shared_link);
    return { sharedLink: sharedLink };
}
exports.deserializeUpdateFileRemoveSharedLinkRequestBodyArg = deserializeUpdateFileRemoveSharedLinkRequestBodyArg;
function serializeUpdateFileRemoveSharedLinkQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeUpdateFileRemoveSharedLinkQueryParamsArg = serializeUpdateFileRemoveSharedLinkQueryParamsArg;
function deserializeUpdateFileRemoveSharedLinkQueryParamsArg(val) {
    const fields = val.fields;
    return { fields: fields };
}
exports.deserializeUpdateFileRemoveSharedLinkQueryParamsArg = deserializeUpdateFileRemoveSharedLinkQueryParamsArg;
//# sourceMappingURL=sharedLinksFiles.generated.js.map