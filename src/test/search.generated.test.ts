import { serializeMetadataTemplate } from '../schemas.generated.js';
import { deserializeMetadataTemplate } from '../schemas.generated.js';
import { serializeCreateMetadataTemplateSchemaRequestBodyArg } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateSchemaRequestBodyArg } from '../managers/metadataTemplates.generated.js';
import { serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField } from '../managers/metadataTemplates.generated.js';
import { serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField } from '../managers/metadataTemplates.generated.js';
import { serializeFiles } from '../schemas.generated.js';
import { deserializeFiles } from '../schemas.generated.js';
import { serializeUploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { serializeUploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { serializeFile } from '../schemas.generated.js';
import { deserializeFile } from '../schemas.generated.js';
import { serializeMetadata } from '../schemas.generated.js';
import { deserializeMetadata } from '../schemas.generated.js';
import { serializeCreateFileMetadataByIdScopeArg } from '../managers/fileMetadata.generated.js';
import { deserializeCreateFileMetadataByIdScopeArg } from '../managers/fileMetadata.generated.js';
import { serializeMetadataQueryResults } from '../schemas.generated.js';
import { deserializeMetadataQueryResults } from '../schemas.generated.js';
import { serializeMetadataQuery } from '../schemas.generated.js';
import { deserializeMetadataQuery } from '../schemas.generated.js';
import { serializeDeleteMetadataTemplateSchemaScopeArg } from '../managers/metadataTemplates.generated.js';
import { deserializeDeleteMetadataTemplateSchemaScopeArg } from '../managers/metadataTemplates.generated.js';
import { serializeMetadataQueryIndices } from '../schemas.generated.js';
import { deserializeMetadataQueryIndices } from '../schemas.generated.js';
import { serializeGetMetadataQueryIndicesQueryParamsArgScopeField } from '../managers/search.generated.js';
import { deserializeGetMetadataQueryIndicesQueryParamsArgScopeField } from '../managers/search.generated.js';
import { serializeSearchResultsOrSearchResultsWithSharedLinks } from '../schemas.generated.js';
import { deserializeSearchResultsOrSearchResultsWithSharedLinks } from '../schemas.generated.js';
import { serializeGetSearchQueryParamsArgTrashContentField } from '../managers/search.generated.js';
import { deserializeGetSearchQueryParamsArgTrashContentField } from '../managers/search.generated.js';
import { MetadataTemplate } from '../schemas.generated.js';
import { CreateMetadataTemplateSchemaRequestBodyArg } from '../managers/metadataTemplates.generated.js';
import { CreateMetadataTemplateSchemaRequestBodyArgFieldsField } from '../managers/metadataTemplates.generated.js';
import { CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField } from '../managers/metadataTemplates.generated.js';
import { Files } from '../schemas.generated.js';
import { UploadFileRequestBodyArg } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { File } from '../schemas.generated.js';
import { Metadata } from '../schemas.generated.js';
import { CreateFileMetadataByIdScopeArg } from '../managers/fileMetadata.generated.js';
import { MetadataQueryResults } from '../schemas.generated.js';
import { MetadataQuery } from '../schemas.generated.js';
import { DeleteMetadataTemplateSchemaScopeArg } from '../managers/metadataTemplates.generated.js';
import { MetadataQueryIndices } from '../schemas.generated.js';
import { GetMetadataQueryIndicesQueryParamsArg } from '../managers/search.generated.js';
import { GetMetadataQueryIndicesQueryParamsArgScopeField } from '../managers/search.generated.js';
import { SearchResultsOrSearchResultsWithSharedLinks } from '../schemas.generated.js';
import { GetSearchQueryParamsArg } from '../managers/search.generated.js';
import { GetSearchQueryParamsArgTrashContentField } from '../managers/search.generated.js';
import { decodeBase64 } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { getUuid } from '../utils.js';
import { generateByteStream } from '../utils.js';
import { BoxClient } from '../client.generated.js';
import { BoxJwtAuth } from '../jwtAuth.js';
import { JwtConfig } from '../jwtAuth.js';
import { toString } from '../utils.js';
const jwtConfig: any = JwtConfig.fromConfigJsonString(
  decodeBase64(getEnvVar('JWT_CONFIG_BASE_64'))
);
const auth: any = new BoxJwtAuth({ config: jwtConfig });
const client: any = new BoxClient({ auth: auth });
test('testCreateMetaDataQueryExecuteRead', async function testCreateMetaDataQueryExecuteRead(): Promise<any> {
  const templateKey: any = ''.concat('key', getUuid()) as string;
  const template: any =
    await client.metadataTemplates.createMetadataTemplateSchema({
      scope: 'enterprise',
      displayName: templateKey,
      templateKey: templateKey,
      fields: [
        {
          type: 'float' as CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField,
          key: 'testName',
          displayName: 'testName',
        } satisfies CreateMetadataTemplateSchemaRequestBodyArgFieldsField,
      ],
    } satisfies CreateMetadataTemplateSchemaRequestBodyArg);
  if (!(template.templateKey == templateKey)) {
    throw 'Assertion failed';
  }
  const files: any = await client.uploads.uploadFile({
    attributes: {
      name: getUuid(),
      parent: {
        id: '0',
      } satisfies UploadFileRequestBodyArgAttributesFieldParentField,
    } satisfies UploadFileRequestBodyArgAttributesField,
    file: generateByteStream(10),
  } satisfies UploadFileRequestBodyArg);
  const file: any = files.entries[0];
  const metadata: any = await client.fileMetadata.createFileMetadataById(
    file.id,
    'enterprise' as CreateFileMetadataByIdScopeArg,
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
    template.scope,
    '.',
    template.templateKey
  ) as string;
  const query: any = await client.search.createMetadataQueryExecuteRead({
    ancestorFolderId: '0',
    from: searchFrom,
    query: 'testName >= :value',
    queryParams: { ['value']: '0.0' },
  } satisfies MetadataQuery);
  if (!(query.entries.length >= 0)) {
    throw 'Assertion failed';
  }
  await client.metadataTemplates.deleteMetadataTemplateSchema(
    'enterprise' as DeleteMetadataTemplateSchemaScopeArg,
    template.templateKey
  );
  await client.files.deleteFileById(file.id);
});
test('testGetMetadataQueryIndices', async function testGetMetadataQueryIndices(): Promise<any> {
  const templateKey: any = ''.concat('key', getUuid()) as string;
  const template: any =
    await client.metadataTemplates.createMetadataTemplateSchema({
      scope: 'enterprise',
      displayName: templateKey,
      templateKey: templateKey,
      fields: [
        {
          type: 'string' as CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField,
          key: 'testName',
          displayName: 'testName',
        } satisfies CreateMetadataTemplateSchemaRequestBodyArgFieldsField,
      ],
    } satisfies CreateMetadataTemplateSchemaRequestBodyArg);
  if (!(template.templateKey == templateKey)) {
    throw 'Assertion failed';
  }
  const indices: any = await client.search.getMetadataQueryIndices({
    scope: 'enterprise' as GetMetadataQueryIndicesQueryParamsArgScopeField,
    templateKey: templateKey,
  } satisfies GetMetadataQueryIndicesQueryParamsArg);
  if (!(indices.entries.length >= 0)) {
    throw 'Assertion failed';
  }
  await client.metadataTemplates.deleteMetadataTemplateSchema(
    'enterprise' as DeleteMetadataTemplateSchemaScopeArg,
    template.templateKey
  );
});
test('testGetSearch', async function testGetSearch(): Promise<any> {
  const keyword: any = 'test';
  const search: any = await client.search.getSearch({
    ancestorFolderIds: ['0' as ''],
    query: keyword,
    trashContent:
      'non_trashed_only' as GetSearchQueryParamsArgTrashContentField,
  } satisfies GetSearchQueryParamsArg);
  if (!(search.entries.length >= 0)) {
    throw 'Assertion failed';
  }
  if (!((toString(search.type) as string) == 'search_results_items')) {
    throw 'Assertion failed';
  }
  const searchWithSharedLink: any = await client.search.getSearch({
    ancestorFolderIds: ['0' as ''],
    query: keyword,
    trashContent:
      'non_trashed_only' as GetSearchQueryParamsArgTrashContentField,
    includeRecentSharedLinks: true,
  } satisfies GetSearchQueryParamsArg);
  if (!(searchWithSharedLink.entries.length >= 0)) {
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
