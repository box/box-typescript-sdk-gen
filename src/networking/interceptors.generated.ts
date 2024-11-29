import { FetchOptionsInput } from './fetchOptions.generated.js';
import { FetchOptions } from './fetchOptions.generated.js';
import { FetchResponse } from './fetchResponse.generated.js';
export interface Interceptor {
  /**
   * @param {FetchOptionsInput} optionsInput
   * @returns {FetchOptions}
   */
  beforeRequest(optionsInput: FetchOptionsInput): FetchOptions;
  /**
   * @param {FetchResponse} response
   * @returns {FetchResponse}
   */
  afterRequest(response: FetchResponse): FetchResponse;
}
