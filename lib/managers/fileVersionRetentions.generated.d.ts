import { FileVersionRetentions } from "../schemas.generated.js";
import { FileVersionRetention } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export type GetFileVersionRetentionsQueryParamsArgDispositionActionField = "permanently_delete" | "remove_retention";
export interface GetFileVersionRetentionsQueryParamsArg {
    readonly fileId?: string;
    readonly fileVersionId?: string;
    readonly policyId?: string;
    readonly dispositionAction?: GetFileVersionRetentionsQueryParamsArgDispositionActionField;
    readonly dispositionBefore?: string;
    readonly dispositionAfter?: string;
    readonly limit?: number;
    readonly marker?: string;
}
export declare class FileVersionRetentionsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileVersionRetentionsManager, "getFileVersionRetentions" | "getFileVersionRetentionById">);
    getFileVersionRetentions(queryParams?: GetFileVersionRetentionsQueryParamsArg): Promise<FileVersionRetentions>;
    getFileVersionRetentionById(fileVersionRetentionId: string): Promise<FileVersionRetention>;
}
export declare function serializeGetFileVersionRetentionsQueryParamsArgDispositionActionField(val: GetFileVersionRetentionsQueryParamsArgDispositionActionField): Json;
export declare function deserializeGetFileVersionRetentionsQueryParamsArgDispositionActionField(val: any): GetFileVersionRetentionsQueryParamsArgDispositionActionField;
export declare function serializeGetFileVersionRetentionsQueryParamsArg(val: GetFileVersionRetentionsQueryParamsArg): Json;
export declare function deserializeGetFileVersionRetentionsQueryParamsArg(val: any): GetFileVersionRetentionsQueryParamsArg;
