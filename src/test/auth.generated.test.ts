import { serializeUserFull } from '../schemas.generated.js';
import { deserializeUserFull } from '../schemas.generated.js';
import { GetUserMeQueryParamsArg } from '../managers/users.generated.js';
import { AccessToken } from '../schemas.generated.js';
import { decodeBase64 } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { BoxClient } from '../client.generated.js';
import { BoxJwtAuth } from '../jwtAuth.js';
import { JwtConfig } from '../jwtAuth.js';
import { BoxCcgAuth } from '../ccgAuth.js';
import { CcgConfig } from '../ccgAuth.js';
import { BoxDeveloperTokenAuth } from '../developerTokenAuth.generated.js';
import { BoxOAuth } from '../oauth.generated.js';
import { OAuthConfig } from '../oauth.generated.js';
import { UserFull } from '../schemas.generated.js';
test('test_ccg_auth', async function test_ccg_auth(): Promise<any> {
  const userId: any = getEnvVar('USER_ID');
  const enterpriseId: any = getEnvVar('ENTERPRISE_ID');
  const ccgConfig: any = new CcgConfig({
    clientId: getEnvVar('CLIENT_ID'),
    clientSecret: getEnvVar('CLIENT_SECRET'),
    enterpriseId: enterpriseId,
    userId: userId,
  });
  const auth: any = new BoxCcgAuth({ config: ccgConfig });
  const client: any = new BoxClient({ auth: auth });
  await auth.asUser(userId);
  const currentUser: any = await client.users.getUserMe();
  if (!(currentUser.id == userId)) {
    throw 'Assertion failed';
  }
  await auth.asEnterprise(enterpriseId);
  const newUser: any = await client.users.getUserMe({
    fields: ['enterprise' as ''],
  } satisfies GetUserMeQueryParamsArg);
  if (
    !(!(newUser.enterprise == void 0) && newUser.enterprise.id == enterpriseId)
  ) {
    throw 'Assertion failed';
  }
  if (!!(newUser.id == userId)) {
    throw 'Assertion failed';
  }
});
test('test_jwt_auth', async function test_jwt_auth(): Promise<any> {
  const userId: any = getEnvVar('USER_ID');
  const enterpriseId: any = getEnvVar('ENTERPRISE_ID');
  const jwtConfig: any = JwtConfig.fromConfigJsonString(
    decodeBase64(getEnvVar('JWT_CONFIG_BASE_64'))
  );
  const auth: any = new BoxJwtAuth({ config: jwtConfig });
  const client: any = new BoxClient({ auth: auth });
  await auth.asUser(userId);
  const currentUser: any = await client.users.getUserMe();
  if (!(currentUser.id == userId)) {
    throw 'Assertion failed';
  }
  await auth.asEnterprise(enterpriseId);
  const newUser: any = await client.users.getUserMe({
    fields: ['enterprise' as ''],
  } satisfies GetUserMeQueryParamsArg);
  if (
    !(!(newUser.enterprise == void 0) && newUser.enterprise.id == enterpriseId)
  ) {
    throw 'Assertion failed';
  }
  if (!!(newUser.id == userId)) {
    throw 'Assertion failed';
  }
});
test('test_developer_token_auth', async function test_developer_token_auth(): Promise<any> {
  const userId: any = getEnvVar('USER_ID');
  const jwtConfig: any = JwtConfig.fromConfigJsonString(
    decodeBase64(getEnvVar('JWT_CONFIG_BASE_64'))
  );
  const auth: any = new BoxJwtAuth({ config: jwtConfig });
  await auth.asUser(userId);
  const token: any = await auth.retrieveToken();
  const devAuth: any = new BoxDeveloperTokenAuth({ token: token.accessToken });
  const client: any = new BoxClient({ auth: devAuth });
  const currentUser: any = await client.users.getUserMe();
  if (!(currentUser.id == userId)) {
    throw 'Assertion failed';
  }
});
test('test_oauth_auth', function test_oauth_auth(): any {
  const config: any = new OAuthConfig({
    clientId: 'OAUTH_CLIENT_ID',
    clientSecret: 'OAUTH_CLIENT_SECRET',
  });
  const auth: any = new BoxOAuth({ config: config });
  const authUrl: any = auth.getAuthorizeUrl();
  const expectedAuthUrl: any =
    'https://account.box.com/api/oauth2/authorize?client_id=OAUTH_CLIENT_ID&response_type=code';
  if (!(authUrl == expectedAuthUrl)) {
    throw 'Assertion failed';
  }
});
export {};
