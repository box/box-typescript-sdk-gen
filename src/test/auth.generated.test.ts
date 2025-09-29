import { serializeUserFull } from '@/schemas/userFull.generated';
import { deserializeUserFull } from '@/schemas/userFull.generated';
import { serializeFiles } from '@/schemas/files.generated';
import { deserializeFiles } from '@/schemas/files.generated';
import { serializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { serializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { serializeFileFull } from '@/schemas/fileFull.generated';
import { deserializeFileFull } from '@/schemas/fileFull.generated';
import { serializeUpdateFileByIdRequestBody } from '@/managers/files.generated';
import { deserializeUpdateFileByIdRequestBody } from '@/managers/files.generated';
import { serializeFolderFull } from '@/schemas/folderFull.generated';
import { deserializeFolderFull } from '@/schemas/folderFull.generated';
import { serializeCreateFolderRequestBody } from '@/managers/folders.generated';
import { deserializeCreateFolderRequestBody } from '@/managers/folders.generated';
import { serializeCreateFolderRequestBodyParentField } from '@/managers/folders.generated';
import { deserializeCreateFolderRequestBodyParentField } from '@/managers/folders.generated';
import { serializeUpdateFolderByIdRequestBody } from '@/managers/folders.generated';
import { deserializeUpdateFolderByIdRequestBody } from '@/managers/folders.generated';
import { UpdateFileByIdOptionalsInput } from '@/managers/files.generated';
import { UpdateFolderByIdOptionalsInput } from '@/managers/folders.generated';
import { UpdateFileByIdOptionals } from '@/managers/files.generated';
import { UpdateFolderByIdOptionals } from '@/managers/folders.generated';
import { UserFull } from '@/schemas/userFull.generated';
import { GetUserMeQueryParams } from '@/managers/users.generated';
import { Files } from '@/schemas/files.generated';
import { UploadFileRequestBody } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { FileFull } from '@/schemas/fileFull.generated';
import { AccessToken } from '@/schemas/accessToken.generated';
import { UpdateFileByIdRequestBody } from '@/managers/files.generated';
import { FolderFull } from '@/schemas/folderFull.generated';
import { CreateFolderRequestBody } from '@/managers/folders.generated';
import { CreateFolderRequestBodyParentField } from '@/managers/folders.generated';
import { UpdateFolderByIdRequestBody } from '@/managers/folders.generated';
import { decodeBase64 } from '@/internal/utils';
import { getEnvVar } from '@/internal/utils';
import { getUuid } from '@/internal/utils';
import { bufferEquals } from '@/internal/utils';
import { readByteStream } from '@/internal/utils';
import { generateByteBuffer } from '@/internal/utils';
import { generateByteStream } from '@/internal/utils';
import { decodeBase64ByteStream } from '@/internal/utils';
import { BoxClient } from '@/client.generated';
import { BoxCcgAuth } from '@/box/ccgAuth.generated';
import { CcgConfig } from '@/box/ccgAuth.generated';
import { BoxDeveloperTokenAuth } from '@/box/developerTokenAuth.generated';
import { DeveloperTokenConfig } from '@/box/developerTokenAuth.generated';
import { BoxOAuth } from '@/box/oauth.generated';
import { OAuthConfig } from '@/box/oauth.generated';
import { InMemoryTokenStorage } from '@/box/tokenStorage.generated';
import { BoxJwtAuth } from '@/box/jwtAuth.generated';
import { JwtConfig } from '@/box/jwtAuth.generated';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export async function getAccessToken(): Promise<AccessToken> {
  const userId: string = getEnvVar('USER_ID');
  const enterpriseId: string = getEnvVar('ENTERPRISE_ID');
  const ccgConfig: CcgConfig = new CcgConfig({
    clientId: getEnvVar('CLIENT_ID'),
    clientSecret: getEnvVar('CLIENT_SECRET'),
    enterpriseId: enterpriseId,
    userId: userId,
  });
  const auth: BoxCcgAuth = new BoxCcgAuth({ config: ccgConfig });
  const authUser: BoxCcgAuth = auth.withUserSubject(userId);
  return await authUser.retrieveToken();
}
test('test_jwt_auth', async function test_jwt_auth(): Promise<any> {
  const userId: string = getEnvVar('USER_ID');
  const enterpriseId: string = getEnvVar('ENTERPRISE_ID');
  const jwtConfig: JwtConfig = JwtConfig.fromConfigJsonString(
    decodeBase64(getEnvVar('JWT_CONFIG_BASE_64')),
  );
  const auth: BoxJwtAuth = new BoxJwtAuth({ config: jwtConfig });
  const userAuth: BoxJwtAuth = auth.withUserSubject(userId);
  const userClient: BoxClient = new BoxClient({ auth: userAuth });
  const currentUser: UserFull = await userClient.users.getUserMe();
  if (!(currentUser.id == userId)) {
    throw new Error('Assertion failed');
  }
  const enterpriseAuth: BoxJwtAuth = auth.withEnterpriseSubject(enterpriseId);
  const enterpriseClient: BoxClient = new BoxClient({ auth: enterpriseAuth });
  const newUser: UserFull = await enterpriseClient.users.getUserMe({
    fields: ['enterprise'],
  } satisfies GetUserMeQueryParams);
  if (!!(newUser.enterprise == void 0)) {
    throw new Error('Assertion failed');
  }
  if (!(newUser.enterprise!.id == enterpriseId)) {
    throw new Error('Assertion failed');
  }
  if (!!(newUser.id == userId)) {
    throw new Error('Assertion failed');
  }
});
test('test_jwt_auth_downscope', async function test_jwt_auth_downscope(): Promise<any> {
  const jwtConfig: JwtConfig = JwtConfig.fromConfigJsonString(
    decodeBase64(getEnvVar('JWT_CONFIG_BASE_64')),
  );
  const auth: BoxJwtAuth = new BoxJwtAuth({ config: jwtConfig });
  const parentClient: BoxClient = new BoxClient({ auth: auth });
  const uploadedFiles: Files = await parentClient.uploads.uploadFile({
    attributes: {
      name: getUuid(),
      parent: { id: '0' } satisfies UploadFileRequestBodyAttributesParentField,
    } satisfies UploadFileRequestBodyAttributesField,
    file: generateByteStream(1024 * 1024),
  } satisfies UploadFileRequestBody);
  const file: FileFull = uploadedFiles.entries![0];
  const resourcePath: string = ''.concat(
    'https://api.box.com/2.0/files/',
    file.id,
  ) as string;
  const downscopedToken: AccessToken = await auth.downscopeToken(
    ['item_rename', 'item_preview'],
    resourcePath,
  );
  if (!!(downscopedToken.accessToken == void 0)) {
    throw new Error('Assertion failed');
  }
  const downscopedClient: BoxClient = new BoxClient({
    auth: new BoxDeveloperTokenAuth({ token: downscopedToken.accessToken! }),
  });
  await downscopedClient.files.updateFileById(file.id, {
    requestBody: { name: getUuid() } satisfies UpdateFileByIdRequestBody,
  } satisfies UpdateFileByIdOptionalsInput);
  await expect(async () => {
    await downscopedClient.files.deleteFileById(file.id);
  }).rejects.toThrow();
  await parentClient.files.deleteFileById(file.id);
});
test('test_jwt_downscope_token_succeeds_if_no_token_available', async function test_jwt_downscope_token_succeeds_if_no_token_available(): Promise<any> {
  const jwtConfig: JwtConfig = JwtConfig.fromConfigJsonString(
    decodeBase64(getEnvVar('JWT_CONFIG_BASE_64')),
  );
  const auth: BoxJwtAuth = new BoxJwtAuth({ config: jwtConfig });
  const downscopedToken: AccessToken = await auth.downscopeToken([
    'root_readonly',
  ]);
  if (!!(downscopedToken.accessToken == void 0)) {
    throw new Error('Assertion failed');
  }
  const downscopedClient: BoxClient = new BoxClient({
    auth: new BoxDeveloperTokenAuth({ token: downscopedToken.accessToken! }),
  });
  await expect(async () => {
    await downscopedClient.uploads.uploadFile({
      attributes: {
        name: getUuid(),
        parent: {
          id: '0',
        } satisfies UploadFileRequestBodyAttributesParentField,
      } satisfies UploadFileRequestBodyAttributesField,
      file: generateByteStream(1024 * 1024),
    } satisfies UploadFileRequestBody);
  }).rejects.toThrow();
});
test('test_jwt_auth_revoke', async function test_jwt_auth_revoke(): Promise<any> {
  const jwtConfig: JwtConfig = JwtConfig.fromConfigJsonString(
    decodeBase64(getEnvVar('JWT_CONFIG_BASE_64')),
  );
  const auth: BoxJwtAuth = new BoxJwtAuth({ config: jwtConfig });
  const tokenFromStorageBeforeRevoke: AccessToken = await auth.retrieveToken();
  if (!!(tokenFromStorageBeforeRevoke == void 0)) {
    throw new Error('Assertion failed');
  }
  await auth.revokeToken();
  const tokenFromStorageAfterRevoke: AccessToken = await auth.retrieveToken();
  if (
    !!(
      tokenFromStorageBeforeRevoke.accessToken ==
      tokenFromStorageAfterRevoke.accessToken
    )
  ) {
    throw new Error('Assertion failed');
  }
});
test('test_oauth_auth_authorizeUrl', function test_oauth_auth_authorizeUrl(): any {
  const config: OAuthConfig = new OAuthConfig({
    clientId: 'OAUTH_CLIENT_ID',
    clientSecret: 'OAUTH_CLIENT_SECRET',
  });
  const auth: BoxOAuth = new BoxOAuth({ config: config });
  const authUrl: string = auth.getAuthorizeUrl();
  if (
    !(
      authUrl ==
        'https://account.box.com/api/oauth2/authorize?client_id=OAUTH_CLIENT_ID&response_type=code' ||
      authUrl ==
        'https://account.box.com/api/oauth2/authorize?response_type=code&client_id=OAUTH_CLIENT_ID'
    )
  ) {
    throw new Error('Assertion failed');
  }
});
test('test_oauth_downscope_token_succeeds_if_no_token_available', async function test_oauth_downscope_token_succeeds_if_no_token_available(): Promise<any> {
  const config: OAuthConfig = new OAuthConfig({
    clientId: getEnvVar('CLIENT_ID'),
    clientSecret: getEnvVar('CLIENT_SECRET'),
  });
  const auth: BoxOAuth = new BoxOAuth({ config: config });
  const resourcePath: string = ''.concat(
    'https://api.box.com/2.0/files/12345',
  ) as string;
  await expect(async () => {
    await auth.downscopeToken(['item_rename', 'item_preview'], resourcePath);
  }).rejects.toThrow();
});
test('test_ccg_auth', async function test_ccg_auth(): Promise<any> {
  const userId: string = getEnvVar('USER_ID');
  const enterpriseId: string = getEnvVar('ENTERPRISE_ID');
  const ccgConfig: CcgConfig = new CcgConfig({
    clientId: getEnvVar('CLIENT_ID'),
    clientSecret: getEnvVar('CLIENT_SECRET'),
    enterpriseId: enterpriseId,
    userId: userId,
  });
  const auth: BoxCcgAuth = new BoxCcgAuth({ config: ccgConfig });
  const userAuth: BoxCcgAuth = auth.withUserSubject(userId);
  const userClient: BoxClient = new BoxClient({ auth: userAuth });
  const currentUser: UserFull = await userClient.users.getUserMe();
  if (!(currentUser.id == userId)) {
    throw new Error('Assertion failed');
  }
  const enterpriseAuth: BoxCcgAuth = auth.withEnterpriseSubject(enterpriseId);
  const enterpriseClient: BoxClient = new BoxClient({ auth: enterpriseAuth });
  const newUser: UserFull = await enterpriseClient.users.getUserMe({
    fields: ['enterprise'],
  } satisfies GetUserMeQueryParams);
  if (!!(newUser.enterprise == void 0)) {
    throw new Error('Assertion failed');
  }
  if (!(newUser.enterprise!.id == enterpriseId)) {
    throw new Error('Assertion failed');
  }
  if (!!(newUser.id == userId)) {
    throw new Error('Assertion failed');
  }
});
test('test_ccg_auth_downscope', async function test_ccg_auth_downscope(): Promise<any> {
  const ccgConfig: CcgConfig = new CcgConfig({
    clientId: getEnvVar('CLIENT_ID'),
    clientSecret: getEnvVar('CLIENT_SECRET'),
    userId: getEnvVar('USER_ID'),
  });
  const auth: BoxCcgAuth = new BoxCcgAuth({ config: ccgConfig });
  const parentClient: BoxClient = new BoxClient({ auth: auth });
  const folder: FolderFull = await parentClient.folders.createFolder({
    name: getUuid(),
    parent: { id: '0' } satisfies CreateFolderRequestBodyParentField,
  } satisfies CreateFolderRequestBody);
  const resourcePath: string = ''.concat(
    'https://api.box.com/2.0/folders/',
    folder.id,
  ) as string;
  const downscopedToken: AccessToken = await auth.downscopeToken(
    ['item_rename', 'item_preview'],
    resourcePath,
  );
  if (!!(downscopedToken.accessToken == void 0)) {
    throw new Error('Assertion failed');
  }
  const downscopedClient: BoxClient = new BoxClient({
    auth: new BoxDeveloperTokenAuth({ token: downscopedToken.accessToken! }),
  });
  await downscopedClient.folders.updateFolderById(folder.id, {
    requestBody: { name: getUuid() } satisfies UpdateFolderByIdRequestBody,
  } satisfies UpdateFolderByIdOptionalsInput);
  await expect(async () => {
    await downscopedClient.folders.deleteFolderById(folder.id);
  }).rejects.toThrow();
  await parentClient.folders.deleteFolderById(folder.id);
});
test('test_ccg_downscope_token_succeeds_if_no_token_available', async function test_ccg_downscope_token_succeeds_if_no_token_available(): Promise<any> {
  const ccgConfig: CcgConfig = new CcgConfig({
    clientId: getEnvVar('CLIENT_ID'),
    clientSecret: getEnvVar('CLIENT_SECRET'),
    userId: getEnvVar('USER_ID'),
  });
  const auth: BoxCcgAuth = new BoxCcgAuth({ config: ccgConfig });
  const downscopedToken: AccessToken = await auth.downscopeToken([
    'root_readonly',
  ]);
  if (!!(downscopedToken.accessToken == void 0)) {
    throw new Error('Assertion failed');
  }
  const downscopedClient: BoxClient = new BoxClient({
    auth: new BoxDeveloperTokenAuth({ token: downscopedToken.accessToken! }),
  });
  await expect(async () => {
    await downscopedClient.uploads.uploadFile({
      attributes: {
        name: getUuid(),
        parent: {
          id: '0',
        } satisfies UploadFileRequestBodyAttributesParentField,
      } satisfies UploadFileRequestBodyAttributesField,
      file: generateByteStream(1024 * 1024),
    } satisfies UploadFileRequestBody);
  }).rejects.toThrow();
});
test('test_ccg_auth_revoke', async function test_ccg_auth_revoke(): Promise<any> {
  const ccgConfig: CcgConfig = new CcgConfig({
    clientId: getEnvVar('CLIENT_ID'),
    clientSecret: getEnvVar('CLIENT_SECRET'),
    userId: getEnvVar('USER_ID'),
  });
  const auth: BoxCcgAuth = new BoxCcgAuth({ config: ccgConfig });
  const tokenFromStorageBeforeRevoke: AccessToken = await auth.retrieveToken();
  if (!!(tokenFromStorageBeforeRevoke == void 0)) {
    throw new Error('Assertion failed');
  }
  await auth.revokeToken();
  const tokenFromStorageAfterRevoke: AccessToken = await auth.retrieveToken();
  if (
    !!(
      tokenFromStorageBeforeRevoke.accessToken ==
      tokenFromStorageAfterRevoke.accessToken
    )
  ) {
    throw new Error('Assertion failed');
  }
});
test('test_developer_downscope_token_succeeds_if_no_token_available', async function test_developer_downscope_token_succeeds_if_no_token_available(): Promise<any> {
  const developerTokenConfig: DeveloperTokenConfig = {
    clientId: getEnvVar('CLIENT_ID'),
    clientSecret: getEnvVar('CLIENT_SECRET'),
  } satisfies DeveloperTokenConfig;
  const auth: BoxDeveloperTokenAuth = new BoxDeveloperTokenAuth({
    token: '',
    config: developerTokenConfig,
  });
  const resourcePath: string = ''.concat(
    'https://api.box.com/2.0/folders/12345',
  ) as string;
  await expect(async () => {
    await auth.downscopeToken(['item_rename', 'item_preview'], resourcePath);
  }).rejects.toThrow();
});
test('test_developer_token_auth_revoke', async function test_developer_token_auth_revoke(): Promise<any> {
  const developerTokenConfig: DeveloperTokenConfig = {
    clientId: getEnvVar('CLIENT_ID'),
    clientSecret: getEnvVar('CLIENT_SECRET'),
  } satisfies DeveloperTokenConfig;
  const token: AccessToken = await getAccessToken();
  const auth: BoxDeveloperTokenAuth = new BoxDeveloperTokenAuth({
    token: token.accessToken!,
    config: developerTokenConfig,
  });
  const tokenFromStorageBeforeRevoke: AccessToken = await auth.retrieveToken();
  if (!!(tokenFromStorageBeforeRevoke == void 0)) {
    throw new Error('Assertion failed');
  }
  await auth.revokeToken();
  await expect(async () => {
    await auth.retrieveToken();
  }).rejects.toThrow();
});
test('test_developer_token_auth_downscope', async function test_developer_token_auth_downscope(): Promise<any> {
  const developerTokenConfig: DeveloperTokenConfig = {
    clientId: getEnvVar('CLIENT_ID'),
    clientSecret: getEnvVar('CLIENT_SECRET'),
  } satisfies DeveloperTokenConfig;
  const token: AccessToken = await getAccessToken();
  const auth: BoxDeveloperTokenAuth = new BoxDeveloperTokenAuth({
    token: token.accessToken!,
    config: developerTokenConfig,
  });
  const parentClient: BoxClient = new BoxClient({ auth: auth });
  const folder: FolderFull = await parentClient.folders.createFolder({
    name: getUuid(),
    parent: { id: '0' } satisfies CreateFolderRequestBodyParentField,
  } satisfies CreateFolderRequestBody);
  const resourcePath: string = ''.concat(
    'https://api.box.com/2.0/folders/',
    folder.id,
  ) as string;
  const downscopedToken: AccessToken = await auth.downscopeToken(
    ['item_rename', 'item_preview'],
    resourcePath,
  );
  if (!!(downscopedToken.accessToken == void 0)) {
    throw new Error('Assertion failed');
  }
  const downscopedClient: BoxClient = new BoxClient({
    auth: new BoxDeveloperTokenAuth({ token: downscopedToken.accessToken! }),
  });
  await downscopedClient.folders.updateFolderById(folder.id, {
    requestBody: { name: getUuid() } satisfies UpdateFolderByIdRequestBody,
  } satisfies UpdateFolderByIdOptionalsInput);
  await expect(async () => {
    await downscopedClient.folders.deleteFolderById(folder.id);
  }).rejects.toThrow();
  await parentClient.folders.deleteFolderById(folder.id);
});
test('test_developer_token_auth', async function test_developer_token_auth(): Promise<any> {
  const userId: string = getEnvVar('USER_ID');
  const token: AccessToken = await getAccessToken();
  const devAuth: BoxDeveloperTokenAuth = new BoxDeveloperTokenAuth({
    token: token.accessToken!,
  });
  const client: BoxClient = new BoxClient({ auth: devAuth });
  const currentUser: UserFull = await client.users.getUserMe();
  if (!(currentUser.id == userId)) {
    throw new Error('Assertion failed');
  }
});
test('test_oauth_auth_revoke', async function test_oauth_auth_revoke(): Promise<any> {
  const token: AccessToken = await getAccessToken();
  const tokenStorage: InMemoryTokenStorage = new InMemoryTokenStorage({
    token: token,
  });
  const config: OAuthConfig = new OAuthConfig({
    clientId: getEnvVar('CLIENT_ID'),
    clientSecret: getEnvVar('CLIENT_SECRET'),
    tokenStorage: tokenStorage,
  });
  const auth: BoxOAuth = new BoxOAuth({ config: config });
  const client: BoxClient = new BoxClient({ auth: auth });
  await client.users.getUserMe();
  await auth.revokeToken();
  await expect(async () => {
    await client.users.getUserMe();
  }).rejects.toThrow();
});
test('test_oauth_auth_downscope', async function test_oauth_auth_downscope(): Promise<any> {
  const token: AccessToken = await getAccessToken();
  const tokenStorage: InMemoryTokenStorage = new InMemoryTokenStorage({
    token: token,
  });
  const config: OAuthConfig = new OAuthConfig({
    clientId: getEnvVar('CLIENT_ID'),
    clientSecret: getEnvVar('CLIENT_SECRET'),
    tokenStorage: tokenStorage,
  });
  const auth: BoxOAuth = new BoxOAuth({ config: config });
  const parentClient: BoxClient = new BoxClient({ auth: auth });
  const uploadedFiles: Files = await parentClient.uploads.uploadFile({
    attributes: {
      name: getUuid(),
      parent: { id: '0' } satisfies UploadFileRequestBodyAttributesParentField,
    } satisfies UploadFileRequestBodyAttributesField,
    file: generateByteStream(1024 * 1024),
  } satisfies UploadFileRequestBody);
  const file: FileFull = uploadedFiles.entries![0];
  const resourcePath: string = ''.concat(
    'https://api.box.com/2.0/files/',
    file.id,
  ) as string;
  const downscopedToken: AccessToken = await auth.downscopeToken(
    ['item_rename', 'item_preview'],
    resourcePath,
  );
  if (!!(downscopedToken.accessToken == void 0)) {
    throw new Error('Assertion failed');
  }
  const downscopedClient: BoxClient = new BoxClient({
    auth: new BoxDeveloperTokenAuth({ token: downscopedToken.accessToken! }),
  });
  await downscopedClient.files.updateFileById(file.id, {
    requestBody: { name: getUuid() } satisfies UpdateFileByIdRequestBody,
  } satisfies UpdateFileByIdOptionalsInput);
  await expect(async () => {
    await downscopedClient.files.deleteFileById(file.id);
  }).rejects.toThrow();
  await parentClient.files.deleteFileById(file.id);
});
export {};
