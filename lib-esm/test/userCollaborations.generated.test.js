import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { createNewFolder } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testUserCollaborations', async function testUserCollaborations() {
    const userName = getUuid();
    const userLogin = ''.concat(getUuid(), '@gmail.com');
    const user = await client.users.createUser({
        name: userName,
        login: userLogin,
        isPlatformAccessOnly: true,
    });
    const folder = await createNewFolder();
    const collaboration = await client.userCollaborations.createCollaboration({
        item: {
            type: 'folder',
            id: folder.id,
        },
        accessibleBy: {
            type: 'user',
            id: user.id,
        },
        role: 'editor',
    });
    if (!(toString(collaboration.role) == 'editor')) {
        throw new Error('Assertion failed');
    }
    const collaborationId = collaboration.id;
    const collaborationFromApi = await client.userCollaborations.getCollaborationById(collaborationId);
    if (!(collaborationId == collaborationFromApi.id)) {
        throw new Error('Assertion failed');
    }
    if (!(toString(collaborationFromApi.status) == 'accepted')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(collaborationFromApi.type) == 'collaboration')) {
        throw new Error('Assertion failed');
    }
    if (!(collaborationFromApi.inviteEmail == void 0)) {
        throw new Error('Assertion failed');
    }
    const updatedCollaboration = await client.userCollaborations.updateCollaborationById(collaborationId, {
        role: 'viewer',
    });
    if (!(toString(updatedCollaboration.role) == 'viewer')) {
        throw new Error('Assertion failed');
    }
    await client.userCollaborations.deleteCollaborationById(collaborationId);
    await expect(async () => {
        await client.userCollaborations.getCollaborationById(collaborationId);
    }).rejects.toThrow();
    await client.folders.deleteFolderById(folder.id);
    await client.users.deleteUserById(user.id);
});
test('testConvertingUserCollaborationToOwnership', async function testConvertingUserCollaborationToOwnership() {
    const userName = getUuid();
    const userLogin = ''.concat(getUuid(), '@gmail.com');
    const user = await client.users.createUser({
        name: userName,
        login: userLogin,
        isPlatformAccessOnly: true,
    });
    const folder = await createNewFolder();
    const collaboration = await client.userCollaborations.createCollaboration({
        item: {
            type: 'folder',
            id: folder.id,
        },
        accessibleBy: {
            type: 'user',
            id: user.id,
        },
        role: 'editor',
    });
    if (!(toString(collaboration.role) == 'editor')) {
        throw new Error('Assertion failed');
    }
    const ownerCollaboration = await client.userCollaborations.updateCollaborationById(collaboration.id, {
        role: 'owner',
    });
    if (!(ownerCollaboration == void 0)) {
        throw new Error('Assertion failed');
    }
    const folderCollaborations = await client.listCollaborations.getFolderCollaborations(folder.id);
    const folderCollaboration = folderCollaborations.entries[0];
    await client.userCollaborations.deleteCollaborationById(folderCollaboration.id);
    const userClient = client.withAsUserHeader(user.id);
    await userClient.folders.deleteFolderById(folder.id);
    await userClient.trashedFolders.deleteTrashedFolderById(folder.id);
    await client.users.deleteUserById(user.id);
});
test('testExternalUserCollaborations', async function testExternalUserCollaborations() {
    const userName = getUuid();
    const userLogin = ''.concat(getUuid(), '@boxdemo.com');
    const folder = await createNewFolder();
    const collaboration = await client.userCollaborations.createCollaboration({
        item: {
            type: 'folder',
            id: folder.id,
        },
        accessibleBy: {
            type: 'user',
            login: userLogin,
        },
        role: 'editor',
    });
    if (!(toString(collaboration.role) == 'editor')) {
        throw new Error('Assertion failed');
    }
    const collaborationId = collaboration.id;
    const collaborationFromApi = await client.userCollaborations.getCollaborationById(collaborationId);
    if (!(collaborationId == collaborationFromApi.id)) {
        throw new Error('Assertion failed');
    }
    if (!(toString(collaborationFromApi.status) == 'pending')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(collaborationFromApi.type) == 'collaboration')) {
        throw new Error('Assertion failed');
    }
    if (!(collaborationFromApi.inviteEmail == userLogin)) {
        throw new Error('Assertion failed');
    }
    const updatedCollaboration = await client.userCollaborations.updateCollaborationById(collaborationId, {
        role: 'viewer',
    });
    if (!(toString(updatedCollaboration.role) == 'viewer')) {
        throw new Error('Assertion failed');
    }
    await client.userCollaborations.deleteCollaborationById(collaborationId);
    await expect(async () => {
        await client.userCollaborations.getCollaborationById(collaborationId);
    }).rejects.toThrow();
    await client.folders.deleteFolderById(folder.id);
});
//# sourceMappingURL=userCollaborations.generated.test.js.map