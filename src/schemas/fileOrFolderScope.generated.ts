import { serializeFileMiniOrFolderMini } from './fileMiniOrFolderMini.generated.js';
import { deserializeFileMiniOrFolderMini } from './fileMiniOrFolderMini.generated.js';
import { FileMiniOrFolderMini } from './fileMiniOrFolderMini.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
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
  | 'item_share';
export interface FileOrFolderScope {
  readonly scope?: FileOrFolderScopeScopeField;
  readonly object?: FileMiniOrFolderMini;
}
export function serializeFileOrFolderScopeScopeField(
  val: FileOrFolderScopeScopeField
): SerializedData {
  return val;
}
export function deserializeFileOrFolderScopeScopeField(
  val: any
): FileOrFolderScopeScopeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "FileOrFolderScopeScopeField"',
    });
  }
  if (val == 'annotation_edit') {
    return 'annotation_edit';
  }
  if (val == 'annotation_view_all') {
    return 'annotation_view_all';
  }
  if (val == 'annotation_view_self') {
    return 'annotation_view_self';
  }
  if (val == 'base_explorer') {
    return 'base_explorer';
  }
  if (val == 'base_picker') {
    return 'base_picker';
  }
  if (val == 'base_preview') {
    return 'base_preview';
  }
  if (val == 'base_upload') {
    return 'base_upload';
  }
  if (val == 'item_delete') {
    return 'item_delete';
  }
  if (val == 'item_download') {
    return 'item_download';
  }
  if (val == 'item_preview') {
    return 'item_preview';
  }
  if (val == 'item_rename') {
    return 'item_rename';
  }
  if (val == 'item_share') {
    return 'item_share';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeFileOrFolderScope(
  val: FileOrFolderScope
): SerializedData {
  return {
    ['scope']:
      val.scope == void 0
        ? void 0
        : serializeFileOrFolderScopeScopeField(val.scope),
    ['object']:
      val.object == void 0 ? void 0 : serializeFileMiniOrFolderMini(val.object),
  };
}
export function deserializeFileOrFolderScope(val: any): FileOrFolderScope {
  const scope: undefined | FileOrFolderScopeScopeField =
    val.scope == void 0
      ? void 0
      : deserializeFileOrFolderScopeScopeField(val.scope);
  const object: undefined | FileMiniOrFolderMini =
    val.object == void 0 ? void 0 : deserializeFileMiniOrFolderMini(val.object);
  return { scope: scope, object: object } satisfies FileOrFolderScope;
}
