import { IntegrationMappingPartnerItemSlack } from '../schemas/integrationMappingPartnerItemSlack.generated.js';
import { IntegrationMappingBoxItemSlack } from '../schemas/integrationMappingBoxItemSlack.generated.js';
import { FolderReference } from '../schemas/folderReference.generated.js';
import { getUuid } from '../internal/utils.js';
import { getEnvVar } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
export const client = getDefaultClient();
test('testSlackIntegrationMappings', async function testSlackIntegrationMappings() {
    const userId = getEnvVar('USER_ID');
    const slackAutomationUserId = getEnvVar('SLACK_AUTOMATION_USER_ID');
    const slackOrgId = getEnvVar('SLACK_ORG_ID');
    const slackPartnerItemId = getEnvVar('SLACK_PARTNER_ITEM_ID');
    const userClient = getDefaultClientWithUserSubject(userId);
    const folder = await userClient.folders.createFolder({
        name: getUuid(),
        parent: { id: '0' },
    });
    await userClient.userCollaborations.createCollaboration({
        item: {
            type: 'folder',
            id: folder.id,
        },
        accessibleBy: {
            type: 'user',
            id: slackAutomationUserId,
        },
        role: 'co-owner',
    });
    const slackIntegrations = await userClient.integrationMappings.getSlackIntegrationMapping();
    if (slackIntegrations.entries.length == 0) {
        await userClient.integrationMappings.createSlackIntegrationMapping({
            partnerItem: new IntegrationMappingPartnerItemSlack({
                id: slackPartnerItemId,
                slackOrgId: slackOrgId,
            }),
            boxItem: new IntegrationMappingBoxItemSlack({ id: folder.id }),
        });
    }
    const slackMappings = await userClient.integrationMappings.getSlackIntegrationMapping();
    if (!(slackMappings.entries.length >= 1)) {
        throw new Error('Assertion failed');
    }
    const slackIntegrationMapping = slackMappings.entries[0];
    if (!(toString(slackIntegrationMapping.integrationType) == 'slack')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(slackIntegrationMapping.type) ==
        'integration_mapping')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(slackIntegrationMapping.boxItem.type) == 'folder')) {
        throw new Error('Assertion failed');
    }
    if (!(slackIntegrationMapping.partnerItem.id == slackPartnerItemId)) {
        throw new Error('Assertion failed');
    }
    if (!(slackIntegrationMapping.partnerItem.slackWorkspaceId == slackOrgId)) {
        throw new Error('Assertion failed');
    }
    if (!(toString(slackIntegrationMapping.partnerItem.type) ==
        'channel')) {
        throw new Error('Assertion failed');
    }
    const updatedSlackMapping = await userClient.integrationMappings.updateSlackIntegrationMappingById(slackIntegrationMapping.id, {
        requestBody: {
            boxItem: new IntegrationMappingBoxItemSlack({ id: folder.id }),
        },
    });
    if (!(toString(updatedSlackMapping.boxItem.type) == 'folder')) {
        throw new Error('Assertion failed');
    }
    if (!(updatedSlackMapping.boxItem.id == folder.id)) {
        throw new Error('Assertion failed');
    }
    if (slackMappings.entries.length > 2) {
        await userClient.integrationMappings.deleteSlackIntegrationMappingById(slackIntegrationMapping.id);
    }
    await userClient.folders.deleteFolderById(folder.id);
});
test('testTeamsIntegrationMappings', async function testTeamsIntegrationMappings() {
    const folder = await client.folders.createFolder({
        name: getUuid(),
        parent: { id: '0' },
    });
    const tenantId = '1';
    const teamId = '2';
    const partnerItemId = '3';
    const userId = getEnvVar('USER_ID');
    const userClient = getDefaultClientWithUserSubject(userId);
    await expect(async () => {
        await userClient.integrationMappings.createTeamsIntegrationMapping({
            partnerItem: {
                type: 'channel',
                id: partnerItemId,
                tenantId: tenantId,
                teamId: teamId,
            },
            boxItem: new FolderReference({ id: folder.id }),
        });
    }).rejects.toThrow();
    await expect(async () => {
        await userClient.integrationMappings.getTeamsIntegrationMapping();
    }).rejects.toThrow();
    const integrationMappingId = '123456';
    await expect(async () => {
        await userClient.integrationMappings.updateTeamsIntegrationMappingById(integrationMappingId, {
            requestBody: {
                boxItem: new FolderReference({ id: '1234567' }),
            },
        });
    }).rejects.toThrow();
    await expect(async () => {
        await userClient.integrationMappings.deleteTeamsIntegrationMappingById(integrationMappingId);
    }).rejects.toThrow();
    await client.folders.deleteFolderById(folder.id);
});
//# sourceMappingURL=integrationMappings.generated.test.js.map