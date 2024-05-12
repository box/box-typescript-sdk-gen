import { serializeIntegrationMapping } from './integrationMapping.generated.js';
import { deserializeIntegrationMapping } from './integrationMapping.generated.js';
import { IntegrationMapping } from './integrationMapping.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface IntegrationMappings {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly entries?: readonly IntegrationMapping[];
}
export function serializeIntegrationMappings(
  val: IntegrationMappings
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: IntegrationMapping): SerializedData {
            return serializeIntegrationMapping(item);
          }) as readonly any[]),
  };
}
export function deserializeIntegrationMappings(val: any): IntegrationMappings {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const entries: undefined | readonly IntegrationMapping[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): IntegrationMapping {
          return deserializeIntegrationMapping(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    entries: entries,
  } satisfies IntegrationMappings;
}
