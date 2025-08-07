import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testUpdatingFileMetadata', async function testUpdatingFileMetadata() {
    const file = await uploadNewFile();
    const templateKey = ''.concat('key', getUuid());
    const template = await client.metadataTemplates.createMetadataTemplate({
        scope: 'enterprise',
        displayName: templateKey,
        templateKey: templateKey,
        fields: [
            {
                type: 'string',
                key: 'name',
                displayName: 'name',
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
    const createdMetadata = await client.fileMetadata.createFileMetadataById(file.id, 'enterprise', templateKey, {
        ['name']: 'John',
        ['age']: 23,
        ['birthDate']: '2001-01-03T02:20:50.520Z',
        ['countryCode']: 'US',
        ['sports']: ['basketball', 'tennis'],
    });
    const updatedMetadata = await client.fileMetadata.updateFileMetadataById(file.id, 'enterprise', templateKey, [
        {
            op: 'replace',
            path: '/name',
            value: 'Jack',
        },
        {
            op: 'replace',
            path: '/age',
            value: 24,
        },
        {
            op: 'replace',
            path: '/birthDate',
            value: '2000-01-03T02:20:50.520Z',
        },
        {
            op: 'replace',
            path: '/countryCode',
            value: 'CA',
        },
        {
            op: 'replace',
            path: '/sports',
            value: ['football'],
        },
    ]);
    if (!(toString(updatedMetadata.template) == templateKey)) {
        throw new Error('Assertion failed');
    }
    if (!(toString(updatedMetadata.extraData.name) == 'Jack')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(updatedMetadata.extraData.age) == '24')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(updatedMetadata.extraData.birthDate) ==
        '2000-01-03T02:20:50.520Z')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(updatedMetadata.extraData.countryCode) == 'CA')) {
        throw new Error('Assertion failed');
    }
    const sports = updatedMetadata.extraData.sports;
    if (!(sports[0] == 'football')) {
        throw new Error('Assertion failed');
    }
    await client.fileMetadata.deleteFileMetadataById(file.id, 'enterprise', templateKey);
    await client.metadataTemplates.deleteMetadataTemplate('enterprise', templateKey);
    await client.files.deleteFileById(file.id);
});
test('testGlobalFileMetadata', async function testGlobalFileMetadata() {
    const file = await uploadNewFile();
    const fileMetadata = await client.fileMetadata.getFileMetadata(file.id);
    if (!(fileMetadata.entries.length == 0)) {
        throw new Error('Assertion failed');
    }
    const createdMetadata = await client.fileMetadata.createFileMetadataById(file.id, 'global', 'properties', { ['abc']: 'xyz' });
    if (!(toString(createdMetadata.template) == 'properties')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(createdMetadata.scope) == 'global')) {
        throw new Error('Assertion failed');
    }
    if (!(createdMetadata.version == 0)) {
        throw new Error('Assertion failed');
    }
    const receivedMetadata = await client.fileMetadata.getFileMetadataById(file.id, 'global', 'properties');
    if (!(toString(receivedMetadata.extraData.abc) == 'xyz')) {
        throw new Error('Assertion failed');
    }
    const newValue = 'bar';
    await client.fileMetadata.updateFileMetadataById(file.id, 'global', 'properties', [
        {
            op: 'replace',
            path: '/abc',
            value: newValue,
        },
    ]);
    const receivedUpdatedMetadata = await client.fileMetadata.getFileMetadataById(file.id, 'global', 'properties');
    if (!(toString(receivedUpdatedMetadata.extraData.abc) == newValue)) {
        throw new Error('Assertion failed');
    }
    await client.fileMetadata.deleteFileMetadataById(file.id, 'global', 'properties');
    await expect(async () => {
        await client.fileMetadata.getFileMetadataById(file.id, 'global', 'properties');
    }).rejects.toThrow();
    await client.files.deleteFileById(file.id);
});
test('testEnterpriseFileMetadata', async function testEnterpriseFileMetadata() {
    const file = await uploadNewFile();
    const templateKey = ''.concat('key', getUuid());
    await client.metadataTemplates.createMetadataTemplate({
        scope: 'enterprise',
        displayName: templateKey,
        templateKey: templateKey,
        fields: [
            {
                type: 'string',
                key: 'name',
                displayName: 'name',
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
    const createdMetadata = await client.fileMetadata.createFileMetadataById(file.id, 'enterprise', templateKey, {
        ['name']: 'John',
        ['age']: 23,
        ['birthDate']: '2001-01-03T02:20:50.520Z',
        ['countryCode']: 'US',
        ['sports']: ['basketball', 'tennis'],
    });
    if (!(toString(createdMetadata.template) == templateKey)) {
        throw new Error('Assertion failed');
    }
    if (!(toString(createdMetadata.extraData.name) == 'John')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(createdMetadata.extraData.age) == '23')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(createdMetadata.extraData.birthDate) ==
        '2001-01-03T02:20:50.520Z')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(createdMetadata.extraData.countryCode) == 'US')) {
        throw new Error('Assertion failed');
    }
    const sports = createdMetadata.extraData.sports;
    if (!(sports[0] == 'basketball')) {
        throw new Error('Assertion failed');
    }
    if (!(sports[1] == 'tennis')) {
        throw new Error('Assertion failed');
    }
    await client.fileMetadata.deleteFileMetadataById(file.id, 'enterprise', templateKey);
    await client.metadataTemplates.deleteMetadataTemplate('enterprise', templateKey);
    await client.files.deleteFileById(file.id);
});
//# sourceMappingURL=fileMetadata.generated.test.js.map