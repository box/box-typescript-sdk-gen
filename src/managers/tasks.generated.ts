import { serializeTasks } from '../schemas.generated.js';
import { deserializeTasks } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeTask } from '../schemas.generated.js';
import { deserializeTask } from '../schemas.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
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
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetFileTasksOptionals {
  readonly headers: GetFileTasksHeaders = new GetFileTasksHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<GetFileTasksOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<GetFileTasksOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetFileTasksOptionalsInput {
  readonly headers?: GetFileTasksHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateTaskOptionals {
  readonly headers: CreateTaskHeaders = new CreateTaskHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<CreateTaskOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<CreateTaskOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface CreateTaskOptionalsInput {
  readonly headers?: CreateTaskHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetTaskByIdOptionals {
  readonly headers: GetTaskByIdHeaders = new GetTaskByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<GetTaskByIdOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<GetTaskByIdOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetTaskByIdOptionalsInput {
  readonly headers?: GetTaskByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateTaskByIdOptionals {
  readonly requestBody: UpdateTaskByIdRequestBody =
    {} satisfies UpdateTaskByIdRequestBody;
  readonly headers: UpdateTaskByIdHeaders = new UpdateTaskByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateTaskByIdOptionals,
      'requestBody' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          UpdateTaskByIdOptionals,
          'requestBody' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.requestBody) {
      this.requestBody = fields.requestBody;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface UpdateTaskByIdOptionalsInput {
  readonly requestBody?: UpdateTaskByIdRequestBody;
  readonly headers?: UpdateTaskByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteTaskByIdOptionals {
  readonly headers: DeleteTaskByIdHeaders = new DeleteTaskByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<DeleteTaskByIdOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<DeleteTaskByIdOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface DeleteTaskByIdOptionalsInput {
  readonly headers?: DeleteTaskByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetFileTasksHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetFileTasksHeaders, 'extraHeaders'> &
      Partial<Pick<GetFileTasksHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetFileTasksHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
  readonly dueAt?: DateTime;
  readonly completionRule?: CreateTaskRequestBodyCompletionRuleField;
}
export class CreateTaskHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateTaskHeaders, 'extraHeaders'> &
      Partial<Pick<CreateTaskHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateTaskHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class GetTaskByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetTaskByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetTaskByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetTaskByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type UpdateTaskByIdRequestBodyActionField = 'review' | 'complete';
export type UpdateTaskByIdRequestBodyCompletionRuleField =
  | 'all_assignees'
  | 'any_assignee';
export interface UpdateTaskByIdRequestBody {
  readonly action?: UpdateTaskByIdRequestBodyActionField;
  readonly message?: string;
  readonly dueAt?: DateTime;
  readonly completionRule?: UpdateTaskByIdRequestBodyCompletionRuleField;
}
export class UpdateTaskByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<UpdateTaskByIdHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateTaskByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateTaskByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteTaskByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteTaskByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteTaskByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteTaskByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class TasksManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      TasksManager,
      | 'networkSession'
      | 'getFileTasks'
      | 'createTask'
      | 'getTaskById'
      | 'updateTaskById'
      | 'deleteTaskById'
    > &
      Partial<Pick<TasksManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getFileTasks(
    fileId: string,
    optionalsInput: GetFileTasksOptionalsInput = {}
  ): Promise<Tasks> {
    const optionals: any = new GetFileTasksOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: CreateTaskOptionalsInput = {}
  ): Promise<Task> {
    const optionals: any = new CreateTaskOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: GetTaskByIdOptionalsInput = {}
  ): Promise<Task> {
    const optionals: any = new GetTaskByIdOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: UpdateTaskByIdOptionalsInput = {}
  ): Promise<Task> {
    const optionals: any = new UpdateTaskByIdOptionals({
      requestBody: optionalsInput.requestBody,
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const requestBody: any = optionals.requestBody;
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: DeleteTaskByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: any = new DeleteTaskByIdOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
export interface TasksManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
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
    ['due_at']: val.dueAt == void 0 ? void 0 : serializeDateTime(val.dueAt),
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
  const dueAt: undefined | DateTime =
    val.due_at == void 0 ? void 0 : deserializeDateTime(val.due_at);
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
    ['due_at']: val.dueAt == void 0 ? void 0 : serializeDateTime(val.dueAt),
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
  const dueAt: undefined | DateTime =
    val.due_at == void 0 ? void 0 : deserializeDateTime(val.due_at);
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
