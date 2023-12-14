import { serializeMetadataCascadePolicies } from '../schemas.generated.js';
import { deserializeMetadataCascadePolicies } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeMetadataCascadePolicy } from '../schemas.generated.js';
import { deserializeMetadataCascadePolicy } from '../schemas.generated.js';
import { serializeConflictError } from '../schemas.generated.js';
import { deserializeConflictError } from '../schemas.generated.js';
import { MetadataCascadePolicies } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { MetadataCascadePolicy } from '../schemas.generated.js';
import { ConflictError } from '../schemas.generated.js';
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
export interface GetMetadataCascadePoliciesQueryParams {
  readonly folderId: string;
  readonly ownerEnterpriseId?: string;
  readonly marker?: string;
  readonly offset?: number;
}
export class GetMetadataCascadePoliciesHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetMetadataCascadePoliciesHeaders, 'extraHeaders'>
      | Partial<Pick<GetMetadataCascadePoliciesHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateMetadataCascadePolicyRequestBodyScopeField =
  | 'global'
  | 'enterprise';
export interface CreateMetadataCascadePolicyRequestBody {
  readonly folderId: string;
  readonly scope: CreateMetadataCascadePolicyRequestBodyScopeField;
  readonly templateKey: string;
}
export class CreateMetadataCascadePolicyHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateMetadataCascadePolicyHeaders, 'extraHeaders'>
      | Partial<Pick<CreateMetadataCascadePolicyHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GetMetadataCascadePolicyByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetMetadataCascadePolicyByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetMetadataCascadePolicyByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteMetadataCascadePolicyByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteMetadataCascadePolicyByIdHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteMetadataCascadePolicyByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateMetadataCascadePolicyApplyRequestBodyConflictResolutionField =
  'none' | 'overwrite';
export interface CreateMetadataCascadePolicyApplyRequestBody {
  readonly conflictResolution: CreateMetadataCascadePolicyApplyRequestBodyConflictResolutionField;
}
export class CreateMetadataCascadePolicyApplyHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateMetadataCascadePolicyApplyHeaders, 'extraHeaders'>
      | Partial<Pick<CreateMetadataCascadePolicyApplyHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class MetadataCascadePoliciesManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          MetadataCascadePoliciesManager,
          | 'networkSession'
          | 'getMetadataCascadePolicies'
          | 'createMetadataCascadePolicy'
          | 'getMetadataCascadePolicyById'
          | 'deleteMetadataCascadePolicyById'
          | 'createMetadataCascadePolicyApply'
        >
      | Partial<Pick<MetadataCascadePoliciesManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getMetadataCascadePolicies(
    queryParams: GetMetadataCascadePoliciesQueryParams,
    headers: GetMetadataCascadePoliciesHeaders = new GetMetadataCascadePoliciesHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<MetadataCascadePolicies> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['folder_id']: toString(queryParams.folderId) as string,
      ['owner_enterprise_id']: toString(
        queryParams.ownerEnterpriseId
      ) as string,
      ['marker']: toString(queryParams.marker) as string,
      ['offset']: toString(queryParams.offset) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/metadata_cascade_policies'
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
    return deserializeMetadataCascadePolicies(response.data);
  }
  async createMetadataCascadePolicy(
    requestBody: CreateMetadataCascadePolicyRequestBody,
    headers: CreateMetadataCascadePolicyHeaders = new CreateMetadataCascadePolicyHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<MetadataCascadePolicy> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/metadata_cascade_policies'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateMetadataCascadePolicyRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeMetadataCascadePolicy(response.data);
  }
  async getMetadataCascadePolicyById(
    metadataCascadePolicyId: string,
    headers: GetMetadataCascadePolicyByIdHeaders = new GetMetadataCascadePolicyByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<MetadataCascadePolicy> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/metadata_cascade_policies/',
        toString(metadataCascadePolicyId) as string
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
    return deserializeMetadataCascadePolicy(response.data);
  }
  async deleteMetadataCascadePolicyById(
    metadataCascadePolicyId: string,
    headers: DeleteMetadataCascadePolicyByIdHeaders = new DeleteMetadataCascadePolicyByIdHeaders(
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
        '/metadata_cascade_policies/',
        toString(metadataCascadePolicyId) as string
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
  async createMetadataCascadePolicyApply(
    metadataCascadePolicyId: string,
    requestBody: CreateMetadataCascadePolicyApplyRequestBody,
    headers: CreateMetadataCascadePolicyApplyHeaders = new CreateMetadataCascadePolicyApplyHeaders(
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
        '/metadata_cascade_policies/',
        toString(metadataCascadePolicyId) as string,
        '/apply'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateMetadataCascadePolicyApplyRequestBody(requestBody),
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
export function serializeCreateMetadataCascadePolicyRequestBodyScopeField(
  val: CreateMetadataCascadePolicyRequestBodyScopeField
): SerializedData {
  return val;
}
export function deserializeCreateMetadataCascadePolicyRequestBodyScopeField(
  val: any
): CreateMetadataCascadePolicyRequestBodyScopeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateMetadataCascadePolicyRequestBodyScopeField"';
  }
  if (val == 'global') {
    return 'global';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateMetadataCascadePolicyRequestBody(
  val: CreateMetadataCascadePolicyRequestBody
): SerializedData {
  return {
    ['folder_id']: val.folderId,
    ['scope']: serializeCreateMetadataCascadePolicyRequestBodyScopeField(
      val.scope
    ),
    ['templateKey']: val.templateKey,
  };
}
export function deserializeCreateMetadataCascadePolicyRequestBody(
  val: any
): CreateMetadataCascadePolicyRequestBody {
  const folderId: string = val.folder_id;
  const scope: CreateMetadataCascadePolicyRequestBodyScopeField =
    deserializeCreateMetadataCascadePolicyRequestBodyScopeField(val.scope);
  const templateKey: string = val.templateKey;
  return {
    folderId: folderId,
    scope: scope,
    templateKey: templateKey,
  } satisfies CreateMetadataCascadePolicyRequestBody;
}
export function serializeCreateMetadataCascadePolicyApplyRequestBodyConflictResolutionField(
  val: CreateMetadataCascadePolicyApplyRequestBodyConflictResolutionField
): SerializedData {
  return val;
}
export function deserializeCreateMetadataCascadePolicyApplyRequestBodyConflictResolutionField(
  val: any
): CreateMetadataCascadePolicyApplyRequestBodyConflictResolutionField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateMetadataCascadePolicyApplyRequestBodyConflictResolutionField"';
  }
  if (val == 'none') {
    return 'none';
  }
  if (val == 'overwrite') {
    return 'overwrite';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateMetadataCascadePolicyApplyRequestBody(
  val: CreateMetadataCascadePolicyApplyRequestBody
): SerializedData {
  return {
    ['conflict_resolution']:
      serializeCreateMetadataCascadePolicyApplyRequestBodyConflictResolutionField(
        val.conflictResolution
      ),
  };
}
export function deserializeCreateMetadataCascadePolicyApplyRequestBody(
  val: any
): CreateMetadataCascadePolicyApplyRequestBody {
  const conflictResolution: CreateMetadataCascadePolicyApplyRequestBodyConflictResolutionField =
    deserializeCreateMetadataCascadePolicyApplyRequestBodyConflictResolutionField(
      val.conflict_resolution
    );
  return {
    conflictResolution: conflictResolution,
  } satisfies CreateMetadataCascadePolicyApplyRequestBody;
}
