import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { dateTimeFromString } from '../internal/utils.js';
import { dateTimeToString } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
export const client = getDefaultClient();
test('testCreateUpdateGetDeleteTask', async function testCreateUpdateGetDeleteTask() {
    const files = await client.uploads.uploadFile({
        attributes: {
            name: getUuid(),
            parent: { id: '0' },
        },
        file: generateByteStream(10),
    });
    const file = files.entries[0];
    const dateTime = dateTimeFromString('2035-01-01T00:00:00Z');
    const task = await client.tasks.createTask({
        item: {
            type: 'file',
            id: file.id,
        },
        message: 'test message',
        dueAt: dateTime,
        action: 'review',
        completionRule: 'all_assignees',
    });
    if (!(task.message == 'test message')) {
        throw new Error('Assertion failed');
    }
    if (!(task.item.id == file.id)) {
        throw new Error('Assertion failed');
    }
    if (!(dateTimeToString(task.dueAt) == dateTimeToString(dateTime))) {
        throw new Error('Assertion failed');
    }
    const taskById = await client.tasks.getTaskById(task.id);
    if (!(taskById.id == task.id)) {
        throw new Error('Assertion failed');
    }
    const taskOnFile = await client.tasks.getFileTasks(file.id);
    if (!(taskOnFile.totalCount == 1)) {
        throw new Error('Assertion failed');
    }
    const updatedTask = await client.tasks.updateTaskById(task.id, {
        requestBody: {
            message: 'updated message',
        },
    });
    if (!(updatedTask.message == 'updated message')) {
        throw new Error('Assertion failed');
    }
    await client.tasks.deleteTaskById(task.id);
    await client.files.deleteFileById(file.id);
});
//# sourceMappingURL=tasks.generated.test.js.map