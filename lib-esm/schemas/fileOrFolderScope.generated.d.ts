import { FileMiniOrFolderMini } from './fileMiniOrFolderMini.generated.js';
import { SerializedData } from '../serialization/json.js';
export type FileOrFolderScopeScopeField = 'annotation_edit' | 'annotation_view_all' | 'annotation_view_self' | 'base_explorer' | 'base_picker' | 'base_preview' | 'base_upload' | 'item_delete' | 'item_download' | 'item_preview' | 'item_rename' | 'item_share' | 'item_upload' | 'item_read' | string;
export interface FileOrFolderScope {
    /**
     * The scopes for the resource access. */
    readonly scope?: FileOrFolderScopeScopeField;
    readonly object?: FileMiniOrFolderMini;
    readonly rawData?: SerializedData;
}
export declare function serializeFileOrFolderScopeScopeField(val: FileOrFolderScopeScopeField): SerializedData;
export declare function deserializeFileOrFolderScopeScopeField(val: SerializedData): FileOrFolderScopeScopeField;
export declare function serializeFileOrFolderScope(val: FileOrFolderScope): SerializedData;
export declare function deserializeFileOrFolderScope(val: SerializedData): FileOrFolderScope;
