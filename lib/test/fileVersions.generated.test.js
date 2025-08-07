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
const commons_generated_js_1 = require("./commons.generated.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testCreateListGetPromoteFileVersion', function testCreateListGetPromoteFileVersion() {
    return __awaiter(this, void 0, void 0, function* () {
        const oldName = (0, utils_js_1.getUuid)();
        const newName = (0, utils_js_1.getUuid)();
        const files = yield exports.client.uploads.uploadFile({
            attributes: {
                name: oldName,
                parent: { id: '0' },
            },
            file: (0, utils_js_2.generateByteStream)(10),
        });
        const file = files.entries[0];
        if (!(file.name == oldName)) {
            throw new Error('Assertion failed');
        }
        if (!(file.size == 10)) {
            throw new Error('Assertion failed');
        }
        const newFiles = yield exports.client.uploads.uploadFileVersion(file.id, {
            attributes: {
                name: newName,
            },
            file: (0, utils_js_2.generateByteStream)(20),
        });
        const newFile = newFiles.entries[0];
        if (!(newFile.name == newName)) {
            throw new Error('Assertion failed');
        }
        if (!(newFile.size == 20)) {
            throw new Error('Assertion failed');
        }
        const fileVersions = yield exports.client.fileVersions.getFileVersions(file.id);
        if (!(fileVersions.totalCount == 1)) {
            throw new Error('Assertion failed');
        }
        const fileVersion = yield exports.client.fileVersions.getFileVersionById(file.id, fileVersions.entries[0].id);
        if (!(fileVersion.id == fileVersions.entries[0].id)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.fileVersions.promoteFileVersion(file.id, {
            requestBody: {
                id: fileVersions.entries[0].id,
                type: 'file_version',
            },
        });
        const fileWithPromotedVersion = yield exports.client.files.getFileById(file.id);
        if (!(fileWithPromotedVersion.name == oldName)) {
            throw new Error('Assertion failed');
        }
        if (!(fileWithPromotedVersion.size == 10)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.fileVersions.deleteFileVersionById(file.id, fileVersion.id);
        yield exports.client.files.deleteFileById(file.id);
    });
});
test('testRemoveAndRestoreFileVersion', function testRemoveAndRestoreFileVersion() {
    return __awaiter(this, void 0, void 0, function* () {
        const oldName = (0, utils_js_1.getUuid)();
        const newName = (0, utils_js_1.getUuid)();
        const files = yield exports.client.uploads.uploadFile({
            attributes: {
                name: oldName,
                parent: { id: '0' },
            },
            file: (0, utils_js_2.generateByteStream)(10),
        });
        const file = files.entries[0];
        yield exports.client.uploads.uploadFileVersion(file.id, {
            attributes: {
                name: newName,
            },
            file: (0, utils_js_2.generateByteStream)(20),
        });
        const fileVersions = yield exports.client.fileVersions.getFileVersions(file.id);
        if (!(fileVersions.totalCount == 1)) {
            throw new Error('Assertion failed');
        }
        const fileVersion = yield exports.client.fileVersions.getFileVersionById(file.id, fileVersions.entries[0].id, {
            queryParams: {
                fields: ['trashed_at', 'trashed_by', 'restored_at', 'restored_by'],
            },
        });
        if (!(fileVersion.trashedAt == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!(fileVersion.trashedBy == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!(fileVersion.restoredAt == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!(fileVersion.restoredBy == void 0)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.fileVersions.deleteFileVersionById(file.id, fileVersion.id);
        const deletedFileVersion = yield exports.client.fileVersions.getFileVersionById(file.id, fileVersions.entries[0].id, {
            queryParams: {
                fields: ['trashed_at', 'trashed_by', 'restored_at', 'restored_by'],
            },
        });
        if (!!(deletedFileVersion.trashedAt == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!!(deletedFileVersion.trashedBy == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!(deletedFileVersion.restoredAt == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!(deletedFileVersion.restoredBy == void 0)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.fileVersions.updateFileVersionById(file.id, fileVersion.id, {
            requestBody: {
                trashedAt: (0, utils_js_3.createNull)(),
            },
        });
        const restoredFileVersion = yield exports.client.fileVersions.getFileVersionById(file.id, fileVersions.entries[0].id, {
            queryParams: {
                fields: ['trashed_at', 'trashed_by', 'restored_at', 'restored_by'],
            },
        });
        if (!(restoredFileVersion.trashedAt == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!(restoredFileVersion.trashedBy == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!!(restoredFileVersion.restoredAt == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!!(restoredFileVersion.restoredBy == void 0)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.fileVersions.deleteFileVersionById(file.id, fileVersion.id);
        yield exports.client.files.deleteFileById(file.id);
    });
});
//# sourceMappingURL=fileVersions.generated.test.js.map