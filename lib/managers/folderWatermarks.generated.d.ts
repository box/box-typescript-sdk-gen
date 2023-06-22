import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export type UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField = "default";
export interface UpdateFolderWatermarkRequestBodyArgWatermarkField {
    readonly imprint: UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField;
}
export interface UpdateFolderWatermarkRequestBodyArg {
    readonly watermark: UpdateFolderWatermarkRequestBodyArgWatermarkField;
}
export declare class FolderWatermarksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FolderWatermarksManager, "getFolderWatermark" | "updateFolderWatermark" | "deleteFolderWatermark">);
    getFolderWatermark(folderId: string): Promise<any>;
    updateFolderWatermark(folderId: string, requestBody: UpdateFolderWatermarkRequestBodyArg): Promise<any>;
    deleteFolderWatermark(folderId: string): Promise<any>;
}
