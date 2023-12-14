import { serializeWorkflows } from '../schemas.generated.js';
import { deserializeWorkflows } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { Workflows } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { sdToJson } from '../json.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export interface GetWorkflowsQueryParams {
  readonly folderId: string;
  readonly triggerType?: string;
  readonly limit?: number;
  readonly marker?: string;
}
export class GetWorkflowsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetWorkflowsHeaders, 'extraHeaders'>
      | Partial<Pick<GetWorkflowsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateWorkflowStartRequestBodyTypeField = 'workflow_parameters';
export interface CreateWorkflowStartRequestBodyFlowField {
  readonly type?: string;
  readonly id?: string;
}
export type CreateWorkflowStartRequestBodyFilesTypeField = 'file';
export interface CreateWorkflowStartRequestBodyFilesField {
  readonly type?: CreateWorkflowStartRequestBodyFilesTypeField;
  readonly id?: string;
}
export type CreateWorkflowStartRequestBodyFolderTypeField = 'folder';
export interface CreateWorkflowStartRequestBodyFolderField {
  readonly type?: CreateWorkflowStartRequestBodyFolderTypeField;
  readonly id?: string;
}
export type CreateWorkflowStartRequestBodyOutcomesTypeField = 'outcome';
export interface CreateWorkflowStartRequestBodyOutcomesField {
  readonly id?: string;
  readonly type?: CreateWorkflowStartRequestBodyOutcomesTypeField;
  readonly parameter?: string;
}
export interface CreateWorkflowStartRequestBody {
  readonly type?: CreateWorkflowStartRequestBodyTypeField;
  readonly flow: CreateWorkflowStartRequestBodyFlowField;
  readonly files: readonly CreateWorkflowStartRequestBodyFilesField[];
  readonly folder: CreateWorkflowStartRequestBodyFolderField;
  readonly outcomes?: readonly CreateWorkflowStartRequestBodyOutcomesField[];
}
export class CreateWorkflowStartHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateWorkflowStartHeaders, 'extraHeaders'>
      | Partial<Pick<CreateWorkflowStartHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class WorkflowsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          WorkflowsManager,
          'networkSession' | 'getWorkflows' | 'createWorkflowStart'
        >
      | Partial<Pick<WorkflowsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getWorkflows(
    queryParams: GetWorkflowsQueryParams,
    headers: GetWorkflowsHeaders = new GetWorkflowsHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Workflows> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['folder_id']: toString(queryParams.folderId) as string,
      ['trigger_type']: toString(queryParams.triggerType) as string,
      ['limit']: toString(queryParams.limit) as string,
      ['marker']: toString(queryParams.marker) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(this.networkSession.baseUrls.baseUrl, '/workflows') as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeWorkflows(response.data);
  }
  async createWorkflowStart(
    workflowId: string,
    requestBody: CreateWorkflowStartRequestBody,
    headers: CreateWorkflowStartHeaders = new CreateWorkflowStartHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/workflows/',
        toString(workflowId) as string,
        '/start'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateWorkflowStartRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: void 0,
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
}
export function serializeCreateWorkflowStartRequestBodyTypeField(
  val: CreateWorkflowStartRequestBodyTypeField
): SerializedData {
  return val;
}
export function deserializeCreateWorkflowStartRequestBodyTypeField(
  val: any
): CreateWorkflowStartRequestBodyTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateWorkflowStartRequestBodyTypeField"';
  }
  if (val == 'workflow_parameters') {
    return 'workflow_parameters';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateWorkflowStartRequestBodyFlowField(
  val: CreateWorkflowStartRequestBodyFlowField
): SerializedData {
  return {
    ['type']: val.type == void 0 ? void 0 : val.type,
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeCreateWorkflowStartRequestBodyFlowField(
  val: any
): CreateWorkflowStartRequestBodyFlowField {
  const type: undefined | string = val.type == void 0 ? void 0 : val.type;
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateWorkflowStartRequestBodyFlowField;
}
export function serializeCreateWorkflowStartRequestBodyFilesTypeField(
  val: CreateWorkflowStartRequestBodyFilesTypeField
): SerializedData {
  return val;
}
export function deserializeCreateWorkflowStartRequestBodyFilesTypeField(
  val: any
): CreateWorkflowStartRequestBodyFilesTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateWorkflowStartRequestBodyFilesTypeField"';
  }
  if (val == 'file') {
    return 'file';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateWorkflowStartRequestBodyFilesField(
  val: CreateWorkflowStartRequestBodyFilesField
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCreateWorkflowStartRequestBodyFilesTypeField(val.type),
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeCreateWorkflowStartRequestBodyFilesField(
  val: any
): CreateWorkflowStartRequestBodyFilesField {
  const type: undefined | CreateWorkflowStartRequestBodyFilesTypeField =
    val.type == void 0
      ? void 0
      : deserializeCreateWorkflowStartRequestBodyFilesTypeField(val.type);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateWorkflowStartRequestBodyFilesField;
}
export function serializeCreateWorkflowStartRequestBodyFolderTypeField(
  val: CreateWorkflowStartRequestBodyFolderTypeField
): SerializedData {
  return val;
}
export function deserializeCreateWorkflowStartRequestBodyFolderTypeField(
  val: any
): CreateWorkflowStartRequestBodyFolderTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateWorkflowStartRequestBodyFolderTypeField"';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateWorkflowStartRequestBodyFolderField(
  val: CreateWorkflowStartRequestBodyFolderField
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCreateWorkflowStartRequestBodyFolderTypeField(val.type),
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeCreateWorkflowStartRequestBodyFolderField(
  val: any
): CreateWorkflowStartRequestBodyFolderField {
  const type: undefined | CreateWorkflowStartRequestBodyFolderTypeField =
    val.type == void 0
      ? void 0
      : deserializeCreateWorkflowStartRequestBodyFolderTypeField(val.type);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateWorkflowStartRequestBodyFolderField;
}
export function serializeCreateWorkflowStartRequestBodyOutcomesTypeField(
  val: CreateWorkflowStartRequestBodyOutcomesTypeField
): SerializedData {
  return val;
}
export function deserializeCreateWorkflowStartRequestBodyOutcomesTypeField(
  val: any
): CreateWorkflowStartRequestBodyOutcomesTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateWorkflowStartRequestBodyOutcomesTypeField"';
  }
  if (val == 'outcome') {
    return 'outcome';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateWorkflowStartRequestBodyOutcomesField(
  val: CreateWorkflowStartRequestBodyOutcomesField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCreateWorkflowStartRequestBodyOutcomesTypeField(val.type),
    ['parameter']: val.parameter == void 0 ? void 0 : val.parameter,
  };
}
export function deserializeCreateWorkflowStartRequestBodyOutcomesField(
  val: any
): CreateWorkflowStartRequestBodyOutcomesField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | CreateWorkflowStartRequestBodyOutcomesTypeField =
    val.type == void 0
      ? void 0
      : deserializeCreateWorkflowStartRequestBodyOutcomesTypeField(val.type);
  const parameter: undefined | string =
    val.parameter == void 0 ? void 0 : val.parameter;
  return {
    id: id,
    type: type,
    parameter: parameter,
  } satisfies CreateWorkflowStartRequestBodyOutcomesField;
}
export function serializeCreateWorkflowStartRequestBody(
  val: CreateWorkflowStartRequestBody
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCreateWorkflowStartRequestBodyTypeField(val.type),
    ['flow']: serializeCreateWorkflowStartRequestBodyFlowField(val.flow),
    ['files']: val.files.map(function (
      item: CreateWorkflowStartRequestBodyFilesField
    ): any {
      return serializeCreateWorkflowStartRequestBodyFilesField(item);
    }) as readonly any[],
    ['folder']: serializeCreateWorkflowStartRequestBodyFolderField(val.folder),
    ['outcomes']:
      val.outcomes == void 0
        ? void 0
        : (val.outcomes.map(function (
            item: CreateWorkflowStartRequestBodyOutcomesField
          ): any {
            return serializeCreateWorkflowStartRequestBodyOutcomesField(item);
          }) as readonly any[]),
  };
}
export function deserializeCreateWorkflowStartRequestBody(
  val: any
): CreateWorkflowStartRequestBody {
  const type: undefined | CreateWorkflowStartRequestBodyTypeField =
    val.type == void 0
      ? void 0
      : deserializeCreateWorkflowStartRequestBodyTypeField(val.type);
  const flow: CreateWorkflowStartRequestBodyFlowField =
    deserializeCreateWorkflowStartRequestBodyFlowField(val.flow);
  const files: readonly CreateWorkflowStartRequestBodyFilesField[] = sdIsList(
    val.files
  )
    ? (val.files.map(function (itm: SerializedData): any {
        return deserializeCreateWorkflowStartRequestBodyFilesField(itm);
      }) as readonly any[])
    : [];
  const folder: CreateWorkflowStartRequestBodyFolderField =
    deserializeCreateWorkflowStartRequestBodyFolderField(val.folder);
  const outcomes:
    | undefined
    | readonly CreateWorkflowStartRequestBodyOutcomesField[] =
    val.outcomes == void 0
      ? void 0
      : sdIsList(val.outcomes)
      ? (val.outcomes.map(function (itm: SerializedData): any {
          return deserializeCreateWorkflowStartRequestBodyOutcomesField(itm);
        }) as readonly any[])
      : [];
  return {
    type: type,
    flow: flow,
    files: files,
    folder: folder,
    outcomes: outcomes,
  } satisfies CreateWorkflowStartRequestBody;
}
