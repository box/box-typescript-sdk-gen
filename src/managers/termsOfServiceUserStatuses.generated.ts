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
import { BoxSdkError } from '../errors.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export interface GetTermsOfServiceUserStatusesQueryParams {
  readonly tosId: string;
  readonly userId?: string;
}
export class GetTermsOfServiceUserStatusesHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetTermsOfServiceUserStatusesHeaders, 'extraHeaders'>
      | Partial<Pick<GetTermsOfServiceUserStatusesHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateTermsOfServiceStatusForUserRequestBodyTosTypeField =
  'terms_of_service';
export interface CreateTermsOfServiceStatusForUserRequestBodyTosField {
  readonly type: CreateTermsOfServiceStatusForUserRequestBodyTosTypeField;
  readonly id: string;
}
export type CreateTermsOfServiceStatusForUserRequestBodyUserTypeField = 'user';
export interface CreateTermsOfServiceStatusForUserRequestBodyUserField {
  readonly type: CreateTermsOfServiceStatusForUserRequestBodyUserTypeField;
  readonly id: string;
}
export interface CreateTermsOfServiceStatusForUserRequestBody {
  readonly tos: CreateTermsOfServiceStatusForUserRequestBodyTosField;
  readonly user: CreateTermsOfServiceStatusForUserRequestBodyUserField;
  readonly isAccepted: boolean;
}
export class CreateTermsOfServiceStatusForUserHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateTermsOfServiceStatusForUserHeaders, 'extraHeaders'>
      | Partial<Pick<CreateTermsOfServiceStatusForUserHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateTermsOfServiceStatusForUserByIdRequestBody {
  readonly isAccepted: boolean;
}
export class UpdateTermsOfServiceStatusForUserByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateTermsOfServiceStatusForUserByIdHeaders, 'extraHeaders'>
      | Partial<
          Pick<UpdateTermsOfServiceStatusForUserByIdHeaders, 'extraHeaders'>
        >
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
          | 'getTermsOfServiceUserStatuses'
          | 'createTermsOfServiceStatusForUser'
          | 'updateTermsOfServiceStatusForUserById'
        >
      | Partial<Pick<TermsOfServiceUserStatusesManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getTermsOfServiceUserStatuses(
    queryParams: GetTermsOfServiceUserStatusesQueryParams,
    headers: GetTermsOfServiceUserStatusesHeaders = new GetTermsOfServiceUserStatusesHeaders(
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
  async createTermsOfServiceStatusForUser(
    requestBody: CreateTermsOfServiceStatusForUserRequestBody,
    headers: CreateTermsOfServiceStatusForUserHeaders = new CreateTermsOfServiceStatusForUserHeaders(
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
        data: serializeCreateTermsOfServiceStatusForUserRequestBody(
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
  async updateTermsOfServiceStatusForUserById(
    termsOfServiceUserStatusId: string,
    requestBody: UpdateTermsOfServiceStatusForUserByIdRequestBody,
    headers: UpdateTermsOfServiceStatusForUserByIdHeaders = new UpdateTermsOfServiceStatusForUserByIdHeaders(
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
        data: serializeUpdateTermsOfServiceStatusForUserByIdRequestBody(
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
export function serializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(
  val: CreateTermsOfServiceStatusForUserRequestBodyTosTypeField
): SerializedData {
  return val;
}
export function deserializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(
  val: any
): CreateTermsOfServiceStatusForUserRequestBodyTosTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateTermsOfServiceStatusForUserRequestBodyTosTypeField"',
    });
  }
  if (val == 'terms_of_service') {
    return 'terms_of_service';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateTermsOfServiceStatusForUserRequestBodyTosField(
  val: CreateTermsOfServiceStatusForUserRequestBodyTosField
): SerializedData {
  return {
    ['type']: serializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(
      val.type
    ),
    ['id']: val.id,
  };
}
export function deserializeCreateTermsOfServiceStatusForUserRequestBodyTosField(
  val: any
): CreateTermsOfServiceStatusForUserRequestBodyTosField {
  const type: CreateTermsOfServiceStatusForUserRequestBodyTosTypeField =
    deserializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(
      val.type
    );
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateTermsOfServiceStatusForUserRequestBodyTosField;
}
export function serializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(
  val: CreateTermsOfServiceStatusForUserRequestBodyUserTypeField
): SerializedData {
  return val;
}
export function deserializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(
  val: any
): CreateTermsOfServiceStatusForUserRequestBodyUserTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateTermsOfServiceStatusForUserRequestBodyUserTypeField"',
    });
  }
  if (val == 'user') {
    return 'user';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateTermsOfServiceStatusForUserRequestBodyUserField(
  val: CreateTermsOfServiceStatusForUserRequestBodyUserField
): SerializedData {
  return {
    ['type']:
      serializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(
        val.type
      ),
    ['id']: val.id,
  };
}
export function deserializeCreateTermsOfServiceStatusForUserRequestBodyUserField(
  val: any
): CreateTermsOfServiceStatusForUserRequestBodyUserField {
  const type: CreateTermsOfServiceStatusForUserRequestBodyUserTypeField =
    deserializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(
      val.type
    );
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateTermsOfServiceStatusForUserRequestBodyUserField;
}
export function serializeCreateTermsOfServiceStatusForUserRequestBody(
  val: CreateTermsOfServiceStatusForUserRequestBody
): SerializedData {
  return {
    ['tos']: serializeCreateTermsOfServiceStatusForUserRequestBodyTosField(
      val.tos
    ),
    ['user']: serializeCreateTermsOfServiceStatusForUserRequestBodyUserField(
      val.user
    ),
    ['is_accepted']: val.isAccepted,
  };
}
export function deserializeCreateTermsOfServiceStatusForUserRequestBody(
  val: any
): CreateTermsOfServiceStatusForUserRequestBody {
  const tos: CreateTermsOfServiceStatusForUserRequestBodyTosField =
    deserializeCreateTermsOfServiceStatusForUserRequestBodyTosField(val.tos);
  const user: CreateTermsOfServiceStatusForUserRequestBodyUserField =
    deserializeCreateTermsOfServiceStatusForUserRequestBodyUserField(val.user);
  const isAccepted: boolean = val.is_accepted;
  return {
    tos: tos,
    user: user,
    isAccepted: isAccepted,
  } satisfies CreateTermsOfServiceStatusForUserRequestBody;
}
export function serializeUpdateTermsOfServiceStatusForUserByIdRequestBody(
  val: UpdateTermsOfServiceStatusForUserByIdRequestBody
): SerializedData {
  return { ['is_accepted']: val.isAccepted };
}
export function deserializeUpdateTermsOfServiceStatusForUserByIdRequestBody(
  val: any
): UpdateTermsOfServiceStatusForUserByIdRequestBody {
  const isAccepted: boolean = val.is_accepted;
  return {
    isAccepted: isAccepted,
  } satisfies UpdateTermsOfServiceStatusForUserByIdRequestBody;
}
