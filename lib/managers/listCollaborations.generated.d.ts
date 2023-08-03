import { Collaborations } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface GetFileCollaborationsQueryParamsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly marker?: string;
}
export declare class GetFileCollaborationsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFileCollaborationsHeadersArg);
}
export interface GetFolderCollaborationsQueryParamsArg {
    readonly fields?: string;
}
export declare class GetFolderCollaborationsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFolderCollaborationsHeadersArg);
}
export type GetCollaborationsQueryParamsArgStatusField = "pending";
export interface GetCollaborationsQueryParamsArg {
    readonly status: GetCollaborationsQueryParamsArgStatusField;
    readonly fields?: string;
    readonly offset?: number;
    readonly limit?: number;
}
export declare class GetCollaborationsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetCollaborationsHeadersArg);
}
export interface GetGroupCollaborationsQueryParamsArg {
    readonly limit?: number;
    readonly offset?: number;
}
export declare class GetGroupCollaborationsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetGroupCollaborationsHeadersArg);
}
export declare class ListCollaborationsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ListCollaborationsManager, "getFileCollaborations" | "getFolderCollaborations" | "getCollaborations" | "getGroupCollaborations">);
    getFileCollaborations(fileId: string, queryParams?: GetFileCollaborationsQueryParamsArg, headers?: GetFileCollaborationsHeadersArg): Promise<Collaborations>;
    getFolderCollaborations(folderId: string, queryParams?: GetFolderCollaborationsQueryParamsArg, headers?: GetFolderCollaborationsHeadersArg): Promise<Collaborations>;
    getCollaborations(queryParams: GetCollaborationsQueryParamsArg, headers?: GetCollaborationsHeadersArg): Promise<Collaborations>;
    getGroupCollaborations(groupId: string, queryParams?: GetGroupCollaborationsQueryParamsArg, headers?: GetGroupCollaborationsHeadersArg): Promise<Collaborations>;
}
