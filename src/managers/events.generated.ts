import { serializeEvents } from '../schemas.generated.js';
import { deserializeEvents } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeRealtimeServers } from '../schemas.generated.js';
import { deserializeRealtimeServers } from '../schemas.generated.js';
import { Events } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { RealtimeServers } from '../schemas.generated.js';
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
import { isJson } from '../json.js';
export type GetEventsQueryParamsArgStreamTypeField =
  | 'all'
  | 'changes'
  | 'sync'
  | 'admin_logs'
  | 'admin_logs_streaming';
export interface GetEventsQueryParamsArg {
  readonly streamType?: GetEventsQueryParamsArgStreamTypeField;
  readonly streamPosition?: string;
  readonly limit?: number;
  readonly eventType?: string;
  readonly createdAfter?: string;
  readonly createdBefore?: string;
}
export class GetEventsHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: GetEventsHeadersArg) {
    Object.assign(this, fields);
  }
}
export class GetEventsWithLongPollingHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: GetEventsWithLongPollingHeadersArg) {
    Object.assign(this, fields);
  }
}
export class EventsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<EventsManager, 'getEvents' | 'getEventsWithLongPolling'>
  ) {
    Object.assign(this, fields);
  }
  async getEvents(
    queryParams: GetEventsQueryParamsArg = {} satisfies GetEventsQueryParamsArg,
    headers: GetEventsHeadersArg = new GetEventsHeadersArg({})
  ): Promise<Events> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['stream_type']: toString(queryParams.streamType),
      ['stream_position']: toString(queryParams.streamPosition),
      ['limit']: toString(queryParams.limit),
      ['event_type']: toString(queryParams.eventType),
      ['created_after']: toString(queryParams.createdAfter),
      ['created_before']: toString(queryParams.createdBefore),
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/events') as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeEvents(deserializeJson(response.text));
  }
  async getEventsWithLongPolling(
    headers: GetEventsWithLongPollingHeadersArg = new GetEventsWithLongPollingHeadersArg(
      {}
    )
  ): Promise<RealtimeServers> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/events') as string,
      {
        method: 'OPTIONS',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeRealtimeServers(deserializeJson(response.text));
  }
}
export function serializeGetEventsQueryParamsArgStreamTypeField(
  val: GetEventsQueryParamsArgStreamTypeField
): Json {
  return val;
}
export function deserializeGetEventsQueryParamsArgStreamTypeField(
  val: any
): GetEventsQueryParamsArgStreamTypeField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "GetEventsQueryParamsArgStreamTypeField"';
  }
  if (val == 'all') {
    return 'all';
  }
  if (val == 'changes') {
    return 'changes';
  }
  if (val == 'sync') {
    return 'sync';
  }
  if (val == 'admin_logs') {
    return 'admin_logs';
  }
  if (val == 'admin_logs_streaming') {
    return 'admin_logs_streaming';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
