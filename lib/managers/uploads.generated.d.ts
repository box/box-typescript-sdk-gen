/// <reference types="node" />
import { Files } from "../schemas.generated.js";
import { UploadUrl } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
import { Readable } from "stream";
export interface UploadFileVersionRequestBodyArgAttributesField {
    readonly name: string;
    readonly contentModifiedAt?: string;
}
export interface UploadFileVersionRequestBodyArg {
    readonly attributes: UploadFileVersionRequestBodyArgAttributesField;
    readonly file: Readable;
    readonly fileFileName?: string;
    readonly fileContentType?: string;
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
    readonly fileFileName?: string;
    readonly fileContentType?: string;
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
export declare class UploadsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<UploadsManager, "uploadFileVersion" | "uploadFile" | "preflightFileUpload">);
    uploadFileVersion(fileId: string, requestBody: UploadFileVersionRequestBodyArg, queryParams?: undefined | UploadFileVersionQueryParamsArg, headers?: undefined | UploadFileVersionHeadersArg): Promise<Files>;
    uploadFile(requestBody: UploadFileRequestBodyArg, queryParams?: undefined | UploadFileQueryParamsArg, headers?: undefined | UploadFileHeadersArg): Promise<Files>;
    preflightFileUpload(requestBody: PreflightFileUploadRequestBodyArg): Promise<UploadUrl>;
}
export declare function serializeUploadFileVersionRequestBodyArgAttributesField(val: UploadFileVersionRequestBodyArgAttributesField): Json;
export declare function deserializeUploadFileVersionRequestBodyArgAttributesField(val: any): UploadFileVersionRequestBodyArgAttributesField;
export declare function serializeUploadFileVersionQueryParamsArg(val: UploadFileVersionQueryParamsArg): Json;
export declare function deserializeUploadFileVersionQueryParamsArg(val: any): UploadFileVersionQueryParamsArg;
export declare function serializeUploadFileVersionHeadersArg(val: UploadFileVersionHeadersArg): Json;
export declare function deserializeUploadFileVersionHeadersArg(val: any): UploadFileVersionHeadersArg;
export declare function serializeUploadFileRequestBodyArgAttributesFieldParentField(val: UploadFileRequestBodyArgAttributesFieldParentField): Json;
export declare function deserializeUploadFileRequestBodyArgAttributesFieldParentField(val: any): UploadFileRequestBodyArgAttributesFieldParentField;
export declare function serializeUploadFileRequestBodyArgAttributesField(val: UploadFileRequestBodyArgAttributesField): Json;
export declare function deserializeUploadFileRequestBodyArgAttributesField(val: any): UploadFileRequestBodyArgAttributesField;
export declare function serializeUploadFileQueryParamsArg(val: UploadFileQueryParamsArg): Json;
export declare function deserializeUploadFileQueryParamsArg(val: any): UploadFileQueryParamsArg;
export declare function serializeUploadFileHeadersArg(val: UploadFileHeadersArg): Json;
export declare function deserializeUploadFileHeadersArg(val: any): UploadFileHeadersArg;
export declare function serializePreflightFileUploadRequestBodyArgParentField(val: PreflightFileUploadRequestBodyArgParentField): Json;
export declare function deserializePreflightFileUploadRequestBodyArgParentField(val: any): PreflightFileUploadRequestBodyArgParentField;
export declare function serializePreflightFileUploadRequestBodyArg(val: PreflightFileUploadRequestBodyArg): Json;
export declare function deserializePreflightFileUploadRequestBodyArg(val: any): PreflightFileUploadRequestBodyArg;
