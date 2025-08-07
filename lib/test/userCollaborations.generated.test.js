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
const commons_generated_js_2 = require("./commons.generated.js");
const utils_js_2 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testUserCollaborations', function testUserCollaborations() {
    return __awaiter(this, void 0, void 0, function* () {
        const userName = (0, utils_js_1.getUuid)();
        const userLogin = ''.concat((0, utils_js_1.getUuid)(), '@gmail.com');
        const user = yield exports.client.users.createUser({
            name: userName,
            login: userLogin,
            isPlatformAccessOnly: true,
        });
        const folder = yield (0, commons_generated_js_2.createNewFolder)();
        const collaboration = yield exports.client.userCollaborations.createCollaboration({
            item: {
                type: 'folder',
                id: folder.id,
            },
            accessibleBy: {
                type: 'user',
                id: user.id,
            },
            role: 'editor',
        });
        if (!((0, utils_js_2.toString)(collaboration.role) == 'editor')) {
            throw new Error('Assertion failed');
        }
        const collaborationId = collaboration.id;
        const collaborationFromApi = yield exports.client.userCollaborations.getCollaborationById(collaborationId);
        if (!(collaborationId == collaborationFromApi.id)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(collaborationFromApi.status) == 'accepted')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(collaborationFromApi.type) == 'collaboration')) {
            throw new Error('Assertion failed');
        }
        if (!(collaborationFromApi.inviteEmail == void 0)) {
            throw new Error('Assertion failed');
        }
        const updatedCollaboration = yield exports.client.userCollaborations.updateCollaborationById(collaborationId, {
            role: 'viewer',
        });
        if (!((0, utils_js_2.toString)(updatedCollaboration.role) == 'viewer')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.userCollaborations.deleteCollaborationById(collaborationId);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.userCollaborations.getCollaborationById(collaborationId);
        })).rejects.toThrow();
        yield exports.client.folders.deleteFolderById(folder.id);
        yield exports.client.users.deleteUserById(user.id);
    });
});
test('testConvertingUserCollaborationToOwnership', function testConvertingUserCollaborationToOwnership() {
    return __awaiter(this, void 0, void 0, function* () {
        const userName = (0, utils_js_1.getUuid)();
        const userLogin = ''.concat((0, utils_js_1.getUuid)(), '@gmail.com');
        const user = yield exports.client.users.createUser({
            name: userName,
            login: userLogin,
            isPlatformAccessOnly: true,
        });
        const folder = yield (0, commons_generated_js_2.createNewFolder)();
        const collaboration = yield exports.client.userCollaborations.createCollaboration({
            item: {
                type: 'folder',
                id: folder.id,
            },
            accessibleBy: {
                type: 'user',
                id: user.id,
            },
            role: 'editor',
        });
        if (!((0, utils_js_2.toString)(collaboration.role) == 'editor')) {
            throw new Error('Assertion failed');
        }
        const ownerCollaboration = yield exports.client.userCollaborations.updateCollaborationById(collaboration.id, {
            role: 'owner',
        });
        if (!(ownerCollaboration == void 0)) {
            throw new Error('Assertion failed');
        }
        const folderCollaborations = yield exports.client.listCollaborations.getFolderCollaborations(folder.id);
        const folderCollaboration = folderCollaborations.entries[0];
        yield exports.client.userCollaborations.deleteCollaborationById(folderCollaboration.id);
        const userClient = exports.client.withAsUserHeader(user.id);
        yield userClient.folders.deleteFolderById(folder.id);
        yield userClient.trashedFolders.deleteTrashedFolderById(folder.id);
        yield exports.client.users.deleteUserById(user.id);
    });
});
test('testExternalUserCollaborations', function testExternalUserCollaborations() {
    return __awaiter(this, void 0, void 0, function* () {
        const userName = (0, utils_js_1.getUuid)();
        const userLogin = ''.concat((0, utils_js_1.getUuid)(), '@boxdemo.com');
        const folder = yield (0, commons_generated_js_2.createNewFolder)();
        const collaboration = yield exports.client.userCollaborations.createCollaboration({
            item: {
                type: 'folder',
                id: folder.id,
            },
            accessibleBy: {
                type: 'user',
                login: userLogin,
            },
            role: 'editor',
        });
        if (!((0, utils_js_2.toString)(collaboration.role) == 'editor')) {
            throw new Error('Assertion failed');
        }
        const collaborationId = collaboration.id;
        const collaborationFromApi = yield exports.client.userCollaborations.getCollaborationById(collaborationId);
        if (!(collaborationId == collaborationFromApi.id)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(collaborationFromApi.status) == 'pending')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(collaborationFromApi.type) == 'collaboration')) {
            throw new Error('Assertion failed');
        }
        if (!(collaborationFromApi.inviteEmail == userLogin)) {
            throw new Error('Assertion failed');
        }
        const updatedCollaboration = yield exports.client.userCollaborations.updateCollaborationById(collaborationId, {
            role: 'viewer',
        });
        if (!((0, utils_js_2.toString)(updatedCollaboration.role) == 'viewer')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.userCollaborations.deleteCollaborationById(collaborationId);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.userCollaborations.getCollaborationById(collaborationId);
        })).rejects.toThrow();
        yield exports.client.folders.deleteFolderById(folder.id);
    });
});
//# sourceMappingURL=userCollaborations.generated.test.js.map