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
const utils_js_1 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
test('testGetSignTemplates', function testGetSignTemplates() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = (0, commons_generated_js_1.getDefaultClientWithUserSubject)((0, utils_js_1.getEnvVar)('USER_ID'));
        const signTemplates = yield client.signTemplates.getSignTemplates({
            limit: 2,
        });
        if (!(signTemplates.entries.length >= 0)) {
            throw new Error('Assertion failed');
        }
    });
});
test('testGetSignTemplate', function testGetSignTemplate() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = (0, commons_generated_js_1.getDefaultClientWithUserSubject)((0, utils_js_1.getEnvVar)('USER_ID'));
        const signTemplates = yield client.signTemplates.getSignTemplates({
            limit: 2,
        });
        if (!(signTemplates.entries.length >= 0)) {
            throw new Error('Assertion failed');
        }
        if (signTemplates.entries.length > 0) {
            const signTemplate = yield client.signTemplates.getSignTemplateById(signTemplates.entries[0].id);
            if (!(signTemplate.id == signTemplates.entries[0].id)) {
                throw new Error('Assertion failed');
            }
            if (!(signTemplate.sourceFiles.length > 0)) {
                throw new Error('Assertion failed');
            }
            if (!!(signTemplate.name == '')) {
                throw new Error('Assertion failed');
            }
            if (!!(signTemplate.parentFolder.id == '')) {
                throw new Error('Assertion failed');
            }
        }
    });
});
//# sourceMappingURL=signTemplates.generated.test.js.map