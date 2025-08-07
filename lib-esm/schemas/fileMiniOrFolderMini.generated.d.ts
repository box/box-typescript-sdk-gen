import { FileMini } from './fileMini.generated.js';
import { FolderMini } from './folderMini.generated.js';
import { SerializedData } from '../serialization/json.js';
export type FileMiniOrFolderMini = FileMini | FolderMini;
export declare function serializeFileMiniOrFolderMini(val: any): SerializedData;
export declare function deserializeFileMiniOrFolderMini(val: SerializedData): FileMiniOrFolderMini;
