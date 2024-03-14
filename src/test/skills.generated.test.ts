import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeSkillCardsMetadata } from '../schemas.generated.js';
import { deserializeSkillCardsMetadata } from '../schemas.generated.js';
import { serializeCreateBoxSkillCardsOnFileRequestBody } from '../managers/skills.generated.js';
import { deserializeCreateBoxSkillCardsOnFileRequestBody } from '../managers/skills.generated.js';
import { serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from '../schemas.generated.js';
import { deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from '../schemas.generated.js';
import { serializeKeywordSkillCardTypeField } from '../schemas.generated.js';
import { deserializeKeywordSkillCardTypeField } from '../schemas.generated.js';
import { serializeKeywordSkillCardSkillCardTypeField } from '../schemas.generated.js';
import { deserializeKeywordSkillCardSkillCardTypeField } from '../schemas.generated.js';
import { serializeKeywordSkillCardSkillCardTitleField } from '../schemas.generated.js';
import { deserializeKeywordSkillCardSkillCardTitleField } from '../schemas.generated.js';
import { serializeKeywordSkillCardSkillField } from '../schemas.generated.js';
import { deserializeKeywordSkillCardSkillField } from '../schemas.generated.js';
import { serializeKeywordSkillCardSkillTypeField } from '../schemas.generated.js';
import { deserializeKeywordSkillCardSkillTypeField } from '../schemas.generated.js';
import { serializeKeywordSkillCardInvocationField } from '../schemas.generated.js';
import { deserializeKeywordSkillCardInvocationField } from '../schemas.generated.js';
import { serializeKeywordSkillCardInvocationTypeField } from '../schemas.generated.js';
import { deserializeKeywordSkillCardInvocationTypeField } from '../schemas.generated.js';
import { serializeKeywordSkillCardEntriesField } from '../schemas.generated.js';
import { deserializeKeywordSkillCardEntriesField } from '../schemas.generated.js';
import { serializeUpdateBoxSkillCardsOnFileRequestBody } from '../managers/skills.generated.js';
import { deserializeUpdateBoxSkillCardsOnFileRequestBody } from '../managers/skills.generated.js';
import { serializeUpdateBoxSkillCardsOnFileRequestBodyOpField } from '../managers/skills.generated.js';
import { deserializeUpdateBoxSkillCardsOnFileRequestBodyOpField } from '../managers/skills.generated.js';
import { serializeKeywordSkillCard } from '../schemas.generated.js';
import { deserializeKeywordSkillCard } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { FileFull } from '../schemas.generated.js';
import { SkillCardsMetadata } from '../schemas.generated.js';
import { CreateBoxSkillCardsOnFileRequestBody } from '../managers/skills.generated.js';
import { KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from '../schemas.generated.js';
import { KeywordSkillCardTypeField } from '../schemas.generated.js';
import { KeywordSkillCardSkillCardTypeField } from '../schemas.generated.js';
import { KeywordSkillCardSkillCardTitleField } from '../schemas.generated.js';
import { KeywordSkillCardSkillField } from '../schemas.generated.js';
import { KeywordSkillCardSkillTypeField } from '../schemas.generated.js';
import { KeywordSkillCardInvocationField } from '../schemas.generated.js';
import { KeywordSkillCardInvocationTypeField } from '../schemas.generated.js';
import { KeywordSkillCardEntriesField } from '../schemas.generated.js';
import { UpdateBoxSkillCardsOnFileRequestBody } from '../managers/skills.generated.js';
import { UpdateBoxSkillCardsOnFileRequestBodyOpField } from '../managers/skills.generated.js';
import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { KeywordSkillCard } from '../schemas.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export const client: BoxClient = getDefaultClient();
test('test_skills_cards_CRUD', async function test_skills_cards_CRUD(): Promise<any> {
  const file: FileFull = await uploadNewFile();
  const skillId: string = getUuid();
  const invocationId: string = getUuid();
  const titleMessage: string = 'License Plates';
  const skillCardsMetadata: SkillCardsMetadata =
    await client.skills.createBoxSkillCardsOnFile(file.id, {
      cards: [
        {
          type: 'skill_card' as KeywordSkillCardTypeField,
          skillCardType: 'keyword' as KeywordSkillCardSkillCardTypeField,
          skillCardTitle: {
            code: 'license-plates',
            message: titleMessage,
          } satisfies KeywordSkillCardSkillCardTitleField,
          skill: {
            id: skillId,
            type: 'service' as KeywordSkillCardSkillTypeField,
          } satisfies KeywordSkillCardSkillField,
          invocation: {
            id: invocationId,
            type: 'skill_invocation' as KeywordSkillCardInvocationTypeField,
          } satisfies KeywordSkillCardInvocationField,
          entries: [
            { text: 'DN86 BOX' } satisfies KeywordSkillCardEntriesField,
          ],
        } satisfies KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard,
      ],
    } satisfies CreateBoxSkillCardsOnFileRequestBody);
  if (!(skillCardsMetadata.cards!.length == 1)) {
    throw new Error('Assertion failed');
  }
  if (!(skillCardsMetadata.cards![0].skill.id == skillId)) {
    throw new Error('Assertion failed');
  }
  if (
    !(skillCardsMetadata.cards![0].skillCardTitle!.message! == titleMessage)
  ) {
    throw new Error('Assertion failed');
  }
  const updatedTitleMessage: string = 'Updated License Plates';
  const updatedSkillCardsMetadata: SkillCardsMetadata =
    await client.skills.updateBoxSkillCardsOnFile(file.id, [
      {
        op: 'replace' as UpdateBoxSkillCardsOnFileRequestBodyOpField,
        path: '/cards/0',
        value: {
          type: 'skill_card' as KeywordSkillCardTypeField,
          skillCardType: 'keyword' as KeywordSkillCardSkillCardTypeField,
          skillCardTitle: {
            code: 'license-plates',
            message: updatedTitleMessage,
          } satisfies KeywordSkillCardSkillCardTitleField,
          skill: {
            id: skillId,
            type: 'service' as KeywordSkillCardSkillTypeField,
          } satisfies KeywordSkillCardSkillField,
          invocation: {
            id: invocationId,
            type: 'skill_invocation' as KeywordSkillCardInvocationTypeField,
          } satisfies KeywordSkillCardInvocationField,
          entries: [
            { text: 'DN86 BOX' } satisfies KeywordSkillCardEntriesField,
          ],
        } satisfies KeywordSkillCard,
      } satisfies UpdateBoxSkillCardsOnFileRequestBody,
    ]);
  if (!(updatedSkillCardsMetadata.cards![0].skill.id == skillId)) {
    throw new Error('Assertion failed');
  }
  if (
    !(
      updatedSkillCardsMetadata.cards![0].skillCardTitle!.message! ==
      updatedTitleMessage
    )
  ) {
    throw new Error('Assertion failed');
  }
  const receivedSkillCardsMetadata: SkillCardsMetadata =
    await client.skills.getBoxSkillCardsOnFile(file.id);
  if (!(updatedSkillCardsMetadata.cards![0].skill.id == skillId)) {
    throw new Error('Assertion failed');
  }
  await client.skills.deleteBoxSkillCardsFromFile(file.id);
  await client.files.deleteFileById(file.id);
});
export {};
