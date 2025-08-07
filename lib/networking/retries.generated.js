"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxRetryStrategy = void 0;
const utils_js_1 = require("../internal/utils.js");
class BoxRetryStrategy {
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
    shouldRetry(fetchOptions, fetchResponse, attemptNumber) {
        return __awaiter(this, void 0, void 0, function* () {
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
                yield fetchOptions.auth.refreshToken(fetchOptions.networkSession);
                return true;
            }
            if (isSuccessful) {
                return false;
            }
            return false;
        });
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
        const randomization = (0, utils_js_1.random)(1 - this.retryRandomizationFactor, 1 + this.retryRandomizationFactor);
        const exponential = Math.pow(2, attemptNumber);
        return exponential * this.retryBaseInterval * randomization;
    }
}
exports.BoxRetryStrategy = BoxRetryStrategy;
//# sourceMappingURL=retries.generated.js.map