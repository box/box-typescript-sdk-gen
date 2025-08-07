import { deserializeSkillCardsMetadata } from '../schemas/skillCardsMetadata.generated.js';
import { serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from '../schemas/keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard.generated.js';
import { deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from '../schemas/keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetBoxSkillCardsOnFileOptionals {
    constructor(fields) {
        this.headers = new GetBoxSkillCardsOnFileHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateBoxSkillCardsOnFileOptionals {
    constructor(fields) {
        this.headers = new CreateBoxSkillCardsOnFileHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateBoxSkillCardsOnFileOptionals {
    constructor(fields) {
        this.headers = new UpdateBoxSkillCardsOnFileHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteBoxSkillCardsFromFileOptionals {
    constructor(fields) {
        this.headers = new DeleteBoxSkillCardsFromFileHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateAllSkillCardsOnFileOptionals {
    constructor(fields) {
        this.headers = new UpdateAllSkillCardsOnFileHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetBoxSkillCardsOnFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateBoxSkillCardsOnFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateBoxSkillCardsOnFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteBoxSkillCardsFromFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateAllSkillCardsOnFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class SkillsManager {
    constructor(fields) {
        this.networkSession = new NetworkSession({});
        if (fields.auth !== undefined) {
            this.auth = fields.auth;
        }
        if (fields.networkSession !== undefined) {
            this.networkSession = fields.networkSession;
        }
    }
    /**
       * List the Box Skills metadata cards that are attached to a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetBoxSkillCardsOnFileOptionalsInput} optionalsInput
       * @returns {Promise<SkillCardsMetadata>}
       */
    async getBoxSkillCardsOnFile(fileId, optionalsInput = {}) {
        const optionals = new GetBoxSkillCardsOnFileOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/metadata/global/boxSkillsCards'),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeSkillCardsMetadata(response.data),
            rawData: response.data,
        };
    }
    /**
       * Applies one or more Box Skills metadata cards to a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {CreateBoxSkillCardsOnFileRequestBody} requestBody Request body of createBoxSkillCardsOnFile method
       * @param {CreateBoxSkillCardsOnFileOptionalsInput} optionalsInput
       * @returns {Promise<SkillCardsMetadata>}
       */
    async createBoxSkillCardsOnFile(fileId, requestBody, optionalsInput = {}) {
        const optionals = new CreateBoxSkillCardsOnFileOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/metadata/global/boxSkillsCards'),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateBoxSkillCardsOnFileRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeSkillCardsMetadata(response.data),
            rawData: response.data,
        };
    }
    /**
       * Updates one or more Box Skills metadata cards to a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {readonly UpdateBoxSkillCardsOnFileRequestBody[]} requestBody Request body of updateBoxSkillCardsOnFile method
       * @param {UpdateBoxSkillCardsOnFileOptionalsInput} optionalsInput
       * @returns {Promise<SkillCardsMetadata>}
       */
    async updateBoxSkillCardsOnFile(fileId, requestBody, optionalsInput = {}) {
        const optionals = new UpdateBoxSkillCardsOnFileOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/metadata/global/boxSkillsCards'),
            method: 'PUT',
            headers: headersMap,
            data: requestBody.map(serializeUpdateBoxSkillCardsOnFileRequestBody),
            contentType: 'application/json-patch+json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeSkillCardsMetadata(response.data),
            rawData: response.data,
        };
    }
    /**
       * Removes any Box Skills cards metadata from a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {DeleteBoxSkillCardsFromFileOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteBoxSkillCardsFromFile(fileId, optionalsInput = {}) {
        const optionals = new DeleteBoxSkillCardsFromFileOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/metadata/global/boxSkillsCards'),
            method: 'DELETE',
            headers: headersMap,
            responseFormat: 'no_content',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return void 0;
    }
    /**
       * An alternative method that can be used to overwrite and update all Box Skill
       * metadata cards on a file.
       * @param {string} skillId The ID of the skill to apply this metadata for.
      Example: "33243242"
       * @param {UpdateAllSkillCardsOnFileRequestBody} requestBody Request body of updateAllSkillCardsOnFile method
       * @param {UpdateAllSkillCardsOnFileOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async updateAllSkillCardsOnFile(skillId, requestBody, optionalsInput = {}) {
        const optionals = new UpdateAllSkillCardsOnFileOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/skill_invocations/', toString(skillId)),
            method: 'PUT',
            headers: headersMap,
            data: serializeUpdateAllSkillCardsOnFileRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'no_content',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return void 0;
    }
}
export function serializeCreateBoxSkillCardsOnFileRequestBody(val) {
    return {
        ['cards']: val.cards.map(function (item) {
            return serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(item);
        }),
    };
}
export function deserializeCreateBoxSkillCardsOnFileRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateBoxSkillCardsOnFileRequestBody"',
        });
    }
    if (val.cards == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "cards" of type "CreateBoxSkillCardsOnFileRequestBody" to be defined',
        });
    }
    if (!sdIsList(val.cards)) {
        throw new BoxSdkError({
            message: 'Expecting array for "cards" of type "CreateBoxSkillCardsOnFileRequestBody"',
        });
    }
    const cards = sdIsList(val.cards)
        ? val.cards.map(function (itm) {
            return deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(itm);
        })
        : [];
    return { cards: cards };
}
export function serializeUpdateBoxSkillCardsOnFileRequestBodyOpField(val) {
    return val;
}
export function deserializeUpdateBoxSkillCardsOnFileRequestBodyOpField(val) {
    if (val == 'replace') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateBoxSkillCardsOnFileRequestBodyOpField",
    });
}
export function serializeUpdateBoxSkillCardsOnFileRequestBody(val) {
    return {
        ['op']: val.op == void 0
            ? val.op
            : serializeUpdateBoxSkillCardsOnFileRequestBodyOpField(val.op),
        ['path']: val.path,
        ['value']: val.value == void 0
            ? val.value
            : serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(val.value),
    };
}
export function deserializeUpdateBoxSkillCardsOnFileRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateBoxSkillCardsOnFileRequestBody"',
        });
    }
    const op = val.op == void 0
        ? void 0
        : deserializeUpdateBoxSkillCardsOnFileRequestBodyOpField(val.op);
    if (!(val.path == void 0) && !sdIsString(val.path)) {
        throw new BoxSdkError({
            message: 'Expecting string for "path" of type "UpdateBoxSkillCardsOnFileRequestBody"',
        });
    }
    const path = val.path == void 0 ? void 0 : val.path;
    const value = val.value == void 0
        ? void 0
        : deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(val.value);
    return {
        op: op,
        path: path,
        value: value,
    };
}
export function serializeUpdateAllSkillCardsOnFileRequestBodyStatusField(val) {
    return val;
}
export function deserializeUpdateAllSkillCardsOnFileRequestBodyStatusField(val) {
    if (val == 'invoked') {
        return val;
    }
    if (val == 'processing') {
        return val;
    }
    if (val == 'success') {
        return val;
    }
    if (val == 'transient_failure') {
        return val;
    }
    if (val == 'permanent_failure') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateAllSkillCardsOnFileRequestBodyStatusField",
    });
}
export function serializeUpdateAllSkillCardsOnFileRequestBodyMetadataField(val) {
    return {
        ['cards']: val.cards == void 0
            ? val.cards
            : val.cards.map(function (item) {
                return serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(item);
            }),
    };
}
export function deserializeUpdateAllSkillCardsOnFileRequestBodyMetadataField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateAllSkillCardsOnFileRequestBodyMetadataField"',
        });
    }
    if (!(val.cards == void 0) && !sdIsList(val.cards)) {
        throw new BoxSdkError({
            message: 'Expecting array for "cards" of type "UpdateAllSkillCardsOnFileRequestBodyMetadataField"',
        });
    }
    const cards = val.cards == void 0
        ? void 0
        : sdIsList(val.cards)
            ? val.cards.map(function (itm) {
                return deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(itm);
            })
            : [];
    return {
        cards: cards,
    };
}
export function serializeUpdateAllSkillCardsOnFileRequestBodyFileTypeField(val) {
    return val;
}
export function deserializeUpdateAllSkillCardsOnFileRequestBodyFileTypeField(val) {
    if (val == 'file') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateAllSkillCardsOnFileRequestBodyFileTypeField",
    });
}
export function serializeUpdateAllSkillCardsOnFileRequestBodyFileField(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeUpdateAllSkillCardsOnFileRequestBodyFileTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeUpdateAllSkillCardsOnFileRequestBodyFileField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateAllSkillCardsOnFileRequestBodyFileField"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeUpdateAllSkillCardsOnFileRequestBodyFileTypeField(val.type);
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "UpdateAllSkillCardsOnFileRequestBodyFileField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return {
        type: type,
        id: id,
    };
}
export function serializeUpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField(val) {
    return val;
}
export function deserializeUpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField(val) {
    if (val == 'file_version') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField",
    });
}
export function serializeUpdateAllSkillCardsOnFileRequestBodyFileVersionField(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeUpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeUpdateAllSkillCardsOnFileRequestBodyFileVersionField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateAllSkillCardsOnFileRequestBodyFileVersionField"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeUpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField(val.type);
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "UpdateAllSkillCardsOnFileRequestBodyFileVersionField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return {
        type: type,
        id: id,
    };
}
export function serializeUpdateAllSkillCardsOnFileRequestBodyUsageField(val) {
    return { ['unit']: val.unit, ['value']: val.value };
}
export function deserializeUpdateAllSkillCardsOnFileRequestBodyUsageField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateAllSkillCardsOnFileRequestBodyUsageField"',
        });
    }
    if (!(val.unit == void 0) && !sdIsString(val.unit)) {
        throw new BoxSdkError({
            message: 'Expecting string for "unit" of type "UpdateAllSkillCardsOnFileRequestBodyUsageField"',
        });
    }
    const unit = val.unit == void 0 ? void 0 : val.unit;
    if (!(val.value == void 0) && !sdIsNumber(val.value)) {
        throw new BoxSdkError({
            message: 'Expecting number for "value" of type "UpdateAllSkillCardsOnFileRequestBodyUsageField"',
        });
    }
    const value = val.value == void 0 ? void 0 : val.value;
    return {
        unit: unit,
        value: value,
    };
}
export function serializeUpdateAllSkillCardsOnFileRequestBody(val) {
    return {
        ['status']: serializeUpdateAllSkillCardsOnFileRequestBodyStatusField(val.status),
        ['metadata']: serializeUpdateAllSkillCardsOnFileRequestBodyMetadataField(val.metadata),
        ['file']: serializeUpdateAllSkillCardsOnFileRequestBodyFileField(val.file),
        ['file_version']: val.fileVersion == void 0
            ? val.fileVersion
            : serializeUpdateAllSkillCardsOnFileRequestBodyFileVersionField(val.fileVersion),
        ['usage']: val.usage == void 0
            ? val.usage
            : serializeUpdateAllSkillCardsOnFileRequestBodyUsageField(val.usage),
    };
}
export function deserializeUpdateAllSkillCardsOnFileRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateAllSkillCardsOnFileRequestBody"',
        });
    }
    if (val.status == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "status" of type "UpdateAllSkillCardsOnFileRequestBody" to be defined',
        });
    }
    const status = deserializeUpdateAllSkillCardsOnFileRequestBodyStatusField(val.status);
    if (val.metadata == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "metadata" of type "UpdateAllSkillCardsOnFileRequestBody" to be defined',
        });
    }
    const metadata = deserializeUpdateAllSkillCardsOnFileRequestBodyMetadataField(val.metadata);
    if (val.file == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "file" of type "UpdateAllSkillCardsOnFileRequestBody" to be defined',
        });
    }
    const file = deserializeUpdateAllSkillCardsOnFileRequestBodyFileField(val.file);
    const fileVersion = val.file_version == void 0
        ? void 0
        : deserializeUpdateAllSkillCardsOnFileRequestBodyFileVersionField(val.file_version);
    const usage = val.usage == void 0
        ? void 0
        : deserializeUpdateAllSkillCardsOnFileRequestBodyUsageField(val.usage);
    return {
        status: status,
        metadata: metadata,
        file: file,
        fileVersion: fileVersion,
        usage: usage,
    };
}
//# sourceMappingURL=skills.generated.js.map