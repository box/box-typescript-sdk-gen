import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeFolderMini } from './folderMini.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { UserMini } from './userMini.generated.js';
import { FolderMini } from './folderMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type TrashFolderTypeField = 'folder';
export type TrashFolderPathCollectionEntriesTypeField = 'folder';
export interface TrashFolderPathCollectionEntriesField {
  readonly type?: TrashFolderPathCollectionEntriesTypeField;
  readonly id?: string;
  readonly sequenceId?: string;
  readonly etag?: string;
  readonly name?: string;
}
export interface TrashFolderPathCollectionField {
  readonly totalCount: number;
  readonly entries: readonly TrashFolderPathCollectionEntriesField[];
}
export type TrashFolderItemStatusField = 'active' | 'trashed' | 'deleted';
export class TrashFolder {
  readonly id!: string;
  readonly etag?: string;
  readonly type: TrashFolderTypeField = 'folder' as TrashFolderTypeField;
  readonly sequenceId?: string;
  readonly name!: string;
  readonly createdAt?: DateTime;
  readonly modifiedAt?: DateTime;
  readonly description!: string;
  readonly size!: number;
  readonly pathCollection!: TrashFolderPathCollectionField;
  readonly createdBy!: UserMini;
  readonly modifiedBy!: UserMini;
  readonly trashedAt?: DateTime;
  readonly purgedAt?: DateTime;
  readonly contentCreatedAt?: DateTime;
  readonly contentModifiedAt?: DateTime;
  readonly ownedBy!: UserMini;
  readonly sharedLink?: string;
  readonly folderUploadEmail?: string;
  readonly parent?: FolderMini;
  readonly itemStatus!: TrashFolderItemStatusField;
  constructor(
    fields: Omit<TrashFolder, 'type'> & Partial<Pick<TrashFolder, 'type'>>
  ) {
    if (fields.id) {
      this.id = fields.id;
    }
    if (fields.etag) {
      this.etag = fields.etag;
    }
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.sequenceId) {
      this.sequenceId = fields.sequenceId;
    }
    if (fields.name) {
      this.name = fields.name;
    }
    if (fields.createdAt) {
      this.createdAt = fields.createdAt;
    }
    if (fields.modifiedAt) {
      this.modifiedAt = fields.modifiedAt;
    }
    if (fields.description) {
      this.description = fields.description;
    }
    if (fields.size) {
      this.size = fields.size;
    }
    if (fields.pathCollection) {
      this.pathCollection = fields.pathCollection;
    }
    if (fields.createdBy) {
      this.createdBy = fields.createdBy;
    }
    if (fields.modifiedBy) {
      this.modifiedBy = fields.modifiedBy;
    }
    if (fields.trashedAt) {
      this.trashedAt = fields.trashedAt;
    }
    if (fields.purgedAt) {
      this.purgedAt = fields.purgedAt;
    }
    if (fields.contentCreatedAt) {
      this.contentCreatedAt = fields.contentCreatedAt;
    }
    if (fields.contentModifiedAt) {
      this.contentModifiedAt = fields.contentModifiedAt;
    }
    if (fields.ownedBy) {
      this.ownedBy = fields.ownedBy;
    }
    if (fields.sharedLink) {
      this.sharedLink = fields.sharedLink;
    }
    if (fields.folderUploadEmail) {
      this.folderUploadEmail = fields.folderUploadEmail;
    }
    if (fields.parent) {
      this.parent = fields.parent;
    }
    if (fields.itemStatus) {
      this.itemStatus = fields.itemStatus;
    }
  }
}
export interface TrashFolderInput {
  readonly id: string;
  readonly etag?: string;
  readonly type?: TrashFolderTypeField;
  readonly sequenceId?: string;
  readonly name: string;
  readonly createdAt?: DateTime;
  readonly modifiedAt?: DateTime;
  readonly description: string;
  readonly size: number;
  readonly pathCollection: TrashFolderPathCollectionField;
  readonly createdBy: UserMini;
  readonly modifiedBy: UserMini;
  readonly trashedAt?: DateTime;
  readonly purgedAt?: DateTime;
  readonly contentCreatedAt?: DateTime;
  readonly contentModifiedAt?: DateTime;
  readonly ownedBy: UserMini;
  readonly sharedLink?: string;
  readonly folderUploadEmail?: string;
  readonly parent?: FolderMini;
  readonly itemStatus: TrashFolderItemStatusField;
}
export function serializeTrashFolderTypeField(
  val: TrashFolderTypeField
): SerializedData {
  return val;
}
export function deserializeTrashFolderTypeField(
  val: any
): TrashFolderTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TrashFolderTypeField"',
    });
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeTrashFolderPathCollectionEntriesTypeField(
  val: TrashFolderPathCollectionEntriesTypeField
): SerializedData {
  return val;
}
export function deserializeTrashFolderPathCollectionEntriesTypeField(
  val: any
): TrashFolderPathCollectionEntriesTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "TrashFolderPathCollectionEntriesTypeField"',
    });
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeTrashFolderPathCollectionEntriesField(
  val: TrashFolderPathCollectionEntriesField
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeTrashFolderPathCollectionEntriesTypeField(val.type),
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['sequence_id']: val.sequenceId == void 0 ? void 0 : val.sequenceId,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['name']: val.name == void 0 ? void 0 : val.name,
  };
}
export function deserializeTrashFolderPathCollectionEntriesField(
  val: any
): TrashFolderPathCollectionEntriesField {
  const type: undefined | TrashFolderPathCollectionEntriesTypeField =
    val.type == void 0
      ? void 0
      : deserializeTrashFolderPathCollectionEntriesTypeField(val.type);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const sequenceId: undefined | string =
    val.sequence_id == void 0 ? void 0 : val.sequence_id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  return {
    type: type,
    id: id,
    sequenceId: sequenceId,
    etag: etag,
    name: name,
  } satisfies TrashFolderPathCollectionEntriesField;
}
export function serializeTrashFolderPathCollectionField(
  val: TrashFolderPathCollectionField
): SerializedData {
  return {
    ['total_count']: val.totalCount,
    ['entries']: val.entries.map(function (
      item: TrashFolderPathCollectionEntriesField
    ): SerializedData {
      return serializeTrashFolderPathCollectionEntriesField(item);
    }) as readonly any[],
  };
}
export function deserializeTrashFolderPathCollectionField(
  val: any
): TrashFolderPathCollectionField {
  const totalCount: number = val.total_count;
  const entries: readonly TrashFolderPathCollectionEntriesField[] = sdIsList(
    val.entries
  )
    ? (val.entries.map(function (
        itm: SerializedData
      ): TrashFolderPathCollectionEntriesField {
        return deserializeTrashFolderPathCollectionEntriesField(itm);
      }) as readonly any[])
    : [];
  return {
    totalCount: totalCount,
    entries: entries,
  } satisfies TrashFolderPathCollectionField;
}
export function serializeTrashFolderItemStatusField(
  val: TrashFolderItemStatusField
): SerializedData {
  return val;
}
export function deserializeTrashFolderItemStatusField(
  val: any
): TrashFolderItemStatusField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TrashFolderItemStatusField"',
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
export function serializeTrashFolder(val: TrashFolder): SerializedData {
  return {
    ['id']: val.id,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['type']: serializeTrashFolderTypeField(val.type),
    ['sequence_id']: val.sequenceId == void 0 ? void 0 : val.sequenceId,
    ['name']: val.name,
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['modified_at']:
      val.modifiedAt == void 0 ? void 0 : serializeDateTime(val.modifiedAt),
    ['description']: val.description,
    ['size']: val.size,
    ['path_collection']: serializeTrashFolderPathCollectionField(
      val.pathCollection
    ),
    ['created_by']: serializeUserMini(val.createdBy),
    ['modified_by']: serializeUserMini(val.modifiedBy),
    ['trashed_at']:
      val.trashedAt == void 0 ? void 0 : serializeDateTime(val.trashedAt),
    ['purged_at']:
      val.purgedAt == void 0 ? void 0 : serializeDateTime(val.purgedAt),
    ['content_created_at']:
      val.contentCreatedAt == void 0
        ? void 0
        : serializeDateTime(val.contentCreatedAt),
    ['content_modified_at']:
      val.contentModifiedAt == void 0
        ? void 0
        : serializeDateTime(val.contentModifiedAt),
    ['owned_by']: serializeUserMini(val.ownedBy),
    ['shared_link']: val.sharedLink == void 0 ? void 0 : val.sharedLink,
    ['folder_upload_email']:
      val.folderUploadEmail == void 0 ? void 0 : val.folderUploadEmail,
    ['parent']: val.parent == void 0 ? void 0 : serializeFolderMini(val.parent),
    ['item_status']: serializeTrashFolderItemStatusField(val.itemStatus),
  };
}
export function deserializeTrashFolder(val: any): TrashFolder {
  const id: string = val.id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const type: TrashFolderTypeField = deserializeTrashFolderTypeField(val.type);
  const sequenceId: undefined | string =
    val.sequence_id == void 0 ? void 0 : val.sequence_id;
  const name: string = val.name;
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  const description: string = val.description;
  const size: number = val.size;
  const pathCollection: TrashFolderPathCollectionField =
    deserializeTrashFolderPathCollectionField(val.path_collection);
  const createdBy: UserMini = deserializeUserMini(val.created_by);
  const modifiedBy: UserMini = deserializeUserMini(val.modified_by);
  const trashedAt: undefined | DateTime =
    val.trashed_at == void 0 ? void 0 : deserializeDateTime(val.trashed_at);
  const purgedAt: undefined | DateTime =
    val.purged_at == void 0 ? void 0 : deserializeDateTime(val.purged_at);
  const contentCreatedAt: undefined | DateTime =
    val.content_created_at == void 0
      ? void 0
      : deserializeDateTime(val.content_created_at);
  const contentModifiedAt: undefined | DateTime =
    val.content_modified_at == void 0
      ? void 0
      : deserializeDateTime(val.content_modified_at);
  const ownedBy: UserMini = deserializeUserMini(val.owned_by);
  const sharedLink: undefined | string =
    val.shared_link == void 0 ? void 0 : val.shared_link;
  const folderUploadEmail: undefined | string =
    val.folder_upload_email == void 0 ? void 0 : val.folder_upload_email;
  const parent: undefined | FolderMini =
    val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
  const itemStatus: TrashFolderItemStatusField =
    deserializeTrashFolderItemStatusField(val.item_status);
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
  } satisfies TrashFolder;
}
export function serializeTrashFolderInput(
  val: TrashFolderInput
): SerializedData {
  return {
    ['id']: val.id,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['type']:
      val.type == void 0 ? void 0 : serializeTrashFolderTypeField(val.type),
    ['sequence_id']: val.sequenceId == void 0 ? void 0 : val.sequenceId,
    ['name']: val.name,
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['modified_at']:
      val.modifiedAt == void 0 ? void 0 : serializeDateTime(val.modifiedAt),
    ['description']: val.description,
    ['size']: val.size,
    ['path_collection']: serializeTrashFolderPathCollectionField(
      val.pathCollection
    ),
    ['created_by']: serializeUserMini(val.createdBy),
    ['modified_by']: serializeUserMini(val.modifiedBy),
    ['trashed_at']:
      val.trashedAt == void 0 ? void 0 : serializeDateTime(val.trashedAt),
    ['purged_at']:
      val.purgedAt == void 0 ? void 0 : serializeDateTime(val.purgedAt),
    ['content_created_at']:
      val.contentCreatedAt == void 0
        ? void 0
        : serializeDateTime(val.contentCreatedAt),
    ['content_modified_at']:
      val.contentModifiedAt == void 0
        ? void 0
        : serializeDateTime(val.contentModifiedAt),
    ['owned_by']: serializeUserMini(val.ownedBy),
    ['shared_link']: val.sharedLink == void 0 ? void 0 : val.sharedLink,
    ['folder_upload_email']:
      val.folderUploadEmail == void 0 ? void 0 : val.folderUploadEmail,
    ['parent']: val.parent == void 0 ? void 0 : serializeFolderMini(val.parent),
    ['item_status']: serializeTrashFolderItemStatusField(val.itemStatus),
  };
}
export function deserializeTrashFolderInput(val: any): TrashFolderInput {
  const id: string = val.id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const type: undefined | TrashFolderTypeField =
    val.type == void 0 ? void 0 : deserializeTrashFolderTypeField(val.type);
  const sequenceId: undefined | string =
    val.sequence_id == void 0 ? void 0 : val.sequence_id;
  const name: string = val.name;
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  const description: string = val.description;
  const size: number = val.size;
  const pathCollection: TrashFolderPathCollectionField =
    deserializeTrashFolderPathCollectionField(val.path_collection);
  const createdBy: UserMini = deserializeUserMini(val.created_by);
  const modifiedBy: UserMini = deserializeUserMini(val.modified_by);
  const trashedAt: undefined | DateTime =
    val.trashed_at == void 0 ? void 0 : deserializeDateTime(val.trashed_at);
  const purgedAt: undefined | DateTime =
    val.purged_at == void 0 ? void 0 : deserializeDateTime(val.purged_at);
  const contentCreatedAt: undefined | DateTime =
    val.content_created_at == void 0
      ? void 0
      : deserializeDateTime(val.content_created_at);
  const contentModifiedAt: undefined | DateTime =
    val.content_modified_at == void 0
      ? void 0
      : deserializeDateTime(val.content_modified_at);
  const ownedBy: UserMini = deserializeUserMini(val.owned_by);
  const sharedLink: undefined | string =
    val.shared_link == void 0 ? void 0 : val.shared_link;
  const folderUploadEmail: undefined | string =
    val.folder_upload_email == void 0 ? void 0 : val.folder_upload_email;
  const parent: undefined | FolderMini =
    val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
  const itemStatus: TrashFolderItemStatusField =
    deserializeTrashFolderItemStatusField(val.item_status);
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
  } satisfies TrashFolderInput;
}
