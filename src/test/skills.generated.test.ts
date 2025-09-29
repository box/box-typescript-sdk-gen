import { serializeFileFull } from '@/schemas/fileFull.generated';
import { deserializeFileFull } from '@/schemas/fileFull.generated';
import { serializeKeywordSkillCardTypeField } from '@/schemas/keywordSkillCard.generated';
import { deserializeKeywordSkillCardTypeField } from '@/schemas/keywordSkillCard.generated';
import { serializeKeywordSkillCardSkillCardTypeField } from '@/schemas/keywordSkillCard.generated';
import { deserializeKeywordSkillCardSkillCardTypeField } from '@/schemas/keywordSkillCard.generated';
import { serializeKeywordSkillCardSkillCardTitleField } from '@/schemas/keywordSkillCard.generated';
import { deserializeKeywordSkillCardSkillCardTitleField } from '@/schemas/keywordSkillCard.generated';
import { serializeKeywordSkillCardSkillField } from '@/schemas/keywordSkillCard.generated';
import { deserializeKeywordSkillCardSkillField } from '@/schemas/keywordSkillCard.generated';
import { serializeKeywordSkillCardSkillTypeField } from '@/schemas/keywordSkillCard.generated';
import { deserializeKeywordSkillCardSkillTypeField } from '@/schemas/keywordSkillCard.generated';
import { serializeKeywordSkillCardInvocationField } from '@/schemas/keywordSkillCard.generated';
import { deserializeKeywordSkillCardInvocationField } from '@/schemas/keywordSkillCard.generated';
import { serializeKeywordSkillCardInvocationTypeField } from '@/schemas/keywordSkillCard.generated';
import { deserializeKeywordSkillCardInvocationTypeField } from '@/schemas/keywordSkillCard.generated';
import { serializeKeywordSkillCardEntriesField } from '@/schemas/keywordSkillCard.generated';
import { deserializeKeywordSkillCardEntriesField } from '@/schemas/keywordSkillCard.generated';
import { serializeStatusSkillCard } from '@/schemas/statusSkillCard.generated';
import { deserializeStatusSkillCard } from '@/schemas/statusSkillCard.generated';
import { serializeTimelineSkillCard } from '@/schemas/timelineSkillCard.generated';
import { deserializeTimelineSkillCard } from '@/schemas/timelineSkillCard.generated';
import { serializeTranscriptSkillCard } from '@/schemas/transcriptSkillCard.generated';
import { deserializeTranscriptSkillCard } from '@/schemas/transcriptSkillCard.generated';
import { serializeSkillCardsMetadata } from '@/schemas/skillCardsMetadata.generated';
import { deserializeSkillCardsMetadata } from '@/schemas/skillCardsMetadata.generated';
import { serializeCreateBoxSkillCardsOnFileRequestBody } from '@/managers/skills.generated';
import { deserializeCreateBoxSkillCardsOnFileRequestBody } from '@/managers/skills.generated';
import { serializeUpdateBoxSkillCardsOnFileRequestBody } from '@/managers/skills.generated';
import { deserializeUpdateBoxSkillCardsOnFileRequestBody } from '@/managers/skills.generated';
import { serializeUpdateBoxSkillCardsOnFileRequestBodyOpField } from '@/managers/skills.generated';
import { deserializeUpdateBoxSkillCardsOnFileRequestBodyOpField } from '@/managers/skills.generated';
import { serializeKeywordSkillCard } from '@/schemas/keywordSkillCard.generated';
import { deserializeKeywordSkillCard } from '@/schemas/keywordSkillCard.generated';
import { serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from '@/schemas/keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard.generated';
import { deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from '@/schemas/keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard.generated';
import { BoxClient } from '@/client.generated';
import { FileFull } from '@/schemas/fileFull.generated';
import { KeywordSkillCardTypeField } from '@/schemas/keywordSkillCard.generated';
import { KeywordSkillCardSkillCardTypeField } from '@/schemas/keywordSkillCard.generated';
import { KeywordSkillCardSkillCardTitleField } from '@/schemas/keywordSkillCard.generated';
import { KeywordSkillCardSkillField } from '@/schemas/keywordSkillCard.generated';
import { KeywordSkillCardSkillTypeField } from '@/schemas/keywordSkillCard.generated';
import { KeywordSkillCardInvocationField } from '@/schemas/keywordSkillCard.generated';
import { KeywordSkillCardInvocationTypeField } from '@/schemas/keywordSkillCard.generated';
import { KeywordSkillCardEntriesField } from '@/schemas/keywordSkillCard.generated';
import { StatusSkillCard } from '@/schemas/statusSkillCard.generated';
import { TimelineSkillCard } from '@/schemas/timelineSkillCard.generated';
import { TranscriptSkillCard } from '@/schemas/transcriptSkillCard.generated';
import { SkillCardsMetadata } from '@/schemas/skillCardsMetadata.generated';
import { CreateBoxSkillCardsOnFileRequestBody } from '@/managers/skills.generated';
import { UpdateBoxSkillCardsOnFileRequestBody } from '@/managers/skills.generated';
import { UpdateBoxSkillCardsOnFileRequestBodyOpField } from '@/managers/skills.generated';
import { getUuid } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { uploadNewFile } from './commons.generated';
import { KeywordSkillCard } from '@/schemas/keywordSkillCard.generated';
import { KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from '@/schemas/keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard.generated';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('test_skills_cards_CRUD', async function test_skills_cards_CRUD(): Promise<any> {
  const file: FileFull = await uploadNewFile();
  const skillId: string = getUuid();
  const invocationId: string = getUuid();
  const titleMessage: string = 'License Plates';
  const cardToCreate: KeywordSkillCard = new KeywordSkillCard({
    type: 'skill_card' as KeywordSkillCardTypeField,
    skillCardType: 'keyword' as KeywordSkillCardSkillCardTypeField,
    skillCardTitle: {
      code: 'license-plates',
      message: titleMessage,
    } satisfies KeywordSkillCardSkillCardTitleField,
    skill: new KeywordSkillCardSkillField({
      id: skillId,
      type: 'service' as KeywordSkillCardSkillTypeField,
    }),
    invocation: new KeywordSkillCardInvocationField({
      id: invocationId,
      type: 'skill_invocation' as KeywordSkillCardInvocationTypeField,
    }),
    entries: [{ text: 'DN86 BOX' } satisfies KeywordSkillCardEntriesField],
  });
  const cardsToCreate: readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[] =
    [cardToCreate];
  const skillCardsMetadata: SkillCardsMetadata =
    await client.skills.createBoxSkillCardsOnFile(file.id, {
      cards: cardsToCreate,
    } satisfies CreateBoxSkillCardsOnFileRequestBody);
  if (!(skillCardsMetadata.cards!.length == 1)) {
    throw new Error('Assertion failed');
  }
  const keywordSkillCard: KeywordSkillCard = skillCardsMetadata
    .cards![0] as KeywordSkillCard;
  if (!(keywordSkillCard.skill.id == skillId)) {
    throw new Error('Assertion failed');
  }
  if (!(keywordSkillCard.skillCardTitle!.message! == titleMessage)) {
    throw new Error('Assertion failed');
  }
  const updatedTitleMessage: string = 'Updated License Plates';
  const cardToUpdate: KeywordSkillCard = new KeywordSkillCard({
    type: 'skill_card' as KeywordSkillCardTypeField,
    skillCardType: 'keyword' as KeywordSkillCardSkillCardTypeField,
    skillCardTitle: {
      code: 'license-plates',
      message: updatedTitleMessage,
    } satisfies KeywordSkillCardSkillCardTitleField,
    skill: new KeywordSkillCardSkillField({
      id: skillId,
      type: 'service' as KeywordSkillCardSkillTypeField,
    }),
    invocation: new KeywordSkillCardInvocationField({
      id: invocationId,
      type: 'skill_invocation' as KeywordSkillCardInvocationTypeField,
    }),
    entries: [{ text: 'DN86 BOX' } satisfies KeywordSkillCardEntriesField],
  });
  const updatedSkillCardsMetadata: SkillCardsMetadata =
    await client.skills.updateBoxSkillCardsOnFile(file.id, [
      {
        op: 'replace' as UpdateBoxSkillCardsOnFileRequestBodyOpField,
        path: '/cards/0',
        value: cardToUpdate,
      } satisfies UpdateBoxSkillCardsOnFileRequestBody,
    ]);
  const updatedKeywordSkillCard: KeywordSkillCard = updatedSkillCardsMetadata
    .cards![0] as KeywordSkillCard;
  if (!(updatedKeywordSkillCard.skill.id == skillId)) {
    throw new Error('Assertion failed');
  }
  if (
    !(updatedKeywordSkillCard.skillCardTitle!.message! == updatedTitleMessage)
  ) {
    throw new Error('Assertion failed');
  }
  const receivedSkillCardsMetadata: SkillCardsMetadata =
    await client.skills.getBoxSkillCardsOnFile(file.id);
  const receivedKeywordSkillCard: KeywordSkillCard = receivedSkillCardsMetadata
    .cards![0] as KeywordSkillCard;
  if (!(receivedKeywordSkillCard.skill.id == skillId)) {
    throw new Error('Assertion failed');
  }
  await client.skills.deleteBoxSkillCardsFromFile(file.id);
  await client.files.deleteFileById(file.id);
});
export {};
