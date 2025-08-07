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
const utils_js_1 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const utils_js_2 = require("../internal/utils.js");
test('testGetCopyUpdateDeleteFileRequest', function testGetCopyUpdateDeleteFileRequest() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileRequestId = (0, utils_js_1.getEnvVar)('BOX_FILE_REQUEST_ID');
        const userId = (0, utils_js_1.getEnvVar)('USER_ID');
        const client = (0, commons_generated_js_1.getDefaultClientWithUserSubject)(userId);
        const fileRequest = yield client.fileRequests.getFileRequestById(fileRequestId);
        if (!(fileRequest.id == fileRequestId)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(fileRequest.type) == 'file_request')) {
            throw new Error('Assertion failed');
        }
        const copiedFileRequest = yield client.fileRequests.createFileRequestCopy(fileRequestId, {
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
        const updatedFileRequest = yield client.fileRequests.updateFileRequestById(copiedFileRequest.id, {
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
        yield client.fileRequests.deleteFileRequestById(updatedFileRequest.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.fileRequests.getFileRequestById(updatedFileRequest.id);
        })).rejects.toThrow();
    });
});
//# sourceMappingURL=fileRequests.generated.test.js.map