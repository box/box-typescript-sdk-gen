"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeSkillCardsMetadata = serializeSkillCardsMetadata;
exports.deserializeSkillCardsMetadata = deserializeSkillCardsMetadata;
const keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard_generated_js_1 = require("./keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard.generated.js");
const keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard_generated_js_2 = require("./keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
const json_js_5 = require("../serialization/json.js");
function serializeSkillCardsMetadata(val) {
    return {
        ['$canEdit']: val.canEdit,
        ['$id']: val.id,
        ['$parent']: val.parent,
        ['$scope']: val.scope,
        ['$template']: val.template,
        ['$type']: val.type,
        ['$typeVersion']: val.typeVersion,
        ['$version']: val.version,
        ['cards']: val.cards == void 0
            ? val.cards
            : val.cards.map(function (item) {
                return (0, keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard_generated_js_1.serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard)(item);
            }),
    };
}
function deserializeSkillCardsMetadata(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "SkillCardsMetadata"',
        });
    }
    if (!(val.$canEdit == void 0) && !(0, json_js_1.sdIsBoolean)(val.$canEdit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "$canEdit" of type "SkillCardsMetadata"',
        });
    }
    const canEdit = val.$canEdit == void 0 ? void 0 : val.$canEdit;
    if (!(val.$id == void 0) && !(0, json_js_3.sdIsString)(val.$id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "$id" of type "SkillCardsMetadata"',
        });
    }
    const id = val.$id == void 0 ? void 0 : val.$id;
    if (!(val.$parent == void 0) && !(0, json_js_3.sdIsString)(val.$parent)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "$parent" of type "SkillCardsMetadata"',
        });
    }
    const parent = val.$parent == void 0 ? void 0 : val.$parent;
    if (!(val.$scope == void 0) && !(0, json_js_3.sdIsString)(val.$scope)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "$scope" of type "SkillCardsMetadata"',
        });
    }
    const scope = val.$scope == void 0 ? void 0 : val.$scope;
    if (!(val.$template == void 0) && !(0, json_js_3.sdIsString)(val.$template)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "$template" of type "SkillCardsMetadata"',
        });
    }
    const template = val.$template == void 0 ? void 0 : val.$template;
    if (!(val.$type == void 0) && !(0, json_js_3.sdIsString)(val.$type)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "$type" of type "SkillCardsMetadata"',
        });
    }
    const type = val.$type == void 0 ? void 0 : val.$type;
    if (!(val.$typeVersion == void 0) && !(0, json_js_2.sdIsNumber)(val.$typeVersion)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "$typeVersion" of type "SkillCardsMetadata"',
        });
    }
    const typeVersion = val.$typeVersion == void 0 ? void 0 : val.$typeVersion;
    if (!(val.$version == void 0) && !(0, json_js_2.sdIsNumber)(val.$version)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "$version" of type "SkillCardsMetadata"',
        });
    }
    const version = val.$version == void 0 ? void 0 : val.$version;
    if (!(val.cards == void 0) && !(0, json_js_4.sdIsList)(val.cards)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "cards" of type "SkillCardsMetadata"',
        });
    }
    const cards = val.cards == void 0
        ? void 0
        : (0, json_js_4.sdIsList)(val.cards)
            ? val.cards.map(function (itm) {
                return (0, keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard_generated_js_2.deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard)(itm);
            })
            : [];
    return {
        canEdit: canEdit,
        id: id,
        parent: parent,
        scope: scope,
        template: template,
        type: type,
        typeVersion: typeVersion,
        version: version,
        cards: cards,
    };
}
//# sourceMappingURL=skillCardsMetadata.generated.js.map