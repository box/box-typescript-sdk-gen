import { Classification } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg {
    readonly boxSecurityClassificationKey?: string;
}
export declare class FileClassificationsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileClassificationsManager, "getFileMetadataEnterpriseSecurityClassification6VmVochwUWo" | "createFileMetadataEnterpriseSecurityClassification" | "deleteFileMetadataEnterpriseSecurityClassification">);
    getFileMetadataEnterpriseSecurityClassification6VmVochwUWo(fileId: string): Promise<Classification>;
    createFileMetadataEnterpriseSecurityClassification(fileId: string, requestBody: CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg): Promise<Classification>;
    deleteFileMetadataEnterpriseSecurityClassification(fileId: string): Promise<any>;
}
export declare function serializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg(val: CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg): Json;
export declare function deserializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg(val: any): CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg;
