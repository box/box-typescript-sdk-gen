import { serializeShieldInformationBarrierSegmentRestriction } from "../schemas.generated.js";
import { deserializeShieldInformationBarrierSegmentRestriction } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeShieldInformationBarrierBase } from "../schemas.generated.js";
import { deserializeShieldInformationBarrierBase } from "../schemas.generated.js";
import { ShieldInformationBarrierSegmentRestriction } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { ShieldInformationBarrierBase } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
export interface GetShieldInformationBarrierSegmentRestrictionsQueryParamsArg {
    readonly shieldInformationBarrierSegmentId: string;
    readonly marker?: string;
    readonly limit?: number;
}
export type CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField = "shield_information_barrier_segment_restriction";
export type CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = "shield_information_barrier_segment";
export interface CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField {
    readonly id?: string;
    readonly type?: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField;
}
export type CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField = "shield_information_barrier_segment";
export interface CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField {
    readonly id?: string;
    readonly type?: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField;
}
export interface CreateShieldInformationBarrierSegmentRestrictionRequestBodyArg {
    readonly type: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField;
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    readonly shieldInformationBarrierSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField;
    readonly restrictedSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField;
}
export class ShieldInformationBarrierSegmentRestrictionsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarrierSegmentRestrictionsManager, "getShieldInformationBarrierSegmentRestrictionById" | "deleteShieldInformationBarrierSegmentRestrictionById" | "getShieldInformationBarrierSegmentRestrictions" | "createShieldInformationBarrierSegmentRestriction">) {
        Object.assign(this, fields);
    }
    async getShieldInformationBarrierSegmentRestrictionById(shieldInformationBarrierSegmentRestrictionId: string): Promise<ShieldInformationBarrierSegmentRestriction> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_restrictions/", shieldInformationBarrierSegmentRestrictionId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrierSegmentRestriction(deserializeJson(response.text));
    }
    async deleteShieldInformationBarrierSegmentRestrictionById(shieldInformationBarrierSegmentRestrictionId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_restrictions/", shieldInformationBarrierSegmentRestrictionId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getShieldInformationBarrierSegmentRestrictions(queryParams: GetShieldInformationBarrierSegmentRestrictionsQueryParamsArg): Promise<undefined> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_restrictions") as string, { method: "GET", params: prepareParams(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
    async createShieldInformationBarrierSegmentRestriction(requestBody: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArg): Promise<ShieldInformationBarrierSegmentRestriction> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_restrictions") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrierSegmentRestriction(deserializeJson(response.text));
    }
}
export function serializeGetShieldInformationBarrierSegmentRestrictionsQueryParamsArg(val: GetShieldInformationBarrierSegmentRestrictionsQueryParamsArg): Json {
    return { ["shieldInformationBarrierSegmentId"]: val.shieldInformationBarrierSegmentId, ["marker"]: val.marker, ["limit"]: val.limit };
}
export function deserializeGetShieldInformationBarrierSegmentRestrictionsQueryParamsArg(val: any): GetShieldInformationBarrierSegmentRestrictionsQueryParamsArg {
    const shieldInformationBarrierSegmentId: string = val.shieldInformationBarrierSegmentId;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { shieldInformationBarrierSegmentId: shieldInformationBarrierSegmentId, marker: marker, limit: limit } satisfies GetShieldInformationBarrierSegmentRestrictionsQueryParamsArg;
}
export function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField): Json {
    return val;
}
export function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField(val: any): CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField\"";
    }
    if (val == "shield_information_barrier_segment_restriction") {
        return "shield_information_barrier_segment_restriction";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField): Json {
    return val;
}
export function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val: any): CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField\"";
    }
    if (val == "shield_information_barrier_segment") {
        return "shield_information_barrier_segment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val.type) };
}
export function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField(val: any): CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = val.type == void 0 ? void 0 : deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val.type);
    return { id: id, type: type } satisfies CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField;
}
export function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField): Json {
    return val;
}
export function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField(val: any): CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField\"";
    }
    if (val == "shield_information_barrier_segment") {
        return "shield_information_barrier_segment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField(val.type) };
}
export function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField(val: any): CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField = val.type == void 0 ? void 0 : deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField(val.type);
    return { id: id, type: type } satisfies CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField;
}
export function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArg): Json {
    return { ["type"]: serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField(val.type), ["shieldInformationBarrier"]: val.shieldInformationBarrier == void 0 ? void 0 : serializeShieldInformationBarrierBase(val.shieldInformationBarrier), ["shieldInformationBarrierSegment"]: serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment), ["restrictedSegment"]: serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField(val.restrictedSegment) };
}
export function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg(val: any): CreateShieldInformationBarrierSegmentRestrictionRequestBodyArg {
    const type: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField(val.type);
    const shieldInformationBarrier: undefined | ShieldInformationBarrierBase = val.shieldInformationBarrier == void 0 ? void 0 : deserializeShieldInformationBarrierBase(val.shieldInformationBarrier);
    const shieldInformationBarrierSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment);
    const restrictedSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField(val.restrictedSegment);
    return { type: type, shieldInformationBarrier: shieldInformationBarrier, shieldInformationBarrierSegment: shieldInformationBarrierSegment, restrictedSegment: restrictedSegment } satisfies CreateShieldInformationBarrierSegmentRestrictionRequestBodyArg;
}
