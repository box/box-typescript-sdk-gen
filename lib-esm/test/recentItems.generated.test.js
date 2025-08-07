import { getEnvVar } from '../internal/utils.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
test('testRecentItems', async function testRecentItems() {
    const client = getDefaultClientWithUserSubject(getEnvVar('USER_ID'));
    const recentItems = await client.recentItems.getRecentItems();
    if (!(recentItems.entries.length >= 0)) {
        throw new Error('Assertion failed');
    }
});
//# sourceMappingURL=recentItems.generated.test.js.map