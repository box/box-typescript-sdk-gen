import { serializeFileFullOrFolderFullOrWebLink } from './fileFullOrFolderFullOrWebLink.generated.js';
import { deserializeFileFullOrFolderFullOrWebLink } from './fileFullOrFolderFullOrWebLink.generated.js';
import { FileFullOrFolderFullOrWebLink } from './fileFullOrFolderFullOrWebLink.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface SearchResultWithSharedLink {
  readonly accessibleViaSharedLink?: string;
  readonly item?: FileFullOrFolderFullOrWebLink;
  readonly type?: string;
}
export function serializeSearchResultWithSharedLink(
  val: SearchResultWithSharedLink
): SerializedData {
  return {
    ['accessible_via_shared_link']:
      val.accessibleViaSharedLink == void 0
        ? void 0
        : val.accessibleViaSharedLink,
    ['item']:
      val.item == void 0
        ? void 0
        : serializeFileFullOrFolderFullOrWebLink(val.item),
    ['type']: val.type == void 0 ? void 0 : val.type,
  };
}
export function deserializeSearchResultWithSharedLink(
  val: any
): SearchResultWithSharedLink {
  const accessibleViaSharedLink: undefined | string =
    val.accessible_via_shared_link == void 0
      ? void 0
      : val.accessible_via_shared_link;
  const item: undefined | FileFullOrFolderFullOrWebLink =
    val.item == void 0
      ? void 0
      : deserializeFileFullOrFolderFullOrWebLink(val.item);
  const type: undefined | string = val.type == void 0 ? void 0 : val.type;
  return {
    accessibleViaSharedLink: accessibleViaSharedLink,
    item: item,
    type: type,
  } satisfies SearchResultWithSharedLink;
}
