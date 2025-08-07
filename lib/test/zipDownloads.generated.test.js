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
const commons_generated_js_1 = require("./commons.generated.js");
const commons_generated_js_2 = require("./commons.generated.js");
const commons_generated_js_3 = require("./commons.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const utils_js_3 = require("../internal/utils.js");
const utils_js_4 = require("../internal/utils.js");
const utils_js_5 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testZipDownload', function testZipDownload() {
    return __awaiter(this, void 0, void 0, function* () {
        const file1 = yield (0, commons_generated_js_2.uploadNewFile)();
        const file2 = yield (0, commons_generated_js_2.uploadNewFile)();
        const folder1 = yield (0, commons_generated_js_3.createNewFolder)();
        const zipStream = yield exports.client.zipDownloads.downloadZip({
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
        if (!((0, utils_js_1.bufferEquals)(yield (0, utils_js_2.readByteStream)(zipStream), (0, utils_js_3.generateByteBuffer)(10)) ==
            false)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.files.deleteFileById(file1.id);
        yield exports.client.files.deleteFileById(file2.id);
        yield exports.client.folders.deleteFolderById(folder1.id);
    });
});
test('testManualZipDownloadAndCheckStatus', function testManualZipDownloadAndCheckStatus() {
    return __awaiter(this, void 0, void 0, function* () {
        const file1 = yield (0, commons_generated_js_2.uploadNewFile)();
        const file2 = yield (0, commons_generated_js_2.uploadNewFile)();
        const folder1 = yield (0, commons_generated_js_3.createNewFolder)();
        const zipDownload = yield exports.client.zipDownloads.createZipDownload({
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
        if (!!((0, utils_js_4.dateTimeToString)(zipDownload.expiresAt) == '')) {
            throw new Error('Assertion failed');
        }
        const zipStream = yield exports.client.zipDownloads.getZipDownloadContent(zipDownload.downloadUrl);
        if (!((0, utils_js_1.bufferEquals)(yield (0, utils_js_2.readByteStream)(zipStream), (0, utils_js_3.generateByteBuffer)(10)) ==
            false)) {
            throw new Error('Assertion failed');
        }
        const zipDownloadStatus = yield exports.client.zipDownloads.getZipDownloadStatus(zipDownload.statusUrl);
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
        if (!!((0, utils_js_5.toString)(zipDownloadStatus.state) == 'failed')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.files.deleteFileById(file1.id);
        yield exports.client.files.deleteFileById(file2.id);
        yield exports.client.folders.deleteFolderById(folder1.id);
    });
});
//# sourceMappingURL=zipDownloads.generated.test.js.map