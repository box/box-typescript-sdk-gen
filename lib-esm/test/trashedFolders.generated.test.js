import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
export const client = getDefaultClient();
test('testTrashedFolders', async function testTrashedFolders() {
    const folder = await client.folders.createFolder({
        name: getUuid(),
        parent: { id: '0' },
    });
    await client.folders.deleteFolderById(folder.id);
    const fromTrash = await client.trashedFolders.getTrashedFolderById(folder.id);
    if (!(fromTrash.id == folder.id)) {
        throw new Error('Assertion failed');
    }
    if (!(fromTrash.name == folder.name)) {
        throw new Error('Assertion failed');
    }
    await expect(async () => {
        await client.folders.getFolderById(folder.id);
    }).rejects.toThrow();
    const restoredFolder = await client.trashedFolders.restoreFolderFromTrash(folder.id);
    const fromApi = await client.folders.getFolderById(folder.id);
    if (!(restoredFolder.id == fromApi.id)) {
        throw new Error('Assertion failed');
    }
    if (!(restoredFolder.name == fromApi.name)) {
        throw new Error('Assertion failed');
    }
    await client.folders.deleteFolderById(folder.id);
    await client.trashedFolders.deleteTrashedFolderById(folder.id);
    await expect(async () => {
        await client.trashedFolders.getTrashedFolderById(folder.id);
    }).rejects.toThrow();
});
//# sourceMappingURL=trashedFolders.generated.test.js.map