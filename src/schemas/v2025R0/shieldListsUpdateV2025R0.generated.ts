import { serializeShieldListContentCountryV2025R0 } from './shieldListContentCountryV2025R0.generated';
import { deserializeShieldListContentCountryV2025R0 } from './shieldListContentCountryV2025R0.generated';
import { serializeShieldListContentDomainV2025R0 } from './shieldListContentDomainV2025R0.generated';
import { deserializeShieldListContentDomainV2025R0 } from './shieldListContentDomainV2025R0.generated';
import { serializeShieldListContentEmailV2025R0 } from './shieldListContentEmailV2025R0.generated';
import { deserializeShieldListContentEmailV2025R0 } from './shieldListContentEmailV2025R0.generated';
import { serializeShieldListContentIpV2025R0 } from './shieldListContentIpV2025R0.generated';
import { deserializeShieldListContentIpV2025R0 } from './shieldListContentIpV2025R0.generated';
import { serializeShieldListContentRequestV2025R0 } from './shieldListContentRequestV2025R0.generated';
import { deserializeShieldListContentRequestV2025R0 } from './shieldListContentRequestV2025R0.generated';
import { ShieldListContentCountryV2025R0 } from './shieldListContentCountryV2025R0.generated';
import { ShieldListContentDomainV2025R0 } from './shieldListContentDomainV2025R0.generated';
import { ShieldListContentEmailV2025R0 } from './shieldListContentEmailV2025R0.generated';
import { ShieldListContentIpV2025R0 } from './shieldListContentIpV2025R0.generated';
import { ShieldListContentRequestV2025R0 } from './shieldListContentRequestV2025R0.generated';
import { BoxSdkError } from '../../box/errors';
import { SerializedData } from '../../serialization/json';
import { sdIsEmpty } from '../../serialization/json';
import { sdIsBoolean } from '../../serialization/json';
import { sdIsNumber } from '../../serialization/json';
import { sdIsString } from '../../serialization/json';
import { sdIsList } from '../../serialization/json';
import { sdIsMap } from '../../serialization/json';
export interface ShieldListsUpdateV2025R0 {
  /**
   * The name of the shield list. */
  readonly name: string;
  /**
   * Optional description of Shield List. */
  readonly description?: string;
  readonly content: ShieldListContentRequestV2025R0;
  readonly rawData?: SerializedData;
}
export function serializeShieldListsUpdateV2025R0(
  val: ShieldListsUpdateV2025R0,
): SerializedData {
  return {
    ['name']: val.name,
    ['description']: val.description,
    ['content']: serializeShieldListContentRequestV2025R0(val.content),
  };
}
export function deserializeShieldListsUpdateV2025R0(
  val: SerializedData,
): ShieldListsUpdateV2025R0 {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "ShieldListsUpdateV2025R0"',
    });
  }
  if (val.name == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "name" of type "ShieldListsUpdateV2025R0" to be defined',
    });
  }
  if (!sdIsString(val.name)) {
    throw new BoxSdkError({
      message: 'Expecting string for "name" of type "ShieldListsUpdateV2025R0"',
    });
  }
  const name: string = val.name;
  if (!(val.description == void 0) && !sdIsString(val.description)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "description" of type "ShieldListsUpdateV2025R0"',
    });
  }
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  if (val.content == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "content" of type "ShieldListsUpdateV2025R0" to be defined',
    });
  }
  const content: ShieldListContentRequestV2025R0 =
    deserializeShieldListContentRequestV2025R0(val.content);
  return {
    name: name,
    description: description,
    content: content,
  } satisfies ShieldListsUpdateV2025R0;
}
