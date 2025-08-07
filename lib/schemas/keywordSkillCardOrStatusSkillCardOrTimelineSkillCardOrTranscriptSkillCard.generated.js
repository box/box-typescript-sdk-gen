"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard = serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard;
exports.deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard = deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard;
const keywordSkillCard_generated_js_1 = require("./keywordSkillCard.generated.js");
const keywordSkillCard_generated_js_2 = require("./keywordSkillCard.generated.js");
const statusSkillCard_generated_js_1 = require("./statusSkillCard.generated.js");
const statusSkillCard_generated_js_2 = require("./statusSkillCard.generated.js");
const timelineSkillCard_generated_js_1 = require("./timelineSkillCard.generated.js");
const timelineSkillCard_generated_js_2 = require("./timelineSkillCard.generated.js");
const transcriptSkillCard_generated_js_1 = require("./transcriptSkillCard.generated.js");
const transcriptSkillCard_generated_js_2 = require("./transcriptSkillCard.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(val) {
    if (val.skillCardType == 'keyword') {
        return (0, keywordSkillCard_generated_js_1.serializeKeywordSkillCard)(val);
    }
    if (val.skillCardType == 'status') {
        return (0, statusSkillCard_generated_js_1.serializeStatusSkillCard)(val);
    }
    if (val.skillCardType == 'timeline') {
        return (0, timelineSkillCard_generated_js_1.serializeTimelineSkillCard)(val);
    }
    if (val.skillCardType == 'transcript') {
        return (0, transcriptSkillCard_generated_js_1.serializeTranscriptSkillCard)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: 'unknown type' });
}
function deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard"',
        });
    }
    if (val.skill_card_type == 'keyword') {
        return (0, keywordSkillCard_generated_js_2.deserializeKeywordSkillCard)(val);
    }
    if (val.skill_card_type == 'status') {
        return (0, statusSkillCard_generated_js_2.deserializeStatusSkillCard)(val);
    }
    if (val.skill_card_type == 'timeline') {
        return (0, timelineSkillCard_generated_js_2.deserializeTimelineSkillCard)(val);
    }
    if (val.skill_card_type == 'transcript') {
        return (0, transcriptSkillCard_generated_js_2.deserializeTranscriptSkillCard)(val);
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard",
    });
}
//# sourceMappingURL=keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard.generated.js.map