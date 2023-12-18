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
export type GetTermsOfServiceQueryParamsTosTypeField = 'external' | 'managed';
export interface GetTermsOfServiceQueryParams {
  readonly tosType?: GetTermsOfServiceQueryParamsTosTypeField;
}
export class GetTermsOfServiceHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetTermsOfServiceHeaders, 'extraHeaders'>
      | Partial<Pick<GetTermsOfServiceHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateTermsOfServiceRequestBodyStatusField = 'enabled' | 'disabled';
export type CreateTermsOfServiceRequestBodyTosTypeField =
  | 'external'
  | 'managed';
export interface CreateTermsOfServiceRequestBody {
  readonly status: CreateTermsOfServiceRequestBodyStatusField;
  readonly tosType?: CreateTermsOfServiceRequestBodyTosTypeField;
  readonly text: string;
}
export class CreateTermsOfServiceHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateTermsOfServiceHeaders, 'extraHeaders'>
      | Partial<Pick<CreateTermsOfServiceHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GetTermsOfServiceByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetTermsOfServiceByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetTermsOfServiceByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateTermsOfServiceByIdRequestBodyStatusField =
  | 'enabled'
  | 'disabled';
export interface UpdateTermsOfServiceByIdRequestBody {
  readonly status: UpdateTermsOfServiceByIdRequestBodyStatusField;
  readonly text: string;
}
export class UpdateTermsOfServiceByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateTermsOfServiceByIdHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateTermsOfServiceByIdHeaders, 'extraHeaders'>>
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
          | 'getTermsOfService'
          | 'createTermsOfService'
          | 'getTermsOfServiceById'
          | 'updateTermsOfServiceById'
        >
      | Partial<Pick<TermsOfServicesManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getTermsOfService(
    queryParams: GetTermsOfServiceQueryParams = {} satisfies GetTermsOfServiceQueryParams,
    headers: GetTermsOfServiceHeaders = new GetTermsOfServiceHeaders({}),
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
  async createTermsOfService(
    requestBody: CreateTermsOfServiceRequestBody,
    headers: CreateTermsOfServiceHeaders = new CreateTermsOfServiceHeaders({}),
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
        data: serializeCreateTermsOfServiceRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTask(response.data);
  }
  async getTermsOfServiceById(
    termsOfServiceId: string,
    headers: GetTermsOfServiceByIdHeaders = new GetTermsOfServiceByIdHeaders(
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
  async updateTermsOfServiceById(
    termsOfServiceId: string,
    requestBody: UpdateTermsOfServiceByIdRequestBody,
    headers: UpdateTermsOfServiceByIdHeaders = new UpdateTermsOfServiceByIdHeaders(
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
        data: serializeUpdateTermsOfServiceByIdRequestBody(requestBody),
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
export function serializeGetTermsOfServiceQueryParamsTosTypeField(
  val: GetTermsOfServiceQueryParamsTosTypeField
): SerializedData {
  return val;
}
export function deserializeGetTermsOfServiceQueryParamsTosTypeField(
  val: any
): GetTermsOfServiceQueryParamsTosTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GetTermsOfServiceQueryParamsTosTypeField"';
  }
  if (val == 'external') {
    return 'external';
  }
  if (val == 'managed') {
    return 'managed';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateTermsOfServiceRequestBodyStatusField(
  val: CreateTermsOfServiceRequestBodyStatusField
): SerializedData {
  return val;
}
export function deserializeCreateTermsOfServiceRequestBodyStatusField(
  val: any
): CreateTermsOfServiceRequestBodyStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateTermsOfServiceRequestBodyStatusField"';
  }
  if (val == 'enabled') {
    return 'enabled';
  }
  if (val == 'disabled') {
    return 'disabled';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateTermsOfServiceRequestBodyTosTypeField(
  val: CreateTermsOfServiceRequestBodyTosTypeField
): SerializedData {
  return val;
}
export function deserializeCreateTermsOfServiceRequestBodyTosTypeField(
  val: any
): CreateTermsOfServiceRequestBodyTosTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateTermsOfServiceRequestBodyTosTypeField"';
  }
  if (val == 'external') {
    return 'external';
  }
  if (val == 'managed') {
    return 'managed';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateTermsOfServiceRequestBody(
  val: CreateTermsOfServiceRequestBody
): SerializedData {
  return {
    ['status']: serializeCreateTermsOfServiceRequestBodyStatusField(val.status),
    ['tos_type']:
      val.tosType == void 0
        ? void 0
        : serializeCreateTermsOfServiceRequestBodyTosTypeField(val.tosType),
    ['text']: val.text,
  };
}
export function deserializeCreateTermsOfServiceRequestBody(
  val: any
): CreateTermsOfServiceRequestBody {
  const status: CreateTermsOfServiceRequestBodyStatusField =
    deserializeCreateTermsOfServiceRequestBodyStatusField(val.status);
  const tosType: undefined | CreateTermsOfServiceRequestBodyTosTypeField =
    val.tos_type == void 0
      ? void 0
      : deserializeCreateTermsOfServiceRequestBodyTosTypeField(val.tos_type);
  const text: string = val.text;
  return {
    status: status,
    tosType: tosType,
    text: text,
  } satisfies CreateTermsOfServiceRequestBody;
}
export function serializeUpdateTermsOfServiceByIdRequestBodyStatusField(
  val: UpdateTermsOfServiceByIdRequestBodyStatusField
): SerializedData {
  return val;
}
export function deserializeUpdateTermsOfServiceByIdRequestBodyStatusField(
  val: any
): UpdateTermsOfServiceByIdRequestBodyStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateTermsOfServiceByIdRequestBodyStatusField"';
  }
  if (val == 'enabled') {
    return 'enabled';
  }
  if (val == 'disabled') {
    return 'disabled';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateTermsOfServiceByIdRequestBody(
  val: UpdateTermsOfServiceByIdRequestBody
): SerializedData {
  return {
    ['status']: serializeUpdateTermsOfServiceByIdRequestBodyStatusField(
      val.status
    ),
    ['text']: val.text,
  };
}
export function deserializeUpdateTermsOfServiceByIdRequestBody(
  val: any
): UpdateTermsOfServiceByIdRequestBody {
  const status: UpdateTermsOfServiceByIdRequestBodyStatusField =
    deserializeUpdateTermsOfServiceByIdRequestBodyStatusField(val.status);
  const text: string = val.text;
  return {
    status: status,
    text: text,
  } satisfies UpdateTermsOfServiceByIdRequestBody;
}
