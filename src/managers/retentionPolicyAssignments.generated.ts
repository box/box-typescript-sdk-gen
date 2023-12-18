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
export type GetRetentionPolicyAssignmentsQueryParamsTypeField =
  | 'folder'
  | 'enterprise'
  | 'metadata_template';
export interface GetRetentionPolicyAssignmentsQueryParams {
  readonly type?: GetRetentionPolicyAssignmentsQueryParamsTypeField;
  readonly fields?: readonly string[];
  readonly marker?: string;
  readonly limit?: number;
}
export class GetRetentionPolicyAssignmentsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetRetentionPolicyAssignmentsHeaders, 'extraHeaders'>
      | Partial<Pick<GetRetentionPolicyAssignmentsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateRetentionPolicyAssignmentRequestBodyAssignToTypeField =
  | 'enterprise'
  | 'folder'
  | 'metadata_template';
export interface CreateRetentionPolicyAssignmentRequestBodyAssignToField {
  readonly type: CreateRetentionPolicyAssignmentRequestBodyAssignToTypeField;
  readonly id?: string;
}
export interface CreateRetentionPolicyAssignmentRequestBodyFilterFieldsField {
  readonly field?: string;
  readonly value?: string;
}
export interface CreateRetentionPolicyAssignmentRequestBody {
  readonly policyId: string;
  readonly assignTo: CreateRetentionPolicyAssignmentRequestBodyAssignToField;
  readonly filterFields?: readonly CreateRetentionPolicyAssignmentRequestBodyFilterFieldsField[];
  readonly startDateField?: string;
}
export class CreateRetentionPolicyAssignmentHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateRetentionPolicyAssignmentHeaders, 'extraHeaders'>
      | Partial<Pick<CreateRetentionPolicyAssignmentHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetRetentionPolicyAssignmentByIdQueryParams {
  readonly fields?: readonly string[];
}
export class GetRetentionPolicyAssignmentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetRetentionPolicyAssignmentByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetRetentionPolicyAssignmentByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteRetentionPolicyAssignmentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteRetentionPolicyAssignmentByIdHeaders, 'extraHeaders'>
      | Partial<
          Pick<DeleteRetentionPolicyAssignmentByIdHeaders, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export interface GetFilesUnderRetentionPolicyAssignmentQueryParams {
  readonly marker?: string;
  readonly limit?: number;
}
export class GetFilesUnderRetentionPolicyAssignmentHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFilesUnderRetentionPolicyAssignmentHeaders, 'extraHeaders'>
      | Partial<
          Pick<GetFilesUnderRetentionPolicyAssignmentHeaders, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export interface GetFileVersionsUnderRetentionPolicyAssignmentQueryParams {
  readonly marker?: string;
  readonly limit?: number;
}
export class GetFileVersionsUnderRetentionPolicyAssignmentHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          GetFileVersionsUnderRetentionPolicyAssignmentHeaders,
          'extraHeaders'
        >
      | Partial<
          Pick<
            GetFileVersionsUnderRetentionPolicyAssignmentHeaders,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
}
export class RetentionPolicyAssignmentsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          RetentionPolicyAssignmentsManager,
          | 'networkSession'
          | 'getRetentionPolicyAssignments'
          | 'createRetentionPolicyAssignment'
          | 'getRetentionPolicyAssignmentById'
          | 'deleteRetentionPolicyAssignmentById'
          | 'getFilesUnderRetentionPolicyAssignment'
          | 'getFileVersionsUnderRetentionPolicyAssignment'
        >
      | Partial<Pick<RetentionPolicyAssignmentsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getRetentionPolicyAssignments(
    retentionPolicyId: string,
    queryParams: GetRetentionPolicyAssignmentsQueryParams = {} satisfies GetRetentionPolicyAssignmentsQueryParams,
    headers: GetRetentionPolicyAssignmentsHeaders = new GetRetentionPolicyAssignmentsHeaders(
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
        this.networkSession.baseUrls.baseUrl,
        '/retention_policies/',
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
    requestBody: CreateRetentionPolicyAssignmentRequestBody,
    headers: CreateRetentionPolicyAssignmentHeaders = new CreateRetentionPolicyAssignmentHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<RetentionPolicyAssignment> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/retention_policy_assignments'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateRetentionPolicyAssignmentRequestBody(requestBody),
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
    queryParams: GetRetentionPolicyAssignmentByIdQueryParams = {} satisfies GetRetentionPolicyAssignmentByIdQueryParams,
    headers: GetRetentionPolicyAssignmentByIdHeaders = new GetRetentionPolicyAssignmentByIdHeaders(
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
        this.networkSession.baseUrls.baseUrl,
        '/retention_policy_assignments/',
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
    headers: DeleteRetentionPolicyAssignmentByIdHeaders = new DeleteRetentionPolicyAssignmentByIdHeaders(
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
        '/retention_policy_assignments/',
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
  async getFilesUnderRetentionPolicyAssignment(
    retentionPolicyAssignmentId: string,
    queryParams: GetFilesUnderRetentionPolicyAssignmentQueryParams = {} satisfies GetFilesUnderRetentionPolicyAssignmentQueryParams,
    headers: GetFilesUnderRetentionPolicyAssignmentHeaders = new GetFilesUnderRetentionPolicyAssignmentHeaders(
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
        this.networkSession.baseUrls.baseUrl,
        '/retention_policy_assignments/',
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
  async getFileVersionsUnderRetentionPolicyAssignment(
    retentionPolicyAssignmentId: string,
    queryParams: GetFileVersionsUnderRetentionPolicyAssignmentQueryParams = {} satisfies GetFileVersionsUnderRetentionPolicyAssignmentQueryParams,
    headers: GetFileVersionsUnderRetentionPolicyAssignmentHeaders = new GetFileVersionsUnderRetentionPolicyAssignmentHeaders(
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
        this.networkSession.baseUrls.baseUrl,
        '/retention_policy_assignments/',
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
export function serializeGetRetentionPolicyAssignmentsQueryParamsTypeField(
  val: GetRetentionPolicyAssignmentsQueryParamsTypeField
): SerializedData {
  return val;
}
export function deserializeGetRetentionPolicyAssignmentsQueryParamsTypeField(
  val: any
): GetRetentionPolicyAssignmentsQueryParamsTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GetRetentionPolicyAssignmentsQueryParamsTypeField"';
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
export function serializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField(
  val: CreateRetentionPolicyAssignmentRequestBodyAssignToTypeField
): SerializedData {
  return val;
}
export function deserializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField(
  val: any
): CreateRetentionPolicyAssignmentRequestBodyAssignToTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateRetentionPolicyAssignmentRequestBodyAssignToTypeField"';
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
export function serializeCreateRetentionPolicyAssignmentRequestBodyAssignToField(
  val: CreateRetentionPolicyAssignmentRequestBodyAssignToField
): SerializedData {
  return {
    ['type']:
      serializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField(
        val.type
      ),
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeCreateRetentionPolicyAssignmentRequestBodyAssignToField(
  val: any
): CreateRetentionPolicyAssignmentRequestBodyAssignToField {
  const type: CreateRetentionPolicyAssignmentRequestBodyAssignToTypeField =
    deserializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField(
      val.type
    );
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateRetentionPolicyAssignmentRequestBodyAssignToField;
}
export function serializeCreateRetentionPolicyAssignmentRequestBodyFilterFieldsField(
  val: CreateRetentionPolicyAssignmentRequestBodyFilterFieldsField
): SerializedData {
  return {
    ['field']: val.field == void 0 ? void 0 : val.field,
    ['value']: val.value == void 0 ? void 0 : val.value,
  };
}
export function deserializeCreateRetentionPolicyAssignmentRequestBodyFilterFieldsField(
  val: any
): CreateRetentionPolicyAssignmentRequestBodyFilterFieldsField {
  const field: undefined | string = val.field == void 0 ? void 0 : val.field;
  const value: undefined | string = val.value == void 0 ? void 0 : val.value;
  return {
    field: field,
    value: value,
  } satisfies CreateRetentionPolicyAssignmentRequestBodyFilterFieldsField;
}
export function serializeCreateRetentionPolicyAssignmentRequestBody(
  val: CreateRetentionPolicyAssignmentRequestBody
): SerializedData {
  return {
    ['policy_id']: val.policyId,
    ['assign_to']:
      serializeCreateRetentionPolicyAssignmentRequestBodyAssignToField(
        val.assignTo
      ),
    ['filter_fields']:
      val.filterFields == void 0
        ? void 0
        : (val.filterFields.map(function (
            item: CreateRetentionPolicyAssignmentRequestBodyFilterFieldsField
          ): any {
            return serializeCreateRetentionPolicyAssignmentRequestBodyFilterFieldsField(
              item
            );
          }) as readonly any[]),
    ['start_date_field']:
      val.startDateField == void 0 ? void 0 : val.startDateField,
  };
}
export function deserializeCreateRetentionPolicyAssignmentRequestBody(
  val: any
): CreateRetentionPolicyAssignmentRequestBody {
  const policyId: string = val.policy_id;
  const assignTo: CreateRetentionPolicyAssignmentRequestBodyAssignToField =
    deserializeCreateRetentionPolicyAssignmentRequestBodyAssignToField(
      val.assign_to
    );
  const filterFields:
    | undefined
    | readonly CreateRetentionPolicyAssignmentRequestBodyFilterFieldsField[] =
    val.filter_fields == void 0
      ? void 0
      : sdIsList(val.filter_fields)
      ? (val.filter_fields.map(function (itm: SerializedData): any {
          return deserializeCreateRetentionPolicyAssignmentRequestBodyFilterFieldsField(
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
  } satisfies CreateRetentionPolicyAssignmentRequestBody;
}
