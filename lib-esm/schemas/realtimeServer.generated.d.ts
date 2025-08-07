import { SerializedData } from '../serialization/json.js';
export interface RealtimeServer {
    /**
     * The value will always be `realtime_server`. */
    readonly type?: string;
    /**
     * The URL for the server. */
    readonly url?: string;
    /**
     * The time in minutes for which this server is available. */
    readonly ttl?: string;
    /**
     * The maximum number of retries this server will
     * allow before a new long poll should be started by
     * getting a [new list of server](#options-events). */
    readonly maxRetries?: string;
    /**
     * The maximum number of seconds without a response
     * after which you should retry the long poll connection.
     *
     * This helps to overcome network issues where the long
     * poll looks to be working but no packages are coming
     * through. */
    readonly retryTimeout?: number;
    readonly rawData?: SerializedData;
}
export declare function serializeRealtimeServer(val: RealtimeServer): SerializedData;
export declare function deserializeRealtimeServer(val: SerializedData): RealtimeServer;
