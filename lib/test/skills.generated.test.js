"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const keywordSkillCard_generated_js_1 = require("../schemas/keywordSkillCard.generated.js");
const keywordSkillCard_generated_js_2 = require("../schemas/keywordSkillCard.generated.js");
const utils_js_1 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const commons_generated_js_2 = require("./commons.generated.js");
const keywordSkillCard_generated_js_3 = require("../schemas/keywordSkillCard.generated.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('test_skills_cards_CRUD', function test_skills_cards_CRUD() {
    return __awaiter(this, void 0, void 0, function* () {
        const file = yield (0, commons_generated_js_2.uploadNewFile)();
        const skillId = (0, utils_js_1.getUuid)();
        const invocationId = (0, utils_js_1.getUuid)();
        const titleMessage = 'License Plates';
        const cardToCreate = new keywordSkillCard_generated_js_3.KeywordSkillCard({
            type: 'skill_card',
            skillCardType: 'keyword',
            skillCardTitle: {
                code: 'license-plates',
                message: titleMessage,
            },
            skill: new keywordSkillCard_generated_js_1.KeywordSkillCardSkillField({
                id: skillId,
                type: 'service',
            }),
            invocation: new keywordSkillCard_generated_js_2.KeywordSkillCardInvocationField({
                id: invocationId,
                type: 'skill_invocation',
            }),
            entries: [{ text: 'DN86 BOX' }],
        });
        const cardsToCreate = [cardToCreate];
        const skillCardsMetadata = yield exports.client.skills.createBoxSkillCardsOnFile(file.id, {
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
        const cardToUpdate = new keywordSkillCard_generated_js_3.KeywordSkillCard({
            type: 'skill_card',
            skillCardType: 'keyword',
            skillCardTitle: {
                code: 'license-plates',
                message: updatedTitleMessage,
            },
            skill: new keywordSkillCard_generated_js_1.KeywordSkillCardSkillField({
                id: skillId,
                type: 'service',
            }),
            invocation: new keywordSkillCard_generated_js_2.KeywordSkillCardInvocationField({
                id: invocationId,
                type: 'skill_invocation',
            }),
            entries: [{ text: 'DN86 BOX' }],
        });
        const updatedSkillCardsMetadata = yield exports.client.skills.updateBoxSkillCardsOnFile(file.id, [
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
        const receivedSkillCardsMetadata = yield exports.client.skills.getBoxSkillCardsOnFile(file.id);
        const receivedKeywordSkillCard = receivedSkillCardsMetadata
            .cards[0];
        if (!(receivedKeywordSkillCard.skill.id == skillId)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.skills.deleteBoxSkillCardsFromFile(file.id);
        yield exports.client.files.deleteFileById(file.id);
    });
});
//# sourceMappingURL=skills.generated.test.js.map