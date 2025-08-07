import { getEnvVar } from '../internal/utils.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { toString } from '../internal/utils.js';
test('testListFileAppItemAssocations', async function testListFileAppItemAssocations() {
    const client = getDefaultClientWithUserSubject(getEnvVar('USER_ID'));
    const fileId = getEnvVar('APP_ITEM_ASSOCIATION_FILE_ID');
    const fileAppItemAssociations = await client.appItemAssociations.getFileAppItemAssociations(fileId);
    if (!(fileAppItemAssociations.entries.length == 1)) {
        throw new Error('Assertion failed');
    }
    const association = fileAppItemAssociations.entries[0];
    if (!!(association.id == '')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(association.appItem.applicationType) == 'hubs')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(association.appItem.type) == 'app_item')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(association.item.type) == 'file')) {
        throw new Error('Assertion failed');
    }
    if (!(association.item.id == fileId)) {
        throw new Error('Assertion failed');
    }
    const file = await client.files.getFileById(fileId, {
        queryParams: {
            fields: ['is_associated_with_app_item'],
        },
    });
    if (!(file.isAssociatedWithAppItem == true)) {
        throw new Error('Assertion failed');
    }
});
test('testListFolderAppItemAssocations', async function testListFolderAppItemAssocations() {
    const client = getDefaultClientWithUserSubject(getEnvVar('USER_ID'));
    const folderId = getEnvVar('APP_ITEM_ASSOCIATION_FOLDER_ID');
    const folderAppItemAssociations = await client.appItemAssociations.getFolderAppItemAssociations(folderId);
    if (!(folderAppItemAssociations.entries.length == 1)) {
        throw new Error('Assertion failed');
    }
    const association = folderAppItemAssociations.entries[0];
    if (!!(association.id == '')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(association.appItem.applicationType) == 'hubs')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(association.appItem.type) == 'app_item')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(association.item.type) == 'folder')) {
        throw new Error('Assertion failed');
    }
    if (!(association.item.id == folderId)) {
        throw new Error('Assertion failed');
    }
    const folder = await client.folders.getFolderById(folderId, {
        queryParams: {
            fields: ['is_associated_with_app_item'],
        },
    });
    if (!(folder.isAssociatedWithAppItem == true)) {
        throw new Error('Assertion failed');
    }
});
//# sourceMappingURL=appItemAssociations.generated.test.js.map