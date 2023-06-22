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
exports.FilesManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class FilesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileById(fileId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId), { method: "GET", params: { ["fields"]: options.fields }, headers: { ["if-none-match"]: options.ifNoneMatch, ["boxapi"]: options.boxapi, ["x-rep-hints"]: options.xRepHints }, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFileById(fileId, requestBody, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId), { method: "PUT", params: { ["fields"]: options.fields }, headers: { ["if-match"]: options.ifMatch }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFileById(fileId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId), { method: "DELETE", headers: { ["if-match"]: options.ifMatch }, auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
    copyFile(fileId, requestBody, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/copy"), { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFileThumbnailById(fileId, extension, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/thumbnail.", extension), { method: "GET", params: { ["min_height"]: options.minHeight, ["min_width"]: options.minWidth, ["max_height"]: options.maxHeight, ["max_width"]: options.maxWidth }, auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.FilesManager = FilesManager;
//# sourceMappingURL=files.generated.js.map