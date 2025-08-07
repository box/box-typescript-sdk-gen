import { File } from './file.generated.js';
import { Folder } from './folder.generated.js';
import { WebLink } from './webLink.generated.js';
import { SerializedData } from '../serialization/json.js';
export type FileOrFolderOrWebLink = File | Folder | WebLink;
export declare function serializeFileOrFolderOrWebLink(val: any): SerializedData;
export declare function deserializeFileOrFolderOrWebLink(val: SerializedData): FileOrFolderOrWebLink;
//# sourceMappingURL=fileOrFolderOrWebLink.generated.d.ts.map