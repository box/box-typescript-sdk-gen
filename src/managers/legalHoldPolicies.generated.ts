import { serializeLegalHoldPolicies } from '../schemas/legalHoldPolicies.generated.js';
import { deserializeLegalHoldPolicies } from '../schemas/legalHoldPolicies.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeLegalHoldPolicy } from '../schemas/legalHoldPolicy.generated.js';
import { deserializeLegalHoldPolicy } from '../schemas/legalHoldPolicy.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { LegalHoldPolicies } from '../schemas/legalHoldPolicies.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { LegalHoldPolicy } from '../schemas/legalHoldPolicy.generated.js';
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
import { DateTime } from '../internal/utils.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class CreateLegalHoldPolicyOptionals {
  readonly headers: CreateLegalHoldPolicyHeaders =
    new CreateLegalHoldPolicyHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateLegalHoldPolicyOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<CreateLegalHoldPolicyOptionals, 'headers' | 'cancellationToken'>
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
export interface CreateLegalHoldPolicyOptionalsInput {
  readonly headers?: CreateLegalHoldPolicyHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetLegalHoldPolicyByIdOptionals {
  readonly headers: GetLegalHoldPolicyByIdHeaders =
    new GetLegalHoldPolicyByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetLegalHoldPolicyByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<GetLegalHoldPolicyByIdOptionals, 'headers' | 'cancellationToken'>
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
export interface GetLegalHoldPolicyByIdOptionalsInput {
  readonly headers?: GetLegalHoldPolicyByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateLegalHoldPolicyByIdOptionals {
  readonly requestBody: UpdateLegalHoldPolicyByIdRequestBody =
    {} satisfies UpdateLegalHoldPolicyByIdRequestBody;
  readonly headers: UpdateLegalHoldPolicyByIdHeaders =
    new UpdateLegalHoldPolicyByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateLegalHoldPolicyByIdOptionals,
      'requestBody' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          UpdateLegalHoldPolicyByIdOptionals,
          'requestBody' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.requestBody) {
      this.requestBody = fields.requestBody;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface UpdateLegalHoldPolicyByIdOptionalsInput {
  readonly requestBody?: UpdateLegalHoldPolicyByIdRequestBody;
  readonly headers?: UpdateLegalHoldPolicyByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteLegalHoldPolicyByIdOptionals {
  readonly headers: DeleteLegalHoldPolicyByIdHeaders =
    new DeleteLegalHoldPolicyByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteLegalHoldPolicyByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          DeleteLegalHoldPolicyByIdOptionals,
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
export interface DeleteLegalHoldPolicyByIdOptionalsInput {
  readonly headers?: DeleteLegalHoldPolicyByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
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
    fields: Omit<GetLegalHoldPoliciesHeaders, 'extraHeaders'> &
      Partial<Pick<GetLegalHoldPoliciesHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetLegalHoldPoliciesHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface CreateLegalHoldPolicyRequestBody {
  readonly policyName: string;
  readonly description?: string;
  readonly filterStartedAt?: DateTime;
  readonly filterEndedAt?: DateTime;
  readonly isOngoing?: boolean;
}
export class CreateLegalHoldPolicyHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateLegalHoldPolicyHeaders, 'extraHeaders'> &
      Partial<Pick<CreateLegalHoldPolicyHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateLegalHoldPolicyHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class GetLegalHoldPolicyByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetLegalHoldPolicyByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetLegalHoldPolicyByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetLegalHoldPolicyByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    fields: Omit<UpdateLegalHoldPolicyByIdHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateLegalHoldPolicyByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateLegalHoldPolicyByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteLegalHoldPolicyByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteLegalHoldPolicyByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteLegalHoldPolicyByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteLegalHoldPolicyByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class LegalHoldPoliciesManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      LegalHoldPoliciesManager,
      | 'networkSession'
      | 'getLegalHoldPolicies'
      | 'createLegalHoldPolicy'
      | 'getLegalHoldPolicyById'
      | 'updateLegalHoldPolicyById'
      | 'deleteLegalHoldPolicyById'
    > &
      Partial<Pick<LegalHoldPoliciesManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getLegalHoldPolicies(
    queryParams: GetLegalHoldPoliciesQueryParams = {} satisfies GetLegalHoldPoliciesQueryParams,
    headersInput: GetLegalHoldPoliciesHeadersInput = new GetLegalHoldPoliciesHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<LegalHoldPolicies> {
    const headers: GetLegalHoldPoliciesHeaders =
      new GetLegalHoldPoliciesHeaders({
        extraHeaders: headersInput.extraHeaders,
      });
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
    optionalsInput: CreateLegalHoldPolicyOptionalsInput = {}
  ): Promise<LegalHoldPolicy> {
    const optionals: CreateLegalHoldPolicyOptionals =
      new CreateLegalHoldPolicyOptionals({
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
    optionalsInput: GetLegalHoldPolicyByIdOptionalsInput = {}
  ): Promise<LegalHoldPolicy> {
    const optionals: GetLegalHoldPolicyByIdOptionals =
      new GetLegalHoldPolicyByIdOptionals({
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
    optionalsInput: UpdateLegalHoldPolicyByIdOptionalsInput = {}
  ): Promise<LegalHoldPolicy> {
    const optionals: UpdateLegalHoldPolicyByIdOptionals =
      new UpdateLegalHoldPolicyByIdOptionals({
        requestBody: optionalsInput.requestBody,
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const requestBody: any = optionals.requestBody;
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: DeleteLegalHoldPolicyByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteLegalHoldPolicyByIdOptionals =
      new DeleteLegalHoldPolicyByIdOptionals({
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
export interface LegalHoldPoliciesManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeCreateLegalHoldPolicyRequestBody(
  val: CreateLegalHoldPolicyRequestBody
): SerializedData {
  return {
    ['policy_name']: val.policyName,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['filter_started_at']:
      val.filterStartedAt == void 0
        ? void 0
        : serializeDateTime(val.filterStartedAt),
    ['filter_ended_at']:
      val.filterEndedAt == void 0
        ? void 0
        : serializeDateTime(val.filterEndedAt),
    ['is_ongoing']: val.isOngoing == void 0 ? void 0 : val.isOngoing,
  };
}
export function deserializeCreateLegalHoldPolicyRequestBody(
  val: any
): CreateLegalHoldPolicyRequestBody {
  const policyName: string = val.policy_name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const filterStartedAt: undefined | DateTime =
    val.filter_started_at == void 0
      ? void 0
      : deserializeDateTime(val.filter_started_at);
  const filterEndedAt: undefined | DateTime =
    val.filter_ended_at == void 0
      ? void 0
      : deserializeDateTime(val.filter_ended_at);
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
