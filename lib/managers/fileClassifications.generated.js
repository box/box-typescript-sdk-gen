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
exports.newDeserializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg = exports.newSerializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg = exports.FileClassificationsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class FileClassificationsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileMetadataEnterpriseSecurityClassification6VmVochwUWo(fileId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/enterprise/securityClassification-6VMVochwUWo"), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeClassification)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createFileMetadataEnterpriseSecurityClassification(fileId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/enterprise/securityClassification-6VMVochwUWo"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeClassification)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFileMetadataEnterpriseSecurityClassification(fileId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/enterprise/securityClassification-6VMVochwUWo"), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.FileClassificationsManager = FileClassificationsManager;
function newSerializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg(val) {
    return { ["boxSecurityClassificationKey"]: val.boxSecurityClassificationKey };
}
exports.newSerializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg = newSerializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg;
function newDeserializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg(val) {
    const boxSecurityClassificationKey = (0, json_js_2.isJson)(val.boxSecurityClassificationKey, "string") ? val.boxSecurityClassificationKey : void 0;
    return { boxSecurityClassificationKey: boxSecurityClassificationKey };
}
exports.newDeserializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg = newDeserializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg;
//# sourceMappingURL=fileClassifications.generated.js.map