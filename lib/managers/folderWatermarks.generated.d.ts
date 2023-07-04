import { Watermark } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
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
    getFolderWatermark(folderId: string): Promise<Watermark>;
    updateFolderWatermark(folderId: string, requestBody: UpdateFolderWatermarkRequestBodyArg): Promise<Watermark>;
    deleteFolderWatermark(folderId: string): Promise<any>;
}
export declare function newSerializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField(val: UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField): Json;
export declare function newDeserializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField(val: any): UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField;
export declare function newSerializeUpdateFolderWatermarkRequestBodyArgWatermarkField(val: UpdateFolderWatermarkRequestBodyArgWatermarkField): Json;
export declare function newDeserializeUpdateFolderWatermarkRequestBodyArgWatermarkField(val: any): UpdateFolderWatermarkRequestBodyArgWatermarkField;
export declare function newSerializeUpdateFolderWatermarkRequestBodyArg(val: UpdateFolderWatermarkRequestBodyArg): Json;
export declare function newDeserializeUpdateFolderWatermarkRequestBodyArg(val: any): UpdateFolderWatermarkRequestBodyArg;
