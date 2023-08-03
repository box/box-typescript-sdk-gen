/// <reference types="node" />
import { Files } from "../schemas.generated.js";
import { UploadUrl } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { ByteStream } from "../utils.js";
import { Json } from "../json.js";
export interface UploadFileVersionRequestBodyArgAttributesField {
    readonly name: string;
    readonly contentModifiedAt?: string;
}
export interface UploadFileVersionRequestBodyArg {
    readonly attributes: UploadFileVersionRequestBodyArgAttributesField;
    readonly file: ByteStream;
    readonly fileFileName?: string;
    readonly fileContentType?: string;
}
export interface UploadFileVersionQueryParamsArg {
    readonly fields?: string;
}
export declare class UploadFileVersionHeadersArg {
    readonly ifMatch?: string;
    readonly contentMd5?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UploadFileVersionHeadersArg);
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
    readonly file: ByteStream;
    readonly fileFileName?: string;
    readonly fileContentType?: string;
}
export interface UploadFileQueryParamsArg {
    readonly fields?: string;
}
export declare class UploadFileHeadersArg {
    readonly contentMd5?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UploadFileHeadersArg);
}
export interface PreflightFileUploadRequestBodyArgParentField {
    readonly id?: string;
}
export interface PreflightFileUploadRequestBodyArg {
    readonly name?: string;
    readonly size?: number;
    readonly parent?: PreflightFileUploadRequestBodyArgParentField;
}
export declare class PreflightFileUploadHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: PreflightFileUploadHeadersArg);
}
export declare class UploadsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<UploadsManager, "uploadFileVersion" | "uploadFile" | "preflightFileUpload">);
    uploadFileVersion(fileId: string, requestBody: UploadFileVersionRequestBodyArg, queryParams?: UploadFileVersionQueryParamsArg, headers?: UploadFileVersionHeadersArg): Promise<Files>;
    uploadFile(requestBody: UploadFileRequestBodyArg, queryParams?: UploadFileQueryParamsArg, headers?: UploadFileHeadersArg): Promise<Files>;
    preflightFileUpload(requestBody: PreflightFileUploadRequestBodyArg, headers?: PreflightFileUploadHeadersArg): Promise<UploadUrl>;
}
export declare function serializeUploadFileVersionRequestBodyArgAttributesField(val: UploadFileVersionRequestBodyArgAttributesField): Json;
export declare function deserializeUploadFileVersionRequestBodyArgAttributesField(val: any): UploadFileVersionRequestBodyArgAttributesField;
export declare function serializeUploadFileRequestBodyArgAttributesFieldParentField(val: UploadFileRequestBodyArgAttributesFieldParentField): Json;
export declare function deserializeUploadFileRequestBodyArgAttributesFieldParentField(val: any): UploadFileRequestBodyArgAttributesFieldParentField;
export declare function serializeUploadFileRequestBodyArgAttributesField(val: UploadFileRequestBodyArgAttributesField): Json;
export declare function deserializeUploadFileRequestBodyArgAttributesField(val: any): UploadFileRequestBodyArgAttributesField;
export declare function serializePreflightFileUploadRequestBodyArgParentField(val: PreflightFileUploadRequestBodyArgParentField): Json;
export declare function deserializePreflightFileUploadRequestBodyArgParentField(val: any): PreflightFileUploadRequestBodyArgParentField;
export declare function serializePreflightFileUploadRequestBodyArg(val: PreflightFileUploadRequestBodyArg): Json;
export declare function deserializePreflightFileUploadRequestBodyArg(val: any): PreflightFileUploadRequestBodyArg;
