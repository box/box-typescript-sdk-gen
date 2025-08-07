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
const hubCollaborationCreateRequestV2025R0_generated_js_1 = require("../schemas/v2025R0/hubCollaborationCreateRequestV2025R0.generated.js");
const commons_generated_js_1 = require("./commons.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const utils_js_3 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_1.getDefaultClientWithUserSubject)((0, utils_js_1.getEnvVar)('USER_ID'));
test('testCRUDHubCollaboration', function testCRUDHubCollaboration() {
    return __awaiter(this, void 0, void 0, function* () {
        const hubs = yield exports.client.hubs.getHubsV2025R0({
            scope: 'all',
            sort: 'name',
            direction: 'ASC',
        });
        const hub = hubs.entries[0];
        const userName = (0, utils_js_2.getUuid)();
        const userLogin = ''.concat((0, utils_js_2.getUuid)(), '@gmail.com');
        const user = yield exports.client.users.createUser({
            name: userName,
            login: userLogin,
            isPlatformAccessOnly: true,
        });
        const createdCollaboration = yield exports.client.hubCollaborations.createHubCollaborationV2025R0({
            hub: new hubCollaborationCreateRequestV2025R0_generated_js_1.HubCollaborationCreateRequestV2025R0HubField({ id: hub.id }),
            accessibleBy: {
                type: 'user',
                id: user.id,
            },
            role: 'viewer',
        });
        if (!!(createdCollaboration.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_3.toString)(createdCollaboration.type) == 'hub_collaboration')) {
            throw new Error('Assertion failed');
        }
        if (!(createdCollaboration.hub.id == hub.id)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_3.toString)(createdCollaboration.accessibleBy.type) == 'user')) {
            throw new Error('Assertion failed');
        }
        if (!(createdCollaboration.accessibleBy.id == user.id)) {
            throw new Error('Assertion failed');
        }
        if (!(createdCollaboration.role == 'viewer')) {
            throw new Error('Assertion failed');
        }
        const updatedCollaboration = yield exports.client.hubCollaborations.updateHubCollaborationByIdV2025R0(createdCollaboration.id, { role: 'editor' });
        if (!!(updatedCollaboration.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_3.toString)(updatedCollaboration.type) == 'hub_collaboration')) {
            throw new Error('Assertion failed');
        }
        if (!(updatedCollaboration.hub.id == hub.id)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_3.toString)(updatedCollaboration.accessibleBy.type) == 'user')) {
            throw new Error('Assertion failed');
        }
        if (!(updatedCollaboration.accessibleBy.id == user.id)) {
            throw new Error('Assertion failed');
        }
        if (!(updatedCollaboration.role == 'editor')) {
            throw new Error('Assertion failed');
        }
        const collaborations = yield exports.client.hubCollaborations.getHubCollaborationsV2025R0({
            hubId: hub.id,
        });
        if (!(collaborations.entries.length >= 1)) {
            throw new Error('Assertion failed');
        }
        const retrievedCollaboration = yield exports.client.hubCollaborations.getHubCollaborationByIdV2025R0(createdCollaboration.id);
        if (!(retrievedCollaboration.id == createdCollaboration.id)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_3.toString)(retrievedCollaboration.type) == 'hub_collaboration')) {
            throw new Error('Assertion failed');
        }
        if (!(retrievedCollaboration.hub.id == hub.id)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_3.toString)(retrievedCollaboration.accessibleBy.type) == 'user')) {
            throw new Error('Assertion failed');
        }
        if (!(retrievedCollaboration.accessibleBy.id == user.id)) {
            throw new Error('Assertion failed');
        }
        if (!(retrievedCollaboration.role == 'editor')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.hubCollaborations.deleteHubCollaborationByIdV2025R0(createdCollaboration.id);
        yield exports.client.users.deleteUserById(user.id);
    });
});
//# sourceMappingURL=hubCollaborations.generated.test.js.map