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
const commons_generated_js_1 = require("./commons.generated.js");
const utils_js_2 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('test_get_folder_info', function test_get_folder_info() {
    return __awaiter(this, void 0, void 0, function* () {
        const rootFolder = yield exports.client.folders.getFolderById('0');
        if (!(rootFolder.id == '0')) {
            throw new Error('Assertion failed');
        }
        if (!(rootFolder.name == 'All Files')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(rootFolder.type) == 'folder')) {
            throw new Error('Assertion failed');
        }
    });
});
test('test_get_folder_full_info_with_extra_fields', function test_get_folder_full_info_with_extra_fields() {
    return __awaiter(this, void 0, void 0, function* () {
        const rootFolder = yield exports.client.folders.getFolderById('0', {
            queryParams: {
                fields: ['has_collaborations', 'tags'],
            },
        });
        if (!(rootFolder.id == '0')) {
            throw new Error('Assertion failed');
        }
        if (!(rootFolder.hasCollaborations == false)) {
            throw new Error('Assertion failed');
        }
        const tagsLength = rootFolder.tags.length;
        if (!(tagsLength == 0)) {
            throw new Error('Assertion failed');
        }
    });
});
test('test_create_and_delete_folder', function test_create_and_delete_folder() {
    return __awaiter(this, void 0, void 0, function* () {
        const newFolderName = (0, utils_js_1.getUuid)();
        const newFolder = yield exports.client.folders.createFolder({
            name: newFolderName,
            parent: { id: '0' },
        });
        const createdFolder = yield exports.client.folders.getFolderById(newFolder.id);
        if (!(createdFolder.name == newFolderName)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.folders.deleteFolderById(newFolder.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.folders.getFolderById(newFolder.id);
        })).rejects.toThrow();
    });
});
test('test_update_folder', function test_update_folder() {
    return __awaiter(this, void 0, void 0, function* () {
        const folderToUpdateName = (0, utils_js_1.getUuid)();
        const folderToUpdate = yield exports.client.folders.createFolder({
            name: folderToUpdateName,
            parent: { id: '0' },
        });
        const updatedName = (0, utils_js_1.getUuid)();
        const updatedFolder = yield exports.client.folders.updateFolderById(folderToUpdate.id, {
            requestBody: {
                name: updatedName,
                description: 'Updated description',
            },
        });
        if (!(updatedFolder.name == updatedName)) {
            throw new Error('Assertion failed');
        }
        if (!(updatedFolder.description == 'Updated description')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.folders.deleteFolderById(updatedFolder.id);
    });
});
test('test_copy_move_folder_and_list_folder_items', function test_copy_move_folder_and_list_folder_items() {
    return __awaiter(this, void 0, void 0, function* () {
        const folderOriginName = (0, utils_js_1.getUuid)();
        const folderOrigin = yield exports.client.folders.createFolder({
            name: folderOriginName,
            parent: { id: '0' },
        });
        const copiedFolderName = (0, utils_js_1.getUuid)();
        const copiedFolder = yield exports.client.folders.copyFolder(folderOrigin.id, {
            parent: { id: '0' },
            name: copiedFolderName,
        });
        if (!(copiedFolder.parent.id == '0')) {
            throw new Error('Assertion failed');
        }
        const movedFolderName = (0, utils_js_1.getUuid)();
        const movedFolder = yield exports.client.folders.updateFolderById(copiedFolder.id, {
            requestBody: {
                parent: {
                    id: folderOrigin.id,
                },
                name: movedFolderName,
            },
        });
        if (!(movedFolder.parent.id == folderOrigin.id)) {
            throw new Error('Assertion failed');
        }
        const folderItems = yield exports.client.folders.getFolderItems(folderOrigin.id);
        if (!(folderItems.entries[0].id == movedFolder.id)) {
            throw new Error('Assertion failed');
        }
        if (!(folderItems.entries[0].name == movedFolderName)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.folders.deleteFolderById(movedFolder.id);
        yield exports.client.folders.deleteFolderById(folderOrigin.id);
    });
});
//# sourceMappingURL=folders.generated.test.js.map