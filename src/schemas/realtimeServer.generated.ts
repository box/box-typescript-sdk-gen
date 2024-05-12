import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface RealtimeServer {
  readonly type?: string;
  readonly url?: string;
  readonly ttl?: number;
  readonly maxRetries?: number;
  readonly retryTimeout?: number;
}
export function serializeRealtimeServer(val: RealtimeServer): SerializedData {
  return {
    ['type']: val.type == void 0 ? void 0 : val.type,
    ['url']: val.url == void 0 ? void 0 : val.url,
    ['ttl']: val.ttl == void 0 ? void 0 : val.ttl,
    ['max_retries']: val.maxRetries == void 0 ? void 0 : val.maxRetries,
    ['retry_timeout']: val.retryTimeout == void 0 ? void 0 : val.retryTimeout,
  };
}
export function deserializeRealtimeServer(val: SerializedData): RealtimeServer {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "RealtimeServer"' });
  }
  if (!(val.type == void 0) && !sdIsString(val.type)) {
    throw new BoxSdkError({
      message: 'Expecting string for "type" of type "RealtimeServer"',
    });
  }
  const type: undefined | string = val.type == void 0 ? void 0 : val.type;
  if (!(val.url == void 0) && !sdIsString(val.url)) {
    throw new BoxSdkError({
      message: 'Expecting string for "url" of type "RealtimeServer"',
    });
  }
  const url: undefined | string = val.url == void 0 ? void 0 : val.url;
  if (!(val.ttl == void 0) && !sdIsNumber(val.ttl)) {
    throw new BoxSdkError({
      message: 'Expecting number for "ttl" of type "RealtimeServer"',
    });
  }
  const ttl: undefined | number = val.ttl == void 0 ? void 0 : val.ttl;
  if (!(val.max_retries == void 0) && !sdIsNumber(val.max_retries)) {
    throw new BoxSdkError({
      message: 'Expecting number for "max_retries" of type "RealtimeServer"',
    });
  }
  const maxRetries: undefined | number =
    val.max_retries == void 0 ? void 0 : val.max_retries;
  if (!(val.retry_timeout == void 0) && !sdIsNumber(val.retry_timeout)) {
    throw new BoxSdkError({
      message: 'Expecting number for "retry_timeout" of type "RealtimeServer"',
    });
  }
  const retryTimeout: undefined | number =
    val.retry_timeout == void 0 ? void 0 : val.retry_timeout;
  return {
    type: type,
    url: url,
    ttl: ttl,
    maxRetries: maxRetries,
    retryTimeout: retryTimeout,
  } satisfies RealtimeServer;
}
