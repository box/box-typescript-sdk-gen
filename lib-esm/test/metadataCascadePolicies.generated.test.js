import { getUuid } from '../internal/utils.js';
import { getEnvVar } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { createNewFolder } from './commons.generated.js';
export const client = getDefaultClient();
test('testMetadataCascadePolicies', async function testMetadataCascadePolicies() {
    const templateKey = ''.concat('key', getUuid());
    await client.metadataTemplates.createMetadataTemplate({
        scope: 'enterprise',
        displayName: templateKey,
        templateKey: templateKey,
        fields: [
            {
                type: 'string',
                key: 'testName',
                displayName: 'testName',
            },
        ],
    });
    const folder = await createNewFolder();
    const enterpriseId = getEnvVar('ENTERPRISE_ID');
    const cascadePolicy = await client.metadataCascadePolicies.createMetadataCascadePolicy({
        folderId: folder.id,
        scope: 'enterprise',
        templateKey: templateKey,
    });
    if (!(toString(cascadePolicy.type) == 'metadata_cascade_policy')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(cascadePolicy.ownerEnterprise.type) == 'enterprise')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(cascadePolicy.ownerEnterprise.id) == enterpriseId)) {
        throw new Error('Assertion failed');
    }
    if (!(toString(cascadePolicy.parent.type) == 'folder')) {
        throw new Error('Assertion failed');
    }
    if (!(cascadePolicy.parent.id == folder.id)) {
        throw new Error('Assertion failed');
    }
    if (!(toString(cascadePolicy.scope) ==
        ''.concat('enterprise_', enterpriseId))) {
        throw new Error('Assertion failed');
    }
    if (!(cascadePolicy.templateKey == templateKey)) {
        throw new Error('Assertion failed');
    }
    const cascadePolicyId = cascadePolicy.id;
    const policyFromTheApi = await client.metadataCascadePolicies.getMetadataCascadePolicyById(cascadePolicyId);
    if (!(cascadePolicyId == policyFromTheApi.id)) {
        throw new Error('Assertion failed');
    }
    const policies = await client.metadataCascadePolicies.getMetadataCascadePolicies({
        folderId: folder.id,
    });
    if (!(policies.entries.length == 1)) {
        throw new Error('Assertion failed');
    }
    await expect(async () => {
        await client.metadataCascadePolicies.applyMetadataCascadePolicy(cascadePolicyId, {
            conflictResolution: 'overwrite',
        });
    }).rejects.toThrow();
    await client.folderMetadata.createFolderMetadataById(folder.id, 'enterprise', templateKey, { ['testName']: 'xyz' });
    await client.metadataCascadePolicies.applyMetadataCascadePolicy(cascadePolicyId, {
        conflictResolution: 'overwrite',
    });
    await client.metadataCascadePolicies.deleteMetadataCascadePolicyById(cascadePolicyId);
    await expect(async () => {
        await client.metadataCascadePolicies.getMetadataCascadePolicyById(cascadePolicyId);
    }).rejects.toThrow();
    await client.metadataTemplates.deleteMetadataTemplate('enterprise', templateKey);
    await client.folders.deleteFolderById(folder.id);
});
//# sourceMappingURL=metadataCascadePolicies.generated.test.js.map