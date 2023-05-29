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
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class ZipDownloadsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    createZipDownload(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/zip_downloads"), { method: "POST", body: (0, json_js_1.serializeJson)((0, schemas_generated_js_2.serializeZipDownloadRequest)(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeZipDownload)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    getZipDownloadContent(zipDownloadId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://dl.boxcloud.com/2.0/zip_downloads/", zipDownloadId, "/content"), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
    getZipDownloadStatus(zipDownloadId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/zip_downloads/", zipDownloadId, "/status"), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.deserializeZipDownloadStatus)((0, json_js_2.deserializeJson)(response.text));
        });
    }
}
exports.ZipDownloadsManager = ZipDownloadsManager;
//# sourceMappingURL=zipDownloads.generated.js.map