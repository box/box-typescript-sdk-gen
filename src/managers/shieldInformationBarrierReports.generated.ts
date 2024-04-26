import { serializeShieldInformationBarrierReports } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierReports } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeShieldInformationBarrierReport } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierReport } from '../schemas.generated.js';
import { serializeShieldInformationBarrierReference } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierReference } from '../schemas.generated.js';
import { ShieldInformationBarrierReports } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { ShieldInformationBarrierReport } from '../schemas.generated.js';
import { ShieldInformationBarrierReference } from '../schemas.generated.js';
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
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetShieldInformationBarrierReportsOptionals {
  readonly headers: GetShieldInformationBarrierReportsHeaders =
    new GetShieldInformationBarrierReportsHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetShieldInformationBarrierReportsOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetShieldInformationBarrierReportsOptionals,
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
export interface GetShieldInformationBarrierReportsOptionalsInput {
  readonly headers?: GetShieldInformationBarrierReportsHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateShieldInformationBarrierReportOptionals {
  readonly headers: CreateShieldInformationBarrierReportHeaders =
    new CreateShieldInformationBarrierReportHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateShieldInformationBarrierReportOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          CreateShieldInformationBarrierReportOptionals,
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
export interface CreateShieldInformationBarrierReportOptionalsInput {
  readonly headers?: CreateShieldInformationBarrierReportHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetShieldInformationBarrierReportByIdOptionals {
  readonly headers: GetShieldInformationBarrierReportByIdHeaders =
    new GetShieldInformationBarrierReportByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetShieldInformationBarrierReportByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetShieldInformationBarrierReportByIdOptionals,
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
export interface GetShieldInformationBarrierReportByIdOptionalsInput {
  readonly headers?: GetShieldInformationBarrierReportByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetShieldInformationBarrierReportsQueryParams {
  readonly shieldInformationBarrierId: string;
  readonly marker?: string;
  readonly limit?: number;
}
export class GetShieldInformationBarrierReportsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetShieldInformationBarrierReportsHeaders, 'extraHeaders'> &
      Partial<Pick<GetShieldInformationBarrierReportsHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetShieldInformationBarrierReportsHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class CreateShieldInformationBarrierReportHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateShieldInformationBarrierReportHeaders, 'extraHeaders'> &
      Partial<Pick<CreateShieldInformationBarrierReportHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateShieldInformationBarrierReportHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class GetShieldInformationBarrierReportByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetShieldInformationBarrierReportByIdHeaders, 'extraHeaders'> &
      Partial<
        Pick<GetShieldInformationBarrierReportByIdHeaders, 'extraHeaders'>
      >
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetShieldInformationBarrierReportByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class ShieldInformationBarrierReportsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      ShieldInformationBarrierReportsManager,
      | 'networkSession'
      | 'getShieldInformationBarrierReports'
      | 'createShieldInformationBarrierReport'
      | 'getShieldInformationBarrierReportById'
    > &
      Partial<Pick<ShieldInformationBarrierReportsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getShieldInformationBarrierReports(
    queryParams: GetShieldInformationBarrierReportsQueryParams,
    optionalsInput: GetShieldInformationBarrierReportsOptionalsInput = {}
  ): Promise<ShieldInformationBarrierReports> {
    const optionals: any = new GetShieldInformationBarrierReportsOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['shield_information_barrier_id']: toString(
        queryParams.shieldInformationBarrierId
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
        '/shield_information_barrier_reports'
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
    return deserializeShieldInformationBarrierReports(response.data);
  }
  async createShieldInformationBarrierReport(
    requestBody: ShieldInformationBarrierReference,
    optionalsInput: CreateShieldInformationBarrierReportOptionalsInput = {}
  ): Promise<ShieldInformationBarrierReport> {
    const optionals: any = new CreateShieldInformationBarrierReportOptionals({
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
        '/shield_information_barrier_reports'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeShieldInformationBarrierReference(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeShieldInformationBarrierReport(response.data);
  }
  async getShieldInformationBarrierReportById(
    shieldInformationBarrierReportId: string,
    optionalsInput: GetShieldInformationBarrierReportByIdOptionalsInput = {}
  ): Promise<ShieldInformationBarrierReport> {
    const optionals: any = new GetShieldInformationBarrierReportByIdOptionals({
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
        '/shield_information_barrier_reports/',
        toString(shieldInformationBarrierReportId) as string
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
    return deserializeShieldInformationBarrierReport(response.data);
  }
}
export interface ShieldInformationBarrierReportsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
