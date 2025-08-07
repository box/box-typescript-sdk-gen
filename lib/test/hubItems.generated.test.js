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
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const folderReferenceV2025R0_generated_js_1 = require("../schemas/v2025R0/folderReferenceV2025R0.generated.js");
const utils_js_3 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_1.getDefaultClientWithUserSubject)((0, utils_js_1.getEnvVar)('USER_ID'));
test('testCreateDeleteGetHubItems', function testCreateDeleteGetHubItems() {
    return __awaiter(this, void 0, void 0, function* () {
        const hubTitle = (0, utils_js_2.getUuid)();
        const folder = yield exports.client.folders.createFolder({
            name: (0, utils_js_2.getUuid)(),
            parent: { id: '0' },
        });
        const createdHub = yield exports.client.hubs.createHubV2025R0({
            title: hubTitle,
        });
        const hubItemsBeforeAdd = yield exports.client.hubItems.getHubItemsV2025R0({
            hubId: createdHub.id,
        });
        if (!(hubItemsBeforeAdd.entries.length == 0)) {
            throw new Error('Assertion failed');
        }
        const addedHubItems = yield exports.client.hubItems.manageHubItemsV2025R0(createdHub.id, {
            operations: [
                {
                    action: 'add',
                    item: new folderReferenceV2025R0_generated_js_1.FolderReferenceV2025R0({ id: folder.id }),
                },
            ],
        });
        const addedHubItem = addedHubItems.operations[0];
        if (!((0, utils_js_3.toString)(addedHubItem.action) == 'add')) {
            throw new Error('Assertion failed');
        }
        if (!(addedHubItem.status == 200)) {
            throw new Error('Assertion failed');
        }
        if (!(addedHubItem.item.id == folder.id)) {
            throw new Error('Assertion failed');
        }
        if (!(addedHubItem.item.type == 'folder')) {
            throw new Error('Assertion failed');
        }
        const hubItemsAfterAdd = yield exports.client.hubItems.getHubItemsV2025R0({
            hubId: createdHub.id,
        });
        if (!(hubItemsAfterAdd.entries.length == 1)) {
            throw new Error('Assertion failed');
        }
        const removedHubItems = yield exports.client.hubItems.manageHubItemsV2025R0(createdHub.id, {
            operations: [
                {
                    action: 'remove',
                    item: new folderReferenceV2025R0_generated_js_1.FolderReferenceV2025R0({ id: folder.id }),
                },
            ],
        });
        const removedHubItem = removedHubItems.operations[0];
        if (!((0, utils_js_3.toString)(removedHubItem.action) == 'remove')) {
            throw new Error('Assertion failed');
        }
        if (!(removedHubItem.status == 200)) {
            throw new Error('Assertion failed');
        }
        if (!(removedHubItem.item.id == folder.id)) {
            throw new Error('Assertion failed');
        }
        if (!(removedHubItem.item.type == 'folder')) {
            throw new Error('Assertion failed');
        }
        const hubItemsAfterRemove = yield exports.client.hubItems.getHubItemsV2025R0({
            hubId: createdHub.id,
        });
        if (!(hubItemsAfterRemove.entries.length == 0)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.hubs.deleteHubByIdV2025R0(createdHub.id);
        yield exports.client.folders.deleteFolderById(folder.id);
    });
});
//# sourceMappingURL=hubItems.generated.test.js.map