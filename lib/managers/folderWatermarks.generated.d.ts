import { Watermark } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export declare class GetFolderWatermarkHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFolderWatermarkHeadersArg);
}
export type UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField = "default";
export interface UpdateFolderWatermarkRequestBodyArgWatermarkField {
    readonly imprint: UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField;
}
export interface UpdateFolderWatermarkRequestBodyArg {
    readonly watermark: UpdateFolderWatermarkRequestBodyArgWatermarkField;
}
export declare class UpdateFolderWatermarkHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UpdateFolderWatermarkHeadersArg);
}
export declare class DeleteFolderWatermarkHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteFolderWatermarkHeadersArg);
}
export declare class FolderWatermarksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FolderWatermarksManager, "getFolderWatermark" | "updateFolderWatermark" | "deleteFolderWatermark">);
    getFolderWatermark(folderId: string, headers?: GetFolderWatermarkHeadersArg): Promise<Watermark>;
    updateFolderWatermark(folderId: string, requestBody: UpdateFolderWatermarkRequestBodyArg, headers?: UpdateFolderWatermarkHeadersArg): Promise<Watermark>;
    deleteFolderWatermark(folderId: string, headers?: DeleteFolderWatermarkHeadersArg): Promise<undefined>;
}
export declare function serializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField(val: UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField): Json;
export declare function deserializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField(val: any): UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField;
export declare function serializeUpdateFolderWatermarkRequestBodyArgWatermarkField(val: UpdateFolderWatermarkRequestBodyArgWatermarkField): Json;
export declare function deserializeUpdateFolderWatermarkRequestBodyArgWatermarkField(val: any): UpdateFolderWatermarkRequestBodyArgWatermarkField;
export declare function serializeUpdateFolderWatermarkRequestBodyArg(val: UpdateFolderWatermarkRequestBodyArg): Json;
export declare function deserializeUpdateFolderWatermarkRequestBodyArg(val: any): UpdateFolderWatermarkRequestBodyArg;
