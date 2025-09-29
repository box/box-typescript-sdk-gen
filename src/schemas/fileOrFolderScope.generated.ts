import { serializeFileMini } from './fileMini.generated';
import { deserializeFileMini } from './fileMini.generated';
import { serializeFolderMini } from './folderMini.generated';
import { deserializeFolderMini } from './folderMini.generated';
import { serializeFileMiniOrFolderMini } from './fileMiniOrFolderMini.generated';
import { deserializeFileMiniOrFolderMini } from './fileMiniOrFolderMini.generated';
import { FileMini } from './fileMini.generated';
import { FolderMini } from './folderMini.generated';
import { FileMiniOrFolderMini } from './fileMiniOrFolderMini.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type FileOrFolderScopeScopeField =
  | 'annotation_edit'
  | 'annotation_view_all'
  | 'annotation_view_self'
  | 'base_explorer'
  | 'base_picker'
  | 'base_preview'
  | 'base_upload'
  | 'item_delete'
  | 'item_download'
  | 'item_preview'
  | 'item_rename'
  | 'item_share'
  | 'item_upload'
  | 'item_read'
  | string;
export interface FileOrFolderScope {
  /**
   * The scopes for the resource access. */
  readonly scope?: FileOrFolderScopeScopeField;
  readonly object?: FileMiniOrFolderMini;
  readonly rawData?: SerializedData;
}
export function serializeFileOrFolderScopeScopeField(
  val: FileOrFolderScopeScopeField,
): SerializedData {
  return val;
}
export function deserializeFileOrFolderScopeScopeField(
  val: SerializedData,
): FileOrFolderScopeScopeField {
  if (val == 'annotation_edit') {
    return val;
  }
  if (val == 'annotation_view_all') {
    return val;
  }
  if (val == 'annotation_view_self') {
    return val;
  }
  if (val == 'base_explorer') {
    return val;
  }
  if (val == 'base_picker') {
    return val;
  }
  if (val == 'base_preview') {
    return val;
  }
  if (val == 'base_upload') {
    return val;
  }
  if (val == 'item_delete') {
    return val;
  }
  if (val == 'item_download') {
    return val;
  }
  if (val == 'item_preview') {
    return val;
  }
  if (val == 'item_rename') {
    return val;
  }
  if (val == 'item_share') {
    return val;
  }
  if (val == 'item_upload') {
    return val;
  }
  if (val == 'item_read') {
    return val;
  }
  if (sdIsString(val)) {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize FileOrFolderScopeScopeField",
  });
}
export function serializeFileOrFolderScope(
  val: FileOrFolderScope,
): SerializedData {
  return {
    ['scope']:
      val.scope == void 0
        ? val.scope
        : serializeFileOrFolderScopeScopeField(val.scope),
    ['object']:
      val.object == void 0
        ? val.object
        : serializeFileMiniOrFolderMini(val.object),
  };
}
export function deserializeFileOrFolderScope(
  val: SerializedData,
): FileOrFolderScope {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "FileOrFolderScope"',
    });
  }
  const scope: undefined | FileOrFolderScopeScopeField =
    val.scope == void 0
      ? void 0
      : deserializeFileOrFolderScopeScopeField(val.scope);
  const object: undefined | FileMiniOrFolderMini =
    val.object == void 0 ? void 0 : deserializeFileMiniOrFolderMini(val.object);
  return { scope: scope, object: object } satisfies FileOrFolderScope;
}
