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
    getFileCollaborations(fileId: string, queryParams?: undefined | GetFileCollaborationsQueryParamsArg): Promise<Collaborations>;
    getFolderCollaborations(folderId: string, queryParams?: undefined | GetFolderCollaborationsQueryParamsArg): Promise<Collaborations>;
    getCollaborations(queryParams: GetCollaborationsQueryParamsArg): Promise<Collaborations>;
    getGroupCollaborations(groupId: string, queryParams?: undefined | GetGroupCollaborationsQueryParamsArg): Promise<Collaborations>;
}
export declare function newSerializeGetFileCollaborationsQueryParamsArg(val: GetFileCollaborationsQueryParamsArg): Json;
export declare function newDeserializeGetFileCollaborationsQueryParamsArg(val: any): GetFileCollaborationsQueryParamsArg;
export declare function newSerializeGetFolderCollaborationsQueryParamsArg(val: GetFolderCollaborationsQueryParamsArg): Json;
export declare function newDeserializeGetFolderCollaborationsQueryParamsArg(val: any): GetFolderCollaborationsQueryParamsArg;
export declare function newSerializeGetCollaborationsQueryParamsArgStatusField(val: GetCollaborationsQueryParamsArgStatusField): Json;
export declare function newDeserializeGetCollaborationsQueryParamsArgStatusField(val: any): GetCollaborationsQueryParamsArgStatusField;
export declare function newSerializeGetCollaborationsQueryParamsArg(val: GetCollaborationsQueryParamsArg): Json;
export declare function newDeserializeGetCollaborationsQueryParamsArg(val: any): GetCollaborationsQueryParamsArg;
export declare function newSerializeGetGroupCollaborationsQueryParamsArg(val: GetGroupCollaborationsQueryParamsArg): Json;
export declare function newDeserializeGetGroupCollaborationsQueryParamsArg(val: any): GetGroupCollaborationsQueryParamsArg;
