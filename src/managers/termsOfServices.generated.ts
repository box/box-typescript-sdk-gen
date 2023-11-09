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
export type GetTermOfServicesQueryParamsArgTosTypeField =
  | 'external'
  | 'managed';
export interface GetTermOfServicesQueryParamsArg {
  readonly tosType?: GetTermOfServicesQueryParamsArgTosTypeField;
}
export class GetTermOfServicesHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetTermOfServicesHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetTermOfServicesHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateTermOfServiceRequestBodyArgStatusField =
  | 'enabled'
  | 'disabled';
export type CreateTermOfServiceRequestBodyArgTosTypeField =
  | 'external'
  | 'managed';
export interface CreateTermOfServiceRequestBodyArg {
  readonly status: CreateTermOfServiceRequestBodyArgStatusField;
  readonly tosType?: CreateTermOfServiceRequestBodyArgTosTypeField;
  readonly text: string;
}
export class CreateTermOfServiceHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateTermOfServiceHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateTermOfServiceHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GetTermOfServiceByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetTermOfServiceByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetTermOfServiceByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateTermOfServiceByIdRequestBodyArgStatusField =
  | 'enabled'
  | 'disabled';
export interface UpdateTermOfServiceByIdRequestBodyArg {
  readonly status: UpdateTermOfServiceByIdRequestBodyArgStatusField;
  readonly text: string;
}
export class UpdateTermOfServiceByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateTermOfServiceByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<UpdateTermOfServiceByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class TermsOfServicesManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      TermsOfServicesManager,
      | 'getTermOfServices'
      | 'createTermOfService'
      | 'getTermOfServiceById'
      | 'updateTermOfServiceById'
    >
  ) {
    Object.assign(this, fields);
  }
  async getTermOfServices(
    queryParams: GetTermOfServicesQueryParamsArg = {} satisfies GetTermOfServicesQueryParamsArg,
    headers: GetTermOfServicesHeadersArg = new GetTermOfServicesHeadersArg({}),
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
      ''.concat('https://api.box.com/2.0/terms_of_services') as string,
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
    requestBody: CreateTermOfServiceRequestBodyArg,
    headers: CreateTermOfServiceHeadersArg = new CreateTermOfServiceHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Task> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/terms_of_services') as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateTermOfServiceRequestBodyArg(requestBody),
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
    headers: GetTermOfServiceByIdHeadersArg = new GetTermOfServiceByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<TermsOfService> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/terms_of_services/',
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
    requestBody: UpdateTermOfServiceByIdRequestBodyArg,
    headers: UpdateTermOfServiceByIdHeadersArg = new UpdateTermOfServiceByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<TermsOfService> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/terms_of_services/',
        toString(termsOfServiceId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateTermOfServiceByIdRequestBodyArg(requestBody),
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
export function serializeGetTermOfServicesQueryParamsArgTosTypeField(
  val: GetTermOfServicesQueryParamsArgTosTypeField
): SerializedData {
  return val;
}
export function deserializeGetTermOfServicesQueryParamsArgTosTypeField(
  val: any
): GetTermOfServicesQueryParamsArgTosTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GetTermOfServicesQueryParamsArgTosTypeField"';
  }
  if (val == 'external') {
    return 'external';
  }
  if (val == 'managed') {
    return 'managed';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateTermOfServiceRequestBodyArgStatusField(
  val: CreateTermOfServiceRequestBodyArgStatusField
): SerializedData {
  return val;
}
export function deserializeCreateTermOfServiceRequestBodyArgStatusField(
  val: any
): CreateTermOfServiceRequestBodyArgStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateTermOfServiceRequestBodyArgStatusField"';
  }
  if (val == 'enabled') {
    return 'enabled';
  }
  if (val == 'disabled') {
    return 'disabled';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateTermOfServiceRequestBodyArgTosTypeField(
  val: CreateTermOfServiceRequestBodyArgTosTypeField
): SerializedData {
  return val;
}
export function deserializeCreateTermOfServiceRequestBodyArgTosTypeField(
  val: any
): CreateTermOfServiceRequestBodyArgTosTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateTermOfServiceRequestBodyArgTosTypeField"';
  }
  if (val == 'external') {
    return 'external';
  }
  if (val == 'managed') {
    return 'managed';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateTermOfServiceRequestBodyArg(
  val: CreateTermOfServiceRequestBodyArg
): SerializedData {
  return {
    ['status']: serializeCreateTermOfServiceRequestBodyArgStatusField(
      val.status
    ),
    ['tos_type']:
      val.tosType == void 0
        ? void 0
        : serializeCreateTermOfServiceRequestBodyArgTosTypeField(val.tosType),
    ['text']: val.text,
  };
}
export function deserializeCreateTermOfServiceRequestBodyArg(
  val: any
): CreateTermOfServiceRequestBodyArg {
  const status: CreateTermOfServiceRequestBodyArgStatusField =
    deserializeCreateTermOfServiceRequestBodyArgStatusField(val.status);
  const tosType: undefined | CreateTermOfServiceRequestBodyArgTosTypeField =
    val.tos_type == void 0
      ? void 0
      : deserializeCreateTermOfServiceRequestBodyArgTosTypeField(val.tos_type);
  const text: string = val.text;
  return {
    status: status,
    tosType: tosType,
    text: text,
  } satisfies CreateTermOfServiceRequestBodyArg;
}
export function serializeUpdateTermOfServiceByIdRequestBodyArgStatusField(
  val: UpdateTermOfServiceByIdRequestBodyArgStatusField
): SerializedData {
  return val;
}
export function deserializeUpdateTermOfServiceByIdRequestBodyArgStatusField(
  val: any
): UpdateTermOfServiceByIdRequestBodyArgStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateTermOfServiceByIdRequestBodyArgStatusField"';
  }
  if (val == 'enabled') {
    return 'enabled';
  }
  if (val == 'disabled') {
    return 'disabled';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateTermOfServiceByIdRequestBodyArg(
  val: UpdateTermOfServiceByIdRequestBodyArg
): SerializedData {
  return {
    ['status']: serializeUpdateTermOfServiceByIdRequestBodyArgStatusField(
      val.status
    ),
    ['text']: val.text,
  };
}
export function deserializeUpdateTermOfServiceByIdRequestBodyArg(
  val: any
): UpdateTermOfServiceByIdRequestBodyArg {
  const status: UpdateTermOfServiceByIdRequestBodyArgStatusField =
    deserializeUpdateTermOfServiceByIdRequestBodyArgStatusField(val.status);
  const text: string = val.text;
  return {
    status: status,
    text: text,
  } satisfies UpdateTermOfServiceByIdRequestBodyArg;
}
