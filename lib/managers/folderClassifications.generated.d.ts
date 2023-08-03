import { Classification } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export declare class GetFolderMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFolderMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg);
}
export interface CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg {
    readonly boxSecurityClassificationKey?: string;
}
export declare class CreateFolderMetadataEnterpriseSecurityClassificationHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateFolderMetadataEnterpriseSecurityClassificationHeadersArg);
}
export declare class DeleteFolderMetadataEnterpriseSecurityClassificationHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteFolderMetadataEnterpriseSecurityClassificationHeadersArg);
}
export declare class FolderClassificationsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FolderClassificationsManager, "getFolderMetadataEnterpriseSecurityClassification6VmVochwUWo" | "createFolderMetadataEnterpriseSecurityClassification" | "deleteFolderMetadataEnterpriseSecurityClassification">);
    getFolderMetadataEnterpriseSecurityClassification6VmVochwUWo(folderId: string, headers?: GetFolderMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg): Promise<Classification>;
    createFolderMetadataEnterpriseSecurityClassification(folderId: string, requestBody: CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg, headers?: CreateFolderMetadataEnterpriseSecurityClassificationHeadersArg): Promise<Classification>;
    deleteFolderMetadataEnterpriseSecurityClassification(folderId: string, headers?: DeleteFolderMetadataEnterpriseSecurityClassificationHeadersArg): Promise<undefined>;
}
export declare function serializeCreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg(val: CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg): Json;
export declare function deserializeCreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg(val: any): CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg;
