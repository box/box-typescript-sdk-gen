import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type TranscriptSkillCardTypeField = 'skill_card';
export type TranscriptSkillCardSkillCardTypeField = 'transcript';
export interface TranscriptSkillCardSkillCardTitleField {
    /**
     * An optional identifier for the title. */
    readonly code?: string;
    /**
     * The actual title to show in the UI. */
    readonly message: string;
    readonly rawData?: SerializedData;
}
export type TranscriptSkillCardSkillTypeField = 'service';
export declare class TranscriptSkillCardSkillField {
    /**
     * The value will always be `service`. */
    readonly type: TranscriptSkillCardSkillTypeField;
    /**
     * A custom identifier that represent the service that
     * applied this metadata. */
    readonly id: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<TranscriptSkillCardSkillField, 'type'> & Partial<Pick<TranscriptSkillCardSkillField, 'type'>>);
}
export interface TranscriptSkillCardSkillFieldInput {
    /**
     * The value will always be `service`. */
    readonly type?: TranscriptSkillCardSkillTypeField;
    /**
     * A custom identifier that represent the service that
     * applied this metadata. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export type TranscriptSkillCardInvocationTypeField = 'skill_invocation';
export declare class TranscriptSkillCardInvocationField {
    /**
     * The value will always be `skill_invocation`. */
    readonly type: TranscriptSkillCardInvocationTypeField;
    /**
     * A custom identifier that represent the instance of
     * the service that applied this metadata. For example,
     * if your `image-recognition-service` runs on multiple
     * nodes, this field can be used to identify the ID of
     * the node that was used to apply the metadata. */
    readonly id: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<TranscriptSkillCardInvocationField, 'type'> & Partial<Pick<TranscriptSkillCardInvocationField, 'type'>>);
}
export interface TranscriptSkillCardInvocationFieldInput {
    /**
     * The value will always be `skill_invocation`. */
    readonly type?: TranscriptSkillCardInvocationTypeField;
    /**
     * A custom identifier that represent the instance of
     * the service that applied this metadata. For example,
     * if your `image-recognition-service` runs on multiple
     * nodes, this field can be used to identify the ID of
     * the node that was used to apply the metadata. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export interface TranscriptSkillCardEntriesAppearsField {
    /**
     * The time in seconds when an
     * entry should start appearing on a timeline. */
    readonly start?: number;
    readonly rawData?: SerializedData;
}
export interface TranscriptSkillCardEntriesField {
    /**
     * The text of the entry. This would be the transcribed text assigned
     * to the entry on the timeline. */
    readonly text?: string;
    /**
     * Defines when a transcribed bit of text appears. This only includes a
     * start time and no end time. */
    readonly appears?: readonly TranscriptSkillCardEntriesAppearsField[];
    readonly rawData?: SerializedData;
}
export declare class TranscriptSkillCard {
    /**
     * The optional date and time this card was created at. */
    readonly createdAt?: DateTime;
    /**
     * The value will always be `skill_card`. */
    readonly type: TranscriptSkillCardTypeField;
    /**
     * The value will always be `transcript`. */
    readonly skillCardType: TranscriptSkillCardSkillCardTypeField;
    /**
     * The title of the card. */
    readonly skillCardTitle?: TranscriptSkillCardSkillCardTitleField;
    /**
     * The service that applied this metadata. */
    readonly skill: TranscriptSkillCardSkillField;
    /**
     * The invocation of this service, used to track
     * which instance of a service applied the metadata. */
    readonly invocation: TranscriptSkillCardInvocationField;
    /**
     * An optional total duration in seconds.
     *
     * Used with a `skill_card_type` of `transcript` or
     * `timeline`. */
    readonly duration?: number;
    /**
     * An list of entries for the card. This represents the individual entries of
     * the transcription. */
    readonly entries: readonly TranscriptSkillCardEntriesField[];
    readonly rawData?: SerializedData;
    constructor(fields: Omit<TranscriptSkillCard, 'type' | 'skillCardType'> & Partial<Pick<TranscriptSkillCard, 'type' | 'skillCardType'>>);
}
export interface TranscriptSkillCardInput {
    /**
     * The optional date and time this card was created at. */
    readonly createdAt?: DateTime;
    /**
     * The value will always be `skill_card`. */
    readonly type?: TranscriptSkillCardTypeField;
    /**
     * The value will always be `transcript`. */
    readonly skillCardType?: TranscriptSkillCardSkillCardTypeField;
    /**
     * The title of the card. */
    readonly skillCardTitle?: TranscriptSkillCardSkillCardTitleField;
    /**
     * The service that applied this metadata. */
    readonly skill: TranscriptSkillCardSkillField;
    /**
     * The invocation of this service, used to track
     * which instance of a service applied the metadata. */
    readonly invocation: TranscriptSkillCardInvocationField;
    /**
     * An optional total duration in seconds.
     *
     * Used with a `skill_card_type` of `transcript` or
     * `timeline`. */
    readonly duration?: number;
    /**
     * An list of entries for the card. This represents the individual entries of
     * the transcription. */
    readonly entries: readonly TranscriptSkillCardEntriesField[];
    readonly rawData?: SerializedData;
}
export declare function serializeTranscriptSkillCardTypeField(val: TranscriptSkillCardTypeField): SerializedData;
export declare function deserializeTranscriptSkillCardTypeField(val: SerializedData): TranscriptSkillCardTypeField;
export declare function serializeTranscriptSkillCardSkillCardTypeField(val: TranscriptSkillCardSkillCardTypeField): SerializedData;
export declare function deserializeTranscriptSkillCardSkillCardTypeField(val: SerializedData): TranscriptSkillCardSkillCardTypeField;
export declare function serializeTranscriptSkillCardSkillCardTitleField(val: TranscriptSkillCardSkillCardTitleField): SerializedData;
export declare function deserializeTranscriptSkillCardSkillCardTitleField(val: SerializedData): TranscriptSkillCardSkillCardTitleField;
export declare function serializeTranscriptSkillCardSkillTypeField(val: TranscriptSkillCardSkillTypeField): SerializedData;
export declare function deserializeTranscriptSkillCardSkillTypeField(val: SerializedData): TranscriptSkillCardSkillTypeField;
export declare function serializeTranscriptSkillCardSkillField(val: TranscriptSkillCardSkillField): SerializedData;
export declare function deserializeTranscriptSkillCardSkillField(val: SerializedData): TranscriptSkillCardSkillField;
export declare function serializeTranscriptSkillCardSkillFieldInput(val: TranscriptSkillCardSkillFieldInput): SerializedData;
export declare function deserializeTranscriptSkillCardSkillFieldInput(val: SerializedData): TranscriptSkillCardSkillFieldInput;
export declare function serializeTranscriptSkillCardInvocationTypeField(val: TranscriptSkillCardInvocationTypeField): SerializedData;
export declare function deserializeTranscriptSkillCardInvocationTypeField(val: SerializedData): TranscriptSkillCardInvocationTypeField;
export declare function serializeTranscriptSkillCardInvocationField(val: TranscriptSkillCardInvocationField): SerializedData;
export declare function deserializeTranscriptSkillCardInvocationField(val: SerializedData): TranscriptSkillCardInvocationField;
export declare function serializeTranscriptSkillCardInvocationFieldInput(val: TranscriptSkillCardInvocationFieldInput): SerializedData;
export declare function deserializeTranscriptSkillCardInvocationFieldInput(val: SerializedData): TranscriptSkillCardInvocationFieldInput;
export declare function serializeTranscriptSkillCardEntriesAppearsField(val: TranscriptSkillCardEntriesAppearsField): SerializedData;
export declare function deserializeTranscriptSkillCardEntriesAppearsField(val: SerializedData): TranscriptSkillCardEntriesAppearsField;
export declare function serializeTranscriptSkillCardEntriesField(val: TranscriptSkillCardEntriesField): SerializedData;
export declare function deserializeTranscriptSkillCardEntriesField(val: SerializedData): TranscriptSkillCardEntriesField;
export declare function serializeTranscriptSkillCard(val: TranscriptSkillCard): SerializedData;
export declare function deserializeTranscriptSkillCard(val: SerializedData): TranscriptSkillCard;
export declare function serializeTranscriptSkillCardInput(val: TranscriptSkillCardInput): SerializedData;
export declare function deserializeTranscriptSkillCardInput(val: SerializedData): TranscriptSkillCardInput;
