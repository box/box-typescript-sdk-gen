import { getUuid } from '../internal/utils.js';
import { getEnvVar } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { createNull } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testSharedLinksFolders', async function testSharedLinksFolders() {
    const folder = await client.folders.createFolder({
        name: getUuid(),
        parent: { id: '0' },
    });
    await client.sharedLinksFolders.addShareLinkToFolder(folder.id, {
        sharedLink: {
            access: 'open',
            password: 'Secret123@',
        },
    }, { fields: 'shared_link' });
    const folderFromApi = await client.sharedLinksFolders.getSharedLinkForFolder(folder.id, {
        fields: 'shared_link',
    });
    if (!(toString(folderFromApi.sharedLink.access) == 'open')) {
        throw new Error('Assertion failed');
    }
    const userId = getEnvVar('USER_ID');
    const userClient = getDefaultClientWithUserSubject(userId);
    const folderFromSharedLinkPassword = await userClient.sharedLinksFolders.findFolderForSharedLink({}, {
        boxapi: ''.concat('shared_link=', folderFromApi.sharedLink.url, '&shared_link_password=Secret123@'),
    });
    if (!(folder.id == folderFromSharedLinkPassword.id)) {
        throw new Error('Assertion failed');
    }
    await expect(async () => {
        await userClient.sharedLinksFolders.findFolderForSharedLink({}, {
            boxapi: ''.concat('shared_link=', folderFromApi.sharedLink.url, '&shared_link_password=incorrectPassword'),
        });
    }).rejects.toThrow();
    const updatedFolder = await client.sharedLinksFolders.updateSharedLinkOnFolder(folder.id, {
        sharedLink: {
            access: 'collaborators',
        },
    }, { fields: 'shared_link' });
    if (!(toString(updatedFolder.sharedLink.access) == 'collaborators')) {
        throw new Error('Assertion failed');
    }
    await client.sharedLinksFolders.removeSharedLinkFromFolder(folder.id, {
        sharedLink: createNull(),
    }, { fields: 'shared_link' });
    const folderFromApiAfterRemove = await client.sharedLinksFolders.getSharedLinkForFolder(folder.id, {
        fields: 'shared_link',
    });
    if (!(folderFromApiAfterRemove.sharedLink == void 0)) {
        throw new Error('Assertion failed');
    }
    await client.folders.deleteFolderById(folder.id);
});
//# sourceMappingURL=sharedLinksFolders.generated.test.js.map