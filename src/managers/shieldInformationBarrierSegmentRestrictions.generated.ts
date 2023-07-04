import { newSerializeShieldInformationBarrierSegmentRestriction } from "../schemas.generated.js";
import { newDeserializeShieldInformationBarrierSegmentRestriction } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeShieldInformationBarrierBase } from "../schemas.generated.js";
import { newDeserializeShieldInformationBarrierBase } from "../schemas.generated.js";
import { ShieldInformationBarrierSegmentRestriction } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { ShieldInformationBarrierBase } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
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
        return newDeserializeShieldInformationBarrierSegmentRestriction(deserializeJson(response.text));
    }
    async deleteShieldInformationBarrierSegmentRestrictionById(shieldInformationBarrierSegmentRestrictionId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_restrictions/", shieldInformationBarrierSegmentRestrictionId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getShieldInformationBarrierSegmentRestrictions(queryParams: GetShieldInformationBarrierSegmentRestrictionsQueryParamsArg): Promise<undefined> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_restrictions") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
    async createShieldInformationBarrierSegmentRestriction(requestBody: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArg): Promise<ShieldInformationBarrierSegmentRestriction> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_restrictions") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeShieldInformationBarrierSegmentRestriction(deserializeJson(response.text));
    }
}
export function newSerializeGetShieldInformationBarrierSegmentRestrictionsQueryParamsArg(val: GetShieldInformationBarrierSegmentRestrictionsQueryParamsArg): Json {
    return { ["shieldInformationBarrierSegmentId"]: val.shieldInformationBarrierSegmentId, ["marker"]: val.marker, ["limit"]: val.limit };
}
export function newDeserializeGetShieldInformationBarrierSegmentRestrictionsQueryParamsArg(val: any): GetShieldInformationBarrierSegmentRestrictionsQueryParamsArg {
    const shieldInformationBarrierSegmentId: string = val.shieldInformationBarrierSegmentId;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { shieldInformationBarrierSegmentId: shieldInformationBarrierSegmentId, marker: marker, limit: limit } satisfies GetShieldInformationBarrierSegmentRestrictionsQueryParamsArg;
}
export function newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField): Json {
    return val;
}
export function newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField(val: any): CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField\"";
    }
    if (val == "shield_information_barrier_segment_restriction") {
        return "shield_information_barrier_segment_restriction";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField): Json {
    return val;
}
export function newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val: any): CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField\"";
    }
    if (val == "shield_information_barrier_segment") {
        return "shield_information_barrier_segment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val.type) };
}
export function newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField(val: any): CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = val.type == void 0 ? void 0 : newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val.type);
    return { id: id, type: type } satisfies CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField;
}
export function newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField): Json {
    return val;
}
export function newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField(val: any): CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField\"";
    }
    if (val == "shield_information_barrier_segment") {
        return "shield_information_barrier_segment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField(val.type) };
}
export function newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField(val: any): CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField = val.type == void 0 ? void 0 : newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField(val.type);
    return { id: id, type: type } satisfies CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField;
}
export function newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArg): Json {
    return { ["type"]: newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField(val.type), ["shieldInformationBarrier"]: val.shieldInformationBarrier == void 0 ? void 0 : newSerializeShieldInformationBarrierBase(val.shieldInformationBarrier), ["shieldInformationBarrierSegment"]: newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment), ["restrictedSegment"]: newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField(val.restrictedSegment) };
}
export function newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg(val: any): CreateShieldInformationBarrierSegmentRestrictionRequestBodyArg {
    const type: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField = newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField(val.type);
    const shieldInformationBarrier: undefined | ShieldInformationBarrierBase = val.shieldInformationBarrier == void 0 ? void 0 : newDeserializeShieldInformationBarrierBase(val.shieldInformationBarrier);
    const shieldInformationBarrierSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField = newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment);
    const restrictedSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField = newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField(val.restrictedSegment);
    return { type: type, shieldInformationBarrier: shieldInformationBarrier, shieldInformationBarrierSegment: shieldInformationBarrierSegment, restrictedSegment: restrictedSegment } satisfies CreateShieldInformationBarrierSegmentRestrictionRequestBodyArg;
}
