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
import { serializeRetentionPolicyAssignment } from '@/schemas/retentionPolicyAssignment.generated';
import { deserializeRetentionPolicyAssignment } from '@/schemas/retentionPolicyAssignment.generated';
import { serializeCreateRetentionPolicyAssignmentRequestBody } from '@/managers/retentionPolicyAssignments.generated';
import { deserializeCreateRetentionPolicyAssignmentRequestBody } from '@/managers/retentionPolicyAssignments.generated';
import { serializeCreateRetentionPolicyAssignmentRequestBodyAssignToField } from '@/managers/retentionPolicyAssignments.generated';
import { deserializeCreateRetentionPolicyAssignmentRequestBodyAssignToField } from '@/managers/retentionPolicyAssignments.generated';
import { serializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField } from '@/managers/retentionPolicyAssignments.generated';
import { deserializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField } from '@/managers/retentionPolicyAssignments.generated';
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
import { serializeFileVersionRetentions } from '@/schemas/fileVersionRetentions.generated';
import { deserializeFileVersionRetentions } from '@/schemas/fileVersionRetentions.generated';
import { serializeFileVersionRetention } from '@/schemas/fileVersionRetention.generated';
import { deserializeFileVersionRetention } from '@/schemas/fileVersionRetention.generated';
import { DeleteFolderByIdOptionalsInput } from '@/managers/folders.generated';
import { DeleteFolderByIdOptionals } from '@/managers/folders.generated';
import { RetentionPolicy } from '@/schemas/retentionPolicy.generated';
import { CreateRetentionPolicyRequestBody } from '@/managers/retentionPolicies.generated';
import { CreateRetentionPolicyRequestBodyPolicyTypeField } from '@/managers/retentionPolicies.generated';
import { CreateRetentionPolicyRequestBodyDispositionActionField } from '@/managers/retentionPolicies.generated';
import { CreateRetentionPolicyRequestBodyRetentionTypeField } from '@/managers/retentionPolicies.generated';
import { FolderFull } from '@/schemas/folderFull.generated';
import { RetentionPolicyAssignment } from '@/schemas/retentionPolicyAssignment.generated';
import { CreateRetentionPolicyAssignmentRequestBody } from '@/managers/retentionPolicyAssignments.generated';
import { CreateRetentionPolicyAssignmentRequestBodyAssignToField } from '@/managers/retentionPolicyAssignments.generated';
import { CreateRetentionPolicyAssignmentRequestBodyAssignToTypeField } from '@/managers/retentionPolicyAssignments.generated';
import { Files } from '@/schemas/files.generated';
import { UploadFileRequestBody } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { FileFull } from '@/schemas/fileFull.generated';
import { UploadFileVersionRequestBody } from '@/managers/uploads.generated';
import { UploadFileVersionRequestBodyAttributesField } from '@/managers/uploads.generated';
import { FileVersionRetentions } from '@/schemas/fileVersionRetentions.generated';
import { DeleteFolderByIdQueryParams } from '@/managers/folders.generated';
import { FileVersionRetention } from '@/schemas/fileVersionRetention.generated';
import { generateByteStream } from '@/internal/utils';
import { getUuid } from '@/internal/utils';
import { BoxClient } from '@/client.generated';
import { createNewFolder } from './commons.generated';
import { getDefaultClient } from './commons.generated';
import { toString } from '@/internal/utils';
import { sdToJson } from '@/serialization/json';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('testCreateUpdateGetDeleteRetentionPolicy', async function testCreateUpdateGetDeleteRetentionPolicy(): Promise<any> {
  const description: string = getUuid();
  const retentionPolicy: RetentionPolicy =
    await client.retentionPolicies.createRetentionPolicy({
      policyName: getUuid(),
      policyType: 'finite' as CreateRetentionPolicyRequestBodyPolicyTypeField,
      dispositionAction:
        'remove_retention' as CreateRetentionPolicyRequestBodyDispositionActionField,
      retentionLength: '1',
      description: description,
      canOwnerExtendRetention: false,
      retentionType:
        'modifiable' as CreateRetentionPolicyRequestBodyRetentionTypeField,
    } satisfies CreateRetentionPolicyRequestBody);
  if (!(retentionPolicy.description == description)) {
    throw new Error('Assertion failed');
  }
  if (!(retentionPolicy.canOwnerExtendRetention == false)) {
    throw new Error('Assertion failed');
  }
  if (!((toString(retentionPolicy.retentionType) as string) == 'modifiable')) {
    throw new Error('Assertion failed');
  }
  const folder: FolderFull = await createNewFolder();
  const retentionPolicyAssignment: RetentionPolicyAssignment =
    await client.retentionPolicyAssignments.createRetentionPolicyAssignment({
      policyId: retentionPolicy.id,
      assignTo: {
        id: folder.id,
        type: 'folder' as CreateRetentionPolicyAssignmentRequestBodyAssignToTypeField,
      } satisfies CreateRetentionPolicyAssignmentRequestBodyAssignToField,
    } satisfies CreateRetentionPolicyAssignmentRequestBody);
  if (!(retentionPolicyAssignment.retentionPolicy!.id == retentionPolicy.id)) {
    throw new Error('Assertion failed');
  }
  if (!(retentionPolicyAssignment.assignedTo!.id == folder.id)) {
    throw new Error('Assertion failed');
  }
  if (
    !(
      (toString(retentionPolicyAssignment.assignedTo!.type) as string) ==
      (toString(folder.type) as string)
    )
  ) {
    throw new Error('Assertion failed');
  }
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
  const newFiles: Files = await client.uploads.uploadFileVersion(file.id, {
    attributes: {
      name: file.name!,
    } satisfies UploadFileVersionRequestBodyAttributesField,
    file: generateByteStream(20),
  } satisfies UploadFileVersionRequestBody);
  const newFile: FileFull = newFiles.entries![0];
  if (!(newFile.id == file.id)) {
    throw new Error('Assertion failed');
  }
  const fileVersionRetentions: FileVersionRetentions =
    await client.fileVersionRetentions.getFileVersionRetentions();
  const fileVersionRetentionsCount: number =
    fileVersionRetentions.entries!.length;
  if (!(fileVersionRetentionsCount >= 0)) {
    throw new Error('Assertion failed');
  }
  if (fileVersionRetentionsCount == 0) {
    await client.retentionPolicies.deleteRetentionPolicyById(
      retentionPolicy.id,
    );
    await client.folders.deleteFolderById(folder.id, {
      queryParams: { recursive: true } satisfies DeleteFolderByIdQueryParams,
    } satisfies DeleteFolderByIdOptionalsInput);
    return void 0;
  }
  const fileVersionRetention: FileVersionRetention =
    fileVersionRetentions.entries![0];
  const fileVersionRetentionById: FileVersionRetention =
    await client.fileVersionRetentions.getFileVersionRetentionById(
      fileVersionRetention.id!,
    );
  if (!(fileVersionRetentionById.id == fileVersionRetention.id)) {
    throw new Error('Assertion failed');
  }
  await client.retentionPolicies.deleteRetentionPolicyById(retentionPolicy.id);
  await client.folders.deleteFolderById(folder.id, {
    queryParams: { recursive: true } satisfies DeleteFolderByIdQueryParams,
  } satisfies DeleteFolderByIdOptionalsInput);
});
export {};
