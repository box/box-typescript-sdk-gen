import { FetchOptions } from './fetchOptions.generated.js';
import { FetchResponse } from './fetchResponse.generated.js';
export interface RetryStrategy {
    /**
     * @param {FetchOptions} fetchOptions
     * @param {FetchResponse} fetchResponse
     * @param {number} attemptNumber
     * @returns {Promise<boolean>}
     */
    shouldRetry(fetchOptions: FetchOptions, fetchResponse: FetchResponse, attemptNumber: number): Promise<boolean>;
    /**
     * @param {FetchOptions} fetchOptions
     * @param {FetchResponse} fetchResponse
     * @param {number} attemptNumber
     * @returns {number}
     */
    retryAfter(fetchOptions: FetchOptions, fetchResponse: FetchResponse, attemptNumber: number): number;
}
export declare class BoxRetryStrategy implements RetryStrategy {
    readonly maxAttempts: number;
    readonly retryRandomizationFactor: number;
    readonly retryBaseInterval: number;
    readonly maxRetriesOnException: number;
    constructor(fields: Omit<BoxRetryStrategy, 'maxAttempts' | 'retryRandomizationFactor' | 'retryBaseInterval' | 'maxRetriesOnException' | 'shouldRetry' | 'retryAfter'> & Partial<Pick<BoxRetryStrategy, 'maxAttempts' | 'retryRandomizationFactor' | 'retryBaseInterval' | 'maxRetriesOnException'>>);
    /**
     * @param {FetchOptions} fetchOptions
     * @param {FetchResponse} fetchResponse
     * @param {number} attemptNumber
     * @returns {Promise<boolean>}
     */
    shouldRetry(fetchOptions: FetchOptions, fetchResponse: FetchResponse, attemptNumber: number): Promise<boolean>;
    /**
     * @param {FetchOptions} fetchOptions
     * @param {FetchResponse} fetchResponse
     * @param {number} attemptNumber
     * @returns {number}
     */
    retryAfter(fetchOptions: FetchOptions, fetchResponse: FetchResponse, attemptNumber: number): number;
}
//# sourceMappingURL=retries.generated.d.ts.map