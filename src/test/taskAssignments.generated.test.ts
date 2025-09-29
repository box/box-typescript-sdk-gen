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
import { serializeUserFull } from '@/schemas/userFull.generated';
import { deserializeUserFull } from '@/schemas/userFull.generated';
import { serializeTaskAssignment } from '@/schemas/taskAssignment.generated';
import { deserializeTaskAssignment } from '@/schemas/taskAssignment.generated';
import { serializeCreateTaskAssignmentRequestBody } from '@/managers/taskAssignments.generated';
import { deserializeCreateTaskAssignmentRequestBody } from '@/managers/taskAssignments.generated';
import { serializeCreateTaskAssignmentRequestBodyTaskField } from '@/managers/taskAssignments.generated';
import { deserializeCreateTaskAssignmentRequestBodyTaskField } from '@/managers/taskAssignments.generated';
import { serializeCreateTaskAssignmentRequestBodyTaskTypeField } from '@/managers/taskAssignments.generated';
import { deserializeCreateTaskAssignmentRequestBodyTaskTypeField } from '@/managers/taskAssignments.generated';
import { serializeCreateTaskAssignmentRequestBodyAssignToField } from '@/managers/taskAssignments.generated';
import { deserializeCreateTaskAssignmentRequestBodyAssignToField } from '@/managers/taskAssignments.generated';
import { serializeTaskAssignments } from '@/schemas/taskAssignments.generated';
import { deserializeTaskAssignments } from '@/schemas/taskAssignments.generated';
import { serializeUpdateTaskAssignmentByIdRequestBody } from '@/managers/taskAssignments.generated';
import { deserializeUpdateTaskAssignmentByIdRequestBody } from '@/managers/taskAssignments.generated';
import { serializeUpdateTaskAssignmentByIdRequestBodyResolutionStateField } from '@/managers/taskAssignments.generated';
import { deserializeUpdateTaskAssignmentByIdRequestBodyResolutionStateField } from '@/managers/taskAssignments.generated';
import { UpdateTaskAssignmentByIdOptionalsInput } from '@/managers/taskAssignments.generated';
import { UpdateTaskAssignmentByIdOptionals } from '@/managers/taskAssignments.generated';
import { BoxClient } from '@/client.generated';
import { FileFull } from '@/schemas/fileFull.generated';
import { DateTime } from '@/internal/utils';
import { Task } from '@/schemas/task.generated';
import { CreateTaskRequestBody } from '@/managers/tasks.generated';
import { CreateTaskRequestBodyItemField } from '@/managers/tasks.generated';
import { CreateTaskRequestBodyItemTypeField } from '@/managers/tasks.generated';
import { CreateTaskRequestBodyActionField } from '@/managers/tasks.generated';
import { CreateTaskRequestBodyCompletionRuleField } from '@/managers/tasks.generated';
import { UserFull } from '@/schemas/userFull.generated';
import { TaskAssignment } from '@/schemas/taskAssignment.generated';
import { CreateTaskAssignmentRequestBody } from '@/managers/taskAssignments.generated';
import { CreateTaskAssignmentRequestBodyTaskField } from '@/managers/taskAssignments.generated';
import { CreateTaskAssignmentRequestBodyTaskTypeField } from '@/managers/taskAssignments.generated';
import { CreateTaskAssignmentRequestBodyAssignToField } from '@/managers/taskAssignments.generated';
import { TaskAssignments } from '@/schemas/taskAssignments.generated';
import { UpdateTaskAssignmentByIdRequestBody } from '@/managers/taskAssignments.generated';
import { UpdateTaskAssignmentByIdRequestBodyResolutionStateField } from '@/managers/taskAssignments.generated';
import { uploadNewFile } from './commons.generated';
import { getDefaultClient } from './commons.generated';
import { dateTimeFromString } from '@/internal/utils';
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
test('testCreateUpdateGetDeleteTaskAssignment', async function testCreateUpdateGetDeleteTaskAssignment(): Promise<any> {
  const file: FileFull = await uploadNewFile();
  const date: DateTime = dateTimeFromString('2035-01-01T00:00:00Z');
  const task: Task = await client.tasks.createTask({
    item: {
      type: 'file' as CreateTaskRequestBodyItemTypeField,
      id: file.id,
    } satisfies CreateTaskRequestBodyItemField,
    message: 'test message',
    dueAt: date,
    action: 'review' as CreateTaskRequestBodyActionField,
    completionRule: 'all_assignees' as CreateTaskRequestBodyCompletionRuleField,
  } satisfies CreateTaskRequestBody);
  if (!(task.message == 'test message')) {
    throw new Error('Assertion failed');
  }
  if (!(task.item!.id == file.id)) {
    throw new Error('Assertion failed');
  }
  const currentUser: UserFull = await client.users.getUserMe();
  const taskAssignment: TaskAssignment =
    await client.taskAssignments.createTaskAssignment({
      task: new CreateTaskAssignmentRequestBodyTaskField({
        type: 'task' as CreateTaskAssignmentRequestBodyTaskTypeField,
        id: task.id!,
      }),
      assignTo: {
        id: currentUser.id,
      } satisfies CreateTaskAssignmentRequestBodyAssignToField,
    } satisfies CreateTaskAssignmentRequestBody);
  if (!(taskAssignment.item!.id == file.id)) {
    throw new Error('Assertion failed');
  }
  if (!(taskAssignment.assignedTo!.id == currentUser.id)) {
    throw new Error('Assertion failed');
  }
  const taskAssignmentById: TaskAssignment =
    await client.taskAssignments.getTaskAssignmentById(taskAssignment.id!);
  if (!(taskAssignmentById.id == taskAssignment.id)) {
    throw new Error('Assertion failed');
  }
  const taskAssignmentsOnTask: TaskAssignments =
    await client.taskAssignments.getTaskAssignments(task.id!);
  if (!(taskAssignmentsOnTask.totalCount! == 1)) {
    throw new Error('Assertion failed');
  }
  const updatedTaskAssignment: TaskAssignment =
    await client.taskAssignments.updateTaskAssignmentById(taskAssignment.id!, {
      requestBody: {
        message: 'updated message',
        resolutionState:
          'approved' as UpdateTaskAssignmentByIdRequestBodyResolutionStateField,
      } satisfies UpdateTaskAssignmentByIdRequestBody,
    } satisfies UpdateTaskAssignmentByIdOptionalsInput);
  if (!(updatedTaskAssignment.message == 'updated message')) {
    throw new Error('Assertion failed');
  }
  if (
    !((toString(updatedTaskAssignment.resolutionState) as string) == 'approved')
  ) {
    throw new Error('Assertion failed');
  }
  await expect(async () => {
    await client.taskAssignments.deleteTaskAssignmentById(taskAssignment.id!);
  }).rejects.toThrow();
  await client.files.deleteFileById(file.id);
});
export {};
