import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type FolderClassificationsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface PostFoldersIdMetadataEnterpriseSecurityClassification6VmVochwUWoRequestBodyArg {
    readonly boxSecurityClassificationKey?: string;
}
export declare class FolderClassificationsManager {
    readonly auth: FolderClassificationsManagerAuthField;
    constructor(fields: Omit<FolderClassificationsManager, "getFoldersIdMetadataEnterpriseSecurityClassification6VmVochwUWo" | "postFoldersIdMetadataEnterpriseSecurityClassification6VmVochwUWo" | "deleteFoldersIdMetadataEnterpriseSecurityClassification6VmVochwUWo">);
    getFoldersIdMetadataEnterpriseSecurityClassification6VmVochwUWo(folderId: string): Promise<any>;
    postFoldersIdMetadataEnterpriseSecurityClassification6VmVochwUWo(folderId: string, requestBody: PostFoldersIdMetadataEnterpriseSecurityClassification6VmVochwUWoRequestBodyArg): Promise<any>;
    deleteFoldersIdMetadataEnterpriseSecurityClassification6VmVochwUWo(folderId: string): Promise<any>;
}
