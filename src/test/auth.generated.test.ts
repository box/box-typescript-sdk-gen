import { serializeFiles } from '../schemas.generated.js';
import { deserializeFiles } from '../schemas.generated.js';
import { serializeUploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { serializeUploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeUpdateFileByIdRequestBodyArg } from '../managers/files.generated.js';
import { deserializeUpdateFileByIdRequestBodyArg } from '../managers/files.generated.js';
import { serializeUserFull } from '../schemas.generated.js';
import { deserializeUserFull } from '../schemas.generated.js';
import { GetUserMeQueryParamsArg } from '../managers/users.generated.js';
import { AccessToken } from '../schemas.generated.js';
import { Files } from '../schemas.generated.js';
import { UploadFileRequestBodyArg } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { FileFull } from '../schemas.generated.js';
import { UpdateFileByIdRequestBodyArg } from '../managers/files.generated.js';
import { decodeBase64 } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { getUuid } from '../utils.js';
import { bufferEquals } from '../utils.js';
import { readByteStream } from '../utils.js';
import { generateByteBuffer } from '../utils.js';
import { generateByteStream } from '../utils.js';
import { decodeBase64ByteStream } from '../utils.js';
import { BoxClient } from '../client.generated.js';
import { BoxCcgAuth } from '../ccgAuth.js';
import { CcgConfig } from '../ccgAuth.js';
import { BoxDeveloperTokenAuth } from '../developerTokenAuth.generated.js';
import { BoxOAuth } from '../oauth.generated.js';
import { OAuthConfig } from '../oauth.generated.js';
import { UserFull } from '../schemas.generated.js';
import { BoxJwtAuth } from '../jwtAuth.js';
import { JwtConfig } from '../jwtAuth.js';
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
  await auth.asUser(userId);
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
  const client: BoxClient = new BoxClient({ auth: auth });
  await auth.asUser(userId);
  const currentUser: UserFull = await client.users.getUserMe();
  if (!(currentUser.id == userId)) {
    throw 'Assertion failed';
  }
  await auth.asEnterprise(enterpriseId);
  const newUser: UserFull = await client.users.getUserMe({
    fields: ['enterprise' as ''],
  } satisfies GetUserMeQueryParamsArg);
  if (!!(newUser.enterprise == void 0)) {
    throw 'Assertion failed';
  }
  if (!(newUser.enterprise!.id == enterpriseId)) {
    throw 'Assertion failed';
  }
  if (!!(newUser.id == userId)) {
    throw 'Assertion failed';
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
    throw 'Assertion failed';
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
  const client: BoxClient = new BoxClient({ auth: auth });
  await auth.asUser(userId);
  const currentUser: UserFull = await client.users.getUserMe();
  if (!(currentUser.id == userId)) {
    throw 'Assertion failed';
  }
  await auth.asEnterprise(enterpriseId);
  const newUser: UserFull = await client.users.getUserMe({
    fields: ['enterprise' as ''],
  } satisfies GetUserMeQueryParamsArg);
  if (!!(newUser.enterprise == void 0)) {
    throw 'Assertion failed';
  }
  if (!(newUser.enterprise!.id == enterpriseId)) {
    throw 'Assertion failed';
  }
  if (!!(newUser.id == userId)) {
    throw 'Assertion failed';
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
    throw 'Assertion failed';
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
    throw 'Assertion failed';
  }
  if (!(tokenAfterRevoke == void 0)) {
    throw 'Assertion failed';
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
      parent: {
        id: '0',
      } satisfies UploadFileRequestBodyArgAttributesFieldParentField,
    } satisfies UploadFileRequestBodyArgAttributesField,
    file: generateByteStream(1024 * 1024),
  } satisfies UploadFileRequestBodyArg);
  const file: FileFull = uploadedFiles.entries![0];
  const resourcePath: string = ''.concat(
    'https://api.box.com/2.0/files/',
    file.id
  ) as string;
  const downscopedToken: AccessToken = await auth.downscopeToken(
    ['item_rename'],
    resourcePath
  );
  if (!!(downscopedToken.accessToken == void 0)) {
    throw 'Assertion failed';
  }
  const downscopedClient: BoxClient = new BoxClient({
    auth: new BoxDeveloperTokenAuth({ token: downscopedToken.accessToken! }),
  });
  await downscopedClient.files.updateFileById(file.id, {
    name: getUuid(),
  } satisfies UpdateFileByIdRequestBodyArg);
  await expect(async () => {
    await downscopedClient.files.deleteFileById(file.id);
  }).rejects.toThrow();
  await parentClient.files.deleteFileById(file.id);
});
export {};
