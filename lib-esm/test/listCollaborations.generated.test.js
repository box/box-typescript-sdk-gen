import { getUuid } from '../internal/utils.js';
import { getEnvVar } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { createNewFolder } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { toString } from '../internal/utils.js';
test('testListCollaborations', async function testListCollaborations() {
    const client = getDefaultClient();
    const folder = await createNewFolder();
    const file = await uploadNewFile();
    const group = await client.groups.createGroup({
        name: getUuid(),
    });
    const groupCollaboration = await client.userCollaborations.createCollaboration({
        item: {
            type: 'folder',
            id: folder.id,
        },
        accessibleBy: {
            type: 'group',
            id: group.id,
        },
        role: 'editor',
    });
    const fileCollaboration = await client.userCollaborations.createCollaboration({
        item: {
            type: 'file',
            id: file.id,
        },
        accessibleBy: {
            type: 'user',
            id: getEnvVar('USER_ID'),
        },
        role: 'editor',
    });
    if (!(toString(groupCollaboration.role) == 'editor')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(groupCollaboration.type) == 'collaboration')) {
        throw new Error('Assertion failed');
    }
    const fileCollaborations = await client.listCollaborations.getFileCollaborations(file.id);
    if (!(fileCollaborations.entries.length > 0)) {
        throw new Error('Assertion failed');
    }
    const folderCollaborations = await client.listCollaborations.getFolderCollaborations(folder.id);
    if (!(folderCollaborations.entries.length > 0)) {
        throw new Error('Assertion failed');
    }
    const pendingCollaborations = await client.listCollaborations.getCollaborations({
        status: 'pending',
    });
    if (!(pendingCollaborations.entries.length >= 0)) {
        throw new Error('Assertion failed');
    }
    const groupCollaborations = await client.listCollaborations.getGroupCollaborations(group.id);
    if (!(groupCollaborations.entries.length > 0)) {
        throw new Error('Assertion failed');
    }
    await client.userCollaborations.deleteCollaborationById(groupCollaboration.id);
    await client.files.deleteFileById(file.id);
    await client.folders.deleteFolderById(folder.id);
    await client.groups.deleteGroupById(group.id);
});
//# sourceMappingURL=listCollaborations.generated.test.js.map