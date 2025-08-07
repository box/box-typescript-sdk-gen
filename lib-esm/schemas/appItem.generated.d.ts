import { SerializedData } from '../serialization/json.js';
export type AppItemTypeField = 'app_item';
export declare class AppItem {
    /**
     * The unique identifier for this app item. */
    readonly id: string;
    /**
     * The value will always be `app_item`. */
    readonly type: AppItemTypeField;
    /**
     * The type of the app that owns this app item. */
    readonly applicationType: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<AppItem, 'type'> & Partial<Pick<AppItem, 'type'>>);
}
export interface AppItemInput {
    /**
     * The unique identifier for this app item. */
    readonly id: string;
    /**
     * The value will always be `app_item`. */
    readonly type?: AppItemTypeField;
    /**
     * The type of the app that owns this app item. */
    readonly applicationType: string;
    readonly rawData?: SerializedData;
}
export declare function serializeAppItemTypeField(val: AppItemTypeField): SerializedData;
export declare function deserializeAppItemTypeField(val: SerializedData): AppItemTypeField;
export declare function serializeAppItem(val: AppItem): SerializedData;
export declare function deserializeAppItem(val: SerializedData): AppItem;
export declare function serializeAppItemInput(val: AppItemInput): SerializedData;
export declare function deserializeAppItemInput(val: SerializedData): AppItemInput;
