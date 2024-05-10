import { serializeTermsOfServiceBaseTypeField } from './termsOfServiceBase.generated.js';
import { deserializeTermsOfServiceBaseTypeField } from './termsOfServiceBase.generated.js';
import { serializeTermsOfServiceBase } from './termsOfServiceBase.generated.js';
import { deserializeTermsOfServiceBase } from './termsOfServiceBase.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { TermsOfServiceBaseTypeField } from './termsOfServiceBase.generated.js';
import { TermsOfServiceBase } from './termsOfServiceBase.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type TermsOfServiceStatusField = 'enabled' | 'disabled';
export type TermsOfServiceEnterpriseTypeField = 'enterprise';
export interface TermsOfServiceEnterpriseField {
  readonly id?: string;
  readonly type?: TermsOfServiceEnterpriseTypeField;
  readonly name?: string;
}
export type TermsOfServiceTosTypeField = 'managed' | 'external';
export class TermsOfService extends TermsOfServiceBase {
  readonly status?: TermsOfServiceStatusField;
  readonly enterprise?: TermsOfServiceEnterpriseField;
  readonly tosType?: TermsOfServiceTosTypeField;
  readonly text?: string;
  readonly createdAt?: DateTime;
  readonly modifiedAt?: DateTime;
  constructor(fields: TermsOfService) {
    super(fields);
  }
}
export function serializeTermsOfServiceStatusField(
  val: TermsOfServiceStatusField
): SerializedData {
  return val;
}
export function deserializeTermsOfServiceStatusField(
  val: any
): TermsOfServiceStatusField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TermsOfServiceStatusField"',
    });
  }
  if (val == 'enabled') {
    return 'enabled';
  }
  if (val == 'disabled') {
    return 'disabled';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeTermsOfServiceEnterpriseTypeField(
  val: TermsOfServiceEnterpriseTypeField
): SerializedData {
  return val;
}
export function deserializeTermsOfServiceEnterpriseTypeField(
  val: any
): TermsOfServiceEnterpriseTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TermsOfServiceEnterpriseTypeField"',
    });
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeTermsOfServiceEnterpriseField(
  val: TermsOfServiceEnterpriseField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeTermsOfServiceEnterpriseTypeField(val.type),
    ['name']: val.name == void 0 ? void 0 : val.name,
  };
}
export function deserializeTermsOfServiceEnterpriseField(
  val: any
): TermsOfServiceEnterpriseField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | TermsOfServiceEnterpriseTypeField =
    val.type == void 0
      ? void 0
      : deserializeTermsOfServiceEnterpriseTypeField(val.type);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  return {
    id: id,
    type: type,
    name: name,
  } satisfies TermsOfServiceEnterpriseField;
}
export function serializeTermsOfServiceTosTypeField(
  val: TermsOfServiceTosTypeField
): SerializedData {
  return val;
}
export function deserializeTermsOfServiceTosTypeField(
  val: any
): TermsOfServiceTosTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TermsOfServiceTosTypeField"',
    });
  }
  if (val == 'managed') {
    return 'managed';
  }
  if (val == 'external') {
    return 'external';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeTermsOfService(val: TermsOfService): SerializedData {
  const base: any = serializeTermsOfServiceBase(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "TermsOfService"' });
  }
  return {
    ...base,
    ...{
      ['status']:
        val.status == void 0
          ? void 0
          : serializeTermsOfServiceStatusField(val.status),
      ['enterprise']:
        val.enterprise == void 0
          ? void 0
          : serializeTermsOfServiceEnterpriseField(val.enterprise),
      ['tos_type']:
        val.tosType == void 0
          ? void 0
          : serializeTermsOfServiceTosTypeField(val.tosType),
      ['text']: val.text == void 0 ? void 0 : val.text,
      ['created_at']:
        val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
      ['modified_at']:
        val.modifiedAt == void 0 ? void 0 : serializeDateTime(val.modifiedAt),
    },
  };
}
export function deserializeTermsOfService(val: any): TermsOfService {
  const status: undefined | TermsOfServiceStatusField =
    val.status == void 0
      ? void 0
      : deserializeTermsOfServiceStatusField(val.status);
  const enterprise: undefined | TermsOfServiceEnterpriseField =
    val.enterprise == void 0
      ? void 0
      : deserializeTermsOfServiceEnterpriseField(val.enterprise);
  const tosType: undefined | TermsOfServiceTosTypeField =
    val.tos_type == void 0
      ? void 0
      : deserializeTermsOfServiceTosTypeField(val.tos_type);
  const text: undefined | string = val.text == void 0 ? void 0 : val.text;
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  const id: string = val.id;
  const type: TermsOfServiceBaseTypeField =
    deserializeTermsOfServiceBaseTypeField(val.type);
  return {
    status: status,
    enterprise: enterprise,
    tosType: tosType,
    text: text,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    id: id,
    type: type,
  } satisfies TermsOfService;
}
