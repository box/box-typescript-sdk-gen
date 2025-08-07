"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillsManager = exports.UpdateAllSkillCardsOnFileHeaders = exports.DeleteBoxSkillCardsFromFileHeaders = exports.UpdateBoxSkillCardsOnFileHeaders = exports.CreateBoxSkillCardsOnFileHeaders = exports.GetBoxSkillCardsOnFileHeaders = exports.UpdateAllSkillCardsOnFileOptionals = exports.DeleteBoxSkillCardsFromFileOptionals = exports.UpdateBoxSkillCardsOnFileOptionals = exports.CreateBoxSkillCardsOnFileOptionals = exports.GetBoxSkillCardsOnFileOptionals = void 0;
exports.serializeCreateBoxSkillCardsOnFileRequestBody = serializeCreateBoxSkillCardsOnFileRequestBody;
exports.deserializeCreateBoxSkillCardsOnFileRequestBody = deserializeCreateBoxSkillCardsOnFileRequestBody;
exports.serializeUpdateBoxSkillCardsOnFileRequestBodyOpField = serializeUpdateBoxSkillCardsOnFileRequestBodyOpField;
exports.deserializeUpdateBoxSkillCardsOnFileRequestBodyOpField = deserializeUpdateBoxSkillCardsOnFileRequestBodyOpField;
exports.serializeUpdateBoxSkillCardsOnFileRequestBody = serializeUpdateBoxSkillCardsOnFileRequestBody;
exports.deserializeUpdateBoxSkillCardsOnFileRequestBody = deserializeUpdateBoxSkillCardsOnFileRequestBody;
exports.serializeUpdateAllSkillCardsOnFileRequestBodyStatusField = serializeUpdateAllSkillCardsOnFileRequestBodyStatusField;
exports.deserializeUpdateAllSkillCardsOnFileRequestBodyStatusField = deserializeUpdateAllSkillCardsOnFileRequestBodyStatusField;
exports.serializeUpdateAllSkillCardsOnFileRequestBodyMetadataField = serializeUpdateAllSkillCardsOnFileRequestBodyMetadataField;
exports.deserializeUpdateAllSkillCardsOnFileRequestBodyMetadataField = deserializeUpdateAllSkillCardsOnFileRequestBodyMetadataField;
exports.serializeUpdateAllSkillCardsOnFileRequestBodyFileTypeField = serializeUpdateAllSkillCardsOnFileRequestBodyFileTypeField;
exports.deserializeUpdateAllSkillCardsOnFileRequestBodyFileTypeField = deserializeUpdateAllSkillCardsOnFileRequestBodyFileTypeField;
exports.serializeUpdateAllSkillCardsOnFileRequestBodyFileField = serializeUpdateAllSkillCardsOnFileRequestBodyFileField;
exports.deserializeUpdateAllSkillCardsOnFileRequestBodyFileField = deserializeUpdateAllSkillCardsOnFileRequestBodyFileField;
exports.serializeUpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField = serializeUpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField;
exports.deserializeUpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField = deserializeUpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField;
exports.serializeUpdateAllSkillCardsOnFileRequestBodyFileVersionField = serializeUpdateAllSkillCardsOnFileRequestBodyFileVersionField;
exports.deserializeUpdateAllSkillCardsOnFileRequestBodyFileVersionField = deserializeUpdateAllSkillCardsOnFileRequestBodyFileVersionField;
exports.serializeUpdateAllSkillCardsOnFileRequestBodyUsageField = serializeUpdateAllSkillCardsOnFileRequestBodyUsageField;
exports.deserializeUpdateAllSkillCardsOnFileRequestBodyUsageField = deserializeUpdateAllSkillCardsOnFileRequestBodyUsageField;
exports.serializeUpdateAllSkillCardsOnFileRequestBody = serializeUpdateAllSkillCardsOnFileRequestBody;
exports.deserializeUpdateAllSkillCardsOnFileRequestBody = deserializeUpdateAllSkillCardsOnFileRequestBody;
const skillCardsMetadata_generated_js_1 = require("../schemas/skillCardsMetadata.generated.js");
const keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard_generated_js_1 = require("../schemas/keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard.generated.js");
const keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard_generated_js_2 = require("../schemas/keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
class GetBoxSkillCardsOnFileOptionals {
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
exports.GetBoxSkillCardsOnFileOptionals = GetBoxSkillCardsOnFileOptionals;
class CreateBoxSkillCardsOnFileOptionals {
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
exports.CreateBoxSkillCardsOnFileOptionals = CreateBoxSkillCardsOnFileOptionals;
class UpdateBoxSkillCardsOnFileOptionals {
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
exports.UpdateBoxSkillCardsOnFileOptionals = UpdateBoxSkillCardsOnFileOptionals;
class DeleteBoxSkillCardsFromFileOptionals {
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
exports.DeleteBoxSkillCardsFromFileOptionals = DeleteBoxSkillCardsFromFileOptionals;
class UpdateAllSkillCardsOnFileOptionals {
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
exports.UpdateAllSkillCardsOnFileOptionals = UpdateAllSkillCardsOnFileOptionals;
class GetBoxSkillCardsOnFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetBoxSkillCardsOnFileHeaders = GetBoxSkillCardsOnFileHeaders;
class CreateBoxSkillCardsOnFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateBoxSkillCardsOnFileHeaders = CreateBoxSkillCardsOnFileHeaders;
class UpdateBoxSkillCardsOnFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateBoxSkillCardsOnFileHeaders = UpdateBoxSkillCardsOnFileHeaders;
class DeleteBoxSkillCardsFromFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteBoxSkillCardsFromFileHeaders = DeleteBoxSkillCardsFromFileHeaders;
class UpdateAllSkillCardsOnFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateAllSkillCardsOnFileHeaders = UpdateAllSkillCardsOnFileHeaders;
class SkillsManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
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
    getBoxSkillCardsOnFile(fileId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, optionalsInput = {}) {
            const optionals = new GetBoxSkillCardsOnFileOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/metadata/global/boxSkillsCards'),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, skillCardsMetadata_generated_js_1.deserializeSkillCardsMetadata)(response.data)), { rawData: response.data });
        });
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
    createBoxSkillCardsOnFile(fileId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, requestBody, optionalsInput = {}) {
            const optionals = new CreateBoxSkillCardsOnFileOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/metadata/global/boxSkillsCards'),
                method: 'POST',
                headers: headersMap,
                data: serializeCreateBoxSkillCardsOnFileRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, skillCardsMetadata_generated_js_1.deserializeSkillCardsMetadata)(response.data)), { rawData: response.data });
        });
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
    updateBoxSkillCardsOnFile(fileId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, requestBody, optionalsInput = {}) {
            const optionals = new UpdateBoxSkillCardsOnFileOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/metadata/global/boxSkillsCards'),
                method: 'PUT',
                headers: headersMap,
                data: requestBody.map(serializeUpdateBoxSkillCardsOnFileRequestBody),
                contentType: 'application/json-patch+json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, skillCardsMetadata_generated_js_1.deserializeSkillCardsMetadata)(response.data)), { rawData: response.data });
        });
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
    deleteBoxSkillCardsFromFile(fileId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, optionalsInput = {}) {
            const optionals = new DeleteBoxSkillCardsFromFileOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/metadata/global/boxSkillsCards'),
                method: 'DELETE',
                headers: headersMap,
                responseFormat: 'no_content',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return void 0;
        });
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
    updateAllSkillCardsOnFile(skillId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (skillId, requestBody, optionalsInput = {}) {
            const optionals = new UpdateAllSkillCardsOnFileOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/skill_invocations/', (0, utils_js_2.toString)(skillId)),
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
        });
    }
}
exports.SkillsManager = SkillsManager;
function serializeCreateBoxSkillCardsOnFileRequestBody(val) {
    return {
        ['cards']: val.cards.map(function (item) {
            return (0, keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard_generated_js_1.serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard)(item);
        }),
    };
}
function deserializeCreateBoxSkillCardsOnFileRequestBody(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateBoxSkillCardsOnFileRequestBody"',
        });
    }
    if (val.cards == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "cards" of type "CreateBoxSkillCardsOnFileRequestBody" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsList)(val.cards)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "cards" of type "CreateBoxSkillCardsOnFileRequestBody"',
        });
    }
    const cards = (0, json_js_3.sdIsList)(val.cards)
        ? val.cards.map(function (itm) {
            return (0, keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard_generated_js_2.deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard)(itm);
        })
        : [];
    return { cards: cards };
}
function serializeUpdateBoxSkillCardsOnFileRequestBodyOpField(val) {
    return val;
}
function deserializeUpdateBoxSkillCardsOnFileRequestBodyOpField(val) {
    if (val == 'replace') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateBoxSkillCardsOnFileRequestBodyOpField",
    });
}
function serializeUpdateBoxSkillCardsOnFileRequestBody(val) {
    return {
        ['op']: val.op == void 0
            ? val.op
            : serializeUpdateBoxSkillCardsOnFileRequestBodyOpField(val.op),
        ['path']: val.path,
        ['value']: val.value == void 0
            ? val.value
            : (0, keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard_generated_js_1.serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard)(val.value),
    };
}
function deserializeUpdateBoxSkillCardsOnFileRequestBody(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateBoxSkillCardsOnFileRequestBody"',
        });
    }
    const op = val.op == void 0
        ? void 0
        : deserializeUpdateBoxSkillCardsOnFileRequestBodyOpField(val.op);
    if (!(val.path == void 0) && !(0, json_js_2.sdIsString)(val.path)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "path" of type "UpdateBoxSkillCardsOnFileRequestBody"',
        });
    }
    const path = val.path == void 0 ? void 0 : val.path;
    const value = val.value == void 0
        ? void 0
        : (0, keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard_generated_js_2.deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard)(val.value);
    return {
        op: op,
        path: path,
        value: value,
    };
}
function serializeUpdateAllSkillCardsOnFileRequestBodyStatusField(val) {
    return val;
}
function deserializeUpdateAllSkillCardsOnFileRequestBodyStatusField(val) {
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
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateAllSkillCardsOnFileRequestBodyStatusField",
    });
}
function serializeUpdateAllSkillCardsOnFileRequestBodyMetadataField(val) {
    return {
        ['cards']: val.cards == void 0
            ? val.cards
            : val.cards.map(function (item) {
                return (0, keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard_generated_js_1.serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard)(item);
            }),
    };
}
function deserializeUpdateAllSkillCardsOnFileRequestBodyMetadataField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateAllSkillCardsOnFileRequestBodyMetadataField"',
        });
    }
    if (!(val.cards == void 0) && !(0, json_js_3.sdIsList)(val.cards)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "cards" of type "UpdateAllSkillCardsOnFileRequestBodyMetadataField"',
        });
    }
    const cards = val.cards == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.cards)
            ? val.cards.map(function (itm) {
                return (0, keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard_generated_js_2.deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard)(itm);
            })
            : [];
    return {
        cards: cards,
    };
}
function serializeUpdateAllSkillCardsOnFileRequestBodyFileTypeField(val) {
    return val;
}
function deserializeUpdateAllSkillCardsOnFileRequestBodyFileTypeField(val) {
    if (val == 'file') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateAllSkillCardsOnFileRequestBodyFileTypeField",
    });
}
function serializeUpdateAllSkillCardsOnFileRequestBodyFileField(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeUpdateAllSkillCardsOnFileRequestBodyFileTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeUpdateAllSkillCardsOnFileRequestBodyFileField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateAllSkillCardsOnFileRequestBodyFileField"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeUpdateAllSkillCardsOnFileRequestBodyFileTypeField(val.type);
    if (!(val.id == void 0) && !(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "UpdateAllSkillCardsOnFileRequestBodyFileField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return {
        type: type,
        id: id,
    };
}
function serializeUpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField(val) {
    return val;
}
function deserializeUpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField(val) {
    if (val == 'file_version') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField",
    });
}
function serializeUpdateAllSkillCardsOnFileRequestBodyFileVersionField(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeUpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeUpdateAllSkillCardsOnFileRequestBodyFileVersionField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateAllSkillCardsOnFileRequestBodyFileVersionField"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeUpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField(val.type);
    if (!(val.id == void 0) && !(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "UpdateAllSkillCardsOnFileRequestBodyFileVersionField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return {
        type: type,
        id: id,
    };
}
function serializeUpdateAllSkillCardsOnFileRequestBodyUsageField(val) {
    return { ['unit']: val.unit, ['value']: val.value };
}
function deserializeUpdateAllSkillCardsOnFileRequestBodyUsageField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateAllSkillCardsOnFileRequestBodyUsageField"',
        });
    }
    if (!(val.unit == void 0) && !(0, json_js_2.sdIsString)(val.unit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "unit" of type "UpdateAllSkillCardsOnFileRequestBodyUsageField"',
        });
    }
    const unit = val.unit == void 0 ? void 0 : val.unit;
    if (!(val.value == void 0) && !(0, json_js_1.sdIsNumber)(val.value)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "value" of type "UpdateAllSkillCardsOnFileRequestBodyUsageField"',
        });
    }
    const value = val.value == void 0 ? void 0 : val.value;
    return {
        unit: unit,
        value: value,
    };
}
function serializeUpdateAllSkillCardsOnFileRequestBody(val) {
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
function deserializeUpdateAllSkillCardsOnFileRequestBody(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateAllSkillCardsOnFileRequestBody"',
        });
    }
    if (val.status == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "status" of type "UpdateAllSkillCardsOnFileRequestBody" to be defined',
        });
    }
    const status = deserializeUpdateAllSkillCardsOnFileRequestBodyStatusField(val.status);
    if (val.metadata == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "metadata" of type "UpdateAllSkillCardsOnFileRequestBody" to be defined',
        });
    }
    const metadata = deserializeUpdateAllSkillCardsOnFileRequestBodyMetadataField(val.metadata);
    if (val.file == void 0) {
        throw new errors_js_1.BoxSdkError({
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