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
exports.deserializeCreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg = exports.serializeCreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg = exports.FolderClassificationsManager = exports.DeleteFolderMetadataEnterpriseSecurityClassificationHeadersArg = exports.CreateFolderMetadataEnterpriseSecurityClassificationHeadersArg = exports.GetFolderMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetFolderMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetFolderMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg = GetFolderMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg;
class CreateFolderMetadataEnterpriseSecurityClassificationHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateFolderMetadataEnterpriseSecurityClassificationHeadersArg = CreateFolderMetadataEnterpriseSecurityClassificationHeadersArg;
class DeleteFolderMetadataEnterpriseSecurityClassificationHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteFolderMetadataEnterpriseSecurityClassificationHeadersArg = DeleteFolderMetadataEnterpriseSecurityClassificationHeadersArg;
class FolderClassificationsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFolderMetadataEnterpriseSecurityClassification6VmVochwUWo(folderId, headers = new GetFolderMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/enterprise/securityClassification-6VMVochwUWo"), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeClassification)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createFolderMetadataEnterpriseSecurityClassification(folderId, requestBody, headers = new CreateFolderMetadataEnterpriseSecurityClassificationHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/enterprise/securityClassification-6VMVochwUWo"), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeClassification)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFolderMetadataEnterpriseSecurityClassification(folderId, headers = new DeleteFolderMetadataEnterpriseSecurityClassificationHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/enterprise/securityClassification-6VMVochwUWo"), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
}
exports.FolderClassificationsManager = FolderClassificationsManager;
function serializeCreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg(val) {
    return { ["Box__Security__Classification__Key"]: val.boxSecurityClassificationKey };
}
exports.serializeCreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg = serializeCreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg;
function deserializeCreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg(val) {
    const boxSecurityClassificationKey = (0, json_js_3.isJson)(val.Box__Security__Classification__Key, "string") ? val.Box__Security__Classification__Key : void 0;
    return { boxSecurityClassificationKey: boxSecurityClassificationKey };
}
exports.deserializeCreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg = deserializeCreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg;
//# sourceMappingURL=folderClassifications.generated.js.map