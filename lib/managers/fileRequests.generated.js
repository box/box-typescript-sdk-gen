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
class FileRequestsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileRequestById(fileRequestId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_requests/", fileRequestId), { method: "GET", auth: this.auth });
            return (0, schemas_generated_js_1.deserializeFileRequest)(deserializeJSON(response.text));
        });
    }
    updateFileRequestById(fileRequestId, requestBody, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_requests/", fileRequestId), { method: "PUT", headers: { ["if-match"]: options.ifMatch }, body: (0, schemas_generated_js_2.serializeFileRequestUpdateRequest)(serializeJSON(requestBody)), auth: this.auth });
            return (0, schemas_generated_js_1.deserializeFileRequest)(deserializeJSON(response.text));
        });
    }
    deleteFileRequestById(fileRequestId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_requests/", fileRequestId), { method: "DELETE", auth: this.auth });
            return response.content;
        });
    }
    createFileRequestCopy(fileRequestId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_requests/", fileRequestId, "/copy"), { method: "POST", body: (0, schemas_generated_js_3.serializeFileRequestCopyRequest)(serializeJSON(requestBody)), auth: this.auth });
            return (0, schemas_generated_js_1.deserializeFileRequest)(deserializeJSON(response.text));
        });
    }
}
exports.FileRequestsManager = FileRequestsManager;
//# sourceMappingURL=fileRequests.generated.js.map