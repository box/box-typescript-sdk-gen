import { FileFull } from './fileFull.generated.js';
import { FolderFull } from './folderFull.generated.js';
import { SerializedData } from '../serialization/json.js';
export type FileFullOrFolderFull = FileFull | FolderFull;
export declare function serializeFileFullOrFolderFull(val: any): SerializedData;
export declare function deserializeFileFullOrFolderFull(val: SerializedData): FileFullOrFolderFull;
//# sourceMappingURL=fileFullOrFolderFull.generated.d.ts.map