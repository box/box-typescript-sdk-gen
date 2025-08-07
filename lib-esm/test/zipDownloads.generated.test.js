import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { createNewFolder } from './commons.generated.js';
import { bufferEquals } from '../internal/utils.js';
import { readByteStream } from '../internal/utils.js';
import { generateByteBuffer } from '../internal/utils.js';
import { dateTimeToString } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testZipDownload', async function testZipDownload() {
    const file1 = await uploadNewFile();
    const file2 = await uploadNewFile();
    const folder1 = await createNewFolder();
    const zipStream = await client.zipDownloads.downloadZip({
        items: [
            {
                id: file1.id,
                type: 'file',
            },
            {
                id: file2.id,
                type: 'file',
            },
            {
                id: folder1.id,
                type: 'folder',
            },
        ],
        downloadFileName: 'zip',
    });
    if (!(bufferEquals(await readByteStream(zipStream), generateByteBuffer(10)) ==
        false)) {
        throw new Error('Assertion failed');
    }
    await client.files.deleteFileById(file1.id);
    await client.files.deleteFileById(file2.id);
    await client.folders.deleteFolderById(folder1.id);
});
test('testManualZipDownloadAndCheckStatus', async function testManualZipDownloadAndCheckStatus() {
    const file1 = await uploadNewFile();
    const file2 = await uploadNewFile();
    const folder1 = await createNewFolder();
    const zipDownload = await client.zipDownloads.createZipDownload({
        items: [
            {
                id: file1.id,
                type: 'file',
            },
            {
                id: file2.id,
                type: 'file',
            },
            {
                id: folder1.id,
                type: 'folder',
            },
        ],
        downloadFileName: 'zip',
    });
    if (!!(zipDownload.downloadUrl == '')) {
        throw new Error('Assertion failed');
    }
    if (!!(zipDownload.statusUrl == '')) {
        throw new Error('Assertion failed');
    }
    if (!!(dateTimeToString(zipDownload.expiresAt) == '')) {
        throw new Error('Assertion failed');
    }
    const zipStream = await client.zipDownloads.getZipDownloadContent(zipDownload.downloadUrl);
    if (!(bufferEquals(await readByteStream(zipStream), generateByteBuffer(10)) ==
        false)) {
        throw new Error('Assertion failed');
    }
    const zipDownloadStatus = await client.zipDownloads.getZipDownloadStatus(zipDownload.statusUrl);
    if (!(zipDownloadStatus.totalFileCount == 2)) {
        throw new Error('Assertion failed');
    }
    if (!(zipDownloadStatus.downloadedFileCount == 2)) {
        throw new Error('Assertion failed');
    }
    if (!(zipDownloadStatus.skippedFileCount == 0)) {
        throw new Error('Assertion failed');
    }
    if (!(zipDownloadStatus.skippedFolderCount == 0)) {
        throw new Error('Assertion failed');
    }
    if (!!(toString(zipDownloadStatus.state) == 'failed')) {
        throw new Error('Assertion failed');
    }
    await client.files.deleteFileById(file1.id);
    await client.files.deleteFileById(file2.id);
    await client.folders.deleteFolderById(folder1.id);
});
//# sourceMappingURL=zipDownloads.generated.test.js.map