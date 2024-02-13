import { serializeLegalHoldPolicyAssignments } from '../schemas.generated.js';
import { deserializeLegalHoldPolicyAssignments } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeLegalHoldPolicyAssignment } from '../schemas.generated.js';
import { deserializeLegalHoldPolicyAssignment } from '../schemas.generated.js';
import { serializeFileVersionLegalHolds } from '../schemas.generated.js';
import { deserializeFileVersionLegalHolds } from '../schemas.generated.js';
import { LegalHoldPolicyAssignments } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { LegalHoldPolicyAssignment } from '../schemas.generated.js';
import { FileVersionLegalHolds } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.generated.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { sdToJson } from '../json.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { SerializedData } from '../json.js';
import { BoxSdkError } from '../errors.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export type GetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField =
  | 'file'
  | 'file_version'
  | 'folder'
  | 'user';
export interface GetLegalHoldPolicyAssignmentsQueryParams {
  readonly policyId: string;
  readonly assignToType?: GetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField;
  readonly assignToId?: string;
  readonly marker?: string;
  readonly limit?: number;
  readonly fields?: readonly string[];
}
export class GetLegalHoldPolicyAssignmentsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetLegalHoldPolicyAssignmentsHeaders, 'extraHeaders'>
      | Partial<Pick<GetLegalHoldPolicyAssignmentsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField =
  | 'file'
  | 'file_version'
  | 'folder'
  | 'user';
