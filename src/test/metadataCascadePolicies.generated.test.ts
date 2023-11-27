import { serializeCreateMetadataTemplateRequestBodyArg } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateRequestBodyArg } from '../managers/metadataTemplates.generated.js';
import { serializeCreateMetadataTemplateRequestBodyArgFieldsField } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateRequestBodyArgFieldsField } from '../managers/metadataTemplates.generated.js';
import { serializeCreateMetadataTemplateRequestBodyArgFieldsFieldTypeField } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateRequestBodyArgFieldsFieldTypeField } from '../managers/metadataTemplates.generated.js';
import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeMetadataCascadePolicy } from '../schemas.generated.js';
import { deserializeMetadataCascadePolicy } from '../schemas.generated.js';
import { serializeCreateMetadataCascadePolicyRequestBodyArg } from '../managers/metadataCascadePolicies.generated.js';
import { deserializeCreateMetadataCascadePolicyRequestBodyArg } from '../managers/metadataCascadePolicies.generated.js';
import { serializeCreateMetadataCascadePolicyRequestBodyArgScopeField } from '../managers/metadataCascadePolicies.generated.js';
import { deserializeCreateMetadataCascadePolicyRequestBodyArgScopeField } from '../managers/metadataCascadePolicies.generated.js';
import { serializeMetadataCascadePolicies } from '../schemas.generated.js';
import { deserializeMetadataCascadePolicies } from '../schemas.generated.js';
import { serializeCreateMetadataCascadePolicyApplyRequestBodyArg } from '../managers/metadataCascadePolicies.generated.js';
import { deserializeCreateMetadataCascadePolicyApplyRequestBodyArg } from '../managers/metadataCascadePolicies.generated.js';
import { serializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField } from '../managers/metadataCascadePolicies.generated.js';
import { deserializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField } from '../managers/metadataCascadePolicies.generated.js';
import { serializeCreateFolderMetadataByIdScopeArg } from '../managers/folderMetadata.generated.js';
import { deserializeCreateFolderMetadataByIdScopeArg } from '../managers/folderMetadata.generated.js';
import { BoxClient } from '../client.generated.js';
import { CreateMetadataTemplateRequestBodyArg } from '../managers/metadataTemplates.generated.js';
import { CreateMetadataTemplateRequestBodyArgFieldsField } from '../managers/metadataTemplates.generated.js';
import { CreateMetadataTemplateRequestBodyArgFieldsFieldTypeField } from '../managers/metadataTemplates.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { MetadataCascadePolicy } from '../schemas.generated.js';
import { CreateMetadataCascadePolicyRequestBodyArg } from '../managers/metadataCascadePolicies.generated.js';
import { CreateMetadataCascadePolicyRequestBodyArgScopeField } from '../managers/metadataCascadePolicies.generated.js';
import { MetadataCascadePolicies } from '../schemas.generated.js';
import { GetMetadataCascadePoliciesQueryParamsArg } from '../managers/metadataCascadePolicies.generated.js';
import { CreateMetadataCascadePolicyApplyRequestBodyArg } from '../managers/metadataCascadePolicies.generated.js';
import { CreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField } from '../managers/metadataCascadePolicies.generated.js';
import { CreateFolderMetadataByIdScopeArg } from '../managers/folderMetadata.generated.js';
import { getUuid } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { toString } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { createNewFolder } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { sdToJson } from '../json.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: BoxClient = getDefaultClient();
test('testMetadataCascadePolicies', async function testMetadataCascadePolicies(): Promise<any> {
  const templateKey: string = ''.concat('key', getUuid()) as string;
  await client.metadataTemplates.createMetadataTemplate({
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
  const folder: FolderFull = await createNewFolder();
  const enterpriseId: string = getEnvVar('ENTERPRISE_ID');
  const cascadePolicy: MetadataCascadePolicy =
    await client.metadataCascadePolicies.createMetadataCascadePolicy({
      folderId: folder.id,
      scope:
        'enterprise' as CreateMetadataCascadePolicyRequestBodyArgScopeField,
      templateKey: templateKey,
    } satisfies CreateMetadataCascadePolicyRequestBodyArg);
  if (
    !((toString(cascadePolicy.type) as string) == 'metadata_cascade_policy')
  ) {
    throw 'Assertion failed';
  }
  if (
    !(
      (toString(cascadePolicy.ownerEnterprise!.type!) as string) == 'enterprise'
    )
  ) {
    throw 'Assertion failed';
  }
  if (
    !((toString(cascadePolicy.ownerEnterprise!.id!) as string) == enterpriseId)
  ) {
    throw 'Assertion failed';
  }
  if (!((toString(cascadePolicy.parent!.type!) as string) == 'folder')) {
    throw 'Assertion failed';
  }
  if (!(cascadePolicy.parent!.id! == folder.id)) {
    throw 'Assertion failed';
  }
  if (
    !(
      (toString(cascadePolicy.scope!) as string) ==
      (''.concat('enterprise_', enterpriseId) as string)
    )
  ) {
    throw 'Assertion failed';
  }
  if (!(cascadePolicy.templateKey! == templateKey)) {
    throw 'Assertion failed';
  }
  const cascadePolicyId: string = cascadePolicy.id;
  const policyFromTheApi: MetadataCascadePolicy =
    await client.metadataCascadePolicies.getMetadataCascadePolicyById(
      cascadePolicyId
    );
  if (!(cascadePolicyId == policyFromTheApi.id)) {
    throw 'Assertion failed';
  }
  const policies: MetadataCascadePolicies =
    await client.metadataCascadePolicies.getMetadataCascadePolicies({
      folderId: folder.id,
    } satisfies GetMetadataCascadePoliciesQueryParamsArg);
  if (!(policies.entries!.length == 1)) {
    throw 'Assertion failed';
  }
  expect(async () => {
    await client.metadataCascadePolicies.createMetadataCascadePolicyApply(
      cascadePolicyId,
      {
        conflictResolution:
          'overwrite' as CreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField,
      } satisfies CreateMetadataCascadePolicyApplyRequestBodyArg
    );
  }).rejects.toThrow();
  const data: {
    readonly [key: string]: string;
  } = { ['testName']: 'xyz' };
  await client.folderMetadata.createFolderMetadataById(
    folder.id,
    'enterprise' as CreateFolderMetadataByIdScopeArg,
    templateKey,
    data
  );
  await client.metadataCascadePolicies.createMetadataCascadePolicyApply(
    cascadePolicyId,
    {
      conflictResolution:
        'overwrite' as CreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField,
    } satisfies CreateMetadataCascadePolicyApplyRequestBodyArg
  );
  await client.metadataCascadePolicies.deleteMetadataCascadePolicyById(
    cascadePolicyId
  );
  expect(async () => {
    await client.metadataCascadePolicies.getMetadataCascadePolicyById(
      cascadePolicyId
    );
  }).rejects.toThrow();
  await client.folders.deleteFolderById(folder.id);
});
export {};
