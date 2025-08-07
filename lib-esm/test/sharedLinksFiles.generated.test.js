import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { getEnvVar } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { createNull } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testSharedLinksFiles', async function testSharedLinksFiles() {
    const uploadedFiles = await client.uploads.uploadFile({
        attributes: {
            name: getUuid(),
            parent: { id: '0' },
        },
        file: generateByteStream(10),
    });
    const fileId = uploadedFiles.entries[0].id;
    await client.sharedLinksFiles.addShareLinkToFile(fileId, {
        sharedLink: {
            access: 'open',
            password: 'Secret123@',
        },
    }, { fields: 'shared_link' });
    const fileFromApi = await client.sharedLinksFiles.getSharedLinkForFile(fileId, {
        fields: 'shared_link',
    });
    if (!(toString(fileFromApi.sharedLink.access) == 'open')) {
        throw new Error('Assertion failed');
    }
    const userId = getEnvVar('USER_ID');
    const userClient = getDefaultClientWithUserSubject(userId);
    const fileFromSharedLinkPassword = await userClient.sharedLinksFiles.findFileForSharedLink({}, {
        boxapi: ''.concat('shared_link=', fileFromApi.sharedLink.url, '&shared_link_password=Secret123@'),
    });
    if (!(fileId == fileFromSharedLinkPassword.id)) {
        throw new Error('Assertion failed');
    }
    await expect(async () => {
        await userClient.sharedLinksFiles.findFileForSharedLink({}, {
            boxapi: ''.concat('shared_link=', fileFromApi.sharedLink.url, '&shared_link_password=incorrectPassword'),
        });
    }).rejects.toThrow();
    const updatedFile = await client.sharedLinksFiles.updateSharedLinkOnFile(fileId, {
        sharedLink: {
            access: 'collaborators',
        },
    }, { fields: 'shared_link' });
    if (!(toString(updatedFile.sharedLink.access) == 'collaborators')) {
        throw new Error('Assertion failed');
    }
    await client.sharedLinksFiles.removeSharedLinkFromFile(fileId, { sharedLink: createNull() }, { fields: 'shared_link' });
    const fileFromApiAfterRemove = await client.sharedLinksFiles.getSharedLinkForFile(fileId, {
        fields: 'shared_link',
    });
    if (!(fileFromApiAfterRemove.sharedLink == void 0)) {
        throw new Error('Assertion failed');
    }
    await client.files.deleteFileById(fileId);
});
//# sourceMappingURL=sharedLinksFiles.generated.test.js.map