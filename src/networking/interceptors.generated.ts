import { FetchOptions } from './fetch.js';
import { FetchResponse } from './fetch.js';
export interface Interceptor {
  beforeRequest(options: FetchOptions): FetchOptions;
  afterRequest(response: FetchResponse): FetchResponse;
}
