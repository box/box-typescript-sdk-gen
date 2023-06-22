/// <reference types="node" />
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Readable } from "stream";
export interface UploadFileVersionRequestBodyArgAttributesField {
    readonly name: string;
    readonly contentModifiedAt?: string;
}
export interface UploadFileVersionRequestBodyArg {
    readonly attributes: UploadFileVersionRequestBodyArgAttributesField;
    readonly file: Readable;
}
export interface UploadFileVersionOptionsArg {
    readonly ifMatch?: string;
    readonly fields?: string;
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
export interface UploadFileOptionsArg {
    readonly fields?: string;
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
    uploadFileVersion(fileId: string, requestBody: UploadFileVersionRequestBodyArg, options?: UploadFileVersionOptionsArg): Promise<any>;
    uploadFile(requestBody: UploadFileRequestBodyArg, options?: UploadFileOptionsArg): Promise<any>;
    preflightFileUpload(requestBody: PreflightFileUploadRequestBodyArg): Promise<any>;
}
