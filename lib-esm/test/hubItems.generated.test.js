import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { getEnvVar } from '../internal/utils.js';
import { getUuid } from '../internal/utils.js';
import { FolderReferenceV2025R0 } from '../schemas/v2025R0/folderReferenceV2025R0.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClientWithUserSubject(getEnvVar('USER_ID'));
test('testCreateDeleteGetHubItems', async function testCreateDeleteGetHubItems() {
    const hubTitle = getUuid();
    const folder = await client.folders.createFolder({
        name: getUuid(),
        parent: { id: '0' },
    });
    const createdHub = await client.hubs.createHubV2025R0({
        title: hubTitle,
    });
    const hubItemsBeforeAdd = await client.hubItems.getHubItemsV2025R0({
        hubId: createdHub.id,
    });
    if (!(hubItemsBeforeAdd.entries.length == 0)) {
        throw new Error('Assertion failed');
    }
    const addedHubItems = await client.hubItems.manageHubItemsV2025R0(createdHub.id, {
        operations: [
            {
                action: 'add',
                item: new FolderReferenceV2025R0({ id: folder.id }),
            },
        ],
    });
    const addedHubItem = addedHubItems.operations[0];
    if (!(toString(addedHubItem.action) == 'add')) {
        throw new Error('Assertion failed');
    }
    if (!(addedHubItem.status == 200)) {
        throw new Error('Assertion failed');
    }
    if (!(addedHubItem.item.id == folder.id)) {
        throw new Error('Assertion failed');
    }
    if (!(addedHubItem.item.type == 'folder')) {
        throw new Error('Assertion failed');
    }
    const hubItemsAfterAdd = await client.hubItems.getHubItemsV2025R0({
        hubId: createdHub.id,
    });
    if (!(hubItemsAfterAdd.entries.length == 1)) {
        throw new Error('Assertion failed');
    }
    const removedHubItems = await client.hubItems.manageHubItemsV2025R0(createdHub.id, {
        operations: [
            {
                action: 'remove',
                item: new FolderReferenceV2025R0({ id: folder.id }),
            },
        ],
    });
    const removedHubItem = removedHubItems.operations[0];
    if (!(toString(removedHubItem.action) == 'remove')) {
        throw new Error('Assertion failed');
    }
    if (!(removedHubItem.status == 200)) {
        throw new Error('Assertion failed');
    }
    if (!(removedHubItem.item.id == folder.id)) {
        throw new Error('Assertion failed');
    }
    if (!(removedHubItem.item.type == 'folder')) {
        throw new Error('Assertion failed');
    }
    const hubItemsAfterRemove = await client.hubItems.getHubItemsV2025R0({
        hubId: createdHub.id,
    });
    if (!(hubItemsAfterRemove.entries.length == 0)) {
        throw new Error('Assertion failed');
    }
    await client.hubs.deleteHubByIdV2025R0(createdHub.id);
    await client.folders.deleteFolderById(folder.id);
});
//# sourceMappingURL=hubItems.generated.test.js.map