import { serializeMetadataTemplate } from '../schemas.generated.js';
import { deserializeMetadataTemplate } from '../schemas.generated.js';
import { serializeCreateMetadataTemplateRequestBody } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateRequestBody } from '../managers/metadataTemplates.generated.js';
import { serializeCreateMetadataTemplateRequestBodyFieldsField } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateRequestBodyFieldsField } from '../managers/metadataTemplates.generated.js';
import { serializeCreateMetadataTemplateRequestBodyFieldsTypeField } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateRequestBodyFieldsTypeField } from '../managers/metadataTemplates.generated.js';
import { serializeFiles } from '../schemas.generated.js';
import { deserializeFiles } from '../schemas.generated.js';
import { serializeUploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { serializeUploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeMetadataFull } from '../schemas.generated.js';
import { deserializeMetadataFull } from '../schemas.generated.js';
import { serializeCreateFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { deserializeCreateFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { serializeMetadataQueryResults } from '../schemas.generated.js';
import { deserializeMetadataQueryResults } from '../schemas.generated.js';
import { serializeMetadataQuery } from '../schemas.generated.js';
import { deserializeMetadataQuery } from '../schemas.generated.js';
import { serializeDeleteMetadataTemplateScope } from '../managers/metadataTemplates.generated.js';
import { deserializeDeleteMetadataTemplateScope } from '../managers/metadataTemplates.generated.js';
import { serializeMetadataQueryIndices } from '../schemas.generated.js';
import { deserializeMetadataQueryIndices } from '../schemas.generated.js';
import { serializeGetMetadataQueryIndicesQueryParamsScopeField } from '../managers/search.generated.js';
import { deserializeGetMetadataQueryIndicesQueryParamsScopeField } from '../managers/search.generated.js';
import { serializeSearchResultsOrSearchResultsWithSharedLinks } from '../schemas.generated.js';
import { deserializeSearchResultsOrSearchResultsWithSharedLinks } from '../schemas.generated.js';
import { serializeGetSearchQueryParamsTrashContentField } from '../managers/search.generated.js';
import { deserializeGetSearchQueryParamsTrashContentField } from '../managers/search.generated.js';
import { BoxClient } from '../client.generated.js';
import { MetadataTemplate } from '../schemas.generated.js';
import { CreateMetadataTemplateRequestBody } from '../managers/metadataTemplates.generated.js';
import { CreateMetadataTemplateRequestBodyFieldsField } from '../managers/metadataTemplates.generated.js';
import { CreateMetadataTemplateRequestBodyFieldsTypeField } from '../managers/metadataTemplates.generated.js';
import { Files } from '../schemas.generated.js';
import { UploadFileRequestBody } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { FileFull } from '../schemas.generated.js';
import { MetadataFull } from '../schemas.generated.js';
import { CreateFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { MetadataQueryResults } from '../schemas.generated.js';
import { MetadataQuery } from '../schemas.generated.js';
import { DeleteMetadataTemplateScope } from '../managers/metadataTemplates.generated.js';
import { MetadataQueryIndices } from '../schemas.generated.js';
import { GetMetadataQueryIndicesQueryParams } from '../managers/search.generated.js';
import { GetMetadataQueryIndicesQueryParamsScopeField } from '../managers/search.generated.js';
import { SearchResultsOrSearchResultsWithSharedLinks } from '../schemas.generated.js';
import { GetSearchQueryParams } from '../managers/search.generated.js';
import { GetSearchQueryParamsTrashContentField } from '../managers/search.generated.js';
import { getUuid } from '../utils.js';
import { generateByteStream } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../utils.js';
import { sdToJson } from '../json.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: any = getDefaultClient();
test('testCreateMetaDataQueryExecuteRead', async function testCreateMetaDataQueryExecuteRead(): Promise<any> {
  const templateKey: any = ''.concat('key', getUuid()) as string;
  const template: any = await client.metadataTemplates.createMetadataTemplate({
    scope: 'enterprise',
    displayName: templateKey,
    templateKey: templateKey,
    fields: [
      {
        type: 'float' as CreateMetadataTemplateRequestBodyFieldsTypeField,
        key: 'testName',
        displayName: 'testName',
      } satisfies CreateMetadataTemplateRequestBodyFieldsField,
    ],
  } satisfies CreateMetadataTemplateRequestBody);
  if (!(template.templateKey == templateKey)) {
    throw 'Assertion failed';
  }
  const files: any = await client.uploads.uploadFile({
    attributes: {
      name: getUuid(),
      parent: { id: '0' } satisfies UploadFileRequestBodyAttributesParentField,
    } satisfies UploadFileRequestBodyAttributesField,
    file: generateByteStream(10),
  } satisfies UploadFileRequestBody);
  const file: any = files.entries![0];
  const metadata: any = await client.fileMetadata.createFileMetadataById(
    file.id,
    'enterprise' as CreateFileMetadataByIdScope,
    templateKey,
    { ['testName']: 1 }
  );
  if (!(metadata.template == templateKey)) {
    throw 'Assertion failed';
  }
  if (!(metadata.scope == template.scope)) {
    throw 'Assertion failed';
  }
  const searchFrom: any = ''.concat(
    template.scope!,
    '.',
    template.templateKey
  ) as string;
  const query: any = await client.search.createMetadataQueryExecuteRead({
    ancestorFolderId: '0',
    from: searchFrom,
    query: 'testName >= :value',
    queryParams: { ['value']: '0.0' },
  } satisfies MetadataQuery);
  if (!(query.entries!.length >= 0)) {
    throw 'Assertion failed';
  }
  await client.metadataTemplates.deleteMetadataTemplate(
    'enterprise' as DeleteMetadataTemplateScope,
    template.templateKey
  );
  await client.files.deleteFileById(file.id);
});
test('testGetMetadataQueryIndices', async function testGetMetadataQueryIndices(): Promise<any> {
  const templateKey: any = ''.concat('key', getUuid()) as string;
  const template: any = await client.metadataTemplates.createMetadataTemplate({
    scope: 'enterprise',
    displayName: templateKey,
    templateKey: templateKey,
    fields: [
      {
        type: 'string' as CreateMetadataTemplateRequestBodyFieldsTypeField,
        key: 'testName',
        displayName: 'testName',
      } satisfies CreateMetadataTemplateRequestBodyFieldsField,
    ],
  } satisfies CreateMetadataTemplateRequestBody);
  if (!(template.templateKey == templateKey)) {
    throw 'Assertion failed';
  }
  const indices: any = await client.search.getMetadataQueryIndices({
    scope: 'enterprise' as GetMetadataQueryIndicesQueryParamsScopeField,
    templateKey: templateKey,
  } satisfies GetMetadataQueryIndicesQueryParams);
  if (!(indices.entries!.length >= 0)) {
    throw 'Assertion failed';
  }
  await client.metadataTemplates.deleteMetadataTemplate(
    'enterprise' as DeleteMetadataTemplateScope,
    template.templateKey
  );
});
test('testGetSearch', async function testGetSearch(): Promise<any> {
  const keyword: any = 'test';
  const search: any = await client.search.getSearch({
    ancestorFolderIds: ['0' as ''],
    query: keyword,
    trashContent: 'non_trashed_only' as GetSearchQueryParamsTrashContentField,
  } satisfies GetSearchQueryParams);
  if (!(search.entries!.length >= 0)) {
    throw 'Assertion failed';
  }
  if (!((toString(search.type) as string) == 'search_results_items')) {
    throw 'Assertion failed';
  }
  const searchWithSharedLink: any = await client.search.getSearch({
    ancestorFolderIds: ['0' as ''],
    query: keyword,
    trashContent: 'non_trashed_only' as GetSearchQueryParamsTrashContentField,
    includeRecentSharedLinks: true,
  } satisfies GetSearchQueryParams);
  if (!(searchWithSharedLink.entries!.length >= 0)) {
    throw 'Assertion failed';
  }
  if (
    !(
      (toString(searchWithSharedLink.type) as string) ==
      'search_results_with_shared_links'
    )
  ) {
    throw 'Assertion failed';
  }
});
export {};
