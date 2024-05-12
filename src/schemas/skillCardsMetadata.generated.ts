import { serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from './keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard.generated.js';
import { deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from './keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard.generated.js';
import { KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from './keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface SkillCardsMetadata {
  readonly canEdit?: boolean;
  readonly id?: string;
  readonly parent?: string;
  readonly scope?: string;
  readonly template?: string;
  readonly type?: string;
  readonly typeVersion?: number;
  readonly version?: number;
  readonly cards?: readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[];
}
export function serializeSkillCardsMetadata(
  val: SkillCardsMetadata
): SerializedData {
  return {
    ['$canEdit']: val.canEdit == void 0 ? void 0 : val.canEdit,
    ['$id']: val.id == void 0 ? void 0 : val.id,
    ['$parent']: val.parent == void 0 ? void 0 : val.parent,
    ['$scope']: val.scope == void 0 ? void 0 : val.scope,
    ['$template']: val.template == void 0 ? void 0 : val.template,
    ['$type']: val.type == void 0 ? void 0 : val.type,
    ['$typeVersion']: val.typeVersion == void 0 ? void 0 : val.typeVersion,
    ['$version']: val.version == void 0 ? void 0 : val.version,
    ['cards']:
      val.cards == void 0
        ? void 0
        : (val.cards.map(function (
            item: KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard
          ): SerializedData {
            return serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(
              item
            );
          }) as readonly any[]),
  };
}
export function deserializeSkillCardsMetadata(val: any): SkillCardsMetadata {
  const canEdit: undefined | boolean =
    val.$canEdit == void 0 ? void 0 : val.$canEdit;
  const id: undefined | string = val.$id == void 0 ? void 0 : val.$id;
  const parent: undefined | string =
    val.$parent == void 0 ? void 0 : val.$parent;
  const scope: undefined | string = val.$scope == void 0 ? void 0 : val.$scope;
  const template: undefined | string =
    val.$template == void 0 ? void 0 : val.$template;
  const type: undefined | string = val.$type == void 0 ? void 0 : val.$type;
  const typeVersion: undefined | number =
    val.$typeVersion == void 0 ? void 0 : val.$typeVersion;
  const version: undefined | number =
    val.$version == void 0 ? void 0 : val.$version;
  const cards:
    | undefined
    | readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[] =
    val.cards == void 0
      ? void 0
      : sdIsList(val.cards)
      ? (val.cards.map(function (
          itm: SerializedData
        ): KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard {
          return deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(
            itm
          );
        }) as readonly any[])
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
  } satisfies SkillCardsMetadata;
}
