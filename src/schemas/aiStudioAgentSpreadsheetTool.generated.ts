import { serializeAiAgentSpreadsheetTool } from './aiAgentSpreadsheetTool.generated.js';
import { deserializeAiAgentSpreadsheetTool } from './aiAgentSpreadsheetTool.generated.js';
import { AiAgentSpreadsheetTool } from './aiAgentSpreadsheetTool.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type AiStudioAgentSpreadsheetTool = AiAgentSpreadsheetTool;
export function serializeAiStudioAgentSpreadsheetTool(
  val: AiStudioAgentSpreadsheetTool,
): SerializedData {
  return serializeAiAgentSpreadsheetTool(val);
}
export function deserializeAiStudioAgentSpreadsheetTool(
  val: SerializedData,
): AiStudioAgentSpreadsheetTool {
  return deserializeAiAgentSpreadsheetTool(val);
}
