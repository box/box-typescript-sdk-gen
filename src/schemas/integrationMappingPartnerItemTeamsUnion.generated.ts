import { serializeIntegrationMappingPartnerItemTeams } from './integrationMappingPartnerItemTeams.generated';
import { deserializeIntegrationMappingPartnerItemTeams } from './integrationMappingPartnerItemTeams.generated';
import { IntegrationMappingPartnerItemTeams } from './integrationMappingPartnerItemTeams.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type IntegrationMappingPartnerItemTeamsUnion =
  IntegrationMappingPartnerItemTeams;
export function serializeIntegrationMappingPartnerItemTeamsUnion(
  val: any,
): SerializedData {
  if (val.type == 'channel') {
    return serializeIntegrationMappingPartnerItemTeams(val);
  }
  if (val.type == 'team') {
    return serializeIntegrationMappingPartnerItemTeams(val);
  }
  throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeIntegrationMappingPartnerItemTeamsUnion(
  val: SerializedData,
): IntegrationMappingPartnerItemTeamsUnion {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "IntegrationMappingPartnerItemTeamsUnion"',
    });
  }
  if (val.type == 'channel') {
    return deserializeIntegrationMappingPartnerItemTeams(val);
  }
  if (val.type == 'team') {
    return deserializeIntegrationMappingPartnerItemTeams(val);
  }
  throw new BoxSdkError({
    message: "Can't deserialize IntegrationMappingPartnerItemTeamsUnion",
  });
}
