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
const utils_js_3 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_1.getDefaultClientWithUserSubject)((0, utils_js_1.getEnvVar)('USER_ID'));
test('testCreateUpdateGetAndDeleteHubs', function testCreateUpdateGetAndDeleteHubs() {
    return __awaiter(this, void 0, void 0, function* () {
        const hubTitle = (0, utils_js_2.getUuid)();
        const hubDescription = 'new Hub description';
        const createdHub = yield exports.client.hubs.createHubV2025R0({
            title: hubTitle,
            description: hubDescription,
        });
        if (!(createdHub.title == hubTitle)) {
            throw new Error('Assertion failed');
        }
        if (!(createdHub.description == hubDescription)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_3.toString)(createdHub.type) == 'hubs')) {
            throw new Error('Assertion failed');
        }
        const hubId = createdHub.id;
        const usersHubs = yield exports.client.hubs.getHubsV2025R0({
            scope: 'all',
            sort: 'name',
            direction: 'ASC',
        });
        if (!(usersHubs.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const enterpriseHubs = yield exports.client.hubs.getEnterpriseHubsV2025R0({
            sort: 'name',
            direction: 'ASC',
        });
        if (!(enterpriseHubs.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const hubById = yield exports.client.hubs.getHubByIdV2025R0(hubId);
        if (!(hubById.id == hubId)) {
            throw new Error('Assertion failed');
        }
        if (!(hubById.title == hubTitle)) {
            throw new Error('Assertion failed');
        }
        if (!(hubById.description == hubDescription)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_3.toString)(hubById.type) == 'hubs')) {
            throw new Error('Assertion failed');
        }
        const newHubTitle = (0, utils_js_2.getUuid)();
        const newHubDescription = 'updated Hub description';
        const updatedHub = yield exports.client.hubs.updateHubByIdV2025R0(hubId, {
            title: newHubTitle,
            description: newHubDescription,
        });
        if (!(updatedHub.title == newHubTitle)) {
            throw new Error('Assertion failed');
        }
        if (!(updatedHub.description == newHubDescription)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.hubs.deleteHubByIdV2025R0(hubId);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.hubs.deleteHubByIdV2025R0(hubId);
        })).rejects.toThrow();
    });
});
test('copyHub', function copyHub() {
    return __awaiter(this, void 0, void 0, function* () {
        const hubTitle = (0, utils_js_2.getUuid)();
        const hubDescription = 'new Hub description';
        const createdHub = yield exports.client.hubs.createHubV2025R0({
            title: hubTitle,
            description: hubDescription,
        });
        const copiedHubTitle = (0, utils_js_2.getUuid)();
        const copiedHubDescription = 'copied Hub description';
        const copiedHub = yield exports.client.hubs.copyHubV2025R0(createdHub.id, {
            title: copiedHubTitle,
            description: copiedHubDescription,
        });
        if (!!(copiedHub.id == createdHub.id)) {
            throw new Error('Assertion failed');
        }
        if (!(copiedHub.title == copiedHubTitle)) {
            throw new Error('Assertion failed');
        }
        if (!(copiedHub.description == copiedHubDescription)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.hubs.deleteHubByIdV2025R0(createdHub.id);
        yield exports.client.hubs.deleteHubByIdV2025R0(copiedHub.id);
    });
});
//# sourceMappingURL=hubs.generated.test.js.map