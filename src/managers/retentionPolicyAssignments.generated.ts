import { serializeRetentionPolicyAssignments } from '../schemas.generated.js';
import { deserializeRetentionPolicyAssignments } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeRetentionPolicyAssignment } from '../schemas.generated.js';
import { deserializeRetentionPolicyAssignment } from '../schemas.generated.js';
import { serializeFilesUnderRetention } from '../schemas.generated.js';
import { deserializeFilesUnderRetention } from '../schemas.generated.js';
import { RetentionPolicyAssignments } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { RetentionPolicyAssignment } from '../schemas.generated.js';
import { FilesUnderRetention } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
import { serializeJson } from '../json.js';
import { isJson } from '../json.js';
export type GetRetentionPolicyAssignmentsQueryParamsArgTypeField =
  | 'folder'
  | 'enterprise'
  | 'metadata_template';
export interface GetRetentionPolicyAssignmentsQueryParamsArg {
  readonly type?: GetRetentionPolicyAssignmentsQueryParamsArgTypeField;
  readonly fields?: readonly string[];
  readonly marker?: string;
  readonly limit?: number;
}
export class GetRetentionPolicyAssignmentsHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetRetentionPolicyAssignmentsHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetRetentionPolicyAssignmentsHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField =
  'enterprise' | 'folder' | 'metadata_template';
