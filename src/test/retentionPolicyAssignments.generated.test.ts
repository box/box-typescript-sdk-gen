import { serializeRetentionPolicy } from '@/schemas/retentionPolicy.generated';
import { deserializeRetentionPolicy } from '@/schemas/retentionPolicy.generated';
import { serializeCreateRetentionPolicyRequestBody } from '@/managers/retentionPolicies.generated';
import { deserializeCreateRetentionPolicyRequestBody } from '@/managers/retentionPolicies.generated';
import { serializeCreateRetentionPolicyRequestBodyPolicyTypeField } from '@/managers/retentionPolicies.generated';
import { deserializeCreateRetentionPolicyRequestBodyPolicyTypeField } from '@/managers/retentionPolicies.generated';
import { serializeCreateRetentionPolicyRequestBodyDispositionActionField } from '@/managers/retentionPolicies.generated';
import { deserializeCreateRetentionPolicyRequestBodyDispositionActionField } from '@/managers/retentionPolicies.generated';
import { serializeCreateRetentionPolicyRequestBodyRetentionTypeField } from '@/managers/retentionPolicies.generated';
import { deserializeCreateRetentionPolicyRequestBodyRetentionTypeField } from '@/managers/retentionPolicies.generated';
import { serializeFolderFull } from '@/schemas/folderFull.generated';
import { deserializeFolderFull } from '@/schemas/folderFull.generated';
import { serializeCreateFolderRequestBody } from '@/managers/folders.generated';
import { deserializeCreateFolderRequestBody } from '@/managers/folders.generated';
import { serializeCreateFolderRequestBodyParentField } from '@/managers/folders.generated';
import { deserializeCreateFolderRequestBodyParentField } from '@/managers/folders.generated';
import { serializeFiles } from '@/schemas/files.generated';
import { deserializeFiles } from '@/schemas/files.generated';
import { serializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { serializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { serializeFileFull } from '@/schemas/fileFull.generated';
import { deserializeFileFull } from '@/schemas/fileFull.generated';
import { serializeUploadFileVersionRequestBodyAttributesField } from '@/managers/uploads.generated';
import { deserializeUploadFileVersionRequestBodyAttributesField } from '@/managers/uploads.generated';
import { serializeRetentionPolicyAssignment } from '@/schemas/retentionPolicyAssignment.generated';
import { deserializeRetentionPolicyAssignment } from '@/schemas/retentionPolicyAssignment.generated';
import { serializeCreateRetentionPolicyAssignmentRequestBody } from '@/managers/retentionPolicyAssignments.generated';
import { deserializeCreateRetentionPolicyAssignmentRequestBody } from '@/managers/retentionPolicyAssignments.generated';
import { serializeCreateRetentionPolicyAssignmentRequestBodyAssignToField } from '@/managers/retentionPolicyAssignments.generated';
import { deserializeCreateRetentionPolicyAssignmentRequestBodyAssignToField } from '@/managers/retentionPolicyAssignments.generated';
import { serializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField } from '@/managers/retentionPolicyAssignments.generated';
import { deserializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField } from '@/managers/retentionPolicyAssignments.generated';
import { serializeRetentionPolicyAssignments } from '@/schemas/retentionPolicyAssignments.generated';
import { deserializeRetentionPolicyAssignments } from '@/schemas/retentionPolicyAssignments.generated';
import { serializeFilesUnderRetention } from '@/schemas/filesUnderRetention.generated';
import { deserializeFilesUnderRetention } from '@/schemas/filesUnderRetention.generated';
import { BoxClient } from '@/client.generated';
import { RetentionPolicy } from '@/schemas/retentionPolicy.generated';
import { CreateRetentionPolicyRequestBody } from '@/managers/retentionPolicies.generated';
import { CreateRetentionPolicyRequestBodyPolicyTypeField } from '@/managers/retentionPolicies.generated';
import { CreateRetentionPolicyRequestBodyDispositionActionField } from '@/managers/retentionPolicies.generated';
import { CreateRetentionPolicyRequestBodyRetentionTypeField } from '@/managers/retentionPolicies.generated';
import { FolderFull } from '@/schemas/folderFull.generated';
import { CreateFolderRequestBody } from '@/managers/folders.generated';
import { CreateFolderRequestBodyParentField } from '@/managers/folders.generated';
import { Files } from '@/schemas/files.generated';
import { UploadFileRequestBody } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { FileFull } from '@/schemas/fileFull.generated';
import { UploadFileVersionRequestBody } from '@/managers/uploads.generated';
import { UploadFileVersionRequestBodyAttributesField } from '@/managers/uploads.generated';
import { RetentionPolicyAssignment } from '@/schemas/retentionPolicyAssignment.generated';
import { CreateRetentionPolicyAssignmentRequestBody } from '@/managers/retentionPolicyAssignments.generated';
import { CreateRetentionPolicyAssignmentRequestBodyAssignToField } from '@/managers/retentionPolicyAssignments.generated';
import { CreateRetentionPolicyAssignmentRequestBodyAssignToTypeField } from '@/managers/retentionPolicyAssignments.generated';
import { RetentionPolicyAssignments } from '@/schemas/retentionPolicyAssignments.generated';
import { FilesUnderRetention } from '@/schemas/filesUnderRetention.generated';
import { decodeBase64 } from '@/internal/utils';
import { getEnvVar } from '@/internal/utils';
import { getUuid } from '@/internal/utils';
import { generateByteStream } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('testCreateUpdateGetDeleteRetentionPolicyAssignment', async function testCreateUpdateGetDeleteRetentionPolicyAssignment(): Promise<any> {
  const retentionPolicyName: string = getUuid();
  const retentionDescription: string = 'test description';
  const retentionPolicy: RetentionPolicy =
    await client.retentionPolicies.createRetentionPolicy({
      policyName: retentionPolicyName,
      policyType: 'finite' as CreateRetentionPolicyRequestBodyPolicyTypeField,
      areOwnersNotified: true,
      canOwnerExtendRetention: true,
      description: retentionDescription,
      dispositionAction:
        'remove_retention' as CreateRetentionPolicyRequestBodyDispositionActionField,
      retentionLength: '1',
      retentionType:
        'modifiable' as CreateRetentionPolicyRequestBodyRetentionTypeField,
    } satisfies CreateRetentionPolicyRequestBody);
  const folder: FolderFull = await client.folders.createFolder({
    name: getUuid(),
    parent: { id: '0' } satisfies CreateFolderRequestBodyParentField,
  } satisfies CreateFolderRequestBody);
  const files: Files = await client.uploads.uploadFile({
    attributes: {
      name: getUuid(),
      parent: {
        id: folder.id,
      } satisfies UploadFileRequestBodyAttributesParentField,
    } satisfies UploadFileRequestBodyAttributesField,
    file: generateByteStream(10),
  } satisfies UploadFileRequestBody);
  const file: FileFull = files.entries![0];
  const newVersions: Files = await client.uploads.uploadFileVersion(file.id, {
    attributes: {
      name: getUuid(),
    } satisfies UploadFileVersionRequestBodyAttributesField,
    file: generateByteStream(20),
  } satisfies UploadFileVersionRequestBody);
  const newVersion: FileFull = newVersions.entries![0];
  const retentionPolicyAssignment: RetentionPolicyAssignment =
    await client.retentionPolicyAssignments.createRetentionPolicyAssignment({
      policyId: retentionPolicy.id,
      assignTo: {
        type: 'folder' as CreateRetentionPolicyAssignmentRequestBodyAssignToTypeField,
        id: folder.id,
      } satisfies CreateRetentionPolicyAssignmentRequestBodyAssignToField,
    } satisfies CreateRetentionPolicyAssignmentRequestBody);
  if (!(retentionPolicyAssignment.retentionPolicy!.id == retentionPolicy.id)) {
    throw new Error('Assertion failed');
  }
  if (!(retentionPolicyAssignment.assignedTo!.id == folder.id)) {
    throw new Error('Assertion failed');
  }
  const retentionPolicyAssignmentById: RetentionPolicyAssignment =
    await client.retentionPolicyAssignments.getRetentionPolicyAssignmentById(
      retentionPolicyAssignment.id,
    );
  if (!(retentionPolicyAssignmentById.id == retentionPolicyAssignment.id)) {
    throw new Error('Assertion failed');
  }
  const retentionPolicyAssignments: RetentionPolicyAssignments =
    await client.retentionPolicyAssignments.getRetentionPolicyAssignments(
      retentionPolicy.id,
    );
  if (!(retentionPolicyAssignments.entries!.length == 1)) {
    throw new Error('Assertion failed');
  }
  const filesUnderRetention: FilesUnderRetention =
    await client.retentionPolicyAssignments.getFilesUnderRetentionPolicyAssignment(
      retentionPolicyAssignment.id,
    );
  if (!(filesUnderRetention.entries!.length == 1)) {
    throw new Error('Assertion failed');
  }
  await client.retentionPolicyAssignments.deleteRetentionPolicyAssignmentById(
    retentionPolicyAssignment.id,
  );
  const retentionPolicyAssignmentsAfterDelete: RetentionPolicyAssignments =
    await client.retentionPolicyAssignments.getRetentionPolicyAssignments(
      retentionPolicy.id,
    );
  if (!(retentionPolicyAssignmentsAfterDelete.entries!.length == 0)) {
    throw new Error('Assertion failed');
  }
  await client.retentionPolicies.deleteRetentionPolicyById(retentionPolicy.id);
  await client.files.deleteFileById(file.id);
});
export {};
