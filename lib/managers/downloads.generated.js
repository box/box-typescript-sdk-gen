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
exports.DownloadsManager = exports.DownloadFileHeadersArg = void 0;
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
class DownloadFileHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DownloadFileHeadersArg = DownloadFileHeadersArg;
class DownloadsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    downloadFile(fileId, queryParams = {}, headers = new DownloadFileHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["version"]: (0, utils_js_2.toString)(queryParams.version), ["access_token"]: (0, utils_js_2.toString)(queryParams.accessToken) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ["range"]: (0, utils_js_2.toString)(headers.range), ["boxapi"]: (0, utils_js_2.toString)(headers.boxapi) }, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/content"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "binary", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.DownloadsManager = DownloadsManager;
//# sourceMappingURL=downloads.generated.js.map