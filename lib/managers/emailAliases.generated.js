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
exports.deserializeCreateUserEmailAliasRequestBodyArg = exports.serializeCreateUserEmailAliasRequestBodyArg = exports.EmailAliasesManager = exports.DeleteUserEmailAliasByIdHeadersArg = exports.CreateUserEmailAliasHeadersArg = exports.GetUserEmailAliasesHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class GetUserEmailAliasesHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetUserEmailAliasesHeadersArg = GetUserEmailAliasesHeadersArg;
class CreateUserEmailAliasHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateUserEmailAliasHeadersArg = CreateUserEmailAliasHeadersArg;
class DeleteUserEmailAliasByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteUserEmailAliasByIdHeadersArg = DeleteUserEmailAliasByIdHeadersArg;
class EmailAliasesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getUserEmailAliases(userId, headers = new GetUserEmailAliasesHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId, "/email_aliases"), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeEmailAliases)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createUserEmailAlias(userId, requestBody, headers = new CreateUserEmailAliasHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId, "/email_aliases"), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateUserEmailAliasRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeEmailAlias)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteUserEmailAliasById(userId, emailAliasId, headers = new DeleteUserEmailAliasByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId, "/email_aliases/", emailAliasId), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
}
exports.EmailAliasesManager = EmailAliasesManager;
function serializeCreateUserEmailAliasRequestBodyArg(val) {
    return { ["email"]: val.email };
}
exports.serializeCreateUserEmailAliasRequestBodyArg = serializeCreateUserEmailAliasRequestBodyArg;
function deserializeCreateUserEmailAliasRequestBodyArg(val) {
    const email = val.email;
    return { email: email };
}
exports.deserializeCreateUserEmailAliasRequestBodyArg = deserializeCreateUserEmailAliasRequestBodyArg;
//# sourceMappingURL=emailAliases.generated.js.map