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
exports.client = exports.userId = void 0;
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const utils_js_3 = require("../internal/utils.js");
exports.userId = (0, utils_js_2.getEnvVar)('USER_ID');
exports.client = (0, commons_generated_js_1.getDefaultClientWithUserSubject)(exports.userId);
test('testArchivesCreateListDelete', function testArchivesCreateListDelete() {
    return __awaiter(this, void 0, void 0, function* () {
        const archiveName = (0, utils_js_1.getUuid)();
        const archive = yield exports.client.archives.createArchiveV2025R0({
            name: archiveName,
        });
        if (!((0, utils_js_3.toString)(archive.type) == 'archive')) {
            throw new Error('Assertion failed');
        }
        if (!(archive.name == archiveName)) {
            throw new Error('Assertion failed');
        }
        const archives = yield exports.client.archives.getArchivesV2025R0({
            limit: 100,
        });
        if (!(archives.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.archives.deleteArchiveByIdV2025R0(archive.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.archives.deleteArchiveByIdV2025R0(archive.id);
        })).rejects.toThrow();
    });
});
//# sourceMappingURL=archives.generated.test.js.map