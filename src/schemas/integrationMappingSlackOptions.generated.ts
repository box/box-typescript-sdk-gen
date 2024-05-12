import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface IntegrationMappingSlackOptions {
  readonly isAccessManagementDisabled?: boolean;
}
export function serializeIntegrationMappingSlackOptions(
  val: IntegrationMappingSlackOptions
): SerializedData {
  return {
    ['is_access_management_disabled']:
      val.isAccessManagementDisabled == void 0
        ? void 0
        : val.isAccessManagementDisabled,
  };
}
export function deserializeIntegrationMappingSlackOptions(
  val: SerializedData
): IntegrationMappingSlackOptions {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "IntegrationMappingSlackOptions"',
    });
  }
  if (
    !(val.is_access_management_disabled == void 0) &&
    !sdIsBoolean(val.is_access_management_disabled)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_access_management_disabled" of type "IntegrationMappingSlackOptions"',
    });
  }
  const isAccessManagementDisabled: undefined | boolean =
    val.is_access_management_disabled == void 0
      ? void 0
      : val.is_access_management_disabled;
  return {
    isAccessManagementDisabled: isAccessManagementDisabled,
  } satisfies IntegrationMappingSlackOptions;
}
