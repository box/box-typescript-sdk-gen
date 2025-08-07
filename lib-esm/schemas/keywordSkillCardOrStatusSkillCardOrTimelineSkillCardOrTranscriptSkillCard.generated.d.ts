import { KeywordSkillCard } from './keywordSkillCard.generated.js';
import { StatusSkillCard } from './statusSkillCard.generated.js';
import { TimelineSkillCard } from './timelineSkillCard.generated.js';
import { TranscriptSkillCard } from './transcriptSkillCard.generated.js';
import { SerializedData } from '../serialization/json.js';
export type KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard = KeywordSkillCard | StatusSkillCard | TimelineSkillCard | TranscriptSkillCard;
export declare function serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(val: any): SerializedData;
export declare function deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(val: SerializedData): KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard;
