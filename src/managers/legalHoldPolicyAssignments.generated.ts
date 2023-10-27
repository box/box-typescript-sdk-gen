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
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
import { serializeJson } from '../json.js';
import { isJson } from '../json.js';
export type GetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField =
  | 'file'
  | 'file_version'
  | 'folder'
  | 'user';
export interface GetLegalHoldPolicyAssignmentsQueryParamsArg {
  readonly policyId: string;
  readonly assignToType?: GetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField;
  readonly assignToId?: string;
  readonly marker?: string;
  readonly limit?: number;
  readonly fields?: readonly string[];
}
export class GetLegalHoldPolicyAssignmentsHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetLegalHoldPolicyAssignmentsHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetLegalHoldPolicyAssignmentsHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField =
  'file' | 'file_version' | 'folder' | 'user';
export interface CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField {
  readonly type: CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField;
  readonly id: string;
}
export interface CreateLegalHoldPolicyAssignmentRequestBodyArg {
  readonly policyId: string;
  readonly assignTo: CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField;
}
export class CreateLegalHoldPolicyAssignmentHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateLegalHoldPolicyAssignmentHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateLegalHoldPolicyAssignmentHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GetLegalHoldPolicyAssignmentByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetLegalHoldPolicyAssignmentByIdHeadersArg, 'extraHeaders'>
      | Partial<
          Pick<GetLegalHoldPolicyAssignmentByIdHeadersArg, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteLegalHoldPolicyAssignmentByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteLegalHoldPolicyAssignmentByIdHeadersArg, 'extraHeaders'>
      | Partial<
          Pick<DeleteLegalHoldPolicyAssignmentByIdHeadersArg, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export interface GetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg {
  readonly marker?: string;
  readonly limit?: number;
  readonly fields?: readonly string[];
}
export class GetLegalHoldPolicyAssignmentFileOnHoldHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetLegalHoldPolicyAssignmentFileOnHoldHeadersArg, 'extraHeaders'>
      | Partial<
          Pick<GetLegalHoldPolicyAssignmentFileOnHoldHeadersArg, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export interface GetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg {
  readonly marker?: string;
  readonly limit?: number;
  readonly fields?: readonly string[];
}
export class GetLegalHoldPolicyAssignmentFileVersionOnHoldHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          GetLegalHoldPolicyAssignmentFileVersionOnHoldHeadersArg,
          'extraHeaders'
        >
      | Partial<
          Pick<
            GetLegalHoldPolicyAssignmentFileVersionOnHoldHeadersArg,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
}
export class LegalHoldPolicyAssignmentsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      LegalHoldPolicyAssignmentsManager,
      | 'getLegalHoldPolicyAssignments'
      | 'createLegalHoldPolicyAssignment'
      | 'getLegalHoldPolicyAssignmentById'
      | 'deleteLegalHoldPolicyAssignmentById'
      | 'getLegalHoldPolicyAssignmentFileOnHold'
      | 'getLegalHoldPolicyAssignmentFileVersionOnHold'
    >
  ) {
    Object.assign(this, fields);
  }
  async getLegalHoldPolicyAssignments(
    queryParams: GetLegalHoldPolicyAssignmentsQueryParamsArg,
    headers: GetLegalHoldPolicyAssignmentsHeadersArg = new GetLegalHoldPolicyAssignmentsHeadersArg(
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
      ['fields']: queryParams.fields?.map(toString).join(',') as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/legal_hold_policy_assignments'
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
    return deserializeLegalHoldPolicyAssignments(
      deserializeJson(response.text)
    );
  }
  async createLegalHoldPolicyAssignment(
    requestBody: CreateLegalHoldPolicyAssignmentRequestBodyArg,
    headers: CreateLegalHoldPolicyAssignmentHeadersArg = new CreateLegalHoldPolicyAssignmentHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<LegalHoldPolicyAssignment> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/legal_hold_policy_assignments'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        body: serializeJson(
          serializeCreateLegalHoldPolicyAssignmentRequestBodyArg(requestBody)
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeLegalHoldPolicyAssignment(deserializeJson(response.text));
  }
  async getLegalHoldPolicyAssignmentById(
    legalHoldPolicyAssignmentId: string,
    headers: GetLegalHoldPolicyAssignmentByIdHeadersArg = new GetLegalHoldPolicyAssignmentByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<LegalHoldPolicyAssignment> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/legal_hold_policy_assignments/',
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
    return deserializeLegalHoldPolicyAssignment(deserializeJson(response.text));
  }
  async deleteLegalHoldPolicyAssignmentById(
    legalHoldPolicyAssignmentId: string,
    headers: DeleteLegalHoldPolicyAssignmentByIdHeadersArg = new DeleteLegalHoldPolicyAssignmentByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/legal_hold_policy_assignments/',
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
    queryParams: GetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg = {} satisfies GetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg,
    headers: GetLegalHoldPolicyAssignmentFileOnHoldHeadersArg = new GetLegalHoldPolicyAssignmentFileOnHoldHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<FileVersionLegalHolds> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
      ['fields']: queryParams.fields?.map(toString).join(',') as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/legal_hold_policy_assignments/',
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
    return deserializeFileVersionLegalHolds(deserializeJson(response.text));
  }
  async getLegalHoldPolicyAssignmentFileVersionOnHold(
    legalHoldPolicyAssignmentId: string,
    queryParams: GetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg = {} satisfies GetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg,
    headers: GetLegalHoldPolicyAssignmentFileVersionOnHoldHeadersArg = new GetLegalHoldPolicyAssignmentFileVersionOnHoldHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<FileVersionLegalHolds> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
      ['fields']: queryParams.fields?.map(toString).join(',') as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/legal_hold_policy_assignments/',
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
    return deserializeFileVersionLegalHolds(deserializeJson(response.text));
  }
}
export function serializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField(
  val: GetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField
): Json {
  return val;
}
export function deserializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField(
  val: any
): GetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "GetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField"';
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
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField(
  val: CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField
): Json {
  return val;
}
export function deserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField(
  val: any
): CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField"';
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
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField(
  val: CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField
): Json {
  return {
    ['type']:
      serializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField(
        val.type
      ),
    ['id']: val.id,
  };
}
export function deserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField(
  val: any
): CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField {
  const type: CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField =
    deserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField(
      val.type
    );
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField;
}
export function serializeCreateLegalHoldPolicyAssignmentRequestBodyArg(
  val: CreateLegalHoldPolicyAssignmentRequestBodyArg
): Json {
  return {
    ['policy_id']: val.policyId,
    ['assign_to']:
      serializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField(
        val.assignTo
      ),
  };
}
export function deserializeCreateLegalHoldPolicyAssignmentRequestBodyArg(
  val: any
): CreateLegalHoldPolicyAssignmentRequestBodyArg {
  const policyId: string = val.policy_id;
  const assignTo: CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField =
    deserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField(
      val.assign_to
    );
  return {
    policyId: policyId,
    assignTo: assignTo,
  } satisfies CreateLegalHoldPolicyAssignmentRequestBodyArg;
}
