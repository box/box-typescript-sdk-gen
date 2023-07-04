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
export declare class UploadsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<UploadsManager, "uploadFileVersion" | "uploadFile" | "preflightFileUpload">);
    uploadFileVersion(fileId: string, requestBody: UploadFileVersionRequestBodyArg, queryParams?: undefined | UploadFileVersionQueryParamsArg, headers?: undefined | UploadFileVersionHeadersArg): Promise<Files>;
    uploadFile(requestBody: UploadFileRequestBodyArg, queryParams?: undefined | UploadFileQueryParamsArg, headers?: undefined | UploadFileHeadersArg): Promise<Files>;
    preflightFileUpload(requestBody: PreflightFileUploadRequestBodyArg): Promise<UploadUrl>;
}
export declare function newSerializeUploadFileVersionRequestBodyArgAttributesField(val: UploadFileVersionRequestBodyArgAttributesField): Json;
export declare function newDeserializeUploadFileVersionRequestBodyArgAttributesField(val: any): UploadFileVersionRequestBodyArgAttributesField;
export declare function newSerializeUploadFileVersionQueryParamsArg(val: UploadFileVersionQueryParamsArg): Json;
export declare function newDeserializeUploadFileVersionQueryParamsArg(val: any): UploadFileVersionQueryParamsArg;
export declare function newSerializeUploadFileVersionHeadersArg(val: UploadFileVersionHeadersArg): Json;
export declare function newDeserializeUploadFileVersionHeadersArg(val: any): UploadFileVersionHeadersArg;
export declare function newSerializeUploadFileRequestBodyArgAttributesFieldParentField(val: UploadFileRequestBodyArgAttributesFieldParentField): Json;
export declare function newDeserializeUploadFileRequestBodyArgAttributesFieldParentField(val: any): UploadFileRequestBodyArgAttributesFieldParentField;
export declare function newSerializeUploadFileRequestBodyArgAttributesField(val: UploadFileRequestBodyArgAttributesField): Json;
export declare function newDeserializeUploadFileRequestBodyArgAttributesField(val: any): UploadFileRequestBodyArgAttributesField;
export declare function newSerializeUploadFileQueryParamsArg(val: UploadFileQueryParamsArg): Json;
export declare function newDeserializeUploadFileQueryParamsArg(val: any): UploadFileQueryParamsArg;
export declare function newSerializeUploadFileHeadersArg(val: UploadFileHeadersArg): Json;
export declare function newDeserializeUploadFileHeadersArg(val: any): UploadFileHeadersArg;
export declare function newSerializePreflightFileUploadRequestBodyArgParentField(val: PreflightFileUploadRequestBodyArgParentField): Json;
export declare function newDeserializePreflightFileUploadRequestBodyArgParentField(val: any): PreflightFileUploadRequestBodyArgParentField;
export declare function newSerializePreflightFileUploadRequestBodyArg(val: PreflightFileUploadRequestBodyArg): Json;
export declare function newDeserializePreflightFileUploadRequestBodyArg(val: any): PreflightFileUploadRequestBodyArg;
