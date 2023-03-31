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
exports.JWTAuth = exports.JWTConfig = void 0;
class JWTConfig {
    constructor(fields) {
        var _a;
        if (!fields.enterpriseId && !fields.userId) {
            throw new Error('Enterprise ID or User ID is needed');
        }
        Object.assign(this, fields);
        this.jwtAlgorithm = (_a = fields.jwtAlgorithm) !== null && _a !== void 0 ? _a : 'RS256';
    }
    static fromConfigJsonString() { }
    static fromConfigFile() { }
}
exports.JWTConfig = JWTConfig;
class JWTAuth {
    constructor(config) {
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
exports.JWTAuth = JWTAuth;
//# sourceMappingURL=jwtAuth.js.map