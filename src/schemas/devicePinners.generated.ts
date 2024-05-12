import { serializeDevicePinner } from './devicePinner.generated.js';
import { deserializeDevicePinner } from './devicePinner.generated.js';
import { DevicePinner } from './devicePinner.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type DevicePinnersOrderByField = 'id';
export type DevicePinnersOrderDirectionField = 'asc' | 'desc';
export interface DevicePinnersOrderField {
  readonly by?: DevicePinnersOrderByField;
  readonly direction?: DevicePinnersOrderDirectionField;
}
export interface DevicePinners {
  readonly entries?: readonly DevicePinner[];
  readonly limit?: number;
  readonly nextMarker?: number;
  readonly order?: readonly DevicePinnersOrderField[];
}
export function serializeDevicePinnersOrderByField(
  val: DevicePinnersOrderByField
): SerializedData {
  return val;
}
export function deserializeDevicePinnersOrderByField(
  val: SerializedData
): DevicePinnersOrderByField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "DevicePinnersOrderByField"',
    });
  }
  if (val == 'id') {
    return 'id';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeDevicePinnersOrderDirectionField(
  val: DevicePinnersOrderDirectionField
): SerializedData {
  return val;
}
export function deserializeDevicePinnersOrderDirectionField(
  val: SerializedData
): DevicePinnersOrderDirectionField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "DevicePinnersOrderDirectionField"',
    });
  }
  if (val == 'asc') {
    return 'asc';
  }
  if (val == 'desc') {
    return 'desc';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeDevicePinnersOrderField(
  val: DevicePinnersOrderField
): SerializedData {
  return {
    ['by']:
      val.by == void 0 ? void 0 : serializeDevicePinnersOrderByField(val.by),
    ['direction']:
      val.direction == void 0
        ? void 0
        : serializeDevicePinnersOrderDirectionField(val.direction),
  };
}
export function deserializeDevicePinnersOrderField(
  val: SerializedData
): DevicePinnersOrderField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "DevicePinnersOrderField"',
    });
  }
  const by: undefined | DevicePinnersOrderByField =
    val.by == void 0 ? void 0 : deserializeDevicePinnersOrderByField(val.by);
  const direction: undefined | DevicePinnersOrderDirectionField =
    val.direction == void 0
      ? void 0
      : deserializeDevicePinnersOrderDirectionField(val.direction);
  return { by: by, direction: direction } satisfies DevicePinnersOrderField;
}
export function serializeDevicePinners(val: DevicePinners): SerializedData {
  return {
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: DevicePinner): SerializedData {
            return serializeDevicePinner(item);
          }) as readonly any[]),
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['order']:
      val.order == void 0
        ? void 0
        : (val.order.map(function (
            item: DevicePinnersOrderField
          ): SerializedData {
            return serializeDevicePinnersOrderField(item);
          }) as readonly any[]),
  };
}
export function deserializeDevicePinners(val: SerializedData): DevicePinners {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "DevicePinners"' });
  }
  if (!(val.entries == void 0) && !sdIsList(val.entries)) {
    throw new BoxSdkError({
      message: 'Expecting array for "entries" of type "DevicePinners"',
    });
  }
  const entries: undefined | readonly DevicePinner[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): DevicePinner {
          return deserializeDevicePinner(itm);
        }) as readonly any[])
      : [];
  if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
    throw new BoxSdkError({
      message: 'Expecting number for "limit" of type "DevicePinners"',
    });
  }
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  if (!(val.next_marker == void 0) && !sdIsNumber(val.next_marker)) {
    throw new BoxSdkError({
      message: 'Expecting number for "next_marker" of type "DevicePinners"',
    });
  }
  const nextMarker: undefined | number =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  if (!(val.order == void 0) && !sdIsList(val.order)) {
    throw new BoxSdkError({
      message: 'Expecting array for "order" of type "DevicePinners"',
    });
  }
  const order: undefined | readonly DevicePinnersOrderField[] =
    val.order == void 0
      ? void 0
      : sdIsList(val.order)
      ? (val.order.map(function (itm: SerializedData): DevicePinnersOrderField {
          return deserializeDevicePinnersOrderField(itm);
        }) as readonly any[])
      : [];
  return {
    entries: entries,
    limit: limit,
    nextMarker: nextMarker,
    order: order,
  } satisfies DevicePinners;
}
