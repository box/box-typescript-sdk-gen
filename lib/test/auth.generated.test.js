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
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const client_generated_js_1 = require("../client.generated.js");
const jwtAuth_js_1 = require("../jwtAuth.js");
const jwtAuth_js_2 = require("../jwtAuth.js");
const ccgAuth_js_1 = require("../ccgAuth.js");
const developerTokenAuth_js_1 = require("../developerTokenAuth.js");
const oauth_js_1 = require("../oauth.js");
test("test_ccg_auth", function test_ccg_auth() {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = (0, utils_js_2.getEnvVar)("USER_ID");
        const enterpriseId = (0, utils_js_2.getEnvVar)("ENTERPRISE_ID");
        const ccgConfig = { clientId: (0, utils_js_2.getEnvVar)("CLIENT_ID"), clientSecret: (0, utils_js_2.getEnvVar)("CLIENT_SECRET"), enterpriseId: enterpriseId, userId: userId };
        const auth = new ccgAuth_js_1.CcgAuth({ config: ccgConfig });
        const client = new client_generated_js_1.Client({ auth: auth });
        auth.asUser(userId);
        const currentUser = yield client.users.getUserMe();
        if (!(currentUser.id == userId)) {
            throw "Assertion failed";
        }
        auth.asEnterprise(enterpriseId);
        const newUser = yield client.users.getUserMe({ fields: "enterprise" });
        if (!(!(newUser.enterprise == void 0) && newUser.enterprise.id == enterpriseId)) {
            throw "Assertion failed";
        }
        if (!!(newUser.id == userId)) {
            throw "Assertion failed";
        }
    });
});
test("test_jwt_auth", function test_jwt_auth() {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = (0, utils_js_2.getEnvVar)("USER_ID");
        const enterpriseId = (0, utils_js_2.getEnvVar)("ENTERPRISE_ID");
        const jwtConfig = jwtAuth_js_2.JwtConfig.fromConfigJsonString((0, utils_js_1.decodeBase64)((0, utils_js_2.getEnvVar)("JWT_CONFIG_BASE_64")));
        const auth = new jwtAuth_js_1.JwtAuth({ config: jwtConfig });
        const client = new client_generated_js_1.Client({ auth: auth });
        auth.asUser(userId);
        const currentUser = yield client.users.getUserMe();
        if (!(currentUser.id == userId)) {
            throw "Assertion failed";
        }
        auth.asEnterprise(enterpriseId);
        const newUser = yield client.users.getUserMe({ fields: "enterprise" });
        if (!(!(newUser.enterprise == void 0) && newUser.enterprise.id == enterpriseId)) {
            throw "Assertion failed";
        }
        if (!!(newUser.id == userId)) {
            throw "Assertion failed";
        }
    });
});
test("test_developer_token_auth", function test_developer_token_auth() {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = (0, utils_js_2.getEnvVar)("USER_ID");
        const jwtConfig = jwtAuth_js_2.JwtConfig.fromConfigJsonString((0, utils_js_1.decodeBase64)((0, utils_js_2.getEnvVar)("JWT_CONFIG_BASE_64")));
        const auth = new jwtAuth_js_1.JwtAuth({ config: jwtConfig });
        auth.asUser(userId);
        const token = yield auth.retrieveToken();
        const devAuth = new developerTokenAuth_js_1.DeveloperTokenAuth({ token: token });
        const client = new client_generated_js_1.Client({ auth: devAuth });
        const currentUser = yield client.users.getUserMe();
        if (!(currentUser.id == userId)) {
            throw "Assertion failed";
        }
    });
});
test("test_oauth_auth", function test_oauth_auth() {
    const config = { clientId: "OAUTH_CLIENT_ID", clientSecret: "OAUTH_CLIENT_SECRET" };
    const auth = new oauth_js_1.OAuth({ config: config });
    const authUrl = auth.getAuthorizeUrl();
    const expectedAuthUrl = "https://account.box.com/api/oauth2/authorize?client_id=OAUTH_CLIENT_ID&response_type=code";
    if (!(authUrl == expectedAuthUrl)) {
        throw "Assertion failed";
    }
});
//# sourceMappingURL=auth.generated.test.js.map