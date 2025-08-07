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
exports.getAccessToken = getAccessToken;
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const utils_js_3 = require("../internal/utils.js");
const utils_js_4 = require("../internal/utils.js");
const client_generated_js_1 = require("../client.generated.js");
const ccgAuth_generated_js_1 = require("../box/ccgAuth.generated.js");
const ccgAuth_generated_js_2 = require("../box/ccgAuth.generated.js");
const developerTokenAuth_generated_js_1 = require("../box/developerTokenAuth.generated.js");
const oauth_generated_js_1 = require("../box/oauth.generated.js");
const oauth_generated_js_2 = require("../box/oauth.generated.js");
const tokenStorage_generated_js_1 = require("../box/tokenStorage.generated.js");
const jwtAuth_generated_js_1 = require("../box/jwtAuth.generated.js");
const jwtAuth_generated_js_2 = require("../box/jwtAuth.generated.js");
function getAccessToken() {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = (0, utils_js_2.getEnvVar)('USER_ID');
        const enterpriseId = (0, utils_js_2.getEnvVar)('ENTERPRISE_ID');
        const ccgConfig = new ccgAuth_generated_js_2.CcgConfig({
            clientId: (0, utils_js_2.getEnvVar)('CLIENT_ID'),
            clientSecret: (0, utils_js_2.getEnvVar)('CLIENT_SECRET'),
            enterpriseId: enterpriseId,
            userId: userId,
        });
        const auth = new ccgAuth_generated_js_1.BoxCcgAuth({ config: ccgConfig });
        const authUser = auth.withUserSubject(userId);
        return yield authUser.retrieveToken();
    });
}
test('test_jwt_auth', function test_jwt_auth() {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = (0, utils_js_2.getEnvVar)('USER_ID');
        const enterpriseId = (0, utils_js_2.getEnvVar)('ENTERPRISE_ID');
        const jwtConfig = jwtAuth_generated_js_2.JwtConfig.fromConfigJsonString((0, utils_js_1.decodeBase64)((0, utils_js_2.getEnvVar)('JWT_CONFIG_BASE_64')));
        const auth = new jwtAuth_generated_js_1.BoxJwtAuth({ config: jwtConfig });
        const userAuth = auth.withUserSubject(userId);
        const userClient = new client_generated_js_1.BoxClient({ auth: userAuth });
        const currentUser = yield userClient.users.getUserMe();
        if (!(currentUser.id == userId)) {
            throw new Error('Assertion failed');
        }
        const enterpriseAuth = auth.withEnterpriseSubject(enterpriseId);
        const enterpriseClient = new client_generated_js_1.BoxClient({ auth: enterpriseAuth });
        const newUser = yield enterpriseClient.users.getUserMe({
            fields: ['enterprise'],
        });
        if (!!(newUser.enterprise == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!(newUser.enterprise.id == enterpriseId)) {
            throw new Error('Assertion failed');
        }
        if (!!(newUser.id == userId)) {
            throw new Error('Assertion failed');
        }
    });
});
test('test_jwt_auth_downscope', function test_jwt_auth_downscope() {
    return __awaiter(this, void 0, void 0, function* () {
        const jwtConfig = jwtAuth_generated_js_2.JwtConfig.fromConfigJsonString((0, utils_js_1.decodeBase64)((0, utils_js_2.getEnvVar)('JWT_CONFIG_BASE_64')));
        const auth = new jwtAuth_generated_js_1.BoxJwtAuth({ config: jwtConfig });
        const parentClient = new client_generated_js_1.BoxClient({ auth: auth });
        const uploadedFiles = yield parentClient.uploads.uploadFile({
            attributes: {
                name: (0, utils_js_3.getUuid)(),
                parent: { id: '0' },
            },
            file: (0, utils_js_4.generateByteStream)(1024 * 1024),
        });
        const file = uploadedFiles.entries[0];
        const resourcePath = ''.concat('https://api.box.com/2.0/files/', file.id);
        const downscopedToken = yield auth.downscopeToken(['item_rename', 'item_preview'], resourcePath);
        if (!!(downscopedToken.accessToken == void 0)) {
            throw new Error('Assertion failed');
        }
        const downscopedClient = new client_generated_js_1.BoxClient({
            auth: new developerTokenAuth_generated_js_1.BoxDeveloperTokenAuth({ token: downscopedToken.accessToken }),
        });
        yield downscopedClient.files.updateFileById(file.id, {
            requestBody: { name: (0, utils_js_3.getUuid)() },
        });
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield downscopedClient.files.deleteFileById(file.id);
        })).rejects.toThrow();
        yield parentClient.files.deleteFileById(file.id);
    });
});
test('test_jwt_downscope_token_succeeds_if_no_token_available', function test_jwt_downscope_token_succeeds_if_no_token_available() {
    return __awaiter(this, void 0, void 0, function* () {
        const jwtConfig = jwtAuth_generated_js_2.JwtConfig.fromConfigJsonString((0, utils_js_1.decodeBase64)((0, utils_js_2.getEnvVar)('JWT_CONFIG_BASE_64')));
        const auth = new jwtAuth_generated_js_1.BoxJwtAuth({ config: jwtConfig });
        const downscopedToken = yield auth.downscopeToken([
            'root_readonly',
        ]);
        if (!!(downscopedToken.accessToken == void 0)) {
            throw new Error('Assertion failed');
        }
        const downscopedClient = new client_generated_js_1.BoxClient({
            auth: new developerTokenAuth_generated_js_1.BoxDeveloperTokenAuth({ token: downscopedToken.accessToken }),
        });
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield downscopedClient.uploads.uploadFile({
                attributes: {
                    name: (0, utils_js_3.getUuid)(),
                    parent: {
                        id: '0',
                    },
                },
                file: (0, utils_js_4.generateByteStream)(1024 * 1024),
            });
        })).rejects.toThrow();
    });
});
test('test_jwt_auth_revoke', function test_jwt_auth_revoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const jwtConfig = jwtAuth_generated_js_2.JwtConfig.fromConfigJsonString((0, utils_js_1.decodeBase64)((0, utils_js_2.getEnvVar)('JWT_CONFIG_BASE_64')));
        const auth = new jwtAuth_generated_js_1.BoxJwtAuth({ config: jwtConfig });
        const tokenFromStorageBeforeRevoke = yield auth.retrieveToken();
        if (!!(tokenFromStorageBeforeRevoke == void 0)) {
            throw new Error('Assertion failed');
        }
        yield auth.revokeToken();
        const tokenFromStorageAfterRevoke = yield auth.retrieveToken();
        if (!!(tokenFromStorageBeforeRevoke.accessToken ==
            tokenFromStorageAfterRevoke.accessToken)) {
            throw new Error('Assertion failed');
        }
    });
});
test('test_oauth_auth_authorizeUrl', function test_oauth_auth_authorizeUrl() {
    const config = new oauth_generated_js_2.OAuthConfig({
        clientId: 'OAUTH_CLIENT_ID',
        clientSecret: 'OAUTH_CLIENT_SECRET',
    });
    const auth = new oauth_generated_js_1.BoxOAuth({ config: config });
    const authUrl = auth.getAuthorizeUrl();
    if (!(authUrl ==
        'https://account.box.com/api/oauth2/authorize?client_id=OAUTH_CLIENT_ID&response_type=code' ||
        authUrl ==
            'https://account.box.com/api/oauth2/authorize?response_type=code&client_id=OAUTH_CLIENT_ID')) {
        throw new Error('Assertion failed');
    }
});
test('test_oauth_downscope_token_succeeds_if_no_token_available', function test_oauth_downscope_token_succeeds_if_no_token_available() {
    return __awaiter(this, void 0, void 0, function* () {
        const config = new oauth_generated_js_2.OAuthConfig({
            clientId: (0, utils_js_2.getEnvVar)('CLIENT_ID'),
            clientSecret: (0, utils_js_2.getEnvVar)('CLIENT_SECRET'),
        });
        const auth = new oauth_generated_js_1.BoxOAuth({ config: config });
        const resourcePath = ''.concat('https://api.box.com/2.0/files/12345');
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield auth.downscopeToken(['item_rename', 'item_preview'], resourcePath);
        })).rejects.toThrow();
    });
});
test('test_ccg_auth', function test_ccg_auth() {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = (0, utils_js_2.getEnvVar)('USER_ID');
        const enterpriseId = (0, utils_js_2.getEnvVar)('ENTERPRISE_ID');
        const ccgConfig = new ccgAuth_generated_js_2.CcgConfig({
            clientId: (0, utils_js_2.getEnvVar)('CLIENT_ID'),
            clientSecret: (0, utils_js_2.getEnvVar)('CLIENT_SECRET'),
            enterpriseId: enterpriseId,
            userId: userId,
        });
        const auth = new ccgAuth_generated_js_1.BoxCcgAuth({ config: ccgConfig });
        const userAuth = auth.withUserSubject(userId);
        const userClient = new client_generated_js_1.BoxClient({ auth: userAuth });
        const currentUser = yield userClient.users.getUserMe();
        if (!(currentUser.id == userId)) {
            throw new Error('Assertion failed');
        }
        const enterpriseAuth = auth.withEnterpriseSubject(enterpriseId);
        const enterpriseClient = new client_generated_js_1.BoxClient({ auth: enterpriseAuth });
        const newUser = yield enterpriseClient.users.getUserMe({
            fields: ['enterprise'],
        });
        if (!!(newUser.enterprise == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!(newUser.enterprise.id == enterpriseId)) {
            throw new Error('Assertion failed');
        }
        if (!!(newUser.id == userId)) {
            throw new Error('Assertion failed');
        }
    });
});
test('test_ccg_auth_downscope', function test_ccg_auth_downscope() {
    return __awaiter(this, void 0, void 0, function* () {
        const ccgConfig = new ccgAuth_generated_js_2.CcgConfig({
            clientId: (0, utils_js_2.getEnvVar)('CLIENT_ID'),
            clientSecret: (0, utils_js_2.getEnvVar)('CLIENT_SECRET'),
            userId: (0, utils_js_2.getEnvVar)('USER_ID'),
        });
        const auth = new ccgAuth_generated_js_1.BoxCcgAuth({ config: ccgConfig });
        const parentClient = new client_generated_js_1.BoxClient({ auth: auth });
        const folder = yield parentClient.folders.createFolder({
            name: (0, utils_js_3.getUuid)(),
            parent: { id: '0' },
        });
        const resourcePath = ''.concat('https://api.box.com/2.0/folders/', folder.id);
        const downscopedToken = yield auth.downscopeToken(['item_rename', 'item_preview'], resourcePath);
        if (!!(downscopedToken.accessToken == void 0)) {
            throw new Error('Assertion failed');
        }
        const downscopedClient = new client_generated_js_1.BoxClient({
            auth: new developerTokenAuth_generated_js_1.BoxDeveloperTokenAuth({ token: downscopedToken.accessToken }),
        });
        yield downscopedClient.folders.updateFolderById(folder.id, {
            requestBody: { name: (0, utils_js_3.getUuid)() },
        });
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield downscopedClient.folders.deleteFolderById(folder.id);
        })).rejects.toThrow();
        yield parentClient.folders.deleteFolderById(folder.id);
    });
});
test('test_ccg_downscope_token_succeeds_if_no_token_available', function test_ccg_downscope_token_succeeds_if_no_token_available() {
    return __awaiter(this, void 0, void 0, function* () {
        const ccgConfig = new ccgAuth_generated_js_2.CcgConfig({
            clientId: (0, utils_js_2.getEnvVar)('CLIENT_ID'),
            clientSecret: (0, utils_js_2.getEnvVar)('CLIENT_SECRET'),
            userId: (0, utils_js_2.getEnvVar)('USER_ID'),
        });
        const auth = new ccgAuth_generated_js_1.BoxCcgAuth({ config: ccgConfig });
        const downscopedToken = yield auth.downscopeToken([
            'root_readonly',
        ]);
        if (!!(downscopedToken.accessToken == void 0)) {
            throw new Error('Assertion failed');
        }
        const downscopedClient = new client_generated_js_1.BoxClient({
            auth: new developerTokenAuth_generated_js_1.BoxDeveloperTokenAuth({ token: downscopedToken.accessToken }),
        });
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield downscopedClient.uploads.uploadFile({
                attributes: {
                    name: (0, utils_js_3.getUuid)(),
                    parent: {
                        id: '0',
                    },
                },
                file: (0, utils_js_4.generateByteStream)(1024 * 1024),
            });
        })).rejects.toThrow();
    });
});
test('test_ccg_auth_revoke', function test_ccg_auth_revoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const ccgConfig = new ccgAuth_generated_js_2.CcgConfig({
            clientId: (0, utils_js_2.getEnvVar)('CLIENT_ID'),
            clientSecret: (0, utils_js_2.getEnvVar)('CLIENT_SECRET'),
            userId: (0, utils_js_2.getEnvVar)('USER_ID'),
        });
        const auth = new ccgAuth_generated_js_1.BoxCcgAuth({ config: ccgConfig });
        const tokenFromStorageBeforeRevoke = yield auth.retrieveToken();
        if (!!(tokenFromStorageBeforeRevoke == void 0)) {
            throw new Error('Assertion failed');
        }
        yield auth.revokeToken();
        const tokenFromStorageAfterRevoke = yield auth.retrieveToken();
        if (!!(tokenFromStorageBeforeRevoke.accessToken ==
            tokenFromStorageAfterRevoke.accessToken)) {
            throw new Error('Assertion failed');
        }
    });
});
test('test_developer_downscope_token_succeeds_if_no_token_available', function test_developer_downscope_token_succeeds_if_no_token_available() {
    return __awaiter(this, void 0, void 0, function* () {
        const developerTokenConfig = {
            clientId: (0, utils_js_2.getEnvVar)('CLIENT_ID'),
            clientSecret: (0, utils_js_2.getEnvVar)('CLIENT_SECRET'),
        };
        const auth = new developerTokenAuth_generated_js_1.BoxDeveloperTokenAuth({
            token: '',
            config: developerTokenConfig,
        });
        const resourcePath = ''.concat('https://api.box.com/2.0/folders/12345');
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield auth.downscopeToken(['item_rename', 'item_preview'], resourcePath);
        })).rejects.toThrow();
    });
});
test('test_developer_token_auth_revoke', function test_developer_token_auth_revoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const developerTokenConfig = {
            clientId: (0, utils_js_2.getEnvVar)('CLIENT_ID'),
            clientSecret: (0, utils_js_2.getEnvVar)('CLIENT_SECRET'),
        };
        const token = yield getAccessToken();
        const auth = new developerTokenAuth_generated_js_1.BoxDeveloperTokenAuth({
            token: token.accessToken,
            config: developerTokenConfig,
        });
        const tokenFromStorageBeforeRevoke = yield auth.retrieveToken();
        if (!!(tokenFromStorageBeforeRevoke == void 0)) {
            throw new Error('Assertion failed');
        }
        yield auth.revokeToken();
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield auth.retrieveToken();
        })).rejects.toThrow();
    });
});
test('test_developer_token_auth_downscope', function test_developer_token_auth_downscope() {
    return __awaiter(this, void 0, void 0, function* () {
        const developerTokenConfig = {
            clientId: (0, utils_js_2.getEnvVar)('CLIENT_ID'),
            clientSecret: (0, utils_js_2.getEnvVar)('CLIENT_SECRET'),
        };
        const token = yield getAccessToken();
        const auth = new developerTokenAuth_generated_js_1.BoxDeveloperTokenAuth({
            token: token.accessToken,
            config: developerTokenConfig,
        });
        const parentClient = new client_generated_js_1.BoxClient({ auth: auth });
        const folder = yield parentClient.folders.createFolder({
            name: (0, utils_js_3.getUuid)(),
            parent: { id: '0' },
        });
        const resourcePath = ''.concat('https://api.box.com/2.0/folders/', folder.id);
        const downscopedToken = yield auth.downscopeToken(['item_rename', 'item_preview'], resourcePath);
        if (!!(downscopedToken.accessToken == void 0)) {
            throw new Error('Assertion failed');
        }
        const downscopedClient = new client_generated_js_1.BoxClient({
            auth: new developerTokenAuth_generated_js_1.BoxDeveloperTokenAuth({ token: downscopedToken.accessToken }),
        });
        yield downscopedClient.folders.updateFolderById(folder.id, {
            requestBody: { name: (0, utils_js_3.getUuid)() },
        });
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield downscopedClient.folders.deleteFolderById(folder.id);
        })).rejects.toThrow();
        yield parentClient.folders.deleteFolderById(folder.id);
    });
});
test('test_developer_token_auth', function test_developer_token_auth() {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = (0, utils_js_2.getEnvVar)('USER_ID');
        const token = yield getAccessToken();
        const devAuth = new developerTokenAuth_generated_js_1.BoxDeveloperTokenAuth({
            token: token.accessToken,
        });
        const client = new client_generated_js_1.BoxClient({ auth: devAuth });
        const currentUser = yield client.users.getUserMe();
        if (!(currentUser.id == userId)) {
            throw new Error('Assertion failed');
        }
    });
});
test('test_oauth_auth_revoke', function test_oauth_auth_revoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const token = yield getAccessToken();
        const tokenStorage = new tokenStorage_generated_js_1.InMemoryTokenStorage({
            token: token,
        });
        const config = new oauth_generated_js_2.OAuthConfig({
            clientId: (0, utils_js_2.getEnvVar)('CLIENT_ID'),
            clientSecret: (0, utils_js_2.getEnvVar)('CLIENT_SECRET'),
            tokenStorage: tokenStorage,
        });
        const auth = new oauth_generated_js_1.BoxOAuth({ config: config });
        const client = new client_generated_js_1.BoxClient({ auth: auth });
        yield client.users.getUserMe();
        yield auth.revokeToken();
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.users.getUserMe();
        })).rejects.toThrow();
    });
});
test('test_oauth_auth_downscope', function test_oauth_auth_downscope() {
    return __awaiter(this, void 0, void 0, function* () {
        const token = yield getAccessToken();
        const tokenStorage = new tokenStorage_generated_js_1.InMemoryTokenStorage({
            token: token,
        });
        const config = new oauth_generated_js_2.OAuthConfig({
            clientId: (0, utils_js_2.getEnvVar)('CLIENT_ID'),
            clientSecret: (0, utils_js_2.getEnvVar)('CLIENT_SECRET'),
            tokenStorage: tokenStorage,
        });
        const auth = new oauth_generated_js_1.BoxOAuth({ config: config });
        const parentClient = new client_generated_js_1.BoxClient({ auth: auth });
        const uploadedFiles = yield parentClient.uploads.uploadFile({
            attributes: {
                name: (0, utils_js_3.getUuid)(),
                parent: { id: '0' },
            },
            file: (0, utils_js_4.generateByteStream)(1024 * 1024),
        });
        const file = uploadedFiles.entries[0];
        const resourcePath = ''.concat('https://api.box.com/2.0/files/', file.id);
        const downscopedToken = yield auth.downscopeToken(['item_rename', 'item_preview'], resourcePath);
        if (!!(downscopedToken.accessToken == void 0)) {
            throw new Error('Assertion failed');
        }
        const downscopedClient = new client_generated_js_1.BoxClient({
            auth: new developerTokenAuth_generated_js_1.BoxDeveloperTokenAuth({ token: downscopedToken.accessToken }),
        });
        yield downscopedClient.files.updateFileById(file.id, {
            requestBody: { name: (0, utils_js_3.getUuid)() },
        });
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield downscopedClient.files.deleteFileById(file.id);
        })).rejects.toThrow();
        yield parentClient.files.deleteFileById(file.id);
    });
});
//# sourceMappingURL=auth.generated.test.js.map