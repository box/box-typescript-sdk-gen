import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface SessionTerminationMessage {
  readonly message?: string;
}
export function serializeSessionTerminationMessage(
  val: SessionTerminationMessage
): SerializedData {
  return { ['message']: val.message == void 0 ? void 0 : val.message };
}
export function deserializeSessionTerminationMessage(
  val: any
): SessionTerminationMessage {
  const message: undefined | string =
    val.message == void 0 ? void 0 : val.message;
  return { message: message } satisfies SessionTerminationMessage;
}
