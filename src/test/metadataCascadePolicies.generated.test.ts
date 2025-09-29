import { serializeCreateMetadataTemplateRequestBody } from '@/managers/metadataTemplates.generated';
import { deserializeCreateMetadataTemplateRequestBody } from '@/managers/metadataTemplates.generated';
import { serializeCreateMetadataTemplateRequestBodyFieldsField } from '@/managers/metadataTemplates.generated';
import { deserializeCreateMetadataTemplateRequestBodyFieldsField } from '@/managers/metadataTemplates.generated';
import { serializeCreateMetadataTemplateRequestBodyFieldsTypeField } from '@/managers/metadataTemplates.generated';
import { deserializeCreateMetadataTemplateRequestBodyFieldsTypeField } from '@/managers/metadataTemplates.generated';
import { serializeFolderFull } from '@/schemas/folderFull.generated';
import { deserializeFolderFull } from '@/schemas/folderFull.generated';
import { serializeMetadataCascadePolicy } from '@/schemas/metadataCascadePolicy.generated';
import { deserializeMetadataCascadePolicy } from '@/schemas/metadataCascadePolicy.generated';
import { serializeCreateMetadataCascadePolicyRequestBody } from '@/managers/metadataCascadePolicies.generated';
import { deserializeCreateMetadataCascadePolicyRequestBody } from '@/managers/metadataCascadePolicies.generated';
import { serializeCreateMetadataCascadePolicyRequestBodyScopeField } from '@/managers/metadataCascadePolicies.generated';
import { deserializeCreateMetadataCascadePolicyRequestBodyScopeField } from '@/managers/metadataCascadePolicies.generated';
import { serializeMetadataCascadePolicies } from '@/schemas/metadataCascadePolicies.generated';
import { deserializeMetadataCascadePolicies } from '@/schemas/metadataCascadePolicies.generated';
import { serializeApplyMetadataCascadePolicyRequestBody } from '@/managers/metadataCascadePolicies.generated';
import { deserializeApplyMetadataCascadePolicyRequestBody } from '@/managers/metadataCascadePolicies.generated';
import { serializeApplyMetadataCascadePolicyRequestBodyConflictResolutionField } from '@/managers/metadataCascadePolicies.generated';
import { deserializeApplyMetadataCascadePolicyRequestBodyConflictResolutionField } from '@/managers/metadataCascadePolicies.generated';
import { serializeCreateFolderMetadataByIdScope } from '@/managers/folderMetadata.generated';
import { deserializeCreateFolderMetadataByIdScope } from '@/managers/folderMetadata.generated';
import { serializeDeleteMetadataTemplateScope } from '@/managers/metadataTemplates.generated';
import { deserializeDeleteMetadataTemplateScope } from '@/managers/metadataTemplates.generated';
import { BoxClient } from '@/client.generated';
import { CreateMetadataTemplateRequestBody } from '@/managers/metadataTemplates.generated';
import { CreateMetadataTemplateRequestBodyFieldsField } from '@/managers/metadataTemplates.generated';
import { CreateMetadataTemplateRequestBodyFieldsTypeField } from '@/managers/metadataTemplates.generated';
import { FolderFull } from '@/schemas/folderFull.generated';
import { MetadataCascadePolicy } from '@/schemas/metadataCascadePolicy.generated';
import { CreateMetadataCascadePolicyRequestBody } from '@/managers/metadataCascadePolicies.generated';
import { CreateMetadataCascadePolicyRequestBodyScopeField } from '@/managers/metadataCascadePolicies.generated';
import { MetadataCascadePolicies } from '@/schemas/metadataCascadePolicies.generated';
import { GetMetadataCascadePoliciesQueryParams } from '@/managers/metadataCascadePolicies.generated';
import { ApplyMetadataCascadePolicyRequestBody } from '@/managers/metadataCascadePolicies.generated';
import { ApplyMetadataCascadePolicyRequestBodyConflictResolutionField } from '@/managers/metadataCascadePolicies.generated';
import { CreateFolderMetadataByIdScope } from '@/managers/folderMetadata.generated';
import { DeleteMetadataTemplateScope } from '@/managers/metadataTemplates.generated';
import { getUuid } from '@/internal/utils';
import { getEnvVar } from '@/internal/utils';
import { toString } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { createNewFolder } from './commons.generated';
import { uploadNewFile } from './commons.generated';
import { sdToJson } from '@/serialization/json';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('testMetadataCascadePolicies', async function testMetadataCascadePolicies(): Promise<any> {
  const templateKey: string = ''.concat('key', getUuid()) as string;
  await client.metadataTemplates.createMetadataTemplate({
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
  const folder: FolderFull = await createNewFolder();
  const enterpriseId: string = getEnvVar('ENTERPRISE_ID');
  const cascadePolicy: MetadataCascadePolicy =
    await client.metadataCascadePolicies.createMetadataCascadePolicy({
      folderId: folder.id,
      scope: 'enterprise' as CreateMetadataCascadePolicyRequestBodyScopeField,
      templateKey: templateKey,
    } satisfies CreateMetadataCascadePolicyRequestBody);
  if (
    !((toString(cascadePolicy.type) as string) == 'metadata_cascade_policy')
  ) {
    throw new Error('Assertion failed');
  }
  if (
    !(
      (toString(cascadePolicy.ownerEnterprise!.type!) as string) == 'enterprise'
    )
  ) {
    throw new Error('Assertion failed');
  }
  if (
    !((toString(cascadePolicy.ownerEnterprise!.id!) as string) == enterpriseId)
  ) {
    throw new Error('Assertion failed');
  }
  if (!((toString(cascadePolicy.parent!.type!) as string) == 'folder')) {
    throw new Error('Assertion failed');
  }
  if (!(cascadePolicy.parent!.id! == folder.id)) {
    throw new Error('Assertion failed');
  }
  if (
    !(
      (toString(cascadePolicy.scope!) as string) ==
      (''.concat('enterprise_', enterpriseId) as string)
    )
  ) {
    throw new Error('Assertion failed');
  }
  if (!(cascadePolicy.templateKey! == templateKey)) {
    throw new Error('Assertion failed');
  }
  const cascadePolicyId: string = cascadePolicy.id;
  const policyFromTheApi: MetadataCascadePolicy =
    await client.metadataCascadePolicies.getMetadataCascadePolicyById(
      cascadePolicyId,
    );
  if (!(cascadePolicyId == policyFromTheApi.id)) {
    throw new Error('Assertion failed');
  }
  const policies: MetadataCascadePolicies =
    await client.metadataCascadePolicies.getMetadataCascadePolicies({
      folderId: folder.id,
    } satisfies GetMetadataCascadePoliciesQueryParams);
  if (!(policies.entries!.length == 1)) {
    throw new Error('Assertion failed');
  }
  await expect(async () => {
    await client.metadataCascadePolicies.applyMetadataCascadePolicy(
      cascadePolicyId,
      {
        conflictResolution:
          'overwrite' as ApplyMetadataCascadePolicyRequestBodyConflictResolutionField,
      } satisfies ApplyMetadataCascadePolicyRequestBody,
    );
  }).rejects.toThrow();
  await client.folderMetadata.createFolderMetadataById(
    folder.id,
    'enterprise' as CreateFolderMetadataByIdScope,
    templateKey,
    { ['testName']: 'xyz' },
  );
  await client.metadataCascadePolicies.applyMetadataCascadePolicy(
    cascadePolicyId,
    {
      conflictResolution:
        'overwrite' as ApplyMetadataCascadePolicyRequestBodyConflictResolutionField,
    } satisfies ApplyMetadataCascadePolicyRequestBody,
  );
  await client.metadataCascadePolicies.deleteMetadataCascadePolicyById(
    cascadePolicyId,
  );
  await expect(async () => {
    await client.metadataCascadePolicies.getMetadataCascadePolicyById(
      cascadePolicyId,
    );
  }).rejects.toThrow();
  await client.metadataTemplates.deleteMetadataTemplate(
    'enterprise' as DeleteMetadataTemplateScope,
    templateKey,
  );
  await client.folders.deleteFolderById(folder.id);
});
export {};
