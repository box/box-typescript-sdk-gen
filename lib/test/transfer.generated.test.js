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
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testTransferUserContent', function testTransferUserContent() {
    return __awaiter(this, void 0, void 0, function* () {
        const sourceUserName = (0, utils_js_1.getUuid)();
        const sourceUser = yield exports.client.users.createUser({
            name: sourceUserName,
            isPlatformAccessOnly: true,
        });
        const targetUser = yield exports.client.users.getUserMe();
        const transferredFolder = yield exports.client.transfer.transferOwnedFolder(sourceUser.id, {
            ownedBy: {
                id: targetUser.id,
            },
        }, {
            queryParams: { notify: false },
        });
        if (!(transferredFolder.ownedBy.id == targetUser.id)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.folders.deleteFolderById(transferredFolder.id, {
            queryParams: { recursive: true },
        });
        yield exports.client.users.deleteUserById(sourceUser.id, {
            queryParams: {
                notify: false,
                force: true,
            },
        });
    });
});
//# sourceMappingURL=transfer.generated.test.js.map