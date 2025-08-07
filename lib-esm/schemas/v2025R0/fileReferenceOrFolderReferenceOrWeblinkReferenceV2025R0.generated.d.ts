import { FileReferenceV2025R0 } from './fileReferenceV2025R0.generated.js';
import { FolderReferenceV2025R0 } from './folderReferenceV2025R0.generated.js';
import { WeblinkReferenceV2025R0 } from './weblinkReferenceV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export type FileReferenceOrFolderReferenceOrWeblinkReferenceV2025R0 = FileReferenceV2025R0 | FolderReferenceV2025R0 | WeblinkReferenceV2025R0;
export declare function serializeFileReferenceOrFolderReferenceOrWeblinkReferenceV2025R0(val: any): SerializedData;
export declare function deserializeFileReferenceOrFolderReferenceOrWeblinkReferenceV2025R0(val: SerializedData): FileReferenceOrFolderReferenceOrWeblinkReferenceV2025R0;
