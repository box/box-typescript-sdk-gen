import { serializeRecentItems } from '../schemas.generated.js';
import { deserializeRecentItems } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { RecentItems } from '../schemas.generated.js';
import { decodeBase64 } from '../internal/utils.js';
import { getEnvVar } from '../internal/utils.js';
import { getUuid } from '../internal/utils.js';
import { getDefaultClientAsUser } from './commons.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
test('testRecentItems', async function testRecentItems(): Promise<any> {
  const client: BoxClient = getDefaultClientAsUser(getEnvVar('USER_ID'));
  const recentItems: RecentItems = await client.recentItems.getRecentItems();
  if (!(recentItems.entries!.length >= 0)) {
    throw new Error('Assertion failed');
  }
});
export {};
