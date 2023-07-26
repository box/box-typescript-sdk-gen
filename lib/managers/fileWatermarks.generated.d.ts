import { Watermark } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
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
    getFileWatermark(fileId: string): Promise<Watermark>;
    updateFileWatermark(fileId: string, requestBody: UpdateFileWatermarkRequestBodyArg): Promise<Watermark>;
    deleteFileWatermark(fileId: string): Promise<any>;
}
export declare function serializeUpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField(val: UpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField): Json;
export declare function deserializeUpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField(val: any): UpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField;
export declare function serializeUpdateFileWatermarkRequestBodyArgWatermarkField(val: UpdateFileWatermarkRequestBodyArgWatermarkField): Json;
export declare function deserializeUpdateFileWatermarkRequestBodyArgWatermarkField(val: any): UpdateFileWatermarkRequestBodyArgWatermarkField;
export declare function serializeUpdateFileWatermarkRequestBodyArg(val: UpdateFileWatermarkRequestBodyArg): Json;
export declare function deserializeUpdateFileWatermarkRequestBodyArg(val: any): UpdateFileWatermarkRequestBodyArg;
