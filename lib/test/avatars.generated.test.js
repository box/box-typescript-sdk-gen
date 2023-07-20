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
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const utils_js_3 = require("../utils.js");
const client_generated_js_1 = require("../client.generated.js");
const jwtAuth_js_1 = require("../jwtAuth.js");
const jwtAuth_js_2 = require("../jwtAuth.js");
const jwtConfig = jwtAuth_js_2.JwtConfig.fromConfigJsonString((0, utils_js_2.decodeBase64)((0, utils_js_3.getEnvVar)("JWT_CONFIG_BASE_64")));
const auth = new jwtAuth_js_1.JwtAuth({ config: jwtConfig });
const client = new client_generated_js_1.Client({ auth: auth });
test("testAvatars", function testAvatars() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield client.users.getUserMe();
        const createdAvatar = yield client.avatars.createUserAvatar(user.id, { pic: (0, utils_js_1.decodeBase64ByteStream)("iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAAA1BMVEW10NBjBBbqAAAAH0lEQVRoge3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAvg0hAAABmmDh1QAAAABJRU5ErkJggg=="), picContentType: "image/png", picFileName: "avatar.png" });
        if (!!(createdAvatar.picUrls.small == void 0)) {
            throw "Assertion failed";
        }
        if (!!(createdAvatar.picUrls.large == void 0)) {
            throw "Assertion failed";
        }
        if (!!(createdAvatar.picUrls.preview == void 0)) {
            throw "Assertion failed";
        }
        if (!(yield client.avatars.getUserAvatar(user.id))) {
            throw "Assertion failed";
        }
        yield client.avatars.deleteUserAvatar(user.id);
        expect(() => __awaiter(this, void 0, void 0, function* () { yield client.avatars.getUserAvatar(user.id); })).rejects.toThrow();
    });
});
//# sourceMappingURL=avatars.generated.test.js.map