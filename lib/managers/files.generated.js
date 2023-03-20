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
const schemas_generated_js_2 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class FilesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFilesId(fileId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId), { method: "GET", params: { ["fields"]: options.fields }, headers: { ["if-none-match"]: options.ifNoneMatch, ["boxapi"]: options.boxapi, ["x-rep-hints"]: options.xRepHints }, auth: this.auth });
            return yield (0, schemas_generated_js_1.deserializeFile)(deserializeJSON(response.text));
        });
    }
    postFilesId(fileId, requestBody, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId), { method: "POST", params: { ["fields"]: options.fields }, body: json_js_1.JSON.stringify(requestBody), auth: this.auth });
            return yield (0, schemas_generated_js_2.deserializeTrashFileRestored)(deserializeJSON(response.text));
        });
    }
    putFilesId(fileId, requestBody, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId), { method: "PUT", params: { ["fields"]: options.fields }, headers: { ["if-match"]: options.ifMatch }, body: json_js_1.JSON.stringify(requestBody), auth: this.auth });
            return yield (0, schemas_generated_js_1.deserializeFile)(deserializeJSON(response.text));
        });
    }
    deleteFilesId(fileId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId), { method: "DELETE", headers: { ["if-match"]: options.ifMatch }, auth: this.auth });
            return response.content;
        });
    }
    postFilesIdCopy(fileId, requestBody, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/copy"), { method: "POST", params: { ["fields"]: options.fields }, body: json_js_1.JSON.stringify(requestBody), auth: this.auth });
            return yield (0, schemas_generated_js_1.deserializeFile)(deserializeJSON(response.text));
        });
    }
    getFilesIdThumbnailId(fileId, extension, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/thumbnail.", extension), { method: "GET", params: { ["min_height"]: options.minHeight, ["min_width"]: options.minWidth, ["max_height"]: options.maxHeight, ["max_width"]: options.maxWidth }, auth: this.auth });
            return response.content;
        });
    }
}
exports.FilesManager = FilesManager;
//# sourceMappingURL=files.generated.js.map