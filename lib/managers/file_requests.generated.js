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
exports.FileRequestsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class FileRequestsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileRequestsId(fileRequestId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_requests/", fileRequestId), { method: "GET", auth: this.auth });
            return yield (0, schemas_generated_js_1.deserializeFileRequest)((0, json_js_1.deserializeJSON)(response.text));
        });
    }
    putFileRequestsId(fileRequestId, requestBody, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_requests/", fileRequestId), { method: "PUT", headers: { ["if-match"]: options.ifMatch }, body: yield (0, schemas_generated_js_2.serializeFileRequestUpdateRequest)((0, json_js_2.serializeJSON)(requestBody)), auth: this.auth });
            return yield (0, schemas_generated_js_1.deserializeFileRequest)((0, json_js_1.deserializeJSON)(response.text));
        });
    }
    deleteFileRequestsId(fileRequestId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_requests/", fileRequestId), { method: "DELETE", auth: this.auth });
            return response.content;
        });
    }
    postFileRequestsIdCopy(fileRequestId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_requests/", fileRequestId, "/copy"), { method: "POST", body: yield (0, schemas_generated_js_3.serializeFileRequestCopyRequest)((0, json_js_2.serializeJSON)(requestBody)), auth: this.auth });
            return yield (0, schemas_generated_js_1.deserializeFileRequest)((0, json_js_1.deserializeJSON)(response.text));
        });
    }
}
exports.FileRequestsManager = FileRequestsManager;
//# sourceMappingURL=file_requests.generated.js.map