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
exports.newDeserializeGetInviteByIdQueryParamsArg = exports.newSerializeGetInviteByIdQueryParamsArg = exports.newDeserializeCreateInviteQueryParamsArg = exports.newSerializeCreateInviteQueryParamsArg = exports.newDeserializeCreateInviteRequestBodyArg = exports.newSerializeCreateInviteRequestBodyArg = exports.newDeserializeCreateInviteRequestBodyArgActionableByField = exports.newSerializeCreateInviteRequestBodyArgActionableByField = exports.newDeserializeCreateInviteRequestBodyArgEnterpriseField = exports.newSerializeCreateInviteRequestBodyArgEnterpriseField = exports.InvitesManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class InvitesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    createInvite(requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/invites"), { method: "POST", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeInvite)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getInviteById(inviteId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/invites/", inviteId), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeInvite)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.InvitesManager = InvitesManager;
function newSerializeCreateInviteRequestBodyArgEnterpriseField(val) {
    return { ["id"]: val.id };
}
exports.newSerializeCreateInviteRequestBodyArgEnterpriseField = newSerializeCreateInviteRequestBodyArgEnterpriseField;
function newDeserializeCreateInviteRequestBodyArgEnterpriseField(val) {
    const id = val.id;
    return { id: id };
}
exports.newDeserializeCreateInviteRequestBodyArgEnterpriseField = newDeserializeCreateInviteRequestBodyArgEnterpriseField;
function newSerializeCreateInviteRequestBodyArgActionableByField(val) {
    return { ["login"]: val.login };
}
exports.newSerializeCreateInviteRequestBodyArgActionableByField = newSerializeCreateInviteRequestBodyArgActionableByField;
function newDeserializeCreateInviteRequestBodyArgActionableByField(val) {
    const login = (0, json_js_2.isJson)(val.login, "string") ? val.login : void 0;
    return { login: login };
}
exports.newDeserializeCreateInviteRequestBodyArgActionableByField = newDeserializeCreateInviteRequestBodyArgActionableByField;
function newSerializeCreateInviteRequestBodyArg(val) {
    return { ["enterprise"]: newSerializeCreateInviteRequestBodyArgEnterpriseField(val.enterprise), ["actionableBy"]: newSerializeCreateInviteRequestBodyArgActionableByField(val.actionableBy) };
}
exports.newSerializeCreateInviteRequestBodyArg = newSerializeCreateInviteRequestBodyArg;
function newDeserializeCreateInviteRequestBodyArg(val) {
    const enterprise = newDeserializeCreateInviteRequestBodyArgEnterpriseField(val.enterprise);
    const actionableBy = newDeserializeCreateInviteRequestBodyArgActionableByField(val.actionableBy);
    return { enterprise: enterprise, actionableBy: actionableBy };
}
exports.newDeserializeCreateInviteRequestBodyArg = newDeserializeCreateInviteRequestBodyArg;
function newSerializeCreateInviteQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeCreateInviteQueryParamsArg = newSerializeCreateInviteQueryParamsArg;
function newDeserializeCreateInviteQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeCreateInviteQueryParamsArg = newDeserializeCreateInviteQueryParamsArg;
function newSerializeGetInviteByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeGetInviteByIdQueryParamsArg = newSerializeGetInviteByIdQueryParamsArg;
function newDeserializeGetInviteByIdQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeGetInviteByIdQueryParamsArg = newDeserializeGetInviteByIdQueryParamsArg;
//# sourceMappingURL=invites.generated.js.map