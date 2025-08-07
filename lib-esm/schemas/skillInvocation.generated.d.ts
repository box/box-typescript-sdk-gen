import { FileOrFolder } from './fileOrFolder.generated.js';
import { Event } from './event.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type SkillInvocationTypeField = 'skill_invocation';
export type SkillInvocationSkillTypeField = 'skill';
export interface SkillInvocationSkillField {
    /**
     * The unique identifier for this skill. */
    readonly id?: string;
    /**
     * The value will always be `skill`. */
    readonly type?: SkillInvocationSkillTypeField;
    /**
     * The name of the skill. */
    readonly name?: string;
    /**
     * The client ID of the application. */
    readonly apiKey?: string;
    readonly rawData?: SerializedData;
}
export type SkillInvocationTokenReadTokenTypeField = 'bearer' | string;
export interface SkillInvocationTokenReadField {
    /**
     * The requested access token. */
    readonly accessToken?: string;
    /**
     * The time in seconds by which this token will expire. */
    readonly expiresIn?: number;
    /**
     * The type of access token returned. */
    readonly tokenType?: SkillInvocationTokenReadTokenTypeField;
    /**
     * The permissions that this access token permits,
     * providing a list of resources (files, folders, etc)
     * and the scopes permitted for each of those resources. */
    readonly restrictedTo?: string;
    readonly rawData?: SerializedData;
}
export type SkillInvocationTokenWriteTokenTypeField = 'bearer' | string;
export interface SkillInvocationTokenWriteField {
    /**
     * The requested access token. */
    readonly accessToken?: string;
    /**
     * The time in seconds by which this token will expire. */
    readonly expiresIn?: number;
    /**
     * The type of access token returned. */
    readonly tokenType?: SkillInvocationTokenWriteTokenTypeField;
    /**
     * The permissions that this access token permits,
     * providing a list of resources (files, folders, etc)
     * and the scopes permitted for each of those resources. */
    readonly restrictedTo?: string;
    readonly rawData?: SerializedData;
}
export interface SkillInvocationTokenField {
    /**
     * The basics of an access token. */
    readonly read?: SkillInvocationTokenReadField;
    /**
     * The basics of an access token. */
    readonly write?: SkillInvocationTokenWriteField;
    readonly rawData?: SerializedData;
}
export type SkillInvocationStatusStateField = 'invoked' | 'processing' | 'success' | 'transient_failure' | 'permanent_failure' | string;
export interface SkillInvocationStatusField {
    /**
     * The state of this event.
     *
     * * `invoked` - Triggered the skill with event details to start
     *   applying skill on the file.
     * * `processing` - Currently processing.
     * * `success` - Completed processing with a success.
     * * `transient_failure` - Encountered an issue which can be
     *   retried.
     * * `permanent_failure` -  Encountered a permanent issue and
     *   retry would not help. */
    readonly state?: SkillInvocationStatusStateField;
    /**
     * Status information. */
    readonly message?: string;
    /**
     * Error code information, if error occurred. */
    readonly errorCode?: string;
    /**
     * Additional status information. */
    readonly additionalInfo?: string;
    readonly rawData?: SerializedData;
}
export type SkillInvocationEnterpriseTypeField = 'enterprise';
export interface SkillInvocationEnterpriseField {
    /**
     * The unique identifier for this enterprise. */
    readonly id?: string;
    /**
     * The value will always be `enterprise`. */
    readonly type?: SkillInvocationEnterpriseTypeField;
    /**
     * The name of the enterprise. */
    readonly name?: string;
    readonly rawData?: SerializedData;
}
export interface SkillInvocation {
    /**
     * The value will always be `skill_invocation`. */
    readonly type?: SkillInvocationTypeField;
    /**
     * Unique identifier for the invocation request. */
    readonly id?: string;
    readonly skill?: SkillInvocationSkillField;
    /**
     * The read-only and read-write access tokens for this item. */
    readonly token?: SkillInvocationTokenField;
    /**
     * The details status of this event. */
    readonly status?: SkillInvocationStatusField;
    /**
     * The time this invocation was created. */
    readonly createdAt?: DateTime;
    /**
     * Action that triggered the invocation. */
    readonly trigger?: string;
    readonly enterprise?: SkillInvocationEnterpriseField;
    readonly source?: FileOrFolder;
    readonly event?: Event;
    readonly rawData?: SerializedData;
}
export declare function serializeSkillInvocationTypeField(val: SkillInvocationTypeField): SerializedData;
export declare function deserializeSkillInvocationTypeField(val: SerializedData): SkillInvocationTypeField;
export declare function serializeSkillInvocationSkillTypeField(val: SkillInvocationSkillTypeField): SerializedData;
export declare function deserializeSkillInvocationSkillTypeField(val: SerializedData): SkillInvocationSkillTypeField;
export declare function serializeSkillInvocationSkillField(val: SkillInvocationSkillField): SerializedData;
export declare function deserializeSkillInvocationSkillField(val: SerializedData): SkillInvocationSkillField;
export declare function serializeSkillInvocationTokenReadTokenTypeField(val: SkillInvocationTokenReadTokenTypeField): SerializedData;
export declare function deserializeSkillInvocationTokenReadTokenTypeField(val: SerializedData): SkillInvocationTokenReadTokenTypeField;
export declare function serializeSkillInvocationTokenReadField(val: SkillInvocationTokenReadField): SerializedData;
export declare function deserializeSkillInvocationTokenReadField(val: SerializedData): SkillInvocationTokenReadField;
export declare function serializeSkillInvocationTokenWriteTokenTypeField(val: SkillInvocationTokenWriteTokenTypeField): SerializedData;
export declare function deserializeSkillInvocationTokenWriteTokenTypeField(val: SerializedData): SkillInvocationTokenWriteTokenTypeField;
export declare function serializeSkillInvocationTokenWriteField(val: SkillInvocationTokenWriteField): SerializedData;
export declare function deserializeSkillInvocationTokenWriteField(val: SerializedData): SkillInvocationTokenWriteField;
export declare function serializeSkillInvocationTokenField(val: SkillInvocationTokenField): SerializedData;
export declare function deserializeSkillInvocationTokenField(val: SerializedData): SkillInvocationTokenField;
export declare function serializeSkillInvocationStatusStateField(val: SkillInvocationStatusStateField): SerializedData;
export declare function deserializeSkillInvocationStatusStateField(val: SerializedData): SkillInvocationStatusStateField;
export declare function serializeSkillInvocationStatusField(val: SkillInvocationStatusField): SerializedData;
export declare function deserializeSkillInvocationStatusField(val: SerializedData): SkillInvocationStatusField;
export declare function serializeSkillInvocationEnterpriseTypeField(val: SkillInvocationEnterpriseTypeField): SerializedData;
export declare function deserializeSkillInvocationEnterpriseTypeField(val: SerializedData): SkillInvocationEnterpriseTypeField;
export declare function serializeSkillInvocationEnterpriseField(val: SkillInvocationEnterpriseField): SerializedData;
export declare function deserializeSkillInvocationEnterpriseField(val: SerializedData): SkillInvocationEnterpriseField;
export declare function serializeSkillInvocation(val: SkillInvocation): SerializedData;
export declare function deserializeSkillInvocation(val: SerializedData): SkillInvocation;
