import { serializeStoragePolicies } from '@/schemas/storagePolicies.generated';
import { deserializeStoragePolicies } from '@/schemas/storagePolicies.generated';
import { serializeStoragePolicy } from '@/schemas/storagePolicy.generated';
import { deserializeStoragePolicy } from '@/schemas/storagePolicy.generated';
import { BoxClient } from '@/client.generated';
import { StoragePolicies } from '@/schemas/storagePolicies.generated';
import { StoragePolicy } from '@/schemas/storagePolicy.generated';
import { getEnvVar } from '@/internal/utils';
import { getDefaultClientWithUserSubject } from './commons.generated';
import { toString } from '@/internal/utils';
import { sdToJson } from '@/serialization/json';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const userId: string = getEnvVar('USER_ID');
test('testGetStoragePolicies', async function testGetStoragePolicies(): Promise<any> {
  const client: BoxClient = getDefaultClientWithUserSubject(userId);
  const storagePolicies: StoragePolicies =
    await client.storagePolicies.getStoragePolicies();
  const storagePolicy: StoragePolicy = storagePolicies.entries![0];
  if (!((toString(storagePolicy.type) as string) == 'storage_policy')) {
    throw new Error('Assertion failed');
  }
  const getStoragePolicy: StoragePolicy =
    await client.storagePolicies.getStoragePolicyById(storagePolicy.id);
  if (!(getStoragePolicy.id == storagePolicy.id)) {
    throw new Error('Assertion failed');
  }
});
export {};
