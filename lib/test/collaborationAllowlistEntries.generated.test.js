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
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testCollaborationAllowlistEntries', function testCollaborationAllowlistEntries() {
    return __awaiter(this, void 0, void 0, function* () {
        const allowlist = yield exports.client.collaborationAllowlistEntries.getCollaborationWhitelistEntries();
        if (!(allowlist.entries.length >= 0)) {
            throw new Error('Assertion failed');
        }
        const domain = ''.concat((0, utils_js_1.getUuid)(), 'example.com');
        const newEntry = yield exports.client.collaborationAllowlistEntries.createCollaborationWhitelistEntry({
            direction: 'inbound',
            domain: domain,
        });
        if (!((0, utils_js_2.toString)(newEntry.type) == 'collaboration_whitelist_entry')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(newEntry.direction) == 'inbound')) {
            throw new Error('Assertion failed');
        }
        if (!(newEntry.domain == domain)) {
            throw new Error('Assertion failed');
        }
        const entry = yield exports.client.collaborationAllowlistEntries.getCollaborationWhitelistEntryById(newEntry.id);
        if (!(entry.id == newEntry.id)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(entry.direction) ==
            (0, utils_js_2.toString)(newEntry.direction))) {
            throw new Error('Assertion failed');
        }
        if (!(entry.domain == domain)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.collaborationAllowlistEntries.deleteCollaborationWhitelistEntryById(entry.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.collaborationAllowlistEntries.getCollaborationWhitelistEntryById(entry.id);
        })).rejects.toThrow();
    });
});
//# sourceMappingURL=collaborationAllowlistEntries.generated.test.js.map