export interface CreateRetentionPolicyAssignmentRequestBodyArgAssignToField {
  readonly type: CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField;
  readonly id: string;
}
export interface CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField {
  readonly field?: string;
  readonly value?: string;
}
export interface CreateRetentionPolicyAssignmentRequestBodyArg {
  readonly policyId: string;
  readonly assignTo: CreateRetentionPolicyAssignmentRequestBodyArgAssignToField;
  readonly filterFields?: readonly CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField[];
  readonly startDateField?: string;
}
export class CreateRetentionPolicyAssignmentHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateRetentionPolicyAssignmentHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateRetentionPolicyAssignmentHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetRetentionPolicyAssignmentByIdQueryParamsArg {
  readonly fields?: readonly string[];
}
export class GetRetentionPolicyAssignmentByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetRetentionPolicyAssignmentByIdHeadersArg, 'extraHeaders'>
      | Partial<
          Pick<GetRetentionPolicyAssignmentByIdHeadersArg, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteRetentionPolicyAssignmentByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteRetentionPolicyAssignmentByIdHeadersArg, 'extraHeaders'>
      | Partial<
          Pick<DeleteRetentionPolicyAssignmentByIdHeadersArg, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export interface GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg {
  readonly marker?: string;
  readonly limit?: number;
}
export class GetRetentionPolicyAssignmentFileUnderRetentionHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          GetRetentionPolicyAssignmentFileUnderRetentionHeadersArg,
          'extraHeaders'
        >
      | Partial<
          Pick<
            GetRetentionPolicyAssignmentFileUnderRetentionHeadersArg,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
}
export interface GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg {
  readonly marker?: string;
  readonly limit?: number;
}
export class GetRetentionPolicyAssignmentFileVersionUnderRetentionHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          GetRetentionPolicyAssignmentFileVersionUnderRetentionHeadersArg,
          'extraHeaders'
        >
      | Partial<
          Pick<
            GetRetentionPolicyAssignmentFileVersionUnderRetentionHeadersArg,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
}
export class RetentionPolicyAssignmentsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      RetentionPolicyAssignmentsManager,
      | 'getRetentionPolicyAssignments'
      | 'createRetentionPolicyAssignment'
      | 'getRetentionPolicyAssignmentById'
      | 'deleteRetentionPolicyAssignmentById'
      | 'getRetentionPolicyAssignmentFileUnderRetention'
      | 'getRetentionPolicyAssignmentFileVersionUnderRetention'
    >
  ) {
    Object.assign(this, fields);
  }
  async getRetentionPolicyAssignments(
    retentionPolicyId: string,
    queryParams: GetRetentionPolicyAssignmentsQueryParamsArg = {} satisfies GetRetentionPolicyAssignmentsQueryParamsArg,
    headers: GetRetentionPolicyAssignmentsHeadersArg = new GetRetentionPolicyAssignmentsHeadersArg(
      {}
    )
  ): Promise<RetentionPolicyAssignments> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['type']: toString(queryParams.type) as string,
      ['fields']: queryParams.fields?.map(toString).join(',') as string,
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/retention_policies/',
        toString(retentionPolicyId) as string,
        '/assignments'
      ) as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeRetentionPolicyAssignments(
      deserializeJson(response.text)
    );
  }
  async createRetentionPolicyAssignment(
    requestBody: CreateRetentionPolicyAssignmentRequestBodyArg,
    headers: CreateRetentionPolicyAssignmentHeadersArg = new CreateRetentionPolicyAssignmentHeadersArg(
      {}
    )
  ): Promise<RetentionPolicyAssignment> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/retention_policy_assignments'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        body: serializeJson(
          serializeCreateRetentionPolicyAssignmentRequestBodyArg(requestBody)
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeRetentionPolicyAssignment(deserializeJson(response.text));
  }
  async getRetentionPolicyAssignmentById(
    retentionPolicyAssignmentId: string,
    queryParams: GetRetentionPolicyAssignmentByIdQueryParamsArg = {} satisfies GetRetentionPolicyAssignmentByIdQueryParamsArg,
    headers: GetRetentionPolicyAssignmentByIdHeadersArg = new GetRetentionPolicyAssignmentByIdHeadersArg(
      {}
    )
  ): Promise<RetentionPolicyAssignment> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields?.map(toString).join(',') as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/retention_policy_assignments/',
        toString(retentionPolicyAssignmentId) as string
      ) as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeRetentionPolicyAssignment(deserializeJson(response.text));
  }
  async deleteRetentionPolicyAssignmentById(
    retentionPolicyAssignmentId: string,
    headers: DeleteRetentionPolicyAssignmentByIdHeadersArg = new DeleteRetentionPolicyAssignmentByIdHeadersArg(
      {}
    )
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/retention_policy_assignments/',
        toString(retentionPolicyAssignmentId) as string
      ) as string,
      {
        method: 'DELETE',
        headers: headersMap,
        responseFormat: void 0,
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
  async getRetentionPolicyAssignmentFileUnderRetention(
    retentionPolicyAssignmentId: string,
    queryParams: GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg = {} satisfies GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg,
    headers: GetRetentionPolicyAssignmentFileUnderRetentionHeadersArg = new GetRetentionPolicyAssignmentFileUnderRetentionHeadersArg(
      {}
    )
  ): Promise<FilesUnderRetention> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/retention_policy_assignments/',
        toString(retentionPolicyAssignmentId) as string,
        '/files_under_retention'
      ) as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFilesUnderRetention(deserializeJson(response.text));
  }
  async getRetentionPolicyAssignmentFileVersionUnderRetention(
    retentionPolicyAssignmentId: string,
    queryParams: GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg = {} satisfies GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg,
    headers: GetRetentionPolicyAssignmentFileVersionUnderRetentionHeadersArg = new GetRetentionPolicyAssignmentFileVersionUnderRetentionHeadersArg(
      {}
    )
  ): Promise<FilesUnderRetention> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/retention_policy_assignments/',
        toString(retentionPolicyAssignmentId) as string,
        '/file_versions_under_retention'
      ) as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFilesUnderRetention(deserializeJson(response.text));
  }
}
export function serializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField(
  val: GetRetentionPolicyAssignmentsQueryParamsArgTypeField
): Json {
  return val;
}
export function deserializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField(
  val: any
): GetRetentionPolicyAssignmentsQueryParamsArgTypeField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "GetRetentionPolicyAssignmentsQueryParamsArgTypeField"';
  }
  if (val == 'folder') {
    return 'folder';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  if (val == 'metadata_template') {
    return 'metadata_template';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(
  val: CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField
): Json {
  return val;
}
export function deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(
  val: any
): CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField"';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  if (val == 'folder') {
    return 'folder';
  }
  if (val == 'metadata_template') {
    return 'metadata_template';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(
  val: CreateRetentionPolicyAssignmentRequestBodyArgAssignToField
): Json {
  return {
    ['type']:
      serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(
        val.type
      ),
    ['id']: val.id,
  };
}
export function deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(
  val: any
): CreateRetentionPolicyAssignmentRequestBodyArgAssignToField {
  const type: CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField =
    deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(
      val.type
    );
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateRetentionPolicyAssignmentRequestBodyArgAssignToField;
}
export function serializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(
  val: CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField
): Json {
  return {
    ['field']: val.field == void 0 ? void 0 : val.field,
    ['value']: val.value == void 0 ? void 0 : val.value,
  };
}
export function deserializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(
  val: any
): CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField {
  const field: undefined | string = val.field == void 0 ? void 0 : val.field;
  const value: undefined | string = val.value == void 0 ? void 0 : val.value;
  return {
    field: field,
    value: value,
  } satisfies CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField;
}
export function serializeCreateRetentionPolicyAssignmentRequestBodyArg(
  val: CreateRetentionPolicyAssignmentRequestBodyArg
): Json {
  return {
    ['policy_id']: val.policyId,
    ['assign_to']:
      serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(
        val.assignTo
      ),
    ['filter_fields']:
      val.filterFields == void 0
        ? void 0
        : (val.filterFields?.map(function (
            item: CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField
          ): any {
            return serializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(
              item
            );
          }) as readonly any[]),
    ['start_date_field']:
      val.startDateField == void 0 ? void 0 : val.startDateField,
  };
}
export function deserializeCreateRetentionPolicyAssignmentRequestBodyArg(
  val: any
): CreateRetentionPolicyAssignmentRequestBodyArg {
  const policyId: string = val.policy_id;
  const assignTo: CreateRetentionPolicyAssignmentRequestBodyArgAssignToField =
    deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(
      val.assign_to
    );
  const filterFields:
    | undefined
    | readonly CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField[] =
    val.filter_fields == void 0
      ? void 0
      : isJson(val.filter_fields, 'array')
      ? (val.filter_fields?.map(function (itm: Json): any {
          return deserializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(
            itm
          );
        }) as readonly any[])
      : [];
  const startDateField: undefined | string =
    val.start_date_field == void 0 ? void 0 : val.start_date_field;
  return {
    policyId: policyId,
    assignTo: assignTo,
    filterFields: filterFields,
    startDateField: startDateField,
  } satisfies CreateRetentionPolicyAssignmentRequestBodyArg;
}
