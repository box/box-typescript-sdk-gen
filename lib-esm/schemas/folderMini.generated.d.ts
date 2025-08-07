import { FolderBase } from './folderBase.generated.js';
import { SerializedData } from '../serialization/json.js';
export declare class FolderMini extends FolderBase {
    readonly sequenceId?: string;
    readonly name?: string;
    constructor(fields: Omit<FolderMini, 'type'> & Partial<Pick<FolderMini, 'type'>>);
}
export declare function serializeFolderMini(val: FolderMini): SerializedData;
export declare function deserializeFolderMini(val: SerializedData): FolderMini;
