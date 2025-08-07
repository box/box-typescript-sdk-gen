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
const commons_generated_js_1 = require("./commons.generated.js");
const commons_generated_js_2 = require("./commons.generated.js");
const utils_js_1 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testGetTermsOfServices', function testGetTermsOfServices() {
    return __awaiter(this, void 0, void 0, function* () {
        const tos = yield (0, commons_generated_js_2.getOrCreateTermsOfServices)();
        const updatedTos1 = yield exports.client.termsOfServices.updateTermsOfServiceById(tos.id, {
            status: 'disabled',
            text: 'TOS',
        });
        if (!((0, utils_js_1.toString)(updatedTos1.status) == 'disabled')) {
            throw new Error('Assertion failed');
        }
        if (!(updatedTos1.text == 'TOS')) {
            throw new Error('Assertion failed');
        }
        const updatedTos2 = yield exports.client.termsOfServices.updateTermsOfServiceById(tos.id, {
            status: 'disabled',
            text: 'Updated TOS',
        });
        if (!((0, utils_js_1.toString)(updatedTos2.status) == 'disabled')) {
            throw new Error('Assertion failed');
        }
        if (!(updatedTos2.text == 'Updated TOS')) {
            throw new Error('Assertion failed');
        }
        const listTos = yield exports.client.termsOfServices.getTermsOfService();
        if (!(listTos.totalCount > 0)) {
            throw new Error('Assertion failed');
        }
    });
});
//# sourceMappingURL=termsOfServices.generated.test.js.map