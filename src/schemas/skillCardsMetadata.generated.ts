import { serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from './keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard.generated.js';
import { deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from './keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard.generated.js';
import { KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from './keywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard.generated.js';
import { BoxSdkError } from '../box/errors.js';
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
export function deserializeSkillCardsMetadata(
  val: SerializedData
): SkillCardsMetadata {
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
  const canEdit: undefined | boolean =
    val.$canEdit == void 0 ? void 0 : val.$canEdit;
  if (!(val.$id == void 0) && !sdIsString(val.$id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "$id" of type "SkillCardsMetadata"',
    });
  }
  const id: undefined | string = val.$id == void 0 ? void 0 : val.$id;
  if (!(val.$parent == void 0) && !sdIsString(val.$parent)) {
    throw new BoxSdkError({
      message: 'Expecting string for "$parent" of type "SkillCardsMetadata"',
    });
  }
  const parent: undefined | string =
    val.$parent == void 0 ? void 0 : val.$parent;
  if (!(val.$scope == void 0) && !sdIsString(val.$scope)) {
    throw new BoxSdkError({
      message: 'Expecting string for "$scope" of type "SkillCardsMetadata"',
    });
  }
  const scope: undefined | string = val.$scope == void 0 ? void 0 : val.$scope;
  if (!(val.$template == void 0) && !sdIsString(val.$template)) {
    throw new BoxSdkError({
      message: 'Expecting string for "$template" of type "SkillCardsMetadata"',
    });
  }
  const template: undefined | string =
    val.$template == void 0 ? void 0 : val.$template;
  if (!(val.$type == void 0) && !sdIsString(val.$type)) {
    throw new BoxSdkError({
      message: 'Expecting string for "$type" of type "SkillCardsMetadata"',
    });
  }
  const type: undefined | string = val.$type == void 0 ? void 0 : val.$type;
  if (!(val.$typeVersion == void 0) && !sdIsNumber(val.$typeVersion)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "$typeVersion" of type "SkillCardsMetadata"',
    });
  }
  const typeVersion: undefined | number =
    val.$typeVersion == void 0 ? void 0 : val.$typeVersion;
  if (!(val.$version == void 0) && !sdIsNumber(val.$version)) {
    throw new BoxSdkError({
      message: 'Expecting number for "$version" of type "SkillCardsMetadata"',
    });
  }
  const version: undefined | number =
    val.$version == void 0 ? void 0 : val.$version;
  if (!(val.cards == void 0) && !sdIsList(val.cards)) {
    throw new BoxSdkError({
      message: 'Expecting array for "cards" of type "SkillCardsMetadata"',
    });
  }
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
