import { SerializedData } from '../serialization/json.js';
export type ClientErrorTypeField = 'error';
export type ClientErrorCodeField = 'created' | 'accepted' | 'no_content' | 'redirect' | 'not_modified' | 'bad_request' | 'unauthorized' | 'forbidden' | 'not_found' | 'method_not_allowed' | 'conflict' | 'precondition_failed' | 'too_many_requests' | 'internal_server_error' | 'unavailable' | 'item_name_invalid' | 'insufficient_scope' | string;
export interface ClientError {
    /**
     * The value will always be `error`. */
    readonly type?: ClientErrorTypeField;
    /**
     * The HTTP status of the response. */
    readonly status?: number;
    /**
     * A Box-specific error code. */
    readonly code?: ClientErrorCodeField;
    /**
     * A short message describing the error. */
    readonly message?: string;
    /**
     * A free-form object that contains additional context
     * about the error. The possible fields are defined on
     * a per-endpoint basis. `message` is only one example. */
    readonly contextInfo?: {
        readonly [key: string]: any;
    } | null;
    /**
     * A URL that links to more information about why this error occurred. */
    readonly helpUrl?: string;
    /**
     * A unique identifier for this response, which can be used
     * when contacting Box support. */
    readonly requestId?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeClientErrorTypeField(val: ClientErrorTypeField): SerializedData;
export declare function deserializeClientErrorTypeField(val: SerializedData): ClientErrorTypeField;
export declare function serializeClientErrorCodeField(val: ClientErrorCodeField): SerializedData;
export declare function deserializeClientErrorCodeField(val: SerializedData): ClientErrorCodeField;
export declare function serializeClientError(val: ClientError): SerializedData;
export declare function deserializeClientError(val: SerializedData): ClientError;
//# sourceMappingURL=clientError.generated.d.ts.map