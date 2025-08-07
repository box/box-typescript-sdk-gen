import { HubCollaborationCreateRequestV2025R0HubField } from '../schemas/v2025R0/hubCollaborationCreateRequestV2025R0.generated.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { getEnvVar } from '../internal/utils.js';
import { getUuid } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClientWithUserSubject(getEnvVar('USER_ID'));
test('testCRUDHubCollaboration', async function testCRUDHubCollaboration() {
    const hubs = await client.hubs.getHubsV2025R0({
        scope: 'all',
        sort: 'name',
        direction: 'ASC',
    });
    const hub = hubs.entries[0];
    const userName = getUuid();
    const userLogin = ''.concat(getUuid(), '@gmail.com');
    const user = await client.users.createUser({
        name: userName,
        login: userLogin,
        isPlatformAccessOnly: true,
    });
    const createdCollaboration = await client.hubCollaborations.createHubCollaborationV2025R0({
        hub: new HubCollaborationCreateRequestV2025R0HubField({ id: hub.id }),
        accessibleBy: {
            type: 'user',
            id: user.id,
        },
        role: 'viewer',
    });
    if (!!(createdCollaboration.id == '')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(createdCollaboration.type) == 'hub_collaboration')) {
        throw new Error('Assertion failed');
    }
    if (!(createdCollaboration.hub.id == hub.id)) {
        throw new Error('Assertion failed');
    }
    if (!(toString(createdCollaboration.accessibleBy.type) == 'user')) {
        throw new Error('Assertion failed');
    }
    if (!(createdCollaboration.accessibleBy.id == user.id)) {
        throw new Error('Assertion failed');
    }
    if (!(createdCollaboration.role == 'viewer')) {
        throw new Error('Assertion failed');
    }
    const updatedCollaboration = await client.hubCollaborations.updateHubCollaborationByIdV2025R0(createdCollaboration.id, { role: 'editor' });
    if (!!(updatedCollaboration.id == '')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(updatedCollaboration.type) == 'hub_collaboration')) {
        throw new Error('Assertion failed');
    }
    if (!(updatedCollaboration.hub.id == hub.id)) {
        throw new Error('Assertion failed');
    }
    if (!(toString(updatedCollaboration.accessibleBy.type) == 'user')) {
        throw new Error('Assertion failed');
    }
    if (!(updatedCollaboration.accessibleBy.id == user.id)) {
        throw new Error('Assertion failed');
    }
    if (!(updatedCollaboration.role == 'editor')) {
        throw new Error('Assertion failed');
    }
    const collaborations = await client.hubCollaborations.getHubCollaborationsV2025R0({
        hubId: hub.id,
    });
    if (!(collaborations.entries.length >= 1)) {
        throw new Error('Assertion failed');
    }
    const retrievedCollaboration = await client.hubCollaborations.getHubCollaborationByIdV2025R0(createdCollaboration.id);
    if (!(retrievedCollaboration.id == createdCollaboration.id)) {
        throw new Error('Assertion failed');
    }
    if (!(toString(retrievedCollaboration.type) == 'hub_collaboration')) {
        throw new Error('Assertion failed');
    }
    if (!(retrievedCollaboration.hub.id == hub.id)) {
        throw new Error('Assertion failed');
    }
    if (!(toString(retrievedCollaboration.accessibleBy.type) == 'user')) {
        throw new Error('Assertion failed');
    }
    if (!(retrievedCollaboration.accessibleBy.id == user.id)) {
        throw new Error('Assertion failed');
    }
    if (!(retrievedCollaboration.role == 'editor')) {
        throw new Error('Assertion failed');
    }
    await client.hubCollaborations.deleteHubCollaborationByIdV2025R0(createdCollaboration.id);
    await client.users.deleteUserById(user.id);
});
//# sourceMappingURL=hubCollaborations.generated.test.js.map