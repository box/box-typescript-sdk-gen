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
const uploads_generated_js_1 = require("../managers/uploads.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const utils_js_3 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testUploadFileAndFileVersion', function testUploadFileAndFileVersion() {
    return __awaiter(this, void 0, void 0, function* () {
        const newFileName = (0, utils_js_1.getUuid)();
        const fileContentStream = (0, utils_js_2.generateByteStream)(1024 * 1024);
        const uploadedFiles = yield exports.client.uploads.uploadFile({
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
        const newFileVersionName = (0, utils_js_1.getUuid)();
        const newFileContentStream = (0, utils_js_2.generateByteStream)(1024 * 1024);
        const uploadedFilesVersion = yield exports.client.uploads.uploadFileVersion(uploadedFile.id, {
            attributes: {
                name: newFileVersionName,
            },
            file: newFileContentStream,
        });
        const newFileVersion = uploadedFilesVersion.entries[0];
        if (!(newFileVersion.name == newFileVersionName)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.files.deleteFileById(newFileVersion.id);
    });
});
test('testRequestCancellation', function testRequestCancellation() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileSize = 1024 * 1024;
        const fileName = (0, utils_js_1.getUuid)();
        const fileByteStream = (0, utils_js_2.generateByteStream)(fileSize);
        const cancellationToken = (0, utils_js_3.createTokenAndCancelAfter)(1);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.uploads.uploadFile({
                attributes: {
                    name: fileName,
                    parent: {
                        id: '0',
                    },
                },
                file: fileByteStream,
            }, {
                queryParams: {},
                headers: new uploads_generated_js_1.UploadFileHeaders({}),
                cancellationToken: cancellationToken,
            });
        })).rejects.toThrow();
    });
});
test('testUploadFileWithPreflightCheck', function testUploadFileWithPreflightCheck() {
    return __awaiter(this, void 0, void 0, function* () {
        const newFileName = (0, utils_js_1.getUuid)();
        const fileContentStream = (0, utils_js_2.generateByteStream)(1024 * 1024);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.uploads.uploadWithPreflightCheck({
                attributes: {
                    name: newFileName,
                    size: -1,
                    parent: {
                        id: '0',
                    },
                },
                file: fileContentStream,
            });
        })).rejects.toThrow();
        const uploadFilesWithPreflight = yield exports.client.uploads.uploadWithPreflightCheck({
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
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.uploads.uploadWithPreflightCheck({
                attributes: {
                    name: newFileName,
                    size: 1024 * 1024,
                    parent: {
                        id: '0',
                    },
                },
                file: fileContentStream,
            });
        })).rejects.toThrow();
        yield exports.client.files.deleteFileById(file.id);
    });
});
test('testPreflightCheck', function testPreflightCheck() {
    return __awaiter(this, void 0, void 0, function* () {
        const newFileName = (0, utils_js_1.getUuid)();
        const preflightCheckResult = yield exports.client.uploads.preflightFileUploadCheck({
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
});
//# sourceMappingURL=uploads.generated.test.js.map