import { FileFullOrFolderFullOrWebLink } from './fileFullOrFolderFullOrWebLink.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface SearchResultWithSharedLink {
    /**
     * The optional shared link through which the user has access to this
     * item. This value is only returned for items for which the user has
     * recently accessed the file through a shared link. For all other
     * items this value will return `null`. */
    readonly accessibleViaSharedLink?: string;
    readonly item?: FileFullOrFolderFullOrWebLink;
    /**
     * The result type. The value is always `search_result`. */
    readonly type?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeSearchResultWithSharedLink(val: SearchResultWithSharedLink): SerializedData;
export declare function deserializeSearchResultWithSharedLink(val: SerializedData): SearchResultWithSharedLink;
