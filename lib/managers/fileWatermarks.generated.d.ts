import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export type UpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField = "default";
export interface UpdateFileWatermarkRequestBodyArgWatermarkField {
    readonly imprint: UpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField;
}
export interface UpdateFileWatermarkRequestBodyArg {
    readonly watermark: UpdateFileWatermarkRequestBodyArgWatermarkField;
}
export declare class FileWatermarksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileWatermarksManager, "getFileWatermark" | "updateFileWatermark" | "deleteFileWatermark">);
    getFileWatermark(fileId: string): Promise<any>;
    updateFileWatermark(fileId: string, requestBody: UpdateFileWatermarkRequestBodyArg): Promise<any>;
    deleteFileWatermark(fileId: string): Promise<any>;
}
