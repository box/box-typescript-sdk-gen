import { serializeRecentItems } from '@/schemas/recentItems.generated';
import { deserializeRecentItems } from '@/schemas/recentItems.generated';
import { BoxClient } from '@/client.generated';
import { RecentItems } from '@/schemas/recentItems.generated';
import { decodeBase64 } from '@/internal/utils';
import { getEnvVar } from '@/internal/utils';
import { getUuid } from '@/internal/utils';
import { getDefaultClientWithUserSubject } from './commons.generated';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
test('testRecentItems', async function testRecentItems(): Promise<any> {
  const client: BoxClient = getDefaultClientWithUserSubject(
    getEnvVar('USER_ID'),
  );
  const recentItems: RecentItems = await client.recentItems.getRecentItems();
  if (!(recentItems.entries!.length >= 0)) {
    throw new Error('Assertion failed');
  }
});
export {};
