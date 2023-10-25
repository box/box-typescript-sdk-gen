import { serializeRecentItems } from '../schemas.generated.js';
import { deserializeRecentItems } from '../schemas.generated.js';
import { RecentItems } from '../schemas.generated.js';
import { decodeBase64 } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { getUuid } from '../utils.js';
import { BoxClient } from '../client.generated.js';
import { BoxJwtAuth } from '../jwtAuth.js';
import { JwtConfig } from '../jwtAuth.js';
const jwtConfig: JwtConfig = JwtConfig.fromConfigJsonString(
  decodeBase64(getEnvVar('JWT_CONFIG_BASE_64'))
);
const auth: BoxJwtAuth = new BoxJwtAuth({ config: jwtConfig });
test('testRecentItems', async function testRecentItems(): Promise<any> {
  await auth.asUser(getEnvVar('USER_ID'));
  const client: BoxClient = new BoxClient({ auth: auth });
  const recentItems: RecentItems = await client.recentItems.getRecentItems();
  if (!(recentItems.entries!.length >= 0)) {
    throw 'Assertion failed';
  }
});
export {};
