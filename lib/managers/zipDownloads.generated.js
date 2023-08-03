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
exports.ZipDownloadsManager = exports.GetZipDownloadStatusHeadersArg = exports.GetZipDownloadContentHeadersArg = exports.CreateZipDownloadHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class CreateZipDownloadHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateZipDownloadHeadersArg = CreateZipDownloadHeadersArg;
class GetZipDownloadContentHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetZipDownloadContentHeadersArg = GetZipDownloadContentHeadersArg;
class GetZipDownloadStatusHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetZipDownloadStatusHeadersArg = GetZipDownloadStatusHeadersArg;
class ZipDownloadsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    createZipDownload(requestBody, headers = new CreateZipDownloadHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/zip_downloads"), { method: "POST", headers: headersMap, body: (0, json_js_1.serializeJson)((0, schemas_generated_js_2.serializeZipDownloadRequest)(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeZipDownload)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    getZipDownloadContent(zipDownloadId, headers = new GetZipDownloadContentHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://dl.boxcloud.com/2.0/zip_downloads/", zipDownloadId, "/content"), { method: "GET", headers: headersMap, responseFormat: "binary", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
    getZipDownloadStatus(zipDownloadId, headers = new GetZipDownloadStatusHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/zip_downloads/", zipDownloadId, "/status"), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.deserializeZipDownloadStatus)((0, json_js_2.deserializeJson)(response.text));
        });
    }
}
exports.ZipDownloadsManager = ZipDownloadsManager;
//# sourceMappingURL=zipDownloads.generated.js.map