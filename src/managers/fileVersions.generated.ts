import { newSerializeFileVersions } from "../schemas.generated.js";
import { newDeserializeFileVersions } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeFileVersionFull } from "../schemas.generated.js";
import { newDeserializeFileVersionFull } from "../schemas.generated.js";
import { FileVersions } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { FileVersionFull } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
export interface GetFileVersionsQueryParamsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly offset?: number;
}
export interface GetFileVersionByIdQueryParamsArg {
    readonly fields?: string;
}
export interface UpdateFileVersionByIdRequestBodyArg {
    readonly trashedAt?: string;
}
export interface DeleteFileVersionByIdHeadersArg {
    readonly ifMatch?: string;
}
export type PromoteFileVersionRequestBodyArgTypeField = "file_version";
export interface PromoteFileVersionRequestBodyArg {
    readonly id?: string;
    readonly type?: PromoteFileVersionRequestBodyArgTypeField;
}
export interface PromoteFileVersionQueryParamsArg {
    readonly fields?: string;
}
export class FileVersionsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileVersionsManager, "getFileVersions" | "getFileVersionById" | "updateFileVersionById" | "deleteFileVersionById" | "promoteFileVersion">) {
        Object.assign(this, fields);
    }
    async getFileVersions(fileId: string, queryParams: undefined | GetFileVersionsQueryParamsArg = {} satisfies GetFileVersionsQueryParamsArg): Promise<FileVersions> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/versions") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFileVersions(deserializeJson(response.text));
    }
    async getFileVersionById(fileId: string, fileVersionId: string, queryParams: undefined | GetFileVersionByIdQueryParamsArg = {} satisfies GetFileVersionByIdQueryParamsArg): Promise<FileVersionFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/versions/", fileVersionId) as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFileVersionFull(deserializeJson(response.text));
    }
    async updateFileVersionById(fileId: string, fileVersionId: string, requestBody: UpdateFileVersionByIdRequestBodyArg): Promise<FileVersionFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/versions/", fileVersionId) as string, { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFileVersionFull(deserializeJson(response.text));
    }
    async deleteFileVersionById(fileId: string, fileVersionId: string, headers: undefined | DeleteFileVersionByIdHeadersArg = {} satisfies DeleteFileVersionByIdHeadersArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/versions/", fileVersionId) as string, { method: "DELETE", headers: toMap(headers), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async promoteFileVersion(fileId: string, requestBody: PromoteFileVersionRequestBodyArg, queryParams: undefined | PromoteFileVersionQueryParamsArg = {} satisfies PromoteFileVersionQueryParamsArg): Promise<FileVersionFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/versions/current") as string, { method: "POST", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFileVersionFull(deserializeJson(response.text));
    }
}
export function newSerializeGetFileVersionsQueryParamsArg(val: GetFileVersionsQueryParamsArg): Json {
    return { ["fields"]: val.fields, ["limit"]: val.limit, ["offset"]: val.offset };
}
export function newDeserializeGetFileVersionsQueryParamsArg(val: any): GetFileVersionsQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    return { fields: fields, limit: limit, offset: offset } satisfies GetFileVersionsQueryParamsArg;
}
export function newSerializeGetFileVersionByIdQueryParamsArg(val: GetFileVersionByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeGetFileVersionByIdQueryParamsArg(val: any): GetFileVersionByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetFileVersionByIdQueryParamsArg;
}
export function newSerializeUpdateFileVersionByIdRequestBodyArg(val: UpdateFileVersionByIdRequestBodyArg): Json {
    return { ["trashedAt"]: val.trashedAt };
}
export function newDeserializeUpdateFileVersionByIdRequestBodyArg(val: any): UpdateFileVersionByIdRequestBodyArg {
    const trashedAt: undefined | string = isJson(val.trashedAt, "string") ? val.trashedAt : void 0;
    return { trashedAt: trashedAt } satisfies UpdateFileVersionByIdRequestBodyArg;
}
export function newSerializeDeleteFileVersionByIdHeadersArg(val: DeleteFileVersionByIdHeadersArg): Json {
    return { ["ifMatch"]: val.ifMatch };
}
export function newDeserializeDeleteFileVersionByIdHeadersArg(val: any): DeleteFileVersionByIdHeadersArg {
    const ifMatch: undefined | string = isJson(val.ifMatch, "string") ? val.ifMatch : void 0;
    return { ifMatch: ifMatch } satisfies DeleteFileVersionByIdHeadersArg;
}
export function newSerializePromoteFileVersionRequestBodyArgTypeField(val: PromoteFileVersionRequestBodyArgTypeField): Json {
    return val;
}
export function newDeserializePromoteFileVersionRequestBodyArgTypeField(val: any): PromoteFileVersionRequestBodyArgTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"PromoteFileVersionRequestBodyArgTypeField\"";
    }
    if (val == "file_version") {
        return "file_version";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializePromoteFileVersionRequestBodyArg(val: PromoteFileVersionRequestBodyArg): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializePromoteFileVersionRequestBodyArgTypeField(val.type) };
}
export function newDeserializePromoteFileVersionRequestBodyArg(val: any): PromoteFileVersionRequestBodyArg {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | PromoteFileVersionRequestBodyArgTypeField = val.type == void 0 ? void 0 : newDeserializePromoteFileVersionRequestBodyArgTypeField(val.type);
    return { id: id, type: type } satisfies PromoteFileVersionRequestBodyArg;
}
export function newSerializePromoteFileVersionQueryParamsArg(val: PromoteFileVersionQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializePromoteFileVersionQueryParamsArg(val: any): PromoteFileVersionQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies PromoteFileVersionQueryParamsArg;
}
