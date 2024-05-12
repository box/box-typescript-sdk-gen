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
export function deserializeRealtimeServer(val: any): RealtimeServer {
  const type: undefined | string = val.type == void 0 ? void 0 : val.type;
  const url: undefined | string = val.url == void 0 ? void 0 : val.url;
  const ttl: undefined | number = val.ttl == void 0 ? void 0 : val.ttl;
  const maxRetries: undefined | number =
    val.max_retries == void 0 ? void 0 : val.max_retries;
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
