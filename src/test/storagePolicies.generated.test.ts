import { serializeStoragePolicies } from '../schemas.generated.js';
import { deserializeStoragePolicies } from '../schemas.generated.js';
import { serializeStoragePolicy } from '../schemas.generated.js';
import { deserializeStoragePolicy } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { StoragePolicies } from '../schemas.generated.js';
import { StoragePolicy } from '../schemas.generated.js';
import { getEnvVar } from '../internal/utils.js';
import { getDefaultClientAsUser } from './commons.generated.js';
import { toString } from '../internal/utils.js';
import { sdToJson } from '../serialization/json.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
const userId: string = getEnvVar('USER_ID');
test('testGetStoragePolicies', async function testGetStoragePolicies(): Promise<any> {
  const client: BoxClient = getDefaultClientAsUser(userId);
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
