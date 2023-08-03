import { Watermark } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export declare class GetFileWatermarkHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFileWatermarkHeadersArg);
}
export type UpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField = "default";
export interface UpdateFileWatermarkRequestBodyArgWatermarkField {
    readonly imprint: UpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField;
}
export interface UpdateFileWatermarkRequestBodyArg {
    readonly watermark: UpdateFileWatermarkRequestBodyArgWatermarkField;
}
export declare class UpdateFileWatermarkHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UpdateFileWatermarkHeadersArg);
}
export declare class DeleteFileWatermarkHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteFileWatermarkHeadersArg);
}
export declare class FileWatermarksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileWatermarksManager, "getFileWatermark" | "updateFileWatermark" | "deleteFileWatermark">);
    getFileWatermark(fileId: string, headers?: GetFileWatermarkHeadersArg): Promise<Watermark>;
    updateFileWatermark(fileId: string, requestBody: UpdateFileWatermarkRequestBodyArg, headers?: UpdateFileWatermarkHeadersArg): Promise<Watermark>;
    deleteFileWatermark(fileId: string, headers?: DeleteFileWatermarkHeadersArg): Promise<undefined>;
}
export declare function serializeUpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField(val: UpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField): Json;
export declare function deserializeUpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField(val: any): UpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField;
export declare function serializeUpdateFileWatermarkRequestBodyArgWatermarkField(val: UpdateFileWatermarkRequestBodyArgWatermarkField): Json;
export declare function deserializeUpdateFileWatermarkRequestBodyArgWatermarkField(val: any): UpdateFileWatermarkRequestBodyArgWatermarkField;
export declare function serializeUpdateFileWatermarkRequestBodyArg(val: UpdateFileWatermarkRequestBodyArg): Json;
export declare function deserializeUpdateFileWatermarkRequestBodyArg(val: any): UpdateFileWatermarkRequestBodyArg;
