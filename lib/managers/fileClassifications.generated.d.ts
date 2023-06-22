import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg {
    readonly boxSecurityClassificationKey?: string;
}
export declare class FileClassificationsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileClassificationsManager, "getFileMetadataEnterpriseSecurityClassification6VmVochwUWo" | "createFileMetadataEnterpriseSecurityClassification" | "deleteFileMetadataEnterpriseSecurityClassification">);
    getFileMetadataEnterpriseSecurityClassification6VmVochwUWo(fileId: string): Promise<any>;
    createFileMetadataEnterpriseSecurityClassification(fileId: string, requestBody: CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg): Promise<any>;
    deleteFileMetadataEnterpriseSecurityClassification(fileId: string): Promise<any>;
}
