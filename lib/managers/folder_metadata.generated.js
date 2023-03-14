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
exports.FolderMetadataManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class FolderMetadataManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFoldersIdMetadata(folderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata"), { method: "GET", auth: this.auth });
            return yield (0, schemas_generated_js_1.deserializeMetadatas)((0, json_js_1.deserializeJSON)(response.text));
        });
    }
    getFoldersIdMetadataIdId(folderId, scope, templateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/", scope, "/", templateKey), { method: "GET", auth: this.auth });
            return yield (0, schemas_generated_js_2.deserializeMetadata)((0, json_js_1.deserializeJSON)(response.text));
        });
    }
    postFoldersIdMetadataIdId(folderId, scope, templateKey, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/", scope, "/", templateKey), { method: "POST", body: JSON.stringify(requestBody), auth: this.auth });
            return yield (0, schemas_generated_js_2.deserializeMetadata)((0, json_js_1.deserializeJSON)(response.text));
        });
    }
    deleteFoldersIdMetadataIdId(folderId, scope, templateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/", scope, "/", templateKey), { method: "DELETE", auth: this.auth });
            return response.content;
        });
    }
}
exports.FolderMetadataManager = FolderMetadataManager;
//# sourceMappingURL=folder_metadata.generated.js.map