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
exports.ZipDownloadsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
class ZipDownloadsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    createZipDownload(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/zip_downloads"), { method: "POST", body: (0, schemas_generated_js_2.serializeZipDownloadRequest)(serializeJSON(requestBody)), auth: this.auth });
            return (0, schemas_generated_js_1.deserializeZipDownload)(deserializeJSON(response.text));
        });
    }
    getZipDownloadContent(zipDownloadId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/zip_downloads/", zipDownloadId, "/content"), { method: "GET", auth: this.auth });
            return response.content;
        });
    }
    getZipDownloadStatus(zipDownloadId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/zip_downloads/", zipDownloadId, "/status"), { method: "GET", auth: this.auth });
            return (0, schemas_generated_js_3.deserializeZipDownloadStatus)(deserializeJSON(response.text));
        });
    }
}
exports.ZipDownloadsManager = ZipDownloadsManager;
//# sourceMappingURL=zipDownloads.generated.js.map