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
exports.newDeserializeCreateCollaborationWhitelistEntryRequestBodyArg = exports.newSerializeCreateCollaborationWhitelistEntryRequestBodyArg = exports.newDeserializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField = exports.newSerializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField = exports.newDeserializeGetCollaborationWhitelistEntriesQueryParamsArg = exports.newSerializeGetCollaborationWhitelistEntriesQueryParamsArg = exports.CollaborationAllowlistEntriesManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class CollaborationAllowlistEntriesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getCollaborationWhitelistEntries(queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaboration_whitelist_entries"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeCollaborationAllowlistEntries)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createCollaborationWhitelistEntry(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaboration_whitelist_entries"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeCollaborationAllowlistEntry)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getCollaborationWhitelistEntryById(collaborationWhitelistEntryId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaboration_whitelist_entries/", collaborationWhitelistEntryId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeCollaborationAllowlistEntry)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteCollaborationWhitelistEntryById(collaborationWhitelistEntryId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaboration_whitelist_entries/", collaborationWhitelistEntryId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.CollaborationAllowlistEntriesManager = CollaborationAllowlistEntriesManager;
function newSerializeGetCollaborationWhitelistEntriesQueryParamsArg(val) {
    return { ["marker"]: val.marker, ["limit"]: val.limit };
}
exports.newSerializeGetCollaborationWhitelistEntriesQueryParamsArg = newSerializeGetCollaborationWhitelistEntriesQueryParamsArg;
function newDeserializeGetCollaborationWhitelistEntriesQueryParamsArg(val) {
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    return { marker: marker, limit: limit };
}
exports.newDeserializeGetCollaborationWhitelistEntriesQueryParamsArg = newDeserializeGetCollaborationWhitelistEntriesQueryParamsArg;
function newSerializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField(val) {
    return val;
}
exports.newSerializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField = newSerializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField;
function newDeserializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateCollaborationWhitelistEntryRequestBodyArgDirectionField\"";
    }
    if (val == "inbound") {
        return "inbound";
    }
    if (val == "outbound") {
        return "outbound";
    }
    if (val == "both") {
        return "both";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField = newDeserializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField;
function newSerializeCreateCollaborationWhitelistEntryRequestBodyArg(val) {
    return { ["domain"]: val.domain, ["direction"]: newSerializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField(val.direction) };
}
exports.newSerializeCreateCollaborationWhitelistEntryRequestBodyArg = newSerializeCreateCollaborationWhitelistEntryRequestBodyArg;
function newDeserializeCreateCollaborationWhitelistEntryRequestBodyArg(val) {
    const domain = val.domain;
    const direction = newDeserializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField(val.direction);
    return { domain: domain, direction: direction };
}
exports.newDeserializeCreateCollaborationWhitelistEntryRequestBodyArg = newDeserializeCreateCollaborationWhitelistEntryRequestBodyArg;
//# sourceMappingURL=collaborationAllowlistEntries.generated.js.map