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
  readonly id?: string;
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
    ),
    cancellationToken?: CancellationToken
  ): Promise<RetentionPolicyAssignments> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['type']: toString(queryParams.type) as string,
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
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
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeRetentionPolicyAssignments(response.data);
  }
  async createRetentionPolicyAssignment(
    requestBody: CreateRetentionPolicyAssignmentRequestBodyArg,
    headers: CreateRetentionPolicyAssignmentHeadersArg = new CreateRetentionPolicyAssignmentHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
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
        data: serializeCreateRetentionPolicyAssignmentRequestBodyArg(
          requestBody
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeRetentionPolicyAssignment(response.data);
  }
  async getRetentionPolicyAssignmentById(
    retentionPolicyAssignmentId: string,
    queryParams: GetRetentionPolicyAssignmentByIdQueryParamsArg = {} satisfies GetRetentionPolicyAssignmentByIdQueryParamsArg,
    headers: GetRetentionPolicyAssignmentByIdHeadersArg = new GetRetentionPolicyAssignmentByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<RetentionPolicyAssignment> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
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
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeRetentionPolicyAssignment(response.data);
  }
  async deleteRetentionPolicyAssignmentById(
    retentionPolicyAssignmentId: string,
    headers: DeleteRetentionPolicyAssignmentByIdHeadersArg = new DeleteRetentionPolicyAssignmentByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
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
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
  async getRetentionPolicyAssignmentFileUnderRetention(
    retentionPolicyAssignmentId: string,
    queryParams: GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg = {} satisfies GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg,
    headers: GetRetentionPolicyAssignmentFileUnderRetentionHeadersArg = new GetRetentionPolicyAssignmentFileUnderRetentionHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
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
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFilesUnderRetention(response.data);
  }
  async getRetentionPolicyAssignmentFileVersionUnderRetention(
    retentionPolicyAssignmentId: string,
    queryParams: GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg = {} satisfies GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg,
    headers: GetRetentionPolicyAssignmentFileVersionUnderRetentionHeadersArg = new GetRetentionPolicyAssignmentFileVersionUnderRetentionHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
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
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFilesUnderRetention(response.data);
  }
}
export function serializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField(
  val: GetRetentionPolicyAssignmentsQueryParamsArgTypeField
): SerializedData {
  return val;
}
export function deserializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField(
  val: any
): GetRetentionPolicyAssignmentsQueryParamsArgTypeField {
  if (!sdIsString(val)) {
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
): SerializedData {
  return val;
}
export function deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(
  val: any
): CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField {
  if (!sdIsString(val)) {
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
): SerializedData {
  return {
    ['type']:
      serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(
        val.type
      ),
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(
  val: any
): CreateRetentionPolicyAssignmentRequestBodyArgAssignToField {
  const type: CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField =
    deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(
      val.type
    );
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateRetentionPolicyAssignmentRequestBodyArgAssignToField;
}
export function serializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(
  val: CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField
): SerializedData {
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
): SerializedData {
  return {
    ['policy_id']: val.policyId,
    ['assign_to']:
      serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(
        val.assignTo
      ),
    ['filter_fields']:
      val.filterFields == void 0
        ? void 0
        : (val.filterFields.map(function (
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
      : sdIsList(val.filter_fields)
      ? (val.filter_fields.map(function (itm: SerializedData): any {
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
