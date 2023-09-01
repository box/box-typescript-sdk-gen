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
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
import { serializeJson } from '../json.js';
import { isJson } from '../json.js';
export interface GetTermOfServiceUserStatusesQueryParamsArg {
  readonly tosId: string;
  readonly userId?: string;
}
export class GetTermOfServiceUserStatusesHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: GetTermOfServiceUserStatusesHeadersArg) {
    Object.assign(this, fields);
  }
}
export type CreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField =
  'terms_of_service';
export interface CreateTermOfServiceUserStatusRequestBodyArgTosField {
  readonly type: CreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField;
  readonly id: string;
}
export type CreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField =
  'user';
export interface CreateTermOfServiceUserStatusRequestBodyArgUserField {
  readonly type: CreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField;
  readonly id: string;
}
export interface CreateTermOfServiceUserStatusRequestBodyArg {
  readonly tos: CreateTermOfServiceUserStatusRequestBodyArgTosField;
  readonly user: CreateTermOfServiceUserStatusRequestBodyArgUserField;
  readonly isAccepted: boolean;
}
export class CreateTermOfServiceUserStatusHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: CreateTermOfServiceUserStatusHeadersArg) {
    Object.assign(this, fields);
  }
}
export interface UpdateTermOfServiceUserStatusByIdRequestBodyArg {
  readonly isAccepted: boolean;
}
export class UpdateTermOfServiceUserStatusByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: UpdateTermOfServiceUserStatusByIdHeadersArg) {
    Object.assign(this, fields);
  }
}
export class TermsOfServiceUserStatusesManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      TermsOfServiceUserStatusesManager,
      | 'getTermOfServiceUserStatuses'
      | 'createTermOfServiceUserStatus'
      | 'updateTermOfServiceUserStatusById'
    >
  ) {
    Object.assign(this, fields);
  }
  async getTermOfServiceUserStatuses(
    queryParams: GetTermOfServiceUserStatusesQueryParamsArg,
    headers: GetTermOfServiceUserStatusesHeadersArg = new GetTermOfServiceUserStatusesHeadersArg(
      {}
    )
  ): Promise<TermsOfServiceUserStatuses> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['tos_id']: toString(queryParams.tosId),
      ['user_id']: toString(queryParams.userId),
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/terms_of_service_user_statuses'
      ) as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTermsOfServiceUserStatuses(
      deserializeJson(response.text)
    );
  }
  async createTermOfServiceUserStatus(
    requestBody: CreateTermOfServiceUserStatusRequestBodyArg,
    headers: CreateTermOfServiceUserStatusHeadersArg = new CreateTermOfServiceUserStatusHeadersArg(
      {}
    )
  ): Promise<TermsOfServiceUserStatus> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/terms_of_service_user_statuses'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        body: serializeJson(
          serializeCreateTermOfServiceUserStatusRequestBodyArg(requestBody)
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTermsOfServiceUserStatus(deserializeJson(response.text));
  }
  async updateTermOfServiceUserStatusById(
    termsOfServiceUserStatusId: string,
    requestBody: UpdateTermOfServiceUserStatusByIdRequestBodyArg,
    headers: UpdateTermOfServiceUserStatusByIdHeadersArg = new UpdateTermOfServiceUserStatusByIdHeadersArg(
      {}
    )
  ): Promise<TermsOfServiceUserStatus> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/terms_of_service_user_statuses/',
        termsOfServiceUserStatusId
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        body: serializeJson(
          serializeUpdateTermOfServiceUserStatusByIdRequestBodyArg(requestBody)
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTermsOfServiceUserStatus(deserializeJson(response.text));
  }
}
export function serializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField(
  val: CreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField
): Json {
  return val;
}
export function deserializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField(
  val: any
): CreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "CreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField"';
  }
  if (val == 'terms_of_service') {
    return 'terms_of_service';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateTermOfServiceUserStatusRequestBodyArgTosField(
  val: CreateTermOfServiceUserStatusRequestBodyArgTosField
): Json {
  return {
    ['type']:
      serializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField(
        val.type
      ),
    ['id']: val.id,
  };
}
export function deserializeCreateTermOfServiceUserStatusRequestBodyArgTosField(
  val: any
): CreateTermOfServiceUserStatusRequestBodyArgTosField {
  const type: CreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField =
    deserializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField(
      val.type
    );
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateTermOfServiceUserStatusRequestBodyArgTosField;
}
export function serializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField(
  val: CreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField
): Json {
  return val;
}
export function deserializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField(
  val: any
): CreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "CreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField"';
  }
  if (val == 'user') {
    return 'user';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateTermOfServiceUserStatusRequestBodyArgUserField(
  val: CreateTermOfServiceUserStatusRequestBodyArgUserField
): Json {
  return {
    ['type']:
      serializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField(
        val.type
      ),
    ['id']: val.id,
  };
}
export function deserializeCreateTermOfServiceUserStatusRequestBodyArgUserField(
  val: any
): CreateTermOfServiceUserStatusRequestBodyArgUserField {
  const type: CreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField =
    deserializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField(
      val.type
    );
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateTermOfServiceUserStatusRequestBodyArgUserField;
}
export function serializeCreateTermOfServiceUserStatusRequestBodyArg(
  val: CreateTermOfServiceUserStatusRequestBodyArg
): Json {
  return {
    ['tos']: serializeCreateTermOfServiceUserStatusRequestBodyArgTosField(
      val.tos
    ),
    ['user']: serializeCreateTermOfServiceUserStatusRequestBodyArgUserField(
      val.user
    ),
    ['is_accepted']: val.isAccepted,
  };
}
export function deserializeCreateTermOfServiceUserStatusRequestBodyArg(
  val: any
): CreateTermOfServiceUserStatusRequestBodyArg {
  const tos: CreateTermOfServiceUserStatusRequestBodyArgTosField =
    deserializeCreateTermOfServiceUserStatusRequestBodyArgTosField(val.tos);
  const user: CreateTermOfServiceUserStatusRequestBodyArgUserField =
    deserializeCreateTermOfServiceUserStatusRequestBodyArgUserField(val.user);
  const isAccepted: boolean = val.is_accepted;
  return {
    tos: tos,
    user: user,
    isAccepted: isAccepted,
  } satisfies CreateTermOfServiceUserStatusRequestBodyArg;
}
export function serializeUpdateTermOfServiceUserStatusByIdRequestBodyArg(
  val: UpdateTermOfServiceUserStatusByIdRequestBodyArg
): Json {
  return { ['is_accepted']: val.isAccepted };
}
export function deserializeUpdateTermOfServiceUserStatusByIdRequestBodyArg(
  val: any
): UpdateTermOfServiceUserStatusByIdRequestBodyArg {
  const isAccepted: boolean = val.is_accepted;
  return {
    isAccepted: isAccepted,
  } satisfies UpdateTermOfServiceUserStatusByIdRequestBodyArg;
}
