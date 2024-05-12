import { serializeSearchResultWithSharedLink } from './searchResultWithSharedLink.generated.js';
import { deserializeSearchResultWithSharedLink } from './searchResultWithSharedLink.generated.js';
import { SearchResultWithSharedLink } from './searchResultWithSharedLink.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type SearchResultsWithSharedLinksTypeField =
  'search_results_with_shared_links';
export class SearchResultsWithSharedLinks {
  readonly totalCount?: number;
  readonly limit?: number;
  readonly offset?: number;
  readonly type: SearchResultsWithSharedLinksTypeField =
    'search_results_with_shared_links' as SearchResultsWithSharedLinksTypeField;
  readonly entries?: readonly SearchResultWithSharedLink[];
  constructor(
    fields: Omit<SearchResultsWithSharedLinks, 'type'> &
      Partial<Pick<SearchResultsWithSharedLinks, 'type'>>
  ) {
    if (fields.totalCount) {
      this.totalCount = fields.totalCount;
    }
    if (fields.limit) {
      this.limit = fields.limit;
    }
    if (fields.offset) {
      this.offset = fields.offset;
    }
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.entries) {
      this.entries = fields.entries;
    }
  }
}
export interface SearchResultsWithSharedLinksInput {
  readonly totalCount?: number;
  readonly limit?: number;
  readonly offset?: number;
  readonly type?: SearchResultsWithSharedLinksTypeField;
  readonly entries?: readonly SearchResultWithSharedLink[];
}
export function serializeSearchResultsWithSharedLinksTypeField(
  val: SearchResultsWithSharedLinksTypeField
): SerializedData {
  return val;
}
export function deserializeSearchResultsWithSharedLinksTypeField(
  val: any
): SearchResultsWithSharedLinksTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "SearchResultsWithSharedLinksTypeField"',
    });
  }
  if (val == 'search_results_with_shared_links') {
    return 'search_results_with_shared_links';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeSearchResultsWithSharedLinks(
  val: SearchResultsWithSharedLinks
): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['type']: serializeSearchResultsWithSharedLinksTypeField(val.type),
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (
            item: SearchResultWithSharedLink
          ): SerializedData {
            return serializeSearchResultWithSharedLink(item);
          }) as readonly any[]),
  };
}
export function deserializeSearchResultsWithSharedLinks(
  val: any
): SearchResultsWithSharedLinks {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  const type: SearchResultsWithSharedLinksTypeField =
    deserializeSearchResultsWithSharedLinksTypeField(val.type);
  const entries: undefined | readonly SearchResultWithSharedLink[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (
          itm: SerializedData
        ): SearchResultWithSharedLink {
          return deserializeSearchResultWithSharedLink(itm);
        }) as readonly any[])
      : [];
  return {
    totalCount: totalCount,
    limit: limit,
    offset: offset,
    type: type,
    entries: entries,
  } satisfies SearchResultsWithSharedLinks;
}
export function serializeSearchResultsWithSharedLinksInput(
  val: SearchResultsWithSharedLinksInput
): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeSearchResultsWithSharedLinksTypeField(val.type),
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (
            item: SearchResultWithSharedLink
          ): SerializedData {
            return serializeSearchResultWithSharedLink(item);
          }) as readonly any[]),
  };
}
export function deserializeSearchResultsWithSharedLinksInput(
  val: any
): SearchResultsWithSharedLinksInput {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  const type: undefined | SearchResultsWithSharedLinksTypeField =
    val.type == void 0
      ? void 0
      : deserializeSearchResultsWithSharedLinksTypeField(val.type);
  const entries: undefined | readonly SearchResultWithSharedLink[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (
          itm: SerializedData
        ): SearchResultWithSharedLink {
          return deserializeSearchResultWithSharedLink(itm);
        }) as readonly any[])
      : [];
  return {
    totalCount: totalCount,
    limit: limit,
    offset: offset,
    type: type,
    entries: entries,
  } satisfies SearchResultsWithSharedLinksInput;
}
