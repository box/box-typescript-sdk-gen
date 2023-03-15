import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type UploadsManagerAuthField = DeveloperTokenAuth | CcgAuth;
export interface OptionsFilesContentRequestBodyArgParentField {
    readonly id?: string;
}
export interface OptionsFilesContentRequestBodyArg {
    readonly name?: string;
    readonly size?: number;
    readonly parent?: OptionsFilesContentRequestBodyArgParentField;
}
export declare class UploadsManager {
    readonly auth: UploadsManagerAuthField;
    constructor(fields: Omit<UploadsManager, "optionsFilesContent">);
    optionsFilesContent(requestBody: OptionsFilesContentRequestBodyArg): Promise<any>;
}
