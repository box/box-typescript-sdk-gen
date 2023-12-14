import { serializeTermsOfServices } from '../schemas.generated.js';
import { deserializeTermsOfServices } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeTask } from '../schemas.generated.js';
import { deserializeTask } from '../schemas.generated.js';
import { serializeTermsOfService } from '../schemas.generated.js';
import { deserializeTermsOfService } from '../schemas.generated.js';
import { TermsOfServices } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Task } from '../schemas.generated.js';
import { TermsOfService } from '../schemas.generated.js';
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
export type GetTermOfServicesQueryParamsTosTypeField = 'external' | 'managed';
export interface GetTermOfServicesQueryParams {
  readonly tosType?: GetTermOfServicesQueryParamsTosTypeField;
}
export class GetTermOfServicesHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetTermOfServicesHeaders, 'extraHeaders'>
      | Partial<Pick<GetTermOfServicesHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateTermOfServiceRequestBodyStatusField = 'enabled' | 'disabled';
export type CreateTermOfServiceRequestBodyTosTypeField = 'external' | 'managed';
export interface CreateTermOfServiceRequestBody {
  readonly status: CreateTermOfServiceRequestBodyStatusField;
  readonly tosType?: CreateTermOfServiceRequestBodyTosTypeField;
  readonly text: string;
}
export class CreateTermOfServiceHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateTermOfServiceHeaders, 'extraHeaders'>
      | Partial<Pick<CreateTermOfServiceHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GetTermOfServiceByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetTermOfServiceByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetTermOfServiceByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateTermOfServiceByIdRequestBodyStatusField =
  | 'enabled'
  | 'disabled';
export interface UpdateTermOfServiceByIdRequestBody {
  readonly status: UpdateTermOfServiceByIdRequestBodyStatusField;
  readonly text: string;
}
export class UpdateTermOfServiceByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateTermOfServiceByIdHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateTermOfServiceByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class TermsOfServicesManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          TermsOfServicesManager,
          | 'networkSession'
          | 'getTermOfServices'
          | 'createTermOfService'
          | 'getTermOfServiceById'
          | 'updateTermOfServiceById'
        >
      | Partial<Pick<TermsOfServicesManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getTermOfServices(
    queryParams: GetTermOfServicesQueryParams = {} satisfies GetTermOfServicesQueryParams,
    headers: GetTermOfServicesHeaders = new GetTermOfServicesHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<TermsOfServices> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['tos_type']: toString(queryParams.tosType) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/terms_of_services'
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
    return deserializeTermsOfServices(response.data);
  }
  async createTermOfService(
    requestBody: CreateTermOfServiceRequestBody,
    headers: CreateTermOfServiceHeaders = new CreateTermOfServiceHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Task> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/terms_of_services'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateTermOfServiceRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTask(response.data);
  }
  async getTermOfServiceById(
    termsOfServiceId: string,
    headers: GetTermOfServiceByIdHeaders = new GetTermOfServiceByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<TermsOfService> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/terms_of_services/',
        toString(termsOfServiceId) as string
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
    return deserializeTermsOfService(response.data);
  }
  async updateTermOfServiceById(
    termsOfServiceId: string,
    requestBody: UpdateTermOfServiceByIdRequestBody,
    headers: UpdateTermOfServiceByIdHeaders = new UpdateTermOfServiceByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<TermsOfService> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/terms_of_services/',
        toString(termsOfServiceId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateTermOfServiceByIdRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTermsOfService(response.data);
  }
}
export function serializeGetTermOfServicesQueryParamsTosTypeField(
  val: GetTermOfServicesQueryParamsTosTypeField
): SerializedData {
  return val;
}
export function deserializeGetTermOfServicesQueryParamsTosTypeField(
  val: any
): GetTermOfServicesQueryParamsTosTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GetTermOfServicesQueryParamsTosTypeField"';
  }
  if (val == 'external') {
    return 'external';
  }
  if (val == 'managed') {
    return 'managed';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateTermOfServiceRequestBodyStatusField(
  val: CreateTermOfServiceRequestBodyStatusField
): SerializedData {
  return val;
}
export function deserializeCreateTermOfServiceRequestBodyStatusField(
  val: any
): CreateTermOfServiceRequestBodyStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateTermOfServiceRequestBodyStatusField"';
  }
  if (val == 'enabled') {
    return 'enabled';
  }
  if (val == 'disabled') {
    return 'disabled';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateTermOfServiceRequestBodyTosTypeField(
  val: CreateTermOfServiceRequestBodyTosTypeField
): SerializedData {
  return val;
}
export function deserializeCreateTermOfServiceRequestBodyTosTypeField(
  val: any
): CreateTermOfServiceRequestBodyTosTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateTermOfServiceRequestBodyTosTypeField"';
  }
  if (val == 'external') {
    return 'external';
  }
  if (val == 'managed') {
    return 'managed';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateTermOfServiceRequestBody(
  val: CreateTermOfServiceRequestBody
): SerializedData {
  return {
    ['status']: serializeCreateTermOfServiceRequestBodyStatusField(val.status),
    ['tos_type']:
      val.tosType == void 0
        ? void 0
        : serializeCreateTermOfServiceRequestBodyTosTypeField(val.tosType),
    ['text']: val.text,
  };
}
export function deserializeCreateTermOfServiceRequestBody(
  val: any
): CreateTermOfServiceRequestBody {
  const status: CreateTermOfServiceRequestBodyStatusField =
    deserializeCreateTermOfServiceRequestBodyStatusField(val.status);
  const tosType: undefined | CreateTermOfServiceRequestBodyTosTypeField =
    val.tos_type == void 0
      ? void 0
      : deserializeCreateTermOfServiceRequestBodyTosTypeField(val.tos_type);
  const text: string = val.text;
  return {
    status: status,
    tosType: tosType,
    text: text,
  } satisfies CreateTermOfServiceRequestBody;
}
export function serializeUpdateTermOfServiceByIdRequestBodyStatusField(
  val: UpdateTermOfServiceByIdRequestBodyStatusField
): SerializedData {
  return val;
}
export function deserializeUpdateTermOfServiceByIdRequestBodyStatusField(
  val: any
): UpdateTermOfServiceByIdRequestBodyStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateTermOfServiceByIdRequestBodyStatusField"';
  }
  if (val == 'enabled') {
    return 'enabled';
  }
  if (val == 'disabled') {
    return 'disabled';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateTermOfServiceByIdRequestBody(
  val: UpdateTermOfServiceByIdRequestBody
): SerializedData {
  return {
    ['status']: serializeUpdateTermOfServiceByIdRequestBodyStatusField(
      val.status
    ),
    ['text']: val.text,
  };
}
export function deserializeUpdateTermOfServiceByIdRequestBody(
  val: any
): UpdateTermOfServiceByIdRequestBody {
  const status: UpdateTermOfServiceByIdRequestBodyStatusField =
    deserializeUpdateTermOfServiceByIdRequestBodyStatusField(val.status);
  const text: string = val.text;
  return {
    status: status,
    text: text,
  } satisfies UpdateTermOfServiceByIdRequestBody;
}
