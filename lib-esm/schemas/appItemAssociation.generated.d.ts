import { AppItem } from './appItem.generated.js';
import { FileBaseOrFolderBaseOrWebLinkBase } from './fileBaseOrFolderBaseOrWebLinkBase.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AppItemAssociationTypeField = 'app_item_association';
export declare class AppItemAssociation {
    /**
     * The unique identifier for this app item association. */
    readonly id: string;
    /**
     * The value will always be `app_item_association`. */
    readonly type: AppItemAssociationTypeField;
    readonly appItem: AppItem;
    readonly item: FileBaseOrFolderBaseOrWebLinkBase;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<AppItemAssociation, 'type'> & Partial<Pick<AppItemAssociation, 'type'>>);
}
export interface AppItemAssociationInput {
    /**
     * The unique identifier for this app item association. */
    readonly id: string;
    /**
     * The value will always be `app_item_association`. */
    readonly type?: AppItemAssociationTypeField;
    readonly appItem: AppItem;
    readonly item: FileBaseOrFolderBaseOrWebLinkBase;
    readonly rawData?: SerializedData;
}
export declare function serializeAppItemAssociationTypeField(val: AppItemAssociationTypeField): SerializedData;
export declare function deserializeAppItemAssociationTypeField(val: SerializedData): AppItemAssociationTypeField;
export declare function serializeAppItemAssociation(val: AppItemAssociation): SerializedData;
export declare function deserializeAppItemAssociation(val: SerializedData): AppItemAssociation;
export declare function serializeAppItemAssociationInput(val: AppItemAssociationInput): SerializedData;
export declare function deserializeAppItemAssociationInput(val: SerializedData): AppItemAssociationInput;
