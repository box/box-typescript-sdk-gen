import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type FileClassificationsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface PostFilesIdMetadataEnterpriseSecurityClassification6VmVochwUWoRequestBodyArg {
    readonly boxSecurityClassificationKey?: string;
}
export declare class FileClassificationsManager {
    readonly auth: FileClassificationsManagerAuthField;
    constructor(fields: Omit<FileClassificationsManager, "getFilesIdMetadataEnterpriseSecurityClassification6VmVochwUWo" | "postFilesIdMetadataEnterpriseSecurityClassification6VmVochwUWo" | "deleteFilesIdMetadataEnterpriseSecurityClassification6VmVochwUWo">);
    getFilesIdMetadataEnterpriseSecurityClassification6VmVochwUWo(fileId: string): Promise<any>;
    postFilesIdMetadataEnterpriseSecurityClassification6VmVochwUWo(fileId: string, requestBody: PostFilesIdMetadataEnterpriseSecurityClassification6VmVochwUWoRequestBodyArg): Promise<any>;
    deleteFilesIdMetadataEnterpriseSecurityClassification6VmVochwUWo(fileId: string): Promise<any>;
}
