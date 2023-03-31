import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type FileClassificationsManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg {
    readonly boxSecurityClassificationKey?: string;
}
export declare class FileClassificationsManager {
    readonly auth: FileClassificationsManagerAuthField;
    constructor(fields: Omit<FileClassificationsManager, "getFileMetadataEnterpriseSecurityClassification6VmVochwUWo" | "createFileMetadataEnterpriseSecurityClassification" | "deleteFileMetadataEnterpriseSecurityClassification">);
    getFileMetadataEnterpriseSecurityClassification6VmVochwUWo(fileId: string): Promise<any>;
    createFileMetadataEnterpriseSecurityClassification(fileId: string, requestBody: CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg): Promise<any>;
    deleteFileMetadataEnterpriseSecurityClassification(fileId: string): Promise<any>;
}
