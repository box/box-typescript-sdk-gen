import { FileRequestUpdateRequest } from './fileRequestUpdateRequest.generated.js';
import { SerializedData } from '../serialization/json.js';
export type FileRequestCopyRequestFolderTypeField = 'folder';
export interface FileRequestCopyRequestFolderField {
    /**
     * The value will always be `folder`. */
    readonly type?: FileRequestCopyRequestFolderTypeField;
    /**
     * The ID of the folder to associate the new
     * file request to. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export type FileRequestCopyRequest = FileRequestUpdateRequest & {
    /**
     * The folder to associate the new file request to. */
    readonly folder: FileRequestCopyRequestFolderField;
};
export declare function serializeFileRequestCopyRequestFolderTypeField(val: FileRequestCopyRequestFolderTypeField): SerializedData;
export declare function deserializeFileRequestCopyRequestFolderTypeField(val: SerializedData): FileRequestCopyRequestFolderTypeField;
export declare function serializeFileRequestCopyRequestFolderField(val: FileRequestCopyRequestFolderField): SerializedData;
export declare function deserializeFileRequestCopyRequestFolderField(val: SerializedData): FileRequestCopyRequestFolderField;
export declare function serializeFileRequestCopyRequest(val: FileRequestCopyRequest): SerializedData;
export declare function deserializeFileRequestCopyRequest(val: SerializedData): FileRequestCopyRequest;
//# sourceMappingURL=fileRequestCopyRequest.generated.d.ts.map