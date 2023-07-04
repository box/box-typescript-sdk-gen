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
exports.newDeserializeUpdateFileRequestByIdHeadersArg = exports.newSerializeUpdateFileRequestByIdHeadersArg = exports.FileRequestsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class FileRequestsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileRequestById(fileRequestId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_requests/", fileRequestId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeFileRequest)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFileRequestById(fileRequestId, requestBody, headers = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_requests/", fileRequestId), { method: "PUT", headers: (0, utils_js_1.toMap)(headers), body: (0, json_js_2.serializeJson)((0, schemas_generated_js_2.newSerializeFileRequestUpdateRequest)(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeFileRequest)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFileRequestById(fileRequestId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_requests/", fileRequestId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
    createFileRequestCopy(fileRequestId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_requests/", fileRequestId, "/copy"), { method: "POST", body: (0, json_js_2.serializeJson)((0, schemas_generated_js_3.newSerializeFileRequestCopyRequest)(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeFileRequest)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.FileRequestsManager = FileRequestsManager;
function newSerializeUpdateFileRequestByIdHeadersArg(val) {
    return { ["ifMatch"]: val.ifMatch };
}
exports.newSerializeUpdateFileRequestByIdHeadersArg = newSerializeUpdateFileRequestByIdHeadersArg;
function newDeserializeUpdateFileRequestByIdHeadersArg(val) {
    const ifMatch = (0, json_js_3.isJson)(val.ifMatch, "string") ? val.ifMatch : void 0;
    return { ifMatch: ifMatch };
}
exports.newDeserializeUpdateFileRequestByIdHeadersArg = newDeserializeUpdateFileRequestByIdHeadersArg;
//# sourceMappingURL=fileRequests.generated.js.map