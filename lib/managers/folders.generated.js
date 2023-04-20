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
exports.FoldersManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class FoldersManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFolderById(folderId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId), { method: "GET", params: { ["fields"]: options.fields }, headers: { ["if-none-match"]: options.ifNoneMatch, ["boxapi"]: options.boxapi }, auth: this.auth });
            return (0, schemas_generated_js_1.deserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    restoreFolderFromTrash(folderId, requestBody, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId), { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth });
            return (0, schemas_generated_js_2.deserializeTrashFolderRestored)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFolderById(folderId, requestBody, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId), { method: "PUT", params: { ["fields"]: options.fields }, headers: { ["if-match"]: options.ifMatch }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth });
            return (0, schemas_generated_js_1.deserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFolderById(folderId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId), { method: "DELETE", params: { ["recursive"]: options.recursive }, headers: { ["if-match"]: options.ifMatch }, auth: this.auth });
            return response.content;
        });
    }
    getFolderItems(folderId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/items"), { method: "GET", params: { ["fields"]: options.fields, ["usemarker"]: options.usemarker, ["marker"]: options.marker, ["offset"]: options.offset, ["limit"]: options.limit, ["sort"]: options.sort, ["direction"]: options.direction }, headers: { ["boxapi"]: options.boxapi }, auth: this.auth });
            return (0, schemas_generated_js_3.deserializeItems)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createFolder(requestBody, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders"), { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth });
            return (0, schemas_generated_js_1.deserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    copyFolder(folderId, requestBody, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/copy"), { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth });
            return (0, schemas_generated_js_1.deserializeFolderFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.FoldersManager = FoldersManager;
//# sourceMappingURL=folders.generated.js.map