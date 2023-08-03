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
exports.AuthorizationManager = exports.GetAuthorizeHeadersArg = void 0;
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
class GetAuthorizeHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetAuthorizeHeadersArg = GetAuthorizeHeadersArg;
class AuthorizationManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getAuthorize(queryParams, headers = new GetAuthorizeHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["response_type"]: (0, utils_js_2.toString)(queryParams.responseType), ["client_id"]: (0, utils_js_2.toString)(queryParams.clientId), ["redirect_uri"]: (0, utils_js_2.toString)(queryParams.redirectUri), ["state"]: (0, utils_js_2.toString)(queryParams.state), ["scope"]: (0, utils_js_2.toString)(queryParams.scope) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://account.box.com/api/oauth2/authorize"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
}
exports.AuthorizationManager = AuthorizationManager;
//# sourceMappingURL=authorization.generated.js.map