import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type TimelineSkillCardTypeField = 'skill_card';
export type TimelineSkillCardSkillCardTypeField = 'timeline';
export interface TimelineSkillCardSkillCardTitleField {
    /**
     * An optional identifier for the title. */
    readonly code?: string;
    /**
     * The actual title to show in the UI. */
    readonly message: string;
    readonly rawData?: SerializedData;
}
export type TimelineSkillCardSkillTypeField = 'service';
export declare class TimelineSkillCardSkillField {
    /**
     * The value will always be `service`. */
    readonly type: TimelineSkillCardSkillTypeField;
    /**
     * A custom identifier that represent the service that
     * applied this metadata. */
    readonly id: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<TimelineSkillCardSkillField, 'type'> & Partial<Pick<TimelineSkillCardSkillField, 'type'>>);
}
export interface TimelineSkillCardSkillFieldInput {
    /**
     * The value will always be `service`. */
    readonly type?: TimelineSkillCardSkillTypeField;
    /**
     * A custom identifier that represent the service that
     * applied this metadata. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export type TimelineSkillCardInvocationTypeField = 'skill_invocation';
export declare class TimelineSkillCardInvocationField {
    /**
     * The value will always be `skill_invocation`. */
    readonly type: TimelineSkillCardInvocationTypeField;
    /**
     * A custom identifier that represent the instance of
     * the service that applied this metadata. For example,
     * if your `image-recognition-service` runs on multiple
     * nodes, this field can be used to identify the ID of
     * the node that was used to apply the metadata. */
    readonly id: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<TimelineSkillCardInvocationField, 'type'> & Partial<Pick<TimelineSkillCardInvocationField, 'type'>>);
}
export interface TimelineSkillCardInvocationFieldInput {
    /**
     * The value will always be `skill_invocation`. */
    readonly type?: TimelineSkillCardInvocationTypeField;
    /**
     * A custom identifier that represent the instance of
     * the service that applied this metadata. For example,
     * if your `image-recognition-service` runs on multiple
     * nodes, this field can be used to identify the ID of
     * the node that was used to apply the metadata. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export interface TimelineSkillCardEntriesAppearsField {
    /**
     * The time in seconds when an
     * entry should start appearing on a timeline. */
    readonly start?: number;
    /**
     * The time in seconds when an
     * entry should stop appearing on a timeline. */
    readonly end?: number;
    readonly rawData?: SerializedData;
}
export interface TimelineSkillCardEntriesField {
    /**
     * The text of the entry. This would be the display
     * name for an item being placed on the timeline, for example the name
     * of the person who was detected in a video. */
    readonly text?: string;
    /**
     * Defines a list of timestamps for when this item should appear on the
     * timeline. */
    readonly appears?: readonly TimelineSkillCardEntriesAppearsField[];
    /**
     * The image to show on a for an entry that appears
     * on a timeline. This image URL is required for every entry.
     *
     * The image will be shown in a
     * list of items (for example faces), and clicking
     * the image will show the user where that entry
     * appears during the duration of this entry. */
    readonly imageUrl?: string;
    readonly rawData?: SerializedData;
}
export declare class TimelineSkillCard {
    /**
     * The optional date and time this card was created at. */
    readonly createdAt?: DateTime;
    /**
     * The value will always be `skill_card`. */
    readonly type: TimelineSkillCardTypeField;
    /**
     * The value will always be `timeline`. */
    readonly skillCardType: TimelineSkillCardSkillCardTypeField;
    /**
     * The title of the card. */
    readonly skillCardTitle?: TimelineSkillCardSkillCardTitleField;
    /**
     * The service that applied this metadata. */
    readonly skill: TimelineSkillCardSkillField;
    /**
     * The invocation of this service, used to track
     * which instance of a service applied the metadata. */
    readonly invocation: TimelineSkillCardInvocationField;
    /**
     * An total duration in seconds of the timeline. */
    readonly duration?: number;
    /**
     * A list of entries on the timeline. */
    readonly entries: readonly TimelineSkillCardEntriesField[];
    readonly rawData?: SerializedData;
    constructor(fields: Omit<TimelineSkillCard, 'type' | 'skillCardType'> & Partial<Pick<TimelineSkillCard, 'type' | 'skillCardType'>>);
}
export interface TimelineSkillCardInput {
    /**
     * The optional date and time this card was created at. */
    readonly createdAt?: DateTime;
    /**
     * The value will always be `skill_card`. */
    readonly type?: TimelineSkillCardTypeField;
    /**
     * The value will always be `timeline`. */
    readonly skillCardType?: TimelineSkillCardSkillCardTypeField;
    /**
     * The title of the card. */
    readonly skillCardTitle?: TimelineSkillCardSkillCardTitleField;
    /**
     * The service that applied this metadata. */
    readonly skill: TimelineSkillCardSkillField;
    /**
     * The invocation of this service, used to track
     * which instance of a service applied the metadata. */
    readonly invocation: TimelineSkillCardInvocationField;
    /**
     * An total duration in seconds of the timeline. */
    readonly duration?: number;
    /**
     * A list of entries on the timeline. */
    readonly entries: readonly TimelineSkillCardEntriesField[];
    readonly rawData?: SerializedData;
}
export declare function serializeTimelineSkillCardTypeField(val: TimelineSkillCardTypeField): SerializedData;
export declare function deserializeTimelineSkillCardTypeField(val: SerializedData): TimelineSkillCardTypeField;
export declare function serializeTimelineSkillCardSkillCardTypeField(val: TimelineSkillCardSkillCardTypeField): SerializedData;
export declare function deserializeTimelineSkillCardSkillCardTypeField(val: SerializedData): TimelineSkillCardSkillCardTypeField;
export declare function serializeTimelineSkillCardSkillCardTitleField(val: TimelineSkillCardSkillCardTitleField): SerializedData;
export declare function deserializeTimelineSkillCardSkillCardTitleField(val: SerializedData): TimelineSkillCardSkillCardTitleField;
export declare function serializeTimelineSkillCardSkillTypeField(val: TimelineSkillCardSkillTypeField): SerializedData;
export declare function deserializeTimelineSkillCardSkillTypeField(val: SerializedData): TimelineSkillCardSkillTypeField;
export declare function serializeTimelineSkillCardSkillField(val: TimelineSkillCardSkillField): SerializedData;
export declare function deserializeTimelineSkillCardSkillField(val: SerializedData): TimelineSkillCardSkillField;
export declare function serializeTimelineSkillCardSkillFieldInput(val: TimelineSkillCardSkillFieldInput): SerializedData;
export declare function deserializeTimelineSkillCardSkillFieldInput(val: SerializedData): TimelineSkillCardSkillFieldInput;
export declare function serializeTimelineSkillCardInvocationTypeField(val: TimelineSkillCardInvocationTypeField): SerializedData;
export declare function deserializeTimelineSkillCardInvocationTypeField(val: SerializedData): TimelineSkillCardInvocationTypeField;
export declare function serializeTimelineSkillCardInvocationField(val: TimelineSkillCardInvocationField): SerializedData;
export declare function deserializeTimelineSkillCardInvocationField(val: SerializedData): TimelineSkillCardInvocationField;
export declare function serializeTimelineSkillCardInvocationFieldInput(val: TimelineSkillCardInvocationFieldInput): SerializedData;
export declare function deserializeTimelineSkillCardInvocationFieldInput(val: SerializedData): TimelineSkillCardInvocationFieldInput;
export declare function serializeTimelineSkillCardEntriesAppearsField(val: TimelineSkillCardEntriesAppearsField): SerializedData;
export declare function deserializeTimelineSkillCardEntriesAppearsField(val: SerializedData): TimelineSkillCardEntriesAppearsField;
export declare function serializeTimelineSkillCardEntriesField(val: TimelineSkillCardEntriesField): SerializedData;
export declare function deserializeTimelineSkillCardEntriesField(val: SerializedData): TimelineSkillCardEntriesField;
export declare function serializeTimelineSkillCard(val: TimelineSkillCard): SerializedData;
export declare function deserializeTimelineSkillCard(val: SerializedData): TimelineSkillCard;
export declare function serializeTimelineSkillCardInput(val: TimelineSkillCardInput): SerializedData;
export declare function deserializeTimelineSkillCardInput(val: SerializedData): TimelineSkillCardInput;
//# sourceMappingURL=timelineSkillCard.generated.d.ts.map