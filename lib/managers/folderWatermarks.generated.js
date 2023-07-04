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
exports.newDeserializeUpdateFolderWatermarkRequestBodyArg = exports.newSerializeUpdateFolderWatermarkRequestBodyArg = exports.newDeserializeUpdateFolderWatermarkRequestBodyArgWatermarkField = exports.newSerializeUpdateFolderWatermarkRequestBodyArgWatermarkField = exports.newDeserializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField = exports.newSerializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField = exports.FolderWatermarksManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class FolderWatermarksManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFolderWatermark(folderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/watermark"), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeWatermark)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFolderWatermark(folderId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/watermark"), { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeWatermark)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFolderWatermark(folderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/watermark"), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.FolderWatermarksManager = FolderWatermarksManager;
function newSerializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField(val) {
    return val;
}
exports.newSerializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField = newSerializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField;
function newDeserializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField\"";
    }
    if (val == "default") {
        return "default";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField = newDeserializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField;
function newSerializeUpdateFolderWatermarkRequestBodyArgWatermarkField(val) {
    return { ["imprint"]: newSerializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField(val.imprint) };
}
exports.newSerializeUpdateFolderWatermarkRequestBodyArgWatermarkField = newSerializeUpdateFolderWatermarkRequestBodyArgWatermarkField;
function newDeserializeUpdateFolderWatermarkRequestBodyArgWatermarkField(val) {
    const imprint = newDeserializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField(val.imprint);
    return { imprint: imprint };
}
exports.newDeserializeUpdateFolderWatermarkRequestBodyArgWatermarkField = newDeserializeUpdateFolderWatermarkRequestBodyArgWatermarkField;
function newSerializeUpdateFolderWatermarkRequestBodyArg(val) {
    return { ["watermark"]: newSerializeUpdateFolderWatermarkRequestBodyArgWatermarkField(val.watermark) };
}
exports.newSerializeUpdateFolderWatermarkRequestBodyArg = newSerializeUpdateFolderWatermarkRequestBodyArg;
function newDeserializeUpdateFolderWatermarkRequestBodyArg(val) {
    const watermark = newDeserializeUpdateFolderWatermarkRequestBodyArgWatermarkField(val.watermark);
    return { watermark: watermark };
}
exports.newDeserializeUpdateFolderWatermarkRequestBodyArg = newDeserializeUpdateFolderWatermarkRequestBodyArg;
//# sourceMappingURL=folderWatermarks.generated.js.map