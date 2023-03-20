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
exports.ListCollaborationsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class ListCollaborationsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFilesIdCollaborations(fileId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/collaborations"), { method: "GET", params: { ["fields"]: options.fields, ["limit"]: options.limit, ["marker"]: options.marker }, auth: this.auth });
            return yield (0, schemas_generated_js_1.deserializeCollaborations)(deserializeJSON(response.text));
        });
    }
    getFoldersIdCollaborations(folderId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/collaborations"), { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth });
            return yield (0, schemas_generated_js_1.deserializeCollaborations)(deserializeJSON(response.text));
        });
    }
    getCollaborations(status, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaborations"), { method: "GET", params: { ["status"]: status, ["fields"]: options.fields, ["offset"]: options.offset, ["limit"]: options.limit }, auth: this.auth });
            return yield (0, schemas_generated_js_1.deserializeCollaborations)(deserializeJSON(response.text));
        });
    }
    postCollaborations(requestBody, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaborations"), { method: "POST", params: { ["fields"]: options.fields, ["notify"]: options.notify }, body: json_js_1.JSON.stringify(requestBody), auth: this.auth });
            return yield (0, schemas_generated_js_2.deserializeCollaboration)(deserializeJSON(response.text));
        });
    }
    getGroupsIdCollaborations(groupId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/groups/", groupId, "/collaborations"), { method: "GET", params: { ["limit"]: options.limit, ["offset"]: options.offset }, auth: this.auth });
            return yield (0, schemas_generated_js_1.deserializeCollaborations)(deserializeJSON(response.text));
        });
    }
}
exports.ListCollaborationsManager = ListCollaborationsManager;
//# sourceMappingURL=listCollaborations.generated.js.map