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
exports.deserializeUpdateFolderWatermarkRequestBodyArg = exports.serializeUpdateFolderWatermarkRequestBodyArg = exports.deserializeUpdateFolderWatermarkRequestBodyArgWatermarkField = exports.serializeUpdateFolderWatermarkRequestBodyArgWatermarkField = exports.deserializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField = exports.serializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField = exports.FolderWatermarksManager = exports.DeleteFolderWatermarkHeadersArg = exports.UpdateFolderWatermarkHeadersArg = exports.GetFolderWatermarkHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetFolderWatermarkHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetFolderWatermarkHeadersArg = GetFolderWatermarkHeadersArg;
class UpdateFolderWatermarkHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UpdateFolderWatermarkHeadersArg = UpdateFolderWatermarkHeadersArg;
class DeleteFolderWatermarkHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteFolderWatermarkHeadersArg = DeleteFolderWatermarkHeadersArg;
class FolderWatermarksManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFolderWatermark(folderId, headers = new GetFolderWatermarkHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/watermark"), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWatermark)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFolderWatermark(folderId, requestBody, headers = new UpdateFolderWatermarkHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/watermark"), { method: "PUT", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeUpdateFolderWatermarkRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWatermark)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFolderWatermark(folderId, headers = new DeleteFolderWatermarkHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/watermark"), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
}
exports.FolderWatermarksManager = FolderWatermarksManager;
function serializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField(val) {
    return val;
}
exports.serializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField = serializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField;
function deserializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField\"";
    }
    if (val == "default") {
        return "default";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField = deserializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField;
function serializeUpdateFolderWatermarkRequestBodyArgWatermarkField(val) {
    return { ["imprint"]: serializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField(val.imprint) };
}
exports.serializeUpdateFolderWatermarkRequestBodyArgWatermarkField = serializeUpdateFolderWatermarkRequestBodyArgWatermarkField;
function deserializeUpdateFolderWatermarkRequestBodyArgWatermarkField(val) {
    const imprint = deserializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField(val.imprint);
    return { imprint: imprint };
}
exports.deserializeUpdateFolderWatermarkRequestBodyArgWatermarkField = deserializeUpdateFolderWatermarkRequestBodyArgWatermarkField;
function serializeUpdateFolderWatermarkRequestBodyArg(val) {
    return { ["watermark"]: serializeUpdateFolderWatermarkRequestBodyArgWatermarkField(val.watermark) };
}
exports.serializeUpdateFolderWatermarkRequestBodyArg = serializeUpdateFolderWatermarkRequestBodyArg;
function deserializeUpdateFolderWatermarkRequestBodyArg(val) {
    const watermark = deserializeUpdateFolderWatermarkRequestBodyArgWatermarkField(val.watermark);
    return { watermark: watermark };
}
exports.deserializeUpdateFolderWatermarkRequestBodyArg = deserializeUpdateFolderWatermarkRequestBodyArg;
//# sourceMappingURL=folderWatermarks.generated.js.map