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
const utils_js_3 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const commons_generated_js_2 = require("./commons.generated.js");
const utils_js_4 = require("../internal/utils.js");
const utils_js_5 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testSharedLinksFiles', function testSharedLinksFiles() {
    return __awaiter(this, void 0, void 0, function* () {
        const uploadedFiles = yield exports.client.uploads.uploadFile({
            attributes: {
                name: (0, utils_js_1.getUuid)(),
                parent: { id: '0' },
            },
            file: (0, utils_js_2.generateByteStream)(10),
        });
        const fileId = uploadedFiles.entries[0].id;
        yield exports.client.sharedLinksFiles.addShareLinkToFile(fileId, {
            sharedLink: {
                access: 'open',
                password: 'Secret123@',
            },
        }, { fields: 'shared_link' });
        const fileFromApi = yield exports.client.sharedLinksFiles.getSharedLinkForFile(fileId, {
            fields: 'shared_link',
        });
        if (!((0, utils_js_5.toString)(fileFromApi.sharedLink.access) == 'open')) {
            throw new Error('Assertion failed');
        }
        const userId = (0, utils_js_3.getEnvVar)('USER_ID');
        const userClient = (0, commons_generated_js_2.getDefaultClientWithUserSubject)(userId);
        const fileFromSharedLinkPassword = yield userClient.sharedLinksFiles.findFileForSharedLink({}, {
            boxapi: ''.concat('shared_link=', fileFromApi.sharedLink.url, '&shared_link_password=Secret123@'),
        });
        if (!(fileId == fileFromSharedLinkPassword.id)) {
            throw new Error('Assertion failed');
        }
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield userClient.sharedLinksFiles.findFileForSharedLink({}, {
                boxapi: ''.concat('shared_link=', fileFromApi.sharedLink.url, '&shared_link_password=incorrectPassword'),
            });
        })).rejects.toThrow();
        const updatedFile = yield exports.client.sharedLinksFiles.updateSharedLinkOnFile(fileId, {
            sharedLink: {
                access: 'collaborators',
            },
        }, { fields: 'shared_link' });
        if (!((0, utils_js_5.toString)(updatedFile.sharedLink.access) == 'collaborators')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.sharedLinksFiles.removeSharedLinkFromFile(fileId, { sharedLink: (0, utils_js_4.createNull)() }, { fields: 'shared_link' });
        const fileFromApiAfterRemove = yield exports.client.sharedLinksFiles.getSharedLinkForFile(fileId, {
            fields: 'shared_link',
        });
        if (!(fileFromApiAfterRemove.sharedLink == void 0)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.files.deleteFileById(fileId);
    });
});
//# sourceMappingURL=sharedLinksFiles.generated.test.js.map