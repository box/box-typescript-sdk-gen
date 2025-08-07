import { KeywordSkillCardSkillField } from '../schemas/keywordSkillCard.generated.js';
import { KeywordSkillCardInvocationField } from '../schemas/keywordSkillCard.generated.js';
import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { KeywordSkillCard } from '../schemas/keywordSkillCard.generated.js';
export const client = getDefaultClient();
test('test_skills_cards_CRUD', async function test_skills_cards_CRUD() {
    const file = await uploadNewFile();
    const skillId = getUuid();
    const invocationId = getUuid();
    const titleMessage = 'License Plates';
    const cardToCreate = new KeywordSkillCard({
        type: 'skill_card',
        skillCardType: 'keyword',
        skillCardTitle: {
            code: 'license-plates',
            message: titleMessage,
        },
        skill: new KeywordSkillCardSkillField({
            id: skillId,
            type: 'service',
        }),
        invocation: new KeywordSkillCardInvocationField({
            id: invocationId,
            type: 'skill_invocation',
        }),
        entries: [{ text: 'DN86 BOX' }],
    });
    const cardsToCreate = [cardToCreate];
    const skillCardsMetadata = await client.skills.createBoxSkillCardsOnFile(file.id, {
        cards: cardsToCreate,
    });
    if (!(skillCardsMetadata.cards.length == 1)) {
        throw new Error('Assertion failed');
    }
    const keywordSkillCard = skillCardsMetadata
        .cards[0];
    if (!(keywordSkillCard.skill.id == skillId)) {
        throw new Error('Assertion failed');
    }
    if (!(keywordSkillCard.skillCardTitle.message == titleMessage)) {
        throw new Error('Assertion failed');
    }
    const updatedTitleMessage = 'Updated License Plates';
    const cardToUpdate = new KeywordSkillCard({
        type: 'skill_card',
        skillCardType: 'keyword',
        skillCardTitle: {
            code: 'license-plates',
            message: updatedTitleMessage,
        },
        skill: new KeywordSkillCardSkillField({
            id: skillId,
            type: 'service',
        }),
        invocation: new KeywordSkillCardInvocationField({
            id: invocationId,
            type: 'skill_invocation',
        }),
        entries: [{ text: 'DN86 BOX' }],
    });
    const updatedSkillCardsMetadata = await client.skills.updateBoxSkillCardsOnFile(file.id, [
        {
            op: 'replace',
            path: '/cards/0',
            value: cardToUpdate,
        },
    ]);
    const updatedKeywordSkillCard = updatedSkillCardsMetadata
        .cards[0];
    if (!(updatedKeywordSkillCard.skill.id == skillId)) {
        throw new Error('Assertion failed');
    }
    if (!(updatedKeywordSkillCard.skillCardTitle.message == updatedTitleMessage)) {
        throw new Error('Assertion failed');
    }
    const receivedSkillCardsMetadata = await client.skills.getBoxSkillCardsOnFile(file.id);
    const receivedKeywordSkillCard = receivedSkillCardsMetadata
        .cards[0];
    if (!(receivedKeywordSkillCard.skill.id == skillId)) {
        throw new Error('Assertion failed');
    }
    await client.skills.deleteBoxSkillCardsFromFile(file.id);
    await client.files.deleteFileById(file.id);
});
//# sourceMappingURL=skills.generated.test.js.map