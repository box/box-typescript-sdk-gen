import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type UploadsManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface PreflightFileUploadRequestBodyArgParentField {
    readonly id?: string;
}
export interface PreflightFileUploadRequestBodyArg {
    readonly name?: string;
    readonly size?: number;
    readonly parent?: PreflightFileUploadRequestBodyArgParentField;
}
export declare class UploadsManager {
    readonly auth: UploadsManagerAuthField;
    constructor(fields: Omit<UploadsManager, "preflightFileUpload">);
    preflightFileUpload(requestBody: PreflightFileUploadRequestBodyArg): Promise<any>;
}
