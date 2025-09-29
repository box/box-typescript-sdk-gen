import { FetchOptions } from './fetchOptions.generated';
import { FetchResponse } from './fetchResponse.generated';
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
