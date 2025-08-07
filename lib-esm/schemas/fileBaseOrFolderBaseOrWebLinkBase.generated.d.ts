import { FileBase } from './fileBase.generated.js';
import { FolderBase } from './folderBase.generated.js';
import { WebLinkBase } from './webLinkBase.generated.js';
import { SerializedData } from '../serialization/json.js';
export type FileBaseOrFolderBaseOrWebLinkBase = FileBase | FolderBase | WebLinkBase;
export declare function serializeFileBaseOrFolderBaseOrWebLinkBase(val: any): SerializedData;
export declare function deserializeFileBaseOrFolderBaseOrWebLinkBase(val: SerializedData): FileBaseOrFolderBaseOrWebLinkBase;
