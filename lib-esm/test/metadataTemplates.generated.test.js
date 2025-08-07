import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testMetadataTemplates', async function testMetadataTemplates() {
    const templateKey = ''.concat('key', getUuid());
    const template = await client.metadataTemplates.createMetadataTemplate({
        scope: 'enterprise',
        displayName: templateKey,
        templateKey: templateKey,
        fields: [
            {
                type: 'string',
                key: 'testName',
                displayName: 'testName',
            },
            {
                type: 'float',
                key: 'age',
                displayName: 'age',
            },
            {
                type: 'date',
                key: 'birthDate',
                displayName: 'birthDate',
            },
            {
                type: 'enum',
                key: 'countryCode',
                displayName: 'countryCode',
                options: [
                    {
                        key: 'US',
                    },
                    {
                        key: 'CA',
                    },
                ],
            },
            {
                type: 'multiSelect',
                key: 'sports',
                displayName: 'sports',
                options: [
                    {
                        key: 'basketball',
                    },
                    {
                        key: 'football',
                    },
                    {
                        key: 'tennis',
                    },
                ],
            },
        ],
    });
    if (!(template.templateKey == templateKey)) {
        throw new Error('Assertion failed');
    }
    if (!(template.displayName == templateKey)) {
        throw new Error('Assertion failed');
    }
    if (!(template.fields.length == 5)) {
        throw new Error('Assertion failed');
    }
    if (!(template.fields[0].key == 'testName')) {
        throw new Error('Assertion failed');
    }
    if (!(template.fields[0].displayName == 'testName')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(template.fields[0].type) == 'string')) {
        throw new Error('Assertion failed');
    }
    if (!(template.fields[1].key == 'age')) {
        throw new Error('Assertion failed');
    }
    if (!(template.fields[1].displayName == 'age')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(template.fields[1].type) == 'float')) {
        throw new Error('Assertion failed');
    }
    if (!(template.fields[2].key == 'birthDate')) {
        throw new Error('Assertion failed');
    }
    if (!(template.fields[2].displayName == 'birthDate')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(template.fields[2].type) == 'date')) {
        throw new Error('Assertion failed');
    }
    if (!(template.fields[3].key == 'countryCode')) {
        throw new Error('Assertion failed');
    }
    if (!(template.fields[3].displayName == 'countryCode')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(template.fields[3].type) == 'enum')) {
        throw new Error('Assertion failed');
    }
    if (!(template.fields[4].key == 'sports')) {
        throw new Error('Assertion failed');
    }
    if (!(template.fields[4].displayName == 'sports')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(template.fields[4].type) == 'multiSelect')) {
        throw new Error('Assertion failed');
    }
    const updatedTemplate = await client.metadataTemplates.updateMetadataTemplate('enterprise', templateKey, [
        {
            op: 'addField',
            fieldKey: 'newfieldname',
            data: { ['type']: 'string', ['displayName']: 'newFieldName' },
        },
    ]);
    if (!(updatedTemplate.fields.length == 6)) {
        throw new Error('Assertion failed');
    }
    if (!(updatedTemplate.fields[5].key == 'newfieldname')) {
        throw new Error('Assertion failed');
    }
    if (!(updatedTemplate.fields[5].displayName == 'newFieldName')) {
        throw new Error('Assertion failed');
    }
    const getMetadataTemplate = await client.metadataTemplates.getMetadataTemplateById(template.id);
    if (!(getMetadataTemplate.id == template.id)) {
        throw new Error('Assertion failed');
    }
    const getMetadataTemplateSchema = await client.metadataTemplates.getMetadataTemplate('enterprise', template.templateKey);
    if (!(getMetadataTemplateSchema.id == template.id)) {
        throw new Error('Assertion failed');
    }
    const enterpriseMetadataTemplates = await client.metadataTemplates.getEnterpriseMetadataTemplates();
    if (!(enterpriseMetadataTemplates.entries.length > 0)) {
        throw new Error('Assertion failed');
    }
    const globalMetadataTemplates = await client.metadataTemplates.getGlobalMetadataTemplates();
    if (!(globalMetadataTemplates.entries.length > 0)) {
        throw new Error('Assertion failed');
    }
    await client.metadataTemplates.deleteMetadataTemplate('enterprise', template.templateKey);
    await expect(async () => {
        await client.metadataTemplates.deleteMetadataTemplate('enterprise', template.templateKey);
    }).rejects.toThrow();
});
test('testGetMetadataTemplateByInstance', async function testGetMetadataTemplateByInstance() {
    const file = await uploadNewFile();
    const templateKey = ''.concat('key', getUuid());
    const template = await client.metadataTemplates.createMetadataTemplate({
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
    const createdMetadataInstance = await client.fileMetadata.createFileMetadataById(file.id, 'enterprise', templateKey, { ['testName']: 'xyz' });
    const metadataTemplates = await client.metadataTemplates.getMetadataTemplatesByInstanceId({
        metadataInstanceId: createdMetadataInstance.id,
    });
    if (!(metadataTemplates.entries.length == 1)) {
        throw new Error('Assertion failed');
    }
    if (!(metadataTemplates.entries[0].displayName == templateKey)) {
        throw new Error('Assertion failed');
    }
    if (!(metadataTemplates.entries[0].templateKey == templateKey)) {
        throw new Error('Assertion failed');
    }
    await client.fileMetadata.deleteFileMetadataById(file.id, 'enterprise', templateKey);
    await client.metadataTemplates.deleteMetadataTemplate('enterprise', template.templateKey);
    await client.files.deleteFileById(file.id);
});
//# sourceMappingURL=metadataTemplates.generated.test.js.map