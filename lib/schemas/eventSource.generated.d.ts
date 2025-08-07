import { FolderMini } from './folderMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { SerializedData } from '../serialization/json.js';
export type EventSourceItemTypeField = 'file' | 'folder';
export interface EventSourceClassificationField {
    /**
     * The classification's name. */
    readonly name?: string;
    readonly rawData?: SerializedData;
}
export interface EventSource {
    /**
     * The type of the item that the event
     * represents. Can be `file` or `folder`. */
    readonly itemType: EventSourceItemTypeField;
    /**
     * The unique identifier that represents the
     * item. */
    readonly itemId: string;
    /**
     * The name of the item. */
    readonly itemName: string;
    /**
     * The object containing classification information for the item that
     * triggered the event. This field will not appear if the item does not
     * have a classification set. */
    readonly classification?: EventSourceClassificationField;
    readonly parent?: FolderMini | null;
    readonly ownedBy?: UserMini;
    readonly rawData?: SerializedData;
}
export declare function serializeEventSourceItemTypeField(val: EventSourceItemTypeField): SerializedData;
export declare function deserializeEventSourceItemTypeField(val: SerializedData): EventSourceItemTypeField;
export declare function serializeEventSourceClassificationField(val: EventSourceClassificationField): SerializedData;
export declare function deserializeEventSourceClassificationField(val: SerializedData): EventSourceClassificationField;
export declare function serializeEventSource(val: EventSource): SerializedData;
export declare function deserializeEventSource(val: SerializedData): EventSource;
//# sourceMappingURL=eventSource.generated.d.ts.map