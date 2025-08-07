import { CreateTaskAssignmentRequestBodyTaskField } from '../managers/taskAssignments.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { getDefaultClient } from './commons.generated.js';
import { dateTimeFromString } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testCreateUpdateGetDeleteTaskAssignment', async function testCreateUpdateGetDeleteTaskAssignment() {
    const file = await uploadNewFile();
    const date = dateTimeFromString('2035-01-01T00:00:00Z');
    const task = await client.tasks.createTask({
        item: {
            type: 'file',
            id: file.id,
        },
        message: 'test message',
        dueAt: date,
        action: 'review',
        completionRule: 'all_assignees',
    });
    if (!(task.message == 'test message')) {
        throw new Error('Assertion failed');
    }
    if (!(task.item.id == file.id)) {
        throw new Error('Assertion failed');
    }
    const currentUser = await client.users.getUserMe();
    const taskAssignment = await client.taskAssignments.createTaskAssignment({
        task: new CreateTaskAssignmentRequestBodyTaskField({
            type: 'task',
            id: task.id,
        }),
        assignTo: {
            id: currentUser.id,
        },
    });
    if (!(taskAssignment.item.id == file.id)) {
        throw new Error('Assertion failed');
    }
    if (!(taskAssignment.assignedTo.id == currentUser.id)) {
        throw new Error('Assertion failed');
    }
    const taskAssignmentById = await client.taskAssignments.getTaskAssignmentById(taskAssignment.id);
    if (!(taskAssignmentById.id == taskAssignment.id)) {
        throw new Error('Assertion failed');
    }
    const taskAssignmentsOnTask = await client.taskAssignments.getTaskAssignments(task.id);
    if (!(taskAssignmentsOnTask.totalCount == 1)) {
        throw new Error('Assertion failed');
    }
    const updatedTaskAssignment = await client.taskAssignments.updateTaskAssignmentById(taskAssignment.id, {
        requestBody: {
            message: 'updated message',
            resolutionState: 'approved',
        },
    });
    if (!(updatedTaskAssignment.message == 'updated message')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(updatedTaskAssignment.resolutionState) == 'approved')) {
        throw new Error('Assertion failed');
    }
    await expect(async () => {
        await client.taskAssignments.deleteTaskAssignmentById(taskAssignment.id);
    }).rejects.toThrow();
    await client.files.deleteFileById(file.id);
});
//# sourceMappingURL=taskAssignments.generated.test.js.map