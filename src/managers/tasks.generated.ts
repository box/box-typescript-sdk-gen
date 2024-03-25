import { serializeTasks } from '../schemas.generated.js';
import { deserializeTasks } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeTask } from '../schemas.generated.js';
import { deserializeTask } from '../schemas.generated.js';
import { Tasks } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Task } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { sdToJson } from '../serialization/json.js';
import { SerializedData } from '../serialization/json.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetFileTasksHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFileTasksHeaders, 'extraHeaders'>
      | Partial<Pick<GetFileTasksHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateTaskRequestBodyItemTypeField = 'file';
export interface CreateTaskRequestBodyItemField {
  readonly id?: string;
  readonly type?: CreateTaskRequestBodyItemTypeField;
}
export type CreateTaskRequestBodyActionField = 'review' | 'complete';
export type CreateTaskRequestBodyCompletionRuleField =
  | 'all_assignees'
  | 'any_assignee';
export interface CreateTaskRequestBody {
  readonly item: CreateTaskRequestBodyItemField;
  readonly action?: CreateTaskRequestBodyActionField;
  readonly message?: string;
  readonly dueAt?: string;
  readonly completionRule?: CreateTaskRequestBodyCompletionRuleField;
}
export class CreateTaskHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateTaskHeaders, 'extraHeaders'>
      | Partial<Pick<CreateTaskHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GetTaskByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetTaskByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetTaskByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateTaskByIdRequestBodyActionField = 'review' | 'complete';
export type UpdateTaskByIdRequestBodyCompletionRuleField =
  | 'all_assignees'
  | 'any_assignee';
