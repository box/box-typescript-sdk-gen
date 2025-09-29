import { serializeRetentionPolicyBaseTypeField } from './retentionPolicyBase.generated';
import { deserializeRetentionPolicyBaseTypeField } from './retentionPolicyBase.generated';
import { serializeRetentionPolicyBase } from './retentionPolicyBase.generated';
import { deserializeRetentionPolicyBase } from './retentionPolicyBase.generated';
import { RetentionPolicyBaseTypeField } from './retentionPolicyBase.generated';
import { RetentionPolicyBase } from './retentionPolicyBase.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type RetentionPolicyMiniDispositionActionField =
  | 'permanently_delete'
  | 'remove_retention'
  | string;
export class RetentionPolicyMini extends RetentionPolicyBase {
  readonly policyName?: string;
  readonly retentionLength?: string;
  readonly dispositionAction?: RetentionPolicyMiniDispositionActionField;
  constructor(fields: RetentionPolicyMini) {
    super(fields);
    if (fields.policyName !== undefined) {
      this.policyName = fields.policyName;
    }
    if (fields.retentionLength !== undefined) {
      this.retentionLength = fields.retentionLength;
    }
    if (fields.dispositionAction !== undefined) {
      this.dispositionAction = fields.dispositionAction;
    }
  }
}
export function serializeRetentionPolicyMiniDispositionActionField(
  val: RetentionPolicyMiniDispositionActionField,
): SerializedData {
  return val;
}
export function deserializeRetentionPolicyMiniDispositionActionField(
  val: SerializedData,
): RetentionPolicyMiniDispositionActionField {
  if (val == 'permanently_delete') {
    return val;
  }
  if (val == 'remove_retention') {
    return val;
  }
  if (sdIsString(val)) {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize RetentionPolicyMiniDispositionActionField",
  });
}
export function serializeRetentionPolicyMini(
  val: RetentionPolicyMini,
): SerializedData {
  const base: any = serializeRetentionPolicyBase(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "RetentionPolicyMini"',
    });
  }
  return {
    ...base,
    ...{
      ['policy_name']: val.policyName,
      ['retention_length']: val.retentionLength,
      ['disposition_action']:
        val.dispositionAction == void 0
          ? val.dispositionAction
          : serializeRetentionPolicyMiniDispositionActionField(
              val.dispositionAction,
            ),
    },
  };
}
export function deserializeRetentionPolicyMini(
  val: SerializedData,
): RetentionPolicyMini {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "RetentionPolicyMini"',
    });
  }
  if (!(val.policy_name == void 0) && !sdIsString(val.policy_name)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "policy_name" of type "RetentionPolicyMini"',
    });
  }
  const policyName: undefined | string =
    val.policy_name == void 0 ? void 0 : val.policy_name;
  if (!(val.retention_length == void 0) && !sdIsString(val.retention_length)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "retention_length" of type "RetentionPolicyMini"',
    });
  }
  const retentionLength: undefined | string =
    val.retention_length == void 0 ? void 0 : val.retention_length;
  const dispositionAction:
    | undefined
    | RetentionPolicyMiniDispositionActionField =
    val.disposition_action == void 0
      ? void 0
      : deserializeRetentionPolicyMiniDispositionActionField(
          val.disposition_action,
        );
  if (val.id == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "id" of type "RetentionPolicyMini" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "RetentionPolicyMini"',
    });
  }
  const id: string = val.id;
  if (val.type == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "type" of type "RetentionPolicyMini" to be defined',
    });
  }
  const type: RetentionPolicyBaseTypeField =
    deserializeRetentionPolicyBaseTypeField(val.type);
  return {
    policyName: policyName,
    retentionLength: retentionLength,
    dispositionAction: dispositionAction,
    id: id,
    type: type,
  } satisfies RetentionPolicyMini;
}
