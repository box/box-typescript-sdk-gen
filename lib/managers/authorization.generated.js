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
exports.AuthorizationManager = void 0;
const fetch_js_1 = require("../fetch.js");
class AuthorizationManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getAuthorize(responseType, clientId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://account.box.com/api/oauth2/authorize"), { method: "GET", params: { ["response_type"]: responseType, ["client_id"]: clientId, ["redirect_uri"]: options.redirectUri, ["state"]: options.state, ["scope"]: options.scope }, auth: this.auth });
            return void 0;
        });
    }
}
exports.AuthorizationManager = AuthorizationManager;
//# sourceMappingURL=authorization.generated.js.map