export interface UpdateTaskByIdRequestBody {
  readonly action?: UpdateTaskByIdRequestBodyActionField;
  readonly message?: string;
  readonly dueAt?: string;
  readonly completionRule?: UpdateTaskByIdRequestBodyCompletionRuleField;
}
export class UpdateTaskByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateTaskByIdHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateTaskByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteTaskByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteTaskByIdHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteTaskByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class TasksManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          TasksManager,
          | 'networkSession'
          | 'getFileTasks'
          | 'createTask'
          | 'getTaskById'
          | 'updateTaskById'
          | 'deleteTaskById'
        >
      | Partial<Pick<TasksManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getFileTasks(
    fileId: string,
    headers: GetFileTasksHeaders = new GetFileTasksHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Tasks> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string,
        '/tasks'
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTasks(response.data);
  }
  async createTask(
    requestBody: CreateTaskRequestBody,
    headers: CreateTaskHeaders = new CreateTaskHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Task> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(this.networkSession.baseUrls.baseUrl, '/tasks') as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateTaskRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTask(response.data);
  }
  async getTaskById(
    taskId: string,
    headers: GetTaskByIdHeaders = new GetTaskByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Task> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/tasks/',
        toString(taskId) as string
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTask(response.data);
  }
  async updateTaskById(
    taskId: string,
    requestBody: UpdateTaskByIdRequestBody = {} satisfies UpdateTaskByIdRequestBody,
    headers: UpdateTaskByIdHeaders = new UpdateTaskByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Task> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/tasks/',
        toString(taskId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateTaskByIdRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTask(response.data);
  }
  async deleteTaskById(
    taskId: string,
    headers: DeleteTaskByIdHeaders = new DeleteTaskByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/tasks/',
        toString(taskId) as string
      ) as string,
      {
        method: 'DELETE',
        headers: headersMap,
        responseFormat: void 0,
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
}
export function serializeCreateTaskRequestBodyItemTypeField(
  val: any
): SerializedData {
  return val;
}
export function deserializeCreateTaskRequestBodyItemTypeField(
  val: any
): CreateTaskRequestBodyItemTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "CreateTaskRequestBodyItemTypeField"',
    });
  }
  if (val == 'file') {
    return 'file';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateTaskRequestBodyItemField(
  val: any
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCreateTaskRequestBodyItemTypeField(val.type),
  };
}
export function deserializeCreateTaskRequestBodyItemField(
  val: any
): CreateTaskRequestBodyItemField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | CreateTaskRequestBodyItemTypeField =
    val.type == void 0
      ? void 0
      : deserializeCreateTaskRequestBodyItemTypeField(val.type);
  return { id: id, type: type } satisfies CreateTaskRequestBodyItemField;
}
export function serializeCreateTaskRequestBodyActionField(
  val: any
): SerializedData {
  return val;
}
export function deserializeCreateTaskRequestBodyActionField(
  val: any
): CreateTaskRequestBodyActionField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "CreateTaskRequestBodyActionField"',
    });
  }
  if (val == 'review') {
    return 'review';
  }
  if (val == 'complete') {
    return 'complete';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateTaskRequestBodyCompletionRuleField(
  val: any
): SerializedData {
  return val;
}
export function deserializeCreateTaskRequestBodyCompletionRuleField(
  val: any
): CreateTaskRequestBodyCompletionRuleField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateTaskRequestBodyCompletionRuleField"',
    });
  }
  if (val == 'all_assignees') {
    return 'all_assignees';
  }
  if (val == 'any_assignee') {
    return 'any_assignee';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateTaskRequestBody(val: any): SerializedData {
  return {
    ['item']: serializeCreateTaskRequestBodyItemField(val.item),
    ['action']:
      val.action == void 0
        ? void 0
        : serializeCreateTaskRequestBodyActionField(val.action),
    ['message']: val.message == void 0 ? void 0 : val.message,
    ['due_at']: val.dueAt == void 0 ? void 0 : val.dueAt,
    ['completion_rule']:
      val.completionRule == void 0
        ? void 0
        : serializeCreateTaskRequestBodyCompletionRuleField(val.completionRule),
  };
}
export function deserializeCreateTaskRequestBody(
  val: any
): CreateTaskRequestBody {
  const item: CreateTaskRequestBodyItemField =
    deserializeCreateTaskRequestBodyItemField(val.item);
  const action: undefined | CreateTaskRequestBodyActionField =
    val.action == void 0
      ? void 0
      : deserializeCreateTaskRequestBodyActionField(val.action);
  const message: undefined | string =
    val.message == void 0 ? void 0 : val.message;
  const dueAt: undefined | string = val.due_at == void 0 ? void 0 : val.due_at;
  const completionRule: undefined | CreateTaskRequestBodyCompletionRuleField =
    val.completion_rule == void 0
      ? void 0
      : deserializeCreateTaskRequestBodyCompletionRuleField(
          val.completion_rule
        );
  return {
    item: item,
    action: action,
    message: message,
    dueAt: dueAt,
    completionRule: completionRule,
  } satisfies CreateTaskRequestBody;
}
export function serializeUpdateTaskByIdRequestBodyActionField(
  val: any
): SerializedData {
  return val;
}
export function deserializeUpdateTaskByIdRequestBodyActionField(
  val: any
): UpdateTaskByIdRequestBodyActionField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "UpdateTaskByIdRequestBodyActionField"',
    });
  }
  if (val == 'review') {
    return 'review';
  }
  if (val == 'complete') {
    return 'complete';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateTaskByIdRequestBodyCompletionRuleField(
  val: any
): SerializedData {
  return val;
}
export function deserializeUpdateTaskByIdRequestBodyCompletionRuleField(
  val: any
): UpdateTaskByIdRequestBodyCompletionRuleField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateTaskByIdRequestBodyCompletionRuleField"',
    });
  }
  if (val == 'all_assignees') {
    return 'all_assignees';
  }
  if (val == 'any_assignee') {
    return 'any_assignee';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateTaskByIdRequestBody(val: any): SerializedData {
  return {
    ['action']:
      val.action == void 0
        ? void 0
        : serializeUpdateTaskByIdRequestBodyActionField(val.action),
    ['message']: val.message == void 0 ? void 0 : val.message,
    ['due_at']: val.dueAt == void 0 ? void 0 : val.dueAt,
    ['completion_rule']:
      val.completionRule == void 0
        ? void 0
        : serializeUpdateTaskByIdRequestBodyCompletionRuleField(
            val.completionRule
          ),
  };
}
export function deserializeUpdateTaskByIdRequestBody(
  val: any
): UpdateTaskByIdRequestBody {
  const action: undefined | UpdateTaskByIdRequestBodyActionField =
    val.action == void 0
      ? void 0
      : deserializeUpdateTaskByIdRequestBodyActionField(val.action);
  const message: undefined | string =
    val.message == void 0 ? void 0 : val.message;
  const dueAt: undefined | string = val.due_at == void 0 ? void 0 : val.due_at;
  const completionRule:
    | undefined
    | UpdateTaskByIdRequestBodyCompletionRuleField =
    val.completion_rule == void 0
      ? void 0
      : deserializeUpdateTaskByIdRequestBodyCompletionRuleField(
          val.completion_rule
        );
  return {
    action: action,
    message: message,
    dueAt: dueAt,
    completionRule: completionRule,
  } satisfies UpdateTaskByIdRequestBody;
}
