import { serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from './keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard.generated.js';
import { deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from './keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeSkillCardsMetadata(val) {
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
                return serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(item);
            }),
    };
}
export function deserializeSkillCardsMetadata(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "SkillCardsMetadata"',
        });
    }
    if (!(val.$canEdit == void 0) && !sdIsBoolean(val.$canEdit)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "$canEdit" of type "SkillCardsMetadata"',
        });
    }
    const canEdit = val.$canEdit == void 0 ? void 0 : val.$canEdit;
    if (!(val.$id == void 0) && !sdIsString(val.$id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "$id" of type "SkillCardsMetadata"',
        });
    }
    const id = val.$id == void 0 ? void 0 : val.$id;
    if (!(val.$parent == void 0) && !sdIsString(val.$parent)) {
        throw new BoxSdkError({
            message: 'Expecting string for "$parent" of type "SkillCardsMetadata"',
        });
    }
    const parent = val.$parent == void 0 ? void 0 : val.$parent;
    if (!(val.$scope == void 0) && !sdIsString(val.$scope)) {
        throw new BoxSdkError({
            message: 'Expecting string for "$scope" of type "SkillCardsMetadata"',
        });
    }
    const scope = val.$scope == void 0 ? void 0 : val.$scope;
    if (!(val.$template == void 0) && !sdIsString(val.$template)) {
        throw new BoxSdkError({
            message: 'Expecting string for "$template" of type "SkillCardsMetadata"',
        });
    }
    const template = val.$template == void 0 ? void 0 : val.$template;
    if (!(val.$type == void 0) && !sdIsString(val.$type)) {
        throw new BoxSdkError({
            message: 'Expecting string for "$type" of type "SkillCardsMetadata"',
        });
    }
    const type = val.$type == void 0 ? void 0 : val.$type;
    if (!(val.$typeVersion == void 0) && !sdIsNumber(val.$typeVersion)) {
        throw new BoxSdkError({
            message: 'Expecting number for "$typeVersion" of type "SkillCardsMetadata"',
        });
    }
    const typeVersion = val.$typeVersion == void 0 ? void 0 : val.$typeVersion;
    if (!(val.$version == void 0) && !sdIsNumber(val.$version)) {
        throw new BoxSdkError({
            message: 'Expecting number for "$version" of type "SkillCardsMetadata"',
        });
    }
    const version = val.$version == void 0 ? void 0 : val.$version;
    if (!(val.cards == void 0) && !sdIsList(val.cards)) {
        throw new BoxSdkError({
            message: 'Expecting array for "cards" of type "SkillCardsMetadata"',
        });
    }
    const cards = val.cards == void 0
        ? void 0
        : sdIsList(val.cards)
            ? val.cards.map(function (itm) {
                return deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(itm);
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