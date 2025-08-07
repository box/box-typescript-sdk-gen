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
test('test_createGetDeleteWeblink', function test_createGetDeleteWeblink() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://www.box.com';
        const parent = yield exports.client.folders.getFolderById('0');
        const name = (0, utils_js_1.getUuid)();
        const description = 'Weblink description';
        const password = 'super-secret-password';
        const weblink = yield exports.client.webLinks.createWebLink({
            url: url,
            parent: { id: parent.id },
            name: name,
            description: description,
        });
        if (!(weblink.url == url)) {
            throw new Error('Assertion failed');
        }
        if (!(weblink.parent.id == parent.id)) {
            throw new Error('Assertion failed');
        }
        if (!(weblink.name == name)) {
            throw new Error('Assertion failed');
        }
        if (!(weblink.description == description)) {
            throw new Error('Assertion failed');
        }
        const weblinkById = yield exports.client.webLinks.getWebLinkById(weblink.id);
        if (!(weblinkById.id == weblink.id)) {
            throw new Error('Assertion failed');
        }
        if (!(weblinkById.url == url)) {
            throw new Error('Assertion failed');
        }
        const updatedName = (0, utils_js_1.getUuid)();
        const updatedWeblink = yield exports.client.webLinks.updateWebLinkById(weblink.id, {
            requestBody: {
                name: updatedName,
                sharedLink: {
                    access: 'open',
                    password: password,
                },
            },
        });
        if (!(updatedWeblink.name == updatedName)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(updatedWeblink.sharedLink.access) == 'open')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.webLinks.deleteWebLinkById(weblink.id);
        const deletedWeblink = yield exports.client.webLinks.getWebLinkById(weblink.id);
        if (!((0, utils_js_2.toString)(deletedWeblink.itemStatus) == 'trashed')) {
            throw new Error('Assertion failed');
        }
    });
});
//# sourceMappingURL=weblinks.generated.test.js.map