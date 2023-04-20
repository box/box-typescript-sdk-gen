import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type FolderClassificationsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
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
