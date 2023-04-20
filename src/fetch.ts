import nodeFetch from 'node-fetch';
import { CcgAuth } from './ccgAuth.js';
import { DeveloperTokenAuth } from './developerTokenAuth.js';

export interface MultipartItem {
  readonly partName: string;
  readonly body?: string;
  readonly fileStream?: any;
  readonly fileName?: string;
  readonly contentType?: string;
}

export interface FetchOptions {
  /**
   * A string to set request's method (GET, POST, etc.). Defaults to GET.
   */
  readonly method?: string;
  /**
   * [key1, value1, key2, value2, ...]
   */
  readonly headers?: { [key: string]: string | null | undefined };
  /**
   * query params
   * [key1, value1, key2, value2, ...]
   */
  readonly params?: {
    [key: string]: string | number | boolean | null | undefined;
  };

  /**
   * Request body
   */
  readonly body?: string;

  /**
   * Parts of multipart data
   */
  readonly multipartData?: MultipartItem[];

  /**
   * Request body content type
   */
  readonly contentType?: string;

  /**
   * Auth object
   */
  readonly auth?: CcgAuth | DeveloperTokenAuth;
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
  const { method = 'GET', headers = {}, params = {}, body } = options;

  const response = await nodeFetch(
    ''.concat(
      resource,
      Object.keys(params).length === 0 || resource.endsWith('?') ? '' : '?',
      new URLSearchParams(
        Object.fromEntries(
          Object.entries(params)
            .map<[string, string | null | undefined]>(([key, value]) => {
              if (typeof value === 'string' || value == null) {
                return [key, value];
              }
              return [key, String(value)];
            })
            .filter<[string, string]>(
              (entry): entry is [string, string] => typeof entry[1] === 'string'
            )
        )
      ).toString()
    ),
    {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...Object.fromEntries(
          Object.entries(params).filter<[string, string]>(
            (entry): entry is [string, string] => typeof entry[1] === 'string'
          )
        ),
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
