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
exports.SharedLinksFilesManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class SharedLinksFilesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getSharedItems(boxapi, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shared_items"), { method: "GET", params: { ["fields"]: options.fields }, headers: { ["if-none-match"]: options.ifNoneMatch, ["boxapi"]: boxapi }, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFileGetSharedLink(fileId, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "#get_shared_link"), { method: "GET", params: { ["fields"]: fields }, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFileAddSharedLink(fileId, fields, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "#add_shared_link"), { method: "PUT", params: { ["fields"]: fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFileUpdateSharedLink(fileId, fields, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "#update_shared_link"), { method: "PUT", params: { ["fields"]: fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFileRemoveSharedLink(fileId, fields, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "#remove_shared_link"), { method: "PUT", params: { ["fields"]: fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.SharedLinksFilesManager = SharedLinksFilesManager;
//# sourceMappingURL=sharedLinksFiles.generated.js.map