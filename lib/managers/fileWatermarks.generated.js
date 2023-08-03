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
exports.deserializeUpdateFileWatermarkRequestBodyArg = exports.serializeUpdateFileWatermarkRequestBodyArg = exports.deserializeUpdateFileWatermarkRequestBodyArgWatermarkField = exports.serializeUpdateFileWatermarkRequestBodyArgWatermarkField = exports.deserializeUpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField = exports.serializeUpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField = exports.FileWatermarksManager = exports.DeleteFileWatermarkHeadersArg = exports.UpdateFileWatermarkHeadersArg = exports.GetFileWatermarkHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetFileWatermarkHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetFileWatermarkHeadersArg = GetFileWatermarkHeadersArg;
class UpdateFileWatermarkHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UpdateFileWatermarkHeadersArg = UpdateFileWatermarkHeadersArg;
class DeleteFileWatermarkHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteFileWatermarkHeadersArg = DeleteFileWatermarkHeadersArg;
class FileWatermarksManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileWatermark(fileId, headers = new GetFileWatermarkHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/watermark"), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWatermark)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFileWatermark(fileId, requestBody, headers = new UpdateFileWatermarkHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/watermark"), { method: "PUT", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeUpdateFileWatermarkRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWatermark)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFileWatermark(fileId, headers = new DeleteFileWatermarkHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/watermark"), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
}
exports.FileWatermarksManager = FileWatermarksManager;
function serializeUpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField(val) {
    return val;
}
exports.serializeUpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField = serializeUpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField;
function deserializeUpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField\"";
    }
    if (val == "default") {
        return "default";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField = deserializeUpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField;
function serializeUpdateFileWatermarkRequestBodyArgWatermarkField(val) {
    return { ["imprint"]: serializeUpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField(val.imprint) };
}
exports.serializeUpdateFileWatermarkRequestBodyArgWatermarkField = serializeUpdateFileWatermarkRequestBodyArgWatermarkField;
function deserializeUpdateFileWatermarkRequestBodyArgWatermarkField(val) {
    const imprint = deserializeUpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField(val.imprint);
    return { imprint: imprint };
}
exports.deserializeUpdateFileWatermarkRequestBodyArgWatermarkField = deserializeUpdateFileWatermarkRequestBodyArgWatermarkField;
function serializeUpdateFileWatermarkRequestBodyArg(val) {
    return { ["watermark"]: serializeUpdateFileWatermarkRequestBodyArgWatermarkField(val.watermark) };
}
exports.serializeUpdateFileWatermarkRequestBodyArg = serializeUpdateFileWatermarkRequestBodyArg;
function deserializeUpdateFileWatermarkRequestBodyArg(val) {
    const watermark = deserializeUpdateFileWatermarkRequestBodyArgWatermarkField(val.watermark);
    return { watermark: watermark };
}
exports.deserializeUpdateFileWatermarkRequestBodyArg = deserializeUpdateFileWatermarkRequestBodyArg;
//# sourceMappingURL=fileWatermarks.generated.js.map