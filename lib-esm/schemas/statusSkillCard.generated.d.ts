import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type StatusSkillCardTypeField = 'skill_card';
export type StatusSkillCardSkillCardTypeField = 'status';
export interface StatusSkillCardSkillCardTitleField {
    /**
     * An optional identifier for the title. */
    readonly code?: string;
    /**
     * The actual title to show in the UI. */
    readonly message: string;
    readonly rawData?: SerializedData;
}
export type StatusSkillCardStatusCodeField = 'invoked' | 'processing' | 'success' | 'transient_failure' | 'permanent_failure' | string;
export interface StatusSkillCardStatusField {
    /**
     * A code for the status of this Skill invocation. By
     * default each of these will have their own accompanied
     * messages. These can be adjusted by setting the `message`
     * value on this object. */
    readonly code: StatusSkillCardStatusCodeField;
    /**
     * A custom message that can be provided with this status.
     * This will be shown in the web app to the end user. */
    readonly message?: string;
    readonly rawData?: SerializedData;
}
export type StatusSkillCardSkillTypeField = 'service';
export declare class StatusSkillCardSkillField {
    /**
     * The value will always be `service`. */
    readonly type: StatusSkillCardSkillTypeField;
    /**
     * A custom identifier that represent the service that
     * applied this metadata. */
    readonly id: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<StatusSkillCardSkillField, 'type'> & Partial<Pick<StatusSkillCardSkillField, 'type'>>);
}
export interface StatusSkillCardSkillFieldInput {
    /**
     * The value will always be `service`. */
    readonly type?: StatusSkillCardSkillTypeField;
    /**
     * A custom identifier that represent the service that
     * applied this metadata. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export type StatusSkillCardInvocationTypeField = 'skill_invocation';
export declare class StatusSkillCardInvocationField {
    /**
     * The value will always be `skill_invocation`. */
    readonly type: StatusSkillCardInvocationTypeField;
    /**
     * A custom identifier that represent the instance of
     * the service that applied this metadata. For example,
     * if your `image-recognition-service` runs on multiple
     * nodes, this field can be used to identify the ID of
     * the node that was used to apply the metadata. */
    readonly id: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<StatusSkillCardInvocationField, 'type'> & Partial<Pick<StatusSkillCardInvocationField, 'type'>>);
}
export interface StatusSkillCardInvocationFieldInput {
    /**
     * The value will always be `skill_invocation`. */
    readonly type?: StatusSkillCardInvocationTypeField;
    /**
     * A custom identifier that represent the instance of
     * the service that applied this metadata. For example,
     * if your `image-recognition-service` runs on multiple
     * nodes, this field can be used to identify the ID of
     * the node that was used to apply the metadata. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export declare class StatusSkillCard {
    /**
     * The optional date and time this card was created at. */
    readonly createdAt?: DateTime;
    /**
     * The value will always be `skill_card`. */
    readonly type: StatusSkillCardTypeField;
    /**
     * The value will always be `status`. */
    readonly skillCardType: StatusSkillCardSkillCardTypeField;
    /**
     * The title of the card. */
    readonly skillCardTitle?: StatusSkillCardSkillCardTitleField;
    /**
     * Sets the status of the skill. This can be used to show a message to the user while the Skill is processing the data, or if it was not able to process the file. */
    readonly status: StatusSkillCardStatusField;
    /**
     * The service that applied this metadata. */
    readonly skill: StatusSkillCardSkillField;
    /**
     * The invocation of this service, used to track
     * which instance of a service applied the metadata. */
    readonly invocation: StatusSkillCardInvocationField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<StatusSkillCard, 'type' | 'skillCardType'> & Partial<Pick<StatusSkillCard, 'type' | 'skillCardType'>>);
}
export interface StatusSkillCardInput {
    /**
     * The optional date and time this card was created at. */
    readonly createdAt?: DateTime;
    /**
     * The value will always be `skill_card`. */
    readonly type?: StatusSkillCardTypeField;
    /**
     * The value will always be `status`. */
    readonly skillCardType?: StatusSkillCardSkillCardTypeField;
    /**
     * The title of the card. */
    readonly skillCardTitle?: StatusSkillCardSkillCardTitleField;
    /**
     * Sets the status of the skill. This can be used to show a message to the user while the Skill is processing the data, or if it was not able to process the file. */
    readonly status: StatusSkillCardStatusField;
    /**
     * The service that applied this metadata. */
    readonly skill: StatusSkillCardSkillField;
    /**
     * The invocation of this service, used to track
     * which instance of a service applied the metadata. */
    readonly invocation: StatusSkillCardInvocationField;
    readonly rawData?: SerializedData;
}
export declare function serializeStatusSkillCardTypeField(val: StatusSkillCardTypeField): SerializedData;
export declare function deserializeStatusSkillCardTypeField(val: SerializedData): StatusSkillCardTypeField;
export declare function serializeStatusSkillCardSkillCardTypeField(val: StatusSkillCardSkillCardTypeField): SerializedData;
export declare function deserializeStatusSkillCardSkillCardTypeField(val: SerializedData): StatusSkillCardSkillCardTypeField;
export declare function serializeStatusSkillCardSkillCardTitleField(val: StatusSkillCardSkillCardTitleField): SerializedData;
export declare function deserializeStatusSkillCardSkillCardTitleField(val: SerializedData): StatusSkillCardSkillCardTitleField;
export declare function serializeStatusSkillCardStatusCodeField(val: StatusSkillCardStatusCodeField): SerializedData;
export declare function deserializeStatusSkillCardStatusCodeField(val: SerializedData): StatusSkillCardStatusCodeField;
export declare function serializeStatusSkillCardStatusField(val: StatusSkillCardStatusField): SerializedData;
export declare function deserializeStatusSkillCardStatusField(val: SerializedData): StatusSkillCardStatusField;
export declare function serializeStatusSkillCardSkillTypeField(val: StatusSkillCardSkillTypeField): SerializedData;
export declare function deserializeStatusSkillCardSkillTypeField(val: SerializedData): StatusSkillCardSkillTypeField;
export declare function serializeStatusSkillCardSkillField(val: StatusSkillCardSkillField): SerializedData;
export declare function deserializeStatusSkillCardSkillField(val: SerializedData): StatusSkillCardSkillField;
export declare function serializeStatusSkillCardSkillFieldInput(val: StatusSkillCardSkillFieldInput): SerializedData;
export declare function deserializeStatusSkillCardSkillFieldInput(val: SerializedData): StatusSkillCardSkillFieldInput;
export declare function serializeStatusSkillCardInvocationTypeField(val: StatusSkillCardInvocationTypeField): SerializedData;
export declare function deserializeStatusSkillCardInvocationTypeField(val: SerializedData): StatusSkillCardInvocationTypeField;
export declare function serializeStatusSkillCardInvocationField(val: StatusSkillCardInvocationField): SerializedData;
export declare function deserializeStatusSkillCardInvocationField(val: SerializedData): StatusSkillCardInvocationField;
export declare function serializeStatusSkillCardInvocationFieldInput(val: StatusSkillCardInvocationFieldInput): SerializedData;
export declare function deserializeStatusSkillCardInvocationFieldInput(val: SerializedData): StatusSkillCardInvocationFieldInput;
export declare function serializeStatusSkillCard(val: StatusSkillCard): SerializedData;
export declare function deserializeStatusSkillCard(val: SerializedData): StatusSkillCard;
export declare function serializeStatusSkillCardInput(val: StatusSkillCardInput): SerializedData;
export declare function deserializeStatusSkillCardInput(val: SerializedData): StatusSkillCardInput;
