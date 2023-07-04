import { newSerializeFiles } from "../schemas.generated.js";
import { newDeserializeFiles } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeUploadUrl } from "../schemas.generated.js";
import { newDeserializeUploadUrl } from "../schemas.generated.js";
import { newSerializeConflictError } from "../schemas.generated.js";
import { newDeserializeConflictError } from "../schemas.generated.js";
import { Files } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { UploadUrl } from "../schemas.generated.js";
import { ConflictError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { MultipartItem } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
import { Readable } from "stream";
export interface UploadFileVersionRequestBodyArgAttributesField {
    readonly name: string;
    readonly contentModifiedAt?: string;
}
export interface UploadFileVersionRequestBodyArg {
    readonly attributes: UploadFileVersionRequestBodyArgAttributesField;
    readonly file: Readable;
}
export interface UploadFileVersionQueryParamsArg {
    readonly fields?: string;
}
export interface UploadFileVersionHeadersArg {
    readonly ifMatch?: string;
    readonly contentMd5?: string;
}
export interface UploadFileRequestBodyArgAttributesFieldParentField {
    readonly id: string;
}
export interface UploadFileRequestBodyArgAttributesField {
    readonly name: string;
    readonly parent: UploadFileRequestBodyArgAttributesFieldParentField;
    readonly contentCreatedAt?: string;
    readonly contentModifiedAt?: string;
}
export interface UploadFileRequestBodyArg {
    readonly attributes: UploadFileRequestBodyArgAttributesField;
    readonly file: Readable;
}
export interface UploadFileQueryParamsArg {
    readonly fields?: string;
}
export interface UploadFileHeadersArg {
    readonly contentMd5?: string;
}
export interface PreflightFileUploadRequestBodyArgParentField {
    readonly id?: string;
}
export interface PreflightFileUploadRequestBodyArg {
    readonly name?: string;
    readonly size?: number;
    readonly parent?: PreflightFileUploadRequestBodyArgParentField;
}
export class UploadsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<UploadsManager, "uploadFileVersion" | "uploadFile" | "preflightFileUpload">) {
        Object.assign(this, fields);
    }
    async uploadFileVersion(fileId: string, requestBody: UploadFileVersionRequestBodyArg, queryParams: undefined | UploadFileVersionQueryParamsArg = {} satisfies UploadFileVersionQueryParamsArg, headers: undefined | UploadFileVersionHeadersArg = {} satisfies UploadFileVersionHeadersArg): Promise<Files> {
        const response: FetchResponse = await fetch("".concat("https://upload.box.com/api/2.0/files/", fileId, "/content") as string, { method: "POST", params: toMap(queryParams), headers: toMap(headers), multipartData: [{ partName: "attributes", body: JSON.stringify(requestBody.attributes) } satisfies MultipartItem, { partName: "file", fileStream: requestBody.file } satisfies MultipartItem], contentType: "multipart/form-data", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFiles(deserializeJson(response.text));
    }
    async uploadFile(requestBody: UploadFileRequestBodyArg, queryParams: undefined | UploadFileQueryParamsArg = {} satisfies UploadFileQueryParamsArg, headers: undefined | UploadFileHeadersArg = {} satisfies UploadFileHeadersArg): Promise<Files> {
        const response: FetchResponse = await fetch("".concat("https://upload.box.com/api/2.0/files/content") as string, { method: "POST", params: toMap(queryParams), headers: toMap(headers), multipartData: [{ partName: "attributes", body: JSON.stringify(requestBody.attributes) } satisfies MultipartItem, { partName: "file", fileStream: requestBody.file } satisfies MultipartItem], contentType: "multipart/form-data", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFiles(deserializeJson(response.text));
    }
    async preflightFileUpload(requestBody: PreflightFileUploadRequestBodyArg): Promise<UploadUrl> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/content") as string, { method: "OPTIONS", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeUploadUrl(deserializeJson(response.text));
    }
}
export function newSerializeUploadFileVersionRequestBodyArgAttributesField(val: UploadFileVersionRequestBodyArgAttributesField): Json {
    return { ["name"]: val.name, ["contentModifiedAt"]: val.contentModifiedAt };
}
export function newDeserializeUploadFileVersionRequestBodyArgAttributesField(val: any): UploadFileVersionRequestBodyArgAttributesField {
    const name: string = val.name;
    const contentModifiedAt: undefined | string = isJson(val.contentModifiedAt, "string") ? val.contentModifiedAt : void 0;
    return { name: name, contentModifiedAt: contentModifiedAt } satisfies UploadFileVersionRequestBodyArgAttributesField;
}
export function newSerializeUploadFileVersionQueryParamsArg(val: UploadFileVersionQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeUploadFileVersionQueryParamsArg(val: any): UploadFileVersionQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies UploadFileVersionQueryParamsArg;
}
export function newSerializeUploadFileVersionHeadersArg(val: UploadFileVersionHeadersArg): Json {
    return { ["ifMatch"]: val.ifMatch, ["contentMd5"]: val.contentMd5 };
}
export function newDeserializeUploadFileVersionHeadersArg(val: any): UploadFileVersionHeadersArg {
    const ifMatch: undefined | string = isJson(val.ifMatch, "string") ? val.ifMatch : void 0;
    const contentMd5: undefined | string = isJson(val.contentMd5, "string") ? val.contentMd5 : void 0;
    return { ifMatch: ifMatch, contentMd5: contentMd5 } satisfies UploadFileVersionHeadersArg;
}
export function newSerializeUploadFileRequestBodyArgAttributesFieldParentField(val: UploadFileRequestBodyArgAttributesFieldParentField): Json {
    return { ["id"]: val.id };
}
export function newDeserializeUploadFileRequestBodyArgAttributesFieldParentField(val: any): UploadFileRequestBodyArgAttributesFieldParentField {
    const id: string = val.id;
    return { id: id } satisfies UploadFileRequestBodyArgAttributesFieldParentField;
}
export function newSerializeUploadFileRequestBodyArgAttributesField(val: UploadFileRequestBodyArgAttributesField): Json {
    return { ["name"]: val.name, ["parent"]: newSerializeUploadFileRequestBodyArgAttributesFieldParentField(val.parent), ["contentCreatedAt"]: val.contentCreatedAt, ["contentModifiedAt"]: val.contentModifiedAt };
}
export function newDeserializeUploadFileRequestBodyArgAttributesField(val: any): UploadFileRequestBodyArgAttributesField {
    const name: string = val.name;
    const parent: UploadFileRequestBodyArgAttributesFieldParentField = newDeserializeUploadFileRequestBodyArgAttributesFieldParentField(val.parent);
    const contentCreatedAt: undefined | string = isJson(val.contentCreatedAt, "string") ? val.contentCreatedAt : void 0;
    const contentModifiedAt: undefined | string = isJson(val.contentModifiedAt, "string") ? val.contentModifiedAt : void 0;
    return { name: name, parent: parent, contentCreatedAt: contentCreatedAt, contentModifiedAt: contentModifiedAt } satisfies UploadFileRequestBodyArgAttributesField;
}
export function newSerializeUploadFileQueryParamsArg(val: UploadFileQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeUploadFileQueryParamsArg(val: any): UploadFileQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies UploadFileQueryParamsArg;
}
export function newSerializeUploadFileHeadersArg(val: UploadFileHeadersArg): Json {
    return { ["contentMd5"]: val.contentMd5 };
}
export function newDeserializeUploadFileHeadersArg(val: any): UploadFileHeadersArg {
    const contentMd5: undefined | string = isJson(val.contentMd5, "string") ? val.contentMd5 : void 0;
    return { contentMd5: contentMd5 } satisfies UploadFileHeadersArg;
}
export function newSerializePreflightFileUploadRequestBodyArgParentField(val: PreflightFileUploadRequestBodyArgParentField): Json {
    return { ["id"]: val.id };
}
export function newDeserializePreflightFileUploadRequestBodyArgParentField(val: any): PreflightFileUploadRequestBodyArgParentField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { id: id } satisfies PreflightFileUploadRequestBodyArgParentField;
}
export function newSerializePreflightFileUploadRequestBodyArg(val: PreflightFileUploadRequestBodyArg): Json {
    return { ["name"]: val.name, ["size"]: val.size, ["parent"]: val.parent == void 0 ? void 0 : newSerializePreflightFileUploadRequestBodyArgParentField(val.parent) };
}
export function newDeserializePreflightFileUploadRequestBodyArg(val: any): PreflightFileUploadRequestBodyArg {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const size: undefined | number = isJson(val.size, "number") ? val.size : void 0;
    const parent: undefined | PreflightFileUploadRequestBodyArgParentField = val.parent == void 0 ? void 0 : newDeserializePreflightFileUploadRequestBodyArgParentField(val.parent);
    return { name: name, size: size, parent: parent } satisfies PreflightFileUploadRequestBodyArg;
}
