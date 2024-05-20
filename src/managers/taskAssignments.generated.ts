import { serializeTaskAssignments } from '../schemas/taskAssignments.generated.js';
import { deserializeTaskAssignments } from '../schemas/taskAssignments.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeTaskAssignment } from '../schemas/taskAssignment.generated.js';
import { deserializeTaskAssignment } from '../schemas/taskAssignment.generated.js';
import { TaskAssignments } from '../schemas/taskAssignments.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { TaskAssignment } from '../schemas/taskAssignment.generated.js';
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
export class GetTaskAssignmentsOptionals {
  readonly headers: GetTaskAssignmentsHeaders = new GetTaskAssignmentsHeaders(
    {}
  );
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<GetTaskAssignmentsOptionals, 'headers' | 'cancellationToken'> &
      Partial<
        Pick<GetTaskAssignmentsOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetTaskAssignmentsOptionalsInput {
  readonly headers?: GetTaskAssignmentsHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateTaskAssignmentOptionals {
  readonly headers: CreateTaskAssignmentHeaders =
    new CreateTaskAssignmentHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateTaskAssignmentOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<CreateTaskAssignmentOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface CreateTaskAssignmentOptionalsInput {
  readonly headers?: CreateTaskAssignmentHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetTaskAssignmentByIdOptionals {
  readonly headers: GetTaskAssignmentByIdHeaders =
    new GetTaskAssignmentByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetTaskAssignmentByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<GetTaskAssignmentByIdOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetTaskAssignmentByIdOptionalsInput {
  readonly headers?: GetTaskAssignmentByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateTaskAssignmentByIdOptionals {
  readonly requestBody: UpdateTaskAssignmentByIdRequestBody =
    {} satisfies UpdateTaskAssignmentByIdRequestBody;
  readonly headers: UpdateTaskAssignmentByIdHeaders =
    new UpdateTaskAssignmentByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateTaskAssignmentByIdOptionals,
      'requestBody' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          UpdateTaskAssignmentByIdOptionals,
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
export interface UpdateTaskAssignmentByIdOptionalsInput {
  readonly requestBody?: UpdateTaskAssignmentByIdRequestBody;
  readonly headers?: UpdateTaskAssignmentByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteTaskAssignmentByIdOptionals {
  readonly headers: DeleteTaskAssignmentByIdHeaders =
    new DeleteTaskAssignmentByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteTaskAssignmentByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<DeleteTaskAssignmentByIdOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface DeleteTaskAssignmentByIdOptionalsInput {
  readonly headers?: DeleteTaskAssignmentByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetTaskAssignmentsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetTaskAssignmentsHeaders, 'extraHeaders'> &
      Partial<Pick<GetTaskAssignmentsHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetTaskAssignmentsHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type CreateTaskAssignmentRequestBodyTaskTypeField = 'task';
export class CreateTaskAssignmentRequestBodyTaskField {
  readonly id!: string;
  readonly type: CreateTaskAssignmentRequestBodyTaskTypeField =
    'task' as CreateTaskAssignmentRequestBodyTaskTypeField;
  constructor(
    fields: Omit<CreateTaskAssignmentRequestBodyTaskField, 'type'> &
      Partial<Pick<CreateTaskAssignmentRequestBodyTaskField, 'type'>>
  ) {
    if (fields.id) {
      this.id = fields.id;
    }
    if (fields.type) {
      this.type = fields.type;
    }
  }
}
export interface CreateTaskAssignmentRequestBodyTaskFieldInput {
  readonly id: string;
  readonly type?: CreateTaskAssignmentRequestBodyTaskTypeField;
}
export interface CreateTaskAssignmentRequestBodyAssignToField {
  readonly id?: string;
  readonly login?: string;
}
export interface CreateTaskAssignmentRequestBody {
  readonly task: CreateTaskAssignmentRequestBodyTaskField;
  readonly assignTo: CreateTaskAssignmentRequestBodyAssignToField;
}
export class CreateTaskAssignmentHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateTaskAssignmentHeaders, 'extraHeaders'> &
      Partial<Pick<CreateTaskAssignmentHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateTaskAssignmentHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class GetTaskAssignmentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetTaskAssignmentByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetTaskAssignmentByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetTaskAssignmentByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type UpdateTaskAssignmentByIdRequestBodyResolutionStateField =
  | 'completed'
  | 'incomplete'
  | 'approved'
  | 'rejected';
export interface UpdateTaskAssignmentByIdRequestBody {
  readonly message?: string;
  readonly resolutionState?: UpdateTaskAssignmentByIdRequestBodyResolutionStateField;
}
export class UpdateTaskAssignmentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<UpdateTaskAssignmentByIdHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateTaskAssignmentByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateTaskAssignmentByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteTaskAssignmentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteTaskAssignmentByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteTaskAssignmentByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteTaskAssignmentByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class TaskAssignmentsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      TaskAssignmentsManager,
      | 'networkSession'
      | 'getTaskAssignments'
      | 'createTaskAssignment'
      | 'getTaskAssignmentById'
      | 'updateTaskAssignmentById'
      | 'deleteTaskAssignmentById'
    > &
      Partial<Pick<TaskAssignmentsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getTaskAssignments(
    taskId: string,
    optionalsInput: GetTaskAssignmentsOptionalsInput = {}
  ): Promise<TaskAssignments> {
    const optionals: GetTaskAssignmentsOptionals =
      new GetTaskAssignmentsOptionals({
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
        '/2.0/tasks/',
        toString(taskId) as string,
        '/assignments'
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
    return deserializeTaskAssignments(response.data);
  }
  async createTaskAssignment(
    requestBody: CreateTaskAssignmentRequestBody,
    optionalsInput: CreateTaskAssignmentOptionalsInput = {}
  ): Promise<TaskAssignment> {
    const optionals: CreateTaskAssignmentOptionals =
      new CreateTaskAssignmentOptionals({
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
        '/2.0/task_assignments'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateTaskAssignmentRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTaskAssignment(response.data);
  }
  async getTaskAssignmentById(
    taskAssignmentId: string,
    optionalsInput: GetTaskAssignmentByIdOptionalsInput = {}
  ): Promise<TaskAssignment> {
    const optionals: GetTaskAssignmentByIdOptionals =
      new GetTaskAssignmentByIdOptionals({
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
        '/2.0/task_assignments/',
        toString(taskAssignmentId) as string
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
    return deserializeTaskAssignment(response.data);
  }
  async updateTaskAssignmentById(
    taskAssignmentId: string,
    optionalsInput: UpdateTaskAssignmentByIdOptionalsInput = {}
  ): Promise<TaskAssignment> {
    const optionals: UpdateTaskAssignmentByIdOptionals =
      new UpdateTaskAssignmentByIdOptionals({
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
        '/2.0/task_assignments/',
        toString(taskAssignmentId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateTaskAssignmentByIdRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTaskAssignment(response.data);
  }
  async deleteTaskAssignmentById(
    taskAssignmentId: string,
    optionalsInput: DeleteTaskAssignmentByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteTaskAssignmentByIdOptionals =
      new DeleteTaskAssignmentByIdOptionals({
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
        '/2.0/task_assignments/',
        toString(taskAssignmentId) as string
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
export interface TaskAssignmentsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeCreateTaskAssignmentRequestBodyTaskTypeField(
  val: CreateTaskAssignmentRequestBodyTaskTypeField
): SerializedData {
  return val;
}
export function deserializeCreateTaskAssignmentRequestBodyTaskTypeField(
  val: SerializedData
): CreateTaskAssignmentRequestBodyTaskTypeField {
  if (val == 'task') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize CreateTaskAssignmentRequestBodyTaskTypeField",
  });
}
export function serializeCreateTaskAssignmentRequestBodyTaskField(
  val: CreateTaskAssignmentRequestBodyTaskField
): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeCreateTaskAssignmentRequestBodyTaskTypeField(val.type),
  };
}
export function deserializeCreateTaskAssignmentRequestBodyTaskField(
  val: SerializedData
): CreateTaskAssignmentRequestBodyTaskField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "CreateTaskAssignmentRequestBodyTaskField"',
    });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "CreateTaskAssignmentRequestBodyTaskField" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "CreateTaskAssignmentRequestBodyTaskField"',
    });
  }
  const id: string = val.id;
  if (val.type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "type" of type "CreateTaskAssignmentRequestBodyTaskField" to be defined',
    });
  }
  const type: CreateTaskAssignmentRequestBodyTaskTypeField =
    deserializeCreateTaskAssignmentRequestBodyTaskTypeField(val.type);
  return {
    id: id,
    type: type,
  } satisfies CreateTaskAssignmentRequestBodyTaskField;
}
export function serializeCreateTaskAssignmentRequestBodyTaskFieldInput(
  val: CreateTaskAssignmentRequestBodyTaskFieldInput
): SerializedData {
  return {
    ['id']: val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCreateTaskAssignmentRequestBodyTaskTypeField(val.type),
  };
}
export function deserializeCreateTaskAssignmentRequestBodyTaskFieldInput(
  val: SerializedData
): CreateTaskAssignmentRequestBodyTaskFieldInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "CreateTaskAssignmentRequestBodyTaskFieldInput"',
    });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "CreateTaskAssignmentRequestBodyTaskFieldInput" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "CreateTaskAssignmentRequestBodyTaskFieldInput"',
    });
  }
  const id: string = val.id;
  const type: undefined | CreateTaskAssignmentRequestBodyTaskTypeField =
    val.type == void 0
      ? void 0
      : deserializeCreateTaskAssignmentRequestBodyTaskTypeField(val.type);
  return {
    id: id,
    type: type,
  } satisfies CreateTaskAssignmentRequestBodyTaskFieldInput;
}
export function serializeCreateTaskAssignmentRequestBodyAssignToField(
  val: CreateTaskAssignmentRequestBodyAssignToField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['login']: val.login == void 0 ? void 0 : val.login,
  };
}
export function deserializeCreateTaskAssignmentRequestBodyAssignToField(
  val: SerializedData
): CreateTaskAssignmentRequestBodyAssignToField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "CreateTaskAssignmentRequestBodyAssignToField"',
    });
  }
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "CreateTaskAssignmentRequestBodyAssignToField"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  if (!(val.login == void 0) && !sdIsString(val.login)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "login" of type "CreateTaskAssignmentRequestBodyAssignToField"',
    });
  }
  const login: undefined | string = val.login == void 0 ? void 0 : val.login;
  return {
    id: id,
    login: login,
  } satisfies CreateTaskAssignmentRequestBodyAssignToField;
}
export function serializeCreateTaskAssignmentRequestBody(
  val: CreateTaskAssignmentRequestBody
): SerializedData {
  return {
    ['task']: serializeCreateTaskAssignmentRequestBodyTaskField(val.task),
    ['assign_to']: serializeCreateTaskAssignmentRequestBodyAssignToField(
      val.assignTo
    ),
  };
}
export function deserializeCreateTaskAssignmentRequestBody(
  val: SerializedData
): CreateTaskAssignmentRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "CreateTaskAssignmentRequestBody"',
    });
  }
  if (val.task == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "task" of type "CreateTaskAssignmentRequestBody" to be defined',
    });
  }
  const task: CreateTaskAssignmentRequestBodyTaskField =
    deserializeCreateTaskAssignmentRequestBodyTaskField(val.task);
  if (val.assign_to == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "assign_to" of type "CreateTaskAssignmentRequestBody" to be defined',
    });
  }
  const assignTo: CreateTaskAssignmentRequestBodyAssignToField =
    deserializeCreateTaskAssignmentRequestBodyAssignToField(val.assign_to);
  return {
    task: task,
    assignTo: assignTo,
  } satisfies CreateTaskAssignmentRequestBody;
}
export function serializeUpdateTaskAssignmentByIdRequestBodyResolutionStateField(
  val: UpdateTaskAssignmentByIdRequestBodyResolutionStateField
): SerializedData {
  return val;
}
export function deserializeUpdateTaskAssignmentByIdRequestBodyResolutionStateField(
  val: SerializedData
): UpdateTaskAssignmentByIdRequestBodyResolutionStateField {
  if (val == 'completed') {
    return val;
  }
  if (val == 'incomplete') {
    return val;
  }
  if (val == 'approved') {
    return val;
  }
  if (val == 'rejected') {
    return val;
  }
  throw new BoxSdkError({
    message:
      "Can't deserialize UpdateTaskAssignmentByIdRequestBodyResolutionStateField",
  });
}
export function serializeUpdateTaskAssignmentByIdRequestBody(
  val: UpdateTaskAssignmentByIdRequestBody
): SerializedData {
  return {
    ['message']: val.message == void 0 ? void 0 : val.message,
    ['resolution_state']:
      val.resolutionState == void 0
        ? void 0
        : serializeUpdateTaskAssignmentByIdRequestBodyResolutionStateField(
            val.resolutionState
          ),
  };
}
export function deserializeUpdateTaskAssignmentByIdRequestBody(
  val: SerializedData
): UpdateTaskAssignmentByIdRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "UpdateTaskAssignmentByIdRequestBody"',
    });
  }
  if (!(val.message == void 0) && !sdIsString(val.message)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "message" of type "UpdateTaskAssignmentByIdRequestBody"',
    });
  }
  const message: undefined | string =
    val.message == void 0 ? void 0 : val.message;
  const resolutionState:
    | undefined
    | UpdateTaskAssignmentByIdRequestBodyResolutionStateField =
    val.resolution_state == void 0
      ? void 0
      : deserializeUpdateTaskAssignmentByIdRequestBodyResolutionStateField(
          val.resolution_state
        );
  return {
    message: message,
    resolutionState: resolutionState,
  } satisfies UpdateTaskAssignmentByIdRequestBody;
}
