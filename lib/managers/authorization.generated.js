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
exports.deserializeGetAuthorizeQueryParamsArg = exports.serializeGetAuthorizeQueryParamsArg = exports.deserializeGetAuthorizeQueryParamsArgResponseTypeField = exports.serializeGetAuthorizeQueryParamsArgResponseTypeField = exports.AuthorizationManager = void 0;
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class AuthorizationManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getAuthorize(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://account.box.com/api/oauth2/authorize"), { method: "GET", params: (0, utils_js_1.prepareParams)(serializeGetAuthorizeQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
}
exports.AuthorizationManager = AuthorizationManager;
function serializeGetAuthorizeQueryParamsArgResponseTypeField(val) {
    return val;
}
exports.serializeGetAuthorizeQueryParamsArgResponseTypeField = serializeGetAuthorizeQueryParamsArgResponseTypeField;
function deserializeGetAuthorizeQueryParamsArgResponseTypeField(val) {
    if (!(0, json_js_1.isJson)(val, "string")) {
        throw "Expecting a string for \"GetAuthorizeQueryParamsArgResponseTypeField\"";
    }
    if (val == "code") {
        return "code";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeGetAuthorizeQueryParamsArgResponseTypeField = deserializeGetAuthorizeQueryParamsArgResponseTypeField;
function serializeGetAuthorizeQueryParamsArg(val) {
    return { ["response_type"]: serializeGetAuthorizeQueryParamsArgResponseTypeField(val.responseType), ["client_id"]: val.clientId, ["redirect_uri"]: val.redirectUri, ["state"]: val.state, ["scope"]: val.scope };
}
exports.serializeGetAuthorizeQueryParamsArg = serializeGetAuthorizeQueryParamsArg;
function deserializeGetAuthorizeQueryParamsArg(val) {
    const responseType = deserializeGetAuthorizeQueryParamsArgResponseTypeField(val.response_type);
    const clientId = val.client_id;
    const redirectUri = (0, json_js_1.isJson)(val.redirect_uri, "string") ? val.redirect_uri : void 0;
    const state = (0, json_js_1.isJson)(val.state, "string") ? val.state : void 0;
    const scope = (0, json_js_1.isJson)(val.scope, "string") ? val.scope : void 0;
    return { responseType: responseType, clientId: clientId, redirectUri: redirectUri, state: state, scope: scope };
}
exports.deserializeGetAuthorizeQueryParamsArg = deserializeGetAuthorizeQueryParamsArg;
//# sourceMappingURL=authorization.generated.js.map