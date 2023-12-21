import { BaseUrls } from './baseUrls.generated.js';

export class NetworkSession {
  additionalHeaders?: { readonly [key: string]: string };
  baseUrls: BaseUrls = new BaseUrls({});

  constructor(
    fields:
      | Omit<NetworkSession, 'withAdditionalHeaders' | 'withCustomBaseUrls'>
      | Partial<Pick<NetworkSession, 'baseUrls'>>
  ) {
    Object.assign(this, fields);
  }

  /**
   * Generate a fresh network session by duplicating the existing configuration and network parameters,
   * while also including additional headers to be attached to every API call.
   * @param additionalHeaders Headers, which are appended to each API request
   */
  withAdditionalHeaders(additionalHeaders: { readonly [key: string]: string }) {
    return new NetworkSession({
      additionalHeaders: { ...this.additionalHeaders, ...additionalHeaders },
      baseUrls: this.baseUrls,
    });
  }

  withCustomBaseUrls(baseUrls: BaseUrls) {
    return new NetworkSession({ ...this, baseUrls });
  }
}

// Retry intervals are between 50% and 150% of the exponentially increasing base amount
const RETRY_RANDOMIZATION_FACTOR = 0.5;

/**
 * Calculate the exponential backoff time with randomized jitter
 * @param {int} numRetries Which retry number this one will be
 * @param {int} baseInterval The base retry interval set in config
 * @returns {int} The number of milliseconds after which to retry
 */
export function getRetryTimeout(numRetries: number, baseInterval: number) {
  var minRandomization = 1 - RETRY_RANDOMIZATION_FACTOR;
  var maxRandomization = 1 + RETRY_RANDOMIZATION_FACTOR;
  var randomization =
    Math.random() * (maxRandomization - minRandomization) + minRandomization;
  var exponential = Math.pow(2, numRetries - 1);
  return Math.ceil(exponential * baseInterval * randomization);
}
