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
test('testTrashedWebLinks', function testTrashedWebLinks() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://www.box.com';
        const parent = yield exports.client.folders.getFolderById('0');
        const name = (0, utils_js_1.getUuid)();
        const description = 'Weblink description';
        const weblink = yield exports.client.webLinks.createWebLink({
            url: url,
            parent: { id: parent.id },
            name: name,
            description: description,
        });
        yield exports.client.webLinks.deleteWebLinkById(weblink.id);
        const fromTrash = yield exports.client.trashedWebLinks.getTrashedWebLinkById(weblink.id);
        if (!(fromTrash.id == weblink.id)) {
            throw new Error('Assertion failed');
        }
        if (!(fromTrash.name == weblink.name)) {
            throw new Error('Assertion failed');
        }
        const fromApiAfterTrashed = yield exports.client.webLinks.getWebLinkById(weblink.id);
        if (!((0, utils_js_2.toString)(fromApiAfterTrashed.itemStatus) == 'trashed')) {
            throw new Error('Assertion failed');
        }
        const restoredWeblink = yield exports.client.trashedWebLinks.restoreWeblinkFromTrash(weblink.id);
        const fromApi = yield exports.client.webLinks.getWebLinkById(weblink.id);
        if (!(restoredWeblink.id == fromApi.id)) {
            throw new Error('Assertion failed');
        }
        if (!(restoredWeblink.name == fromApi.name)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.webLinks.deleteWebLinkById(weblink.id);
        yield exports.client.trashedWebLinks.deleteTrashedWebLinkById(weblink.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.trashedWebLinks.getTrashedWebLinkById(weblink.id);
        })).rejects.toThrow();
    });
});
//# sourceMappingURL=trashedWebLinks.generated.test.js.map