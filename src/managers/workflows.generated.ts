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
export interface GetWorkflowsQueryParamsArg {
  readonly folderId: string;
  readonly triggerType?: string;
  readonly limit?: number;
  readonly marker?: string;
}
export class GetWorkflowsHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetWorkflowsHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetWorkflowsHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateWorkflowStartRequestBodyArgTypeField = 'workflow_parameters';
export interface CreateWorkflowStartRequestBodyArgFlowField {
  readonly type?: string;
  readonly id?: string;
}
export type CreateWorkflowStartRequestBodyArgFilesFieldTypeField = 'file';
export interface CreateWorkflowStartRequestBodyArgFilesField {
  readonly type?: CreateWorkflowStartRequestBodyArgFilesFieldTypeField;
  readonly id?: string;
}
export type CreateWorkflowStartRequestBodyArgFolderFieldTypeField = 'folder';
export interface CreateWorkflowStartRequestBodyArgFolderField {
  readonly type?: CreateWorkflowStartRequestBodyArgFolderFieldTypeField;
  readonly id?: string;
}
export type CreateWorkflowStartRequestBodyArgOutcomesFieldTypeField = 'outcome';
export interface CreateWorkflowStartRequestBodyArgOutcomesField {
  readonly id?: string;
  readonly type?: CreateWorkflowStartRequestBodyArgOutcomesFieldTypeField;
  readonly parameter?: string;
}
export interface CreateWorkflowStartRequestBodyArg {
  readonly type?: CreateWorkflowStartRequestBodyArgTypeField;
  readonly flow: CreateWorkflowStartRequestBodyArgFlowField;
  readonly files: readonly CreateWorkflowStartRequestBodyArgFilesField[];
  readonly folder: CreateWorkflowStartRequestBodyArgFolderField;
  readonly outcomes?: readonly CreateWorkflowStartRequestBodyArgOutcomesField[];
}
export class CreateWorkflowStartHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateWorkflowStartHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateWorkflowStartHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class WorkflowsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<WorkflowsManager, 'getWorkflows' | 'createWorkflowStart'>
  ) {
    Object.assign(this, fields);
  }
  async getWorkflows(
    queryParams: GetWorkflowsQueryParamsArg,
    headers: GetWorkflowsHeadersArg = new GetWorkflowsHeadersArg({}),
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
      ''.concat('https://api.box.com/2.0/workflows') as string,
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
    requestBody: CreateWorkflowStartRequestBodyArg,
    headers: CreateWorkflowStartHeadersArg = new CreateWorkflowStartHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/workflows/',
        toString(workflowId) as string,
        '/start'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateWorkflowStartRequestBodyArg(requestBody),
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
export function serializeCreateWorkflowStartRequestBodyArgTypeField(
  val: CreateWorkflowStartRequestBodyArgTypeField
): SerializedData {
  return val;
}
export function deserializeCreateWorkflowStartRequestBodyArgTypeField(
  val: any
): CreateWorkflowStartRequestBodyArgTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateWorkflowStartRequestBodyArgTypeField"';
  }
  if (val == 'workflow_parameters') {
    return 'workflow_parameters';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateWorkflowStartRequestBodyArgFlowField(
  val: CreateWorkflowStartRequestBodyArgFlowField
): SerializedData {
  return {
    ['type']: val.type == void 0 ? void 0 : val.type,
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeCreateWorkflowStartRequestBodyArgFlowField(
  val: any
): CreateWorkflowStartRequestBodyArgFlowField {
  const type: undefined | string = val.type == void 0 ? void 0 : val.type;
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateWorkflowStartRequestBodyArgFlowField;
}
export function serializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField(
  val: CreateWorkflowStartRequestBodyArgFilesFieldTypeField
): SerializedData {
  return val;
}
export function deserializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField(
  val: any
): CreateWorkflowStartRequestBodyArgFilesFieldTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateWorkflowStartRequestBodyArgFilesFieldTypeField"';
  }
  if (val == 'file') {
    return 'file';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateWorkflowStartRequestBodyArgFilesField(
  val: CreateWorkflowStartRequestBodyArgFilesField
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField(
            val.type
          ),
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeCreateWorkflowStartRequestBodyArgFilesField(
  val: any
): CreateWorkflowStartRequestBodyArgFilesField {
  const type: undefined | CreateWorkflowStartRequestBodyArgFilesFieldTypeField =
    val.type == void 0
      ? void 0
      : deserializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField(
          val.type
        );
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateWorkflowStartRequestBodyArgFilesField;
}
export function serializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField(
  val: CreateWorkflowStartRequestBodyArgFolderFieldTypeField
): SerializedData {
  return val;
}
export function deserializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField(
  val: any
): CreateWorkflowStartRequestBodyArgFolderFieldTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateWorkflowStartRequestBodyArgFolderFieldTypeField"';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateWorkflowStartRequestBodyArgFolderField(
  val: CreateWorkflowStartRequestBodyArgFolderField
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField(
            val.type
          ),
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeCreateWorkflowStartRequestBodyArgFolderField(
  val: any
): CreateWorkflowStartRequestBodyArgFolderField {
  const type:
    | undefined
    | CreateWorkflowStartRequestBodyArgFolderFieldTypeField =
    val.type == void 0
      ? void 0
      : deserializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField(
          val.type
        );
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateWorkflowStartRequestBodyArgFolderField;
}
export function serializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField(
  val: CreateWorkflowStartRequestBodyArgOutcomesFieldTypeField
): SerializedData {
  return val;
}
export function deserializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField(
  val: any
): CreateWorkflowStartRequestBodyArgOutcomesFieldTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateWorkflowStartRequestBodyArgOutcomesFieldTypeField"';
  }
  if (val == 'outcome') {
    return 'outcome';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateWorkflowStartRequestBodyArgOutcomesField(
  val: CreateWorkflowStartRequestBodyArgOutcomesField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField(
            val.type
          ),
    ['parameter']: val.parameter == void 0 ? void 0 : val.parameter,
  };
}
export function deserializeCreateWorkflowStartRequestBodyArgOutcomesField(
  val: any
): CreateWorkflowStartRequestBodyArgOutcomesField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type:
    | undefined
    | CreateWorkflowStartRequestBodyArgOutcomesFieldTypeField =
    val.type == void 0
      ? void 0
      : deserializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField(
          val.type
        );
  const parameter: undefined | string =
    val.parameter == void 0 ? void 0 : val.parameter;
  return {
    id: id,
    type: type,
    parameter: parameter,
  } satisfies CreateWorkflowStartRequestBodyArgOutcomesField;
}
export function serializeCreateWorkflowStartRequestBodyArg(
  val: CreateWorkflowStartRequestBodyArg
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCreateWorkflowStartRequestBodyArgTypeField(val.type),
    ['flow']: serializeCreateWorkflowStartRequestBodyArgFlowField(val.flow),
    ['files']: val.files.map(function (
      item: CreateWorkflowStartRequestBodyArgFilesField
    ): any {
      return serializeCreateWorkflowStartRequestBodyArgFilesField(item);
    }) as readonly any[],
    ['folder']: serializeCreateWorkflowStartRequestBodyArgFolderField(
      val.folder
    ),
    ['outcomes']:
      val.outcomes == void 0
        ? void 0
        : (val.outcomes.map(function (
            item: CreateWorkflowStartRequestBodyArgOutcomesField
          ): any {
            return serializeCreateWorkflowStartRequestBodyArgOutcomesField(
              item
            );
          }) as readonly any[]),
  };
}
export function deserializeCreateWorkflowStartRequestBodyArg(
  val: any
): CreateWorkflowStartRequestBodyArg {
  const type: undefined | CreateWorkflowStartRequestBodyArgTypeField =
    val.type == void 0
      ? void 0
      : deserializeCreateWorkflowStartRequestBodyArgTypeField(val.type);
  const flow: CreateWorkflowStartRequestBodyArgFlowField =
    deserializeCreateWorkflowStartRequestBodyArgFlowField(val.flow);
  const files: readonly CreateWorkflowStartRequestBodyArgFilesField[] =
    sdIsList(val.files)
      ? (val.files.map(function (itm: SerializedData): any {
          return deserializeCreateWorkflowStartRequestBodyArgFilesField(itm);
        }) as readonly any[])
      : [];
  const folder: CreateWorkflowStartRequestBodyArgFolderField =
    deserializeCreateWorkflowStartRequestBodyArgFolderField(val.folder);
  const outcomes:
    | undefined
    | readonly CreateWorkflowStartRequestBodyArgOutcomesField[] =
    val.outcomes == void 0
      ? void 0
      : sdIsList(val.outcomes)
      ? (val.outcomes.map(function (itm: SerializedData): any {
          return deserializeCreateWorkflowStartRequestBodyArgOutcomesField(itm);
        }) as readonly any[])
      : [];
  return {
    type: type,
    flow: flow,
    files: files,
    folder: folder,
    outcomes: outcomes,
  } satisfies CreateWorkflowStartRequestBodyArg;
}
