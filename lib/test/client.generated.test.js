"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterceptorChangingResponse = exports.InterceptorThrowingError = exports.InterceptorAddingRoleToFields = exports.client = void 0;
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const utils_js_3 = require("../internal/utils.js");
const utils_js_4 = require("../internal/utils.js");
const utils_js_5 = require("../internal/utils.js");
const utils_js_6 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const baseUrls_generated_js_1 = require("../networking/baseUrls.generated.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const utils_js_7 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
class InterceptorAddingRoleToFields {
    constructor(fields) { }
    /**
     * @param {FetchOptions} options
     * @returns {FetchOptions}
     */
    beforeRequest(options) {
        return new fetchOptions_generated_js_1.FetchOptions({
            url: options.url,
            method: options.method,
            headers: options.headers,
            params: Object.assign(Object.assign({}, options.params), { ['fields']: 'role' }),
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
exports.InterceptorAddingRoleToFields = InterceptorAddingRoleToFields;
class InterceptorThrowingError {
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
exports.InterceptorThrowingError = InterceptorThrowingError;
class InterceptorChangingResponse {
    constructor(fields) { }
    /**
     * @param {FetchOptionsInput} optionsInput
     * @returns {FetchOptions}
     */
    beforeRequest(optionsInput) {
        const options = new fetchOptions_generated_js_1.FetchOptions({
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
            data: (0, json_js_1.jsonToSerializedData)('{"id": "123", "type": "user"}'),
            content: response.content,
            headers: response.headers,
        };
    }
}
exports.InterceptorChangingResponse = InterceptorChangingResponse;
test('testMakeRequestJsonCRUD', function testMakeRequestJsonCRUD() {
    return __awaiter(this, void 0, void 0, function* () {
        const newFolderName = (0, utils_js_1.getUuid)();
        const requestBodyPost = ''.concat('{"name": "', newFolderName, '", "parent": { "id": "0"}}');
        const createFolderResponse = yield exports.client.makeRequest({
            method: 'post',
            url: 'https://api.box.com/2.0/folders',
            data: (0, json_js_1.jsonToSerializedData)(requestBodyPost),
        });
        if (!(createFolderResponse.status == 201)) {
            throw new Error('Assertion failed');
        }
        const createdFolder = createFolderResponse.data;
        if (!((0, json_js_2.getSdValueByKey)(createdFolder, 'name') == newFolderName)) {
            throw new Error('Assertion failed');
        }
        const updatedName = (0, utils_js_1.getUuid)();
        const requestBodyPut = ''.concat('{"name": "', updatedName, '"}');
        const updateFolderResponse = yield exports.client.makeRequest({
            method: 'put',
            url: ''.concat('https://api.box.com/2.0/folders/', (0, json_js_2.getSdValueByKey)(createdFolder, 'id')),
            data: (0, json_js_1.jsonToSerializedData)(requestBodyPut),
        });
        if (!(updateFolderResponse.status == 200)) {
            throw new Error('Assertion failed');
        }
        const updatedFolder = updateFolderResponse.data;
        if (!((0, json_js_2.getSdValueByKey)(updatedFolder, 'name') == updatedName)) {
            throw new Error('Assertion failed');
        }
        if (!((0, json_js_2.getSdValueByKey)(updatedFolder, 'id') ==
            (0, json_js_2.getSdValueByKey)(createdFolder, 'id'))) {
            throw new Error('Assertion failed');
        }
        const getFolderResponse = yield exports.client.makeRequest({
            url: ''.concat('https://api.box.com/2.0/folders/', (0, json_js_2.getSdValueByKey)(createdFolder, 'id')),
            method: 'GET',
        });
        if (!(getFolderResponse.status == 200)) {
            throw new Error('Assertion failed');
        }
        const receivedFolder = getFolderResponse.data;
        if (!((0, json_js_2.getSdValueByKey)(receivedFolder, 'name') == updatedName)) {
            throw new Error('Assertion failed');
        }
        if (!((0, json_js_2.getSdValueByKey)(receivedFolder, 'id') ==
            (0, json_js_2.getSdValueByKey)(updatedFolder, 'id'))) {
            throw new Error('Assertion failed');
        }
        const deleteFolderResponse = yield exports.client.makeRequest({
            url: ''.concat('https://api.box.com/2.0/folders/', (0, json_js_2.getSdValueByKey)(receivedFolder, 'id')),
            method: 'DELETE',
        });
        if (!(deleteFolderResponse.status == 204)) {
            throw new Error('Assertion failed');
        }
    });
});
test('testMakeRequestMultipart', function testMakeRequestMultipart() {
    return __awaiter(this, void 0, void 0, function* () {
        const newFolderName = (0, utils_js_1.getUuid)();
        const newFolder = yield exports.client.folders.createFolder({
            name: newFolderName,
            parent: { id: '0' },
        });
        const newFolderId = newFolder.id;
        const newFileName = ''.concat((0, utils_js_1.getUuid)(), '.pdf');
        const fileContentStream = (0, utils_js_2.generateByteStream)(1024 * 1024);
        const multipartAttributes = ''.concat('{"name": "', newFileName, '", "parent": { "id":', newFolderId, '}}');
        const uploadFileResponse = yield exports.client.makeRequest({
            method: 'POST',
            url: 'https://upload.box.com/api/2.0/files/content',
            contentType: 'multipart/form-data',
            multipartData: [
                {
                    partName: 'attributes',
                    data: (0, json_js_1.jsonToSerializedData)(multipartAttributes),
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
        yield exports.client.folders.deleteFolderById(newFolderId, {
            queryParams: { recursive: true },
        });
    });
});
test('testMakeRequestBinaryFormat', function testMakeRequestBinaryFormat() {
    return __awaiter(this, void 0, void 0, function* () {
        const newFileName = (0, utils_js_1.getUuid)();
        const fileBuffer = (0, utils_js_4.generateByteBuffer)(1024 * 1024);
        const fileContentStream = (0, utils_js_5.generateByteStreamFromBuffer)(fileBuffer);
        const uploadedFiles = yield exports.client.uploads.uploadFile({
            attributes: {
                name: newFileName,
                parent: { id: '0' },
            },
            file: fileContentStream,
        });
        const uploadedFile = uploadedFiles.entries[0];
        const downloadFileResponse = yield exports.client.makeRequest({
            method: 'GET',
            url: ''.concat('https://api.box.com/2.0/files/', uploadedFile.id, '/content'),
            responseFormat: 'binary',
        });
        if (!(downloadFileResponse.status == 200)) {
            throw new Error('Assertion failed');
        }
        if (!(0, utils_js_3.bufferEquals)(yield (0, utils_js_6.readByteStream)(downloadFileResponse.content), fileBuffer)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.files.deleteFileById(uploadedFile.id);
    });
});
test('testWithAsUserHeader', function testWithAsUserHeader() {
    return __awaiter(this, void 0, void 0, function* () {
        const userName = (0, utils_js_1.getUuid)();
        const createdUser = yield exports.client.users.createUser({
            name: userName,
            isPlatformAccessOnly: true,
        });
        const asUserClient = exports.client.withAsUserHeader(createdUser.id);
        const adminUser = yield exports.client.users.getUserMe();
        if (!!((0, utils_js_7.toString)(adminUser.name) == userName)) {
            throw new Error('Assertion failed');
        }
        const appUser = yield asUserClient.users.getUserMe();
        if (!((0, utils_js_7.toString)(appUser.name) == userName)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.users.deleteUserById(createdUser.id);
    });
});
test('testWithSuppressedNotifications', function testWithSuppressedNotifications() {
    return __awaiter(this, void 0, void 0, function* () {
        const newClient = exports.client.withSuppressedNotifications();
        const user = yield newClient.users.getUserMe();
        if (!!(user.id == '')) {
            throw new Error('Assertion failed');
        }
    });
});
test('testWithExtraHeaders', function testWithExtraHeaders() {
    return __awaiter(this, void 0, void 0, function* () {
        const userName = (0, utils_js_1.getUuid)();
        const createdUser = yield exports.client.users.createUser({
            name: userName,
            isPlatformAccessOnly: true,
        });
        const asUserClient = exports.client.withExtraHeaders({
            ['As-User']: createdUser.id,
        });
        const adminUser = yield exports.client.users.getUserMe();
        if (!!((0, utils_js_7.toString)(adminUser.name) == userName)) {
            throw new Error('Assertion failed');
        }
        const appUser = yield asUserClient.users.getUserMe();
        if (!((0, utils_js_7.toString)(appUser.name) == userName)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.users.deleteUserById(createdUser.id);
    });
});
test('testWithCustomBaseUrls', function testWithCustomBaseUrls() {
    return __awaiter(this, void 0, void 0, function* () {
        const newBaseUrls = new baseUrls_generated_js_1.BaseUrls({
            baseUrl: 'https://box.com/',
            uploadUrl: 'https://box.com/',
            oauth2Url: 'https://box.com/',
        });
        const customBaseClient = exports.client.withCustomBaseUrls(newBaseUrls);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield customBaseClient.users.getUserMe();
        })).rejects.toThrow();
    });
});
test('testWithInterceptors', function testWithInterceptors() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield exports.client.users.getUserMe();
        if (!(user.role == void 0)) {
            throw new Error('Assertion failed');
        }
        const clientWithInterceptor = exports.client.withInterceptors([
            new InterceptorAddingRoleToFields({}),
        ]);
        const newUser = yield clientWithInterceptor.users.getUserMe();
        if (!!(newUser.role == void 0)) {
            throw new Error('Assertion failed');
        }
        const clientWithTwoInterceptors = clientWithInterceptor.withInterceptors([
            new InterceptorChangingResponse({}),
        ]);
        const superNewUser = yield clientWithTwoInterceptors.users.getUserMe();
        if (!(superNewUser.id == '123')) {
            throw new Error('Assertion failed');
        }
    });
});
test('testWithFailingInterceptors', function testWithFailingInterceptors() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield exports.client.users.getUserMe();
        if (!!(user.id == void 0)) {
            throw new Error('Assertion failed');
        }
        const clientWithInterceptor = exports.client.withInterceptors([
            new InterceptorThrowingError({}),
        ]);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield clientWithInterceptor.users.getUserMe();
        })).rejects.toThrow();
    });
});
//# sourceMappingURL=client.generated.test.js.map