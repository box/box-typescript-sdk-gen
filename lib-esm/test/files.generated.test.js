import { GetFileByIdHeaders } from '../managers/files.generated.js';
import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { readByteStream } from '../internal/utils.js';
import { generateByteStreamFromBuffer } from '../internal/utils.js';
import { generateByteBuffer } from '../internal/utils.js';
import { bufferEquals } from '../internal/utils.js';
import { createNull } from '../internal/utils.js';
import { uploadNewFile } from './commons.generated.js';
import { getDefaultClient } from './commons.generated.js';
export const client = getDefaultClient();
export async function uploadFile(fileName, fileStream) {
    const uploadedFiles = await client.uploads.uploadFile({
        attributes: {
            name: fileName,
            parent: { id: '0' },
        },
        file: fileStream,
    });
    return uploadedFiles.entries[0];
}
test('testGetFileThumbnailUrl', async function testGetFileThumbnailUrl() {
    const thumbnailFileName = getUuid();
    const thumbnailContentStream = generateByteStream(1024 * 1024);
    const thumbnailFile = await uploadFile(thumbnailFileName, thumbnailContentStream);
    const downloadUrl = await client.files.getFileThumbnailUrl(thumbnailFile.id, 'png');
    if (!!(downloadUrl == void 0)) {
        throw new Error('Assertion failed');
    }
    if (!downloadUrl.includes('https://')) {
        throw new Error('Assertion failed');
    }
    await client.files.deleteFileById(thumbnailFile.id);
});
test('testGetFileThumbnail', async function testGetFileThumbnail() {
    const thumbnailFileName = getUuid();
    const thumbnailBuffer = generateByteBuffer(1024 * 1024);
    const thumbnailContentStream = generateByteStreamFromBuffer(thumbnailBuffer);
    const thumbnailFile = await uploadFile(thumbnailFileName, thumbnailContentStream);
    const thumbnail = await client.files.getFileThumbnailById(thumbnailFile.id, 'png');
    if (!!(bufferEquals(await readByteStream(thumbnail), thumbnailBuffer) == true)) {
        throw new Error('Assertion failed');
    }
    await client.files.deleteFileById(thumbnailFile.id);
});
test('testGetFileFullExtraFields', async function testGetFileFullExtraFields() {
    const newFileName = getUuid();
    const fileStream = generateByteStream(1024 * 1024);
    const uploadedFile = await uploadFile(newFileName, fileStream);
    const file = await client.files.getFileById(uploadedFile.id, {
        queryParams: {
            fields: ['is_externally_owned', 'has_collaborations'],
        },
    });
    if (!(file.isExternallyOwned == false)) {
        throw new Error('Assertion failed');
    }
    if (!(file.hasCollaborations == false)) {
        throw new Error('Assertion failed');
    }
    await client.files.deleteFileById(file.id);
});
test('testCreateGetAndDeleteFile', async function testCreateGetAndDeleteFile() {
    const newFileName = getUuid();
    const updatedContentStream = generateByteStream(1024 * 1024);
    const uploadedFile = await uploadFile(newFileName, updatedContentStream);
    const file = await client.files.getFileById(uploadedFile.id);
    await expect(async () => {
        await client.files.getFileById(uploadedFile.id, {
            queryParams: { fields: ['name'] },
            headers: new GetFileByIdHeaders({
                extraHeaders: { ['if-none-match']: file.etag },
            }),
        });
    }).rejects.toThrow();
    if (!(file.name == newFileName)) {
        throw new Error('Assertion failed');
    }
    await client.files.deleteFileById(uploadedFile.id);
    const trashedFile = await client.trashedFiles.getTrashedFileById(uploadedFile.id);
    if (!(file.id == trashedFile.id)) {
        throw new Error('Assertion failed');
    }
});
test('testUpdateFile', async function testUpdateFile() {
    const fileToUpdate = await uploadNewFile();
    const updatedName = getUuid();
    const updatedFile = await client.files.updateFileById(fileToUpdate.id, {
        requestBody: {
            name: updatedName,
            description: 'Updated description',
        },
    });
    if (!(updatedFile.name == updatedName)) {
        throw new Error('Assertion failed');
    }
    if (!(updatedFile.description == 'Updated description')) {
        throw new Error('Assertion failed');
    }
    await client.files.deleteFileById(updatedFile.id);
});
test('testFileLock', async function testFileLock() {
    const file = await uploadNewFile();
    const fileWithLock = await client.files.updateFileById(file.id, {
        requestBody: {
            lock: {
                access: 'lock',
            },
        },
        queryParams: { fields: ['lock'] },
    });
    if (!!(fileWithLock.lock == void 0)) {
        throw new Error('Assertion failed');
    }
    const fileWithoutLock = await client.files.updateFileById(file.id, {
        requestBody: { lock: createNull() },
        queryParams: { fields: ['lock'] },
    });
    if (!(fileWithoutLock.lock == void 0)) {
        throw new Error('Assertion failed');
    }
    await client.files.deleteFileById(file.id);
});
test('testCopyFile', async function testCopyFile() {
    const fileOrigin = await uploadNewFile();
    const copiedFileName = getUuid();
    const copiedFile = await client.files.copyFile(fileOrigin.id, {
        parent: { id: '0' },
        name: copiedFileName,
    });
    if (!(copiedFile.parent.id == '0')) {
        throw new Error('Assertion failed');
    }
    if (!(copiedFile.name == copiedFileName)) {
        throw new Error('Assertion failed');
    }
    await client.files.deleteFileById(fileOrigin.id);
    await client.files.deleteFileById(copiedFile.id);
});
//# sourceMappingURL=files.generated.test.js.map