import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type FileClassificationsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
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
