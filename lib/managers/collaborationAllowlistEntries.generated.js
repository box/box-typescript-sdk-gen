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
exports.deserializeCreateCollaborationWhitelistEntryRequestBodyArg = exports.serializeCreateCollaborationWhitelistEntryRequestBodyArg = exports.deserializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField = exports.serializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField = exports.CollaborationAllowlistEntriesManager = exports.DeleteCollaborationWhitelistEntryByIdHeadersArg = exports.GetCollaborationWhitelistEntryByIdHeadersArg = exports.CreateCollaborationWhitelistEntryHeadersArg = exports.GetCollaborationWhitelistEntriesHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetCollaborationWhitelistEntriesHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetCollaborationWhitelistEntriesHeadersArg = GetCollaborationWhitelistEntriesHeadersArg;
class CreateCollaborationWhitelistEntryHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateCollaborationWhitelistEntryHeadersArg = CreateCollaborationWhitelistEntryHeadersArg;
class GetCollaborationWhitelistEntryByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetCollaborationWhitelistEntryByIdHeadersArg = GetCollaborationWhitelistEntryByIdHeadersArg;
class DeleteCollaborationWhitelistEntryByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteCollaborationWhitelistEntryByIdHeadersArg = DeleteCollaborationWhitelistEntryByIdHeadersArg;
class CollaborationAllowlistEntriesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getCollaborationWhitelistEntries(queryParams = {}, headers = new GetCollaborationWhitelistEntriesHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["limit"]: (0, utils_js_2.toString)(queryParams.limit) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaboration_whitelist_entries"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeCollaborationAllowlistEntries)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createCollaborationWhitelistEntry(requestBody, headers = new CreateCollaborationWhitelistEntryHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaboration_whitelist_entries"), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateCollaborationWhitelistEntryRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeCollaborationAllowlistEntry)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getCollaborationWhitelistEntryById(collaborationWhitelistEntryId, headers = new GetCollaborationWhitelistEntryByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaboration_whitelist_entries/", collaborationWhitelistEntryId), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeCollaborationAllowlistEntry)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteCollaborationWhitelistEntryById(collaborationWhitelistEntryId, headers = new DeleteCollaborationWhitelistEntryByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaboration_whitelist_entries/", collaborationWhitelistEntryId), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
}
exports.CollaborationAllowlistEntriesManager = CollaborationAllowlistEntriesManager;
function serializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField(val) {
    return val;
}
exports.serializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField = serializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField;
function deserializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
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
exports.deserializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField = deserializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField;
function serializeCreateCollaborationWhitelistEntryRequestBodyArg(val) {
    return { ["domain"]: val.domain, ["direction"]: serializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField(val.direction) };
}
exports.serializeCreateCollaborationWhitelistEntryRequestBodyArg = serializeCreateCollaborationWhitelistEntryRequestBodyArg;
function deserializeCreateCollaborationWhitelistEntryRequestBodyArg(val) {
    const domain = val.domain;
    const direction = deserializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField(val.direction);
    return { domain: domain, direction: direction };
}
exports.deserializeCreateCollaborationWhitelistEntryRequestBodyArg = deserializeCreateCollaborationWhitelistEntryRequestBodyArg;
//# sourceMappingURL=collaborationAllowlistEntries.generated.js.map