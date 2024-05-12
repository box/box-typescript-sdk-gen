import { serializeFileFullOrFolderFullOrWebLink } from './fileFullOrFolderFullOrWebLink.generated.js';
import { deserializeFileFullOrFolderFullOrWebLink } from './fileFullOrFolderFullOrWebLink.generated.js';
import { FileFullOrFolderFullOrWebLink } from './fileFullOrFolderFullOrWebLink.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type SearchResultsTypeField = 'search_results_items';
export class SearchResults {
  readonly totalCount?: number;
  readonly limit?: number;
  readonly offset?: number;
  readonly type: SearchResultsTypeField =
    'search_results_items' as SearchResultsTypeField;
  readonly entries?: readonly FileFullOrFolderFullOrWebLink[];
  constructor(
    fields: Omit<SearchResults, 'type'> & Partial<Pick<SearchResults, 'type'>>
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
export interface SearchResultsInput {
  readonly totalCount?: number;
  readonly limit?: number;
  readonly offset?: number;
  readonly type?: SearchResultsTypeField;
  readonly entries?: readonly FileFullOrFolderFullOrWebLink[];
}
export function serializeSearchResultsTypeField(
  val: SearchResultsTypeField
): SerializedData {
  return val;
}
export function deserializeSearchResultsTypeField(
  val: SerializedData
): SearchResultsTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "SearchResultsTypeField"',
    });
  }
  if (val == 'search_results_items') {
    return 'search_results_items';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeSearchResults(val: SearchResults): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['type']: serializeSearchResultsTypeField(val.type),
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (
            item: FileFullOrFolderFullOrWebLink
          ): SerializedData {
            return serializeFileFullOrFolderFullOrWebLink(item);
          }) as readonly any[]),
  };
}
export function deserializeSearchResults(val: SerializedData): SearchResults {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "SearchResults"' });
  }
  if (!(val.total_count == void 0) && !sdIsNumber(val.total_count)) {
    throw new BoxSdkError({
      message: 'Expecting number for "total_count" of type "SearchResults"',
    });
  }
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
    throw new BoxSdkError({
      message: 'Expecting number for "limit" of type "SearchResults"',
    });
  }
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  if (!(val.offset == void 0) && !sdIsNumber(val.offset)) {
    throw new BoxSdkError({
      message: 'Expecting number for "offset" of type "SearchResults"',
    });
  }
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  if (val.type == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "type" of type "SearchResults" to be defined',
    });
  }
  const type: SearchResultsTypeField = deserializeSearchResultsTypeField(
    val.type
  );
  if (!(val.entries == void 0) && !sdIsList(val.entries)) {
    throw new BoxSdkError({
      message: 'Expecting array for "entries" of type "SearchResults"',
    });
  }
  const entries: undefined | readonly FileFullOrFolderFullOrWebLink[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (
          itm: SerializedData
        ): FileFullOrFolderFullOrWebLink {
          return deserializeFileFullOrFolderFullOrWebLink(itm);
        }) as readonly any[])
      : [];
  return {
    totalCount: totalCount,
    limit: limit,
    offset: offset,
    type: type,
    entries: entries,
  } satisfies SearchResults;
}
export function serializeSearchResultsInput(
  val: SearchResultsInput
): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['type']:
      val.type == void 0 ? void 0 : serializeSearchResultsTypeField(val.type),
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (
            item: FileFullOrFolderFullOrWebLink
          ): SerializedData {
            return serializeFileFullOrFolderFullOrWebLink(item);
          }) as readonly any[]),
  };
}
export function deserializeSearchResultsInput(
  val: SerializedData
): SearchResultsInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "SearchResultsInput"',
    });
  }
  if (!(val.total_count == void 0) && !sdIsNumber(val.total_count)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "total_count" of type "SearchResultsInput"',
    });
  }
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
    throw new BoxSdkError({
      message: 'Expecting number for "limit" of type "SearchResultsInput"',
    });
  }
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  if (!(val.offset == void 0) && !sdIsNumber(val.offset)) {
    throw new BoxSdkError({
      message: 'Expecting number for "offset" of type "SearchResultsInput"',
    });
  }
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  const type: undefined | SearchResultsTypeField =
    val.type == void 0 ? void 0 : deserializeSearchResultsTypeField(val.type);
  if (!(val.entries == void 0) && !sdIsList(val.entries)) {
    throw new BoxSdkError({
      message: 'Expecting array for "entries" of type "SearchResultsInput"',
    });
  }
  const entries: undefined | readonly FileFullOrFolderFullOrWebLink[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (
          itm: SerializedData
        ): FileFullOrFolderFullOrWebLink {
          return deserializeFileFullOrFolderFullOrWebLink(itm);
        }) as readonly any[])
      : [];
  return {
    totalCount: totalCount,
    limit: limit,
    offset: offset,
    type: type,
    entries: entries,
  } satisfies SearchResultsInput;
}
