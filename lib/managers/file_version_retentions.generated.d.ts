import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type FileVersionRetentionsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export type GetFileVersionRetentionsOptionsArgDispositionActionField = "permanently_delete" | "remove_retention";
export interface GetFileVersionRetentionsOptionsArg {
    readonly fileId?: string;
    readonly fileVersionId?: string;
    readonly policyId?: string;
    readonly dispositionAction?: GetFileVersionRetentionsOptionsArgDispositionActionField;
    readonly dispositionBefore?: string;
    readonly dispositionAfter?: string;
    readonly limit?: number;
    readonly marker?: string;
}
export declare class FileVersionRetentionsManager {
    readonly auth: FileVersionRetentionsManagerAuthField;
    constructor(fields: Omit<FileVersionRetentionsManager, "getFileVersionRetentions" | "getFileVersionRetentionsId">);
    getFileVersionRetentions(options?: GetFileVersionRetentionsOptionsArg): Promise<any>;
    getFileVersionRetentionsId(fileVersionRetentionId: string): Promise<any>;
}
