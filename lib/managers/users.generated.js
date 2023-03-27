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
exports.UsersManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class UsersManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getUsers(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users"), { method: "GET", params: { ["filter_term"]: options.filterTerm, ["user_type"]: options.userType, ["external_app_user_id"]: options.externalAppUserId, ["fields"]: options.fields, ["offset"]: options.offset, ["limit"]: options.limit, ["usemarker"]: options.usemarker, ["marker"]: options.marker }, auth: this.auth });
            return (0, schemas_generated_js_1.deserializeUsers)(deserializeJSON(response.text));
        });
    }
    postUsers(requestBody, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users"), { method: "POST", params: { ["fields"]: options.fields }, body: json_js_1.JSON.stringify(requestBody), auth: this.auth });
            return (0, schemas_generated_js_2.deserializeUser)(deserializeJSON(response.text));
        });
    }
    getUsersMe(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/me"), { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth });
            return (0, schemas_generated_js_2.deserializeUser)(deserializeJSON(response.text));
        });
    }
    getUsersId(userId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId), { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth });
            return (0, schemas_generated_js_2.deserializeUser)(deserializeJSON(response.text));
        });
    }
    putUsersId(userId, requestBody, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId), { method: "PUT", params: { ["fields"]: options.fields }, body: json_js_1.JSON.stringify(requestBody), auth: this.auth });
            return (0, schemas_generated_js_2.deserializeUser)(deserializeJSON(response.text));
        });
    }
    deleteUsersId(userId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId), { method: "DELETE", params: { ["notify"]: options.notify, ["force"]: options.force }, auth: this.auth });
            return response.content;
        });
    }
}
exports.UsersManager = UsersManager;
//# sourceMappingURL=users.generated.js.map