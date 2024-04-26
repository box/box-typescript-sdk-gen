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
export class GetRetentionPolicyAssignmentsOptionals {
  readonly queryParams: GetRetentionPolicyAssignmentsQueryParams =
    {} satisfies GetRetentionPolicyAssignmentsQueryParams;
  readonly headers: GetRetentionPolicyAssignmentsHeaders =
    new GetRetentionPolicyAssignmentsHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetRetentionPolicyAssignmentsOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetRetentionPolicyAssignmentsOptionals,
          'queryParams' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.queryParams) {
      this.queryParams = fields.queryParams;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetRetentionPolicyAssignmentsOptionalsInput {
  readonly queryParams?: GetRetentionPolicyAssignmentsQueryParams;
  readonly headers?: GetRetentionPolicyAssignmentsHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateRetentionPolicyAssignmentOptionals {
  readonly headers: CreateRetentionPolicyAssignmentHeaders =
    new CreateRetentionPolicyAssignmentHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateRetentionPolicyAssignmentOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          CreateRetentionPolicyAssignmentOptionals,
          'headers' | 'cancellationToken'
        >
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
export interface CreateRetentionPolicyAssignmentOptionalsInput {
  readonly headers?: CreateRetentionPolicyAssignmentHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetRetentionPolicyAssignmentByIdOptionals {
  readonly queryParams: GetRetentionPolicyAssignmentByIdQueryParams =
    {} satisfies GetRetentionPolicyAssignmentByIdQueryParams;
  readonly headers: GetRetentionPolicyAssignmentByIdHeaders =
    new GetRetentionPolicyAssignmentByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetRetentionPolicyAssignmentByIdOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetRetentionPolicyAssignmentByIdOptionals,
          'queryParams' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.queryParams) {
      this.queryParams = fields.queryParams;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetRetentionPolicyAssignmentByIdOptionalsInput {
  readonly queryParams?: GetRetentionPolicyAssignmentByIdQueryParams;
  readonly headers?: GetRetentionPolicyAssignmentByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteRetentionPolicyAssignmentByIdOptionals {
  readonly headers: DeleteRetentionPolicyAssignmentByIdHeaders =
    new DeleteRetentionPolicyAssignmentByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteRetentionPolicyAssignmentByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          DeleteRetentionPolicyAssignmentByIdOptionals,
          'headers' | 'cancellationToken'
        >
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
export interface DeleteRetentionPolicyAssignmentByIdOptionalsInput {
  readonly headers?: DeleteRetentionPolicyAssignmentByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetFilesUnderRetentionPolicyAssignmentOptionals {
  readonly queryParams: GetFilesUnderRetentionPolicyAssignmentQueryParams =
    {} satisfies GetFilesUnderRetentionPolicyAssignmentQueryParams;
  readonly headers: GetFilesUnderRetentionPolicyAssignmentHeaders =
    new GetFilesUnderRetentionPolicyAssignmentHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetFilesUnderRetentionPolicyAssignmentOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetFilesUnderRetentionPolicyAssignmentOptionals,
          'queryParams' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.queryParams) {
      this.queryParams = fields.queryParams;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetFilesUnderRetentionPolicyAssignmentOptionalsInput {
  readonly queryParams?: GetFilesUnderRetentionPolicyAssignmentQueryParams;
  readonly headers?: GetFilesUnderRetentionPolicyAssignmentHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetFileVersionsUnderRetentionPolicyAssignmentOptionals {
  readonly queryParams: GetFileVersionsUnderRetentionPolicyAssignmentQueryParams =
    {} satisfies GetFileVersionsUnderRetentionPolicyAssignmentQueryParams;
  readonly headers: GetFileVersionsUnderRetentionPolicyAssignmentHeaders =
    new GetFileVersionsUnderRetentionPolicyAssignmentHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetFileVersionsUnderRetentionPolicyAssignmentOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetFileVersionsUnderRetentionPolicyAssignmentOptionals,
          'queryParams' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.queryParams) {
      this.queryParams = fields.queryParams;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetFileVersionsUnderRetentionPolicyAssignmentOptionalsInput {
  readonly queryParams?: GetFileVersionsUnderRetentionPolicyAssignmentQueryParams;
  readonly headers?: GetFileVersionsUnderRetentionPolicyAssignmentHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
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
    fields: Omit<GetRetentionPolicyAssignmentsHeaders, 'extraHeaders'> &
      Partial<Pick<GetRetentionPolicyAssignmentsHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetRetentionPolicyAssignmentsHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    fields: Omit<CreateRetentionPolicyAssignmentHeaders, 'extraHeaders'> &
      Partial<Pick<CreateRetentionPolicyAssignmentHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateRetentionPolicyAssignmentHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface GetRetentionPolicyAssignmentByIdQueryParams {
  readonly fields?: readonly string[];
}
export class GetRetentionPolicyAssignmentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetRetentionPolicyAssignmentByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetRetentionPolicyAssignmentByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetRetentionPolicyAssignmentByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteRetentionPolicyAssignmentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteRetentionPolicyAssignmentByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteRetentionPolicyAssignmentByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteRetentionPolicyAssignmentByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    fields: Omit<
      GetFilesUnderRetentionPolicyAssignmentHeaders,
      'extraHeaders'
    > &
      Partial<
        Pick<GetFilesUnderRetentionPolicyAssignmentHeaders, 'extraHeaders'>
      >
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetFilesUnderRetentionPolicyAssignmentHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    fields: Omit<
      GetFileVersionsUnderRetentionPolicyAssignmentHeaders,
      'extraHeaders'
    > &
      Partial<
        Pick<
          GetFileVersionsUnderRetentionPolicyAssignmentHeaders,
          'extraHeaders'
        >
      >
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetFileVersionsUnderRetentionPolicyAssignmentHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class RetentionPolicyAssignmentsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      RetentionPolicyAssignmentsManager,
      | 'networkSession'
      | 'getRetentionPolicyAssignments'
      | 'createRetentionPolicyAssignment'
      | 'getRetentionPolicyAssignmentById'
      | 'deleteRetentionPolicyAssignmentById'
      | 'getFilesUnderRetentionPolicyAssignment'
      | 'getFileVersionsUnderRetentionPolicyAssignment'
    > &
      Partial<Pick<RetentionPolicyAssignmentsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getRetentionPolicyAssignments(
    retentionPolicyId: string,
    optionalsInput: GetRetentionPolicyAssignmentsOptionalsInput = {}
  ): Promise<RetentionPolicyAssignments> {
    const optionals: any = new GetRetentionPolicyAssignmentsOptionals({
      queryParams: optionalsInput.queryParams,
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const queryParams: any = optionals.queryParams;
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: CreateRetentionPolicyAssignmentOptionalsInput = {}
  ): Promise<RetentionPolicyAssignment> {
    const optionals: any = new CreateRetentionPolicyAssignmentOptionals({
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
    optionalsInput: GetRetentionPolicyAssignmentByIdOptionalsInput = {}
  ): Promise<RetentionPolicyAssignment> {
    const optionals: any = new GetRetentionPolicyAssignmentByIdOptionals({
      queryParams: optionalsInput.queryParams,
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const queryParams: any = optionals.queryParams;
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: DeleteRetentionPolicyAssignmentByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: any = new DeleteRetentionPolicyAssignmentByIdOptionals({
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
    optionalsInput: GetFilesUnderRetentionPolicyAssignmentOptionalsInput = {}
  ): Promise<FilesUnderRetention> {
    const optionals: any = new GetFilesUnderRetentionPolicyAssignmentOptionals({
      queryParams: optionalsInput.queryParams,
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const queryParams: any = optionals.queryParams;
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: GetFileVersionsUnderRetentionPolicyAssignmentOptionalsInput = {}
  ): Promise<FilesUnderRetention> {
    const optionals: any =
      new GetFileVersionsUnderRetentionPolicyAssignmentOptionals({
        queryParams: optionalsInput.queryParams,
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const queryParams: any = optionals.queryParams;
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
export interface RetentionPolicyAssignmentsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeGetRetentionPolicyAssignmentsQueryParamsTypeField(
  val: any
): SerializedData {
  return val;
}
export function deserializeGetRetentionPolicyAssignmentsQueryParamsTypeField(
  val: any
): GetRetentionPolicyAssignmentsQueryParamsTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "GetRetentionPolicyAssignmentsQueryParamsTypeField"',
    });
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
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField(
  val: any
): SerializedData {
  return val;
}
export function deserializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField(
  val: any
): CreateRetentionPolicyAssignmentRequestBodyAssignToTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateRetentionPolicyAssignmentRequestBodyAssignToTypeField"',
    });
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
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateRetentionPolicyAssignmentRequestBodyAssignToField(
  val: any
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
  val: any
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
  val: any
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
