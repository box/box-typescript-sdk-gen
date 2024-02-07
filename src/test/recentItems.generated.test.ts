import { serializeRecentItems } from '../schemas.generated.js';
import { deserializeRecentItems } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { RecentItems } from '../schemas.generated.js';
import { decodeBase64 } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { getUuid } from '../utils.js';
import { getDefaultClientAsUser } from './commons.generated.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
test('testRecentItems', async function testRecentItems(): Promise<any> {
  const client: BoxClient = await getDefaultClientAsUser(getEnvVar('USER_ID'));
  const recentItems: RecentItems = await client.recentItems.getRecentItems();
  if (!(recentItems.entries!.length >= 0)) {
    throw new Error(String('Assertion failed'));
  }
});
export {};
