import { Metadatas } from "../schemas.generated.js";
import { Metadata } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export declare class GetFolderMetadataHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFolderMetadataHeadersArg);
}
export type GetFolderMetadataByIdScopeArg = "global" | "enterprise";
export declare class GetFolderMetadataByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFolderMetadataByIdHeadersArg);
}
export type CreateFolderMetadataByIdScopeArg = "global" | "enterprise";
export interface CreateFolderMetadataByIdRequestBodyArg {
}
export declare class CreateFolderMetadataByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateFolderMetadataByIdHeadersArg);
}
export type DeleteFolderMetadataByIdScopeArg = "global" | "enterprise";
export declare class DeleteFolderMetadataByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteFolderMetadataByIdHeadersArg);
}
export declare class FolderMetadataManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FolderMetadataManager, "getFolderMetadata" | "getFolderMetadataById" | "createFolderMetadataById" | "deleteFolderMetadataById">);
    getFolderMetadata(folderId: string, headers?: GetFolderMetadataHeadersArg): Promise<Metadatas>;
    getFolderMetadataById(folderId: string, scope: GetFolderMetadataByIdScopeArg, templateKey: string, headers?: GetFolderMetadataByIdHeadersArg): Promise<Metadata>;
    createFolderMetadataById(folderId: string, scope: CreateFolderMetadataByIdScopeArg, templateKey: string, requestBody: CreateFolderMetadataByIdRequestBodyArg, headers?: CreateFolderMetadataByIdHeadersArg): Promise<Metadata>;
    deleteFolderMetadataById(folderId: string, scope: DeleteFolderMetadataByIdScopeArg, templateKey: string, headers?: DeleteFolderMetadataByIdHeadersArg): Promise<undefined>;
}
export declare function serializeGetFolderMetadataByIdScopeArg(val: GetFolderMetadataByIdScopeArg): Json;
export declare function deserializeGetFolderMetadataByIdScopeArg(val: any): GetFolderMetadataByIdScopeArg;
export declare function serializeCreateFolderMetadataByIdScopeArg(val: CreateFolderMetadataByIdScopeArg): Json;
export declare function deserializeCreateFolderMetadataByIdScopeArg(val: any): CreateFolderMetadataByIdScopeArg;
export declare function serializeCreateFolderMetadataByIdRequestBodyArg(val: CreateFolderMetadataByIdRequestBodyArg): Json;
export declare function deserializeCreateFolderMetadataByIdRequestBodyArg(val: any): CreateFolderMetadataByIdRequestBodyArg;
export declare function serializeDeleteFolderMetadataByIdScopeArg(val: DeleteFolderMetadataByIdScopeArg): Json;
export declare function deserializeDeleteFolderMetadataByIdScopeArg(val: any): DeleteFolderMetadataByIdScopeArg;
