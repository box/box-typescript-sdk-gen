import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testTrashedFiles', async function testTrashedFiles() {
    const fileSize = 1024 * 1024;
    const fileName = getUuid();
    const fileByteStream = generateByteStream(fileSize);
    const files = await client.uploads.uploadFile({
        attributes: {
            name: fileName,
            parent: { id: '0' },
        },
        file: fileByteStream,
    });
    const file = files.entries[0];
    await client.files.deleteFileById(file.id);
    const fromTrash = await client.trashedFiles.getTrashedFileById(file.id);
    if (!(fromTrash.id == file.id)) {
        throw new Error('Assertion failed');
    }
    if (!(fromTrash.name == file.name)) {
        throw new Error('Assertion failed');
    }
    const fromApiAfterTrashed = await client.files.getFileById(file.id);
    if (!(toString(fromApiAfterTrashed.itemStatus) == 'trashed')) {
        throw new Error('Assertion failed');
    }
    const restoredFile = await client.trashedFiles.restoreFileFromTrash(file.id);
    const fromApiAfterRestore = await client.files.getFileById(file.id);
    if (!(restoredFile.id == fromApiAfterRestore.id)) {
        throw new Error('Assertion failed');
    }
    if (!(restoredFile.name == fromApiAfterRestore.name)) {
        throw new Error('Assertion failed');
    }
    if (!(toString(fromApiAfterRestore.itemStatus) == 'active')) {
        throw new Error('Assertion failed');
    }
    await client.files.deleteFileById(file.id);
    await client.trashedFiles.deleteTrashedFileById(file.id);
    await expect(async () => {
        await client.trashedFiles.getTrashedFileById(file.id);
    }).rejects.toThrow();
});
//# sourceMappingURL=trashedFiles.generated.test.js.map