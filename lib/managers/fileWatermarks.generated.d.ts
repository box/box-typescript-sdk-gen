import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type FileWatermarksManagerAuthField = DeveloperTokenAuth | CcgAuth;
export type PutFilesIdWatermarkRequestBodyArgWatermarkFieldImprintField = "default";
export interface PutFilesIdWatermarkRequestBodyArgWatermarkField {
    readonly imprint: PutFilesIdWatermarkRequestBodyArgWatermarkFieldImprintField;
}
export interface PutFilesIdWatermarkRequestBodyArg {
    readonly watermark: PutFilesIdWatermarkRequestBodyArgWatermarkField;
}
export declare class FileWatermarksManager {
    readonly auth: FileWatermarksManagerAuthField;
    constructor(fields: Omit<FileWatermarksManager, "getFilesIdWatermark" | "putFilesIdWatermark" | "deleteFilesIdWatermark">);
    getFilesIdWatermark(fileId: string): Promise<any>;
    putFilesIdWatermark(fileId: string, requestBody: PutFilesIdWatermarkRequestBodyArg): Promise<any>;
    deleteFilesIdWatermark(fileId: string): Promise<any>;
}
