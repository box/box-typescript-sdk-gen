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
exports.client = void 0;
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const utils_js_3 = require("../internal/utils.js");
const utils_js_4 = require("../internal/utils.js");
const utils_js_5 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const commons_generated_js_2 = require("./commons.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('test_download_file', function test_download_file() {
    return __awaiter(this, void 0, void 0, function* () {
        const newFileName = (0, utils_js_1.getUuid)();
        const fileBuffer = (0, utils_js_2.generateByteBuffer)(1024 * 1024);
        const fileContentStream = (0, utils_js_3.generateByteStreamFromBuffer)(fileBuffer);
        const uploadedFiles = yield exports.client.uploads.uploadFile({
            attributes: {
                name: newFileName,
                parent: { id: '0' },
            },
            file: fileContentStream,
        });
        const uploadedFile = uploadedFiles.entries[0];
        const downloadedFileContent = yield exports.client.downloads.downloadFile(uploadedFile.id);
        if (!(0, utils_js_4.bufferEquals)(yield (0, utils_js_5.readByteStream)(downloadedFileContent), fileBuffer)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.files.deleteFileById(uploadedFile.id);
    });
});
test('test_get_download_url', function test_get_download_url() {
    return __awaiter(this, void 0, void 0, function* () {
        const uploadedFile = yield (0, commons_generated_js_2.uploadNewFile)();
        const downloadUrl = yield exports.client.downloads.getDownloadFileUrl(uploadedFile.id);
        if (!!(downloadUrl == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!downloadUrl.includes('https://')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.files.deleteFileById(uploadedFile.id);
    });
});
test('test_change_download_url_with_interceptor', function test_change_download_url_with_interceptor() {
    return __awaiter(this, void 0, void 0, function* () {
        const newFileName = (0, utils_js_1.getUuid)();
        const fileBuffer = (0, utils_js_2.generateByteBuffer)(1024 * 1024);
        const fileContentStream = (0, utils_js_3.generateByteStreamFromBuffer)(fileBuffer);
        const uploadedFiles = yield exports.client.uploads.uploadFile({
            attributes: {
                name: newFileName,
                parent: { id: '0' },
            },
            file: fileContentStream,
        });
        const uploadedFile = uploadedFiles.entries[0];
        const downloadedFileContent = yield exports.client.downloads.downloadFile(uploadedFile.id);
        if (!(0, utils_js_4.bufferEquals)(yield (0, utils_js_5.readByteStream)(downloadedFileContent), fileBuffer)) {
            throw new Error('Assertion failed');
        }
        function emptyBeforeRequest(optionsInput) {
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
        function afterRequest(response) {
            return {
                url: response.url,
                status: response.status,
                data: response.data,
                content: response.content,
                headers: Object.assign(Object.assign({}, response.headers), { ['location']: 'fake_location' }),
            };
        }
        const clientWithInterceptor = exports.client.withInterceptors([
            {
                beforeRequest: emptyBeforeRequest,
                afterRequest: afterRequest,
            },
        ]);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield clientWithInterceptor.downloads.downloadFile(uploadedFile.id);
        })).rejects.toThrow();
        yield exports.client.files.deleteFileById(uploadedFile.id);
    });
});
//# sourceMappingURL=downloads.generated.test.js.map