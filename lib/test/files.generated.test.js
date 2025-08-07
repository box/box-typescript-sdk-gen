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
exports.uploadFile = uploadFile;
const files_generated_js_1 = require("../managers/files.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const utils_js_3 = require("../internal/utils.js");
const utils_js_4 = require("../internal/utils.js");
const utils_js_5 = require("../internal/utils.js");
const utils_js_6 = require("../internal/utils.js");
const utils_js_7 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const commons_generated_js_2 = require("./commons.generated.js");
exports.client = (0, commons_generated_js_2.getDefaultClient)();
function uploadFile(fileName, fileStream) {
    return __awaiter(this, void 0, void 0, function* () {
        const uploadedFiles = yield exports.client.uploads.uploadFile({
            attributes: {
                name: fileName,
                parent: { id: '0' },
            },
            file: fileStream,
        });
        return uploadedFiles.entries[0];
    });
}
test('testGetFileThumbnailUrl', function testGetFileThumbnailUrl() {
    return __awaiter(this, void 0, void 0, function* () {
        const thumbnailFileName = (0, utils_js_1.getUuid)();
        const thumbnailContentStream = (0, utils_js_2.generateByteStream)(1024 * 1024);
        const thumbnailFile = yield uploadFile(thumbnailFileName, thumbnailContentStream);
        const downloadUrl = yield exports.client.files.getFileThumbnailUrl(thumbnailFile.id, 'png');
        if (!!(downloadUrl == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!downloadUrl.includes('https://')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.files.deleteFileById(thumbnailFile.id);
    });
});
test('testGetFileThumbnail', function testGetFileThumbnail() {
    return __awaiter(this, void 0, void 0, function* () {
        const thumbnailFileName = (0, utils_js_1.getUuid)();
        const thumbnailBuffer = (0, utils_js_5.generateByteBuffer)(1024 * 1024);
        const thumbnailContentStream = (0, utils_js_4.generateByteStreamFromBuffer)(thumbnailBuffer);
        const thumbnailFile = yield uploadFile(thumbnailFileName, thumbnailContentStream);
        const thumbnail = yield exports.client.files.getFileThumbnailById(thumbnailFile.id, 'png');
        if (!!((0, utils_js_6.bufferEquals)(yield (0, utils_js_3.readByteStream)(thumbnail), thumbnailBuffer) == true)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.files.deleteFileById(thumbnailFile.id);
    });
});
test('testGetFileFullExtraFields', function testGetFileFullExtraFields() {
    return __awaiter(this, void 0, void 0, function* () {
        const newFileName = (0, utils_js_1.getUuid)();
        const fileStream = (0, utils_js_2.generateByteStream)(1024 * 1024);
        const uploadedFile = yield uploadFile(newFileName, fileStream);
        const file = yield exports.client.files.getFileById(uploadedFile.id, {
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
        yield exports.client.files.deleteFileById(file.id);
    });
});
test('testCreateGetAndDeleteFile', function testCreateGetAndDeleteFile() {
    return __awaiter(this, void 0, void 0, function* () {
        const newFileName = (0, utils_js_1.getUuid)();
        const updatedContentStream = (0, utils_js_2.generateByteStream)(1024 * 1024);
        const uploadedFile = yield uploadFile(newFileName, updatedContentStream);
        const file = yield exports.client.files.getFileById(uploadedFile.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.files.getFileById(uploadedFile.id, {
                queryParams: { fields: ['name'] },
                headers: new files_generated_js_1.GetFileByIdHeaders({
                    extraHeaders: { ['if-none-match']: file.etag },
                }),
            });
        })).rejects.toThrow();
        if (!(file.name == newFileName)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.files.deleteFileById(uploadedFile.id);
        const trashedFile = yield exports.client.trashedFiles.getTrashedFileById(uploadedFile.id);
        if (!(file.id == trashedFile.id)) {
            throw new Error('Assertion failed');
        }
    });
});
test('testUpdateFile', function testUpdateFile() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileToUpdate = yield (0, commons_generated_js_1.uploadNewFile)();
        const updatedName = (0, utils_js_1.getUuid)();
        const updatedFile = yield exports.client.files.updateFileById(fileToUpdate.id, {
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
        yield exports.client.files.deleteFileById(updatedFile.id);
    });
});
test('testFileLock', function testFileLock() {
    return __awaiter(this, void 0, void 0, function* () {
        const file = yield (0, commons_generated_js_1.uploadNewFile)();
        const fileWithLock = yield exports.client.files.updateFileById(file.id, {
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
        const fileWithoutLock = yield exports.client.files.updateFileById(file.id, {
            requestBody: { lock: (0, utils_js_7.createNull)() },
            queryParams: { fields: ['lock'] },
        });
        if (!(fileWithoutLock.lock == void 0)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.files.deleteFileById(file.id);
    });
});
test('testCopyFile', function testCopyFile() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileOrigin = yield (0, commons_generated_js_1.uploadNewFile)();
        const copiedFileName = (0, utils_js_1.getUuid)();
        const copiedFile = yield exports.client.files.copyFile(fileOrigin.id, {
            parent: { id: '0' },
            name: copiedFileName,
        });
        if (!(copiedFile.parent.id == '0')) {
            throw new Error('Assertion failed');
        }
        if (!(copiedFile.name == copiedFileName)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.files.deleteFileById(fileOrigin.id);
        yield exports.client.files.deleteFileById(copiedFile.id);
    });
});
//# sourceMappingURL=files.generated.test.js.map