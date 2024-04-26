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
export class GetMetadataCascadePoliciesOptionals {
  readonly headers: GetMetadataCascadePoliciesHeaders =
    new GetMetadataCascadePoliciesHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetMetadataCascadePoliciesOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetMetadataCascadePoliciesOptionals,
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
export interface GetMetadataCascadePoliciesOptionalsInput {
  readonly headers?: GetMetadataCascadePoliciesHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateMetadataCascadePolicyOptionals {
  readonly headers: CreateMetadataCascadePolicyHeaders =
    new CreateMetadataCascadePolicyHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateMetadataCascadePolicyOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          CreateMetadataCascadePolicyOptionals,
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
export interface CreateMetadataCascadePolicyOptionalsInput {
  readonly headers?: CreateMetadataCascadePolicyHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetMetadataCascadePolicyByIdOptionals {
  readonly headers: GetMetadataCascadePolicyByIdHeaders =
    new GetMetadataCascadePolicyByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetMetadataCascadePolicyByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetMetadataCascadePolicyByIdOptionals,
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
export interface GetMetadataCascadePolicyByIdOptionalsInput {
  readonly headers?: GetMetadataCascadePolicyByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteMetadataCascadePolicyByIdOptionals {
  readonly headers: DeleteMetadataCascadePolicyByIdHeaders =
    new DeleteMetadataCascadePolicyByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteMetadataCascadePolicyByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          DeleteMetadataCascadePolicyByIdOptionals,
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
export interface DeleteMetadataCascadePolicyByIdOptionalsInput {
  readonly headers?: DeleteMetadataCascadePolicyByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class ApplyMetadataCascadePolicyOptionals {
  readonly headers: ApplyMetadataCascadePolicyHeaders =
    new ApplyMetadataCascadePolicyHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      ApplyMetadataCascadePolicyOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          ApplyMetadataCascadePolicyOptionals,
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
export interface ApplyMetadataCascadePolicyOptionalsInput {
  readonly headers?: ApplyMetadataCascadePolicyHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
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
    fields: Omit<GetMetadataCascadePoliciesHeaders, 'extraHeaders'> &
      Partial<Pick<GetMetadataCascadePoliciesHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetMetadataCascadePoliciesHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    fields: Omit<CreateMetadataCascadePolicyHeaders, 'extraHeaders'> &
      Partial<Pick<CreateMetadataCascadePolicyHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateMetadataCascadePolicyHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class GetMetadataCascadePolicyByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetMetadataCascadePolicyByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetMetadataCascadePolicyByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetMetadataCascadePolicyByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteMetadataCascadePolicyByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteMetadataCascadePolicyByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteMetadataCascadePolicyByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteMetadataCascadePolicyByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type ApplyMetadataCascadePolicyRequestBodyConflictResolutionField =
  | 'none'
  | 'overwrite';
export interface ApplyMetadataCascadePolicyRequestBody {
  readonly conflictResolution: ApplyMetadataCascadePolicyRequestBodyConflictResolutionField;
}
export class ApplyMetadataCascadePolicyHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<ApplyMetadataCascadePolicyHeaders, 'extraHeaders'> &
      Partial<Pick<ApplyMetadataCascadePolicyHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface ApplyMetadataCascadePolicyHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class MetadataCascadePoliciesManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      MetadataCascadePoliciesManager,
      | 'networkSession'
      | 'getMetadataCascadePolicies'
      | 'createMetadataCascadePolicy'
      | 'getMetadataCascadePolicyById'
      | 'deleteMetadataCascadePolicyById'
      | 'applyMetadataCascadePolicy'
    > &
      Partial<Pick<MetadataCascadePoliciesManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getMetadataCascadePolicies(
    queryParams: GetMetadataCascadePoliciesQueryParams,
    optionalsInput: GetMetadataCascadePoliciesOptionalsInput = {}
  ): Promise<MetadataCascadePolicies> {
    const optionals: GetMetadataCascadePoliciesOptionals =
      new GetMetadataCascadePoliciesOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: CreateMetadataCascadePolicyOptionalsInput = {}
  ): Promise<MetadataCascadePolicy> {
    const optionals: CreateMetadataCascadePolicyOptionals =
      new CreateMetadataCascadePolicyOptionals({
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
    optionalsInput: GetMetadataCascadePolicyByIdOptionalsInput = {}
  ): Promise<MetadataCascadePolicy> {
    const optionals: GetMetadataCascadePolicyByIdOptionals =
      new GetMetadataCascadePolicyByIdOptionals({
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
    optionalsInput: DeleteMetadataCascadePolicyByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteMetadataCascadePolicyByIdOptionals =
      new DeleteMetadataCascadePolicyByIdOptionals({
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
  async applyMetadataCascadePolicy(
    metadataCascadePolicyId: string,
    requestBody: ApplyMetadataCascadePolicyRequestBody,
    optionalsInput: ApplyMetadataCascadePolicyOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: ApplyMetadataCascadePolicyOptionals =
      new ApplyMetadataCascadePolicyOptionals({
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
        '/metadata_cascade_policies/',
        toString(metadataCascadePolicyId) as string,
        '/apply'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeApplyMetadataCascadePolicyRequestBody(requestBody),
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
export interface MetadataCascadePoliciesManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
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
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateMetadataCascadePolicyRequestBodyScopeField"',
    });
  }
  if (val == 'global') {
    return 'global';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
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
export function serializeApplyMetadataCascadePolicyRequestBodyConflictResolutionField(
  val: ApplyMetadataCascadePolicyRequestBodyConflictResolutionField
): SerializedData {
  return val;
}
export function deserializeApplyMetadataCascadePolicyRequestBodyConflictResolutionField(
  val: any
): ApplyMetadataCascadePolicyRequestBodyConflictResolutionField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "ApplyMetadataCascadePolicyRequestBodyConflictResolutionField"',
    });
  }
  if (val == 'none') {
    return 'none';
  }
  if (val == 'overwrite') {
    return 'overwrite';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeApplyMetadataCascadePolicyRequestBody(
  val: ApplyMetadataCascadePolicyRequestBody
): SerializedData {
  return {
    ['conflict_resolution']:
      serializeApplyMetadataCascadePolicyRequestBodyConflictResolutionField(
        val.conflictResolution
      ),
  };
}
export function deserializeApplyMetadataCascadePolicyRequestBody(
  val: any
): ApplyMetadataCascadePolicyRequestBody {
  const conflictResolution: ApplyMetadataCascadePolicyRequestBodyConflictResolutionField =
    deserializeApplyMetadataCascadePolicyRequestBodyConflictResolutionField(
      val.conflict_resolution
    );
  return {
    conflictResolution: conflictResolution,
  } satisfies ApplyMetadataCascadePolicyRequestBody;
}
