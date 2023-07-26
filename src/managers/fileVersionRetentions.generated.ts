import { serializeFileVersionRetentions } from "../schemas.generated.js";
import { deserializeFileVersionRetentions } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeFileVersionRetention } from "../schemas.generated.js";
import { deserializeFileVersionRetention } from "../schemas.generated.js";
import { FileVersionRetentions } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { FileVersionRetention } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
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
export class FileVersionRetentionsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileVersionRetentionsManager, "getFileVersionRetentions" | "getFileVersionRetentionById">) {
        Object.assign(this, fields);
    }
    async getFileVersionRetentions(queryParams: undefined | GetFileVersionRetentionsQueryParamsArg = {} satisfies GetFileVersionRetentionsQueryParamsArg): Promise<FileVersionRetentions> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_version_retentions") as string, { method: "GET", params: prepareParams(serializeGetFileVersionRetentionsQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersionRetentions(deserializeJson(response.text));
    }
    async getFileVersionRetentionById(fileVersionRetentionId: string): Promise<FileVersionRetention> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_version_retentions/", fileVersionRetentionId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersionRetention(deserializeJson(response.text));
    }
}
export function serializeGetFileVersionRetentionsQueryParamsArgDispositionActionField(val: GetFileVersionRetentionsQueryParamsArgDispositionActionField): Json {
    return val;
}
export function deserializeGetFileVersionRetentionsQueryParamsArgDispositionActionField(val: any): GetFileVersionRetentionsQueryParamsArgDispositionActionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetFileVersionRetentionsQueryParamsArgDispositionActionField\"";
    }
    if (val == "permanently_delete") {
        return "permanently_delete";
    }
    if (val == "remove_retention") {
        return "remove_retention";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGetFileVersionRetentionsQueryParamsArg(val: GetFileVersionRetentionsQueryParamsArg): Json {
    return { ["file_id"]: val.fileId, ["file_version_id"]: val.fileVersionId, ["policy_id"]: val.policyId, ["disposition_action"]: val.dispositionAction == void 0 ? void 0 : serializeGetFileVersionRetentionsQueryParamsArgDispositionActionField(val.dispositionAction), ["disposition_before"]: val.dispositionBefore, ["disposition_after"]: val.dispositionAfter, ["limit"]: val.limit, ["marker"]: val.marker };
}
export function deserializeGetFileVersionRetentionsQueryParamsArg(val: any): GetFileVersionRetentionsQueryParamsArg {
    const fileId: undefined | string = isJson(val.file_id, "string") ? val.file_id : void 0;
    const fileVersionId: undefined | string = isJson(val.file_version_id, "string") ? val.file_version_id : void 0;
    const policyId: undefined | string = isJson(val.policy_id, "string") ? val.policy_id : void 0;
    const dispositionAction: undefined | GetFileVersionRetentionsQueryParamsArgDispositionActionField = val.disposition_action == void 0 ? void 0 : deserializeGetFileVersionRetentionsQueryParamsArgDispositionActionField(val.disposition_action);
    const dispositionBefore: undefined | string = isJson(val.disposition_before, "string") ? val.disposition_before : void 0;
    const dispositionAfter: undefined | string = isJson(val.disposition_after, "string") ? val.disposition_after : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    return { fileId: fileId, fileVersionId: fileVersionId, policyId: policyId, dispositionAction: dispositionAction, dispositionBefore: dispositionBefore, dispositionAfter: dispositionAfter, limit: limit, marker: marker } satisfies GetFileVersionRetentionsQueryParamsArg;
}
