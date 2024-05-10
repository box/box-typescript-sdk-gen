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
  readonly id?: string;
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
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "IntegrationMappingBaseIntegrationTypeField"',
    });
  }
  if (val == 'slack') {
    return 'slack';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
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
