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
const utils_js_4 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testAvatars', function testAvatars() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield exports.client.users.getUserMe();
        const createdAvatar = yield exports.client.avatars.createUserAvatar(user.id, {
            pic: (0, utils_js_4.decodeBase64ByteStream)('iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAAA1BMVEW10NBjBBbqAAAAH0lEQVRoge3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAvg0hAAABmmDh1QAAAABJRU5ErkJggg=='),
            picContentType: 'image/png',
            picFileName: 'avatar.png',
        });
        if (!!(createdAvatar.picUrls.small == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!!(createdAvatar.picUrls.large == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!!(createdAvatar.picUrls.preview == void 0)) {
            throw new Error('Assertion failed');
        }
        const response = yield exports.client.avatars.getUserAvatar(user.id);
        if (!((0, utils_js_1.bufferEquals)(yield (0, utils_js_2.readByteStream)(response), (0, utils_js_3.generateByteBuffer)(0)) ==
            false)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.avatars.deleteUserAvatar(user.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.avatars.getUserAvatar(user.id);
        })).rejects.toThrow();
    });
});
//# sourceMappingURL=avatars.generated.test.js.map