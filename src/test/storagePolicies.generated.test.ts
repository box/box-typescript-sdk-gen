import { serializeStoragePolicies } from '../schemas.generated.js';
import { deserializeStoragePolicies } from '../schemas.generated.js';
import { serializeStoragePolicy } from '../schemas.generated.js';
import { deserializeStoragePolicy } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { StoragePolicies } from '../schemas.generated.js';
import { StoragePolicy } from '../schemas.generated.js';
import { getEnvVar } from '../utils.js';
import { getDefaultClientAsUser } from './commons.generated.js';
import { toString } from '../utils.js';
import { sdToJson } from '../json.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const userId: string = getEnvVar('USER_ID');
test('testGetStoragePolicies', async function testGetStoragePolicies(): Promise<any> {
  const client: BoxClient = await getDefaultClientAsUser(userId);
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
