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
exports.CollaborationAllowlistEntriesManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class CollaborationAllowlistEntriesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getCollaborationWhitelistEntries(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaboration_whitelist_entries"), { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth });
            return (0, schemas_generated_js_1.deserializeCollaborationAllowlistEntries)(deserializeJSON(response.text));
        });
    }
    postCollaborationWhitelistEntries(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaboration_whitelist_entries"), { method: "POST", body: json_js_1.JSON.stringify(requestBody), auth: this.auth });
            return (0, schemas_generated_js_2.deserializeCollaborationAllowlistEntry)(deserializeJSON(response.text));
        });
    }
    getCollaborationWhitelistEntriesId(collaborationWhitelistEntryId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaboration_whitelist_entries/", collaborationWhitelistEntryId), { method: "GET", auth: this.auth });
            return (0, schemas_generated_js_2.deserializeCollaborationAllowlistEntry)(deserializeJSON(response.text));
        });
    }
    deleteCollaborationWhitelistEntriesId(collaborationWhitelistEntryId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaboration_whitelist_entries/", collaborationWhitelistEntryId), { method: "DELETE", auth: this.auth });
            return response.content;
        });
    }
}
exports.CollaborationAllowlistEntriesManager = CollaborationAllowlistEntriesManager;
//# sourceMappingURL=collaborationAllowlistEntries.generated.js.map