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
import { toString } from "../utils.js";
import { ByteStream } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { serializeJson } from "../json.js";
import { isJson } from "../json.js";
export class GetShieldInformationBarrierSegmentRestrictionByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetShieldInformationBarrierSegmentRestrictionByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export class DeleteShieldInformationBarrierSegmentRestrictionByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: DeleteShieldInformationBarrierSegmentRestrictionByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export interface GetShieldInformationBarrierSegmentRestrictionsQueryParamsArg {
    readonly shieldInformationBarrierSegmentId: string;
    readonly marker?: string;
    readonly limit?: number;
}
export class GetShieldInformationBarrierSegmentRestrictionsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetShieldInformationBarrierSegmentRestrictionsHeadersArg) {
        Object.assign(this, fields);
    }
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
export class CreateShieldInformationBarrierSegmentRestrictionHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: CreateShieldInformationBarrierSegmentRestrictionHeadersArg) {
        Object.assign(this, fields);
    }
}
export class ShieldInformationBarrierSegmentRestrictionsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarrierSegmentRestrictionsManager, "getShieldInformationBarrierSegmentRestrictionById" | "deleteShieldInformationBarrierSegmentRestrictionById" | "getShieldInformationBarrierSegmentRestrictions" | "createShieldInformationBarrierSegmentRestriction">) {
        Object.assign(this, fields);
    }
    async getShieldInformationBarrierSegmentRestrictionById(shieldInformationBarrierSegmentRestrictionId: string, headers: GetShieldInformationBarrierSegmentRestrictionByIdHeadersArg = new GetShieldInformationBarrierSegmentRestrictionByIdHeadersArg({})): Promise<ShieldInformationBarrierSegmentRestriction> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_restrictions/", shieldInformationBarrierSegmentRestrictionId) as string, { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrierSegmentRestriction(deserializeJson(response.text));
    }
    async deleteShieldInformationBarrierSegmentRestrictionById(shieldInformationBarrierSegmentRestrictionId: string, headers: DeleteShieldInformationBarrierSegmentRestrictionByIdHeadersArg = new DeleteShieldInformationBarrierSegmentRestrictionByIdHeadersArg({})): Promise<undefined> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_restrictions/", shieldInformationBarrierSegmentRestrictionId) as string, { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
    async getShieldInformationBarrierSegmentRestrictions(queryParams: GetShieldInformationBarrierSegmentRestrictionsQueryParamsArg, headers: GetShieldInformationBarrierSegmentRestrictionsHeadersArg = new GetShieldInformationBarrierSegmentRestrictionsHeadersArg({})): Promise<undefined> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["shield_information_barrier_segment_id"]: toString(queryParams.shieldInformationBarrierSegmentId), ["marker"]: toString(queryParams.marker), ["limit"]: toString(queryParams.limit) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_restrictions") as string, { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
    async createShieldInformationBarrierSegmentRestriction(requestBody: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArg, headers: CreateShieldInformationBarrierSegmentRestrictionHeadersArg = new CreateShieldInformationBarrierSegmentRestrictionHeadersArg({})): Promise<ShieldInformationBarrierSegmentRestriction> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_restrictions") as string, { method: "POST", headers: headersMap, body: serializeJson(serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrierSegmentRestriction(deserializeJson(response.text));
    }
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
    return { ["id"]: val.id == void 0 ? void 0 : val.id, ["type"]: val.type == void 0 ? void 0 : serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val.type) };
}
export function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField(val: any): CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField {
    const id: undefined | string = val.id == void 0 ? void 0 : val.id;
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
    return { ["id"]: val.id == void 0 ? void 0 : val.id, ["type"]: val.type == void 0 ? void 0 : serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField(val.type) };
}
export function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField(val: any): CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField {
    const id: undefined | string = val.id == void 0 ? void 0 : val.id;
    const type: undefined | CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField = val.type == void 0 ? void 0 : deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField(val.type);
    return { id: id, type: type } satisfies CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField;
}
export function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArg): Json {
    return { ["type"]: serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField(val.type), ["shield_information_barrier"]: val.shieldInformationBarrier == void 0 ? void 0 : serializeShieldInformationBarrierBase(val.shieldInformationBarrier), ["shield_information_barrier_segment"]: serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment), ["restricted_segment"]: serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField(val.restrictedSegment) };
}
export function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg(val: any): CreateShieldInformationBarrierSegmentRestrictionRequestBodyArg {
    const type: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField(val.type);
    const shieldInformationBarrier: undefined | ShieldInformationBarrierBase = val.shield_information_barrier == void 0 ? void 0 : deserializeShieldInformationBarrierBase(val.shield_information_barrier);
    const shieldInformationBarrierSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField(val.shield_information_barrier_segment);
    const restrictedSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField(val.restricted_segment);
    return { type: type, shieldInformationBarrier: shieldInformationBarrier, shieldInformationBarrierSegment: shieldInformationBarrierSegment, restrictedSegment: restrictedSegment } satisfies CreateShieldInformationBarrierSegmentRestrictionRequestBodyArg;
}
