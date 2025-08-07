import { UploadFileHeaders } from '../managers/uploads.generated.js';
import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { createTokenAndCancelAfter } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
export const client = getDefaultClient();
test('testUploadFileAndFileVersion', async function testUploadFileAndFileVersion() {
    const newFileName = getUuid();
    const fileContentStream = generateByteStream(1024 * 1024);
    const uploadedFiles = await client.uploads.uploadFile({
        attributes: {
            name: newFileName,
            parent: { id: '0' },
        },
        file: fileContentStream,
    });
    const uploadedFile = uploadedFiles.entries[0];
    if (!(uploadedFile.name == newFileName)) {
        throw new Error('Assertion failed');
    }
    const newFileVersionName = getUuid();
    const newFileContentStream = generateByteStream(1024 * 1024);
    const uploadedFilesVersion = await client.uploads.uploadFileVersion(uploadedFile.id, {
        attributes: {
            name: newFileVersionName,
        },
        file: newFileContentStream,
    });
    const newFileVersion = uploadedFilesVersion.entries[0];
    if (!(newFileVersion.name == newFileVersionName)) {
        throw new Error('Assertion failed');
    }
    await client.files.deleteFileById(newFileVersion.id);
});
test('testRequestCancellation', async function testRequestCancellation() {
    const fileSize = 1024 * 1024;
    const fileName = getUuid();
    const fileByteStream = generateByteStream(fileSize);
    const cancellationToken = createTokenAndCancelAfter(1);
    await expect(async () => {
        await client.uploads.uploadFile({
            attributes: {
                name: fileName,
                parent: {
                    id: '0',
                },
            },
            file: fileByteStream,
        }, {
            queryParams: {},
            headers: new UploadFileHeaders({}),
            cancellationToken: cancellationToken,
        });
    }).rejects.toThrow();
});
test('testUploadFileWithPreflightCheck', async function testUploadFileWithPreflightCheck() {
    const newFileName = getUuid();
    const fileContentStream = generateByteStream(1024 * 1024);
    await expect(async () => {
        await client.uploads.uploadWithPreflightCheck({
            attributes: {
                name: newFileName,
                size: -1,
                parent: {
                    id: '0',
                },
            },
            file: fileContentStream,
        });
    }).rejects.toThrow();
    const uploadFilesWithPreflight = await client.uploads.uploadWithPreflightCheck({
        attributes: {
            name: newFileName,
            size: 1024 * 1024,
            parent: {
                id: '0',
            },
        },
        file: fileContentStream,
    });
    const file = uploadFilesWithPreflight.entries[0];
    if (!(file.name == newFileName)) {
        throw new Error('Assertion failed');
    }
    if (!(file.size == 1024 * 1024)) {
        throw new Error('Assertion failed');
    }
    await expect(async () => {
        await client.uploads.uploadWithPreflightCheck({
            attributes: {
                name: newFileName,
                size: 1024 * 1024,
                parent: {
                    id: '0',
                },
            },
            file: fileContentStream,
        });
    }).rejects.toThrow();
    await client.files.deleteFileById(file.id);
});
test('testPreflightCheck', async function testPreflightCheck() {
    const newFileName = getUuid();
    const preflightCheckResult = await client.uploads.preflightFileUploadCheck({
        name: newFileName,
        size: 1024 * 1024,
        parent: {
            id: '0',
        },
    });
    if (!!(preflightCheckResult.uploadUrl == '')) {
        throw new Error('Assertion failed');
    }
});
//# sourceMappingURL=uploads.generated.test.js.map