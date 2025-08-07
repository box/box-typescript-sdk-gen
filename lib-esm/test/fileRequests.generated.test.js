import { getEnvVar } from '../internal/utils.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { toString } from '../internal/utils.js';
test('testGetCopyUpdateDeleteFileRequest', async function testGetCopyUpdateDeleteFileRequest() {
    const fileRequestId = getEnvVar('BOX_FILE_REQUEST_ID');
    const userId = getEnvVar('USER_ID');
    const client = getDefaultClientWithUserSubject(userId);
    const fileRequest = await client.fileRequests.getFileRequestById(fileRequestId);
    if (!(fileRequest.id == fileRequestId)) {
        throw new Error('Assertion failed');
    }
    if (!(toString(fileRequest.type) == 'file_request')) {
        throw new Error('Assertion failed');
    }
    const copiedFileRequest = await client.fileRequests.createFileRequestCopy(fileRequestId, {
        folder: {
            id: fileRequest.folder.id,
            type: 'folder',
        },
    });
    if (!!(copiedFileRequest.id == fileRequestId)) {
        throw new Error('Assertion failed');
    }
    if (!(copiedFileRequest.title == fileRequest.title)) {
        throw new Error('Assertion failed');
    }
    if (!(copiedFileRequest.description == fileRequest.description)) {
        throw new Error('Assertion failed');
    }
    const updatedFileRequest = await client.fileRequests.updateFileRequestById(copiedFileRequest.id, {
        title: 'updated title',
        description: 'updated description',
    });
    if (!(updatedFileRequest.id == copiedFileRequest.id)) {
        throw new Error('Assertion failed');
    }
    if (!(updatedFileRequest.title == 'updated title')) {
        throw new Error('Assertion failed');
    }
    if (!(updatedFileRequest.description == 'updated description')) {
        throw new Error('Assertion failed');
    }
    await client.fileRequests.deleteFileRequestById(updatedFileRequest.id);
    await expect(async () => {
        await client.fileRequests.getFileRequestById(updatedFileRequest.id);
    }).rejects.toThrow();
});
//# sourceMappingURL=fileRequests.generated.test.js.map