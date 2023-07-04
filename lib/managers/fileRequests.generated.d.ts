import { FileRequest } from "../schemas.generated.js";
import { FileRequestUpdateRequest } from "../schemas.generated.js";
import { FileRequestCopyRequest } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface UpdateFileRequestByIdHeadersArg {
    readonly ifMatch?: string;
}
export declare class FileRequestsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileRequestsManager, "getFileRequestById" | "updateFileRequestById" | "deleteFileRequestById" | "createFileRequestCopy">);
    getFileRequestById(fileRequestId: string): Promise<FileRequest>;
    updateFileRequestById(fileRequestId: string, requestBody: FileRequestUpdateRequest, headers?: undefined | UpdateFileRequestByIdHeadersArg): Promise<FileRequest>;
    deleteFileRequestById(fileRequestId: string): Promise<any>;
    createFileRequestCopy(fileRequestId: string, requestBody: FileRequestCopyRequest): Promise<FileRequest>;
}
export declare function newSerializeUpdateFileRequestByIdHeadersArg(val: UpdateFileRequestByIdHeadersArg): Json;
export declare function newDeserializeUpdateFileRequestByIdHeadersArg(val: any): UpdateFileRequestByIdHeadersArg;
