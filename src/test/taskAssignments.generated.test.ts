import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeTask } from '../schemas.generated.js';
import { deserializeTask } from '../schemas.generated.js';
import { serializeCreateTaskRequestBody } from '../managers/tasks.generated.js';
import { deserializeCreateTaskRequestBody } from '../managers/tasks.generated.js';
import { serializeCreateTaskRequestBodyItemField } from '../managers/tasks.generated.js';
import { deserializeCreateTaskRequestBodyItemField } from '../managers/tasks.generated.js';
import { serializeCreateTaskRequestBodyItemTypeField } from '../managers/tasks.generated.js';
import { deserializeCreateTaskRequestBodyItemTypeField } from '../managers/tasks.generated.js';
import { serializeCreateTaskRequestBodyActionField } from '../managers/tasks.generated.js';
import { deserializeCreateTaskRequestBodyActionField } from '../managers/tasks.generated.js';
import { serializeCreateTaskRequestBodyCompletionRuleField } from '../managers/tasks.generated.js';
import { deserializeCreateTaskRequestBodyCompletionRuleField } from '../managers/tasks.generated.js';
import { serializeUserFull } from '../schemas.generated.js';
import { deserializeUserFull } from '../schemas.generated.js';
import { serializeTaskAssignment } from '../schemas.generated.js';
import { deserializeTaskAssignment } from '../schemas.generated.js';
import { serializeCreateTaskAssignmentRequestBody } from '../managers/taskAssignments.generated.js';
import { deserializeCreateTaskAssignmentRequestBody } from '../managers/taskAssignments.generated.js';
import { serializeCreateTaskAssignmentRequestBodyTaskField } from '../managers/taskAssignments.generated.js';
import { deserializeCreateTaskAssignmentRequestBodyTaskField } from '../managers/taskAssignments.generated.js';
import { serializeCreateTaskAssignmentRequestBodyTaskTypeField } from '../managers/taskAssignments.generated.js';
import { deserializeCreateTaskAssignmentRequestBodyTaskTypeField } from '../managers/taskAssignments.generated.js';
import { serializeCreateTaskAssignmentRequestBodyAssignToField } from '../managers/taskAssignments.generated.js';
import { deserializeCreateTaskAssignmentRequestBodyAssignToField } from '../managers/taskAssignments.generated.js';
import { serializeTaskAssignments } from '../schemas.generated.js';
import { deserializeTaskAssignments } from '../schemas.generated.js';
import { serializeUpdateTaskAssignmentByIdRequestBody } from '../managers/taskAssignments.generated.js';
import { deserializeUpdateTaskAssignmentByIdRequestBody } from '../managers/taskAssignments.generated.js';
import { serializeUpdateTaskAssignmentByIdRequestBodyResolutionStateField } from '../managers/taskAssignments.generated.js';
import { deserializeUpdateTaskAssignmentByIdRequestBodyResolutionStateField } from '../managers/taskAssignments.generated.js';
import { BoxClient } from '../client.generated.js';
import { FileFull } from '../schemas.generated.js';
import { Task } from '../schemas.generated.js';
import { CreateTaskRequestBody } from '../managers/tasks.generated.js';
import { CreateTaskRequestBodyItemField } from '../managers/tasks.generated.js';
import { CreateTaskRequestBodyItemTypeField } from '../managers/tasks.generated.js';
import { CreateTaskRequestBodyActionField } from '../managers/tasks.generated.js';
import { CreateTaskRequestBodyCompletionRuleField } from '../managers/tasks.generated.js';
import { UserFull } from '../schemas.generated.js';
import { TaskAssignment } from '../schemas.generated.js';
import { CreateTaskAssignmentRequestBody } from '../managers/taskAssignments.generated.js';
import { CreateTaskAssignmentRequestBodyTaskField } from '../managers/taskAssignments.generated.js';
import { CreateTaskAssignmentRequestBodyTaskTypeField } from '../managers/taskAssignments.generated.js';
import { CreateTaskAssignmentRequestBodyAssignToField } from '../managers/taskAssignments.generated.js';
import { TaskAssignments } from '../schemas.generated.js';
import { UpdateTaskAssignmentByIdRequestBody } from '../managers/taskAssignments.generated.js';
import { UpdateTaskAssignmentByIdRequestBodyResolutionStateField } from '../managers/taskAssignments.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../utils.js';
import { sdToJson } from '../json.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: BoxClient = getDefaultClient();
test('testCreateUpdateGetDeleteTaskAssignment', async function testCreateUpdateGetDeleteTaskAssignment(): Promise<any> {
  const file: FileFull = await uploadNewFile();
  const task: Task = await client.tasks.createTask({
    item: {
      type: 'file' as CreateTaskRequestBodyItemTypeField,
      id: file.id,
    } satisfies CreateTaskRequestBodyItemField,
    message: 'test message',
    dueAt: '2035-01-01T00:00:00Z',
    action: 'review' as CreateTaskRequestBodyActionField,
    completionRule: 'all_assignees' as CreateTaskRequestBodyCompletionRuleField,
  } satisfies CreateTaskRequestBody);
  if (!(task.message == 'test message')) {
    throw 'Assertion failed';
  }
  if (!(task.item!.id == file.id)) {
    throw 'Assertion failed';
  }
  const currentUser: UserFull = await client.users.getUserMe();
  const taskAssignment: TaskAssignment =
    await client.taskAssignments.createTaskAssignment({
      task: {
        type: 'task' as CreateTaskAssignmentRequestBodyTaskTypeField,
        id: task.id!,
      } satisfies CreateTaskAssignmentRequestBodyTaskField,
      assignTo: {
        id: currentUser.id,
      } satisfies CreateTaskAssignmentRequestBodyAssignToField,
    } satisfies CreateTaskAssignmentRequestBody);
  if (!(taskAssignment.item!.id == file.id)) {
    throw 'Assertion failed';
  }
  if (!(taskAssignment.assignedTo!.id == currentUser.id)) {
    throw 'Assertion failed';
  }
  const taskAssignmentById: TaskAssignment =
    await client.taskAssignments.getTaskAssignmentById(taskAssignment.id!);
  if (!(taskAssignmentById.id == taskAssignment.id)) {
    throw 'Assertion failed';
  }
  const taskAssignmentsOnTask: TaskAssignments =
    await client.taskAssignments.getTaskAssignments(task.id!);
  if (!(taskAssignmentsOnTask.totalCount! == 1)) {
    throw 'Assertion failed';
  }
  const updatedTaskAssignment: TaskAssignment =
    await client.taskAssignments.updateTaskAssignmentById(taskAssignment.id!, {
      message: 'updated message',
      resolutionState:
        'approved' as UpdateTaskAssignmentByIdRequestBodyResolutionStateField,
    } satisfies UpdateTaskAssignmentByIdRequestBody);
  if (!(updatedTaskAssignment.message == 'updated message')) {
    throw 'Assertion failed';
  }
  if (
    !((toString(updatedTaskAssignment.resolutionState) as string) == 'approved')
  ) {
    throw 'Assertion failed';
  }
  await expect(async () => {
    await client.taskAssignments.deleteTaskAssignmentById(taskAssignment.id!);
  }).rejects.toThrow();
  await client.files.deleteFileById(file.id);
});
export {};
