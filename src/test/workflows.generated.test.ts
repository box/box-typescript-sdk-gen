import { serializeFiles } from '@/schemas/files.generated';
import { deserializeFiles } from '@/schemas/files.generated';
import { serializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { serializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { serializeFileFull } from '@/schemas/fileFull.generated';
import { deserializeFileFull } from '@/schemas/fileFull.generated';
import { serializeWorkflows } from '@/schemas/workflows.generated';
import { deserializeWorkflows } from '@/schemas/workflows.generated';
import { serializeWorkflow } from '@/schemas/workflow.generated';
import { deserializeWorkflow } from '@/schemas/workflow.generated';
import { serializeStartWorkflowRequestBody } from '@/managers/workflows.generated';
import { deserializeStartWorkflowRequestBody } from '@/managers/workflows.generated';
import { serializeStartWorkflowRequestBodyTypeField } from '@/managers/workflows.generated';
import { deserializeStartWorkflowRequestBodyTypeField } from '@/managers/workflows.generated';
import { serializeStartWorkflowRequestBodyFlowField } from '@/managers/workflows.generated';
import { deserializeStartWorkflowRequestBodyFlowField } from '@/managers/workflows.generated';
import { serializeStartWorkflowRequestBodyFilesField } from '@/managers/workflows.generated';
import { deserializeStartWorkflowRequestBodyFilesField } from '@/managers/workflows.generated';
import { serializeStartWorkflowRequestBodyFilesTypeField } from '@/managers/workflows.generated';
import { deserializeStartWorkflowRequestBodyFilesTypeField } from '@/managers/workflows.generated';
import { serializeStartWorkflowRequestBodyFolderField } from '@/managers/workflows.generated';
import { deserializeStartWorkflowRequestBodyFolderField } from '@/managers/workflows.generated';
import { serializeStartWorkflowRequestBodyFolderTypeField } from '@/managers/workflows.generated';
import { deserializeStartWorkflowRequestBodyFolderTypeField } from '@/managers/workflows.generated';
import { BoxClient } from '@/client.generated';
import { Files } from '@/schemas/files.generated';
import { UploadFileRequestBody } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { FileFull } from '@/schemas/fileFull.generated';
import { Workflows } from '@/schemas/workflows.generated';
import { GetWorkflowsQueryParams } from '@/managers/workflows.generated';
import { Workflow } from '@/schemas/workflow.generated';
import { StartWorkflowRequestBody } from '@/managers/workflows.generated';
import { StartWorkflowRequestBodyTypeField } from '@/managers/workflows.generated';
import { StartWorkflowRequestBodyFlowField } from '@/managers/workflows.generated';
import { StartWorkflowRequestBodyFilesField } from '@/managers/workflows.generated';
import { StartWorkflowRequestBodyFilesTypeField } from '@/managers/workflows.generated';
import { StartWorkflowRequestBodyFolderField } from '@/managers/workflows.generated';
import { StartWorkflowRequestBodyFolderTypeField } from '@/managers/workflows.generated';
import { getUuid } from '@/internal/utils';
import { getEnvVar } from '@/internal/utils';
import { generateByteStream } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { uploadNewFile } from './commons.generated';
import { getDefaultClientWithUserSubject } from './commons.generated';
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
test('testWorkflows', async function testWorkflows(): Promise<any> {
  const adminClient: BoxClient = getDefaultClientWithUserSubject(
    getEnvVar('USER_ID'),
  );
  const workflowFolderId: string = getEnvVar('WORKFLOW_FOLDER_ID');
  const uploadedFiles: Files = await adminClient.uploads.uploadFile({
    attributes: {
      name: getUuid(),
      parent: {
        id: workflowFolderId,
      } satisfies UploadFileRequestBodyAttributesParentField,
    } satisfies UploadFileRequestBodyAttributesField,
    file: generateByteStream(1024 * 1024),
  } satisfies UploadFileRequestBody);
  const file: FileFull = uploadedFiles.entries![0];
  const workflowFileId: string = file.id;
  const workflows: Workflows = await adminClient.workflows.getWorkflows({
    folderId: workflowFolderId,
  } satisfies GetWorkflowsQueryParams);
  if (!(workflows.entries!.length == 1)) {
    throw new Error('Assertion failed');
  }
  const workflowToRun: Workflow = workflows.entries![0];
  if (!((toString(workflowToRun.type!) as string) == 'workflow')) {
    throw new Error('Assertion failed');
  }
  if (!(workflowToRun.isEnabled! == true)) {
    throw new Error('Assertion failed');
  }
  if (!((toString(workflowToRun.flows![0].type!) as string) == 'flow')) {
    throw new Error('Assertion failed');
  }
  if (
    !((toString(workflowToRun.flows![0].trigger!.type!) as string) == 'trigger')
  ) {
    throw new Error('Assertion failed');
  }
  if (
    !(
      (toString(workflowToRun.flows![0].trigger!.triggerType!) as string) ==
      'WORKFLOW_MANUAL_START'
    )
  ) {
    throw new Error('Assertion failed');
  }
  if (
    !(
      (toString(workflowToRun.flows![0].outcomes![0].actionType!) as string) ==
      'delete_file'
    )
  ) {
    throw new Error('Assertion failed');
  }
  if (
    !(
      (toString(workflowToRun.flows![0].outcomes![0].type!) as string) ==
      'outcome'
    )
  ) {
    throw new Error('Assertion failed');
  }
  await adminClient.workflows.startWorkflow(workflowToRun.id!, {
    type: 'workflow_parameters' as StartWorkflowRequestBodyTypeField,
    flow: {
      type: 'flow',
      id: workflowToRun.flows![0].id!,
    } satisfies StartWorkflowRequestBodyFlowField,
    files: [
      {
        type: 'file' as StartWorkflowRequestBodyFilesTypeField,
        id: workflowFileId,
      } satisfies StartWorkflowRequestBodyFilesField,
    ],
    folder: {
      type: 'folder' as StartWorkflowRequestBodyFolderTypeField,
      id: workflowFolderId,
    } satisfies StartWorkflowRequestBodyFolderField,
  } satisfies StartWorkflowRequestBody);
});
export {};
