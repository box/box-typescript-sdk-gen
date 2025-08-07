import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { bufferEquals } from '../internal/utils.js';
import { generateByteBuffer } from '../internal/utils.js';
import { generateByteStreamFromBuffer } from '../internal/utils.js';
import { readByteStream } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { BaseUrls } from '../networking/baseUrls.generated.js';
import { jsonToSerializedData } from '../serialization/json.js';
import { getSdValueByKey } from '../serialization/json.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
export class InterceptorAddingRoleToFields {
    constructor(fields) { }
    /**
     * @param {FetchOptions} options
     * @returns {FetchOptions}
     */
    beforeRequest(options) {
        return new FetchOptions({
            url: options.url,
            method: options.method,
            headers: options.headers,
            params: { ...options.params, ...{ ['fields']: 'role' } },
            data: options.data,
            fileStream: options.fileStream,
            multipartData: options.multipartData,
            contentType: options.contentType,
            responseFormat: options.responseFormat,
            auth: options.auth,
            networkSession: options.networkSession,
            cancellationToken: options.cancellationToken,
        });
    }
    /**
     * @param {FetchResponse} response
     * @returns {FetchResponse}
     */
    afterRequest(response) {
        return response;
    }
}
export class InterceptorThrowingError {
    constructor(fields) { }
    /**
     * @param {FetchOptions} options
     * @returns {FetchOptions}
     */
    beforeRequest(options) {
        return options;
    }
    /**
     * @param {FetchResponse} response
     * @returns {FetchResponse}
     */
    afterRequest(response) {
        return {
            url: response.url,
            status: 400,
            data: response.data,
            content: response.content,
            headers: response.headers,
        };
    }
}
export class InterceptorChangingResponse {
    constructor(fields) { }
    /**
     * @param {FetchOptionsInput} optionsInput
     * @returns {FetchOptions}
     */
    beforeRequest(optionsInput) {
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
    /**
     * @param {FetchResponse} response
     * @returns {FetchResponse}
     */
    afterRequest(response) {
        return {
            url: response.url,
            status: response.status,
            data: jsonToSerializedData('{"id": "123", "type": "user"}'),
            content: response.content,
            headers: response.headers,
        };
    }
}
test('testMakeRequestJsonCRUD', async function testMakeRequestJsonCRUD() {
    const newFolderName = getUuid();
    const requestBodyPost = ''.concat('{"name": "', newFolderName, '", "parent": { "id": "0"}}');
    const createFolderResponse = await client.makeRequest({
        method: 'post',
        url: 'https://api.box.com/2.0/folders',
        data: jsonToSerializedData(requestBodyPost),
    });
    if (!(createFolderResponse.status == 201)) {
        throw new Error('Assertion failed');
    }
    const createdFolder = createFolderResponse.data;
    if (!(getSdValueByKey(createdFolder, 'name') == newFolderName)) {
        throw new Error('Assertion failed');
    }
    const updatedName = getUuid();
    const requestBodyPut = ''.concat('{"name": "', updatedName, '"}');
    const updateFolderResponse = await client.makeRequest({
        method: 'put',
        url: ''.concat('https://api.box.com/2.0/folders/', getSdValueByKey(createdFolder, 'id')),
        data: jsonToSerializedData(requestBodyPut),
    });
    if (!(updateFolderResponse.status == 200)) {
        throw new Error('Assertion failed');
    }
    const updatedFolder = updateFolderResponse.data;
    if (!(getSdValueByKey(updatedFolder, 'name') == updatedName)) {
        throw new Error('Assertion failed');
    }
    if (!(getSdValueByKey(updatedFolder, 'id') ==
        getSdValueByKey(createdFolder, 'id'))) {
        throw new Error('Assertion failed');
    }
    const getFolderResponse = await client.makeRequest({
        url: ''.concat('https://api.box.com/2.0/folders/', getSdValueByKey(createdFolder, 'id')),
        method: 'GET',
    });
    if (!(getFolderResponse.status == 200)) {
        throw new Error('Assertion failed');
    }
    const receivedFolder = getFolderResponse.data;
    if (!(getSdValueByKey(receivedFolder, 'name') == updatedName)) {
        throw new Error('Assertion failed');
    }
    if (!(getSdValueByKey(receivedFolder, 'id') ==
        getSdValueByKey(updatedFolder, 'id'))) {
        throw new Error('Assertion failed');
    }
    const deleteFolderResponse = await client.makeRequest({
        url: ''.concat('https://api.box.com/2.0/folders/', getSdValueByKey(receivedFolder, 'id')),
        method: 'DELETE',
    });
    if (!(deleteFolderResponse.status == 204)) {
        throw new Error('Assertion failed');
    }
});
test('testMakeRequestMultipart', async function testMakeRequestMultipart() {
    const newFolderName = getUuid();
    const newFolder = await client.folders.createFolder({
        name: newFolderName,
        parent: { id: '0' },
    });
    const newFolderId = newFolder.id;
    const newFileName = ''.concat(getUuid(), '.pdf');
    const fileContentStream = generateByteStream(1024 * 1024);
    const multipartAttributes = ''.concat('{"name": "', newFileName, '", "parent": { "id":', newFolderId, '}}');
    const uploadFileResponse = await client.makeRequest({
        method: 'POST',
        url: 'https://upload.box.com/api/2.0/files/content',
        contentType: 'multipart/form-data',
        multipartData: [
            {
                partName: 'attributes',
                data: jsonToSerializedData(multipartAttributes),
            },
            {
                partName: 'file',
                fileStream: fileContentStream,
            },
        ],
    });
    if (!(uploadFileResponse.status == 201)) {
        throw new Error('Assertion failed');
    }
    await client.folders.deleteFolderById(newFolderId, {
        queryParams: { recursive: true },
    });
});
test('testMakeRequestBinaryFormat', async function testMakeRequestBinaryFormat() {
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
    const downloadFileResponse = await client.makeRequest({
        method: 'GET',
        url: ''.concat('https://api.box.com/2.0/files/', uploadedFile.id, '/content'),
        responseFormat: 'binary',
    });
    if (!(downloadFileResponse.status == 200)) {
        throw new Error('Assertion failed');
    }
    if (!bufferEquals(await readByteStream(downloadFileResponse.content), fileBuffer)) {
        throw new Error('Assertion failed');
    }
    await client.files.deleteFileById(uploadedFile.id);
});
test('testWithAsUserHeader', async function testWithAsUserHeader() {
    const userName = getUuid();
    const createdUser = await client.users.createUser({
        name: userName,
        isPlatformAccessOnly: true,
    });
    const asUserClient = client.withAsUserHeader(createdUser.id);
    const adminUser = await client.users.getUserMe();
    if (!!(toString(adminUser.name) == userName)) {
        throw new Error('Assertion failed');
    }
    const appUser = await asUserClient.users.getUserMe();
    if (!(toString(appUser.name) == userName)) {
        throw new Error('Assertion failed');
    }
    await client.users.deleteUserById(createdUser.id);
});
test('testWithSuppressedNotifications', async function testWithSuppressedNotifications() {
    const newClient = client.withSuppressedNotifications();
    const user = await newClient.users.getUserMe();
    if (!!(user.id == '')) {
        throw new Error('Assertion failed');
    }
});
test('testWithExtraHeaders', async function testWithExtraHeaders() {
    const userName = getUuid();
    const createdUser = await client.users.createUser({
        name: userName,
        isPlatformAccessOnly: true,
    });
    const asUserClient = client.withExtraHeaders({
        ['As-User']: createdUser.id,
    });
    const adminUser = await client.users.getUserMe();
    if (!!(toString(adminUser.name) == userName)) {
        throw new Error('Assertion failed');
    }
    const appUser = await asUserClient.users.getUserMe();
    if (!(toString(appUser.name) == userName)) {
        throw new Error('Assertion failed');
    }
    await client.users.deleteUserById(createdUser.id);
});
test('testWithCustomBaseUrls', async function testWithCustomBaseUrls() {
    const newBaseUrls = new BaseUrls({
        baseUrl: 'https://box.com/',
        uploadUrl: 'https://box.com/',
        oauth2Url: 'https://box.com/',
    });
    const customBaseClient = client.withCustomBaseUrls(newBaseUrls);
    await expect(async () => {
        await customBaseClient.users.getUserMe();
    }).rejects.toThrow();
});
test('testWithInterceptors', async function testWithInterceptors() {
    const user = await client.users.getUserMe();
    if (!(user.role == void 0)) {
        throw new Error('Assertion failed');
    }
    const clientWithInterceptor = client.withInterceptors([
        new InterceptorAddingRoleToFields({}),
    ]);
    const newUser = await clientWithInterceptor.users.getUserMe();
    if (!!(newUser.role == void 0)) {
        throw new Error('Assertion failed');
    }
    const clientWithTwoInterceptors = clientWithInterceptor.withInterceptors([
        new InterceptorChangingResponse({}),
    ]);
    const superNewUser = await clientWithTwoInterceptors.users.getUserMe();
    if (!(superNewUser.id == '123')) {
        throw new Error('Assertion failed');
    }
});
test('testWithFailingInterceptors', async function testWithFailingInterceptors() {
    const user = await client.users.getUserMe();
    if (!!(user.id == void 0)) {
        throw new Error('Assertion failed');
    }
    const clientWithInterceptor = client.withInterceptors([
        new InterceptorThrowingError({}),
    ]);
    await expect(async () => {
        await clientWithInterceptor.users.getUserMe();
    }).rejects.toThrow();
});
//# sourceMappingURL=client.generated.test.js.map