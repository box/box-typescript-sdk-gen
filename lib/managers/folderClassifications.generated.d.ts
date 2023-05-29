import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg {
    readonly boxSecurityClassificationKey?: string;
}
export declare class FolderClassificationsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FolderClassificationsManager, "getFolderMetadataEnterpriseSecurityClassification6VmVochwUWo" | "createFolderMetadataEnterpriseSecurityClassification" | "deleteFolderMetadataEnterpriseSecurityClassification">);
    getFolderMetadataEnterpriseSecurityClassification6VmVochwUWo(folderId: string): Promise<any>;
    createFolderMetadataEnterpriseSecurityClassification(folderId: string, requestBody: CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg): Promise<any>;
    deleteFolderMetadataEnterpriseSecurityClassification(folderId: string): Promise<any>;
}
