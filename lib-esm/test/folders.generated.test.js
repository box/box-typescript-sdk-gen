import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('test_get_folder_info', async function test_get_folder_info() {
    const rootFolder = await client.folders.getFolderById('0');
    if (!(rootFolder.id == '0')) {
        throw new Error('Assertion failed');
    }
    if (!(rootFolder.name == 'All Files')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(rootFolder.type) == 'folder')) {
        throw new Error('Assertion failed');
    }
});
test('test_get_folder_full_info_with_extra_fields', async function test_get_folder_full_info_with_extra_fields() {
    const rootFolder = await client.folders.getFolderById('0', {
        queryParams: {
            fields: ['has_collaborations', 'tags'],
        },
    });
    if (!(rootFolder.id == '0')) {
        throw new Error('Assertion failed');
    }
    if (!(rootFolder.hasCollaborations == false)) {
        throw new Error('Assertion failed');
    }
    const tagsLength = rootFolder.tags.length;
    if (!(tagsLength == 0)) {
        throw new Error('Assertion failed');
    }
});
test('test_create_and_delete_folder', async function test_create_and_delete_folder() {
    const newFolderName = getUuid();
    const newFolder = await client.folders.createFolder({
        name: newFolderName,
        parent: { id: '0' },
    });
    const createdFolder = await client.folders.getFolderById(newFolder.id);
    if (!(createdFolder.name == newFolderName)) {
        throw new Error('Assertion failed');
    }
    await client.folders.deleteFolderById(newFolder.id);
    await expect(async () => {
        await client.folders.getFolderById(newFolder.id);
    }).rejects.toThrow();
});
test('test_update_folder', async function test_update_folder() {
    const folderToUpdateName = getUuid();
    const folderToUpdate = await client.folders.createFolder({
        name: folderToUpdateName,
        parent: { id: '0' },
    });
    const updatedName = getUuid();
    const updatedFolder = await client.folders.updateFolderById(folderToUpdate.id, {
        requestBody: {
            name: updatedName,
            description: 'Updated description',
        },
    });
    if (!(updatedFolder.name == updatedName)) {
        throw new Error('Assertion failed');
    }
    if (!(updatedFolder.description == 'Updated description')) {
        throw new Error('Assertion failed');
    }
    await client.folders.deleteFolderById(updatedFolder.id);
});
test('test_copy_move_folder_and_list_folder_items', async function test_copy_move_folder_and_list_folder_items() {
    const folderOriginName = getUuid();
    const folderOrigin = await client.folders.createFolder({
        name: folderOriginName,
        parent: { id: '0' },
    });
    const copiedFolderName = getUuid();
    const copiedFolder = await client.folders.copyFolder(folderOrigin.id, {
        parent: { id: '0' },
        name: copiedFolderName,
    });
    if (!(copiedFolder.parent.id == '0')) {
        throw new Error('Assertion failed');
    }
    const movedFolderName = getUuid();
    const movedFolder = await client.folders.updateFolderById(copiedFolder.id, {
        requestBody: {
            parent: {
                id: folderOrigin.id,
            },
            name: movedFolderName,
        },
    });
    if (!(movedFolder.parent.id == folderOrigin.id)) {
        throw new Error('Assertion failed');
    }
    const folderItems = await client.folders.getFolderItems(folderOrigin.id);
    if (!(folderItems.entries[0].id == movedFolder.id)) {
        throw new Error('Assertion failed');
    }
    if (!(folderItems.entries[0].name == movedFolderName)) {
        throw new Error('Assertion failed');
    }
    await client.folders.deleteFolderById(movedFolder.id);
    await client.folders.deleteFolderById(folderOrigin.id);
});
//# sourceMappingURL=folders.generated.test.js.map