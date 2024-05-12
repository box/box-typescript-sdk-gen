import { serializeFileFullOrFolderFullOrWebLink } from './fileFullOrFolderFullOrWebLink.generated.js';
import { deserializeFileFullOrFolderFullOrWebLink } from './fileFullOrFolderFullOrWebLink.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { FileFullOrFolderFullOrWebLink } from './fileFullOrFolderFullOrWebLink.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type RecentItemInteractionTypeField =
  | 'item_preview'
  | 'item_upload'
  | 'item_comment'
  | 'item_open'
  | 'item_modify';
export interface RecentItem {
  readonly type?: string;
  readonly item?: FileFullOrFolderFullOrWebLink;
  readonly interactionType?: RecentItemInteractionTypeField;
  readonly interactedAt?: DateTime;
  readonly interactionSharedLink?: string;
}
export function serializeRecentItemInteractionTypeField(
  val: RecentItemInteractionTypeField
): SerializedData {
  return val;
}
export function deserializeRecentItemInteractionTypeField(
  val: SerializedData
): RecentItemInteractionTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "RecentItemInteractionTypeField"',
    });
  }
  if (val == 'item_preview') {
    return 'item_preview';
  }
  if (val == 'item_upload') {
    return 'item_upload';
  }
  if (val == 'item_comment') {
    return 'item_comment';
  }
  if (val == 'item_open') {
    return 'item_open';
  }
  if (val == 'item_modify') {
    return 'item_modify';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeRecentItem(val: RecentItem): SerializedData {
  return {
    ['type']: val.type == void 0 ? void 0 : val.type,
    ['item']:
      val.item == void 0
        ? void 0
        : serializeFileFullOrFolderFullOrWebLink(val.item),
    ['interaction_type']:
      val.interactionType == void 0
        ? void 0
        : serializeRecentItemInteractionTypeField(val.interactionType),
    ['interacted_at']:
      val.interactedAt == void 0 ? void 0 : serializeDateTime(val.interactedAt),
    ['interaction_shared_link']:
      val.interactionSharedLink == void 0 ? void 0 : val.interactionSharedLink,
  };
}
export function deserializeRecentItem(val: SerializedData): RecentItem {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "RecentItem"' });
  }
  if (!(val.type == void 0) && !sdIsString(val.type)) {
    throw new BoxSdkError({
      message: 'Expecting string for "type" of type "RecentItem"',
    });
  }
  const type: undefined | string = val.type == void 0 ? void 0 : val.type;
  const item: undefined | FileFullOrFolderFullOrWebLink =
    val.item == void 0
      ? void 0
      : deserializeFileFullOrFolderFullOrWebLink(val.item);
  const interactionType: undefined | RecentItemInteractionTypeField =
    val.interaction_type == void 0
      ? void 0
      : deserializeRecentItemInteractionTypeField(val.interaction_type);
  if (!(val.interacted_at == void 0) && !sdIsString(val.interacted_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "interacted_at" of type "RecentItem"',
    });
  }
  const interactedAt: undefined | DateTime =
    val.interacted_at == void 0
      ? void 0
      : deserializeDateTime(val.interacted_at);
  if (
    !(val.interaction_shared_link == void 0) &&
    !sdIsString(val.interaction_shared_link)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "interaction_shared_link" of type "RecentItem"',
    });
  }
  const interactionSharedLink: undefined | string =
    val.interaction_shared_link == void 0
      ? void 0
      : val.interaction_shared_link;
  return {
    type: type,
    item: item,
    interactionType: interactionType,
    interactedAt: interactedAt,
    interactionSharedLink: interactionSharedLink,
  } satisfies RecentItem;
}
