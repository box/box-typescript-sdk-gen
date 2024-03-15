import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeMetadatas } from '../schemas.generated.js';
import { deserializeMetadatas } from '../schemas.generated.js';
import { serializeMetadataFull } from '../schemas.generated.js';
import { deserializeMetadataFull } from '../schemas.generated.js';
import { serializeCreateFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { deserializeCreateFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { serializeGetFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { deserializeGetFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { serializeUpdateFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { deserializeUpdateFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { serializeUpdateFileMetadataByIdRequestBody } from '../managers/fileMetadata.generated.js';
import { deserializeUpdateFileMetadataByIdRequestBody } from '../managers/fileMetadata.generated.js';
import { serializeUpdateFileMetadataByIdRequestBodyOpField } from '../managers/fileMetadata.generated.js';
import { deserializeUpdateFileMetadataByIdRequestBodyOpField } from '../managers/fileMetadata.generated.js';
import { serializeDeleteFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { deserializeDeleteFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { serializeMetadataTemplate } from '../schemas.generated.js';
import { deserializeMetadataTemplate } from '../schemas.generated.js';
import { serializeCreateMetadataTemplateRequestBody } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateRequestBody } from '../managers/metadataTemplates.generated.js';
import { serializeCreateMetadataTemplateRequestBodyFieldsField } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateRequestBodyFieldsField } from '../managers/metadataTemplates.generated.js';
import { serializeCreateMetadataTemplateRequestBodyFieldsTypeField } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateRequestBodyFieldsTypeField } from '../managers/metadataTemplates.generated.js';
import { serializeCreateMetadataTemplateRequestBodyFieldsOptionsField } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateRequestBodyFieldsOptionsField } from '../managers/metadataTemplates.generated.js';
import { serializeDeleteMetadataTemplateScope } from '../managers/metadataTemplates.generated.js';
import { deserializeDeleteMetadataTemplateScope } from '../managers/metadataTemplates.generated.js';
import { BoxClient } from '../client.generated.js';
import { FileFull } from '../schemas.generated.js';
import { Metadatas } from '../schemas.generated.js';
import { MetadataFull } from '../schemas.generated.js';
import { CreateFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { GetFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { UpdateFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { UpdateFileMetadataByIdRequestBody } from '../managers/fileMetadata.generated.js';
import { UpdateFileMetadataByIdRequestBodyOpField } from '../managers/fileMetadata.generated.js';
import { DeleteFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { MetadataTemplate } from '../schemas.generated.js';
import { CreateMetadataTemplateRequestBody } from '../managers/metadataTemplates.generated.js';
import { CreateMetadataTemplateRequestBodyFieldsField } from '../managers/metadataTemplates.generated.js';
import { CreateMetadataTemplateRequestBodyFieldsTypeField } from '../managers/metadataTemplates.generated.js';
import { CreateMetadataTemplateRequestBodyFieldsOptionsField } from '../managers/metadataTemplates.generated.js';
import { DeleteMetadataTemplateScope } from '../managers/metadataTemplates.generated.js';
import { generateByteStream } from '../internal/utils.js';
import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { toString } from '../internal/utils.js';
import { sdToJson } from '../serialization/json.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export const client: any = getDefaultClient();
test('testGlobalFileMetadata', async function testGlobalFileMetadata(): Promise<any> {
  const file: any = await uploadNewFile();
  const fileMetadata: any = await client.fileMetadata.getFileMetadata(file.id);
  if (!(fileMetadata.entries!.length == 0)) {
    throw new Error('Assertion failed');
  }
  const createdMetadata: any = await client.fileMetadata.createFileMetadataById(
    file.id,
    'global' as CreateFileMetadataByIdScope,
    'properties',
    { ['abc']: 'xyz' }
  );
  if (!((toString(createdMetadata.template) as string) == 'properties')) {
    throw new Error('Assertion failed');
  }
  if (!((toString(createdMetadata.scope) as string) == 'global')) {
    throw new Error('Assertion failed');
  }
  if (!(createdMetadata.version == 0)) {
    throw new Error('Assertion failed');
  }
  const receivedMetadata: any = await client.fileMetadata.getFileMetadataById(
    file.id,
    'global' as GetFileMetadataByIdScope,
    'properties'
  );
  if (!(receivedMetadata.extraData!.abc == 'xyz')) {
    throw new Error('Assertion failed');
  }
  const newValue: any = 'bar';
  const updatedMetadata: any = await client.fileMetadata.updateFileMetadataById(
    file.id,
    'global' as UpdateFileMetadataByIdScope,
    'properties',
    [
      {
        op: 'replace' as UpdateFileMetadataByIdRequestBodyOpField,
        path: '/abc',
        value: newValue,
      } satisfies UpdateFileMetadataByIdRequestBody,
    ]
  );
  const receivedUpdatedMetadata: any =
    await client.fileMetadata.getFileMetadataById(
      file.id,
      'global' as GetFileMetadataByIdScope,
      'properties'
    );
  if (!(receivedUpdatedMetadata.extraData!.abc == newValue)) {
    throw new Error('Assertion failed');
  }
  await client.fileMetadata.deleteFileMetadataById(
    file.id,
    'global' as DeleteFileMetadataByIdScope,
    'properties'
  );
  await expect(async () => {
    await client.fileMetadata.getFileMetadataById(
      file.id,
      'global' as GetFileMetadataByIdScope,
      'properties'
    );
  }).rejects.toThrow();
  await client.files.deleteFileById(file.id);
});
test('testEnterpriseFileMetadata', async function testEnterpriseFileMetadata(): Promise<any> {
  const file: any = await uploadNewFile();
  const templateKey: any = ''.concat('key', getUuid()) as string;
  const template: any = await client.metadataTemplates.createMetadataTemplate({
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
  const createdMetadata: any = await client.fileMetadata.createFileMetadataById(
    file.id,
    'enterprise' as CreateFileMetadataByIdScope,
    templateKey,
    {
      ['name']: 'John',
      ['age']: 23,
      ['birthDate']: '2001-01-03T02:20:50.520Z',
      ['countryCode']: 'US',
      ['sports']: ['basketball', 'tennis'],
    }
  );
  if (!((toString(createdMetadata.template) as string) == templateKey)) {
    throw new Error('Assertion failed');
  }
  if (!(createdMetadata.extraData!.name == 'John')) {
    throw new Error('Assertion failed');
  }
  if (!(createdMetadata.extraData!.age == 23)) {
    throw new Error('Assertion failed');
  }
  if (!(createdMetadata.extraData!.birthDate == '2001-01-03T02:20:50.520Z')) {
    throw new Error('Assertion failed');
  }
  if (!(createdMetadata.extraData!.countryCode == 'US')) {
    throw new Error('Assertion failed');
  }
  const sports: any = createdMetadata.extraData!.sports;
  if (!(sports[0] == 'basketball')) {
    throw new Error('Assertion failed');
  }
  if (!(sports[1] == 'tennis')) {
    throw new Error('Assertion failed');
  }
  await client.fileMetadata.deleteFileMetadataById(
    file.id,
    'enterprise' as DeleteFileMetadataByIdScope,
    templateKey
  );
  await client.metadataTemplates.deleteMetadataTemplate(
    'enterprise' as DeleteMetadataTemplateScope,
    templateKey
  );
  await client.files.deleteFileById(file.id);
});
export {};
