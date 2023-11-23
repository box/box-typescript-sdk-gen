import { serializeMetadataTemplate } from '../schemas.generated.js';
import { deserializeMetadataTemplate } from '../schemas.generated.js';
import { serializeCreateMetadataTemplateSchemaRequestBodyArg } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateSchemaRequestBodyArg } from '../managers/metadataTemplates.generated.js';
import { serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField } from '../managers/metadataTemplates.generated.js';
import { serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField } from '../managers/metadataTemplates.generated.js';
import { serializeGetMetadataTemplateSchemaScopeArg } from '../managers/metadataTemplates.generated.js';
import { deserializeGetMetadataTemplateSchemaScopeArg } from '../managers/metadataTemplates.generated.js';
import { serializeMetadataTemplates } from '../schemas.generated.js';
import { deserializeMetadataTemplates } from '../schemas.generated.js';
import { serializeDeleteMetadataTemplateSchemaScopeArg } from '../managers/metadataTemplates.generated.js';
import { deserializeDeleteMetadataTemplateSchemaScopeArg } from '../managers/metadataTemplates.generated.js';
import { BoxClient } from '../client.generated.js';
import { MetadataTemplate } from '../schemas.generated.js';
import { CreateMetadataTemplateSchemaRequestBodyArg } from '../managers/metadataTemplates.generated.js';
import { CreateMetadataTemplateSchemaRequestBodyArgFieldsField } from '../managers/metadataTemplates.generated.js';
import { CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField } from '../managers/metadataTemplates.generated.js';
import { GetMetadataTemplateSchemaScopeArg } from '../managers/metadataTemplates.generated.js';
import { MetadataTemplates } from '../schemas.generated.js';
import { DeleteMetadataTemplateSchemaScopeArg } from '../managers/metadataTemplates.generated.js';
import { getUuid } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
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
  if (!(template.displayName == templateKey)) {
    throw 'Assertion failed';
  }
  if (!(template.fields.length == 1)) {
    throw 'Assertion failed';
  }
  if (!(template.fields![0].key == 'testName')) {
    throw 'Assertion failed';
  }
  if (!(template.fields![0].displayName == 'testName')) {
    throw 'Assertion failed';
  }
  const getMetadataTemplate: any =
    await client.metadataTemplates.getMetadataTemplateById(template.id);
  if (!(getMetadataTemplate.id == template.id)) {
    throw 'Assertion failed';
  }
  const getMetadataTemplateSchema: any =
    await client.metadataTemplates.getMetadataTemplateSchema(
      'enterprise' as GetMetadataTemplateSchemaScopeArg,
      template.templateKey!
    );
  if (!(getMetadataTemplateSchema.id == template.id)) {
    throw 'Assertion failed';
  }
  const enterpriseMetadataTemplates: any =
    await client.metadataTemplates.getMetadataTemplateEnterprise();
  if (!(enterpriseMetadataTemplates.entries!.length > 0)) {
    throw 'Assertion failed';
  }
  const globalMetadataTemplates: any =
    await client.metadataTemplates.getMetadataTemplateGlobal();
  if (!(globalMetadataTemplates.entries!.length > 0)) {
    throw 'Assertion failed';
  }
  await client.metadataTemplates.deleteMetadataTemplateSchema(
    'enterprise' as DeleteMetadataTemplateSchemaScopeArg,
    template.templateKey!
  );
  expect(async () => {
    await client.metadataTemplates.deleteMetadataTemplateSchema(
      'enterprise' as DeleteMetadataTemplateSchemaScopeArg,
      template.templateKey!
    );
  }).rejects.toThrow();
});
export {};
