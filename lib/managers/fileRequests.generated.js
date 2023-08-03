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
exports.FileRequestsManager = exports.CreateFileRequestCopyHeadersArg = exports.DeleteFileRequestByIdHeadersArg = exports.UpdateFileRequestByIdHeadersArg = exports.GetFileRequestByIdHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class GetFileRequestByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetFileRequestByIdHeadersArg = GetFileRequestByIdHeadersArg;
class UpdateFileRequestByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UpdateFileRequestByIdHeadersArg = UpdateFileRequestByIdHeadersArg;
class DeleteFileRequestByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteFileRequestByIdHeadersArg = DeleteFileRequestByIdHeadersArg;
class CreateFileRequestCopyHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateFileRequestCopyHeadersArg = CreateFileRequestCopyHeadersArg;
class FileRequestsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileRequestById(fileRequestId, headers = new GetFileRequestByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_requests/", fileRequestId), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileRequest)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFileRequestById(fileRequestId, requestBody, headers = new UpdateFileRequestByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ["if-match"]: (0, utils_js_2.toString)(headers.ifMatch) }, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_requests/", fileRequestId), { method: "PUT", headers: headersMap, body: (0, json_js_2.serializeJson)((0, schemas_generated_js_2.serializeFileRequestUpdateRequest)(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileRequest)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFileRequestById(fileRequestId, headers = new DeleteFileRequestByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_requests/", fileRequestId), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    createFileRequestCopy(fileRequestId, requestBody, headers = new CreateFileRequestCopyHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_requests/", fileRequestId, "/copy"), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)((0, schemas_generated_js_3.serializeFileRequestCopyRequest)(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileRequest)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.FileRequestsManager = FileRequestsManager;
//# sourceMappingURL=fileRequests.generated.js.map