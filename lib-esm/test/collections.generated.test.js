import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testCollections', async function testCollections() {
    const collections = await client.collections.getCollections();
    const favouriteCollection = await client.collections.getCollectionById(collections.entries[0].id);
    if (!(toString(favouriteCollection.type) == 'collection')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(favouriteCollection.collectionType) == 'favorites')) {
        throw new Error('Assertion failed');
    }
    const collectionItems = await client.collections.getCollectionItems(favouriteCollection.id);
    const folder = await client.folders.createFolder({
        name: getUuid(),
        parent: { id: '0' },
    });
    await client.folders.updateFolderById(folder.id, {
        requestBody: {
            collections: [
                {
                    id: favouriteCollection.id,
                },
            ],
        },
    });
    const collectionItemsAfterUpdate = await client.collections.getCollectionItems(favouriteCollection.id);
    if (!(collectionItemsAfterUpdate.totalCount > 0)) {
        throw new Error('Assertion failed');
    }
    await client.folders.updateFolderById(folder.id, {
        requestBody: { collections: [] },
    });
    await client.folders.deleteFolderById(folder.id);
});
//# sourceMappingURL=collections.generated.test.js.map