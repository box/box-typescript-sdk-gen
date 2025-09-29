import { serializeShieldListContentCountryV2025R0 } from './shieldListContentCountryV2025R0.generated';
import { deserializeShieldListContentCountryV2025R0 } from './shieldListContentCountryV2025R0.generated';
import { serializeShieldListContentDomainV2025R0 } from './shieldListContentDomainV2025R0.generated';
import { deserializeShieldListContentDomainV2025R0 } from './shieldListContentDomainV2025R0.generated';
import { serializeShieldListContentEmailV2025R0 } from './shieldListContentEmailV2025R0.generated';
import { deserializeShieldListContentEmailV2025R0 } from './shieldListContentEmailV2025R0.generated';
import { serializeShieldListContentIpV2025R0 } from './shieldListContentIpV2025R0.generated';
import { deserializeShieldListContentIpV2025R0 } from './shieldListContentIpV2025R0.generated';
import { serializeShieldListContentIntegrationV2025R0 } from './shieldListContentIntegrationV2025R0.generated';
import { deserializeShieldListContentIntegrationV2025R0 } from './shieldListContentIntegrationV2025R0.generated';
import { ShieldListContentCountryV2025R0 } from './shieldListContentCountryV2025R0.generated';
import { ShieldListContentDomainV2025R0 } from './shieldListContentDomainV2025R0.generated';
import { ShieldListContentEmailV2025R0 } from './shieldListContentEmailV2025R0.generated';
import { ShieldListContentIpV2025R0 } from './shieldListContentIpV2025R0.generated';
import { ShieldListContentIntegrationV2025R0 } from './shieldListContentIntegrationV2025R0.generated';
import { BoxSdkError } from '../../box/errors';
import { SerializedData } from '../../serialization/json';
import { sdIsEmpty } from '../../serialization/json';
import { sdIsBoolean } from '../../serialization/json';
import { sdIsNumber } from '../../serialization/json';
import { sdIsString } from '../../serialization/json';
import { sdIsList } from '../../serialization/json';
import { sdIsMap } from '../../serialization/json';
export type ShieldListContentV2025R0 =
  | ShieldListContentCountryV2025R0
  | ShieldListContentDomainV2025R0
  | ShieldListContentEmailV2025R0
  | ShieldListContentIpV2025R0
  | ShieldListContentIntegrationV2025R0;
export function serializeShieldListContentV2025R0(val: any): SerializedData {
  if (val.type == 'country') {
    return serializeShieldListContentCountryV2025R0(val);
  }
  if (val.type == 'domain') {
    return serializeShieldListContentDomainV2025R0(val);
  }
  if (val.type == 'email') {
    return serializeShieldListContentEmailV2025R0(val);
  }
  if (val.type == 'ip') {
    return serializeShieldListContentIpV2025R0(val);
  }
  if (val.type == 'integration') {
    return serializeShieldListContentIntegrationV2025R0(val);
  }
  throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeShieldListContentV2025R0(
  val: SerializedData,
): ShieldListContentV2025R0 {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "ShieldListContentV2025R0"',
    });
  }
  if (val.type == 'country') {
    return deserializeShieldListContentCountryV2025R0(val);
  }
  if (val.type == 'domain') {
    return deserializeShieldListContentDomainV2025R0(val);
  }
  if (val.type == 'email') {
    return deserializeShieldListContentEmailV2025R0(val);
  }
  if (val.type == 'ip') {
    return deserializeShieldListContentIpV2025R0(val);
  }
  if (val.type == 'integration') {
    return deserializeShieldListContentIntegrationV2025R0(val);
  }
  throw new BoxSdkError({
    message: "Can't deserialize ShieldListContentV2025R0",
  });
}
