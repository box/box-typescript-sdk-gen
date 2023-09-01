import { serializeMetadataTemplate } from '../schemas.generated.js';
import { deserializeMetadataTemplate } from '../schemas.generated.js';
import { serializeCreateMetadataTemplateSchemaRequestBodyArg } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateSchemaRequestBodyArg } from '../managers/metadataTemplates.generated.js';
import { serializeGetMetadataTemplateSchemaScopeArg } from '../managers/metadataTemplates.generated.js';
import { deserializeGetMetadataTemplateSchemaScopeArg } from '../managers/metadataTemplates.generated.js';
import { serializeMetadataTemplates } from '../schemas.generated.js';
import { deserializeMetadataTemplates } from '../schemas.generated.js';
import { serializeDeleteMetadataTemplateSchemaScopeArg } from '../managers/metadataTemplates.generated.js';
import { deserializeDeleteMetadataTemplateSchemaScopeArg } from '../managers/metadataTemplates.generated.js';
import { MetadataTemplate } from '../schemas.generated.js';
import { CreateMetadataTemplateSchemaRequestBodyArg } from '../managers/metadataTemplates.generated.js';
import { GetMetadataTemplateSchemaScopeArg } from '../managers/metadataTemplates.generated.js';
import { MetadataTemplates } from '../schemas.generated.js';
import { DeleteMetadataTemplateSchemaScopeArg } from '../managers/metadataTemplates.generated.js';
import { decodeBase64 } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { getUuid } from '../utils.js';
import { Client } from '../client.generated.js';
import { JwtAuth } from '../jwtAuth.js';
import { JwtConfig } from '../jwtAuth.js';
const jwtConfig: any = JwtConfig.fromConfigJsonString(
  decodeBase64(getEnvVar('JWT_CONFIG_BASE_64'))
);
const auth: any = new JwtAuth({ config: jwtConfig });
const client: any = new Client({ auth: auth });
test('testMetadataTemplates', async function testMetadataTemplates(): Promise<any> {
  const templateKey: any = ''.concat('key', getUuid()) as string;
  const template: any =
    await client.metadataTemplates.createMetadataTemplateSchema({
      scope: 'enterprise',
      displayName: templateKey,
      templateKey: templateKey,
      fields: [{ type: 'string', key: 'testName', displayName: 'testName' }],
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
  if (!(template.fields[0].key == 'testName')) {
    throw 'Assertion failed';
  }
  if (!(template.fields[0].displayName == 'testName')) {
    throw 'Assertion failed';
  }
  if (!(await client.metadataTemplates.getMetadataTemplateById(template.id))) {
    throw 'Assertion failed';
  }
  if (
    !(await client.metadataTemplates.getMetadataTemplateSchema(
      'enterprise' as GetMetadataTemplateSchemaScopeArg,
      template.templateKey
    ))
  ) {
    throw 'Assertion failed';
  }
  const enterpriseMetadataTemplates: any =
    await client.metadataTemplates.getMetadataTemplateEnterprise();
  if (!(enterpriseMetadataTemplates.entries.length > 0)) {
    throw 'Assertion failed';
  }
  const globalMetadataTemplates: any =
    await client.metadataTemplates.getMetadataTemplateGlobal();
  if (!(globalMetadataTemplates.entries.length > 0)) {
    throw 'Assertion failed';
  }
  await client.metadataTemplates.deleteMetadataTemplateSchema(
    'enterprise' as DeleteMetadataTemplateSchemaScopeArg,
    template.templateKey
  );
  expect(async () => {
    await client.metadataTemplates.deleteMetadataTemplateSchema(
      'enterprise' as DeleteMetadataTemplateSchemaScopeArg,
      template.templateKey
    );
  }).rejects.toThrow();
});
export {};
