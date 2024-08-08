import { FetchOptions } from './fetch.js';
import { FetchResponse } from './fetch.js';
export interface Interceptor {
  /**
   * @param {FetchOptions} options
   * @returns {FetchOptions}
   */
  beforeRequest(options: FetchOptions): FetchOptions;
  /**
   * @param {FetchResponse} response
   * @returns {FetchResponse}
   */
  afterRequest(response: FetchResponse): FetchResponse;
}
