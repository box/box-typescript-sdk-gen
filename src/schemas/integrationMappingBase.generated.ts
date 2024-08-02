import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type IntegrationMappingBaseIntegrationTypeField = 'slack';
export interface IntegrationMappingBase {
  /**
   * A unique identifier of a folder mapping
   * (part of a composite key together
   * with `integration_type`) */
  readonly id?: string;
  /**
   * Identifies the Box partner app,
   * with which the mapping is associated.
   * Currently only supports Slack.
   * (part of the composite key together with `id`) */
  readonly integrationType?: IntegrationMappingBaseIntegrationTypeField;
}
export function serializeIntegrationMappingBaseIntegrationTypeField(
  val: IntegrationMappingBaseIntegrationTypeField
): SerializedData {
  return val;
}
export function deserializeIntegrationMappingBaseIntegrationTypeField(
  val: SerializedData
): IntegrationMappingBaseIntegrationTypeField {
  if (val == 'slack') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize IntegrationMappingBaseIntegrationTypeField",
  });
}
export function serializeIntegrationMappingBase(
  val: IntegrationMappingBase
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['integration_type']:
      val.integrationType == void 0
        ? void 0
        : serializeIntegrationMappingBaseIntegrationTypeField(
            val.integrationType
          ),
  };
}
export function deserializeIntegrationMappingBase(
  val: SerializedData
): IntegrationMappingBase {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "IntegrationMappingBase"',
    });
  }
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "IntegrationMappingBase"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const integrationType:
    | undefined
    | IntegrationMappingBaseIntegrationTypeField =
    val.integration_type == void 0
      ? void 0
      : deserializeIntegrationMappingBaseIntegrationTypeField(
          val.integration_type
        );
  return {
    id: id,
    integrationType: integrationType,
  } satisfies IntegrationMappingBase;
}
