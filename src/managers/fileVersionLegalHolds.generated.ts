import { FileVersionLegalHold } from "../schemas.generated.js";
import { deserializeFileVersionLegalHold } from "../schemas.generated.js";
import { serializeFileVersionLegalHold } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { FileVersionLegalHolds } from "../schemas.generated.js";
import { deserializeFileVersionLegalHolds } from "../schemas.generated.js";
import { serializeFileVersionLegalHolds } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type FileVersionLegalHoldsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface GetFileVersionLegalHoldsOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export class FileVersionLegalHoldsManager {
    readonly auth!: FileVersionLegalHoldsManagerAuthField;
    constructor(fields: Omit<FileVersionLegalHoldsManager, "getFileVersionLegalHoldById" | "getFileVersionLegalHolds">) {
        Object.assign(this, fields);
    }
    async getFileVersionLegalHoldById(fileVersionLegalHoldId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_version_legal_holds/", fileVersionLegalHoldId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersionLegalHold(deserializeJson(response.text));
    }
    async getFileVersionLegalHolds(policyId: string, options: GetFileVersionLegalHoldsOptionsArg = {} satisfies GetFileVersionLegalHoldsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_version_legal_holds") as string, { method: "GET", params: { ["policy_id"]: policyId, ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersionLegalHolds(deserializeJson(response.text));
    }
}
