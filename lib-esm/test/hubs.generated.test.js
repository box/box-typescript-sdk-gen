import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { getEnvVar } from '../internal/utils.js';
import { getUuid } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClientWithUserSubject(getEnvVar('USER_ID'));
test('testCreateUpdateGetAndDeleteHubs', async function testCreateUpdateGetAndDeleteHubs() {
    const hubTitle = getUuid();
    const hubDescription = 'new Hub description';
    const createdHub = await client.hubs.createHubV2025R0({
        title: hubTitle,
        description: hubDescription,
    });
    if (!(createdHub.title == hubTitle)) {
        throw new Error('Assertion failed');
    }
    if (!(createdHub.description == hubDescription)) {
        throw new Error('Assertion failed');
    }
    if (!(toString(createdHub.type) == 'hubs')) {
        throw new Error('Assertion failed');
    }
    const hubId = createdHub.id;
    const usersHubs = await client.hubs.getHubsV2025R0({
        scope: 'all',
        sort: 'name',
        direction: 'ASC',
    });
    if (!(usersHubs.entries.length > 0)) {
        throw new Error('Assertion failed');
    }
    const enterpriseHubs = await client.hubs.getEnterpriseHubsV2025R0({
        sort: 'name',
        direction: 'ASC',
    });
    if (!(enterpriseHubs.entries.length > 0)) {
        throw new Error('Assertion failed');
    }
    const hubById = await client.hubs.getHubByIdV2025R0(hubId);
    if (!(hubById.id == hubId)) {
        throw new Error('Assertion failed');
    }
    if (!(hubById.title == hubTitle)) {
        throw new Error('Assertion failed');
    }
    if (!(hubById.description == hubDescription)) {
        throw new Error('Assertion failed');
    }
    if (!(toString(hubById.type) == 'hubs')) {
        throw new Error('Assertion failed');
    }
    const newHubTitle = getUuid();
    const newHubDescription = 'updated Hub description';
    const updatedHub = await client.hubs.updateHubByIdV2025R0(hubId, {
        title: newHubTitle,
        description: newHubDescription,
    });
    if (!(updatedHub.title == newHubTitle)) {
        throw new Error('Assertion failed');
    }
    if (!(updatedHub.description == newHubDescription)) {
        throw new Error('Assertion failed');
    }
    await client.hubs.deleteHubByIdV2025R0(hubId);
    await expect(async () => {
        await client.hubs.deleteHubByIdV2025R0(hubId);
    }).rejects.toThrow();
});
test('copyHub', async function copyHub() {
    const hubTitle = getUuid();
    const hubDescription = 'new Hub description';
    const createdHub = await client.hubs.createHubV2025R0({
        title: hubTitle,
        description: hubDescription,
    });
    const copiedHubTitle = getUuid();
    const copiedHubDescription = 'copied Hub description';
    const copiedHub = await client.hubs.copyHubV2025R0(createdHub.id, {
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
    await client.hubs.deleteHubByIdV2025R0(createdHub.id);
    await client.hubs.deleteHubByIdV2025R0(copiedHub.id);
});
//# sourceMappingURL=hubs.generated.test.js.map