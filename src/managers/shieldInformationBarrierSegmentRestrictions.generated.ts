import { serializeShieldInformationBarrierSegmentRestriction } from '../schemas/shieldInformationBarrierSegmentRestriction.generated.js';
import { deserializeShieldInformationBarrierSegmentRestriction } from '../schemas/shieldInformationBarrierSegmentRestriction.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeShieldInformationBarrierSegmentRestrictions } from '../schemas/shieldInformationBarrierSegmentRestrictions.generated.js';
import { deserializeShieldInformationBarrierSegmentRestrictions } from '../schemas/shieldInformationBarrierSegmentRestrictions.generated.js';
import { serializeShieldInformationBarrierBase } from '../schemas/shieldInformationBarrierBase.generated.js';
import { deserializeShieldInformationBarrierBase } from '../schemas/shieldInformationBarrierBase.generated.js';
import { ShieldInformationBarrierSegmentRestriction } from '../schemas/shieldInformationBarrierSegmentRestriction.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { ShieldInformationBarrierSegmentRestrictions } from '../schemas/shieldInformationBarrierSegmentRestrictions.generated.js';
import { ShieldInformationBarrierBase } from '../schemas/shieldInformationBarrierBase.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { sdToJson } from '../serialization/json.js';
import { SerializedData } from '../serialization/json.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetShieldInformationBarrierSegmentRestrictionByIdOptionals {
  readonly headers: GetShieldInformationBarrierSegmentRestrictionByIdHeaders =
    new GetShieldInformationBarrierSegmentRestrictionByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetShieldInformationBarrierSegmentRestrictionByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetShieldInformationBarrierSegmentRestrictionByIdOptionals,
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
export interface GetShieldInformationBarrierSegmentRestrictionByIdOptionalsInput {
  readonly headers?: GetShieldInformationBarrierSegmentRestrictionByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteShieldInformationBarrierSegmentRestrictionByIdOptionals {
  readonly headers: DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders =
    new DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteShieldInformationBarrierSegmentRestrictionByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          DeleteShieldInformationBarrierSegmentRestrictionByIdOptionals,
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
export interface DeleteShieldInformationBarrierSegmentRestrictionByIdOptionalsInput {
  readonly headers?: DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetShieldInformationBarrierSegmentRestrictionsOptionals {
  readonly headers: GetShieldInformationBarrierSegmentRestrictionsHeaders =
    new GetShieldInformationBarrierSegmentRestrictionsHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetShieldInformationBarrierSegmentRestrictionsOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetShieldInformationBarrierSegmentRestrictionsOptionals,
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
export interface GetShieldInformationBarrierSegmentRestrictionsOptionalsInput {
  readonly headers?: GetShieldInformationBarrierSegmentRestrictionsHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateShieldInformationBarrierSegmentRestrictionOptionals {
  readonly headers: CreateShieldInformationBarrierSegmentRestrictionHeaders =
    new CreateShieldInformationBarrierSegmentRestrictionHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateShieldInformationBarrierSegmentRestrictionOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          CreateShieldInformationBarrierSegmentRestrictionOptionals,
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
export interface CreateShieldInformationBarrierSegmentRestrictionOptionalsInput {
  readonly headers?: CreateShieldInformationBarrierSegmentRestrictionHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetShieldInformationBarrierSegmentRestrictionByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<
      GetShieldInformationBarrierSegmentRestrictionByIdHeaders,
      'extraHeaders'
    > &
      Partial<
        Pick<
          GetShieldInformationBarrierSegmentRestrictionByIdHeaders,
          'extraHeaders'
        >
      >
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetShieldInformationBarrierSegmentRestrictionByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<
      DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders,
      'extraHeaders'
    > &
      Partial<
        Pick<
          DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders,
          'extraHeaders'
        >
      >
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteShieldInformationBarrierSegmentRestrictionByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface GetShieldInformationBarrierSegmentRestrictionsQueryParams {
  readonly shieldInformationBarrierSegmentId: string;
  readonly marker?: string;
  readonly limit?: number;
}
export class GetShieldInformationBarrierSegmentRestrictionsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<
      GetShieldInformationBarrierSegmentRestrictionsHeaders,
      'extraHeaders'
    > &
      Partial<
        Pick<
          GetShieldInformationBarrierSegmentRestrictionsHeaders,
          'extraHeaders'
        >
      >
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetShieldInformationBarrierSegmentRestrictionsHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField =
  'shield_information_barrier_segment_restriction';
export type CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField =
  'shield_information_barrier_segment';
export interface CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField {
  readonly id?: string;
  readonly type?: CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField;
}
export type CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField =
  'shield_information_barrier_segment';
export interface CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField {
  readonly id?: string;
  readonly type?: CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField;
}
export class CreateShieldInformationBarrierSegmentRestrictionRequestBody {
  readonly type: CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField =
    'shield_information_barrier_segment_restriction' as CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField;
  readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
  readonly shieldInformationBarrierSegment!: CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField;
  readonly restrictedSegment!: CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField;
  constructor(
    fields: Omit<
      CreateShieldInformationBarrierSegmentRestrictionRequestBody,
      'type'
    > &
      Partial<
        Pick<
          CreateShieldInformationBarrierSegmentRestrictionRequestBody,
          'type'
        >
      >
  ) {
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.shieldInformationBarrier) {
      this.shieldInformationBarrier = fields.shieldInformationBarrier;
    }
    if (fields.shieldInformationBarrierSegment) {
      this.shieldInformationBarrierSegment =
        fields.shieldInformationBarrierSegment;
    }
    if (fields.restrictedSegment) {
      this.restrictedSegment = fields.restrictedSegment;
    }
  }
}
export interface CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput {
  readonly type?: CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField;
  readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
  readonly shieldInformationBarrierSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField;
  readonly restrictedSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField;
}
export class CreateShieldInformationBarrierSegmentRestrictionHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<
      CreateShieldInformationBarrierSegmentRestrictionHeaders,
      'extraHeaders'
    > &
      Partial<
        Pick<
          CreateShieldInformationBarrierSegmentRestrictionHeaders,
          'extraHeaders'
        >
      >
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateShieldInformationBarrierSegmentRestrictionHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class ShieldInformationBarrierSegmentRestrictionsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      ShieldInformationBarrierSegmentRestrictionsManager,
      | 'networkSession'
      | 'getShieldInformationBarrierSegmentRestrictionById'
      | 'deleteShieldInformationBarrierSegmentRestrictionById'
      | 'getShieldInformationBarrierSegmentRestrictions'
      | 'createShieldInformationBarrierSegmentRestriction'
    > &
      Partial<
        Pick<
          ShieldInformationBarrierSegmentRestrictionsManager,
          'networkSession'
        >
      >
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getShieldInformationBarrierSegmentRestrictionById(
    shieldInformationBarrierSegmentRestrictionId: string,
    optionalsInput: GetShieldInformationBarrierSegmentRestrictionByIdOptionalsInput = {}
  ): Promise<ShieldInformationBarrierSegmentRestriction> {
    const optionals: GetShieldInformationBarrierSegmentRestrictionByIdOptionals =
      new GetShieldInformationBarrierSegmentRestrictionByIdOptionals({
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
        '/shield_information_barrier_segment_restrictions/',
        toString(shieldInformationBarrierSegmentRestrictionId) as string
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
    return deserializeShieldInformationBarrierSegmentRestriction(response.data);
  }
  async deleteShieldInformationBarrierSegmentRestrictionById(
    shieldInformationBarrierSegmentRestrictionId: string,
    optionalsInput: DeleteShieldInformationBarrierSegmentRestrictionByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteShieldInformationBarrierSegmentRestrictionByIdOptionals =
      new DeleteShieldInformationBarrierSegmentRestrictionByIdOptionals({
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
        '/shield_information_barrier_segment_restrictions/',
        toString(shieldInformationBarrierSegmentRestrictionId) as string
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
  async getShieldInformationBarrierSegmentRestrictions(
    queryParams: GetShieldInformationBarrierSegmentRestrictionsQueryParams,
    optionalsInput: GetShieldInformationBarrierSegmentRestrictionsOptionalsInput = {}
  ): Promise<ShieldInformationBarrierSegmentRestrictions> {
    const optionals: GetShieldInformationBarrierSegmentRestrictionsOptionals =
      new GetShieldInformationBarrierSegmentRestrictionsOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['shield_information_barrier_segment_id']: toString(
        queryParams.shieldInformationBarrierSegmentId
      ) as string,
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/shield_information_barrier_segment_restrictions'
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
    return deserializeShieldInformationBarrierSegmentRestrictions(
      response.data
    );
  }
  async createShieldInformationBarrierSegmentRestriction(
    requestBodyInput: CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput,
    optionalsInput: CreateShieldInformationBarrierSegmentRestrictionOptionalsInput = {}
  ): Promise<ShieldInformationBarrierSegmentRestriction> {
    const requestBody: CreateShieldInformationBarrierSegmentRestrictionRequestBody =
      new CreateShieldInformationBarrierSegmentRestrictionRequestBody({
        type: requestBodyInput.type,
        shieldInformationBarrier: requestBodyInput.shieldInformationBarrier,
        shieldInformationBarrierSegment:
          requestBodyInput.shieldInformationBarrierSegment,
        restrictedSegment: requestBodyInput.restrictedSegment,
      });
    const optionals: CreateShieldInformationBarrierSegmentRestrictionOptionals =
      new CreateShieldInformationBarrierSegmentRestrictionOptionals({
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
        '/shield_information_barrier_segment_restrictions'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateShieldInformationBarrierSegmentRestrictionRequestBody(
          requestBody
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeShieldInformationBarrierSegmentRestriction(response.data);
  }
}
export interface ShieldInformationBarrierSegmentRestrictionsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField(
  val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField
): SerializedData {
  return val;
}
export function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField(
  val: SerializedData
): CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField"',
    });
  }
  if (val == 'shield_information_barrier_segment_restriction') {
    return 'shield_information_barrier_segment_restriction';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField(
  val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField
): SerializedData {
  return val;
}
export function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField(
  val: SerializedData
): CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField"',
    });
  }
  if (val == 'shield_information_barrier_segment') {
    return 'shield_information_barrier_segment';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField(
  val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField(
            val.type
          ),
  };
}
export function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField(
  val: SerializedData
): CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField"',
    });
  }
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type:
    | undefined
    | CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField =
    val.type == void 0
      ? void 0
      : deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField(
          val.type
        );
  return {
    id: id,
    type: type,
  } satisfies CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField;
}
export function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField(
  val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField
): SerializedData {
  return val;
}
export function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField(
  val: SerializedData
): CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField"',
    });
  }
  if (val == 'shield_information_barrier_segment') {
    return 'shield_information_barrier_segment';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField(
  val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField(
            val.type
          ),
  };
}
export function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField(
  val: SerializedData
): CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField"',
    });
  }
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type:
    | undefined
    | CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField =
    val.type == void 0
      ? void 0
      : deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField(
          val.type
        );
  return {
    id: id,
    type: type,
  } satisfies CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField;
}
export function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBody(
  val: CreateShieldInformationBarrierSegmentRestrictionRequestBody
): SerializedData {
  return {
    ['type']:
      serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField(
        val.type
      ),
    ['shield_information_barrier']:
      val.shieldInformationBarrier == void 0
        ? void 0
        : serializeShieldInformationBarrierBase(val.shieldInformationBarrier),
    ['shield_information_barrier_segment']:
      serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField(
        val.shieldInformationBarrierSegment
      ),
    ['restricted_segment']:
      serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField(
        val.restrictedSegment
      ),
  };
}
export function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBody(
  val: SerializedData
): CreateShieldInformationBarrierSegmentRestrictionRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "CreateShieldInformationBarrierSegmentRestrictionRequestBody"',
    });
  }
  if (val.type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "type" of type "CreateShieldInformationBarrierSegmentRestrictionRequestBody" to be defined',
    });
  }
  const type: CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField =
    deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField(
      val.type
    );
  const shieldInformationBarrier: undefined | ShieldInformationBarrierBase =
    val.shield_information_barrier == void 0
      ? void 0
      : deserializeShieldInformationBarrierBase(val.shield_information_barrier);
  if (val.shield_information_barrier_segment == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "shield_information_barrier_segment" of type "CreateShieldInformationBarrierSegmentRestrictionRequestBody" to be defined',
    });
  }
  const shieldInformationBarrierSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField =
    deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField(
      val.shield_information_barrier_segment
    );
  if (val.restricted_segment == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "restricted_segment" of type "CreateShieldInformationBarrierSegmentRestrictionRequestBody" to be defined',
    });
  }
  const restrictedSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField =
    deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField(
      val.restricted_segment
    );
  return {
    type: type,
    shieldInformationBarrier: shieldInformationBarrier,
    shieldInformationBarrierSegment: shieldInformationBarrierSegment,
    restrictedSegment: restrictedSegment,
  } satisfies CreateShieldInformationBarrierSegmentRestrictionRequestBody;
}
export function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyInput(
  val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField(
            val.type
          ),
    ['shield_information_barrier']:
      val.shieldInformationBarrier == void 0
        ? void 0
        : serializeShieldInformationBarrierBase(val.shieldInformationBarrier),
    ['shield_information_barrier_segment']:
      serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField(
        val.shieldInformationBarrierSegment
      ),
    ['restricted_segment']:
      serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField(
        val.restrictedSegment
      ),
  };
}
export function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyInput(
  val: SerializedData
): CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput"',
    });
  }
  const type:
    | undefined
    | CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField =
    val.type == void 0
      ? void 0
      : deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField(
          val.type
        );
  const shieldInformationBarrier: undefined | ShieldInformationBarrierBase =
    val.shield_information_barrier == void 0
      ? void 0
      : deserializeShieldInformationBarrierBase(val.shield_information_barrier);
  if (val.shield_information_barrier_segment == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "shield_information_barrier_segment" of type "CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput" to be defined',
    });
  }
  const shieldInformationBarrierSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField =
    deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField(
      val.shield_information_barrier_segment
    );
  if (val.restricted_segment == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "restricted_segment" of type "CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput" to be defined',
    });
  }
  const restrictedSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField =
    deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField(
      val.restricted_segment
    );
  return {
    type: type,
    shieldInformationBarrier: shieldInformationBarrier,
    shieldInformationBarrierSegment: shieldInformationBarrierSegment,
    restrictedSegment: restrictedSegment,
  } satisfies CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput;
}
