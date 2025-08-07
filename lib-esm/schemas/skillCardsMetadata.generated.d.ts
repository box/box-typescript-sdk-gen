import { KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from './keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface SkillCardsMetadata {
    /**
     * Whether the user can edit this metadata. */
    readonly canEdit?: boolean;
    /**
     * A UUID to identify the metadata object. */
    readonly id?: string;
    /**
     * An ID for the parent folder. */
    readonly parent?: string;
    /**
     * An ID for the scope in which this template
     * has been applied. */
    readonly scope?: string;
    /**
     * The name of the template. */
    readonly template?: string;
    /**
     * A unique identifier for the "type" of this instance. This is an internal
     * system property and should not be used by a client application. */
    readonly type?: string;
    /**
     * The last-known version of the template of the object. This is an internal
     * system property and should not be used by a client application. */
    readonly typeVersion?: number;
    /**
     * The version of the metadata object. Starts at 0 and increases every time
     * a user-defined property is modified. */
    readonly version?: number;
    /**
     * A list of Box Skill cards that have been applied to this file. */
    readonly cards?: readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[];
    readonly rawData?: SerializedData;
}
export declare function serializeSkillCardsMetadata(val: SkillCardsMetadata): SerializedData;
export declare function deserializeSkillCardsMetadata(val: SerializedData): SkillCardsMetadata;
