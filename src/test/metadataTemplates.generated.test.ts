import { serializeMetadataTemplate } from '../schemas.generated.js';
import { deserializeMetadataTemplate } from '../schemas.generated.js';
import { serializeCreateMetadataTemplateRequestBodyArg } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateRequestBodyArg } from '../managers/metadataTemplates.generated.js';
import { serializeCreateMetadataTemplateRequestBodyArgFieldsField } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateRequestBodyArgFieldsField } from '../managers/metadataTemplates.generated.js';
import { serializeCreateMetadataTemplateRequestBodyArgFieldsFieldTypeField } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateRequestBodyArgFieldsFieldTypeField } from '../managers/metadataTemplates.generated.js';
import { serializeUpdateMetadataTemplateScopeArg } from '../managers/metadataTemplates.generated.js';
import { deserializeUpdateMetadataTemplateScopeArg } from '../managers/metadataTemplates.generated.js';
import { serializeUpdateMetadataTemplateRequestBodyArg } from '../managers/metadataTemplates.generated.js';
import { deserializeUpdateMetadataTemplateRequestBodyArg } from '../managers/metadataTemplates.generated.js';
import { serializeUpdateMetadataTemplateRequestBodyArgOpField } from '../managers/metadataTemplates.generated.js';
import { deserializeUpdateMetadataTemplateRequestBodyArgOpField } from '../managers/metadataTemplates.generated.js';
import { serializeGetMetadataTemplateScopeArg } from '../managers/metadataTemplates.generated.js';
import { deserializeGetMetadataTemplateScopeArg } from '../managers/metadataTemplates.generated.js';
import { serializeMetadataTemplates } from '../schemas.generated.js';
import { deserializeMetadataTemplates } from '../schemas.generated.js';
import { serializeDeleteMetadataTemplateScopeArg } from '../managers/metadataTemplates.generated.js';
import { deserializeDeleteMetadataTemplateScopeArg } from '../managers/metadataTemplates.generated.js';
import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeMetadataFull } from '../schemas.generated.js';
import { deserializeMetadataFull } from '../schemas.generated.js';
import { serializeCreateFileMetadataByIdScopeArg } from '../managers/fileMetadata.generated.js';
import { deserializeCreateFileMetadataByIdScopeArg } from '../managers/fileMetadata.generated.js';
import { serializeDeleteFileMetadataByIdScopeArg } from '../managers/fileMetadata.generated.js';
import { deserializeDeleteFileMetadataByIdScopeArg } from '../managers/fileMetadata.generated.js';
import { BoxClient } from '../client.generated.js';
import { MetadataTemplate } from '../schemas.generated.js';
import { CreateMetadataTemplateRequestBodyArg } from '../managers/metadataTemplates.generated.js';
import { CreateMetadataTemplateRequestBodyArgFieldsField } from '../managers/metadataTemplates.generated.js';
import { CreateMetadataTemplateRequestBodyArgFieldsFieldTypeField } from '../managers/metadataTemplates.generated.js';
import { UpdateMetadataTemplateScopeArg } from '../managers/metadataTemplates.generated.js';
import { UpdateMetadataTemplateRequestBodyArg } from '../managers/metadataTemplates.generated.js';
import { UpdateMetadataTemplateRequestBodyArgOpField } from '../managers/metadataTemplates.generated.js';
import { GetMetadataTemplateScopeArg } from '../managers/metadataTemplates.generated.js';
import { MetadataTemplates } from '../schemas.generated.js';
import { DeleteMetadataTemplateScopeArg } from '../managers/metadataTemplates.generated.js';
import { FileFull } from '../schemas.generated.js';
import { MetadataFull } from '../schemas.generated.js';
import { CreateFileMetadataByIdScopeArg } from '../managers/fileMetadata.generated.js';
import { GetMetadataTemplatesByInstanceIdQueryParamsArg } from '../managers/metadataTemplates.generated.js';
import { DeleteFileMetadataByIdScopeArg } from '../managers/fileMetadata.generated.js';
import { getUuid } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: any = getDefaultClient();
test('testMetadataTemplates', async function testMetadataTemplates(): Promise<any> {
  const templateKey: any = ''.concat('key', getUuid()) as string;
  const template: any = await client.metadataTemplates.createMetadataTemplate({
    scope: 'enterprise',
    displayName: templateKey,
    templateKey: templateKey,
    fields: [
      {
        type: 'string' as CreateMetadataTemplateRequestBodyArgFieldsFieldTypeField,
        key: 'testName',
        displayName: 'testName',
      } satisfies CreateMetadataTemplateRequestBodyArgFieldsField,
    ],
  } satisfies CreateMetadataTemplateRequestBodyArg);
  if (!(template.templateKey == templateKey)) {
    throw 'Assertion failed';
  }
  if (!(template.displayName == templateKey)) {
    throw 'Assertion failed';
  }
  if (!(template.fields!.length == 1)) {
    throw 'Assertion failed';
  }
  if (!(template.fields![0].key == 'testName')) {
    throw 'Assertion failed';
  }
  if (!(template.fields![0].displayName == 'testName')) {
    throw 'Assertion failed';
  }
  const updatedTemplate: any =
    await client.metadataTemplates.updateMetadataTemplate(
      'enterprise' as UpdateMetadataTemplateScopeArg,
      templateKey,
      [
        {
          op: 'addField' as UpdateMetadataTemplateRequestBodyArgOpField,
          fieldKey: 'newfieldname',
          data: { ['type']: 'string', ['displayName']: 'newFieldName' },
        } satisfies UpdateMetadataTemplateRequestBodyArg,
      ]
    );
  if (!(updatedTemplate.fields!.length == 2)) {
    throw 'Assertion failed';
  }
  if (!(updatedTemplate.fields![1].key == 'newfieldname')) {
    throw 'Assertion failed';
  }
  if (!(updatedTemplate.fields![1].displayName == 'newFieldName')) {
    throw 'Assertion failed';
  }
  const getMetadataTemplate: any =
    await client.metadataTemplates.getMetadataTemplateById(template.id);
  if (!(getMetadataTemplate.id == template.id)) {
    throw 'Assertion failed';
  }
  const getMetadataTemplateSchema: any =
    await client.metadataTemplates.getMetadataTemplate(
      'enterprise' as GetMetadataTemplateScopeArg,
      template.templateKey!
    );
  if (!(getMetadataTemplateSchema.id == template.id)) {
    throw 'Assertion failed';
  }
  const enterpriseMetadataTemplates: any =
    await client.metadataTemplates.getEnterpriseMetadataTemplates();
  if (!(enterpriseMetadataTemplates.entries!.length > 0)) {
    throw 'Assertion failed';
  }
  const globalMetadataTemplates: any =
    await client.metadataTemplates.getGlobalMetadataTemplates();
  if (!(globalMetadataTemplates.entries!.length > 0)) {
    throw 'Assertion failed';
  }
  await client.metadataTemplates.deleteMetadataTemplate(
    'enterprise' as DeleteMetadataTemplateScopeArg,
    template.templateKey!
  );
  await expect(async () => {
    await client.metadataTemplates.deleteMetadataTemplate(
      'enterprise' as DeleteMetadataTemplateScopeArg,
      template.templateKey!
    );
  }).rejects.toThrow();
});
test('testGetMetadataTemplateByInstance', async function testGetMetadataTemplateByInstance(): Promise<any> {
  const file: any = await uploadNewFile();
  const templateKey: any = ''.concat('key', getUuid()) as string;
  const template: any = await client.metadataTemplates.createMetadataTemplate({
    scope: 'enterprise',
    displayName: templateKey,
    templateKey: templateKey,
    fields: [
      {
        type: 'string' as CreateMetadataTemplateRequestBodyArgFieldsFieldTypeField,
        key: 'testName',
        displayName: 'testName',
      } satisfies CreateMetadataTemplateRequestBodyArgFieldsField,
    ],
  } satisfies CreateMetadataTemplateRequestBodyArg);
  const createdMetadataInstance: any =
    await client.fileMetadata.createFileMetadataById(
      file.id,
      'enterprise' as CreateFileMetadataByIdScopeArg,
      templateKey,
      { ['testName']: 'xyz' }
    );
  const metadataTemplates: any =
    await client.metadataTemplates.getMetadataTemplatesByInstanceId({
      metadataInstanceId: createdMetadataInstance.id!,
    } satisfies GetMetadataTemplatesByInstanceIdQueryParamsArg);
  if (!(metadataTemplates.entries!.length == 1)) {
    throw 'Assertion failed';
  }
  if (!(metadataTemplates.entries![0].displayName == templateKey)) {
    throw 'Assertion failed';
  }
  if (!(metadataTemplates.entries![0].templateKey == templateKey)) {
    throw 'Assertion failed';
  }
  await client.fileMetadata.deleteFileMetadataById(
    file.id,
    'enterprise' as DeleteFileMetadataByIdScopeArg,
    templateKey
  );
  await client.metadataTemplates.deleteMetadataTemplate(
    'enterprise' as DeleteMetadataTemplateScopeArg,
    template.templateKey!
  );
  await client.files.deleteFileById(file.id);
});
export {};
