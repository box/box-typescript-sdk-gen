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
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testFolderLocks', function testFolderLocks() {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = yield (0, commons_generated_js_2.createNewFolder)();
        const folderLocks = yield exports.client.folderLocks.getFolderLocks({
            folderId: folder.id,
        });
        if (!(folderLocks.entries.length == 0)) {
            throw new Error('Assertion failed');
        }
        const folderLock = yield exports.client.folderLocks.createFolderLock({
            folder: {
                id: folder.id,
                type: 'folder',
            },
            lockedOperations: {
                move: true,
                delete: true,
            },
        });
        if (!(folderLock.folder.id == folder.id)) {
            throw new Error('Assertion failed');
        }
        if (!(folderLock.lockedOperations.move == true)) {
            throw new Error('Assertion failed');
        }
        if (!(folderLock.lockedOperations.delete == true)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.folderLocks.deleteFolderLockById(folderLock.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.folderLocks.deleteFolderLockById(folderLock.id);
        })).rejects.toThrow();
        const newFolderLocks = yield exports.client.folderLocks.getFolderLocks({
            folderId: folder.id,
        });
        if (!(newFolderLocks.entries.length == 0)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.folders.deleteFolderById(folder.id);
    });
});
//# sourceMappingURL=folderLocks.generated.test.js.map