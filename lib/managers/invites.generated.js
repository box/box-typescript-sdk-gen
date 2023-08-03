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
exports.deserializeCreateInviteRequestBodyArg = exports.serializeCreateInviteRequestBodyArg = exports.deserializeCreateInviteRequestBodyArgActionableByField = exports.serializeCreateInviteRequestBodyArgActionableByField = exports.deserializeCreateInviteRequestBodyArgEnterpriseField = exports.serializeCreateInviteRequestBodyArgEnterpriseField = exports.InvitesManager = exports.GetInviteByIdHeadersArg = exports.CreateInviteHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class CreateInviteHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateInviteHeadersArg = CreateInviteHeadersArg;
class GetInviteByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetInviteByIdHeadersArg = GetInviteByIdHeadersArg;
class InvitesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    createInvite(requestBody, queryParams = {}, headers = new CreateInviteHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/invites"), { method: "POST", params: queryParamsMap, headers: headersMap, body: (0, json_js_1.serializeJson)(serializeCreateInviteRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeInvite)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    getInviteById(inviteId, queryParams = {}, headers = new GetInviteByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/invites/", inviteId), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeInvite)((0, json_js_2.deserializeJson)(response.text));
        });
    }
}
exports.InvitesManager = InvitesManager;
function serializeCreateInviteRequestBodyArgEnterpriseField(val) {
    return { ["id"]: val.id };
}
exports.serializeCreateInviteRequestBodyArgEnterpriseField = serializeCreateInviteRequestBodyArgEnterpriseField;
function deserializeCreateInviteRequestBodyArgEnterpriseField(val) {
    const id = val.id;
    return { id: id };
}
exports.deserializeCreateInviteRequestBodyArgEnterpriseField = deserializeCreateInviteRequestBodyArgEnterpriseField;
function serializeCreateInviteRequestBodyArgActionableByField(val) {
    return { ["login"]: val.login };
}
exports.serializeCreateInviteRequestBodyArgActionableByField = serializeCreateInviteRequestBodyArgActionableByField;
function deserializeCreateInviteRequestBodyArgActionableByField(val) {
    const login = (0, json_js_3.isJson)(val.login, "string") ? val.login : void 0;
    return { login: login };
}
exports.deserializeCreateInviteRequestBodyArgActionableByField = deserializeCreateInviteRequestBodyArgActionableByField;
function serializeCreateInviteRequestBodyArg(val) {
    return { ["enterprise"]: serializeCreateInviteRequestBodyArgEnterpriseField(val.enterprise), ["actionable_by"]: serializeCreateInviteRequestBodyArgActionableByField(val.actionableBy) };
}
exports.serializeCreateInviteRequestBodyArg = serializeCreateInviteRequestBodyArg;
function deserializeCreateInviteRequestBodyArg(val) {
    const enterprise = deserializeCreateInviteRequestBodyArgEnterpriseField(val.enterprise);
    const actionableBy = deserializeCreateInviteRequestBodyArgActionableByField(val.actionable_by);
    return { enterprise: enterprise, actionableBy: actionableBy };
}
exports.deserializeCreateInviteRequestBodyArg = deserializeCreateInviteRequestBodyArg;
//# sourceMappingURL=invites.generated.js.map