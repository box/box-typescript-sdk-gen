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
exports.deserializeDownloadFileHeadersArg = exports.serializeDownloadFileHeadersArg = exports.deserializeDownloadFileQueryParamsArg = exports.serializeDownloadFileQueryParamsArg = exports.DownloadsManager = void 0;
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class DownloadsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    downloadFile(fileId, queryParams = {}, headers = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["version"]: (0, utils_js_2.toString)(queryParams.version), ["access_token"]: (0, utils_js_2.toString)(queryParams.accessToken) });
            const headersMap = (0, utils_js_1.prepareParams)({ ["range"]: (0, utils_js_2.toString)(headers.range), ["boxapi"]: (0, utils_js_2.toString)(headers.boxapi) });
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/content"), { method: "GET", params: queryParamsMap, headers: headersMap, auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.DownloadsManager = DownloadsManager;
function serializeDownloadFileQueryParamsArg(val) {
    return { ["version"]: val.version, ["access_token"]: val.accessToken };
}
exports.serializeDownloadFileQueryParamsArg = serializeDownloadFileQueryParamsArg;
function deserializeDownloadFileQueryParamsArg(val) {
    const version = (0, json_js_1.isJson)(val.version, "string") ? val.version : void 0;
    const accessToken = (0, json_js_1.isJson)(val.access_token, "string") ? val.access_token : void 0;
    return { version: version, accessToken: accessToken };
}
exports.deserializeDownloadFileQueryParamsArg = deserializeDownloadFileQueryParamsArg;
function serializeDownloadFileHeadersArg(val) {
    return { ["range"]: val.range, ["boxapi"]: val.boxapi };
}
exports.serializeDownloadFileHeadersArg = serializeDownloadFileHeadersArg;
function deserializeDownloadFileHeadersArg(val) {
    const range = (0, json_js_1.isJson)(val.range, "string") ? val.range : void 0;
    const boxapi = (0, json_js_1.isJson)(val.boxapi, "string") ? val.boxapi : void 0;
    return { range: range, boxapi: boxapi };
}
exports.deserializeDownloadFileHeadersArg = deserializeDownloadFileHeadersArg;
//# sourceMappingURL=downloads.generated.js.map