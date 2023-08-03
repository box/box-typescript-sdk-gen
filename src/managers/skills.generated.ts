import { serializeSkillCardsMetadata } from "../schemas.generated.js";
import { deserializeSkillCardsMetadata } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from "../schemas.generated.js";
import { deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from "../schemas.generated.js";
import { SkillCardsMetadata } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from "../schemas.generated.js";
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
export class GetFileMetadataGlobalBoxSkillsCardsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetFileMetadataGlobalBoxSkillsCardsHeadersArg) {
        Object.assign(this, fields);
    }
}
export interface CreateFileMetadataGlobalBoxSkillsCardRequestBodyArg {
    readonly cards: readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[];
}
export class CreateFileMetadataGlobalBoxSkillsCardHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: CreateFileMetadataGlobalBoxSkillsCardHeadersArg) {
        Object.assign(this, fields);
    }
}
export class DeleteFileMetadataGlobalBoxSkillsCardHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: DeleteFileMetadataGlobalBoxSkillsCardHeadersArg) {
        Object.assign(this, fields);
    }
}
export type UpdateSkillInvocationByIdRequestBodyArgStatusField = "invoked" | "processing" | "success" | "transient_failure" | "permanent_failure";
export interface UpdateSkillInvocationByIdRequestBodyArgMetadataField {
    readonly cards?: readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[];
}
export type UpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField = "file";
export interface UpdateSkillInvocationByIdRequestBodyArgFileField {
    readonly type?: UpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField;
    readonly id?: string;
}
export type UpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField = "file_version";
export interface UpdateSkillInvocationByIdRequestBodyArgFileVersionField {
    readonly type?: UpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField;
    readonly id?: string;
}
export interface UpdateSkillInvocationByIdRequestBodyArgUsageField {
    readonly unit?: string;
    readonly value?: number;
}
export interface UpdateSkillInvocationByIdRequestBodyArg {
    readonly status: UpdateSkillInvocationByIdRequestBodyArgStatusField;
    readonly metadata: UpdateSkillInvocationByIdRequestBodyArgMetadataField;
    readonly file: UpdateSkillInvocationByIdRequestBodyArgFileField;
    readonly fileVersion?: UpdateSkillInvocationByIdRequestBodyArgFileVersionField;
    readonly usage?: UpdateSkillInvocationByIdRequestBodyArgUsageField;
}
export class UpdateSkillInvocationByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: UpdateSkillInvocationByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export class SkillsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SkillsManager, "getFileMetadataGlobalBoxSkillsCards" | "createFileMetadataGlobalBoxSkillsCard" | "deleteFileMetadataGlobalBoxSkillsCard" | "updateSkillInvocationById">) {
        Object.assign(this, fields);
    }
    async getFileMetadataGlobalBoxSkillsCards(fileId: string, headers: GetFileMetadataGlobalBoxSkillsCardsHeadersArg = new GetFileMetadataGlobalBoxSkillsCardsHeadersArg({})): Promise<SkillCardsMetadata> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/global/boxSkillsCards") as string, { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeSkillCardsMetadata(deserializeJson(response.text));
    }
    async createFileMetadataGlobalBoxSkillsCard(fileId: string, requestBody: CreateFileMetadataGlobalBoxSkillsCardRequestBodyArg, headers: CreateFileMetadataGlobalBoxSkillsCardHeadersArg = new CreateFileMetadataGlobalBoxSkillsCardHeadersArg({})): Promise<SkillCardsMetadata> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/global/boxSkillsCards") as string, { method: "POST", headers: headersMap, body: serializeJson(serializeCreateFileMetadataGlobalBoxSkillsCardRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeSkillCardsMetadata(deserializeJson(response.text));
    }
    async deleteFileMetadataGlobalBoxSkillsCard(fileId: string, headers: DeleteFileMetadataGlobalBoxSkillsCardHeadersArg = new DeleteFileMetadataGlobalBoxSkillsCardHeadersArg({})): Promise<undefined> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/global/boxSkillsCards") as string, { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
    async updateSkillInvocationById(skillId: string, requestBody: UpdateSkillInvocationByIdRequestBodyArg, headers: UpdateSkillInvocationByIdHeadersArg = new UpdateSkillInvocationByIdHeadersArg({})): Promise<undefined> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/skill_invocations/", skillId) as string, { method: "PUT", headers: headersMap, body: serializeJson(serializeUpdateSkillInvocationByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: void 0, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
}
export function serializeCreateFileMetadataGlobalBoxSkillsCardRequestBodyArg(val: CreateFileMetadataGlobalBoxSkillsCardRequestBodyArg): Json {
    return { ["cards"]: val.cards.map(function (item: KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard): any {
            return serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(item);
        }) as readonly any[] };
}
export function deserializeCreateFileMetadataGlobalBoxSkillsCardRequestBodyArg(val: any): CreateFileMetadataGlobalBoxSkillsCardRequestBodyArg {
    const cards: readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[] = val.cards.map(function (itm: Json): any {
        return deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(itm);
    }) as readonly any[];
    return { cards: cards } satisfies CreateFileMetadataGlobalBoxSkillsCardRequestBodyArg;
}
export function serializeUpdateSkillInvocationByIdRequestBodyArgStatusField(val: UpdateSkillInvocationByIdRequestBodyArgStatusField): Json {
    return val;
}
export function deserializeUpdateSkillInvocationByIdRequestBodyArgStatusField(val: any): UpdateSkillInvocationByIdRequestBodyArgStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateSkillInvocationByIdRequestBodyArgStatusField\"";
    }
    if (val == "invoked") {
        return "invoked";
    }
    if (val == "processing") {
        return "processing";
    }
    if (val == "success") {
        return "success";
    }
    if (val == "transient_failure") {
        return "transient_failure";
    }
    if (val == "permanent_failure") {
        return "permanent_failure";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUpdateSkillInvocationByIdRequestBodyArgMetadataField(val: UpdateSkillInvocationByIdRequestBodyArgMetadataField): Json {
    return { ["cards"]: val.cards == void 0 ? void 0 : val.cards.map(function (item: KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard): any {
            return serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(item);
        }) as readonly any[] };
}
export function deserializeUpdateSkillInvocationByIdRequestBodyArgMetadataField(val: any): UpdateSkillInvocationByIdRequestBodyArgMetadataField {
    const cards: undefined | readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[] = isJson(val.cards, "array") ? val.cards.map(function (itm: Json): any {
        return deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(itm);
    }) as readonly any[] : void 0;
    return { cards: cards } satisfies UpdateSkillInvocationByIdRequestBodyArgMetadataField;
}
export function serializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField(val: UpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField): Json {
    return val;
}
export function deserializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField(val: any): UpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUpdateSkillInvocationByIdRequestBodyArgFileField(val: UpdateSkillInvocationByIdRequestBodyArgFileField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : serializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField(val.type), ["id"]: val.id };
}
export function deserializeUpdateSkillInvocationByIdRequestBodyArgFileField(val: any): UpdateSkillInvocationByIdRequestBodyArgFileField {
    const type: undefined | UpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField = val.type == void 0 ? void 0 : deserializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { type: type, id: id } satisfies UpdateSkillInvocationByIdRequestBodyArgFileField;
}
export function serializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField(val: UpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField): Json {
    return val;
}
export function deserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField(val: any): UpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField\"";
    }
    if (val == "file_version") {
        return "file_version";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField(val: UpdateSkillInvocationByIdRequestBodyArgFileVersionField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : serializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField(val.type), ["id"]: val.id };
}
export function deserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField(val: any): UpdateSkillInvocationByIdRequestBodyArgFileVersionField {
    const type: undefined | UpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField = val.type == void 0 ? void 0 : deserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { type: type, id: id } satisfies UpdateSkillInvocationByIdRequestBodyArgFileVersionField;
}
export function serializeUpdateSkillInvocationByIdRequestBodyArgUsageField(val: UpdateSkillInvocationByIdRequestBodyArgUsageField): Json {
    return { ["unit"]: val.unit, ["value"]: val.value };
}
export function deserializeUpdateSkillInvocationByIdRequestBodyArgUsageField(val: any): UpdateSkillInvocationByIdRequestBodyArgUsageField {
    const unit: undefined | string = isJson(val.unit, "string") ? val.unit : void 0;
    const value: undefined | number = isJson(val.value, "number") ? val.value : void 0;
    return { unit: unit, value: value } satisfies UpdateSkillInvocationByIdRequestBodyArgUsageField;
}
export function serializeUpdateSkillInvocationByIdRequestBodyArg(val: UpdateSkillInvocationByIdRequestBodyArg): Json {
    return { ["status"]: serializeUpdateSkillInvocationByIdRequestBodyArgStatusField(val.status), ["metadata"]: serializeUpdateSkillInvocationByIdRequestBodyArgMetadataField(val.metadata), ["file"]: serializeUpdateSkillInvocationByIdRequestBodyArgFileField(val.file), ["file_version"]: val.fileVersion == void 0 ? void 0 : serializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField(val.fileVersion), ["usage"]: val.usage == void 0 ? void 0 : serializeUpdateSkillInvocationByIdRequestBodyArgUsageField(val.usage) };
}
export function deserializeUpdateSkillInvocationByIdRequestBodyArg(val: any): UpdateSkillInvocationByIdRequestBodyArg {
    const status: UpdateSkillInvocationByIdRequestBodyArgStatusField = deserializeUpdateSkillInvocationByIdRequestBodyArgStatusField(val.status);
    const metadata: UpdateSkillInvocationByIdRequestBodyArgMetadataField = deserializeUpdateSkillInvocationByIdRequestBodyArgMetadataField(val.metadata);
    const file: UpdateSkillInvocationByIdRequestBodyArgFileField = deserializeUpdateSkillInvocationByIdRequestBodyArgFileField(val.file);
    const fileVersion: undefined | UpdateSkillInvocationByIdRequestBodyArgFileVersionField = val.file_version == void 0 ? void 0 : deserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField(val.file_version);
    const usage: undefined | UpdateSkillInvocationByIdRequestBodyArgUsageField = val.usage == void 0 ? void 0 : deserializeUpdateSkillInvocationByIdRequestBodyArgUsageField(val.usage);
    return { status: status, metadata: metadata, file: file, fileVersion: fileVersion, usage: usage } satisfies UpdateSkillInvocationByIdRequestBodyArg;
}
