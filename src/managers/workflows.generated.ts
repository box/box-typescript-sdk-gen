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
export type StartWorkflowRequestBodyTypeField = 'workflow_parameters';
export interface StartWorkflowRequestBodyFlowField {
  readonly type?: string;
  readonly id?: string;
}
export type StartWorkflowRequestBodyFilesTypeField = 'file';
export interface StartWorkflowRequestBodyFilesField {
  readonly type?: StartWorkflowRequestBodyFilesTypeField;
  readonly id?: string;
}
export type StartWorkflowRequestBodyFolderTypeField = 'folder';
export interface StartWorkflowRequestBodyFolderField {
  readonly type?: StartWorkflowRequestBodyFolderTypeField;
  readonly id?: string;
}
export type StartWorkflowRequestBodyOutcomesTypeField = 'outcome';
export interface StartWorkflowRequestBodyOutcomesField {
  readonly id?: string;
  readonly type?: StartWorkflowRequestBodyOutcomesTypeField;
  readonly parameter?: string;
}
export interface StartWorkflowRequestBody {
  readonly type?: StartWorkflowRequestBodyTypeField;
  readonly flow: StartWorkflowRequestBodyFlowField;
  readonly files: readonly StartWorkflowRequestBodyFilesField[];
  readonly folder: StartWorkflowRequestBodyFolderField;
  readonly outcomes?: readonly StartWorkflowRequestBodyOutcomesField[];
}
export class StartWorkflowHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<StartWorkflowHeaders, 'extraHeaders'>
      | Partial<Pick<StartWorkflowHeaders, 'extraHeaders'>>
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
          'networkSession' | 'getWorkflows' | 'startWorkflow'
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
  async startWorkflow(
    workflowId: string,
    requestBody: StartWorkflowRequestBody,
    headers: StartWorkflowHeaders = new StartWorkflowHeaders({}),
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
        data: serializeStartWorkflowRequestBody(requestBody),
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
export function serializeStartWorkflowRequestBodyTypeField(
  val: StartWorkflowRequestBodyTypeField
): SerializedData {
  return val;
}
export function deserializeStartWorkflowRequestBodyTypeField(
  val: any
): StartWorkflowRequestBodyTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "StartWorkflowRequestBodyTypeField"';
  }
  if (val == 'workflow_parameters') {
    return 'workflow_parameters';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeStartWorkflowRequestBodyFlowField(
  val: StartWorkflowRequestBodyFlowField
): SerializedData {
  return {
    ['type']: val.type == void 0 ? void 0 : val.type,
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeStartWorkflowRequestBodyFlowField(
  val: any
): StartWorkflowRequestBodyFlowField {
  const type: undefined | string = val.type == void 0 ? void 0 : val.type;
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { type: type, id: id } satisfies StartWorkflowRequestBodyFlowField;
}
export function serializeStartWorkflowRequestBodyFilesTypeField(
  val: StartWorkflowRequestBodyFilesTypeField
): SerializedData {
  return val;
}
export function deserializeStartWorkflowRequestBodyFilesTypeField(
  val: any
): StartWorkflowRequestBodyFilesTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "StartWorkflowRequestBodyFilesTypeField"';
  }
  if (val == 'file') {
    return 'file';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeStartWorkflowRequestBodyFilesField(
  val: StartWorkflowRequestBodyFilesField
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeStartWorkflowRequestBodyFilesTypeField(val.type),
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeStartWorkflowRequestBodyFilesField(
  val: any
): StartWorkflowRequestBodyFilesField {
  const type: undefined | StartWorkflowRequestBodyFilesTypeField =
    val.type == void 0
      ? void 0
      : deserializeStartWorkflowRequestBodyFilesTypeField(val.type);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { type: type, id: id } satisfies StartWorkflowRequestBodyFilesField;
}
export function serializeStartWorkflowRequestBodyFolderTypeField(
  val: StartWorkflowRequestBodyFolderTypeField
): SerializedData {
  return val;
}
export function deserializeStartWorkflowRequestBodyFolderTypeField(
  val: any
): StartWorkflowRequestBodyFolderTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "StartWorkflowRequestBodyFolderTypeField"';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeStartWorkflowRequestBodyFolderField(
  val: StartWorkflowRequestBodyFolderField
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeStartWorkflowRequestBodyFolderTypeField(val.type),
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeStartWorkflowRequestBodyFolderField(
  val: any
): StartWorkflowRequestBodyFolderField {
  const type: undefined | StartWorkflowRequestBodyFolderTypeField =
    val.type == void 0
      ? void 0
      : deserializeStartWorkflowRequestBodyFolderTypeField(val.type);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { type: type, id: id } satisfies StartWorkflowRequestBodyFolderField;
}
export function serializeStartWorkflowRequestBodyOutcomesTypeField(
  val: StartWorkflowRequestBodyOutcomesTypeField
): SerializedData {
  return val;
}
export function deserializeStartWorkflowRequestBodyOutcomesTypeField(
  val: any
): StartWorkflowRequestBodyOutcomesTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "StartWorkflowRequestBodyOutcomesTypeField"';
  }
  if (val == 'outcome') {
    return 'outcome';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeStartWorkflowRequestBodyOutcomesField(
  val: StartWorkflowRequestBodyOutcomesField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeStartWorkflowRequestBodyOutcomesTypeField(val.type),
    ['parameter']: val.parameter == void 0 ? void 0 : val.parameter,
  };
}
export function deserializeStartWorkflowRequestBodyOutcomesField(
  val: any
): StartWorkflowRequestBodyOutcomesField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | StartWorkflowRequestBodyOutcomesTypeField =
    val.type == void 0
      ? void 0
      : deserializeStartWorkflowRequestBodyOutcomesTypeField(val.type);
  const parameter: undefined | string =
    val.parameter == void 0 ? void 0 : val.parameter;
  return {
    id: id,
    type: type,
    parameter: parameter,
  } satisfies StartWorkflowRequestBodyOutcomesField;
}
export function serializeStartWorkflowRequestBody(
  val: StartWorkflowRequestBody
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeStartWorkflowRequestBodyTypeField(val.type),
    ['flow']: serializeStartWorkflowRequestBodyFlowField(val.flow),
    ['files']: val.files.map(function (
      item: StartWorkflowRequestBodyFilesField
    ): any {
      return serializeStartWorkflowRequestBodyFilesField(item);
    }) as readonly any[],
    ['folder']: serializeStartWorkflowRequestBodyFolderField(val.folder),
    ['outcomes']:
      val.outcomes == void 0
        ? void 0
        : (val.outcomes.map(function (
            item: StartWorkflowRequestBodyOutcomesField
          ): any {
            return serializeStartWorkflowRequestBodyOutcomesField(item);
          }) as readonly any[]),
  };
}
export function deserializeStartWorkflowRequestBody(
  val: any
): StartWorkflowRequestBody {
  const type: undefined | StartWorkflowRequestBodyTypeField =
    val.type == void 0
      ? void 0
      : deserializeStartWorkflowRequestBodyTypeField(val.type);
  const flow: StartWorkflowRequestBodyFlowField =
    deserializeStartWorkflowRequestBodyFlowField(val.flow);
  const files: readonly StartWorkflowRequestBodyFilesField[] = sdIsList(
    val.files
  )
    ? (val.files.map(function (itm: SerializedData): any {
        return deserializeStartWorkflowRequestBodyFilesField(itm);
      }) as readonly any[])
    : [];
  const folder: StartWorkflowRequestBodyFolderField =
    deserializeStartWorkflowRequestBodyFolderField(val.folder);
  const outcomes: undefined | readonly StartWorkflowRequestBodyOutcomesField[] =
    val.outcomes == void 0
      ? void 0
      : sdIsList(val.outcomes)
      ? (val.outcomes.map(function (itm: SerializedData): any {
          return deserializeStartWorkflowRequestBodyOutcomesField(itm);
        }) as readonly any[])
      : [];
  return {
    type: type,
    flow: flow,
    files: files,
    folder: folder,
    outcomes: outcomes,
  } satisfies StartWorkflowRequestBody;
}
