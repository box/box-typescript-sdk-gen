import { serializeTermsOfServiceUserStatus } from './termsOfServiceUserStatus.generated.js';
import { deserializeTermsOfServiceUserStatus } from './termsOfServiceUserStatus.generated.js';
import { TermsOfServiceUserStatus } from './termsOfServiceUserStatus.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface TermsOfServiceUserStatuses {
  readonly totalCount?: number;
  readonly entries?: readonly TermsOfServiceUserStatus[];
}
export function serializeTermsOfServiceUserStatuses(
  val: TermsOfServiceUserStatuses
): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (
            item: TermsOfServiceUserStatus
          ): SerializedData {
            return serializeTermsOfServiceUserStatus(item);
          }) as readonly any[]),
  };
}
export function deserializeTermsOfServiceUserStatuses(
  val: any
): TermsOfServiceUserStatuses {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const entries: undefined | readonly TermsOfServiceUserStatus[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (
          itm: SerializedData
        ): TermsOfServiceUserStatus {
          return deserializeTermsOfServiceUserStatus(itm);
        }) as readonly any[])
      : [];
  return {
    totalCount: totalCount,
    entries: entries,
  } satisfies TermsOfServiceUserStatuses;
}
