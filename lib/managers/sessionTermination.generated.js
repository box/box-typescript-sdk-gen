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
exports.deserializeCreateGroupTerminateSessionRequestBodyArg = exports.serializeCreateGroupTerminateSessionRequestBodyArg = exports.deserializeCreateUserTerminateSessionRequestBodyArg = exports.serializeCreateUserTerminateSessionRequestBodyArg = exports.SessionTerminationManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class SessionTerminationManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    createUserTerminateSession(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/terminate_sessions"), { method: "POST", body: (0, json_js_1.serializeJson)(serializeCreateUserTerminateSessionRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeSessionTerminationMessage)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    createGroupTerminateSession(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/groups/terminate_sessions"), { method: "POST", body: (0, json_js_1.serializeJson)(serializeCreateGroupTerminateSessionRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeSessionTerminationMessage)((0, json_js_2.deserializeJson)(response.text));
        });
    }
}
exports.SessionTerminationManager = SessionTerminationManager;
function serializeCreateUserTerminateSessionRequestBodyArg(val) {
    return { ["user_ids"]: val.userIds.map(function (item) {
            return void 0;
        }), ["user_logins"]: val.userLogins.map(function (item) {
            return void 0;
        }) };
}
exports.serializeCreateUserTerminateSessionRequestBodyArg = serializeCreateUserTerminateSessionRequestBodyArg;
function deserializeCreateUserTerminateSessionRequestBodyArg(val) {
    const userIds = val.user_ids.map(function (itm) {
        return void 0;
    });
    const userLogins = val.user_logins.map(function (itm) {
        return void 0;
    });
    return { userIds: userIds, userLogins: userLogins };
}
exports.deserializeCreateUserTerminateSessionRequestBodyArg = deserializeCreateUserTerminateSessionRequestBodyArg;
function serializeCreateGroupTerminateSessionRequestBodyArg(val) {
    return { ["group_ids"]: val.groupIds.map(function (item) {
            return void 0;
        }) };
}
exports.serializeCreateGroupTerminateSessionRequestBodyArg = serializeCreateGroupTerminateSessionRequestBodyArg;
function deserializeCreateGroupTerminateSessionRequestBodyArg(val) {
    const groupIds = val.group_ids.map(function (itm) {
        return void 0;
    });
    return { groupIds: groupIds };
}
exports.deserializeCreateGroupTerminateSessionRequestBodyArg = deserializeCreateGroupTerminateSessionRequestBodyArg;
//# sourceMappingURL=sessionTermination.generated.js.map