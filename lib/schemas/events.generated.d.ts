import { Event } from './event.generated.js';
import { SerializedData } from '../serialization/json.js';
export type EventsNextStreamPositionField = string | number;
export interface Events {
    /**
     * The number of events returned in this response. */
    readonly chunkSize?: number;
    /**
     * The stream position of the start of the next page (chunk)
     * of events. */
    readonly nextStreamPosition?: EventsNextStreamPositionField;
    /**
     * A list of events. */
    readonly entries?: readonly Event[];
    readonly rawData?: SerializedData;
}
export declare function serializeEventsNextStreamPositionField(val: any): SerializedData;
export declare function deserializeEventsNextStreamPositionField(val: SerializedData): EventsNextStreamPositionField;
export declare function serializeEvents(val: Events): SerializedData;
export declare function deserializeEvents(val: SerializedData): Events;
//# sourceMappingURL=events.generated.d.ts.map