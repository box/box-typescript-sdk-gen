import { SerializedData } from '../../serialization/json.js';
export type ClientErrorV2025R0TypeField = 'error';
export type ClientErrorV2025R0CodeField = 'created' | 'accepted' | 'no_content' | 'redirect' | 'not_modified' | 'bad_request' | 'unauthorized' | 'forbidden' | 'not_found' | 'method_not_allowed' | 'conflict' | 'precondition_failed' | 'too_many_requests' | 'internal_server_error' | 'unavailable' | 'item_name_invalid' | 'insufficient_scope' | string;
export interface ClientErrorV2025R0 {
    /**
     * The value will always be `error`. */
    readonly type?: ClientErrorV2025R0TypeField;
    /**
     * The HTTP status of the response. */
    readonly status?: number;
    /**
     * A Box-specific error code. */
    readonly code?: ClientErrorV2025R0CodeField;
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
export declare function serializeClientErrorV2025R0TypeField(val: ClientErrorV2025R0TypeField): SerializedData;
export declare function deserializeClientErrorV2025R0TypeField(val: SerializedData): ClientErrorV2025R0TypeField;
export declare function serializeClientErrorV2025R0CodeField(val: ClientErrorV2025R0CodeField): SerializedData;
export declare function deserializeClientErrorV2025R0CodeField(val: SerializedData): ClientErrorV2025R0CodeField;
export declare function serializeClientErrorV2025R0(val: ClientErrorV2025R0): SerializedData;
export declare function deserializeClientErrorV2025R0(val: SerializedData): ClientErrorV2025R0;
