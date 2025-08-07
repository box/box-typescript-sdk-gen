import { FileFull } from './fileFull.generated.js';
import { FolderFull } from './folderFull.generated.js';
import { WebLink } from './webLink.generated.js';
import { SerializedData } from '../serialization/json.js';
export type FileFullOrFolderFullOrWebLink = FileFull | FolderFull | WebLink;
export declare function serializeFileFullOrFolderFullOrWebLink(val: any): SerializedData;
export declare function deserializeFileFullOrFolderFullOrWebLink(val: SerializedData): FileFullOrFolderFullOrWebLink;
