import Immutable from 'immutable';
import nodeFetch from 'node-fetch';
import { CCGAuth } from './ccgAuth.js';
import { DeveloperTokenAuth } from './developerTokenAuth.js';

export interface FetchOptions {
  /**
   * A string to set request's method (GET, POST, etc.). Defaults to GET.
   */
  readonly method?: string;
  /**
   * [key1, value1, key2, value2, ...]
   */
  readonly headers?: Immutable.Map<string, string | null | undefined>;
  /**
   * query params
   * [key1, value1, key2, value2, ...]
   */
  readonly params?: Immutable.Map<string, string | number | null | undefined>;

  /**
   * Request body
   */
  readonly body?: string;

  /**
   * Auth object
   */
  readonly auth?: CCGAuth | DeveloperTokenAuth;
}

export interface FetchResponse {
  /**
   * The status code of the response. (This will be 200 for a success).
   */
  readonly status: number;

  /**
   * Text representation of the response body
   */
  readonly text: string;

  /**
   * Binary array buffer of response body
   */
  readonly content: ArrayBuffer;
}

export async function fetch(
  resource: string,
  options: FetchOptions
): Promise<FetchResponse> {
  const {
    method = 'GET',
    headers = Immutable.Map([]),
    params = Immutable.Map([]),
    body,
  } = options;

  const response = await nodeFetch(
    ''.concat(
      resource,
      !params.size || resource.endsWith('?') ? '' : '?',
      new URLSearchParams(
        params
          .map((value) =>
            value && typeof value !== 'string' ? String(value) : value
          )
          .filter<string>((value): value is string => typeof value === 'string')
          .toObject()
      ).toString()
    ),
    {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
          .filter<string>((value): value is string => typeof value === 'string')
          .toObject(),
        ...(options.auth && {
          Authorization: `Bearer ${await options.auth.retrieveToken()}`,
        }),
      },
      body,
    }
  );

  const responseBytesBuffer = await response.arrayBuffer();
  return {
    status: response.status,
    text: new TextDecoder().decode(responseBytesBuffer),
    content: responseBytesBuffer,
  };
}
