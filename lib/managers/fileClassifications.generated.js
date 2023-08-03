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
exports.deserializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg = exports.serializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg = exports.FileClassificationsManager = exports.DeleteFileMetadataEnterpriseSecurityClassificationHeadersArg = exports.CreateFileMetadataEnterpriseSecurityClassificationHeadersArg = exports.GetFileMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetFileMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetFileMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg = GetFileMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg;
class CreateFileMetadataEnterpriseSecurityClassificationHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateFileMetadataEnterpriseSecurityClassificationHeadersArg = CreateFileMetadataEnterpriseSecurityClassificationHeadersArg;
class DeleteFileMetadataEnterpriseSecurityClassificationHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteFileMetadataEnterpriseSecurityClassificationHeadersArg = DeleteFileMetadataEnterpriseSecurityClassificationHeadersArg;
class FileClassificationsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileMetadataEnterpriseSecurityClassification6VmVochwUWo(fileId, headers = new GetFileMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/enterprise/securityClassification-6VMVochwUWo"), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeClassification)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createFileMetadataEnterpriseSecurityClassification(fileId, requestBody, headers = new CreateFileMetadataEnterpriseSecurityClassificationHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/enterprise/securityClassification-6VMVochwUWo"), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeClassification)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFileMetadataEnterpriseSecurityClassification(fileId, headers = new DeleteFileMetadataEnterpriseSecurityClassificationHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/enterprise/securityClassification-6VMVochwUWo"), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
}
exports.FileClassificationsManager = FileClassificationsManager;
function serializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg(val) {
    return { ["Box__Security__Classification__Key"]: val.boxSecurityClassificationKey };
}
exports.serializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg = serializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg;
function deserializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg(val) {
    const boxSecurityClassificationKey = (0, json_js_3.isJson)(val.Box__Security__Classification__Key, "string") ? val.Box__Security__Classification__Key : void 0;
    return { boxSecurityClassificationKey: boxSecurityClassificationKey };
}
exports.deserializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg = deserializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg;
//# sourceMappingURL=fileClassifications.generated.js.map