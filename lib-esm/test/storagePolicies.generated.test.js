import { getEnvVar } from '../internal/utils.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const userId = getEnvVar('USER_ID');
test('testGetStoragePolicies', async function testGetStoragePolicies() {
    const client = getDefaultClientWithUserSubject(userId);
    const storagePolicies = await client.storagePolicies.getStoragePolicies();
    const storagePolicy = storagePolicies.entries[0];
    if (!(toString(storagePolicy.type) == 'storage_policy')) {
        throw new Error('Assertion failed');
    }
    const getStoragePolicy = await client.storagePolicies.getStoragePolicyById(storagePolicy.id);
    if (!(getStoragePolicy.id == storagePolicy.id)) {
        throw new Error('Assertion failed');
    }
});
//# sourceMappingURL=storagePolicies.generated.test.js.map