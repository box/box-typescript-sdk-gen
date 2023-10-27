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
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
import { serializeJson } from '../json.js';
import { isJson } from '../json.js';
export interface GetMetadataCascadePoliciesQueryParamsArg {
  readonly folderId: string;
  readonly ownerEnterpriseId?: string;
  readonly marker?: string;
  readonly offset?: number;
}
export class GetMetadataCascadePoliciesHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetMetadataCascadePoliciesHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetMetadataCascadePoliciesHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateMetadataCascadePolicyRequestBodyArgScopeField =
  | 'global'
  | 'enterprise';
export interface CreateMetadataCascadePolicyRequestBodyArg {
  readonly folderId: string;
  readonly scope: CreateMetadataCascadePolicyRequestBodyArgScopeField;
  readonly templateKey: string;
}
export class CreateMetadataCascadePolicyHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateMetadataCascadePolicyHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateMetadataCascadePolicyHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GetMetadataCascadePolicyByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetMetadataCascadePolicyByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetMetadataCascadePolicyByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteMetadataCascadePolicyByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteMetadataCascadePolicyByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<DeleteMetadataCascadePolicyByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField =
  'none' | 'overwrite';
export interface CreateMetadataCascadePolicyApplyRequestBodyArg {
  readonly conflictResolution: CreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField;
}
export class CreateMetadataCascadePolicyApplyHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateMetadataCascadePolicyApplyHeadersArg, 'extraHeaders'>
      | Partial<
          Pick<CreateMetadataCascadePolicyApplyHeadersArg, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export class MetadataCascadePoliciesManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      MetadataCascadePoliciesManager,
      | 'getMetadataCascadePolicies'
      | 'createMetadataCascadePolicy'
      | 'getMetadataCascadePolicyById'
      | 'deleteMetadataCascadePolicyById'
      | 'createMetadataCascadePolicyApply'
    >
  ) {
    Object.assign(this, fields);
  }
  async getMetadataCascadePolicies(
    queryParams: GetMetadataCascadePoliciesQueryParamsArg,
    headers: GetMetadataCascadePoliciesHeadersArg = new GetMetadataCascadePoliciesHeadersArg(
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
      ''.concat('https://api.box.com/2.0/metadata_cascade_policies') as string,
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
    return deserializeMetadataCascadePolicies(deserializeJson(response.text));
  }
  async createMetadataCascadePolicy(
    requestBody: CreateMetadataCascadePolicyRequestBodyArg,
    headers: CreateMetadataCascadePolicyHeadersArg = new CreateMetadataCascadePolicyHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<MetadataCascadePolicy> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/metadata_cascade_policies') as string,
      {
        method: 'POST',
        headers: headersMap,
        body: serializeJson(
          serializeCreateMetadataCascadePolicyRequestBodyArg(requestBody)
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeMetadataCascadePolicy(deserializeJson(response.text));
  }
  async getMetadataCascadePolicyById(
    metadataCascadePolicyId: string,
    headers: GetMetadataCascadePolicyByIdHeadersArg = new GetMetadataCascadePolicyByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<MetadataCascadePolicy> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/metadata_cascade_policies/',
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
    return deserializeMetadataCascadePolicy(deserializeJson(response.text));
  }
  async deleteMetadataCascadePolicyById(
    metadataCascadePolicyId: string,
    headers: DeleteMetadataCascadePolicyByIdHeadersArg = new DeleteMetadataCascadePolicyByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/metadata_cascade_policies/',
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
    requestBody: CreateMetadataCascadePolicyApplyRequestBodyArg,
    headers: CreateMetadataCascadePolicyApplyHeadersArg = new CreateMetadataCascadePolicyApplyHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/metadata_cascade_policies/',
        toString(metadataCascadePolicyId) as string,
        '/apply'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        body: serializeJson(
          serializeCreateMetadataCascadePolicyApplyRequestBodyArg(requestBody)
        ),
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
export function serializeCreateMetadataCascadePolicyRequestBodyArgScopeField(
  val: CreateMetadataCascadePolicyRequestBodyArgScopeField
): Json {
  return val;
}
export function deserializeCreateMetadataCascadePolicyRequestBodyArgScopeField(
  val: any
): CreateMetadataCascadePolicyRequestBodyArgScopeField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "CreateMetadataCascadePolicyRequestBodyArgScopeField"';
  }
  if (val == 'global') {
    return 'global';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateMetadataCascadePolicyRequestBodyArg(
  val: CreateMetadataCascadePolicyRequestBodyArg
): Json {
  return {
    ['folder_id']: val.folderId,
    ['scope']: serializeCreateMetadataCascadePolicyRequestBodyArgScopeField(
      val.scope
    ),
    ['templateKey']: val.templateKey,
  };
}
export function deserializeCreateMetadataCascadePolicyRequestBodyArg(
  val: any
): CreateMetadataCascadePolicyRequestBodyArg {
  const folderId: string = val.folder_id;
  const scope: CreateMetadataCascadePolicyRequestBodyArgScopeField =
    deserializeCreateMetadataCascadePolicyRequestBodyArgScopeField(val.scope);
  const templateKey: string = val.templateKey;
  return {
    folderId: folderId,
    scope: scope,
    templateKey: templateKey,
  } satisfies CreateMetadataCascadePolicyRequestBodyArg;
}
export function serializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(
  val: CreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField
): Json {
  return val;
}
export function deserializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(
  val: any
): CreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "CreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField"';
  }
  if (val == 'none') {
    return 'none';
  }
  if (val == 'overwrite') {
    return 'overwrite';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateMetadataCascadePolicyApplyRequestBodyArg(
  val: CreateMetadataCascadePolicyApplyRequestBodyArg
): Json {
  return {
    ['conflict_resolution']:
      serializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(
        val.conflictResolution
      ),
  };
}
export function deserializeCreateMetadataCascadePolicyApplyRequestBodyArg(
  val: any
): CreateMetadataCascadePolicyApplyRequestBodyArg {
  const conflictResolution: CreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField =
    deserializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(
      val.conflict_resolution
    );
  return {
    conflictResolution: conflictResolution,
  } satisfies CreateMetadataCascadePolicyApplyRequestBodyArg;
}
