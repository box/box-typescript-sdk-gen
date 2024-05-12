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
export type TrashFolderRestoredTypeField = 'folder';
export interface TrashFolderRestoredPathCollectionField {
  readonly totalCount: number;
  readonly entries: readonly FolderMini[];
}
export type TrashFolderRestoredItemStatusField =
  | 'active'
  | 'trashed'
  | 'deleted';
export interface TrashFolderRestored {
  readonly id?: string;
  readonly etag?: string;
  readonly type?: TrashFolderRestoredTypeField;
  readonly sequenceId?: string;
  readonly name?: string;
  readonly createdAt?: DateTime;
  readonly modifiedAt?: DateTime;
  readonly description?: string;
  readonly size?: number;
  readonly pathCollection?: TrashFolderRestoredPathCollectionField;
  readonly createdBy?: UserMini;
  readonly modifiedBy?: UserMini;
  readonly trashedAt?: string;
  readonly purgedAt?: string;
  readonly contentCreatedAt?: DateTime;
  readonly contentModifiedAt?: DateTime;
  readonly ownedBy?: UserMini;
  readonly sharedLink?: string;
  readonly folderUploadEmail?: string;
  readonly parent?: FolderMini;
  readonly itemStatus?: TrashFolderRestoredItemStatusField;
}
export function serializeTrashFolderRestoredTypeField(
  val: TrashFolderRestoredTypeField
): SerializedData {
  return val;
}
export function deserializeTrashFolderRestoredTypeField(
  val: SerializedData
): TrashFolderRestoredTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TrashFolderRestoredTypeField"',
    });
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeTrashFolderRestoredPathCollectionField(
  val: TrashFolderRestoredPathCollectionField
): SerializedData {
  return {
    ['total_count']: val.totalCount,
    ['entries']: val.entries.map(function (item: FolderMini): SerializedData {
      return serializeFolderMini(item);
    }) as readonly any[],
  };
}
export function deserializeTrashFolderRestoredPathCollectionField(
  val: SerializedData
): TrashFolderRestoredPathCollectionField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "TrashFolderRestoredPathCollectionField"',
    });
  }
  if (val.total_count == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "total_count" of type "TrashFolderRestoredPathCollectionField" to be defined',
    });
  }
  if (!sdIsNumber(val.total_count)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "total_count" of type "TrashFolderRestoredPathCollectionField"',
    });
  }
  const totalCount: number = val.total_count;
  if (val.entries == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "entries" of type "TrashFolderRestoredPathCollectionField" to be defined',
    });
  }
  if (!sdIsList(val.entries)) {
    throw new BoxSdkError({
      message:
        'Expecting array for "entries" of type "TrashFolderRestoredPathCollectionField"',
    });
  }
  const entries: readonly FolderMini[] = sdIsList(val.entries)
    ? (val.entries.map(function (itm: SerializedData): FolderMini {
        return deserializeFolderMini(itm);
      }) as readonly any[])
    : [];
  return {
    totalCount: totalCount,
    entries: entries,
  } satisfies TrashFolderRestoredPathCollectionField;
}
export function serializeTrashFolderRestoredItemStatusField(
  val: TrashFolderRestoredItemStatusField
): SerializedData {
  return val;
}
export function deserializeTrashFolderRestoredItemStatusField(
  val: SerializedData
): TrashFolderRestoredItemStatusField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TrashFolderRestoredItemStatusField"',
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
export function serializeTrashFolderRestored(
  val: TrashFolderRestored
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeTrashFolderRestoredTypeField(val.type),
    ['sequence_id']: val.sequenceId == void 0 ? void 0 : val.sequenceId,
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['modified_at']:
      val.modifiedAt == void 0 ? void 0 : serializeDateTime(val.modifiedAt),
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['size']: val.size == void 0 ? void 0 : val.size,
    ['path_collection']:
      val.pathCollection == void 0
        ? void 0
        : serializeTrashFolderRestoredPathCollectionField(val.pathCollection),
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
    ['modified_by']:
      val.modifiedBy == void 0 ? void 0 : serializeUserMini(val.modifiedBy),
    ['trashed_at']: val.trashedAt == void 0 ? void 0 : val.trashedAt,
    ['purged_at']: val.purgedAt == void 0 ? void 0 : val.purgedAt,
    ['content_created_at']:
      val.contentCreatedAt == void 0
        ? void 0
        : serializeDateTime(val.contentCreatedAt),
    ['content_modified_at']:
      val.contentModifiedAt == void 0
        ? void 0
        : serializeDateTime(val.contentModifiedAt),
    ['owned_by']:
      val.ownedBy == void 0 ? void 0 : serializeUserMini(val.ownedBy),
    ['shared_link']: val.sharedLink == void 0 ? void 0 : val.sharedLink,
    ['folder_upload_email']:
      val.folderUploadEmail == void 0 ? void 0 : val.folderUploadEmail,
    ['parent']: val.parent == void 0 ? void 0 : serializeFolderMini(val.parent),
    ['item_status']:
      val.itemStatus == void 0
        ? void 0
        : serializeTrashFolderRestoredItemStatusField(val.itemStatus),
  };
}
export function deserializeTrashFolderRestored(
  val: SerializedData
): TrashFolderRestored {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "TrashFolderRestored"',
    });
  }
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "TrashFolderRestored"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  if (!(val.etag == void 0) && !sdIsString(val.etag)) {
    throw new BoxSdkError({
      message: 'Expecting string for "etag" of type "TrashFolderRestored"',
    });
  }
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const type: undefined | TrashFolderRestoredTypeField =
    val.type == void 0
      ? void 0
      : deserializeTrashFolderRestoredTypeField(val.type);
  if (!(val.sequence_id == void 0) && !sdIsString(val.sequence_id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "sequence_id" of type "TrashFolderRestored"',
    });
  }
  const sequenceId: undefined | string =
    val.sequence_id == void 0 ? void 0 : val.sequence_id;
  if (!(val.name == void 0) && !sdIsString(val.name)) {
    throw new BoxSdkError({
      message: 'Expecting string for "name" of type "TrashFolderRestored"',
    });
  }
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "created_at" of type "TrashFolderRestored"',
    });
  }
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "modified_at" of type "TrashFolderRestored"',
    });
  }
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  if (!(val.description == void 0) && !sdIsString(val.description)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "description" of type "TrashFolderRestored"',
    });
  }
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  if (!(val.size == void 0) && !sdIsNumber(val.size)) {
    throw new BoxSdkError({
      message: 'Expecting number for "size" of type "TrashFolderRestored"',
    });
  }
  const size: undefined | number = val.size == void 0 ? void 0 : val.size;
  const pathCollection: undefined | TrashFolderRestoredPathCollectionField =
    val.path_collection == void 0
      ? void 0
      : deserializeTrashFolderRestoredPathCollectionField(val.path_collection);
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const modifiedBy: undefined | UserMini =
    val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
  if (!(val.trashed_at == void 0) && !sdIsString(val.trashed_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "trashed_at" of type "TrashFolderRestored"',
    });
  }
  const trashedAt: undefined | string =
    val.trashed_at == void 0 ? void 0 : val.trashed_at;
  if (!(val.purged_at == void 0) && !sdIsString(val.purged_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "purged_at" of type "TrashFolderRestored"',
    });
  }
  const purgedAt: undefined | string =
    val.purged_at == void 0 ? void 0 : val.purged_at;
  if (
    !(val.content_created_at == void 0) &&
    !sdIsString(val.content_created_at)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "content_created_at" of type "TrashFolderRestored"',
    });
  }
  const contentCreatedAt: undefined | DateTime =
    val.content_created_at == void 0
      ? void 0
      : deserializeDateTime(val.content_created_at);
  if (
    !(val.content_modified_at == void 0) &&
    !sdIsString(val.content_modified_at)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "content_modified_at" of type "TrashFolderRestored"',
    });
  }
  const contentModifiedAt: undefined | DateTime =
    val.content_modified_at == void 0
      ? void 0
      : deserializeDateTime(val.content_modified_at);
  const ownedBy: undefined | UserMini =
    val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
  if (!(val.shared_link == void 0) && !sdIsString(val.shared_link)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "shared_link" of type "TrashFolderRestored"',
    });
  }
  const sharedLink: undefined | string =
    val.shared_link == void 0 ? void 0 : val.shared_link;
  if (
    !(val.folder_upload_email == void 0) &&
    !sdIsString(val.folder_upload_email)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "folder_upload_email" of type "TrashFolderRestored"',
    });
  }
  const folderUploadEmail: undefined | string =
    val.folder_upload_email == void 0 ? void 0 : val.folder_upload_email;
  const parent: undefined | FolderMini =
    val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
  const itemStatus: undefined | TrashFolderRestoredItemStatusField =
    val.item_status == void 0
      ? void 0
      : deserializeTrashFolderRestoredItemStatusField(val.item_status);
  return {
    id: id,
    etag: etag,
    type: type,
    sequenceId: sequenceId,
    name: name,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    description: description,
    size: size,
    pathCollection: pathCollection,
    createdBy: createdBy,
    modifiedBy: modifiedBy,
    trashedAt: trashedAt,
    purgedAt: purgedAt,
    contentCreatedAt: contentCreatedAt,
    contentModifiedAt: contentModifiedAt,
    ownedBy: ownedBy,
    sharedLink: sharedLink,
    folderUploadEmail: folderUploadEmail,
    parent: parent,
    itemStatus: itemStatus,
  } satisfies TrashFolderRestored;
}
