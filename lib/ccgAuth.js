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
exports.CCGAuth = void 0;
const fetch_js_1 = require("./fetch.js");
class CCGAuth {
    constructor({ ccgConfig }) {
        if (!ccgConfig.enterpriseId && !ccgConfig.userId) {
            throw new Error('Enterprise ID or User ID is needed');
        }
        this.ccgConfig = ccgConfig;
    }
    retrieveToken() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.token) {
                yield this.refreshToken();
            }
            return this.token;
        });
    }
    refreshToken() {
        return __awaiter(this, void 0, void 0, function* () {
            let subjectId, subjectType;
            if (!this.ccgConfig.userId) {
                subjectId = this.ccgConfig.enterpriseId;
                subjectType = 'enterprise';
            }
            else {
                subjectId = this.ccgConfig.userId;
                subjectType = 'user';
            }
            const requestBody = {
                grant_type: 'client_credentials',
                client_id: this.ccgConfig.clientId,
                client_secret: this.ccgConfig.clientSecret,
                box_subject_id: subjectId,
                box_subject_type: subjectType,
            };
            const response = (yield (0, fetch_js_1.fetch)('https://api.box.com/oauth2/token', {
                method: 'POST',
                body: new URLSearchParams(requestBody).toString(),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }));
            const tokenResponse = JSON.parse(response.text);
            this.token = tokenResponse.access_token;
            return this.token;
        });
    }
}
exports.CCGAuth = CCGAuth;
//# sourceMappingURL=ccgAuth.js.map