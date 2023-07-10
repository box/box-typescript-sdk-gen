import { Classification } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg {
    readonly boxSecurityClassificationKey?: string;
}
export declare class FolderClassificationsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FolderClassificationsManager, "getFolderMetadataEnterpriseSecurityClassification6VmVochwUWo" | "createFolderMetadataEnterpriseSecurityClassification" | "deleteFolderMetadataEnterpriseSecurityClassification">);
    getFolderMetadataEnterpriseSecurityClassification6VmVochwUWo(folderId: string): Promise<Classification>;
    createFolderMetadataEnterpriseSecurityClassification(folderId: string, requestBody: CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg): Promise<Classification>;
    deleteFolderMetadataEnterpriseSecurityClassification(folderId: string): Promise<any>;
}
export declare function serializeCreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg(val: CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg): Json;
export declare function deserializeCreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg(val: any): CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg;
