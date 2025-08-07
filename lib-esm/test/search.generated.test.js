import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { dateTimeFromString } from '../internal/utils.js';
import { delayInSeconds } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testCreateMetaDataQueryExecuteRead', async function testCreateMetaDataQueryExecuteRead() {
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
    if (!(template.templateKey == templateKey)) {
        throw new Error('Assertion failed');
    }
    const files = await client.uploads.uploadFile({
        attributes: {
            name: getUuid(),
            parent: { id: '0' },
        },
        file: generateByteStream(10),
    });
    const file = files.entries[0];
    const metadata = await client.fileMetadata.createFileMetadataById(file.id, 'enterprise', templateKey, {
        ['name']: 'John',
        ['age']: 23,
        ['birthDate']: '2001-01-03T02:20:50.520Z',
        ['countryCode']: 'US',
        ['sports']: ['basketball', 'tennis'],
    });
    if (!(metadata.template == templateKey)) {
        throw new Error('Assertion failed');
    }
    if (!(metadata.scope == template.scope)) {
        throw new Error('Assertion failed');
    }
    await delayInSeconds(5);
    const searchFrom = ''.concat(template.scope, '.', template.templateKey);
    const query = await client.search.searchByMetadataQuery({
        ancestorFolderId: '0',
        from: searchFrom,
        query: 'name = :name AND age < :age AND birthDate >= :birthDate AND countryCode = :countryCode AND sports = :sports',
        queryParams: {
            ['name']: 'John',
            ['age']: 50,
            ['birthDate']: '2001-01-01T02:20:10.120Z',
            ['countryCode']: 'US',
            ['sports']: ['basketball', 'tennis'],
        },
    });
    if (!(query.entries.length >= 0)) {
        throw new Error('Assertion failed');
    }
    await client.metadataTemplates.deleteMetadataTemplate('enterprise', template.templateKey);
    await client.files.deleteFileById(file.id);
});
test('testMetadataFilters', async function testMetadataFilters() {
    const templateKey = ''.concat('key', getUuid());
    const template = await client.metadataTemplates.createMetadataTemplate({
        scope: 'enterprise',
        displayName: templateKey,
        templateKey: templateKey,
        fields: [
            {
                type: 'float',
                key: 'floatField',
                displayName: 'floatField',
            },
            {
                type: 'string',
                key: 'stringField',
                displayName: 'stringField',
            },
            {
                type: 'date',
                key: 'dateField',
                displayName: 'dateField',
            },
            {
                type: 'enum',
                key: 'enumField',
                displayName: 'enumField',
                options: [
                    {
                        key: 'enumValue1',
                    },
                    {
                        key: 'enumValue2',
                    },
                ],
            },
            {
                type: 'multiSelect',
                key: 'multiSelectField',
                displayName: 'multiSelectField',
                options: [
                    {
                        key: 'multiSelectValue1',
                    },
                    {
                        key: 'multiSelectValue2',
                    },
                ],
            },
        ],
    });
    const files = await client.uploads.uploadFile({
        attributes: {
            name: getUuid(),
            parent: { id: '0' },
        },
        file: generateByteStream(10),
    });
    const file = files.entries[0];
    const metadata = await client.fileMetadata.createFileMetadataById(file.id, 'enterprise', templateKey, {
        ['floatField']: 10,
        ['stringField']: 'stringValue',
        ['dateField']: '2035-01-02T00:00:00Z',
        ['enumField']: 'enumValue2',
        ['multiSelectField']: ['multiSelectValue1', 'multiSelectValue2'],
    });
    const searchFilters = {
        ['stringField']: 'stringValue',
        ['dateField']: {
            lt: dateTimeFromString('2035-01-01T00:00:00Z'),
            gt: dateTimeFromString('2035-01-03T00:00:00Z'),
        },
        ['floatField']: {
            lt: 9.5,
            gt: 10.5,
        },
        ['enumField']: 'enumValue2',
        ['multiSelectField']: ['multiSelectValue1', 'multiSelectValue2'],
    };
    const query = await client.search.searchForContent({
        ancestorFolderIds: ['0'],
        mdfilters: [
            {
                filters: searchFilters,
                scope: 'enterprise',
                templateKey: templateKey,
            },
        ],
    });
    const queryResults = query;
    if (!(queryResults.entries.length >= 0)) {
        throw new Error('Assertion failed');
    }
    await client.metadataTemplates.deleteMetadataTemplate('enterprise', template.templateKey);
    await client.files.deleteFileById(file.id);
});
test('testGetSearch', async function testGetSearch() {
    const keyword = 'test';
    const search = await client.search.searchForContent({
        ancestorFolderIds: ['0'],
        query: keyword,
        trashContent: 'non_trashed_only',
    });
    if (!(toString(search.type) == 'search_results_items')) {
        throw new Error('Assertion failed');
    }
    const searchResults = search;
    if (!(searchResults.entries.length >= 0)) {
        throw new Error('Assertion failed');
    }
    const searchWithSharedLink = await client.search.searchForContent({
        ancestorFolderIds: ['0'],
        query: keyword,
        trashContent: 'non_trashed_only',
        includeRecentSharedLinks: true,
    });
    if (!(toString(searchWithSharedLink.type) ==
        'search_results_with_shared_links')) {
        throw new Error('Assertion failed');
    }
    const searchResultsWithSharedLink = searchWithSharedLink;
    if (!(searchResultsWithSharedLink.entries.length >= 0)) {
        throw new Error('Assertion failed');
    }
});
//# sourceMappingURL=search.generated.test.js.map