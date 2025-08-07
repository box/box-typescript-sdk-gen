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
test('testSharedLinksWebLinks', function testSharedLinksWebLinks() {
    return __awaiter(this, void 0, void 0, function* () {
        const parent = yield exports.client.folders.getFolderById('0');
        const webLink = yield exports.client.webLinks.createWebLink({
            url: 'https://www.box.com',
            parent: { id: parent.id },
            name: (0, utils_js_1.getUuid)(),
            description: 'Weblink description',
        });
        const webLinkId = webLink.id;
        yield exports.client.sharedLinksWebLinks.addShareLinkToWebLink(webLinkId, {
            sharedLink: {
                access: 'open',
                password: 'Secret123@',
            },
        }, { fields: 'shared_link' });
        const webLinkFromApi = yield exports.client.sharedLinksWebLinks.getSharedLinkForWebLink(webLinkId, {
            fields: 'shared_link',
        });
        if (!((0, utils_js_4.toString)(webLinkFromApi.sharedLink.access) == 'open')) {
            throw new Error('Assertion failed');
        }
        const userId = (0, utils_js_2.getEnvVar)('USER_ID');
        const userClient = (0, commons_generated_js_2.getDefaultClientWithUserSubject)(userId);
        const webLinkFromSharedLinkPassword = yield userClient.sharedLinksWebLinks.findWebLinkForSharedLink({}, {
            boxapi: ''.concat('shared_link=', webLinkFromApi.sharedLink.url, '&shared_link_password=Secret123@'),
        });
        if (!(webLinkId == webLinkFromSharedLinkPassword.id)) {
            throw new Error('Assertion failed');
        }
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield userClient.sharedLinksWebLinks.findWebLinkForSharedLink({}, {
                boxapi: ''.concat('shared_link=', webLinkFromApi.sharedLink.url, '&shared_link_password=incorrectPassword'),
            });
        })).rejects.toThrow();
        const updatedWebLink = yield exports.client.sharedLinksWebLinks.updateSharedLinkOnWebLink(webLinkId, {
            sharedLink: {
                access: 'collaborators',
            },
        }, { fields: 'shared_link' });
        if (!((0, utils_js_4.toString)(updatedWebLink.sharedLink.access) == 'collaborators')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.sharedLinksWebLinks.removeSharedLinkFromWebLink(webLinkId, {
            sharedLink: (0, utils_js_3.createNull)(),
        }, { fields: 'shared_link' });
        const webLinkFromApiAfterRemove = yield exports.client.sharedLinksWebLinks.getSharedLinkForWebLink(webLinkId, {
            fields: 'shared_link',
        });
        if (!(webLinkFromApiAfterRemove.sharedLink == void 0)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.webLinks.deleteWebLinkById(webLinkId);
    });
});
//# sourceMappingURL=sharedLinksWebLinks.generated.test.js.map