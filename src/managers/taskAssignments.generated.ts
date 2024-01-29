import { serializeTaskAssignments } from '../schemas.generated.js';
import { deserializeTaskAssignments } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeTaskAssignment } from '../schemas.generated.js';
import { deserializeTaskAssignment } from '../schemas.generated.js';
import { TaskAssignments } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { TaskAssignment } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.generated.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { sdToJson } from '../json.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export class GetTaskAssignmentsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetTaskAssignmentsHeaders, 'extraHeaders'>
      | Partial<Pick<GetTaskAssignmentsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateTaskAssignmentRequestBodyTaskTypeField = 'task';
export interface CreateTaskAssignmentRequestBodyTaskField {
  readonly id: string;
  readonly type: CreateTaskAssignmentRequestBodyTaskTypeField;
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
    fields:
      | Omit<CreateTaskAssignmentHeaders, 'extraHeaders'>
      | Partial<Pick<CreateTaskAssignmentHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GetTaskAssignmentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetTaskAssignmentByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetTaskAssignmentByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
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
    fields:
      | Omit<UpdateTaskAssignmentByIdHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateTaskAssignmentByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteTaskAssignmentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteTaskAssignmentByIdHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteTaskAssignmentByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class TaskAssignmentsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          TaskAssignmentsManager,
          | 'networkSession'
          | 'getTaskAssignments'
          | 'createTaskAssignment'
          | 'getTaskAssignmentById'
          | 'updateTaskAssignmentById'
          | 'deleteTaskAssignmentById'
        >
      | Partial<Pick<TaskAssignmentsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getTaskAssignments(
    taskId: string,
    headers: GetTaskAssignmentsHeaders = new GetTaskAssignmentsHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<TaskAssignments> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/tasks/',
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
    headers: CreateTaskAssignmentHeaders = new CreateTaskAssignmentHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<TaskAssignment> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/task_assignments'
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
    headers: GetTaskAssignmentByIdHeaders = new GetTaskAssignmentByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<TaskAssignment> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/task_assignments/',
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
    requestBody: UpdateTaskAssignmentByIdRequestBody = {} satisfies UpdateTaskAssignmentByIdRequestBody,
    headers: UpdateTaskAssignmentByIdHeaders = new UpdateTaskAssignmentByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<TaskAssignment> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/task_assignments/',
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
    headers: DeleteTaskAssignmentByIdHeaders = new DeleteTaskAssignmentByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/task_assignments/',
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
export function serializeCreateTaskAssignmentRequestBodyTaskTypeField(
  val: CreateTaskAssignmentRequestBodyTaskTypeField
): SerializedData {
  return val;
}
export function deserializeCreateTaskAssignmentRequestBodyTaskTypeField(
  val: any
): CreateTaskAssignmentRequestBodyTaskTypeField {
  if (!sdIsString(val)) {
    throw new Error(
      String(
        'Expecting a string for "CreateTaskAssignmentRequestBodyTaskTypeField"'
      )
    );
  }
  if (val == 'task') {
    return 'task';
  }
  throw new Error(String(''.concat('Invalid value: ', val) as string));
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
  val: any
): CreateTaskAssignmentRequestBodyTaskField {
  const id: string = val.id;
  const type: CreateTaskAssignmentRequestBodyTaskTypeField =
    deserializeCreateTaskAssignmentRequestBodyTaskTypeField(val.type);
  return {
    id: id,
    type: type,
  } satisfies CreateTaskAssignmentRequestBodyTaskField;
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
  val: any
): CreateTaskAssignmentRequestBodyAssignToField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
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
  val: any
): CreateTaskAssignmentRequestBody {
  const task: CreateTaskAssignmentRequestBodyTaskField =
    deserializeCreateTaskAssignmentRequestBodyTaskField(val.task);
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
  val: any
): UpdateTaskAssignmentByIdRequestBodyResolutionStateField {
  if (!sdIsString(val)) {
    throw new Error(
      String(
        'Expecting a string for "UpdateTaskAssignmentByIdRequestBodyResolutionStateField"'
      )
    );
  }
  if (val == 'completed') {
    return 'completed';
  }
  if (val == 'incomplete') {
    return 'incomplete';
  }
  if (val == 'approved') {
    return 'approved';
  }
  if (val == 'rejected') {
    return 'rejected';
  }
  throw new Error(String(''.concat('Invalid value: ', val) as string));
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
  val: any
): UpdateTaskAssignmentByIdRequestBody {
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
