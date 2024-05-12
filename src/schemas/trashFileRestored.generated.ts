import { serializeFileVersionMini } from './fileVersionMini.generated.js';
import { deserializeFileVersionMini } from './fileVersionMini.generated.js';
import { serializeFolderMini } from './folderMini.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { FileVersionMini } from './fileVersionMini.generated.js';
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
export type TrashFileRestoredTypeField = 'file';
export interface TrashFileRestoredPathCollectionField {
  readonly totalCount: number;
  readonly entries: readonly FolderMini[];
}
export type TrashFileRestoredItemStatusField = 'active' | 'trashed' | 'deleted';
export class TrashFileRestored {
  readonly id!: string;
  readonly etag?: string;
  readonly type: TrashFileRestoredTypeField =
    'file' as TrashFileRestoredTypeField;
  readonly sequenceId!: string;
  readonly name?: string;
  readonly sha1!: string;
  readonly fileVersion?: FileVersionMini;
  readonly description!: string;
  readonly size!: number;
  readonly pathCollection!: TrashFileRestoredPathCollectionField;
  readonly createdAt!: DateTime;
  readonly modifiedAt!: DateTime;
  readonly trashedAt?: string;
  readonly purgedAt?: string;
  readonly contentCreatedAt?: DateTime;
  readonly contentModifiedAt?: DateTime;
  readonly createdBy?: UserMini;
  readonly modifiedBy!: UserMini;
  readonly ownedBy!: UserMini;
  readonly sharedLink?: string;
  readonly parent?: FolderMini;
  readonly itemStatus!: TrashFileRestoredItemStatusField;
  constructor(
    fields: Omit<TrashFileRestored, 'type'> &
      Partial<Pick<TrashFileRestored, 'type'>>
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
    if (fields.sha1) {
      this.sha1 = fields.sha1;
    }
    if (fields.fileVersion) {
      this.fileVersion = fields.fileVersion;
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
    if (fields.createdAt) {
      this.createdAt = fields.createdAt;
    }
    if (fields.modifiedAt) {
      this.modifiedAt = fields.modifiedAt;
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
    if (fields.createdBy) {
      this.createdBy = fields.createdBy;
    }
    if (fields.modifiedBy) {
      this.modifiedBy = fields.modifiedBy;
    }
    if (fields.ownedBy) {
      this.ownedBy = fields.ownedBy;
    }
    if (fields.sharedLink) {
      this.sharedLink = fields.sharedLink;
    }
    if (fields.parent) {
      this.parent = fields.parent;
    }
    if (fields.itemStatus) {
      this.itemStatus = fields.itemStatus;
    }
  }
}
export interface TrashFileRestoredInput {
  readonly id: string;
  readonly etag?: string;
  readonly type?: TrashFileRestoredTypeField;
  readonly sequenceId: string;
  readonly name?: string;
  readonly sha1: string;
  readonly fileVersion?: FileVersionMini;
  readonly description: string;
  readonly size: number;
  readonly pathCollection: TrashFileRestoredPathCollectionField;
  readonly createdAt: DateTime;
  readonly modifiedAt: DateTime;
  readonly trashedAt?: string;
  readonly purgedAt?: string;
  readonly contentCreatedAt?: DateTime;
  readonly contentModifiedAt?: DateTime;
  readonly createdBy?: UserMini;
  readonly modifiedBy: UserMini;
  readonly ownedBy: UserMini;
  readonly sharedLink?: string;
  readonly parent?: FolderMini;
  readonly itemStatus: TrashFileRestoredItemStatusField;
}
export function serializeTrashFileRestoredTypeField(
  val: TrashFileRestoredTypeField
): SerializedData {
  return val;
}
export function deserializeTrashFileRestoredTypeField(
  val: any
): TrashFileRestoredTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TrashFileRestoredTypeField"',
    });
  }
  if (val == 'file') {
    return 'file';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeTrashFileRestoredPathCollectionField(
  val: TrashFileRestoredPathCollectionField
): SerializedData {
  return {
    ['total_count']: val.totalCount,
    ['entries']: val.entries.map(function (item: FolderMini): SerializedData {
      return serializeFolderMini(item);
    }) as readonly any[],
  };
}
export function deserializeTrashFileRestoredPathCollectionField(
  val: any
): TrashFileRestoredPathCollectionField {
  const totalCount: number = val.total_count;
  const entries: readonly FolderMini[] = sdIsList(val.entries)
    ? (val.entries.map(function (itm: SerializedData): FolderMini {
        return deserializeFolderMini(itm);
      }) as readonly any[])
    : [];
  return {
    totalCount: totalCount,
    entries: entries,
  } satisfies TrashFileRestoredPathCollectionField;
}
export function serializeTrashFileRestoredItemStatusField(
  val: TrashFileRestoredItemStatusField
): SerializedData {
  return val;
}
export function deserializeTrashFileRestoredItemStatusField(
  val: any
): TrashFileRestoredItemStatusField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TrashFileRestoredItemStatusField"',
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
export function serializeTrashFileRestored(
  val: TrashFileRestored
): SerializedData {
  return {
    ['id']: val.id,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['type']: serializeTrashFileRestoredTypeField(val.type),
    ['sequence_id']: val.sequenceId,
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['sha1']: val.sha1,
    ['file_version']:
      val.fileVersion == void 0
        ? void 0
        : serializeFileVersionMini(val.fileVersion),
    ['description']: val.description,
    ['size']: val.size,
    ['path_collection']: serializeTrashFileRestoredPathCollectionField(
      val.pathCollection
    ),
    ['created_at']: serializeDateTime(val.createdAt),
    ['modified_at']: serializeDateTime(val.modifiedAt),
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
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
    ['modified_by']: serializeUserMini(val.modifiedBy),
    ['owned_by']: serializeUserMini(val.ownedBy),
    ['shared_link']: val.sharedLink == void 0 ? void 0 : val.sharedLink,
    ['parent']: val.parent == void 0 ? void 0 : serializeFolderMini(val.parent),
    ['item_status']: serializeTrashFileRestoredItemStatusField(val.itemStatus),
  };
}
export function deserializeTrashFileRestored(val: any): TrashFileRestored {
  const id: string = val.id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const type: TrashFileRestoredTypeField =
    deserializeTrashFileRestoredTypeField(val.type);
  const sequenceId: string = val.sequence_id;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const sha1: string = val.sha1;
  const fileVersion: undefined | FileVersionMini =
    val.file_version == void 0
      ? void 0
      : deserializeFileVersionMini(val.file_version);
  const description: string = val.description;
  const size: number = val.size;
  const pathCollection: TrashFileRestoredPathCollectionField =
    deserializeTrashFileRestoredPathCollectionField(val.path_collection);
  const createdAt: DateTime = deserializeDateTime(val.created_at);
  const modifiedAt: DateTime = deserializeDateTime(val.modified_at);
  const trashedAt: undefined | string =
    val.trashed_at == void 0 ? void 0 : val.trashed_at;
  const purgedAt: undefined | string =
    val.purged_at == void 0 ? void 0 : val.purged_at;
  const contentCreatedAt: undefined | DateTime =
    val.content_created_at == void 0
      ? void 0
      : deserializeDateTime(val.content_created_at);
  const contentModifiedAt: undefined | DateTime =
    val.content_modified_at == void 0
      ? void 0
      : deserializeDateTime(val.content_modified_at);
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const modifiedBy: UserMini = deserializeUserMini(val.modified_by);
  const ownedBy: UserMini = deserializeUserMini(val.owned_by);
  const sharedLink: undefined | string =
    val.shared_link == void 0 ? void 0 : val.shared_link;
  const parent: undefined | FolderMini =
    val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
  const itemStatus: TrashFileRestoredItemStatusField =
    deserializeTrashFileRestoredItemStatusField(val.item_status);
  return {
    id: id,
    etag: etag,
    type: type,
    sequenceId: sequenceId,
    name: name,
    sha1: sha1,
    fileVersion: fileVersion,
    description: description,
    size: size,
    pathCollection: pathCollection,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    trashedAt: trashedAt,
    purgedAt: purgedAt,
    contentCreatedAt: contentCreatedAt,
    contentModifiedAt: contentModifiedAt,
    createdBy: createdBy,
    modifiedBy: modifiedBy,
    ownedBy: ownedBy,
    sharedLink: sharedLink,
    parent: parent,
    itemStatus: itemStatus,
  } satisfies TrashFileRestored;
}
export function serializeTrashFileRestoredInput(
  val: TrashFileRestoredInput
): SerializedData {
  return {
    ['id']: val.id,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeTrashFileRestoredTypeField(val.type),
    ['sequence_id']: val.sequenceId,
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['sha1']: val.sha1,
    ['file_version']:
      val.fileVersion == void 0
        ? void 0
        : serializeFileVersionMini(val.fileVersion),
    ['description']: val.description,
    ['size']: val.size,
    ['path_collection']: serializeTrashFileRestoredPathCollectionField(
      val.pathCollection
    ),
    ['created_at']: serializeDateTime(val.createdAt),
    ['modified_at']: serializeDateTime(val.modifiedAt),
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
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
    ['modified_by']: serializeUserMini(val.modifiedBy),
    ['owned_by']: serializeUserMini(val.ownedBy),
    ['shared_link']: val.sharedLink == void 0 ? void 0 : val.sharedLink,
    ['parent']: val.parent == void 0 ? void 0 : serializeFolderMini(val.parent),
    ['item_status']: serializeTrashFileRestoredItemStatusField(val.itemStatus),
  };
}
export function deserializeTrashFileRestoredInput(
  val: any
): TrashFileRestoredInput {
  const id: string = val.id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const type: undefined | TrashFileRestoredTypeField =
    val.type == void 0
      ? void 0
      : deserializeTrashFileRestoredTypeField(val.type);
  const sequenceId: string = val.sequence_id;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const sha1: string = val.sha1;
  const fileVersion: undefined | FileVersionMini =
    val.file_version == void 0
      ? void 0
      : deserializeFileVersionMini(val.file_version);
  const description: string = val.description;
  const size: number = val.size;
  const pathCollection: TrashFileRestoredPathCollectionField =
    deserializeTrashFileRestoredPathCollectionField(val.path_collection);
  const createdAt: DateTime = deserializeDateTime(val.created_at);
  const modifiedAt: DateTime = deserializeDateTime(val.modified_at);
  const trashedAt: undefined | string =
    val.trashed_at == void 0 ? void 0 : val.trashed_at;
  const purgedAt: undefined | string =
    val.purged_at == void 0 ? void 0 : val.purged_at;
  const contentCreatedAt: undefined | DateTime =
    val.content_created_at == void 0
      ? void 0
      : deserializeDateTime(val.content_created_at);
  const contentModifiedAt: undefined | DateTime =
    val.content_modified_at == void 0
      ? void 0
      : deserializeDateTime(val.content_modified_at);
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const modifiedBy: UserMini = deserializeUserMini(val.modified_by);
  const ownedBy: UserMini = deserializeUserMini(val.owned_by);
  const sharedLink: undefined | string =
    val.shared_link == void 0 ? void 0 : val.shared_link;
  const parent: undefined | FolderMini =
    val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
  const itemStatus: TrashFileRestoredItemStatusField =
    deserializeTrashFileRestoredItemStatusField(val.item_status);
  return {
    id: id,
    etag: etag,
    type: type,
    sequenceId: sequenceId,
    name: name,
    sha1: sha1,
    fileVersion: fileVersion,
    description: description,
    size: size,
    pathCollection: pathCollection,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    trashedAt: trashedAt,
    purgedAt: purgedAt,
    contentCreatedAt: contentCreatedAt,
    contentModifiedAt: contentModifiedAt,
    createdBy: createdBy,
    modifiedBy: modifiedBy,
    ownedBy: ownedBy,
    sharedLink: sharedLink,
    parent: parent,
    itemStatus: itemStatus,
  } satisfies TrashFileRestoredInput;
}
