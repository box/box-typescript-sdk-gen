import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type FileClassificationsManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface CreateFileMetadataEnterpriseSecurityClassification6VmVochwUWoRequestBodyArg {
    readonly boxSecurityClassificationKey?: string;
}
export declare class FileClassificationsManager {
    readonly auth: FileClassificationsManagerAuthField;
    constructor(fields: Omit<FileClassificationsManager, "getFileMetadataEnterpriseSecurityClassification6VmVochwUWo" | "createFileMetadataEnterpriseSecurityClassification6VmVochwUWo" | "deleteFileMetadataEnterpriseSecurityClassification6VmVochwUWo">);
    getFileMetadataEnterpriseSecurityClassification6VmVochwUWo(fileId: string): Promise<any>;
    createFileMetadataEnterpriseSecurityClassification6VmVochwUWo(fileId: string, requestBody: CreateFileMetadataEnterpriseSecurityClassification6VmVochwUWoRequestBodyArg): Promise<any>;
    deleteFileMetadataEnterpriseSecurityClassification6VmVochwUWo(fileId: string): Promise<any>;
}
