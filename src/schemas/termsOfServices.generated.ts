import { serializeTermsOfService } from './termsOfService.generated';
import { deserializeTermsOfService } from './termsOfService.generated';
import { TermsOfService } from './termsOfService.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export interface TermsOfServices {
  /**
   * The total number of objects. */
  readonly totalCount?: number;
  /**
   * A list of terms of service objects. */
  readonly entries?: readonly TermsOfService[];
  readonly rawData?: SerializedData;
}
export function serializeTermsOfServices(val: TermsOfServices): SerializedData {
  return {
    ['total_count']: val.totalCount,
    ['entries']:
      val.entries == void 0
        ? val.entries
        : (val.entries.map(function (item: TermsOfService): SerializedData {
            return serializeTermsOfService(item);
          }) as readonly any[]),
  };
}
export function deserializeTermsOfServices(
  val: SerializedData,
): TermsOfServices {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "TermsOfServices"' });
  }
  if (!(val.total_count == void 0) && !sdIsNumber(val.total_count)) {
    throw new BoxSdkError({
      message: 'Expecting number for "total_count" of type "TermsOfServices"',
    });
  }
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  if (!(val.entries == void 0) && !sdIsList(val.entries)) {
    throw new BoxSdkError({
      message: 'Expecting array for "entries" of type "TermsOfServices"',
    });
  }
  const entries: undefined | readonly TermsOfService[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
        ? (val.entries.map(function (itm: SerializedData): TermsOfService {
            return deserializeTermsOfService(itm);
          }) as readonly any[])
        : [];
  return { totalCount: totalCount, entries: entries } satisfies TermsOfServices;
}
