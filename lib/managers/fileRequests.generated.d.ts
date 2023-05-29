import { FileRequestUpdateRequest } from "../schemas.generated.js";
import { FileRequestCopyRequest } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface UpdateFileRequestByIdOptionsArg {
    readonly ifMatch?: string;
}
export declare class FileRequestsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileRequestsManager, "getFileRequestById" | "updateFileRequestById" | "deleteFileRequestById" | "createFileRequestCopy">);
    getFileRequestById(fileRequestId: string): Promise<any>;
    updateFileRequestById(fileRequestId: string, requestBody: FileRequestUpdateRequest, options?: UpdateFileRequestByIdOptionsArg): Promise<any>;
    deleteFileRequestById(fileRequestId: string): Promise<any>;
    createFileRequestCopy(fileRequestId: string, requestBody: FileRequestCopyRequest): Promise<any>;
}
