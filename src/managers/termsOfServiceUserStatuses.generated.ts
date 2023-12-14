import { serializeTermsOfServiceUserStatuses } from '../schemas.generated.js';
import { deserializeTermsOfServiceUserStatuses } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeTermsOfServiceUserStatus } from '../schemas.generated.js';
import { deserializeTermsOfServiceUserStatus } from '../schemas.generated.js';
import { TermsOfServiceUserStatuses } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { TermsOfServiceUserStatus } from '../schemas.generated.js';
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
export interface GetTermOfServiceUserStatusesQueryParams {
  readonly tosId: string;
  readonly userId?: string;
}
export class GetTermOfServiceUserStatusesHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetTermOfServiceUserStatusesHeaders, 'extraHeaders'>
      | Partial<Pick<GetTermOfServiceUserStatusesHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateTermOfServiceUserStatusRequestBodyTosTypeField =
  'terms_of_service';
export interface CreateTermOfServiceUserStatusRequestBodyTosField {
  readonly type: CreateTermOfServiceUserStatusRequestBodyTosTypeField;
  readonly id: string;
}
export type CreateTermOfServiceUserStatusRequestBodyUserTypeField = 'user';
export interface CreateTermOfServiceUserStatusRequestBodyUserField {
  readonly type: CreateTermOfServiceUserStatusRequestBodyUserTypeField;
  readonly id: string;
}
export interface CreateTermOfServiceUserStatusRequestBody {
  readonly tos: CreateTermOfServiceUserStatusRequestBodyTosField;
  readonly user: CreateTermOfServiceUserStatusRequestBodyUserField;
  readonly isAccepted: boolean;
}
export class CreateTermOfServiceUserStatusHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateTermOfServiceUserStatusHeaders, 'extraHeaders'>
      | Partial<Pick<CreateTermOfServiceUserStatusHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateTermOfServiceUserStatusByIdRequestBody {
  readonly isAccepted: boolean;
}
export class UpdateTermOfServiceUserStatusByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateTermOfServiceUserStatusByIdHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateTermOfServiceUserStatusByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class TermsOfServiceUserStatusesManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          TermsOfServiceUserStatusesManager,
          | 'networkSession'
          | 'getTermOfServiceUserStatuses'
          | 'createTermOfServiceUserStatus'
          | 'updateTermOfServiceUserStatusById'
        >
      | Partial<Pick<TermsOfServiceUserStatusesManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getTermOfServiceUserStatuses(
    queryParams: GetTermOfServiceUserStatusesQueryParams,
    headers: GetTermOfServiceUserStatusesHeaders = new GetTermOfServiceUserStatusesHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<TermsOfServiceUserStatuses> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['tos_id']: toString(queryParams.tosId) as string,
      ['user_id']: toString(queryParams.userId) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/terms_of_service_user_statuses'
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
    return deserializeTermsOfServiceUserStatuses(response.data);
  }
  async createTermOfServiceUserStatus(
    requestBody: CreateTermOfServiceUserStatusRequestBody,
    headers: CreateTermOfServiceUserStatusHeaders = new CreateTermOfServiceUserStatusHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<TermsOfServiceUserStatus> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/terms_of_service_user_statuses'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateTermOfServiceUserStatusRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTermsOfServiceUserStatus(response.data);
  }
  async updateTermOfServiceUserStatusById(
    termsOfServiceUserStatusId: string,
    requestBody: UpdateTermOfServiceUserStatusByIdRequestBody,
    headers: UpdateTermOfServiceUserStatusByIdHeaders = new UpdateTermOfServiceUserStatusByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<TermsOfServiceUserStatus> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/terms_of_service_user_statuses/',
        toString(termsOfServiceUserStatusId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateTermOfServiceUserStatusByIdRequestBody(
          requestBody
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTermsOfServiceUserStatus(response.data);
  }
}
export function serializeCreateTermOfServiceUserStatusRequestBodyTosTypeField(
  val: CreateTermOfServiceUserStatusRequestBodyTosTypeField
): SerializedData {
  return val;
}
export function deserializeCreateTermOfServiceUserStatusRequestBodyTosTypeField(
  val: any
): CreateTermOfServiceUserStatusRequestBodyTosTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateTermOfServiceUserStatusRequestBodyTosTypeField"';
  }
  if (val == 'terms_of_service') {
    return 'terms_of_service';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateTermOfServiceUserStatusRequestBodyTosField(
  val: CreateTermOfServiceUserStatusRequestBodyTosField
): SerializedData {
  return {
    ['type']: serializeCreateTermOfServiceUserStatusRequestBodyTosTypeField(
      val.type
    ),
    ['id']: val.id,
  };
}
export function deserializeCreateTermOfServiceUserStatusRequestBodyTosField(
  val: any
): CreateTermOfServiceUserStatusRequestBodyTosField {
  const type: CreateTermOfServiceUserStatusRequestBodyTosTypeField =
    deserializeCreateTermOfServiceUserStatusRequestBodyTosTypeField(val.type);
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateTermOfServiceUserStatusRequestBodyTosField;
}
export function serializeCreateTermOfServiceUserStatusRequestBodyUserTypeField(
  val: CreateTermOfServiceUserStatusRequestBodyUserTypeField
): SerializedData {
  return val;
}
export function deserializeCreateTermOfServiceUserStatusRequestBodyUserTypeField(
  val: any
): CreateTermOfServiceUserStatusRequestBodyUserTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateTermOfServiceUserStatusRequestBodyUserTypeField"';
  }
  if (val == 'user') {
    return 'user';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateTermOfServiceUserStatusRequestBodyUserField(
  val: CreateTermOfServiceUserStatusRequestBodyUserField
): SerializedData {
  return {
    ['type']: serializeCreateTermOfServiceUserStatusRequestBodyUserTypeField(
      val.type
    ),
    ['id']: val.id,
  };
}
export function deserializeCreateTermOfServiceUserStatusRequestBodyUserField(
  val: any
): CreateTermOfServiceUserStatusRequestBodyUserField {
  const type: CreateTermOfServiceUserStatusRequestBodyUserTypeField =
    deserializeCreateTermOfServiceUserStatusRequestBodyUserTypeField(val.type);
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateTermOfServiceUserStatusRequestBodyUserField;
}
export function serializeCreateTermOfServiceUserStatusRequestBody(
  val: CreateTermOfServiceUserStatusRequestBody
): SerializedData {
  return {
    ['tos']: serializeCreateTermOfServiceUserStatusRequestBodyTosField(val.tos),
    ['user']: serializeCreateTermOfServiceUserStatusRequestBodyUserField(
      val.user
    ),
    ['is_accepted']: val.isAccepted,
  };
}
export function deserializeCreateTermOfServiceUserStatusRequestBody(
  val: any
): CreateTermOfServiceUserStatusRequestBody {
  const tos: CreateTermOfServiceUserStatusRequestBodyTosField =
    deserializeCreateTermOfServiceUserStatusRequestBodyTosField(val.tos);
  const user: CreateTermOfServiceUserStatusRequestBodyUserField =
    deserializeCreateTermOfServiceUserStatusRequestBodyUserField(val.user);
  const isAccepted: boolean = val.is_accepted;
  return {
    tos: tos,
    user: user,
    isAccepted: isAccepted,
  } satisfies CreateTermOfServiceUserStatusRequestBody;
}
export function serializeUpdateTermOfServiceUserStatusByIdRequestBody(
  val: UpdateTermOfServiceUserStatusByIdRequestBody
): SerializedData {
  return { ['is_accepted']: val.isAccepted };
}
export function deserializeUpdateTermOfServiceUserStatusByIdRequestBody(
  val: any
): UpdateTermOfServiceUserStatusByIdRequestBody {
  const isAccepted: boolean = val.is_accepted;
  return {
    isAccepted: isAccepted,
  } satisfies UpdateTermOfServiceUserStatusByIdRequestBody;
}
