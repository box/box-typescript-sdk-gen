import { serializeRetentionPolicyBaseTypeField } from './retentionPolicyBase.generated.js';
import { deserializeRetentionPolicyBaseTypeField } from './retentionPolicyBase.generated.js';
import { serializeRetentionPolicyBase } from './retentionPolicyBase.generated.js';
import { deserializeRetentionPolicyBase } from './retentionPolicyBase.generated.js';
import { RetentionPolicyBaseTypeField } from './retentionPolicyBase.generated.js';
import { RetentionPolicyBase } from './retentionPolicyBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type RetentionPolicyMiniDispositionActionField =
  | 'permanently_delete'
  | 'remove_retention';
export class RetentionPolicyMini extends RetentionPolicyBase {
  readonly policyName?: string;
  readonly retentionLength?: string;
  readonly dispositionAction?: RetentionPolicyMiniDispositionActionField;
  constructor(fields: RetentionPolicyMini) {
    super(fields);
  }
}
export function serializeRetentionPolicyMiniDispositionActionField(
  val: RetentionPolicyMiniDispositionActionField
): SerializedData {
  return val;
}
export function deserializeRetentionPolicyMiniDispositionActionField(
  val: any
): RetentionPolicyMiniDispositionActionField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "RetentionPolicyMiniDispositionActionField"',
    });
  }
  if (val == 'permanently_delete') {
    return 'permanently_delete';
  }
  if (val == 'remove_retention') {
    return 'remove_retention';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeRetentionPolicyMini(
  val: RetentionPolicyMini
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
      ['policy_name']: val.policyName == void 0 ? void 0 : val.policyName,
      ['retention_length']:
        val.retentionLength == void 0 ? void 0 : val.retentionLength,
      ['disposition_action']:
        val.dispositionAction == void 0
          ? void 0
          : serializeRetentionPolicyMiniDispositionActionField(
              val.dispositionAction
            ),
    },
  };
}
export function deserializeRetentionPolicyMini(val: any): RetentionPolicyMini {
  const policyName: undefined | string =
    val.policy_name == void 0 ? void 0 : val.policy_name;
  const retentionLength: undefined | string =
    val.retention_length == void 0 ? void 0 : val.retention_length;
  const dispositionAction:
    | undefined
    | RetentionPolicyMiniDispositionActionField =
    val.disposition_action == void 0
      ? void 0
      : deserializeRetentionPolicyMiniDispositionActionField(
          val.disposition_action
        );
  const id: string = val.id;
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
