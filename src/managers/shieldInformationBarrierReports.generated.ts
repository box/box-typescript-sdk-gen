import { serializeShieldInformationBarrierReport } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierReport } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeShieldInformationBarrierReference } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierReference } from '../schemas.generated.js';
import { ShieldInformationBarrierReport } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { ShieldInformationBarrierReference } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { serializeJson } from '../json.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
export interface GetShieldInformationBarrierReportsQueryParamsArg {
  readonly shieldInformationBarrierId: string;
  readonly marker?: string;
  readonly limit?: number;
}
export class GetShieldInformationBarrierReportsHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetShieldInformationBarrierReportsHeadersArg, 'extraHeaders'>
      | Partial<
          Pick<GetShieldInformationBarrierReportsHeadersArg, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export class CreateShieldInformationBarrierReportHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateShieldInformationBarrierReportHeadersArg, 'extraHeaders'>
      | Partial<
          Pick<CreateShieldInformationBarrierReportHeadersArg, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export class GetShieldInformationBarrierReportByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetShieldInformationBarrierReportByIdHeadersArg, 'extraHeaders'>
      | Partial<
          Pick<GetShieldInformationBarrierReportByIdHeadersArg, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export class ShieldInformationBarrierReportsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      ShieldInformationBarrierReportsManager,
      | 'getShieldInformationBarrierReports'
      | 'createShieldInformationBarrierReport'
      | 'getShieldInformationBarrierReportById'
    >
  ) {
    Object.assign(this, fields);
  }
  async getShieldInformationBarrierReports(
    queryParams: GetShieldInformationBarrierReportsQueryParamsArg,
    headers: GetShieldInformationBarrierReportsHeadersArg = new GetShieldInformationBarrierReportsHeadersArg(
      {}
    )
  ): Promise<undefined> {
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
        'https://api.box.com/2.0/shield_information_barrier_reports'
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
    return void 0;
  }
  async createShieldInformationBarrierReport(
    requestBody: ShieldInformationBarrierReference,
    headers: CreateShieldInformationBarrierReportHeadersArg = new CreateShieldInformationBarrierReportHeadersArg(
      {}
    )
  ): Promise<ShieldInformationBarrierReport> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/shield_information_barrier_reports'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        body: serializeJson(
          serializeShieldInformationBarrierReference(requestBody)
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeShieldInformationBarrierReport(
      deserializeJson(response.text)
    );
  }
  async getShieldInformationBarrierReportById(
    shieldInformationBarrierReportId: string,
    headers: GetShieldInformationBarrierReportByIdHeadersArg = new GetShieldInformationBarrierReportByIdHeadersArg(
      {}
    )
  ): Promise<ShieldInformationBarrierReport> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/shield_information_barrier_reports/',
        toString(shieldInformationBarrierReportId) as string
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeShieldInformationBarrierReport(
      deserializeJson(response.text)
    );
  }
}
