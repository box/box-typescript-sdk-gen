import { serializeUserFull } from '../schemas.generated.js';
import { deserializeUserFull } from '../schemas.generated.js';
import { GetUserMeQueryParamsArg } from '../managers/users.generated.js';
import { AccessToken } from '../schemas.generated.js';
import { decodeBase64 } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { getUuid } from '../utils.js';
import { bufferEquals } from '../utils.js';
import { readByteStream } from '../utils.js';
import { generateByteBuffer } from '../utils.js';
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
test('test_oauth_auth', function test_oauth_auth(): any {
  const config: OAuthConfig = new OAuthConfig({
    clientId: 'OAUTH_CLIENT_ID',
    clientSecret: 'OAUTH_CLIENT_SECRET',
  });
  const auth: BoxOAuth = new BoxOAuth({ config: config });
  const authUrl: string = auth.getAuthorizeUrl();
  const expectedAuthUrl: string =
    'https://account.box.com/api/oauth2/authorize?client_id=OAUTH_CLIENT_ID&response_type=code';
  if (!(authUrl == expectedAuthUrl)) {
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
  const devAuth: BoxDeveloperTokenAuth = new BoxDeveloperTokenAuth({
    token: token.accessToken!,
  });
  const client: BoxClient = new BoxClient({ auth: devAuth });
  const currentUser: UserFull = await client.users.getUserMe();
  if (!(currentUser.id == userId)) {
    throw 'Assertion failed';
  }
});
export {};
