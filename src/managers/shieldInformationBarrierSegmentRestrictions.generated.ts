import { serializeShieldInformationBarrierSegmentRestriction } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierSegmentRestriction } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeShieldInformationBarrierSegmentRestrictions } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierSegmentRestrictions } from '../schemas.generated.js';
import { serializeShieldInformationBarrierBase } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierBase } from '../schemas.generated.js';
import { ShieldInformationBarrierSegmentRestriction } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { ShieldInformationBarrierSegmentRestrictions } from '../schemas.generated.js';
import { ShieldInformationBarrierBase } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.generated.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { sdToJson } from '../json.js';
import { SerializedData } from '../json.js';
import { BoxSdkError } from '../errors.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export class GetShieldInformationBarrierSegmentRestrictionByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          GetShieldInformationBarrierSegmentRestrictionByIdHeaders,
          'extraHeaders'
        >
      | Partial<
          Pick<
            GetShieldInformationBarrierSegmentRestrictionByIdHeaders,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders,
          'extraHeaders'
        >
      | Partial<
          Pick<
            DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
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
    fields:
      | Omit<
          GetShieldInformationBarrierSegmentRestrictionsHeaders,
          'extraHeaders'
        >
      | Partial<
          Pick<
            GetShieldInformationBarrierSegmentRestrictionsHeaders,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
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
export interface CreateShieldInformationBarrierSegmentRestrictionRequestBody {
  readonly type: CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField;
  readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
  readonly shieldInformationBarrierSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField;
  readonly restrictedSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField;
}
export class CreateShieldInformationBarrierSegmentRestrictionHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          CreateShieldInformationBarrierSegmentRestrictionHeaders,
          'extraHeaders'
        >
      | Partial<
          Pick<
            CreateShieldInformationBarrierSegmentRestrictionHeaders,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
}
export class ShieldInformationBarrierSegmentRestrictionsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          ShieldInformationBarrierSegmentRestrictionsManager,
          | 'networkSession'
          | 'getShieldInformationBarrierSegmentRestrictionById'
          | 'deleteShieldInformationBarrierSegmentRestrictionById'
          | 'getShieldInformationBarrierSegmentRestrictions'
          | 'createShieldInformationBarrierSegmentRestriction'
        >
      | Partial<
          Pick<
            ShieldInformationBarrierSegmentRestrictionsManager,
            'networkSession'
          >
        >
  ) {
    Object.assign(this, fields);
  }
  async getShieldInformationBarrierSegmentRestrictionById(
    shieldInformationBarrierSegmentRestrictionId: string,
    headers: GetShieldInformationBarrierSegmentRestrictionByIdHeaders = new GetShieldInformationBarrierSegmentRestrictionByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarrierSegmentRestriction> {
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
    headers: DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders = new DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders(
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
    headers: GetShieldInformationBarrierSegmentRestrictionsHeaders = new GetShieldInformationBarrierSegmentRestrictionsHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarrierSegmentRestrictions> {
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
    requestBody: CreateShieldInformationBarrierSegmentRestrictionRequestBody,
    headers: CreateShieldInformationBarrierSegmentRestrictionHeaders = new CreateShieldInformationBarrierSegmentRestrictionHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarrierSegmentRestriction> {
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
export function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField(
  val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField
): SerializedData {
  return val;
}
export function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField(
  val: any
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
  val: any
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
  val: any
): CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField {
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
  val: any
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
  val: any
): CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField {
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
  val: any
): CreateShieldInformationBarrierSegmentRestrictionRequestBody {
  const type: CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField =
    deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField(
      val.type
    );
  const shieldInformationBarrier: undefined | ShieldInformationBarrierBase =
    val.shield_information_barrier == void 0
      ? void 0
      : deserializeShieldInformationBarrierBase(val.shield_information_barrier);
  const shieldInformationBarrierSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField =
    deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField(
      val.shield_information_barrier_segment
    );
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
