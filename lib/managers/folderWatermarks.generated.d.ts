import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type FolderWatermarksManagerAuthField = DeveloperTokenAuth | CcgAuth;
export type PutFoldersIdWatermarkRequestBodyArgWatermarkFieldImprintField = "default";
export interface PutFoldersIdWatermarkRequestBodyArgWatermarkField {
    readonly imprint: PutFoldersIdWatermarkRequestBodyArgWatermarkFieldImprintField;
}
export interface PutFoldersIdWatermarkRequestBodyArg {
    readonly watermark: PutFoldersIdWatermarkRequestBodyArgWatermarkField;
}
export declare class FolderWatermarksManager {
    readonly auth: FolderWatermarksManagerAuthField;
    constructor(fields: Omit<FolderWatermarksManager, "getFoldersIdWatermark" | "putFoldersIdWatermark" | "deleteFoldersIdWatermark">);
    getFoldersIdWatermark(folderId: string): Promise<any>;
    putFoldersIdWatermark(folderId: string, requestBody: PutFoldersIdWatermarkRequestBodyArg): Promise<any>;
    deleteFoldersIdWatermark(folderId: string): Promise<any>;
}
