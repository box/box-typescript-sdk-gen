import { getUuid } from '../internal/utils.js';
import { generateByteBuffer } from '../internal/utils.js';
import { generateByteStreamFromBuffer } from '../internal/utils.js';
import { bufferEquals } from '../internal/utils.js';
import { readByteStream } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
export const client = getDefaultClient();
test('test_download_file', async function test_download_file() {
    const newFileName = getUuid();
    const fileBuffer = generateByteBuffer(1024 * 1024);
    const fileContentStream = generateByteStreamFromBuffer(fileBuffer);
    const uploadedFiles = await client.uploads.uploadFile({
        attributes: {
            name: newFileName,
            parent: { id: '0' },
        },
        file: fileContentStream,
    });
    const uploadedFile = uploadedFiles.entries[0];
    const downloadedFileContent = await client.downloads.downloadFile(uploadedFile.id);
    if (!bufferEquals(await readByteStream(downloadedFileContent), fileBuffer)) {
        throw new Error('Assertion failed');
    }
    await client.files.deleteFileById(uploadedFile.id);
});
test('test_get_download_url', async function test_get_download_url() {
    const uploadedFile = await uploadNewFile();
    const downloadUrl = await client.downloads.getDownloadFileUrl(uploadedFile.id);
    if (!!(downloadUrl == void 0)) {
        throw new Error('Assertion failed');
    }
    if (!downloadUrl.includes('https://')) {
        throw new Error('Assertion failed');
    }
    await client.files.deleteFileById(uploadedFile.id);
});
test('test_change_download_url_with_interceptor', async function test_change_download_url_with_interceptor() {
    const newFileName = getUuid();
    const fileBuffer = generateByteBuffer(1024 * 1024);
    const fileContentStream = generateByteStreamFromBuffer(fileBuffer);
    const uploadedFiles = await client.uploads.uploadFile({
        attributes: {
            name: newFileName,
            parent: { id: '0' },
        },
        file: fileContentStream,
    });
    const uploadedFile = uploadedFiles.entries[0];
    const downloadedFileContent = await client.downloads.downloadFile(uploadedFile.id);
    if (!bufferEquals(await readByteStream(downloadedFileContent), fileBuffer)) {
        throw new Error('Assertion failed');
    }
    function emptyBeforeRequest(optionsInput) {
        const options = new FetchOptions({
            url: optionsInput.url,
            method: optionsInput.method,
            params: optionsInput.params,
            headers: optionsInput.headers,
            data: optionsInput.data,
            fileStream: optionsInput.fileStream,
            multipartData: optionsInput.multipartData,
            contentType: optionsInput.contentType,
            responseFormat: optionsInput.responseFormat,
            auth: optionsInput.auth,
            networkSession: optionsInput.networkSession,
            cancellationToken: optionsInput.cancellationToken,
            followRedirects: optionsInput.followRedirects,
        });
        return options;
    }
    function afterRequest(response) {
        return {
            url: response.url,
            status: response.status,
            data: response.data,
            content: response.content,
            headers: { ...response.headers, ...{ ['location']: 'fake_location' } },
        };
    }
    const clientWithInterceptor = client.withInterceptors([
        {
            beforeRequest: emptyBeforeRequest,
            afterRequest: afterRequest,
        },
    ]);
    await expect(async () => {
        await clientWithInterceptor.downloads.downloadFile(uploadedFile.id);
    }).rejects.toThrow();
    await client.files.deleteFileById(uploadedFile.id);
});
//# sourceMappingURL=downloads.generated.test.js.map