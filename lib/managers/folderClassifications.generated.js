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
exports.FolderClassificationsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class FolderClassificationsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFoldersIdMetadataEnterpriseSecurityClassification6VmVochwUWo(folderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/enterprise/securityClassification-6VMVochwUWo"), { method: "GET", auth: this.auth });
            return (0, schemas_generated_js_1.deserializeClassification)(deserializeJSON(response.text));
        });
    }
    postFoldersIdMetadataEnterpriseSecurityClassification6VmVochwUWo(folderId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/enterprise/securityClassification-6VMVochwUWo"), { method: "POST", body: json_js_1.JSON.stringify(requestBody), auth: this.auth });
            return (0, schemas_generated_js_1.deserializeClassification)(deserializeJSON(response.text));
        });
    }
    deleteFoldersIdMetadataEnterpriseSecurityClassification6VmVochwUWo(folderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/enterprise/securityClassification-6VMVochwUWo"), { method: "DELETE", auth: this.auth });
            return response.content;
        });
    }
}
exports.FolderClassificationsManager = FolderClassificationsManager;
//# sourceMappingURL=folderClassifications.generated.js.map