import { ByteStream } from '../internal/utils';
import { NetworkClient } from './networkClient.generated';
import { SerializedData } from '../serialization/json';
import { FetchOptions } from './fetchOptions.generated';
import { FetchResponse } from './fetchResponse.generated';
export declare const userAgentHeader: string;
export declare const xBoxUaHeader: string;
export declare const shouldIncludeBoxUaHeader: (options: FetchOptions) => boolean;
export interface MultipartItem {
    readonly partName: string;
    readonly data?: SerializedData;
    readonly fileStream?: ByteStream;
    readonly fileName?: string;
    readonly contentType?: string;
}
type FetchOptionsExtended = FetchOptions & {
    attemptNumber?: number;
    numberOfRetriesOnException?: number;
};
export declare class BoxNetworkClient implements NetworkClient {
    constructor(fields?: Omit<BoxNetworkClient, 'fetch'> & Partial<Pick<BoxNetworkClient, 'fetch'>>);
    fetch(options: FetchOptionsExtended): Promise<FetchResponse>;
}
/**
 * Calculate the exponential backoff time with randomized jitter
 * @param {int} numRetries Which retry number this one will be
 * @param {int} baseInterval The base retry interval set in config
 * @returns {int} The number of milliseconds after which to retry
 */
export declare function getRetryTimeout(numRetries: number, baseInterval: number): number;
export {};
//# sourceMappingURL=boxNetworkClient.d.ts.map