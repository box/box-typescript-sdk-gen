import { decodeBase64 } from '../internal/utils.js';
import { getEnvVar } from '../internal/utils.js';
import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { BoxClient } from '../client.generated.js';
import { BoxCcgAuth } from '../box/ccgAuth.generated.js';
import { CcgConfig } from '../box/ccgAuth.generated.js';
import { BoxDeveloperTokenAuth } from '../box/developerTokenAuth.generated.js';
import { BoxOAuth } from '../box/oauth.generated.js';
import { OAuthConfig } from '../box/oauth.generated.js';
import { InMemoryTokenStorage } from '../box/tokenStorage.generated.js';
import { BoxJwtAuth } from '../box/jwtAuth.generated.js';
import { JwtConfig } from '../box/jwtAuth.generated.js';
export async function getAccessToken() {
    const userId = getEnvVar('USER_ID');
    const enterpriseId = getEnvVar('ENTERPRISE_ID');
    const ccgConfig = new CcgConfig({
        clientId: getEnvVar('CLIENT_ID'),
        clientSecret: getEnvVar('CLIENT_SECRET'),
        enterpriseId: enterpriseId,
        userId: userId,
    });
    const auth = new BoxCcgAuth({ config: ccgConfig });
    const authUser = auth.withUserSubject(userId);
    return await authUser.retrieveToken();
}
test('test_jwt_auth', async function test_jwt_auth() {
    const userId = getEnvVar('USER_ID');
    const enterpriseId = getEnvVar('ENTERPRISE_ID');
    const jwtConfig = JwtConfig.fromConfigJsonString(decodeBase64(getEnvVar('JWT_CONFIG_BASE_64')));
    const auth = new BoxJwtAuth({ config: jwtConfig });
    const userAuth = auth.withUserSubject(userId);
    const userClient = new BoxClient({ auth: userAuth });
    const currentUser = await userClient.users.getUserMe();
    if (!(currentUser.id == userId)) {
        throw new Error('Assertion failed');
    }
    const enterpriseAuth = auth.withEnterpriseSubject(enterpriseId);
    const enterpriseClient = new BoxClient({ auth: enterpriseAuth });
    const newUser = await enterpriseClient.users.getUserMe({
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
test('test_jwt_auth_downscope', async function test_jwt_auth_downscope() {
    const jwtConfig = JwtConfig.fromConfigJsonString(decodeBase64(getEnvVar('JWT_CONFIG_BASE_64')));
    const auth = new BoxJwtAuth({ config: jwtConfig });
    const parentClient = new BoxClient({ auth: auth });
    const uploadedFiles = await parentClient.uploads.uploadFile({
        attributes: {
            name: getUuid(),
            parent: { id: '0' },
        },
        file: generateByteStream(1024 * 1024),
    });
    const file = uploadedFiles.entries[0];
    const resourcePath = ''.concat('https://api.box.com/2.0/files/', file.id);
    const downscopedToken = await auth.downscopeToken(['item_rename', 'item_preview'], resourcePath);
    if (!!(downscopedToken.accessToken == void 0)) {
        throw new Error('Assertion failed');
    }
    const downscopedClient = new BoxClient({
        auth: new BoxDeveloperTokenAuth({ token: downscopedToken.accessToken }),
    });
    await downscopedClient.files.updateFileById(file.id, {
        requestBody: { name: getUuid() },
    });
    await expect(async () => {
        await downscopedClient.files.deleteFileById(file.id);
    }).rejects.toThrow();
    await parentClient.files.deleteFileById(file.id);
});
test('test_jwt_downscope_token_succeeds_if_no_token_available', async function test_jwt_downscope_token_succeeds_if_no_token_available() {
    const jwtConfig = JwtConfig.fromConfigJsonString(decodeBase64(getEnvVar('JWT_CONFIG_BASE_64')));
    const auth = new BoxJwtAuth({ config: jwtConfig });
    const downscopedToken = await auth.downscopeToken([
        'root_readonly',
    ]);
    if (!!(downscopedToken.accessToken == void 0)) {
        throw new Error('Assertion failed');
    }
    const downscopedClient = new BoxClient({
        auth: new BoxDeveloperTokenAuth({ token: downscopedToken.accessToken }),
    });
    await expect(async () => {
        await downscopedClient.uploads.uploadFile({
            attributes: {
                name: getUuid(),
                parent: {
                    id: '0',
                },
            },
            file: generateByteStream(1024 * 1024),
        });
    }).rejects.toThrow();
});
test('test_jwt_auth_revoke', async function test_jwt_auth_revoke() {
    const jwtConfig = JwtConfig.fromConfigJsonString(decodeBase64(getEnvVar('JWT_CONFIG_BASE_64')));
    const auth = new BoxJwtAuth({ config: jwtConfig });
    const tokenFromStorageBeforeRevoke = await auth.retrieveToken();
    if (!!(tokenFromStorageBeforeRevoke == void 0)) {
        throw new Error('Assertion failed');
    }
    await auth.revokeToken();
    const tokenFromStorageAfterRevoke = await auth.retrieveToken();
    if (!!(tokenFromStorageBeforeRevoke.accessToken ==
        tokenFromStorageAfterRevoke.accessToken)) {
        throw new Error('Assertion failed');
    }
});
test('test_oauth_auth_authorizeUrl', function test_oauth_auth_authorizeUrl() {
    const config = new OAuthConfig({
        clientId: 'OAUTH_CLIENT_ID',
        clientSecret: 'OAUTH_CLIENT_SECRET',
    });
    const auth = new BoxOAuth({ config: config });
    const authUrl = auth.getAuthorizeUrl();
    if (!(authUrl ==
        'https://account.box.com/api/oauth2/authorize?client_id=OAUTH_CLIENT_ID&response_type=code' ||
        authUrl ==
            'https://account.box.com/api/oauth2/authorize?response_type=code&client_id=OAUTH_CLIENT_ID')) {
        throw new Error('Assertion failed');
    }
});
test('test_oauth_downscope_token_succeeds_if_no_token_available', async function test_oauth_downscope_token_succeeds_if_no_token_available() {
    const config = new OAuthConfig({
        clientId: getEnvVar('CLIENT_ID'),
        clientSecret: getEnvVar('CLIENT_SECRET'),
    });
    const auth = new BoxOAuth({ config: config });
    const resourcePath = ''.concat('https://api.box.com/2.0/files/12345');
    await expect(async () => {
        await auth.downscopeToken(['item_rename', 'item_preview'], resourcePath);
    }).rejects.toThrow();
});
test('test_ccg_auth', async function test_ccg_auth() {
    const userId = getEnvVar('USER_ID');
    const enterpriseId = getEnvVar('ENTERPRISE_ID');
    const ccgConfig = new CcgConfig({
        clientId: getEnvVar('CLIENT_ID'),
        clientSecret: getEnvVar('CLIENT_SECRET'),
        enterpriseId: enterpriseId,
        userId: userId,
    });
    const auth = new BoxCcgAuth({ config: ccgConfig });
    const userAuth = auth.withUserSubject(userId);
    const userClient = new BoxClient({ auth: userAuth });
    const currentUser = await userClient.users.getUserMe();
    if (!(currentUser.id == userId)) {
        throw new Error('Assertion failed');
    }
    const enterpriseAuth = auth.withEnterpriseSubject(enterpriseId);
    const enterpriseClient = new BoxClient({ auth: enterpriseAuth });
    const newUser = await enterpriseClient.users.getUserMe({
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
test('test_ccg_auth_downscope', async function test_ccg_auth_downscope() {
    const ccgConfig = new CcgConfig({
        clientId: getEnvVar('CLIENT_ID'),
        clientSecret: getEnvVar('CLIENT_SECRET'),
        userId: getEnvVar('USER_ID'),
    });
    const auth = new BoxCcgAuth({ config: ccgConfig });
    const parentClient = new BoxClient({ auth: auth });
    const folder = await parentClient.folders.createFolder({
        name: getUuid(),
        parent: { id: '0' },
    });
    const resourcePath = ''.concat('https://api.box.com/2.0/folders/', folder.id);
    const downscopedToken = await auth.downscopeToken(['item_rename', 'item_preview'], resourcePath);
    if (!!(downscopedToken.accessToken == void 0)) {
        throw new Error('Assertion failed');
    }
    const downscopedClient = new BoxClient({
        auth: new BoxDeveloperTokenAuth({ token: downscopedToken.accessToken }),
    });
    await downscopedClient.folders.updateFolderById(folder.id, {
        requestBody: { name: getUuid() },
    });
    await expect(async () => {
        await downscopedClient.folders.deleteFolderById(folder.id);
    }).rejects.toThrow();
    await parentClient.folders.deleteFolderById(folder.id);
});
test('test_ccg_downscope_token_succeeds_if_no_token_available', async function test_ccg_downscope_token_succeeds_if_no_token_available() {
    const ccgConfig = new CcgConfig({
        clientId: getEnvVar('CLIENT_ID'),
        clientSecret: getEnvVar('CLIENT_SECRET'),
        userId: getEnvVar('USER_ID'),
    });
    const auth = new BoxCcgAuth({ config: ccgConfig });
    const downscopedToken = await auth.downscopeToken([
        'root_readonly',
    ]);
    if (!!(downscopedToken.accessToken == void 0)) {
        throw new Error('Assertion failed');
    }
    const downscopedClient = new BoxClient({
        auth: new BoxDeveloperTokenAuth({ token: downscopedToken.accessToken }),
    });
    await expect(async () => {
        await downscopedClient.uploads.uploadFile({
            attributes: {
                name: getUuid(),
                parent: {
                    id: '0',
                },
            },
            file: generateByteStream(1024 * 1024),
        });
    }).rejects.toThrow();
});
test('test_ccg_auth_revoke', async function test_ccg_auth_revoke() {
    const ccgConfig = new CcgConfig({
        clientId: getEnvVar('CLIENT_ID'),
        clientSecret: getEnvVar('CLIENT_SECRET'),
        userId: getEnvVar('USER_ID'),
    });
    const auth = new BoxCcgAuth({ config: ccgConfig });
    const tokenFromStorageBeforeRevoke = await auth.retrieveToken();
    if (!!(tokenFromStorageBeforeRevoke == void 0)) {
        throw new Error('Assertion failed');
    }
    await auth.revokeToken();
    const tokenFromStorageAfterRevoke = await auth.retrieveToken();
    if (!!(tokenFromStorageBeforeRevoke.accessToken ==
        tokenFromStorageAfterRevoke.accessToken)) {
        throw new Error('Assertion failed');
    }
});
test('test_developer_downscope_token_succeeds_if_no_token_available', async function test_developer_downscope_token_succeeds_if_no_token_available() {
    const developerTokenConfig = {
        clientId: getEnvVar('CLIENT_ID'),
        clientSecret: getEnvVar('CLIENT_SECRET'),
    };
    const auth = new BoxDeveloperTokenAuth({
        token: '',
        config: developerTokenConfig,
    });
    const resourcePath = ''.concat('https://api.box.com/2.0/folders/12345');
    await expect(async () => {
        await auth.downscopeToken(['item_rename', 'item_preview'], resourcePath);
    }).rejects.toThrow();
});
test('test_developer_token_auth_revoke', async function test_developer_token_auth_revoke() {
    const developerTokenConfig = {
        clientId: getEnvVar('CLIENT_ID'),
        clientSecret: getEnvVar('CLIENT_SECRET'),
    };
    const token = await getAccessToken();
    const auth = new BoxDeveloperTokenAuth({
        token: token.accessToken,
        config: developerTokenConfig,
    });
    const tokenFromStorageBeforeRevoke = await auth.retrieveToken();
    if (!!(tokenFromStorageBeforeRevoke == void 0)) {
        throw new Error('Assertion failed');
    }
    await auth.revokeToken();
    await expect(async () => {
        await auth.retrieveToken();
    }).rejects.toThrow();
});
test('test_developer_token_auth_downscope', async function test_developer_token_auth_downscope() {
    const developerTokenConfig = {
        clientId: getEnvVar('CLIENT_ID'),
        clientSecret: getEnvVar('CLIENT_SECRET'),
    };
    const token = await getAccessToken();
    const auth = new BoxDeveloperTokenAuth({
        token: token.accessToken,
        config: developerTokenConfig,
    });
    const parentClient = new BoxClient({ auth: auth });
    const folder = await parentClient.folders.createFolder({
        name: getUuid(),
        parent: { id: '0' },
    });
    const resourcePath = ''.concat('https://api.box.com/2.0/folders/', folder.id);
    const downscopedToken = await auth.downscopeToken(['item_rename', 'item_preview'], resourcePath);
    if (!!(downscopedToken.accessToken == void 0)) {
        throw new Error('Assertion failed');
    }
    const downscopedClient = new BoxClient({
        auth: new BoxDeveloperTokenAuth({ token: downscopedToken.accessToken }),
    });
    await downscopedClient.folders.updateFolderById(folder.id, {
        requestBody: { name: getUuid() },
    });
    await expect(async () => {
        await downscopedClient.folders.deleteFolderById(folder.id);
    }).rejects.toThrow();
    await parentClient.folders.deleteFolderById(folder.id);
});
test('test_developer_token_auth', async function test_developer_token_auth() {
    const userId = getEnvVar('USER_ID');
    const token = await getAccessToken();
    const devAuth = new BoxDeveloperTokenAuth({
        token: token.accessToken,
    });
    const client = new BoxClient({ auth: devAuth });
    const currentUser = await client.users.getUserMe();
    if (!(currentUser.id == userId)) {
        throw new Error('Assertion failed');
    }
});
test('test_oauth_auth_revoke', async function test_oauth_auth_revoke() {
    const token = await getAccessToken();
    const tokenStorage = new InMemoryTokenStorage({
        token: token,
    });
    const config = new OAuthConfig({
        clientId: getEnvVar('CLIENT_ID'),
        clientSecret: getEnvVar('CLIENT_SECRET'),
        tokenStorage: tokenStorage,
    });
    const auth = new BoxOAuth({ config: config });
    const client = new BoxClient({ auth: auth });
    await client.users.getUserMe();
    await auth.revokeToken();
    await expect(async () => {
        await client.users.getUserMe();
    }).rejects.toThrow();
});
test('test_oauth_auth_downscope', async function test_oauth_auth_downscope() {
    const token = await getAccessToken();
    const tokenStorage = new InMemoryTokenStorage({
        token: token,
    });
    const config = new OAuthConfig({
        clientId: getEnvVar('CLIENT_ID'),
        clientSecret: getEnvVar('CLIENT_SECRET'),
        tokenStorage: tokenStorage,
    });
    const auth = new BoxOAuth({ config: config });
    const parentClient = new BoxClient({ auth: auth });
    const uploadedFiles = await parentClient.uploads.uploadFile({
        attributes: {
            name: getUuid(),
            parent: { id: '0' },
        },
        file: generateByteStream(1024 * 1024),
    });
    const file = uploadedFiles.entries[0];
    const resourcePath = ''.concat('https://api.box.com/2.0/files/', file.id);
    const downscopedToken = await auth.downscopeToken(['item_rename', 'item_preview'], resourcePath);
    if (!!(downscopedToken.accessToken == void 0)) {
        throw new Error('Assertion failed');
    }
    const downscopedClient = new BoxClient({
        auth: new BoxDeveloperTokenAuth({ token: downscopedToken.accessToken }),
    });
    await downscopedClient.files.updateFileById(file.id, {
        requestBody: { name: getUuid() },
    });
    await expect(async () => {
        await downscopedClient.files.deleteFileById(file.id);
    }).rejects.toThrow();
    await parentClient.files.deleteFileById(file.id);
});
//# sourceMappingURL=auth.generated.test.js.map