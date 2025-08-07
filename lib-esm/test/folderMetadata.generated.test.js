import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { createNewFolder } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testUpdatingFolderMetadata', async function testUpdatingFolderMetadata() {
    const folder = await createNewFolder();
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
    const createdMetadata = await client.folderMetadata.createFolderMetadataById(folder.id, 'enterprise', templateKey, {
        ['name']: 'John',
        ['age']: 23,
        ['birthDate']: '2001-01-03T02:20:50.520Z',
        ['countryCode']: 'US',
        ['sports']: ['basketball', 'tennis'],
    });
    const updatedMetadata = await client.folderMetadata.updateFolderMetadataById(folder.id, 'enterprise', templateKey, [
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
    await client.folderMetadata.deleteFolderMetadataById(folder.id, 'enterprise', templateKey);
    await client.metadataTemplates.deleteMetadataTemplate('enterprise', templateKey);
    await client.folders.deleteFolderById(folder.id);
});
test('testGlobalFolderMetadata', async function testGlobalFolderMetadata() {
    const folder = await createNewFolder();
    const folderMetadata = await client.folderMetadata.getFolderMetadata(folder.id);
    if (!(folderMetadata.entries.length == 0)) {
        throw new Error('Assertion failed');
    }
    const createdMetadata = await client.folderMetadata.createFolderMetadataById(folder.id, 'global', 'properties', { ['abc']: 'xyz' });
    if (!(toString(createdMetadata.template) == 'properties')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(createdMetadata.scope) == 'global')) {
        throw new Error('Assertion failed');
    }
    if (!(createdMetadata.version == 0)) {
        throw new Error('Assertion failed');
    }
    const receivedMetadata = await client.folderMetadata.getFolderMetadataById(folder.id, 'global', 'properties');
    if (!(toString(receivedMetadata.extraData.abc) == 'xyz')) {
        throw new Error('Assertion failed');
    }
    const newValue = 'bar';
    await client.folderMetadata.updateFolderMetadataById(folder.id, 'global', 'properties', [
        {
            op: 'replace',
            path: '/abc',
            value: newValue,
        },
    ]);
    const receivedUpdatedMetadata = await client.folderMetadata.getFolderMetadataById(folder.id, 'global', 'properties');
    if (!(toString(receivedUpdatedMetadata.extraData.abc) == newValue)) {
        throw new Error('Assertion failed');
    }
    await client.folderMetadata.deleteFolderMetadataById(folder.id, 'global', 'properties');
    await expect(async () => {
        await client.folderMetadata.getFolderMetadataById(folder.id, 'global', 'properties');
    }).rejects.toThrow();
    await client.folders.deleteFolderById(folder.id);
});
test('testEnterpriseFolderMetadata', async function testEnterpriseFolderMetadata() {
    const folder = await createNewFolder();
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
    const createdMetadata = await client.folderMetadata.createFolderMetadataById(folder.id, 'enterprise', templateKey, {
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
    await client.folderMetadata.deleteFolderMetadataById(folder.id, 'enterprise', templateKey);
    await client.metadataTemplates.deleteMetadataTemplate('enterprise', templateKey);
    await client.folders.deleteFolderById(folder.id);
});
//# sourceMappingURL=folderMetadata.generated.test.js.map