"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const taskAssignments_generated_js_1 = require("../managers/taskAssignments.generated.js");
const commons_generated_js_1 = require("./commons.generated.js");
const commons_generated_js_2 = require("./commons.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_2.getDefaultClient)();
test('testCreateUpdateGetDeleteTaskAssignment', function testCreateUpdateGetDeleteTaskAssignment() {
    return __awaiter(this, void 0, void 0, function* () {
        const file = yield (0, commons_generated_js_1.uploadNewFile)();
        const date = (0, utils_js_1.dateTimeFromString)('2035-01-01T00:00:00Z');
        const task = yield exports.client.tasks.createTask({
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
        const currentUser = yield exports.client.users.getUserMe();
        const taskAssignment = yield exports.client.taskAssignments.createTaskAssignment({
            task: new taskAssignments_generated_js_1.CreateTaskAssignmentRequestBodyTaskField({
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
        const taskAssignmentById = yield exports.client.taskAssignments.getTaskAssignmentById(taskAssignment.id);
        if (!(taskAssignmentById.id == taskAssignment.id)) {
            throw new Error('Assertion failed');
        }
        const taskAssignmentsOnTask = yield exports.client.taskAssignments.getTaskAssignments(task.id);
        if (!(taskAssignmentsOnTask.totalCount == 1)) {
            throw new Error('Assertion failed');
        }
        const updatedTaskAssignment = yield exports.client.taskAssignments.updateTaskAssignmentById(taskAssignment.id, {
            requestBody: {
                message: 'updated message',
                resolutionState: 'approved',
            },
        });
        if (!(updatedTaskAssignment.message == 'updated message')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(updatedTaskAssignment.resolutionState) == 'approved')) {
            throw new Error('Assertion failed');
        }
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.taskAssignments.deleteTaskAssignmentById(taskAssignment.id);
        })).rejects.toThrow();
        yield exports.client.files.deleteFileById(file.id);
    });
});
//# sourceMappingURL=taskAssignments.generated.test.js.map