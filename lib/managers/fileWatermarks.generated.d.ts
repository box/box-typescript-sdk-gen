import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type FileWatermarksManagerAuthField = DeveloperTokenAuth | CCGAuth;
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
