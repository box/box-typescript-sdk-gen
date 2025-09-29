import { serializeIntegrationMappingPartnerItemSlack } from './integrationMappingPartnerItemSlack.generated';
import { deserializeIntegrationMappingPartnerItemSlack } from './integrationMappingPartnerItemSlack.generated';
import { IntegrationMappingPartnerItemSlack } from './integrationMappingPartnerItemSlack.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type IntegrationMappingPartnerItemSlackUnion =
  IntegrationMappingPartnerItemSlack;
export function serializeIntegrationMappingPartnerItemSlackUnion(
  val: any,
): SerializedData {
  if (val.type == 'channel') {
    return serializeIntegrationMappingPartnerItemSlack(val);
  }
  throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeIntegrationMappingPartnerItemSlackUnion(
  val: SerializedData,
): IntegrationMappingPartnerItemSlackUnion {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "IntegrationMappingPartnerItemSlackUnion"',
    });
  }
  if (val.type == 'channel') {
    return deserializeIntegrationMappingPartnerItemSlack(val);
  }
  throw new BoxSdkError({
    message: "Can't deserialize IntegrationMappingPartnerItemSlackUnion",
  });
}
