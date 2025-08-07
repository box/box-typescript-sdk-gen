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
exports.userId = void 0;
const utils_js_1 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const utils_js_2 = require("../internal/utils.js");
exports.userId = (0, utils_js_1.getEnvVar)('USER_ID');
test('testGetStoragePolicies', function testGetStoragePolicies() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = (0, commons_generated_js_1.getDefaultClientWithUserSubject)(exports.userId);
        const storagePolicies = yield client.storagePolicies.getStoragePolicies();
        const storagePolicy = storagePolicies.entries[0];
        if (!((0, utils_js_2.toString)(storagePolicy.type) == 'storage_policy')) {
            throw new Error('Assertion failed');
        }
        const getStoragePolicy = yield client.storagePolicies.getStoragePolicyById(storagePolicy.id);
        if (!(getStoragePolicy.id == storagePolicy.id)) {
            throw new Error('Assertion failed');
        }
    });
});
//# sourceMappingURL=storagePolicies.generated.test.js.map