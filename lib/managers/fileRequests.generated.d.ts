import { FileRequest } from "../schemas.generated.js";
import { FileRequestUpdateRequest } from "../schemas.generated.js";
import { FileRequestCopyRequest } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export declare class GetFileRequestByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFileRequestByIdHeadersArg);
}
export declare class UpdateFileRequestByIdHeadersArg {
    readonly ifMatch?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UpdateFileRequestByIdHeadersArg);
}
export declare class DeleteFileRequestByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteFileRequestByIdHeadersArg);
}
export declare class CreateFileRequestCopyHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateFileRequestCopyHeadersArg);
}
export declare class FileRequestsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileRequestsManager, "getFileRequestById" | "updateFileRequestById" | "deleteFileRequestById" | "createFileRequestCopy">);
    getFileRequestById(fileRequestId: string, headers?: GetFileRequestByIdHeadersArg): Promise<FileRequest>;
    updateFileRequestById(fileRequestId: string, requestBody: FileRequestUpdateRequest, headers?: UpdateFileRequestByIdHeadersArg): Promise<FileRequest>;
    deleteFileRequestById(fileRequestId: string, headers?: DeleteFileRequestByIdHeadersArg): Promise<undefined>;
    createFileRequestCopy(fileRequestId: string, requestBody: FileRequestCopyRequest, headers?: CreateFileRequestCopyHeadersArg): Promise<FileRequest>;
}
