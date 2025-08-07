import { SkillCardsMetadata } from '../schemas/skillCardsMetadata.generated.js';
import { KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from '../schemas/keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetBoxSkillCardsOnFileOptionals {
    readonly headers: GetBoxSkillCardsOnFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetBoxSkillCardsOnFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetBoxSkillCardsOnFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetBoxSkillCardsOnFileOptionalsInput {
    readonly headers?: GetBoxSkillCardsOnFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateBoxSkillCardsOnFileOptionals {
    readonly headers: CreateBoxSkillCardsOnFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateBoxSkillCardsOnFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateBoxSkillCardsOnFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateBoxSkillCardsOnFileOptionalsInput {
    readonly headers?: CreateBoxSkillCardsOnFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateBoxSkillCardsOnFileOptionals {
    readonly headers: UpdateBoxSkillCardsOnFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateBoxSkillCardsOnFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateBoxSkillCardsOnFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateBoxSkillCardsOnFileOptionalsInput {
    readonly headers?: UpdateBoxSkillCardsOnFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteBoxSkillCardsFromFileOptionals {
    readonly headers: DeleteBoxSkillCardsFromFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteBoxSkillCardsFromFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteBoxSkillCardsFromFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteBoxSkillCardsFromFileOptionalsInput {
    readonly headers?: DeleteBoxSkillCardsFromFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateAllSkillCardsOnFileOptionals {
    readonly headers: UpdateAllSkillCardsOnFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateAllSkillCardsOnFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateAllSkillCardsOnFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateAllSkillCardsOnFileOptionalsInput {
    readonly headers?: UpdateAllSkillCardsOnFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetBoxSkillCardsOnFileHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetBoxSkillCardsOnFileHeaders, 'extraHeaders'> & Partial<Pick<GetBoxSkillCardsOnFileHeaders, 'extraHeaders'>>);
}
export interface GetBoxSkillCardsOnFileHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateBoxSkillCardsOnFileRequestBody {
    /**
     * A list of Box Skill cards to apply to this file. */
    readonly cards: readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[];
    readonly rawData?: SerializedData;
}
export declare class CreateBoxSkillCardsOnFileHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateBoxSkillCardsOnFileHeaders, 'extraHeaders'> & Partial<Pick<CreateBoxSkillCardsOnFileHeaders, 'extraHeaders'>>);
}
export interface CreateBoxSkillCardsOnFileHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateBoxSkillCardsOnFileRequestBodyOpField = 'replace' | string;
export interface UpdateBoxSkillCardsOnFileRequestBody {
    /**
     * The value will always be `replace`. */
    readonly op?: UpdateBoxSkillCardsOnFileRequestBodyOpField;
    /**
     * The JSON Path that represents the card to replace. In most cases
     * this will be in the format `/cards/{index}` where `index` is the
     * zero-indexed position of the card in the list of cards. */
    readonly path?: string;
    readonly value?: KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard;
    readonly rawData?: SerializedData;
}
export declare class UpdateBoxSkillCardsOnFileHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateBoxSkillCardsOnFileHeaders, 'extraHeaders'> & Partial<Pick<UpdateBoxSkillCardsOnFileHeaders, 'extraHeaders'>>);
}
export interface UpdateBoxSkillCardsOnFileHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteBoxSkillCardsFromFileHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteBoxSkillCardsFromFileHeaders, 'extraHeaders'> & Partial<Pick<DeleteBoxSkillCardsFromFileHeaders, 'extraHeaders'>>);
}
export interface DeleteBoxSkillCardsFromFileHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateAllSkillCardsOnFileRequestBodyStatusField = 'invoked' | 'processing' | 'success' | 'transient_failure' | 'permanent_failure' | string;
export interface UpdateAllSkillCardsOnFileRequestBodyMetadataField {
    /**
     * A list of Box Skill cards to apply to this file. */
    readonly cards?: readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[];
    readonly rawData?: SerializedData;
}
export type UpdateAllSkillCardsOnFileRequestBodyFileTypeField = 'file';
export interface UpdateAllSkillCardsOnFileRequestBodyFileField {
    /**
     * The value will always be `file`. */
    readonly type?: UpdateAllSkillCardsOnFileRequestBodyFileTypeField;
    /**
     * The ID of the file. */
    readonly id?: string;
    readonly rawData?: SerializedData;
}
export type UpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField = 'file_version';
export interface UpdateAllSkillCardsOnFileRequestBodyFileVersionField {
    /**
     * The value will always be `file_version`. */
    readonly type?: UpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField;
    /**
     * The ID of the file version. */
    readonly id?: string;
    readonly rawData?: SerializedData;
}
export interface UpdateAllSkillCardsOnFileRequestBodyUsageField {
    /**
     * The value will always be `file`. */
    readonly unit?: string;
    /**
     * Number of resources affected. */
    readonly value?: number;
    readonly rawData?: SerializedData;
}
export interface UpdateAllSkillCardsOnFileRequestBody {
    /**
     * Defines the status of this invocation. Set this to `success` when setting Skill cards. */
    readonly status: UpdateAllSkillCardsOnFileRequestBodyStatusField;
    /**
     * The metadata to set for this skill. This is a list of
     * Box Skills cards. These cards will overwrite any existing Box
     * skill cards on the file. */
    readonly metadata: UpdateAllSkillCardsOnFileRequestBodyMetadataField;
    /**
     * The file to assign the cards to. */
    readonly file: UpdateAllSkillCardsOnFileRequestBodyFileField;
    /**
     * The optional file version to assign the cards to. */
    readonly fileVersion?: UpdateAllSkillCardsOnFileRequestBodyFileVersionField;
    /**
     * A descriptor that defines what items are affected by this call.
     *
     * Set this to the default values when setting a card to a `success`
     * state, and leave it out in most other situations. */
    readonly usage?: UpdateAllSkillCardsOnFileRequestBodyUsageField;
    readonly rawData?: SerializedData;
}
export declare class UpdateAllSkillCardsOnFileHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateAllSkillCardsOnFileHeaders, 'extraHeaders'> & Partial<Pick<UpdateAllSkillCardsOnFileHeaders, 'extraHeaders'>>);
}
export interface UpdateAllSkillCardsOnFileHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class SkillsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<SkillsManager, 'networkSession' | 'getBoxSkillCardsOnFile' | 'createBoxSkillCardsOnFile' | 'updateBoxSkillCardsOnFile' | 'deleteBoxSkillCardsFromFile' | 'updateAllSkillCardsOnFile'> & Partial<Pick<SkillsManager, 'networkSession'>>);
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
    getBoxSkillCardsOnFile(fileId: string, optionalsInput?: GetBoxSkillCardsOnFileOptionalsInput): Promise<SkillCardsMetadata>;
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
    createBoxSkillCardsOnFile(fileId: string, requestBody: CreateBoxSkillCardsOnFileRequestBody, optionalsInput?: CreateBoxSkillCardsOnFileOptionalsInput): Promise<SkillCardsMetadata>;
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
    updateBoxSkillCardsOnFile(fileId: string, requestBody: readonly UpdateBoxSkillCardsOnFileRequestBody[], optionalsInput?: UpdateBoxSkillCardsOnFileOptionalsInput): Promise<SkillCardsMetadata>;
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
    deleteBoxSkillCardsFromFile(fileId: string, optionalsInput?: DeleteBoxSkillCardsFromFileOptionalsInput): Promise<undefined>;
    /**
       * An alternative method that can be used to overwrite and update all Box Skill
       * metadata cards on a file.
       * @param {string} skillId The ID of the skill to apply this metadata for.
      Example: "33243242"
       * @param {UpdateAllSkillCardsOnFileRequestBody} requestBody Request body of updateAllSkillCardsOnFile method
       * @param {UpdateAllSkillCardsOnFileOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    updateAllSkillCardsOnFile(skillId: string, requestBody: UpdateAllSkillCardsOnFileRequestBody, optionalsInput?: UpdateAllSkillCardsOnFileOptionalsInput): Promise<undefined>;
}
export interface SkillsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateBoxSkillCardsOnFileRequestBody(val: CreateBoxSkillCardsOnFileRequestBody): SerializedData;
export declare function deserializeCreateBoxSkillCardsOnFileRequestBody(val: SerializedData): CreateBoxSkillCardsOnFileRequestBody;
export declare function serializeUpdateBoxSkillCardsOnFileRequestBodyOpField(val: UpdateBoxSkillCardsOnFileRequestBodyOpField): SerializedData;
export declare function deserializeUpdateBoxSkillCardsOnFileRequestBodyOpField(val: SerializedData): UpdateBoxSkillCardsOnFileRequestBodyOpField;
export declare function serializeUpdateBoxSkillCardsOnFileRequestBody(val: UpdateBoxSkillCardsOnFileRequestBody): SerializedData;
export declare function deserializeUpdateBoxSkillCardsOnFileRequestBody(val: SerializedData): UpdateBoxSkillCardsOnFileRequestBody;
export declare function serializeUpdateAllSkillCardsOnFileRequestBodyStatusField(val: UpdateAllSkillCardsOnFileRequestBodyStatusField): SerializedData;
export declare function deserializeUpdateAllSkillCardsOnFileRequestBodyStatusField(val: SerializedData): UpdateAllSkillCardsOnFileRequestBodyStatusField;
export declare function serializeUpdateAllSkillCardsOnFileRequestBodyMetadataField(val: UpdateAllSkillCardsOnFileRequestBodyMetadataField): SerializedData;
export declare function deserializeUpdateAllSkillCardsOnFileRequestBodyMetadataField(val: SerializedData): UpdateAllSkillCardsOnFileRequestBodyMetadataField;
export declare function serializeUpdateAllSkillCardsOnFileRequestBodyFileTypeField(val: UpdateAllSkillCardsOnFileRequestBodyFileTypeField): SerializedData;
export declare function deserializeUpdateAllSkillCardsOnFileRequestBodyFileTypeField(val: SerializedData): UpdateAllSkillCardsOnFileRequestBodyFileTypeField;
export declare function serializeUpdateAllSkillCardsOnFileRequestBodyFileField(val: UpdateAllSkillCardsOnFileRequestBodyFileField): SerializedData;
export declare function deserializeUpdateAllSkillCardsOnFileRequestBodyFileField(val: SerializedData): UpdateAllSkillCardsOnFileRequestBodyFileField;
export declare function serializeUpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField(val: UpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField): SerializedData;
export declare function deserializeUpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField(val: SerializedData): UpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField;
export declare function serializeUpdateAllSkillCardsOnFileRequestBodyFileVersionField(val: UpdateAllSkillCardsOnFileRequestBodyFileVersionField): SerializedData;
export declare function deserializeUpdateAllSkillCardsOnFileRequestBodyFileVersionField(val: SerializedData): UpdateAllSkillCardsOnFileRequestBodyFileVersionField;
export declare function serializeUpdateAllSkillCardsOnFileRequestBodyUsageField(val: UpdateAllSkillCardsOnFileRequestBodyUsageField): SerializedData;
export declare function deserializeUpdateAllSkillCardsOnFileRequestBodyUsageField(val: SerializedData): UpdateAllSkillCardsOnFileRequestBodyUsageField;
export declare function serializeUpdateAllSkillCardsOnFileRequestBody(val: UpdateAllSkillCardsOnFileRequestBody): SerializedData;
export declare function deserializeUpdateAllSkillCardsOnFileRequestBody(val: SerializedData): UpdateAllSkillCardsOnFileRequestBody;
//# sourceMappingURL=skills.generated.d.ts.map