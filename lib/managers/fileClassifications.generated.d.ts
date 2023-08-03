import { Classification } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export declare class GetFileMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFileMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg);
}
export interface CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg {
    readonly boxSecurityClassificationKey?: string;
}
export declare class CreateFileMetadataEnterpriseSecurityClassificationHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateFileMetadataEnterpriseSecurityClassificationHeadersArg);
}
export declare class DeleteFileMetadataEnterpriseSecurityClassificationHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteFileMetadataEnterpriseSecurityClassificationHeadersArg);
}
export declare class FileClassificationsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileClassificationsManager, "getFileMetadataEnterpriseSecurityClassification6VmVochwUWo" | "createFileMetadataEnterpriseSecurityClassification" | "deleteFileMetadataEnterpriseSecurityClassification">);
    getFileMetadataEnterpriseSecurityClassification6VmVochwUWo(fileId: string, headers?: GetFileMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg): Promise<Classification>;
    createFileMetadataEnterpriseSecurityClassification(fileId: string, requestBody: CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg, headers?: CreateFileMetadataEnterpriseSecurityClassificationHeadersArg): Promise<Classification>;
    deleteFileMetadataEnterpriseSecurityClassification(fileId: string, headers?: DeleteFileMetadataEnterpriseSecurityClassificationHeadersArg): Promise<undefined>;
}
export declare function serializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg(val: CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg): Json;
export declare function deserializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg(val: any): CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg;
