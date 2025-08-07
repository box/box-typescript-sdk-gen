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
test('testSharedLinksAppItems', function testSharedLinksAppItems() {
    return __awaiter(this, void 0, void 0, function* () {
        const appItemSharedLink = (0, utils_js_1.getEnvVar)('APP_ITEM_SHARED_LINK');
        const appItem = yield exports.client.sharedLinksAppItems.findAppItemForSharedLink({
            boxapi: ''.concat('shared_link=', appItemSharedLink),
        });
        if (!((0, utils_js_2.toString)(appItem.type) == 'app_item')) {
            throw new Error('Assertion failed');
        }
        if (!(appItem.applicationType == 'hubs')) {
            throw new Error('Assertion failed');
        }
    });
});
//# sourceMappingURL=sharedLinksAppItems.generated.test.js.map