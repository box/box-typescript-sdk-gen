import { FetchOptionsInput } from '../networking/fetchOptions.generated.js';
import { BoxClient } from '../client.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { FetchResponse } from '../networking/fetchResponse.generated.js';
import { Interceptor } from '../networking/interceptors.generated.js';
export declare const client: BoxClient;
export declare class InterceptorAddingRoleToFields implements Interceptor {
    constructor(fields: Omit<InterceptorAddingRoleToFields, 'beforeRequest' | 'afterRequest'>);
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
export declare class InterceptorThrowingError implements Interceptor {
    constructor(fields: Omit<InterceptorThrowingError, 'beforeRequest' | 'afterRequest'>);
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
export declare class InterceptorChangingResponse implements Interceptor {
    constructor(fields: Omit<InterceptorChangingResponse, 'beforeRequest' | 'afterRequest'>);
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
export {};
//# sourceMappingURL=client.generated.test.d.ts.map