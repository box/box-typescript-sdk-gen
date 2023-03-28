import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type FolderWatermarksManagerAuthField = DeveloperTokenAuth | CCGAuth;
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
