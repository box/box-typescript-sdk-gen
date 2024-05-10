import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type CollectionTypeField = 'collection';
export type CollectionNameField = 'Favorites';
export type CollectionCollectionTypeField = 'favorites';
export interface Collection {
  readonly id?: string;
  readonly type?: CollectionTypeField;
  readonly name?: CollectionNameField;
  readonly collectionType?: CollectionCollectionTypeField;
}
export function serializeCollectionTypeField(
  val: CollectionTypeField
): SerializedData {
  return val;
}
export function deserializeCollectionTypeField(val: any): CollectionTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "CollectionTypeField"',
    });
  }
  if (val == 'collection') {
    return 'collection';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCollectionNameField(
  val: CollectionNameField
): SerializedData {
  return val;
}
export function deserializeCollectionNameField(val: any): CollectionNameField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "CollectionNameField"',
    });
  }
  if (val == 'Favorites') {
    return 'Favorites';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCollectionCollectionTypeField(
  val: CollectionCollectionTypeField
): SerializedData {
  return val;
}
export function deserializeCollectionCollectionTypeField(
  val: any
): CollectionCollectionTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "CollectionCollectionTypeField"',
    });
  }
  if (val == 'favorites') {
    return 'favorites';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCollection(val: Collection): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeCollectionTypeField(val.type),
    ['name']:
      val.name == void 0 ? void 0 : serializeCollectionNameField(val.name),
    ['collection_type']:
      val.collectionType == void 0
        ? void 0
        : serializeCollectionCollectionTypeField(val.collectionType),
  };
}
export function deserializeCollection(val: any): Collection {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | CollectionTypeField =
    val.type == void 0 ? void 0 : deserializeCollectionTypeField(val.type);
  const name: undefined | CollectionNameField =
    val.name == void 0 ? void 0 : deserializeCollectionNameField(val.name);
  const collectionType: undefined | CollectionCollectionTypeField =
    val.collection_type == void 0
      ? void 0
      : deserializeCollectionCollectionTypeField(val.collection_type);
  return {
    id: id,
    type: type,
    name: name,
    collectionType: collectionType,
  } satisfies Collection;
}
