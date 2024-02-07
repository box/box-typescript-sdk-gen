import { serializeLegalHoldPolicies } from '../schemas.generated.js';
import { deserializeLegalHoldPolicies } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeLegalHoldPolicy } from '../schemas.generated.js';
import { deserializeLegalHoldPolicy } from '../schemas.generated.js';
import { LegalHoldPolicies } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { LegalHoldPolicy } from '../schemas.generated.js';
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
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export interface GetLegalHoldPoliciesQueryParams {
  readonly policyName?: string;
  readonly fields?: readonly string[];
  readonly marker?: string;
  readonly limit?: number;
}
export class GetLegalHoldPoliciesHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetLegalHoldPoliciesHeaders, 'extraHeaders'>
      | Partial<Pick<GetLegalHoldPoliciesHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateLegalHoldPolicyRequestBody {
  readonly policyName: string;
  readonly description?: string;
  readonly filterStartedAt?: string;
  readonly filterEndedAt?: string;
  readonly isOngoing?: boolean;
}
export class CreateLegalHoldPolicyHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateLegalHoldPolicyHeaders, 'extraHeaders'>
      | Partial<Pick<CreateLegalHoldPolicyHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GetLegalHoldPolicyByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetLegalHoldPolicyByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetLegalHoldPolicyByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateLegalHoldPolicyByIdRequestBody {
  readonly policyName?: string;
  readonly description?: string;
  readonly releaseNotes?: string;
}
export class UpdateLegalHoldPolicyByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateLegalHoldPolicyByIdHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateLegalHoldPolicyByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteLegalHoldPolicyByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteLegalHoldPolicyByIdHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteLegalHoldPolicyByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class LegalHoldPoliciesManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          LegalHoldPoliciesManager,
          | 'networkSession'
          | 'getLegalHoldPolicies'
          | 'createLegalHoldPolicy'
          | 'getLegalHoldPolicyById'
          | 'updateLegalHoldPolicyById'
          | 'deleteLegalHoldPolicyById'
        >
      | Partial<Pick<LegalHoldPoliciesManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getLegalHoldPolicies(
    queryParams: GetLegalHoldPoliciesQueryParams = {} satisfies GetLegalHoldPoliciesQueryParams,
    headers: GetLegalHoldPoliciesHeaders = new GetLegalHoldPoliciesHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<LegalHoldPolicies> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['policy_name']: toString(queryParams.policyName) as string,
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
        '/legal_hold_policies'
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
    return deserializeLegalHoldPolicies(response.data);
  }
  async createLegalHoldPolicy(
    requestBody: CreateLegalHoldPolicyRequestBody,
    headers: CreateLegalHoldPolicyHeaders = new CreateLegalHoldPolicyHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<LegalHoldPolicy> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/legal_hold_policies'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateLegalHoldPolicyRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeLegalHoldPolicy(response.data);
  }
  async getLegalHoldPolicyById(
    legalHoldPolicyId: string,
    headers: GetLegalHoldPolicyByIdHeaders = new GetLegalHoldPolicyByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<LegalHoldPolicy> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/legal_hold_policies/',
        toString(legalHoldPolicyId) as string
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
    return deserializeLegalHoldPolicy(response.data);
  }
  async updateLegalHoldPolicyById(
    legalHoldPolicyId: string,
    requestBody: UpdateLegalHoldPolicyByIdRequestBody = {} satisfies UpdateLegalHoldPolicyByIdRequestBody,
    headers: UpdateLegalHoldPolicyByIdHeaders = new UpdateLegalHoldPolicyByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<LegalHoldPolicy> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/legal_hold_policies/',
        toString(legalHoldPolicyId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateLegalHoldPolicyByIdRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeLegalHoldPolicy(response.data);
  }
  async deleteLegalHoldPolicyById(
    legalHoldPolicyId: string,
    headers: DeleteLegalHoldPolicyByIdHeaders = new DeleteLegalHoldPolicyByIdHeaders(
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
        '/legal_hold_policies/',
        toString(legalHoldPolicyId) as string
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
}
export function serializeCreateLegalHoldPolicyRequestBody(
  val: CreateLegalHoldPolicyRequestBody
): SerializedData {
  return {
    ['policy_name']: val.policyName,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['filter_started_at']:
      val.filterStartedAt == void 0 ? void 0 : val.filterStartedAt,
    ['filter_ended_at']:
      val.filterEndedAt == void 0 ? void 0 : val.filterEndedAt,
    ['is_ongoing']: val.isOngoing == void 0 ? void 0 : val.isOngoing,
  };
}
export function deserializeCreateLegalHoldPolicyRequestBody(
  val: any
): CreateLegalHoldPolicyRequestBody {
  const policyName: string = val.policy_name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const filterStartedAt: undefined | string =
    val.filter_started_at == void 0 ? void 0 : val.filter_started_at;
  const filterEndedAt: undefined | string =
    val.filter_ended_at == void 0 ? void 0 : val.filter_ended_at;
  const isOngoing: undefined | boolean =
    val.is_ongoing == void 0 ? void 0 : val.is_ongoing;
  return {
    policyName: policyName,
    description: description,
    filterStartedAt: filterStartedAt,
    filterEndedAt: filterEndedAt,
    isOngoing: isOngoing,
  } satisfies CreateLegalHoldPolicyRequestBody;
}
export function serializeUpdateLegalHoldPolicyByIdRequestBody(
  val: UpdateLegalHoldPolicyByIdRequestBody
): SerializedData {
  return {
    ['policy_name']: val.policyName == void 0 ? void 0 : val.policyName,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['release_notes']: val.releaseNotes == void 0 ? void 0 : val.releaseNotes,
  };
}
export function deserializeUpdateLegalHoldPolicyByIdRequestBody(
  val: any
): UpdateLegalHoldPolicyByIdRequestBody {
  const policyName: undefined | string =
    val.policy_name == void 0 ? void 0 : val.policy_name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const releaseNotes: undefined | string =
    val.release_notes == void 0 ? void 0 : val.release_notes;
  return {
    policyName: policyName,
    description: description,
    releaseNotes: releaseNotes,
  } satisfies UpdateLegalHoldPolicyByIdRequestBody;
}
