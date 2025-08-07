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
const utils_js_2 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const commons_generated_js_2 = require("./commons.generated.js");
const commons_generated_js_3 = require("./commons.generated.js");
const utils_js_3 = require("../internal/utils.js");
test('testListCollaborations', function testListCollaborations() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = (0, commons_generated_js_1.getDefaultClient)();
        const folder = yield (0, commons_generated_js_2.createNewFolder)();
        const file = yield (0, commons_generated_js_3.uploadNewFile)();
        const group = yield client.groups.createGroup({
            name: (0, utils_js_1.getUuid)(),
        });
        const groupCollaboration = yield client.userCollaborations.createCollaboration({
            item: {
                type: 'folder',
                id: folder.id,
            },
            accessibleBy: {
                type: 'group',
                id: group.id,
            },
            role: 'editor',
        });
        const fileCollaboration = yield client.userCollaborations.createCollaboration({
            item: {
                type: 'file',
                id: file.id,
            },
            accessibleBy: {
                type: 'user',
                id: (0, utils_js_2.getEnvVar)('USER_ID'),
            },
            role: 'editor',
        });
        if (!((0, utils_js_3.toString)(groupCollaboration.role) == 'editor')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_3.toString)(groupCollaboration.type) == 'collaboration')) {
            throw new Error('Assertion failed');
        }
        const fileCollaborations = yield client.listCollaborations.getFileCollaborations(file.id);
        if (!(fileCollaborations.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const folderCollaborations = yield client.listCollaborations.getFolderCollaborations(folder.id);
        if (!(folderCollaborations.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const pendingCollaborations = yield client.listCollaborations.getCollaborations({
            status: 'pending',
        });
        if (!(pendingCollaborations.entries.length >= 0)) {
            throw new Error('Assertion failed');
        }
        const groupCollaborations = yield client.listCollaborations.getGroupCollaborations(group.id);
        if (!(groupCollaborations.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        yield client.userCollaborations.deleteCollaborationById(groupCollaboration.id);
        yield client.files.deleteFileById(file.id);
        yield client.folders.deleteFolderById(folder.id);
        yield client.groups.deleteGroupById(group.id);
    });
});
//# sourceMappingURL=listCollaborations.generated.test.js.map