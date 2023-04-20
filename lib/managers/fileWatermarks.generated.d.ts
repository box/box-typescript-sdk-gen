import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type FileWatermarksManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export type UpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField = "default";
export interface UpdateFileWatermarkRequestBodyArgWatermarkField {
    readonly imprint: UpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField;
}
export interface UpdateFileWatermarkRequestBodyArg {
    readonly watermark: UpdateFileWatermarkRequestBodyArgWatermarkField;
}
export declare class FileWatermarksManager {
    readonly auth: FileWatermarksManagerAuthField;
    constructor(fields: Omit<FileWatermarksManager, "getFileWatermark" | "updateFileWatermark" | "deleteFileWatermark">);
    getFileWatermark(fileId: string): Promise<any>;
    updateFileWatermark(fileId: string, requestBody: UpdateFileWatermarkRequestBodyArg): Promise<any>;
    deleteFileWatermark(fileId: string): Promise<any>;
}
