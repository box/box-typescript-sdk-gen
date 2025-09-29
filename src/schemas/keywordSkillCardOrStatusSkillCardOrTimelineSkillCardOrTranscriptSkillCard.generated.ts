import { serializeKeywordSkillCard } from './keywordSkillCard.generated';
import { deserializeKeywordSkillCard } from './keywordSkillCard.generated';
import { serializeStatusSkillCard } from './statusSkillCard.generated';
import { deserializeStatusSkillCard } from './statusSkillCard.generated';
import { serializeTimelineSkillCard } from './timelineSkillCard.generated';
import { deserializeTimelineSkillCard } from './timelineSkillCard.generated';
import { serializeTranscriptSkillCard } from './transcriptSkillCard.generated';
import { deserializeTranscriptSkillCard } from './transcriptSkillCard.generated';
import { KeywordSkillCard } from './keywordSkillCard.generated';
import { StatusSkillCard } from './statusSkillCard.generated';
import { TimelineSkillCard } from './timelineSkillCard.generated';
import { TranscriptSkillCard } from './transcriptSkillCard.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard =
  KeywordSkillCard | StatusSkillCard | TimelineSkillCard | TranscriptSkillCard;
export function serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(
  val: any,
): SerializedData {
  if (val.skillCardType == 'keyword') {
    return serializeKeywordSkillCard(val);
  }
  if (val.skillCardType == 'status') {
    return serializeStatusSkillCard(val);
  }
  if (val.skillCardType == 'timeline') {
    return serializeTimelineSkillCard(val);
  }
  if (val.skillCardType == 'transcript') {
    return serializeTranscriptSkillCard(val);
  }
  throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(
  val: SerializedData,
): KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard"',
    });
  }
  if (val.skill_card_type == 'keyword') {
    return deserializeKeywordSkillCard(val);
  }
  if (val.skill_card_type == 'status') {
    return deserializeStatusSkillCard(val);
  }
  if (val.skill_card_type == 'timeline') {
    return deserializeTimelineSkillCard(val);
  }
  if (val.skill_card_type == 'transcript') {
    return deserializeTranscriptSkillCard(val);
  }
  throw new BoxSdkError({
    message:
      "Can't deserialize KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard",
  });
}
