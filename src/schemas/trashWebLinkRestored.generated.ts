import { serializeFolderMini } from './folderMini.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { FolderMini } from './folderMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type TrashWebLinkRestoredTypeField = 'web_link';
export interface TrashWebLinkRestoredPathCollectionField {
  readonly totalCount: number;
  readonly entries: readonly FolderMini[];
}
export type TrashWebLinkRestoredItemStatusField =
  | 'active'
  | 'trashed'
  | 'deleted';
export interface TrashWebLinkRestored {
  readonly type?: TrashWebLinkRestoredTypeField;
  readonly id?: string;
  readonly sequenceId: string;
  readonly etag?: string;
  readonly name?: string;
  readonly url?: string;
  readonly parent?: FolderMini;
  readonly description?: string;
  readonly pathCollection: TrashWebLinkRestoredPathCollectionField;
  readonly createdAt?: DateTime;
  readonly modifiedAt?: DateTime;
  readonly trashedAt?: string;
  readonly purgedAt?: string;
  readonly createdBy?: UserMini;
  readonly modifiedBy?: UserMini;
  readonly ownedBy?: UserMini;
  readonly sharedLink?: string;
  readonly itemStatus?: TrashWebLinkRestoredItemStatusField;
}
export function serializeTrashWebLinkRestoredTypeField(
  val: TrashWebLinkRestoredTypeField
): SerializedData {
  return val;
}
export function deserializeTrashWebLinkRestoredTypeField(
  val: any
): TrashWebLinkRestoredTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TrashWebLinkRestoredTypeField"',
    });
  }
  if (val == 'web_link') {
    return 'web_link';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeTrashWebLinkRestoredPathCollectionField(
  val: TrashWebLinkRestoredPathCollectionField
): SerializedData {
  return {
    ['total_count']: val.totalCount,
    ['entries']: val.entries.map(function (item: FolderMini): SerializedData {
      return serializeFolderMini(item);
    }) as readonly any[],
  };
}
export function deserializeTrashWebLinkRestoredPathCollectionField(
  val: any
): TrashWebLinkRestoredPathCollectionField {
  const totalCount: number = val.total_count;
  const entries: readonly FolderMini[] = sdIsList(val.entries)
    ? (val.entries.map(function (itm: SerializedData): FolderMini {
        return deserializeFolderMini(itm);
      }) as readonly any[])
    : [];
  return {
    totalCount: totalCount,
    entries: entries,
  } satisfies TrashWebLinkRestoredPathCollectionField;
}
export function serializeTrashWebLinkRestoredItemStatusField(
  val: TrashWebLinkRestoredItemStatusField
): SerializedData {
  return val;
}
export function deserializeTrashWebLinkRestoredItemStatusField(
  val: any
): TrashWebLinkRestoredItemStatusField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TrashWebLinkRestoredItemStatusField"',
    });
  }
  if (val == 'active') {
    return 'active';
  }
  if (val == 'trashed') {
    return 'trashed';
  }
  if (val == 'deleted') {
    return 'deleted';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeTrashWebLinkRestored(
  val: TrashWebLinkRestored
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeTrashWebLinkRestoredTypeField(val.type),
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['sequence_id']: val.sequenceId,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['url']: val.url == void 0 ? void 0 : val.url,
    ['parent']: val.parent == void 0 ? void 0 : serializeFolderMini(val.parent),
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['path_collection']: serializeTrashWebLinkRestoredPathCollectionField(
      val.pathCollection
    ),
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['modified_at']:
      val.modifiedAt == void 0 ? void 0 : serializeDateTime(val.modifiedAt),
    ['trashed_at']: val.trashedAt == void 0 ? void 0 : val.trashedAt,
    ['purged_at']: val.purgedAt == void 0 ? void 0 : val.purgedAt,
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
    ['modified_by']:
      val.modifiedBy == void 0 ? void 0 : serializeUserMini(val.modifiedBy),
    ['owned_by']:
      val.ownedBy == void 0 ? void 0 : serializeUserMini(val.ownedBy),
    ['shared_link']: val.sharedLink == void 0 ? void 0 : val.sharedLink,
    ['item_status']:
      val.itemStatus == void 0
        ? void 0
        : serializeTrashWebLinkRestoredItemStatusField(val.itemStatus),
  };
}
export function deserializeTrashWebLinkRestored(
  val: any
): TrashWebLinkRestored {
  const type: undefined | TrashWebLinkRestoredTypeField =
    val.type == void 0
      ? void 0
      : deserializeTrashWebLinkRestoredTypeField(val.type);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const sequenceId: string = val.sequence_id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const url: undefined | string = val.url == void 0 ? void 0 : val.url;
  const parent: undefined | FolderMini =
    val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const pathCollection: TrashWebLinkRestoredPathCollectionField =
    deserializeTrashWebLinkRestoredPathCollectionField(val.path_collection);
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  const trashedAt: undefined | string =
    val.trashed_at == void 0 ? void 0 : val.trashed_at;
  const purgedAt: undefined | string =
    val.purged_at == void 0 ? void 0 : val.purged_at;
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const modifiedBy: undefined | UserMini =
    val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
  const ownedBy: undefined | UserMini =
    val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
  const sharedLink: undefined | string =
    val.shared_link == void 0 ? void 0 : val.shared_link;
  const itemStatus: undefined | TrashWebLinkRestoredItemStatusField =
    val.item_status == void 0
      ? void 0
      : deserializeTrashWebLinkRestoredItemStatusField(val.item_status);
  return {
    type: type,
    id: id,
    sequenceId: sequenceId,
    etag: etag,
    name: name,
    url: url,
    parent: parent,
    description: description,
    pathCollection: pathCollection,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    trashedAt: trashedAt,
    purgedAt: purgedAt,
    createdBy: createdBy,
    modifiedBy: modifiedBy,
    ownedBy: ownedBy,
    sharedLink: sharedLink,
    itemStatus: itemStatus,
  } satisfies TrashWebLinkRestored;
}
