import { RealtimeServer } from './realtimeServer.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface RealtimeServers {
    /**
     * The number of items in this response. */
    readonly chunkSize?: number;
    /**
     * A list of real-time servers. */
    readonly entries?: readonly RealtimeServer[];
    readonly rawData?: SerializedData;
}
export declare function serializeRealtimeServers(val: RealtimeServers): SerializedData;
export declare function deserializeRealtimeServers(val: SerializedData): RealtimeServers;
//# sourceMappingURL=realtimeServers.generated.d.ts.map