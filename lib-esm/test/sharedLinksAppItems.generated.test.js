import { getEnvVar } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testSharedLinksAppItems', async function testSharedLinksAppItems() {
    const appItemSharedLink = getEnvVar('APP_ITEM_SHARED_LINK');
    const appItem = await client.sharedLinksAppItems.findAppItemForSharedLink({
        boxapi: ''.concat('shared_link=', appItemSharedLink),
    });
    if (!(toString(appItem.type) == 'app_item')) {
        throw new Error('Assertion failed');
    }
    if (!(appItem.applicationType == 'hubs')) {
        throw new Error('Assertion failed');
    }
});
//# sourceMappingURL=sharedLinksAppItems.generated.test.js.map