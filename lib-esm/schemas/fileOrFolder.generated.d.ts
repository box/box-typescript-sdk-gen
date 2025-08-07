import { File } from './file.generated.js';
import { Folder } from './folder.generated.js';
import { SerializedData } from '../serialization/json.js';
export type FileOrFolder = File | Folder;
export declare function serializeFileOrFolder(val: any): SerializedData;
export declare function deserializeFileOrFolder(val: SerializedData): FileOrFolder;
