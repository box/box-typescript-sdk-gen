import { FetchOptionsInput } from './fetchOptions.generated';
import { FetchOptions } from './fetchOptions.generated';
import { FetchResponse } from './fetchResponse.generated';
export interface NetworkClient {
  /**
   * @param {FetchOptionsInput} optionsInput
   * @returns {Promise<FetchResponse>}
   */
  fetch(optionsInput: FetchOptionsInput): Promise<FetchResponse>;
}
