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
const jwtConfig = jwtAuth_js_2.JwtConfig.fromConfigJsonString((0, utils_js_1.decodeBase64)((0, utils_js_2.getEnvVar)("JWT_CONFIG_BASE_64")));
const auth = new jwtAuth_js_1.JwtAuth({ config: jwtConfig });
const client = new client_generated_js_1.Client({ auth: auth });
test("test_create_get_delete_weblink", function test_create_get_delete_weblink() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = "https://www.box.com";
        const parent = yield client.folders.getFolderById("0");
        const name = (0, utils_js_3.getUuid)();
        const description = "Weblink description";
        const sharedAccess = "open";
        const password = "super-secret-password";
        const weblink = yield client.webLinks.createWebLink({ url: url, parent: parent, name: name, description: description });
        if (!(weblink.url == url)) {
            throw "Assertion failed";
        }
        if (!(weblink.parent.id == parent.id)) {
            throw "Assertion failed";
        }
        if (!(weblink.name == name)) {
            throw "Assertion failed";
        }
        if (!(weblink.description == description)) {
            throw "Assertion failed";
        }
        const weblinkById = yield client.webLinks.getWebLinkById(weblink.id);
        if (!(weblinkById.id == weblink.id)) {
            throw "Assertion failed";
        }
        if (!(weblinkById.url == url)) {
            throw "Assertion failed";
        }
        const updatedName = (0, utils_js_3.getUuid)();
        const updatedWeblink = yield client.webLinks.updateWebLinkById(weblink.id, { name: updatedName, sharedLink: { access: sharedAccess, password: password } });
        if (!(updatedWeblink.name == updatedName)) {
            throw "Assertion failed";
        }
        if (!(updatedWeblink.sharedLink.access == sharedAccess)) {
            throw "Assertion failed";
        }
        yield client.webLinks.deleteWebLinkById(weblink.id);
        const deletedWeblink = yield client.webLinks.getWebLinkById(weblink.id);
        if (!(deletedWeblink.itemStatus == "trashed")) {
            throw "Assertion failed";
        }
    });
});
//# sourceMappingURL=weblinks.generated.test.js.map