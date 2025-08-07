import { SerializedData } from '../serialization/json.js';
import { GeneratedCodeError } from '../internal/errors.js';
import { utilLib } from '../internal/utils.js';
import { DataSanitizer } from '../internal/logging.generated';
export declare class BoxSdkError extends GeneratedCodeError {
    readonly timestamp?: string;
    readonly error?: Error;
    constructor(fields: Pick<BoxSdkError, 'message' | 'timestamp' | 'error'>);
}
export interface RequestInfo {
    readonly method: string;
    readonly url: string;
    readonly queryParams: {
        readonly [key: string]: string;
    };
    readonly headers: {
        readonly [key: string]: string;
    };
    readonly body?: any;
}
export interface ResponseInfo {
    readonly statusCode: number;
    readonly headers: {
        readonly [key: string]: string;
    };
    readonly body?: SerializedData;
    readonly rawBody?: string;
    readonly code?: string;
    readonly contextInfo?: {
        readonly [key: string]: any;
    };
    readonly requestId?: string;
    readonly helpUrl?: string;
}
export declare class BoxApiError extends BoxSdkError {
    readonly requestInfo: RequestInfo;
    readonly responseInfo: ResponseInfo;
    readonly dataSanitizer: DataSanitizer;
    constructor(fields: Pick<BoxApiError, 'message' | 'timestamp' | 'error' | 'requestInfo' | 'responseInfo' | 'dataSanitizer'>);
    [utilLib.inspect.custom](): string;
    toString(): string;
    toJSON(): {
        name: string;
        message: string;
        timestamp: string | undefined;
        error: Error | undefined;
        requestInfo: {
            method: string;
            url: string;
            queryParams: {
                readonly [key: string]: string;
            };
            headers: {
                readonly [key: string]: string;
            };
            body: any;
        };
        responseInfo: {
            statusCode: number;
            headers: {
                readonly [key: string]: string;
            };
            body: SerializedData;
            code: string | undefined;
            contextInfo: {
                readonly [key: string]: any;
            } | undefined;
            requestId: string | undefined;
            helpUrl: string | undefined;
        };
    };
}
//# sourceMappingURL=errors.d.ts.map