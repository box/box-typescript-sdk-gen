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
test('testCollections', function testCollections() {
    return __awaiter(this, void 0, void 0, function* () {
        const collections = yield exports.client.collections.getCollections();
        const favouriteCollection = yield exports.client.collections.getCollectionById(collections.entries[0].id);
        if (!((0, utils_js_2.toString)(favouriteCollection.type) == 'collection')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(favouriteCollection.collectionType) == 'favorites')) {
            throw new Error('Assertion failed');
        }
        const collectionItems = yield exports.client.collections.getCollectionItems(favouriteCollection.id);
        const folder = yield exports.client.folders.createFolder({
            name: (0, utils_js_1.getUuid)(),
            parent: { id: '0' },
        });
        yield exports.client.folders.updateFolderById(folder.id, {
            requestBody: {
                collections: [
                    {
                        id: favouriteCollection.id,
                    },
                ],
            },
        });
        const collectionItemsAfterUpdate = yield exports.client.collections.getCollectionItems(favouriteCollection.id);
        if (!(collectionItemsAfterUpdate.totalCount > 0)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.folders.updateFolderById(folder.id, {
            requestBody: { collections: [] },
        });
        yield exports.client.folders.deleteFolderById(folder.id);
    });
});
//# sourceMappingURL=collections.generated.test.js.map