export interface CreateLegalHoldPolicyAssignmentRequestBodyAssignToField {
  readonly type: CreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField;
  readonly id: string;
}
export interface CreateLegalHoldPolicyAssignmentRequestBody {
  readonly policyId: string;
  readonly assignTo: CreateLegalHoldPolicyAssignmentRequestBodyAssignToField;
}
export class CreateLegalHoldPolicyAssignmentHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateLegalHoldPolicyAssignmentHeaders, 'extraHeaders'>
      | Partial<Pick<CreateLegalHoldPolicyAssignmentHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GetLegalHoldPolicyAssignmentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetLegalHoldPolicyAssignmentByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetLegalHoldPolicyAssignmentByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteLegalHoldPolicyAssignmentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteLegalHoldPolicyAssignmentByIdHeaders, 'extraHeaders'>
      | Partial<
          Pick<DeleteLegalHoldPolicyAssignmentByIdHeaders, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export interface GetLegalHoldPolicyAssignmentFileOnHoldQueryParams {
  readonly marker?: string;
  readonly limit?: number;
  readonly fields?: readonly string[];
}
export class GetLegalHoldPolicyAssignmentFileOnHoldHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetLegalHoldPolicyAssignmentFileOnHoldHeaders, 'extraHeaders'>
      | Partial<
          Pick<GetLegalHoldPolicyAssignmentFileOnHoldHeaders, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export interface GetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParams {
  readonly marker?: string;
  readonly limit?: number;
  readonly fields?: readonly string[];
}
export class GetLegalHoldPolicyAssignmentFileVersionOnHoldHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          GetLegalHoldPolicyAssignmentFileVersionOnHoldHeaders,
          'extraHeaders'
        >
      | Partial<
          Pick<
            GetLegalHoldPolicyAssignmentFileVersionOnHoldHeaders,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
}
export class LegalHoldPolicyAssignmentsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          LegalHoldPolicyAssignmentsManager,
          | 'networkSession'
          | 'getLegalHoldPolicyAssignments'
          | 'createLegalHoldPolicyAssignment'
          | 'getLegalHoldPolicyAssignmentById'
          | 'deleteLegalHoldPolicyAssignmentById'
          | 'getLegalHoldPolicyAssignmentFileOnHold'
          | 'getLegalHoldPolicyAssignmentFileVersionOnHold'
        >
      | Partial<Pick<LegalHoldPolicyAssignmentsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getLegalHoldPolicyAssignments(
    queryParams: GetLegalHoldPolicyAssignmentsQueryParams,
    headers: GetLegalHoldPolicyAssignmentsHeaders = new GetLegalHoldPolicyAssignmentsHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<LegalHoldPolicyAssignments> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['policy_id']: toString(queryParams.policyId) as string,
      ['assign_to_type']: toString(queryParams.assignToType) as string,
      ['assign_to_id']: toString(queryParams.assignToId) as string,
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
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
        '/legal_hold_policy_assignments'
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
    return deserializeLegalHoldPolicyAssignments(response.data);
  }
  async createLegalHoldPolicyAssignment(
    requestBody: CreateLegalHoldPolicyAssignmentRequestBody,
    headers: CreateLegalHoldPolicyAssignmentHeaders = new CreateLegalHoldPolicyAssignmentHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<LegalHoldPolicyAssignment> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/legal_hold_policy_assignments'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateLegalHoldPolicyAssignmentRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeLegalHoldPolicyAssignment(response.data);
  }
  async getLegalHoldPolicyAssignmentById(
    legalHoldPolicyAssignmentId: string,
    headers: GetLegalHoldPolicyAssignmentByIdHeaders = new GetLegalHoldPolicyAssignmentByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<LegalHoldPolicyAssignment> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/legal_hold_policy_assignments/',
        toString(legalHoldPolicyAssignmentId) as string
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
    return deserializeLegalHoldPolicyAssignment(response.data);
  }
  async deleteLegalHoldPolicyAssignmentById(
    legalHoldPolicyAssignmentId: string,
    headers: DeleteLegalHoldPolicyAssignmentByIdHeaders = new DeleteLegalHoldPolicyAssignmentByIdHeaders(
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
        '/legal_hold_policy_assignments/',
        toString(legalHoldPolicyAssignmentId) as string
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
  async getLegalHoldPolicyAssignmentFileOnHold(
    legalHoldPolicyAssignmentId: string,
    queryParams: GetLegalHoldPolicyAssignmentFileOnHoldQueryParams = {} satisfies GetLegalHoldPolicyAssignmentFileOnHoldQueryParams,
    headers: GetLegalHoldPolicyAssignmentFileOnHoldHeaders = new GetLegalHoldPolicyAssignmentFileOnHoldHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<FileVersionLegalHolds> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
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
        '/legal_hold_policy_assignments/',
        toString(legalHoldPolicyAssignmentId) as string,
        '/files_on_hold'
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
    return deserializeFileVersionLegalHolds(response.data);
  }
  async getLegalHoldPolicyAssignmentFileVersionOnHold(
    legalHoldPolicyAssignmentId: string,
    queryParams: GetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParams = {} satisfies GetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParams,
    headers: GetLegalHoldPolicyAssignmentFileVersionOnHoldHeaders = new GetLegalHoldPolicyAssignmentFileVersionOnHoldHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<FileVersionLegalHolds> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
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
        '/legal_hold_policy_assignments/',
        toString(legalHoldPolicyAssignmentId) as string,
        '/file_versions_on_hold'
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
    return deserializeFileVersionLegalHolds(response.data);
  }
}
export function serializeGetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField(
  val: GetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField
): SerializedData {
  return val;
}
export function deserializeGetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField(
  val: any
): GetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "GetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField"',
    });
  }
  if (val == 'file') {
    return 'file';
  }
  if (val == 'file_version') {
    return 'file_version';
  }
  if (val == 'folder') {
    return 'folder';
  }
  if (val == 'user') {
    return 'user';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField(
  val: CreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField
): SerializedData {
  return val;
}
export function deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField(
  val: any
): CreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField"',
    });
  }
  if (val == 'file') {
    return 'file';
  }
  if (val == 'file_version') {
    return 'file_version';
  }
  if (val == 'folder') {
    return 'folder';
  }
  if (val == 'user') {
    return 'user';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField(
  val: CreateLegalHoldPolicyAssignmentRequestBodyAssignToField
): SerializedData {
  return {
    ['type']:
      serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField(
        val.type
      ),
    ['id']: val.id,
  };
}
export function deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField(
  val: any
): CreateLegalHoldPolicyAssignmentRequestBodyAssignToField {
  const type: CreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField =
    deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField(
      val.type
    );
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateLegalHoldPolicyAssignmentRequestBodyAssignToField;
}
export function serializeCreateLegalHoldPolicyAssignmentRequestBody(
  val: CreateLegalHoldPolicyAssignmentRequestBody
): SerializedData {
  return {
    ['policy_id']: val.policyId,
    ['assign_to']:
      serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField(
        val.assignTo
      ),
  };
}
export function deserializeCreateLegalHoldPolicyAssignmentRequestBody(
  val: any
): CreateLegalHoldPolicyAssignmentRequestBody {
  const policyId: string = val.policy_id;
  const assignTo: CreateLegalHoldPolicyAssignmentRequestBodyAssignToField =
    deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField(
      val.assign_to
    );
  return {
    policyId: policyId,
    assignTo: assignTo,
  } satisfies CreateLegalHoldPolicyAssignmentRequestBody;
}
