import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type KeywordSkillCardTypeField = 'skill_card';
export type KeywordSkillCardSkillCardTypeField = 'keyword';
export interface KeywordSkillCardSkillCardTitleField {
    /**
     * An optional identifier for the title. */
    readonly code?: string;
    /**
     * The actual title to show in the UI. */
    readonly message: string;
    readonly rawData?: SerializedData;
}
export type KeywordSkillCardSkillTypeField = 'service';
export declare class KeywordSkillCardSkillField {
    /**
     * The value will always be `service`. */
    readonly type: KeywordSkillCardSkillTypeField;
    /**
     * A custom identifier that represent the service that
     * applied this metadata. */
    readonly id: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<KeywordSkillCardSkillField, 'type'> & Partial<Pick<KeywordSkillCardSkillField, 'type'>>);
}
export interface KeywordSkillCardSkillFieldInput {
    /**
     * The value will always be `service`. */
    readonly type?: KeywordSkillCardSkillTypeField;
    /**
     * A custom identifier that represent the service that
     * applied this metadata. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export type KeywordSkillCardInvocationTypeField = 'skill_invocation';
export declare class KeywordSkillCardInvocationField {
    /**
     * The value will always be `skill_invocation`. */
    readonly type: KeywordSkillCardInvocationTypeField;
    /**
     * A custom identifier that represent the instance of
     * the service that applied this metadata. For example,
     * if your `image-recognition-service` runs on multiple
     * nodes, this field can be used to identify the ID of
     * the node that was used to apply the metadata. */
    readonly id: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<KeywordSkillCardInvocationField, 'type'> & Partial<Pick<KeywordSkillCardInvocationField, 'type'>>);
}
export interface KeywordSkillCardInvocationFieldInput {
    /**
     * The value will always be `skill_invocation`. */
    readonly type?: KeywordSkillCardInvocationTypeField;
    /**
     * A custom identifier that represent the instance of
     * the service that applied this metadata. For example,
     * if your `image-recognition-service` runs on multiple
     * nodes, this field can be used to identify the ID of
     * the node that was used to apply the metadata. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export interface KeywordSkillCardEntriesField {
    /**
     * The text of the keyword. */
    readonly text?: string;
    readonly rawData?: SerializedData;
}
export declare class KeywordSkillCard {
    /**
     * The optional date and time this card was created at. */
    readonly createdAt?: DateTime;
    /**
     * The value will always be `skill_card`. */
    readonly type: KeywordSkillCardTypeField;
    /**
     * The value will always be `keyword`. */
    readonly skillCardType: KeywordSkillCardSkillCardTypeField;
    /**
     * The title of the card. */
    readonly skillCardTitle?: KeywordSkillCardSkillCardTitleField;
    /**
     * The service that applied this metadata. */
    readonly skill: KeywordSkillCardSkillField;
    /**
     * The invocation of this service, used to track
     * which instance of a service applied the metadata. */
    readonly invocation: KeywordSkillCardInvocationField;
    /**
     * An list of entries in the metadata card. */
    readonly entries: readonly KeywordSkillCardEntriesField[];
    readonly rawData?: SerializedData;
    constructor(fields: Omit<KeywordSkillCard, 'type' | 'skillCardType'> & Partial<Pick<KeywordSkillCard, 'type' | 'skillCardType'>>);
}
export interface KeywordSkillCardInput {
    /**
     * The optional date and time this card was created at. */
    readonly createdAt?: DateTime;
    /**
     * The value will always be `skill_card`. */
    readonly type?: KeywordSkillCardTypeField;
    /**
     * The value will always be `keyword`. */
    readonly skillCardType?: KeywordSkillCardSkillCardTypeField;
    /**
     * The title of the card. */
    readonly skillCardTitle?: KeywordSkillCardSkillCardTitleField;
    /**
     * The service that applied this metadata. */
    readonly skill: KeywordSkillCardSkillField;
    /**
     * The invocation of this service, used to track
     * which instance of a service applied the metadata. */
    readonly invocation: KeywordSkillCardInvocationField;
    /**
     * An list of entries in the metadata card. */
    readonly entries: readonly KeywordSkillCardEntriesField[];
    readonly rawData?: SerializedData;
}
export declare function serializeKeywordSkillCardTypeField(val: KeywordSkillCardTypeField): SerializedData;
export declare function deserializeKeywordSkillCardTypeField(val: SerializedData): KeywordSkillCardTypeField;
export declare function serializeKeywordSkillCardSkillCardTypeField(val: KeywordSkillCardSkillCardTypeField): SerializedData;
export declare function deserializeKeywordSkillCardSkillCardTypeField(val: SerializedData): KeywordSkillCardSkillCardTypeField;
export declare function serializeKeywordSkillCardSkillCardTitleField(val: KeywordSkillCardSkillCardTitleField): SerializedData;
export declare function deserializeKeywordSkillCardSkillCardTitleField(val: SerializedData): KeywordSkillCardSkillCardTitleField;
export declare function serializeKeywordSkillCardSkillTypeField(val: KeywordSkillCardSkillTypeField): SerializedData;
export declare function deserializeKeywordSkillCardSkillTypeField(val: SerializedData): KeywordSkillCardSkillTypeField;
export declare function serializeKeywordSkillCardSkillField(val: KeywordSkillCardSkillField): SerializedData;
export declare function deserializeKeywordSkillCardSkillField(val: SerializedData): KeywordSkillCardSkillField;
export declare function serializeKeywordSkillCardSkillFieldInput(val: KeywordSkillCardSkillFieldInput): SerializedData;
export declare function deserializeKeywordSkillCardSkillFieldInput(val: SerializedData): KeywordSkillCardSkillFieldInput;
export declare function serializeKeywordSkillCardInvocationTypeField(val: KeywordSkillCardInvocationTypeField): SerializedData;
export declare function deserializeKeywordSkillCardInvocationTypeField(val: SerializedData): KeywordSkillCardInvocationTypeField;
export declare function serializeKeywordSkillCardInvocationField(val: KeywordSkillCardInvocationField): SerializedData;
export declare function deserializeKeywordSkillCardInvocationField(val: SerializedData): KeywordSkillCardInvocationField;
export declare function serializeKeywordSkillCardInvocationFieldInput(val: KeywordSkillCardInvocationFieldInput): SerializedData;
export declare function deserializeKeywordSkillCardInvocationFieldInput(val: SerializedData): KeywordSkillCardInvocationFieldInput;
export declare function serializeKeywordSkillCardEntriesField(val: KeywordSkillCardEntriesField): SerializedData;
export declare function deserializeKeywordSkillCardEntriesField(val: SerializedData): KeywordSkillCardEntriesField;
export declare function serializeKeywordSkillCard(val: KeywordSkillCard): SerializedData;
export declare function deserializeKeywordSkillCard(val: SerializedData): KeywordSkillCard;
export declare function serializeKeywordSkillCardInput(val: KeywordSkillCardInput): SerializedData;
export declare function deserializeKeywordSkillCardInput(val: SerializedData): KeywordSkillCardInput;
