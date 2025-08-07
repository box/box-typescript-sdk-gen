import { getDefaultClient } from './commons.generated.js';
import { createNewFolder } from './commons.generated.js';
export const client = getDefaultClient();
test('testFolderLocks', async function testFolderLocks() {
    const folder = await createNewFolder();
    const folderLocks = await client.folderLocks.getFolderLocks({
        folderId: folder.id,
    });
    if (!(folderLocks.entries.length == 0)) {
        throw new Error('Assertion failed');
    }
    const folderLock = await client.folderLocks.createFolderLock({
        folder: {
            id: folder.id,
            type: 'folder',
        },
        lockedOperations: {
            move: true,
            delete: true,
        },
    });
    if (!(folderLock.folder.id == folder.id)) {
        throw new Error('Assertion failed');
    }
    if (!(folderLock.lockedOperations.move == true)) {
        throw new Error('Assertion failed');
    }
    if (!(folderLock.lockedOperations.delete == true)) {
        throw new Error('Assertion failed');
    }
    await client.folderLocks.deleteFolderLockById(folderLock.id);
    await expect(async () => {
        await client.folderLocks.deleteFolderLockById(folderLock.id);
    }).rejects.toThrow();
    const newFolderLocks = await client.folderLocks.getFolderLocks({
        folderId: folder.id,
    });
    if (!(newFolderLocks.entries.length == 0)) {
        throw new Error('Assertion failed');
    }
    await client.folders.deleteFolderById(folder.id);
});
//# sourceMappingURL=folderLocks.generated.test.js.map