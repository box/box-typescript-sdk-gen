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
const commons_generated_js_2 = require("./commons.generated.js");
const utils_js_3 = require("../internal/utils.js");
const utils_js_4 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testSharedLinksFolders', function testSharedLinksFolders() {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = yield exports.client.folders.createFolder({
            name: (0, utils_js_1.getUuid)(),
            parent: { id: '0' },
        });
        yield exports.client.sharedLinksFolders.addShareLinkToFolder(folder.id, {
            sharedLink: {
                access: 'open',
                password: 'Secret123@',
            },
        }, { fields: 'shared_link' });
        const folderFromApi = yield exports.client.sharedLinksFolders.getSharedLinkForFolder(folder.id, {
            fields: 'shared_link',
        });
        if (!((0, utils_js_4.toString)(folderFromApi.sharedLink.access) == 'open')) {
            throw new Error('Assertion failed');
        }
        const userId = (0, utils_js_2.getEnvVar)('USER_ID');
        const userClient = (0, commons_generated_js_2.getDefaultClientWithUserSubject)(userId);
        const folderFromSharedLinkPassword = yield userClient.sharedLinksFolders.findFolderForSharedLink({}, {
            boxapi: ''.concat('shared_link=', folderFromApi.sharedLink.url, '&shared_link_password=Secret123@'),
        });
        if (!(folder.id == folderFromSharedLinkPassword.id)) {
            throw new Error('Assertion failed');
        }
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield userClient.sharedLinksFolders.findFolderForSharedLink({}, {
                boxapi: ''.concat('shared_link=', folderFromApi.sharedLink.url, '&shared_link_password=incorrectPassword'),
            });
        })).rejects.toThrow();
        const updatedFolder = yield exports.client.sharedLinksFolders.updateSharedLinkOnFolder(folder.id, {
            sharedLink: {
                access: 'collaborators',
            },
        }, { fields: 'shared_link' });
        if (!((0, utils_js_4.toString)(updatedFolder.sharedLink.access) == 'collaborators')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.sharedLinksFolders.removeSharedLinkFromFolder(folder.id, {
            sharedLink: (0, utils_js_3.createNull)(),
        }, { fields: 'shared_link' });
        const folderFromApiAfterRemove = yield exports.client.sharedLinksFolders.getSharedLinkForFolder(folder.id, {
            fields: 'shared_link',
        });
        if (!(folderFromApiAfterRemove.sharedLink == void 0)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.folders.deleteFolderById(folder.id);
    });
});
//# sourceMappingURL=sharedLinksFolders.generated.test.js.map