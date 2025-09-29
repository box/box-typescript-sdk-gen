import { serializeFiles } from '@/schemas/files.generated';
import { deserializeFiles } from '@/schemas/files.generated';
import { serializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { serializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { serializeFileFull } from '@/schemas/fileFull.generated';
import { deserializeFileFull } from '@/schemas/fileFull.generated';
import { serializeDateTime } from '@/internal/utils';
import { deserializeDateTime } from '@/internal/utils';
import { serializeTask } from '@/schemas/task.generated';
import { deserializeTask } from '@/schemas/task.generated';
import { serializeCreateTaskRequestBody } from '@/managers/tasks.generated';
import { deserializeCreateTaskRequestBody } from '@/managers/tasks.generated';
import { serializeCreateTaskRequestBodyItemField } from '@/managers/tasks.generated';
import { deserializeCreateTaskRequestBodyItemField } from '@/managers/tasks.generated';
import { serializeCreateTaskRequestBodyItemTypeField } from '@/managers/tasks.generated';
import { deserializeCreateTaskRequestBodyItemTypeField } from '@/managers/tasks.generated';
import { serializeCreateTaskRequestBodyActionField } from '@/managers/tasks.generated';
import { deserializeCreateTaskRequestBodyActionField } from '@/managers/tasks.generated';
import { serializeCreateTaskRequestBodyCompletionRuleField } from '@/managers/tasks.generated';
import { deserializeCreateTaskRequestBodyCompletionRuleField } from '@/managers/tasks.generated';
import { serializeTasks } from '@/schemas/tasks.generated';
import { deserializeTasks } from '@/schemas/tasks.generated';
import { serializeUpdateTaskByIdRequestBody } from '@/managers/tasks.generated';
import { deserializeUpdateTaskByIdRequestBody } from '@/managers/tasks.generated';
import { UpdateTaskByIdOptionalsInput } from '@/managers/tasks.generated';
import { UpdateTaskByIdOptionals } from '@/managers/tasks.generated';
import { BoxClient } from '@/client.generated';
import { Files } from '@/schemas/files.generated';
import { UploadFileRequestBody } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { FileFull } from '@/schemas/fileFull.generated';
import { DateTime } from '@/internal/utils';
import { Task } from '@/schemas/task.generated';
import { CreateTaskRequestBody } from '@/managers/tasks.generated';
import { CreateTaskRequestBodyItemField } from '@/managers/tasks.generated';
import { CreateTaskRequestBodyItemTypeField } from '@/managers/tasks.generated';
import { CreateTaskRequestBodyActionField } from '@/managers/tasks.generated';
import { CreateTaskRequestBodyCompletionRuleField } from '@/managers/tasks.generated';
import { Tasks } from '@/schemas/tasks.generated';
import { UpdateTaskByIdRequestBody } from '@/managers/tasks.generated';
import { getUuid } from '@/internal/utils';
import { generateByteStream } from '@/internal/utils';
import { dateTimeFromString } from '@/internal/utils';
import { dateTimeToString } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('testCreateUpdateGetDeleteTask', async function testCreateUpdateGetDeleteTask(): Promise<any> {
  const files: Files = await client.uploads.uploadFile({
    attributes: {
      name: getUuid(),
      parent: { id: '0' } satisfies UploadFileRequestBodyAttributesParentField,
    } satisfies UploadFileRequestBodyAttributesField,
    file: generateByteStream(10),
  } satisfies UploadFileRequestBody);
  const file: FileFull = files.entries![0];
  const dateTime: DateTime = dateTimeFromString('2035-01-01T00:00:00Z');
  const task: Task = await client.tasks.createTask({
    item: {
      type: 'file' as CreateTaskRequestBodyItemTypeField,
      id: file.id,
    } satisfies CreateTaskRequestBodyItemField,
    message: 'test message',
    dueAt: dateTime,
    action: 'review' as CreateTaskRequestBodyActionField,
    completionRule: 'all_assignees' as CreateTaskRequestBodyCompletionRuleField,
  } satisfies CreateTaskRequestBody);
  if (!(task.message == 'test message')) {
    throw new Error('Assertion failed');
  }
  if (!(task.item!.id == file.id)) {
    throw new Error('Assertion failed');
  }
  if (!(dateTimeToString(task.dueAt!) == dateTimeToString(dateTime))) {
    throw new Error('Assertion failed');
  }
  const taskById: Task = await client.tasks.getTaskById(task.id!);
  if (!(taskById.id == task.id)) {
    throw new Error('Assertion failed');
  }
  const taskOnFile: Tasks = await client.tasks.getFileTasks(file.id);
  if (!(taskOnFile.totalCount == 1)) {
    throw new Error('Assertion failed');
  }
  const updatedTask: Task = await client.tasks.updateTaskById(task.id!, {
    requestBody: {
      message: 'updated message',
    } satisfies UpdateTaskByIdRequestBody,
  } satisfies UpdateTaskByIdOptionalsInput);
  if (!(updatedTask.message == 'updated message')) {
    throw new Error('Assertion failed');
  }
  await client.tasks.deleteTaskById(task.id!);
  await client.files.deleteFileById(file.id);
});
export {};
