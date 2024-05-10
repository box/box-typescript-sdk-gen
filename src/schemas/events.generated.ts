import { serializeEvent } from './event.generated.js';
import { deserializeEvent } from './event.generated.js';
import { Event } from './event.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface Events {
  readonly chunkSize?: number;
  readonly nextStreamPosition?: string;
  readonly entries?: readonly Event[];
}
export function serializeEvents(val: Events): SerializedData {
  return {
    ['chunk_size']: val.chunkSize == void 0 ? void 0 : val.chunkSize,
    ['next_stream_position']:
      val.nextStreamPosition == void 0 ? void 0 : val.nextStreamPosition,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: Event): SerializedData {
            return serializeEvent(item);
          }) as readonly any[]),
  };
}
export function deserializeEvents(val: any): Events {
  const chunkSize: undefined | number =
    val.chunk_size == void 0 ? void 0 : val.chunk_size;
  const nextStreamPosition: undefined | string =
    val.next_stream_position == void 0 ? void 0 : val.next_stream_position;
  const entries: undefined | readonly Event[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): Event {
          return deserializeEvent(itm);
        }) as readonly any[])
      : [];
  return {
    chunkSize: chunkSize,
    nextStreamPosition: nextStreamPosition,
    entries: entries,
  } satisfies Events;
}
