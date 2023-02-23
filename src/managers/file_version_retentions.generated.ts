import { FileVersionRetentions } from "../schemas.generated.js";
import { deserializeFileVersionRetentions } from "../schemas.generated.js";
import { serializeFileVersionRetentions } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { FileVersionRetention } from "../schemas.generated.js";
import { deserializeFileVersionRetention } from "../schemas.generated.js";
import { serializeFileVersionRetention } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch, FetchOptions, FetchResponse } from "../fetch.js";
import { deserializeJSON, JSON } from "../json.js";
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
export class FileVersionRetentionsManager {
    readonly auth!: FileVersionRetentionsManagerAuthField;
    constructor(fields: Omit<FileVersionRetentionsManager, "getFileVersionRetentions" | "getFileVersionRetentionsId">) {
        Object.assign(this, fields);
    }
    async getFileVersionRetentions(options: GetFileVersionRetentionsOptionsArg = {} satisfies GetFileVersionRetentionsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_version_retentions") as string, { method: "GET", params: { ["file_id"]: options.fileId, ["file_version_id"]: options.fileVersionId, ["policy_id"]: options.policyId, ["disposition_action"]: options.dispositionAction, ["disposition_before"]: options.dispositionBefore, ["disposition_after"]: options.dispositionAfter, ["limit"]: options.limit, ["marker"]: options.marker }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeFileVersionRetentions(deserializeJSON(response.text) as JSON);
    }
    async getFileVersionRetentionsId(fileVersionRetentionId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_version_retentions/", fileVersionRetentionId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeFileVersionRetention(deserializeJSON(response.text) as JSON);
    }
}
