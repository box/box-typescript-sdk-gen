import { serializeTask } from './task.generated.js';
import { deserializeTask } from './task.generated.js';
import { Task } from './task.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface Tasks {
  readonly totalCount?: number;
  readonly entries?: readonly Task[];
}
export function serializeTasks(val: Tasks): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: Task): SerializedData {
            return serializeTask(item);
          }) as readonly any[]),
  };
}
export function deserializeTasks(val: any): Tasks {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const entries: undefined | readonly Task[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): Task {
          return deserializeTask(itm);
        }) as readonly any[])
      : [];
  return { totalCount: totalCount, entries: entries } satisfies Tasks;
}
