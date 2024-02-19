import { serializeFiles } from '../schemas.generated.js';
import { deserializeFiles } from '../schemas.generated.js';
import { serializeUploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { serializeUploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeUpdateFileByIdRequestBody } from '../managers/files.generated.js';
import { deserializeUpdateFileByIdRequestBody } from '../managers/files.generated.js';
import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeCreateFolderRequestBody } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBody } from '../managers/folders.generated.js';
import { serializeCreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { serializeUpdateFolderByIdRequestBody } from '../managers/folders.generated.js';
import { deserializeUpdateFolderByIdRequestBody } from '../managers/folders.generated.js';
import { serializeUserFull } from '../schemas.generated.js';
import { deserializeUserFull } from '../schemas.generated.js';
import { GetUserMeQueryParams } from '../managers/users.generated.js';
import { Files } from '../schemas.generated.js';
import { UploadFileRequestBody } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { FileFull } from '../schemas.generated.js';
import { AccessToken } from '../schemas.generated.js';
import { UpdateFileByIdRequestBody } from '../managers/files.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { CreateFolderRequestBody } from '../managers/folders.generated.js';
import { CreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { UpdateFolderByIdRequestBody } from '../managers/folders.generated.js';
import { decodeBase64 } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { getUuid } from '../utils.js';
import { bufferEquals } from '../utils.js';
import { readByteStream } from '../utils.js';
import { generateByteBuffer } from '../utils.js';
import { generateByteStream } from '../utils.js';
import { decodeBase64ByteStream } from '../utils.js';
import { BoxClient } from '../client.generated.js';
import { BoxCcgAuth } from '../ccgAuth.generated.js';
import { CcgConfig } from '../ccgAuth.generated.js';
import { BoxDeveloperTokenAuth } from '../developerTokenAuth.generated.js';
import { BoxOAuth } from '../oauth.generated.js';
import { OAuthConfig } from '../oauth.generated.js';
import { UserFull } from '../schemas.generated.js';
import { BoxJwtAuth } from '../jwtAuth.generated.js';
import { JwtConfig } from '../jwtAuth.generated.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
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
  auth.asUser(userId);
  const token: AccessToken = await auth.retrieveToken();
  return token;
}
test('test_jwt_auth', async function test_jwt_auth(): Promise<any> {
  const userId: string = getEnvVar('USER_ID');
  const enterpriseId: string = getEnvVar('ENTERPRISE_ID');
  const jwtConfig: JwtConfig = JwtConfig.fromConfigJsonString(
    decodeBase64(getEnvVar('JWT_CONFIG_BASE_64'))
  );
  const auth: BoxJwtAuth = new BoxJwtAuth({ config: jwtConfig });
  const userAuth: BoxJwtAuth = auth.asUser(userId);
  const userClient: BoxClient = new BoxClient({ auth: userAuth });
  const currentUser: UserFull = await userClient.users.getUserMe();
  if (!(currentUser.id == userId)) {
    throw new Error('Assertion failed');
  }
  const enterpriseAuth: BoxJwtAuth = auth.asEnterprise(enterpriseId);
  const enterpriseClient: BoxClient = new BoxClient({ auth: enterpriseAuth });
  const newUser: UserFull = await enterpriseClient.users.getUserMe({
    fields: ['enterprise' as ''],
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
    decodeBase64(getEnvVar('JWT_CONFIG_BASE_64'))
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
    file.id
  ) as string;
  const downscopedToken: AccessToken = await auth.downscopeToken(
    ['item_rename', 'item_preview'],
    resourcePath
  );
  if (!!(downscopedToken.accessToken == void 0)) {
    throw new Error('Assertion failed');
  }
  const downscopedClient: BoxClient = new BoxClient({
    auth: new BoxDeveloperTokenAuth({ token: downscopedToken.accessToken! }),
  });
  await downscopedClient.files.updateFileById(file.id, {
    name: getUuid(),
  } satisfies UpdateFileByIdRequestBody);
  await expect(async () => {
    await downscopedClient.files.deleteFileById(file.id);
  }).rejects.toThrow();
  await parentClient.files.deleteFileById(file.id);
});
test('test_jwt_auth_revoke', async function test_jwt_auth_revoke(): Promise<any> {
  const jwtConfig: JwtConfig = JwtConfig.fromConfigJsonString(
    decodeBase64(getEnvVar('JWT_CONFIG_BASE_64'))
  );
  const auth: BoxJwtAuth = new BoxJwtAuth({ config: jwtConfig });
  await auth.retrieveToken();
  const tokenFromStorageBeforeRevoke: undefined | AccessToken =
    await auth.tokenStorage.get();
  await auth.revokeToken();
  const tokenFromStorageAfterRevoke: undefined | AccessToken =
    await auth.tokenStorage.get();
  if (!!(tokenFromStorageBeforeRevoke == void 0)) {
    throw new Error('Assertion failed');
  }
  if (!(tokenFromStorageAfterRevoke == void 0)) {
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
  const userAuth: BoxCcgAuth = auth.asUser(userId);
  const userClient: BoxClient = new BoxClient({ auth: userAuth });
  const currentUser: UserFull = await userClient.users.getUserMe();
  if (!(currentUser.id == userId)) {
    throw new Error('Assertion failed');
  }
  const enterpriseAuth: BoxCcgAuth = auth.asEnterprise(enterpriseId);
  const enterpriseClient: BoxClient = new BoxClient({ auth: enterpriseAuth });
  const newUser: UserFull = await enterpriseClient.users.getUserMe({
    fields: ['enterprise' as ''],
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
    folder.id
  ) as string;
  const downscopedToken: AccessToken = await auth.downscopeToken(
    ['item_rename', 'item_preview'],
    resourcePath
  );
  if (!!(downscopedToken.accessToken == void 0)) {
    throw new Error('Assertion failed');
  }
  const downscopedClient: BoxClient = new BoxClient({
    auth: new BoxDeveloperTokenAuth({ token: downscopedToken.accessToken! }),
  });
  await downscopedClient.folders.updateFolderById(folder.id, {
    name: getUuid(),
  } satisfies UpdateFolderByIdRequestBody);
  await expect(async () => {
    await downscopedClient.folders.deleteFolderById(folder.id);
  }).rejects.toThrow();
  await parentClient.folders.deleteFolderById(folder.id);
});
test('test_ccg_auth_revoke', async function test_ccg_auth_revoke(): Promise<any> {
  const ccgConfig: CcgConfig = new CcgConfig({
    clientId: getEnvVar('CLIENT_ID'),
    clientSecret: getEnvVar('CLIENT_SECRET'),
    userId: getEnvVar('USER_ID'),
  });
  const auth: BoxCcgAuth = new BoxCcgAuth({ config: ccgConfig });
  await auth.retrieveToken();
  const tokenFromStorageBeforeRevoke: undefined | AccessToken =
    await auth.tokenStorage.get();
  await auth.revokeToken();
  const tokenFromStorageAfterRevoke: undefined | AccessToken =
    await auth.tokenStorage.get();
  if (!!(tokenFromStorageBeforeRevoke == void 0)) {
    throw new Error('Assertion failed');
  }
  if (!(tokenFromStorageAfterRevoke == void 0)) {
    throw new Error('Assertion failed');
  }
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
  const config: OAuthConfig = new OAuthConfig({
    clientId: getEnvVar('CLIENT_ID'),
    clientSecret: getEnvVar('CLIENT_SECRET'),
  });
  const auth: BoxOAuth = new BoxOAuth({ config: config });
  const token: AccessToken = await getAccessToken();
  await auth.tokenStorage.store(token);
  const tokenBeforeRevoke: undefined | AccessToken =
    await auth.tokenStorage.get();
  await auth.revokeToken();
  const tokenAfterRevoke: undefined | AccessToken =
    await auth.tokenStorage.get();
  if (!!(tokenBeforeRevoke == void 0)) {
    throw new Error('Assertion failed');
  }
  if (!(tokenAfterRevoke == void 0)) {
    throw new Error('Assertion failed');
  }
});
test('test_oauth_auth_downscope', async function test_oauth_auth_downscope(): Promise<any> {
  const config: OAuthConfig = new OAuthConfig({
    clientId: getEnvVar('CLIENT_ID'),
    clientSecret: getEnvVar('CLIENT_SECRET'),
  });
  const auth: BoxOAuth = new BoxOAuth({ config: config });
  const token: AccessToken = await getAccessToken();
  await auth.tokenStorage.store(token);
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
    file.id
  ) as string;
  const downscopedToken: AccessToken = await auth.downscopeToken(
    ['item_rename', 'item_preview'],
    resourcePath
  );
  if (!!(downscopedToken.accessToken == void 0)) {
    throw new Error('Assertion failed');
  }
  const downscopedClient: BoxClient = new BoxClient({
    auth: new BoxDeveloperTokenAuth({ token: downscopedToken.accessToken! }),
  });
  await downscopedClient.files.updateFileById(file.id, {
    name: getUuid(),
  } satisfies UpdateFileByIdRequestBody);
  await expect(async () => {
    await downscopedClient.files.deleteFileById(file.id);
  }).rejects.toThrow();
  await parentClient.files.deleteFileById(file.id);
});
export {};
