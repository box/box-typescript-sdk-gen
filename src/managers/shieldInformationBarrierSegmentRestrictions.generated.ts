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
    fields:
      | Omit<
          CreateShieldInformationBarrierSegmentRestrictionRequestBody,
          'type'
        >
      | Partial<
          Pick<
            CreateShieldInformationBarrierSegmentRestrictionRequestBody,
            'type'
          >
        >
  ) {
    Object.assign(this, fields);
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
    headersInput: GetShieldInformationBarrierSegmentRestrictionByIdHeadersInput = new GetShieldInformationBarrierSegmentRestrictionByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarrierSegmentRestriction> {
    const headers: any =
      new GetShieldInformationBarrierSegmentRestrictionByIdHeaders({
        extraHeaders: headersInput.extraHeaders,
      });
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
    headersInput: DeleteShieldInformationBarrierSegmentRestrictionByIdHeadersInput = new DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headers: any =
      new DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders({
        extraHeaders: headersInput.extraHeaders,
      });
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
    headersInput: GetShieldInformationBarrierSegmentRestrictionsHeadersInput = new GetShieldInformationBarrierSegmentRestrictionsHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarrierSegmentRestrictions> {
    const headers: any =
      new GetShieldInformationBarrierSegmentRestrictionsHeaders({
        extraHeaders: headersInput.extraHeaders,
      });
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
    headersInput: CreateShieldInformationBarrierSegmentRestrictionHeadersInput = new CreateShieldInformationBarrierSegmentRestrictionHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarrierSegmentRestriction> {
    const requestBody: any =
      new CreateShieldInformationBarrierSegmentRestrictionRequestBody({
        type: requestBodyInput.type,
        shieldInformationBarrier: requestBodyInput.shieldInformationBarrier,
        shieldInformationBarrierSegment:
          requestBodyInput.shieldInformationBarrierSegment,
        restrictedSegment: requestBodyInput.restrictedSegment,
      });
    const headers: any =
      new CreateShieldInformationBarrierSegmentRestrictionHeaders({
        extraHeaders: headersInput.extraHeaders,
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
  val: any
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
  val: any
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
  val: any
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
  val: any
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
  val: any
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
  val: any
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
export function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyInput(
  val: any
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
  val: any
): CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput {
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
  } satisfies CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput;
}
