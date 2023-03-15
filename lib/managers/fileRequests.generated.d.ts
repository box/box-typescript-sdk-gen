import { FileRequestUpdateRequest } from "../schemas.generated.js";
import { FileRequestCopyRequest } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type FileRequestsManagerAuthField = DeveloperTokenAuth | CcgAuth;
export interface PutFileRequestsIdOptionsArg {
    readonly ifMatch?: string;
}
export declare class FileRequestsManager {
    readonly auth: FileRequestsManagerAuthField;
    constructor(fields: Omit<FileRequestsManager, "getFileRequestsId" | "putFileRequestsId" | "deleteFileRequestsId" | "postFileRequestsIdCopy">);
    getFileRequestsId(fileRequestId: string): Promise<any>;
    putFileRequestsId(fileRequestId: string, requestBody: FileRequestUpdateRequest, options?: PutFileRequestsIdOptionsArg): Promise<any>;
    deleteFileRequestsId(fileRequestId: string): Promise<any>;
    postFileRequestsIdCopy(fileRequestId: string, requestBody: FileRequestCopyRequest): Promise<any>;
}
