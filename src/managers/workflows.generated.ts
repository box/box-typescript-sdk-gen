import { serializeWorkflows } from '../schemas/workflows.generated.js';
import { deserializeWorkflows } from '../schemas/workflows.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeOutcome } from '../schemas/outcome.generated.js';
import { deserializeOutcome } from '../schemas/outcome.generated.js';
import { Workflows } from '../schemas/workflows.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { Outcome } from '../schemas/outcome.generated.js';
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
export class GetWorkflowsOptionals {
  readonly headers: GetWorkflowsHeaders = new GetWorkflowsHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<GetWorkflowsOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<GetWorkflowsOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetWorkflowsOptionalsInput {
  readonly headers?: GetWorkflowsHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class StartWorkflowOptionals {
  readonly headers: StartWorkflowHeaders = new StartWorkflowHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<StartWorkflowOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<StartWorkflowOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface StartWorkflowOptionalsInput {
  readonly headers?: StartWorkflowHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
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
    fields: Omit<GetWorkflowsHeaders, 'extraHeaders'> &
      Partial<Pick<GetWorkflowsHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetWorkflowsHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    fields: Omit<StartWorkflowHeaders, 'extraHeaders'> &
      Partial<Pick<StartWorkflowHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface StartWorkflowHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class WorkflowsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      WorkflowsManager,
      'networkSession' | 'getWorkflows' | 'startWorkflow'
    > &
      Partial<Pick<WorkflowsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getWorkflows(
    queryParams: GetWorkflowsQueryParams,
    optionalsInput: GetWorkflowsOptionalsInput = {}
  ): Promise<Workflows> {
    const optionals: GetWorkflowsOptionals = new GetWorkflowsOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/workflows'
      ) as string,
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
    optionalsInput: StartWorkflowOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: StartWorkflowOptionals = new StartWorkflowOptionals({
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
        '/2.0/workflows/',
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
export interface WorkflowsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeStartWorkflowRequestBodyTypeField(
  val: StartWorkflowRequestBodyTypeField
): SerializedData {
  return val;
}
export function deserializeStartWorkflowRequestBodyTypeField(
  val: SerializedData
): StartWorkflowRequestBodyTypeField {
  if (val == 'workflow_parameters') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize StartWorkflowRequestBodyTypeField",
  });
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
  val: SerializedData
): StartWorkflowRequestBodyFlowField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "StartWorkflowRequestBodyFlowField"',
    });
  }
  if (!(val.type == void 0) && !sdIsString(val.type)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "type" of type "StartWorkflowRequestBodyFlowField"',
    });
  }
  const type: undefined | string = val.type == void 0 ? void 0 : val.type;
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "StartWorkflowRequestBodyFlowField"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { type: type, id: id } satisfies StartWorkflowRequestBodyFlowField;
}
export function serializeStartWorkflowRequestBodyFilesTypeField(
  val: StartWorkflowRequestBodyFilesTypeField
): SerializedData {
  return val;
}
export function deserializeStartWorkflowRequestBodyFilesTypeField(
  val: SerializedData
): StartWorkflowRequestBodyFilesTypeField {
  if (val == 'file') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize StartWorkflowRequestBodyFilesTypeField",
  });
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
  val: SerializedData
): StartWorkflowRequestBodyFilesField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "StartWorkflowRequestBodyFilesField"',
    });
  }
  const type: undefined | StartWorkflowRequestBodyFilesTypeField =
    val.type == void 0
      ? void 0
      : deserializeStartWorkflowRequestBodyFilesTypeField(val.type);
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "StartWorkflowRequestBodyFilesField"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { type: type, id: id } satisfies StartWorkflowRequestBodyFilesField;
}
export function serializeStartWorkflowRequestBodyFolderTypeField(
  val: StartWorkflowRequestBodyFolderTypeField
): SerializedData {
  return val;
}
export function deserializeStartWorkflowRequestBodyFolderTypeField(
  val: SerializedData
): StartWorkflowRequestBodyFolderTypeField {
  if (val == 'folder') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize StartWorkflowRequestBodyFolderTypeField",
  });
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
  val: SerializedData
): StartWorkflowRequestBodyFolderField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "StartWorkflowRequestBodyFolderField"',
    });
  }
  const type: undefined | StartWorkflowRequestBodyFolderTypeField =
    val.type == void 0
      ? void 0
      : deserializeStartWorkflowRequestBodyFolderTypeField(val.type);
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "StartWorkflowRequestBodyFolderField"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { type: type, id: id } satisfies StartWorkflowRequestBodyFolderField;
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
    ): SerializedData {
      return serializeStartWorkflowRequestBodyFilesField(item);
    }) as readonly any[],
    ['folder']: serializeStartWorkflowRequestBodyFolderField(val.folder),
    ['outcomes']:
      val.outcomes == void 0
        ? void 0
        : (val.outcomes.map(function (item: Outcome): SerializedData {
            return serializeOutcome(item);
          }) as readonly any[]),
  };
}
export function deserializeStartWorkflowRequestBody(
  val: SerializedData
): StartWorkflowRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "StartWorkflowRequestBody"',
    });
  }
  const type: undefined | StartWorkflowRequestBodyTypeField =
    val.type == void 0
      ? void 0
      : deserializeStartWorkflowRequestBodyTypeField(val.type);
  if (val.flow == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "flow" of type "StartWorkflowRequestBody" to be defined',
    });
  }
  const flow: StartWorkflowRequestBodyFlowField =
    deserializeStartWorkflowRequestBodyFlowField(val.flow);
  if (val.files == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "files" of type "StartWorkflowRequestBody" to be defined',
    });
  }
  if (!sdIsList(val.files)) {
    throw new BoxSdkError({
      message: 'Expecting array for "files" of type "StartWorkflowRequestBody"',
    });
  }
  const files: readonly StartWorkflowRequestBodyFilesField[] = sdIsList(
    val.files
  )
    ? (val.files.map(function (
        itm: SerializedData
      ): StartWorkflowRequestBodyFilesField {
        return deserializeStartWorkflowRequestBodyFilesField(itm);
      }) as readonly any[])
    : [];
  if (val.folder == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "folder" of type "StartWorkflowRequestBody" to be defined',
    });
  }
  const folder: StartWorkflowRequestBodyFolderField =
    deserializeStartWorkflowRequestBodyFolderField(val.folder);
  if (!(val.outcomes == void 0) && !sdIsList(val.outcomes)) {
    throw new BoxSdkError({
      message:
        'Expecting array for "outcomes" of type "StartWorkflowRequestBody"',
    });
  }
  const outcomes: undefined | readonly Outcome[] =
    val.outcomes == void 0
      ? void 0
      : sdIsList(val.outcomes)
      ? (val.outcomes.map(function (itm: SerializedData): Outcome {
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
