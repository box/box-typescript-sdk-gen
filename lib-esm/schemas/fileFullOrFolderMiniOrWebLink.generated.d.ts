import { FileFull } from './fileFull.generated.js';
import { FolderMini } from './folderMini.generated.js';
import { WebLink } from './webLink.generated.js';
import { SerializedData } from '../serialization/json.js';
export type FileFullOrFolderMiniOrWebLink = FileFull | FolderMini | WebLink;
export declare function serializeFileFullOrFolderMiniOrWebLink(val: any): SerializedData;
export declare function deserializeFileFullOrFolderMiniOrWebLink(val: SerializedData): FileFullOrFolderMiniOrWebLink;
