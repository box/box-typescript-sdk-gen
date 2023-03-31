import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type FolderClassificationsManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface CreateFolderMetadataEnterpriseSecurityClassification6VmVochwUWoRequestBodyArg {
    readonly boxSecurityClassificationKey?: string;
}
export declare class FolderClassificationsManager {
    readonly auth: FolderClassificationsManagerAuthField;
    constructor(fields: Omit<FolderClassificationsManager, "getFolderMetadataEnterpriseSecurityClassification6VmVochwUWo" | "createFolderMetadataEnterpriseSecurityClassification6VmVochwUWo" | "deleteFolderMetadataEnterpriseSecurityClassification6VmVochwUWo">);
    getFolderMetadataEnterpriseSecurityClassification6VmVochwUWo(folderId: string): Promise<any>;
    createFolderMetadataEnterpriseSecurityClassification6VmVochwUWo(folderId: string, requestBody: CreateFolderMetadataEnterpriseSecurityClassification6VmVochwUWoRequestBodyArg): Promise<any>;
    deleteFolderMetadataEnterpriseSecurityClassification6VmVochwUWo(folderId: string): Promise<any>;
}
