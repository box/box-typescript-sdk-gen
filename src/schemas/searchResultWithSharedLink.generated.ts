import { serializeFileFull } from './fileFull.generated';
import { deserializeFileFull } from './fileFull.generated';
import { serializeFolderFull } from './folderFull.generated';
import { deserializeFolderFull } from './folderFull.generated';
import { serializeWebLink } from './webLink.generated';
import { deserializeWebLink } from './webLink.generated';
import { serializeFileFullOrFolderFullOrWebLink } from './fileFullOrFolderFullOrWebLink.generated';
import { deserializeFileFullOrFolderFullOrWebLink } from './fileFullOrFolderFullOrWebLink.generated';
import { FileFull } from './fileFull.generated';
import { FolderFull } from './folderFull.generated';
import { WebLink } from './webLink.generated';
import { FileFullOrFolderFullOrWebLink } from './fileFullOrFolderFullOrWebLink.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export interface SearchResultWithSharedLink {
  /**
   * The optional shared link through which the user has access to this
   * item. This value is only returned for items for which the user has
   * recently accessed the file through a shared link. For all other
   * items this value will return `null`. */
  readonly accessibleViaSharedLink?: string;
  readonly item?: FileFullOrFolderFullOrWebLink;
  /**
   * The result type. The value is always `search_result`. */
  readonly type?: string;
  readonly rawData?: SerializedData;
}
export function serializeSearchResultWithSharedLink(
  val: SearchResultWithSharedLink,
): SerializedData {
  return {
    ['accessible_via_shared_link']: val.accessibleViaSharedLink,
    ['item']:
      val.item == void 0
        ? val.item
        : serializeFileFullOrFolderFullOrWebLink(val.item),
    ['type']: val.type,
  };
}
export function deserializeSearchResultWithSharedLink(
  val: SerializedData,
): SearchResultWithSharedLink {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "SearchResultWithSharedLink"',
    });
  }
  if (
    !(val.accessible_via_shared_link == void 0) &&
    !sdIsString(val.accessible_via_shared_link)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "accessible_via_shared_link" of type "SearchResultWithSharedLink"',
    });
  }
  const accessibleViaSharedLink: undefined | string =
    val.accessible_via_shared_link == void 0
      ? void 0
      : val.accessible_via_shared_link;
  const item: undefined | FileFullOrFolderFullOrWebLink =
    val.item == void 0
      ? void 0
      : deserializeFileFullOrFolderFullOrWebLink(val.item);
  if (!(val.type == void 0) && !sdIsString(val.type)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "type" of type "SearchResultWithSharedLink"',
    });
  }
  const type: undefined | string = val.type == void 0 ? void 0 : val.type;
  return {
    accessibleViaSharedLink: accessibleViaSharedLink,
    item: item,
    type: type,
  } satisfies SearchResultWithSharedLink;
}
