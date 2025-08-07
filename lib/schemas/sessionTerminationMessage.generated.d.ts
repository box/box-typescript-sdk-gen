import { SerializedData } from '../serialization/json.js';
export interface SessionTerminationMessage {
    /**
     * The unique identifier for the termination job status. */
    readonly message?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeSessionTerminationMessage(val: SessionTerminationMessage): SerializedData;
export declare function deserializeSessionTerminationMessage(val: SerializedData): SessionTerminationMessage;
//# sourceMappingURL=sessionTerminationMessage.generated.d.ts.map