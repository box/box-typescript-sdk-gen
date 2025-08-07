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
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const utils_js_3 = require("../internal/utils.js");
const utils_js_4 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testCreateUpdateGetDeleteTask', function testCreateUpdateGetDeleteTask() {
    return __awaiter(this, void 0, void 0, function* () {
        const files = yield exports.client.uploads.uploadFile({
            attributes: {
                name: (0, utils_js_1.getUuid)(),
                parent: { id: '0' },
            },
            file: (0, utils_js_2.generateByteStream)(10),
        });
        const file = files.entries[0];
        const dateTime = (0, utils_js_3.dateTimeFromString)('2035-01-01T00:00:00Z');
        const task = yield exports.client.tasks.createTask({
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
        if (!((0, utils_js_4.dateTimeToString)(task.dueAt) == (0, utils_js_4.dateTimeToString)(dateTime))) {
            throw new Error('Assertion failed');
        }
        const taskById = yield exports.client.tasks.getTaskById(task.id);
        if (!(taskById.id == task.id)) {
            throw new Error('Assertion failed');
        }
        const taskOnFile = yield exports.client.tasks.getFileTasks(file.id);
        if (!(taskOnFile.totalCount == 1)) {
            throw new Error('Assertion failed');
        }
        const updatedTask = yield exports.client.tasks.updateTaskById(task.id, {
            requestBody: {
                message: 'updated message',
            },
        });
        if (!(updatedTask.message == 'updated message')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.tasks.deleteTaskById(task.id);
        yield exports.client.files.deleteFileById(file.id);
    });
});
//# sourceMappingURL=tasks.generated.test.js.map