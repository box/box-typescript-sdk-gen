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
    constructor({ config }) {
        if (!config.enterpriseId && !config.userId) {
            throw new Error('Enterprise ID or User ID is needed');
        }
        this.config = config;
        if (this.config.enterpriseId) {
            this.subjectId = this.config.enterpriseId;
            this.subjectType = 'enterprise';
        }
        else {
            this.subjectId = this.config.userId;
            this.subjectType = 'user';
        }
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
            const requestBody = {
                grant_type: 'client_credentials',
                client_id: this.config.clientId,
                client_secret: this.config.clientSecret,
                box_subject_id: this.subjectId,
                box_subject_type: this.subjectType,
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
    authenticateUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.subjectId = userId;
            this.subjectType = 'user';
            return this.refreshToken();
        });
    }
    authenticateEnterprise(enterpriseId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.subjectId = enterpriseId;
            this.subjectType = 'enterprise';
            return this.refreshToken();
        });
    }
}
exports.CCGAuth = CCGAuth;
//# sourceMappingURL=ccgAuth.js.map