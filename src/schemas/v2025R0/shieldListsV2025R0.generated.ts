import { serializeShieldListMiniV2025R0 } from './shieldListMiniV2025R0.generated';
import { deserializeShieldListMiniV2025R0 } from './shieldListMiniV2025R0.generated';
import { ShieldListMiniV2025R0 } from './shieldListMiniV2025R0.generated';
import { BoxSdkError } from '../../box/errors';
import { SerializedData } from '../../serialization/json';
import { sdIsEmpty } from '../../serialization/json';
import { sdIsBoolean } from '../../serialization/json';
import { sdIsNumber } from '../../serialization/json';
import { sdIsString } from '../../serialization/json';
import { sdIsList } from '../../serialization/json';
import { sdIsMap } from '../../serialization/json';
export interface ShieldListsV2025R0 {
  /**
   * A list of shield list objects. */
  readonly entries?: readonly ShieldListMiniV2025R0[];
  readonly rawData?: SerializedData;
}
export function serializeShieldListsV2025R0(
  val: ShieldListsV2025R0,
): SerializedData {
  return {
    ['entries']:
      val.entries == void 0
        ? val.entries
        : (val.entries.map(function (
            item: ShieldListMiniV2025R0,
          ): SerializedData {
            return serializeShieldListMiniV2025R0(item);
          }) as readonly any[]),
  };
}
export function deserializeShieldListsV2025R0(
  val: SerializedData,
): ShieldListsV2025R0 {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "ShieldListsV2025R0"',
    });
  }
  if (!(val.entries == void 0) && !sdIsList(val.entries)) {
    throw new BoxSdkError({
      message: 'Expecting array for "entries" of type "ShieldListsV2025R0"',
    });
  }
  const entries: undefined | readonly ShieldListMiniV2025R0[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
        ? (val.entries.map(function (
            itm: SerializedData,
          ): ShieldListMiniV2025R0 {
            return deserializeShieldListMiniV2025R0(itm);
          }) as readonly any[])
        : [];
  return { entries: entries } satisfies ShieldListsV2025R0;
}
