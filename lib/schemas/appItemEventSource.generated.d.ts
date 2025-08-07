import { UserMini } from './userMini.generated.js';
import { GroupMini } from './groupMini.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AppItemEventSourceTypeField = 'app_item';
export declare class AppItemEventSource {
    /**
     * The id of the `AppItem`. */
    readonly id: string;
    /**
     * The type of the source that this event represents. Can only be `app_item`. */
    readonly type: AppItemEventSourceTypeField;
    /**
     * The type of the `AppItem`. */
    readonly appItemType: string;
    readonly user?: UserMini;
    readonly group?: GroupMini;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<AppItemEventSource, 'type'> & Partial<Pick<AppItemEventSource, 'type'>>);
}
export interface AppItemEventSourceInput {
    /**
     * The id of the `AppItem`. */
    readonly id: string;
    /**
     * The type of the source that this event represents. Can only be `app_item`. */
    readonly type?: AppItemEventSourceTypeField;
    /**
     * The type of the `AppItem`. */
    readonly appItemType: string;
    readonly user?: UserMini;
    readonly group?: GroupMini;
    readonly rawData?: SerializedData;
}
export declare function serializeAppItemEventSourceTypeField(val: AppItemEventSourceTypeField): SerializedData;
export declare function deserializeAppItemEventSourceTypeField(val: SerializedData): AppItemEventSourceTypeField;
export declare function serializeAppItemEventSource(val: AppItemEventSource): SerializedData;
export declare function deserializeAppItemEventSource(val: SerializedData): AppItemEventSource;
export declare function serializeAppItemEventSourceInput(val: AppItemEventSourceInput): SerializedData;
export declare function deserializeAppItemEventSourceInput(val: SerializedData): AppItemEventSourceInput;
//# sourceMappingURL=appItemEventSource.generated.d.ts.map