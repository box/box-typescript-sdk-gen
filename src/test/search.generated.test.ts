import { serializeMetadataTemplate } from '../schemas/metadataTemplate.generated.js';
import { deserializeMetadataTemplate } from '../schemas/metadataTemplate.generated.js';
import { serializeCreateMetadataTemplateRequestBody } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateRequestBody } from '../managers/metadataTemplates.generated.js';
import { serializeCreateMetadataTemplateRequestBodyFieldsField } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateRequestBodyFieldsField } from '../managers/metadataTemplates.generated.js';
import { serializeCreateMetadataTemplateRequestBodyFieldsTypeField } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateRequestBodyFieldsTypeField } from '../managers/metadataTemplates.generated.js';
import { serializeCreateMetadataTemplateRequestBodyFieldsOptionsField } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateRequestBodyFieldsOptionsField } from '../managers/metadataTemplates.generated.js';
import { serializeFiles } from '../schemas/files.generated.js';
import { deserializeFiles } from '../schemas/files.generated.js';
import { serializeUploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { serializeUploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { serializeFileFull } from '../schemas/fileFull.generated.js';
import { deserializeFileFull } from '../schemas/fileFull.generated.js';
import { serializeMetadataFull } from '../schemas/metadataFull.generated.js';
import { deserializeMetadataFull } from '../schemas/metadataFull.generated.js';
import { serializeCreateFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { deserializeCreateFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { serializeMetadataQueryResults } from '../schemas/metadataQueryResults.generated.js';
import { deserializeMetadataQueryResults } from '../schemas/metadataQueryResults.generated.js';
import { serializeMetadataQuery } from '../schemas/metadataQuery.generated.js';
import { deserializeMetadataQuery } from '../schemas/metadataQuery.generated.js';
import { serializeDeleteMetadataTemplateScope } from '../managers/metadataTemplates.generated.js';
import { deserializeDeleteMetadataTemplateScope } from '../managers/metadataTemplates.generated.js';
import { serializeSearchResultsOrSearchResultsWithSharedLinks } from '../schemas/searchResultsOrSearchResultsWithSharedLinks.generated.js';
import { deserializeSearchResultsOrSearchResultsWithSharedLinks } from '../schemas/searchResultsOrSearchResultsWithSharedLinks.generated.js';
import { serializeSearchForContentQueryParamsTrashContentField } from '../managers/search.generated.js';
import { deserializeSearchForContentQueryParamsTrashContentField } from '../managers/search.generated.js';
import { serializeMetadataFilter } from '../schemas/metadataFilter.generated.js';
import { deserializeMetadataFilter } from '../schemas/metadataFilter.generated.js';
import { serializeMetadataFilterScopeField } from '../schemas/metadataFilter.generated.js';
import { deserializeMetadataFilterScopeField } from '../schemas/metadataFilter.generated.js';
import { serializeMetadataFieldFilterDateRange } from '../schemas/metadataFieldFilterDateRange.generated.js';
import { deserializeMetadataFieldFilterDateRange } from '../schemas/metadataFieldFilterDateRange.generated.js';
import { serializeMetadataFieldFilterFloatRange } from '../schemas/metadataFieldFilterFloatRange.generated.js';
import { deserializeMetadataFieldFilterFloatRange } from '../schemas/metadataFieldFilterFloatRange.generated.js';
import { BoxClient } from '../client.generated.js';
import { MetadataTemplate } from '../schemas/metadataTemplate.generated.js';
import { CreateMetadataTemplateRequestBody } from '../managers/metadataTemplates.generated.js';
import { CreateMetadataTemplateRequestBodyFieldsField } from '../managers/metadataTemplates.generated.js';
import { CreateMetadataTemplateRequestBodyFieldsTypeField } from '../managers/metadataTemplates.generated.js';
import { CreateMetadataTemplateRequestBodyFieldsOptionsField } from '../managers/metadataTemplates.generated.js';
import { Files } from '../schemas/files.generated.js';
import { UploadFileRequestBody } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { FileFull } from '../schemas/fileFull.generated.js';
import { MetadataFull } from '../schemas/metadataFull.generated.js';
import { CreateFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { MetadataQueryResults } from '../schemas/metadataQueryResults.generated.js';
import { MetadataQuery } from '../schemas/metadataQuery.generated.js';
import { DeleteMetadataTemplateScope } from '../managers/metadataTemplates.generated.js';
import { SearchResultsOrSearchResultsWithSharedLinks } from '../schemas/searchResultsOrSearchResultsWithSharedLinks.generated.js';
import { SearchForContentQueryParams } from '../managers/search.generated.js';
import { SearchForContentQueryParamsTrashContentField } from '../managers/search.generated.js';
import { MetadataFilter } from '../schemas/metadataFilter.generated.js';
import { MetadataFilterScopeField } from '../schemas/metadataFilter.generated.js';
import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { dateTimeFromString } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { MetadataFieldFilterDateRange } from '../schemas/metadataFieldFilterDateRange.generated.js';
import { MetadataFieldFilterFloatRange } from '../schemas/metadataFieldFilterFloatRange.generated.js';
import { toString } from '../internal/utils.js';
import { sdToJson } from '../serialization/json.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
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
          type: 'multiSelect' as CreateMetadataTemplateRequestBodyFieldsTypeField,
          key: 'testColor',
          displayName: 'testColor',
          options: [
            {
              key: 'red',
            } satisfies CreateMetadataTemplateRequestBodyFieldsOptionsField,
            {
              key: 'green',
            } satisfies CreateMetadataTemplateRequestBodyFieldsOptionsField,
            {
              key: 'blue',
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
      { ['testColor']: ['red', 'blue'] },
    );
  if (!(metadata.template == templateKey)) {
    throw new Error('Assertion failed');
  }
  if (!(metadata.scope == template.scope)) {
    throw new Error('Assertion failed');
  }
  const searchFrom: string = ''.concat(
    template.scope!,
    '.',
    template.templateKey,
  ) as string;
  const query: MetadataQueryResults = await client.search.searchByMetadataQuery(
    {
      ancestorFolderId: '0',
      from: searchFrom,
      query: 'testColor = :value',
      queryParams: { ['value']: ['red', 'blue'] },
    } satisfies MetadataQuery,
  );
  if (!(query.entries!.length >= 0)) {
    throw new Error('Assertion failed');
  }
  await client.metadataTemplates.deleteMetadataTemplate(
    'enterprise' as DeleteMetadataTemplateScope,
    template.templateKey,
  );
  await client.files.deleteFileById(file.id);
});
test('testGetSearch', async function testGetSearch(): Promise<any> {
  const keyword: string = 'test';
  const search: SearchResultsOrSearchResultsWithSharedLinks =
    await client.search.searchForContent({
      ancestorFolderIds: ['0' as string],
      query: keyword,
      trashContent:
        'non_trashed_only' as SearchForContentQueryParamsTrashContentField,
    } satisfies SearchForContentQueryParams);
  if (!(search.entries!.length >= 0)) {
    throw new Error('Assertion failed');
  }
  if (!((toString(search.type) as string) == 'search_results_items')) {
    throw new Error('Assertion failed');
  }
  const searchWithSharedLink: SearchResultsOrSearchResultsWithSharedLinks =
    await client.search.searchForContent({
      ancestorFolderIds: ['0' as string],
      query: keyword,
      trashContent:
        'non_trashed_only' as SearchForContentQueryParamsTrashContentField,
      includeRecentSharedLinks: true,
    } satisfies SearchForContentQueryParams);
  if (!(searchWithSharedLink.entries!.length >= 0)) {
    throw new Error('Assertion failed');
  }
  if (
    !(
      (toString(searchWithSharedLink.type) as string) ==
      'search_results_with_shared_links'
    )
  ) {
    throw new Error('Assertion failed');
  }
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
  const query: SearchResultsOrSearchResultsWithSharedLinks =
    await client.search.searchForContent({
      ancestorFolderIds: ['0' as string],
      mdfilters: [
        {
          filters: {
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
          },
          scope: 'enterprise' as MetadataFilterScopeField,
          templateKey: templateKey,
        } satisfies MetadataFilter,
      ],
    } satisfies SearchForContentQueryParams);
  if (!(query.entries!.length >= 0)) {
    throw new Error('Assertion failed');
  }
  await client.metadataTemplates.deleteMetadataTemplate(
    'enterprise' as DeleteMetadataTemplateScope,
    template.templateKey!,
  );
  await client.files.deleteFileById(file.id);
});
export {};
