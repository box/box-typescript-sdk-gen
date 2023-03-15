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
    postZipDownloads(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/zip_downloads"), { method: "POST", body: yield (0, schemas_generated_js_2.serializeZipDownloadRequest)(yield (0, json_js_1.serializeJson)(requestBody)), auth: this.auth });
            return yield (0, schemas_generated_js_1.deserializeZipDownload)(yield (0, json_js_2.deserializeJson)(response.text));
        });
    }
    getZipDownloadsIdContent(zipDownloadId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/zip_downloads/", zipDownloadId, "/content"), { method: "GET", auth: this.auth });
            return response.content;
        });
    }
    getZipDownloadsIdStatus(zipDownloadId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/zip_downloads/", zipDownloadId, "/status"), { method: "GET", auth: this.auth });
            return yield (0, schemas_generated_js_3.deserializeZipDownloadStatus)(yield (0, json_js_2.deserializeJson)(response.text));
        });
    }
}
exports.ZipDownloadsManager = ZipDownloadsManager;
//# sourceMappingURL=zipDownloads.generated.js.map