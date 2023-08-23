import { serializeUploadFileRequestBodyArgAttributesField } from "../managers/uploads.generated.js";
import { deserializeUploadFileRequestBodyArgAttributesField } from "../managers/uploads.generated.js";
import { serializeUploadFileRequestBodyArgAttributesFieldParentField } from "../managers/uploads.generated.js";
import { deserializeUploadFileRequestBodyArgAttributesFieldParentField } from "../managers/uploads.generated.js";
import { serializeCreateTaskRequestBodyArg } from "../managers/tasks.generated.js";
import { deserializeCreateTaskRequestBodyArg } from "../managers/tasks.generated.js";
import { serializeCreateTaskRequestBodyArgItemField } from "../managers/tasks.generated.js";
import { deserializeCreateTaskRequestBodyArgItemField } from "../managers/tasks.generated.js";
import { serializeCreateTaskRequestBodyArgItemFieldTypeField } from "../managers/tasks.generated.js";
import { deserializeCreateTaskRequestBodyArgItemFieldTypeField } from "../managers/tasks.generated.js";
import { serializeCreateTaskRequestBodyArgActionField } from "../managers/tasks.generated.js";
import { deserializeCreateTaskRequestBodyArgActionField } from "../managers/tasks.generated.js";
import { serializeCreateTaskRequestBodyArgCompletionRuleField } from "../managers/tasks.generated.js";
import { deserializeCreateTaskRequestBodyArgCompletionRuleField } from "../managers/tasks.generated.js";
import { serializeUpdateTaskByIdRequestBodyArg } from "../managers/tasks.generated.js";
import { deserializeUpdateTaskByIdRequestBodyArg } from "../managers/tasks.generated.js";
import { UploadFileRequestBodyArg } from "../managers/uploads.generated.js";
import { UploadFileRequestBodyArgAttributesField } from "../managers/uploads.generated.js";
import { UploadFileRequestBodyArgAttributesFieldParentField } from "../managers/uploads.generated.js";
import { CreateTaskRequestBodyArg } from "../managers/tasks.generated.js";
import { CreateTaskRequestBodyArgItemField } from "../managers/tasks.generated.js";
import { CreateTaskRequestBodyArgItemFieldTypeField } from "../managers/tasks.generated.js";
import { CreateTaskRequestBodyArgActionField } from "../managers/tasks.generated.js";
import { CreateTaskRequestBodyArgCompletionRuleField } from "../managers/tasks.generated.js";
import { UpdateTaskByIdRequestBodyArg } from "../managers/tasks.generated.js";
import { decodeBase64 } from "../utils.js";
import { getEnvVar } from "../utils.js";
import { getUuid } from "../utils.js";
import { generateByteStream } from "../utils.js";
import { Client } from "../client.generated.js";
import { JwtAuth } from "../jwtAuth.js";
import { JwtConfig } from "../jwtAuth.js";
const jwtConfig: any = JwtConfig.fromConfigJsonString(decodeBase64(getEnvVar("JWT_CONFIG_BASE_64")));
const auth: any = new JwtAuth({ config: jwtConfig });
const client: any = new Client({ auth: auth });
test("testCreateUpdateGetDeleteTask", async function testCreateUpdateGetDeleteTask(): Promise<any> {
    const files: any = await client.uploads.uploadFile({ attributes: { name: getUuid(), parent: { id: "0" } satisfies UploadFileRequestBodyArgAttributesFieldParentField } satisfies UploadFileRequestBodyArgAttributesField, file: generateByteStream(10) } satisfies UploadFileRequestBodyArg);
    const file: any = files.entries[0];
    const task: any = await client.tasks.createTask({ item: { type: "file" as CreateTaskRequestBodyArgItemFieldTypeField, id: file.id } satisfies CreateTaskRequestBodyArgItemField, message: "test message", dueAt: "2035-01-01T00:00:00Z", action: "review" as CreateTaskRequestBodyArgActionField, completionRule: "all_assignees" as CreateTaskRequestBodyArgCompletionRuleField } satisfies CreateTaskRequestBodyArg);
    if (!(task.message == "test message")) {
        throw "Assertion failed";
    }
    if (!(task.item.id == file.id)) {
        throw "Assertion failed";
    }
    const taskById: any = await client.tasks.getTaskById(task.id);
    if (!(taskById.id == task.id)) {
        throw "Assertion failed";
    }
    const taskOnFile: any = await client.tasks.getFileTasks(file.id);
    if (!(taskOnFile.totalCount == 1)) {
        throw "Assertion failed";
    }
    const updatedTask: any = await client.tasks.updateTaskById(task.id, { message: "updated message" } satisfies UpdateTaskByIdRequestBodyArg);
    if (!(updatedTask.message == "updated message")) {
        throw "Assertion failed";
    }
    await client.tasks.deleteTaskById(task.id)
    await client.files.deleteFileById(file.id)
});
export {};
