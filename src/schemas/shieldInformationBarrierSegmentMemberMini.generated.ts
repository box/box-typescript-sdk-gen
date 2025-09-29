import { serializeShieldInformationBarrierSegmentMemberBaseTypeField } from './shieldInformationBarrierSegmentMemberBase.generated';
import { deserializeShieldInformationBarrierSegmentMemberBaseTypeField } from './shieldInformationBarrierSegmentMemberBase.generated';
import { serializeShieldInformationBarrierSegmentMemberBase } from './shieldInformationBarrierSegmentMemberBase.generated';
import { deserializeShieldInformationBarrierSegmentMemberBase } from './shieldInformationBarrierSegmentMemberBase.generated';
import { serializeUserBase } from './userBase.generated';
import { deserializeUserBase } from './userBase.generated';
import { ShieldInformationBarrierSegmentMemberBaseTypeField } from './shieldInformationBarrierSegmentMemberBase.generated';
import { ShieldInformationBarrierSegmentMemberBase } from './shieldInformationBarrierSegmentMemberBase.generated';
import { UserBase } from './userBase.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type ShieldInformationBarrierSegmentMemberMini =
  ShieldInformationBarrierSegmentMemberBase & {
    readonly user?: UserBase;
  };
export function serializeShieldInformationBarrierSegmentMemberMini(
  val: ShieldInformationBarrierSegmentMemberMini,
): SerializedData {
  const base: any = serializeShieldInformationBarrierSegmentMemberBase(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "ShieldInformationBarrierSegmentMemberMini"',
    });
  }
  return {
    ...base,
    ...{
      ['user']: val.user == void 0 ? val.user : serializeUserBase(val.user),
    },
  };
}
export function deserializeShieldInformationBarrierSegmentMemberMini(
  val: SerializedData,
): ShieldInformationBarrierSegmentMemberMini {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "ShieldInformationBarrierSegmentMemberMini"',
    });
  }
  const user: undefined | UserBase =
    val.user == void 0 ? void 0 : deserializeUserBase(val.user);
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "ShieldInformationBarrierSegmentMemberMini"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | ShieldInformationBarrierSegmentMemberBaseTypeField =
    val.type == void 0
      ? void 0
      : deserializeShieldInformationBarrierSegmentMemberBaseTypeField(val.type);
  return {
    user: user,
    id: id,
    type: type,
  } satisfies ShieldInformationBarrierSegmentMemberMini;
}
