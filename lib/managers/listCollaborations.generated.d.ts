import { Collaborations } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetFileCollaborationsQueryParamsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly marker?: string;
}
export interface GetFolderCollaborationsQueryParamsArg {
    readonly fields?: string;
}
export type GetCollaborationsQueryParamsArgStatusField = "pending";
export interface GetCollaborationsQueryParamsArg {
    readonly status: GetCollaborationsQueryParamsArgStatusField;
    readonly fields?: string;
    readonly offset?: number;
    readonly limit?: number;
}
export interface GetGroupCollaborationsQueryParamsArg {
    readonly limit?: number;
    readonly offset?: number;
}
export declare class ListCollaborationsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ListCollaborationsManager, "getFileCollaborations" | "getFolderCollaborations" | "getCollaborations" | "getGroupCollaborations">);
    getFileCollaborations(fileId: string, queryParams?: GetFileCollaborationsQueryParamsArg): Promise<Collaborations>;
    getFolderCollaborations(folderId: string, queryParams?: GetFolderCollaborationsQueryParamsArg): Promise<Collaborations>;
    getCollaborations(queryParams: GetCollaborationsQueryParamsArg): Promise<Collaborations>;
    getGroupCollaborations(groupId: string, queryParams?: GetGroupCollaborationsQueryParamsArg): Promise<Collaborations>;
}
export declare function serializeGetFileCollaborationsQueryParamsArg(val: GetFileCollaborationsQueryParamsArg): Json;
export declare function deserializeGetFileCollaborationsQueryParamsArg(val: any): GetFileCollaborationsQueryParamsArg;
export declare function serializeGetFolderCollaborationsQueryParamsArg(val: GetFolderCollaborationsQueryParamsArg): Json;
export declare function deserializeGetFolderCollaborationsQueryParamsArg(val: any): GetFolderCollaborationsQueryParamsArg;
export declare function serializeGetCollaborationsQueryParamsArgStatusField(val: GetCollaborationsQueryParamsArgStatusField): Json;
export declare function deserializeGetCollaborationsQueryParamsArgStatusField(val: any): GetCollaborationsQueryParamsArgStatusField;
export declare function serializeGetCollaborationsQueryParamsArg(val: GetCollaborationsQueryParamsArg): Json;
export declare function deserializeGetCollaborationsQueryParamsArg(val: any): GetCollaborationsQueryParamsArg;
export declare function serializeGetGroupCollaborationsQueryParamsArg(val: GetGroupCollaborationsQueryParamsArg): Json;
export declare function deserializeGetGroupCollaborationsQueryParamsArg(val: any): GetGroupCollaborationsQueryParamsArg;
