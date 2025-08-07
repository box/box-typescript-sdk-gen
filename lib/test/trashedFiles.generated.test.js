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
const commons_generated_js_1 = require("./commons.generated.js");
const utils_js_3 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testTrashedFiles', function testTrashedFiles() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileSize = 1024 * 1024;
        const fileName = (0, utils_js_1.getUuid)();
        const fileByteStream = (0, utils_js_2.generateByteStream)(fileSize);
        const files = yield exports.client.uploads.uploadFile({
            attributes: {
                name: fileName,
                parent: { id: '0' },
            },
            file: fileByteStream,
        });
        const file = files.entries[0];
        yield exports.client.files.deleteFileById(file.id);
        const fromTrash = yield exports.client.trashedFiles.getTrashedFileById(file.id);
        if (!(fromTrash.id == file.id)) {
            throw new Error('Assertion failed');
        }
        if (!(fromTrash.name == file.name)) {
            throw new Error('Assertion failed');
        }
        const fromApiAfterTrashed = yield exports.client.files.getFileById(file.id);
        if (!((0, utils_js_3.toString)(fromApiAfterTrashed.itemStatus) == 'trashed')) {
            throw new Error('Assertion failed');
        }
        const restoredFile = yield exports.client.trashedFiles.restoreFileFromTrash(file.id);
        const fromApiAfterRestore = yield exports.client.files.getFileById(file.id);
        if (!(restoredFile.id == fromApiAfterRestore.id)) {
            throw new Error('Assertion failed');
        }
        if (!(restoredFile.name == fromApiAfterRestore.name)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_3.toString)(fromApiAfterRestore.itemStatus) == 'active')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.files.deleteFileById(file.id);
        yield exports.client.trashedFiles.deleteTrashedFileById(file.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.trashedFiles.getTrashedFileById(file.id);
        })).rejects.toThrow();
    });
});
//# sourceMappingURL=trashedFiles.generated.test.js.map