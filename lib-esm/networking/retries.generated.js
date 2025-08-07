import { random } from '../internal/utils.js';
export class BoxRetryStrategy {
    constructor(fields) {
        this.maxAttempts = 5;
        this.retryRandomizationFactor = 0.5;
        this.retryBaseInterval = 1;
        this.maxRetriesOnException = 2;
        if (fields.maxAttempts !== undefined) {
            this.maxAttempts = fields.maxAttempts;
        }
        if (fields.retryRandomizationFactor !== undefined) {
            this.retryRandomizationFactor = fields.retryRandomizationFactor;
        }
        if (fields.retryBaseInterval !== undefined) {
            this.retryBaseInterval = fields.retryBaseInterval;
        }
        if (fields.maxRetriesOnException !== undefined) {
            this.maxRetriesOnException = fields.maxRetriesOnException;
        }
    }
    /**
     * @param {FetchOptions} fetchOptions
     * @param {FetchResponse} fetchResponse
     * @param {number} attemptNumber
     * @returns {Promise<boolean>}
     */
    async shouldRetry(fetchOptions, fetchResponse, attemptNumber) {
        if (fetchResponse.status == 0) {
            return attemptNumber <= this.maxRetriesOnException;
        }
        const isSuccessful = fetchResponse.status >= 200 && fetchResponse.status < 400;
        const retryAfterHeader = fetchResponse.headers['Retry-After'];
        const isAcceptedWithRetryAfter = fetchResponse.status == 202 && !(retryAfterHeader == void 0);
        if (attemptNumber >= this.maxAttempts) {
            return false;
        }
        if (isAcceptedWithRetryAfter) {
            return true;
        }
        if (fetchResponse.status >= 500) {
            return true;
        }
        if (fetchResponse.status == 429) {
            return true;
        }
        if (fetchResponse.status == 401 && !(fetchOptions.auth == void 0)) {
            await fetchOptions.auth.refreshToken(fetchOptions.networkSession);
            return true;
        }
        if (isSuccessful) {
            return false;
        }
        return false;
    }
    /**
     * @param {FetchOptions} fetchOptions
     * @param {FetchResponse} fetchResponse
     * @param {number} attemptNumber
     * @returns {number}
     */
    retryAfter(fetchOptions, fetchResponse, attemptNumber) {
        const retryAfterHeader = fetchResponse.headers['Retry-After'];
        if (!(retryAfterHeader == void 0)) {
            return parseFloat(retryAfterHeader);
        }
        const randomization = random(1 - this.retryRandomizationFactor, 1 + this.retryRandomizationFactor);
        const exponential = 2 ** attemptNumber;
        return exponential * this.retryBaseInterval * randomization;
    }
}
//# sourceMappingURL=retries.generated.js.map