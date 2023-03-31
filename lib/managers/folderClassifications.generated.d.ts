import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type FolderClassificationsManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg {
    readonly boxSecurityClassificationKey?: string;
}
export declare class FolderClassificationsManager {
    readonly auth: FolderClassificationsManagerAuthField;
    constructor(fields: Omit<FolderClassificationsManager, "getFolderMetadataEnterpriseSecurityClassification6VmVochwUWo" | "createFolderMetadataEnterpriseSecurityClassification" | "deleteFolderMetadataEnterpriseSecurityClassification">);
    getFolderMetadataEnterpriseSecurityClassification6VmVochwUWo(folderId: string): Promise<any>;
    createFolderMetadataEnterpriseSecurityClassification(folderId: string, requestBody: CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg): Promise<any>;
    deleteFolderMetadataEnterpriseSecurityClassification(folderId: string): Promise<any>;
}
