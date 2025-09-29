import { serializeMetadataTemplate } from '@/schemas/metadataTemplate.generated';
import { deserializeMetadataTemplate } from '@/schemas/metadataTemplate.generated';
import { serializeCreateMetadataTemplateRequestBody } from '@/managers/metadataTemplates.generated';
import { deserializeCreateMetadataTemplateRequestBody } from '@/managers/metadataTemplates.generated';
import { serializeCreateMetadataTemplateRequestBodyFieldsField } from '@/managers/metadataTemplates.generated';
import { deserializeCreateMetadataTemplateRequestBodyFieldsField } from '@/managers/metadataTemplates.generated';
import { serializeCreateMetadataTemplateRequestBodyFieldsTypeField } from '@/managers/metadataTemplates.generated';
import { deserializeCreateMetadataTemplateRequestBodyFieldsTypeField } from '@/managers/metadataTemplates.generated';
import { serializeCreateMetadataTemplateRequestBodyFieldsOptionsField } from '@/managers/metadataTemplates.generated';
import { deserializeCreateMetadataTemplateRequestBodyFieldsOptionsField } from '@/managers/metadataTemplates.generated';
import { serializeFiles } from '@/schemas/files.generated';
import { deserializeFiles } from '@/schemas/files.generated';
import { serializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { serializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { serializeFileFull } from '@/schemas/fileFull.generated';
import { deserializeFileFull } from '@/schemas/fileFull.generated';
import { serializeMetadataFull } from '@/schemas/metadataFull.generated';
import { deserializeMetadataFull } from '@/schemas/metadataFull.generated';
import { serializeCreateFileMetadataByIdScope } from '@/managers/fileMetadata.generated';
import { deserializeCreateFileMetadataByIdScope } from '@/managers/fileMetadata.generated';
import { serializeMetadataQueryResults } from '@/schemas/metadataQueryResults.generated';
import { deserializeMetadataQueryResults } from '@/schemas/metadataQueryResults.generated';
import { serializeMetadataQuery } from '@/schemas/metadataQuery.generated';
import { deserializeMetadataQuery } from '@/schemas/metadataQuery.generated';
import { serializeDeleteMetadataTemplateScope } from '@/managers/metadataTemplates.generated';
import { deserializeDeleteMetadataTemplateScope } from '@/managers/metadataTemplates.generated';
import { serializeSearchResultsOrSearchResultsWithSharedLinks } from '@/schemas/searchResultsOrSearchResultsWithSharedLinks.generated';
import { deserializeSearchResultsOrSearchResultsWithSharedLinks } from '@/schemas/searchResultsOrSearchResultsWithSharedLinks.generated';
import { serializeMetadataFilter } from '@/schemas/metadataFilter.generated';
import { deserializeMetadataFilter } from '@/schemas/metadataFilter.generated';
import { serializeMetadataFilterScopeField } from '@/schemas/metadataFilter.generated';
import { deserializeMetadataFilterScopeField } from '@/schemas/metadataFilter.generated';
import { serializeSearchForContentQueryParamsTrashContentField } from '@/managers/search.generated';
import { deserializeSearchForContentQueryParamsTrashContentField } from '@/managers/search.generated';
import { serializeMetadataFieldFilterDateRange } from '@/schemas/metadataFieldFilterDateRange.generated';
import { deserializeMetadataFieldFilterDateRange } from '@/schemas/metadataFieldFilterDateRange.generated';
import { serializeMetadataFieldFilterFloatRange } from '@/schemas/metadataFieldFilterFloatRange.generated';
import { deserializeMetadataFieldFilterFloatRange } from '@/schemas/metadataFieldFilterFloatRange.generated';
import { serializeSearchResults } from '@/schemas/searchResults.generated';
import { deserializeSearchResults } from '@/schemas/searchResults.generated';
import { serializeSearchResultsWithSharedLinks } from '@/schemas/searchResultsWithSharedLinks.generated';
import { deserializeSearchResultsWithSharedLinks } from '@/schemas/searchResultsWithSharedLinks.generated';
import { serializeMetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString } from '@/schemas/metadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString.generated';
import { deserializeMetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString } from '@/schemas/metadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString.generated';
import { BoxClient } from '@/client.generated';
import { MetadataTemplate } from '@/schemas/metadataTemplate.generated';
import { CreateMetadataTemplateRequestBody } from '@/managers/metadataTemplates.generated';
import { CreateMetadataTemplateRequestBodyFieldsField } from '@/managers/metadataTemplates.generated';
import { CreateMetadataTemplateRequestBodyFieldsTypeField } from '@/managers/metadataTemplates.generated';
import { CreateMetadataTemplateRequestBodyFieldsOptionsField } from '@/managers/metadataTemplates.generated';
import { Files } from '@/schemas/files.generated';
import { UploadFileRequestBody } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { FileFull } from '@/schemas/fileFull.generated';
import { MetadataFull } from '@/schemas/metadataFull.generated';
import { CreateFileMetadataByIdScope } from '@/managers/fileMetadata.generated';
import { MetadataQueryResults } from '@/schemas/metadataQueryResults.generated';
import { MetadataQuery } from '@/schemas/metadataQuery.generated';
import { DeleteMetadataTemplateScope } from '@/managers/metadataTemplates.generated';
import { SearchResultsOrSearchResultsWithSharedLinks } from '@/schemas/searchResultsOrSearchResultsWithSharedLinks.generated';
import { SearchForContentQueryParams } from '@/managers/search.generated';
import { MetadataFilter } from '@/schemas/metadataFilter.generated';
import { MetadataFilterScopeField } from '@/schemas/metadataFilter.generated';
import { SearchForContentQueryParamsTrashContentField } from '@/managers/search.generated';
import { getUuid } from '@/internal/utils';
import { generateByteStream } from '@/internal/utils';
import { dateTimeFromString } from '@/internal/utils';
import { delayInSeconds } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { MetadataFieldFilterDateRange } from '@/schemas/metadataFieldFilterDateRange.generated';
import { MetadataFieldFilterFloatRange } from '@/schemas/metadataFieldFilterFloatRange.generated';
import { SearchResults } from '@/schemas/searchResults.generated';
import { SearchResultsWithSharedLinks } from '@/schemas/searchResultsWithSharedLinks.generated';
import { MetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString } from '@/schemas/metadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString.generated';
import { toString } from '@/internal/utils';
import { sdToJson } from '@/serialization/json';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('testCreateMetaDataQueryExecuteRead', async function testCreateMetaDataQueryExecuteRead(): Promise<any> {
  const templateKey: string = ''.concat('key', getUuid()) as string;
  const template: MetadataTemplate =
    await client.metadataTemplates.createMetadataTemplate({
      scope: 'enterprise',
      displayName: templateKey,
      templateKey: templateKey,
      fields: [
        {
          type: 'string' as CreateMetadataTemplateRequestBodyFieldsTypeField,
          key: 'name',
          displayName: 'name',
        } satisfies CreateMetadataTemplateRequestBodyFieldsField,
        {
          type: 'float' as CreateMetadataTemplateRequestBodyFieldsTypeField,
          key: 'age',
          displayName: 'age',
        } satisfies CreateMetadataTemplateRequestBodyFieldsField,
        {
          type: 'date' as CreateMetadataTemplateRequestBodyFieldsTypeField,
          key: 'birthDate',
          displayName: 'birthDate',
        } satisfies CreateMetadataTemplateRequestBodyFieldsField,
        {
          type: 'enum' as CreateMetadataTemplateRequestBodyFieldsTypeField,
          key: 'countryCode',
          displayName: 'countryCode',
          options: [
            {
              key: 'US',
            } satisfies CreateMetadataTemplateRequestBodyFieldsOptionsField,
            {
              key: 'CA',
            } satisfies CreateMetadataTemplateRequestBodyFieldsOptionsField,
          ],
        } satisfies CreateMetadataTemplateRequestBodyFieldsField,
        {
          type: 'multiSelect' as CreateMetadataTemplateRequestBodyFieldsTypeField,
          key: 'sports',
          displayName: 'sports',
          options: [
            {
              key: 'basketball',
            } satisfies CreateMetadataTemplateRequestBodyFieldsOptionsField,
            {
              key: 'football',
            } satisfies CreateMetadataTemplateRequestBodyFieldsOptionsField,
            {
              key: 'tennis',
            } satisfies CreateMetadataTemplateRequestBodyFieldsOptionsField,
          ],
        } satisfies CreateMetadataTemplateRequestBodyFieldsField,
      ],
    } satisfies CreateMetadataTemplateRequestBody);
  if (!(template.templateKey == templateKey)) {
    throw new Error('Assertion failed');
  }
  const files: Files = await client.uploads.uploadFile({
    attributes: {
      name: getUuid(),
      parent: { id: '0' } satisfies UploadFileRequestBodyAttributesParentField,
    } satisfies UploadFileRequestBodyAttributesField,
    file: generateByteStream(10),
  } satisfies UploadFileRequestBody);
  const file: FileFull = files.entries![0];
  const metadata: MetadataFull =
    await client.fileMetadata.createFileMetadataById(
      file.id,
      'enterprise' as CreateFileMetadataByIdScope,
      templateKey,
      {
        ['name']: 'John',
        ['age']: 23,
        ['birthDate']: '2001-01-03T02:20:50.520Z',
        ['countryCode']: 'US',
        ['sports']: ['basketball', 'tennis'],
      },
    );
  if (!(metadata.template == templateKey)) {
    throw new Error('Assertion failed');
  }
  if (!(metadata.scope == template.scope)) {
    throw new Error('Assertion failed');
  }
  await delayInSeconds(5);
  const searchFrom: string = ''.concat(
    template.scope!,
    '.',
    template.templateKey!,
  ) as string;
  const query: MetadataQueryResults = await client.search.searchByMetadataQuery(
    {
      ancestorFolderId: '0',
      from: searchFrom,
      query:
        'name = :name AND age < :age AND birthDate >= :birthDate AND countryCode = :countryCode AND sports = :sports',
      queryParams: {
        ['name']: 'John',
        ['age']: 50,
        ['birthDate']: '2001-01-01T02:20:10.120Z',
        ['countryCode']: 'US',
        ['sports']: ['basketball', 'tennis'],
      },
    } satisfies MetadataQuery,
  );
  if (!(query.entries!.length >= 0)) {
    throw new Error('Assertion failed');
  }
  await client.metadataTemplates.deleteMetadataTemplate(
    'enterprise' as DeleteMetadataTemplateScope,
    template.templateKey!,
  );
  await client.files.deleteFileById(file.id);
});
test('testMetadataFilters', async function testMetadataFilters(): Promise<any> {
  const templateKey: string = ''.concat('key', getUuid()) as string;
  const template: MetadataTemplate =
    await client.metadataTemplates.createMetadataTemplate({
      scope: 'enterprise',
      displayName: templateKey,
      templateKey: templateKey,
      fields: [
        {
          type: 'float' as CreateMetadataTemplateRequestBodyFieldsTypeField,
          key: 'floatField',
          displayName: 'floatField',
        } satisfies CreateMetadataTemplateRequestBodyFieldsField,
        {
          type: 'string' as CreateMetadataTemplateRequestBodyFieldsTypeField,
          key: 'stringField',
          displayName: 'stringField',
        } satisfies CreateMetadataTemplateRequestBodyFieldsField,
        {
          type: 'date' as CreateMetadataTemplateRequestBodyFieldsTypeField,
          key: 'dateField',
          displayName: 'dateField',
        } satisfies CreateMetadataTemplateRequestBodyFieldsField,
        {
          type: 'enum' as CreateMetadataTemplateRequestBodyFieldsTypeField,
          key: 'enumField',
          displayName: 'enumField',
          options: [
            {
              key: 'enumValue1',
            } satisfies CreateMetadataTemplateRequestBodyFieldsOptionsField,
            {
              key: 'enumValue2',
            } satisfies CreateMetadataTemplateRequestBodyFieldsOptionsField,
          ],
        } satisfies CreateMetadataTemplateRequestBodyFieldsField,
        {
          type: 'multiSelect' as CreateMetadataTemplateRequestBodyFieldsTypeField,
          key: 'multiSelectField',
          displayName: 'multiSelectField',
          options: [
            {
              key: 'multiSelectValue1',
            } satisfies CreateMetadataTemplateRequestBodyFieldsOptionsField,
            {
              key: 'multiSelectValue2',
            } satisfies CreateMetadataTemplateRequestBodyFieldsOptionsField,
          ],
        } satisfies CreateMetadataTemplateRequestBodyFieldsField,
      ],
    } satisfies CreateMetadataTemplateRequestBody);
  const files: Files = await client.uploads.uploadFile({
    attributes: {
      name: getUuid(),
      parent: { id: '0' } satisfies UploadFileRequestBodyAttributesParentField,
    } satisfies UploadFileRequestBodyAttributesField,
    file: generateByteStream(10),
  } satisfies UploadFileRequestBody);
  const file: FileFull = files.entries![0];
  const metadata: MetadataFull =
    await client.fileMetadata.createFileMetadataById(
      file.id,
      'enterprise' as CreateFileMetadataByIdScope,
      templateKey,
      {
        ['floatField']: 10,
        ['stringField']: 'stringValue',
        ['dateField']: '2035-01-02T00:00:00Z',
        ['enumField']: 'enumValue2',
        ['multiSelectField']: ['multiSelectValue1', 'multiSelectValue2'],
      },
    );
  const searchFilters: {
    readonly [
      key: string
    ]: MetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString;
  } = {
    ['stringField']: 'stringValue',
    ['dateField']: {
      lt: dateTimeFromString('2035-01-01T00:00:00Z'),
      gt: dateTimeFromString('2035-01-03T00:00:00Z'),
    } satisfies MetadataFieldFilterDateRange,
    ['floatField']: {
      lt: 9.5,
      gt: 10.5,
    } satisfies MetadataFieldFilterFloatRange,
    ['enumField']: 'enumValue2',
    ['multiSelectField']: ['multiSelectValue1', 'multiSelectValue2'],
  };
  const query: SearchResultsOrSearchResultsWithSharedLinks =
    await client.search.searchForContent({
      ancestorFolderIds: ['0'],
      mdfilters: [
        {
          filters: searchFilters,
          scope: 'enterprise' as MetadataFilterScopeField,
          templateKey: templateKey,
        } satisfies MetadataFilter,
      ],
    } satisfies SearchForContentQueryParams);
  const queryResults: SearchResults = query as SearchResults;
  if (!(queryResults.entries!.length >= 0)) {
    throw new Error('Assertion failed');
  }
  await client.metadataTemplates.deleteMetadataTemplate(
    'enterprise' as DeleteMetadataTemplateScope,
    template.templateKey!,
  );
  await client.files.deleteFileById(file.id);
});
test('testGetSearch', async function testGetSearch(): Promise<any> {
  const keyword: string = 'test';
  const search: SearchResultsOrSearchResultsWithSharedLinks =
    await client.search.searchForContent({
      ancestorFolderIds: ['0'],
      query: keyword,
      trashContent:
        'non_trashed_only' as SearchForContentQueryParamsTrashContentField,
    } satisfies SearchForContentQueryParams);
  if (!((toString(search.type) as string) == 'search_results_items')) {
    throw new Error('Assertion failed');
  }
  const searchResults: SearchResults = search as SearchResults;
  if (!(searchResults.entries!.length >= 0)) {
    throw new Error('Assertion failed');
  }
  const searchWithSharedLink: SearchResultsOrSearchResultsWithSharedLinks =
    await client.search.searchForContent({
      ancestorFolderIds: ['0'],
      query: keyword,
      trashContent:
        'non_trashed_only' as SearchForContentQueryParamsTrashContentField,
      includeRecentSharedLinks: true,
    } satisfies SearchForContentQueryParams);
  if (
    !(
      (toString(searchWithSharedLink.type) as string) ==
      'search_results_with_shared_links'
    )
  ) {
    throw new Error('Assertion failed');
  }
  const searchResultsWithSharedLink: SearchResultsWithSharedLinks =
    searchWithSharedLink as SearchResultsWithSharedLinks;
  if (!(searchResultsWithSharedLink.entries!.length >= 0)) {
    throw new Error('Assertion failed');
  }
});
export {};
