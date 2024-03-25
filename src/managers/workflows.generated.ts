import { serializeWorkflows } from '../schemas.generated.js';
import { deserializeWorkflows } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeOutcome } from '../schemas.generated.js';
import { deserializeOutcome } from '../schemas.generated.js';
import { Workflows } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Outcome } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { sdToJson } from '../serialization/json.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { SerializedData } from '../serialization/json.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
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
export interface StartWorkflowRequestBody {
  readonly type?: StartWorkflowRequestBodyTypeField;
  readonly flow: StartWorkflowRequestBodyFlowField;
  readonly files: readonly StartWorkflowRequestBodyFilesField[];
  readonly folder: StartWorkflowRequestBodyFolderField;
  readonly outcomes?: readonly Outcome[];
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
  val: any
): SerializedData {
  return val;
}
export function deserializeStartWorkflowRequestBodyTypeField(
  val: any
): StartWorkflowRequestBodyTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "StartWorkflowRequestBodyTypeField"',
    });
  }
  if (val == 'workflow_parameters') {
    return 'workflow_parameters';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeStartWorkflowRequestBodyFlowField(
  val: any
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
  val: any
): SerializedData {
  return val;
}
export function deserializeStartWorkflowRequestBodyFilesTypeField(
  val: any
): StartWorkflowRequestBodyFilesTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "StartWorkflowRequestBodyFilesTypeField"',
    });
  }
  if (val == 'file') {
    return 'file';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeStartWorkflowRequestBodyFilesField(
  val: any
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
  val: any
): SerializedData {
  return val;
}
export function deserializeStartWorkflowRequestBodyFolderTypeField(
  val: any
): StartWorkflowRequestBodyFolderTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "StartWorkflowRequestBodyFolderTypeField"',
    });
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeStartWorkflowRequestBodyFolderField(
  val: any
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
export function serializeStartWorkflowRequestBody(val: any): SerializedData {
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
        : (val.outcomes.map(function (item: Outcome): any {
            return serializeOutcome(item);
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
  const outcomes: undefined | readonly Outcome[] =
    val.outcomes == void 0
      ? void 0
      : sdIsList(val.outcomes)
      ? (val.outcomes.map(function (itm: SerializedData): any {
          return deserializeOutcome(itm);
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
