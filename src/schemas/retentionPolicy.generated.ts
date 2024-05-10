import { serializeRetentionPolicyBaseTypeField } from './retentionPolicyBase.generated.js';
import { deserializeRetentionPolicyBaseTypeField } from './retentionPolicyBase.generated.js';
import { serializeRetentionPolicyBase } from './retentionPolicyBase.generated.js';
import { deserializeRetentionPolicyBase } from './retentionPolicyBase.generated.js';
import { serializeRetentionPolicyMiniDispositionActionField } from './retentionPolicyMini.generated.js';
import { deserializeRetentionPolicyMiniDispositionActionField } from './retentionPolicyMini.generated.js';
import { serializeRetentionPolicyMini } from './retentionPolicyMini.generated.js';
import { deserializeRetentionPolicyMini } from './retentionPolicyMini.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { RetentionPolicyBaseTypeField } from './retentionPolicyBase.generated.js';
import { RetentionPolicyBase } from './retentionPolicyBase.generated.js';
import { RetentionPolicyMiniDispositionActionField } from './retentionPolicyMini.generated.js';
import { RetentionPolicyMini } from './retentionPolicyMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type RetentionPolicyPolicyTypeField = 'finite' | 'indefinite';
export type RetentionPolicyRetentionTypeField = 'modifiable' | 'non_modifiable';
export type RetentionPolicyStatusField = 'active' | 'retired';
export interface RetentionPolicyAssignmentCountsField {
  readonly enterprise?: number;
  readonly folder?: number;
  readonly metadataTemplate?: number;
}
export class RetentionPolicy extends RetentionPolicyMini {
  readonly description?: string;
  readonly policyType?: RetentionPolicyPolicyTypeField;
  readonly retentionType?: RetentionPolicyRetentionTypeField;
  readonly status?: RetentionPolicyStatusField;
  readonly createdBy?: UserMini;
  readonly createdAt?: DateTime;
  readonly modifiedAt?: DateTime;
  readonly canOwnerExtendRetention?: boolean;
  readonly areOwnersNotified?: boolean;
  readonly customNotificationRecipients?: readonly UserMini[];
  readonly assignmentCounts?: RetentionPolicyAssignmentCountsField;
  constructor(fields: RetentionPolicy) {
    super(fields);
  }
}
export function serializeRetentionPolicyPolicyTypeField(
  val: RetentionPolicyPolicyTypeField
): SerializedData {
  return val;
}
export function deserializeRetentionPolicyPolicyTypeField(
  val: any
): RetentionPolicyPolicyTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "RetentionPolicyPolicyTypeField"',
    });
  }
  if (val == 'finite') {
    return 'finite';
  }
  if (val == 'indefinite') {
    return 'indefinite';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeRetentionPolicyRetentionTypeField(
  val: RetentionPolicyRetentionTypeField
): SerializedData {
  return val;
}
export function deserializeRetentionPolicyRetentionTypeField(
  val: any
): RetentionPolicyRetentionTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "RetentionPolicyRetentionTypeField"',
    });
  }
  if (val == 'modifiable') {
    return 'modifiable';
  }
  if (val == 'non_modifiable') {
    return 'non_modifiable';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeRetentionPolicyStatusField(
  val: RetentionPolicyStatusField
): SerializedData {
  return val;
}
export function deserializeRetentionPolicyStatusField(
  val: any
): RetentionPolicyStatusField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "RetentionPolicyStatusField"',
    });
  }
  if (val == 'active') {
    return 'active';
  }
  if (val == 'retired') {
    return 'retired';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeRetentionPolicyAssignmentCountsField(
  val: RetentionPolicyAssignmentCountsField
): SerializedData {
  return {
    ['enterprise']: val.enterprise == void 0 ? void 0 : val.enterprise,
    ['folder']: val.folder == void 0 ? void 0 : val.folder,
    ['metadata_template']:
      val.metadataTemplate == void 0 ? void 0 : val.metadataTemplate,
  };
}
export function deserializeRetentionPolicyAssignmentCountsField(
  val: any
): RetentionPolicyAssignmentCountsField {
  const enterprise: undefined | number =
    val.enterprise == void 0 ? void 0 : val.enterprise;
  const folder: undefined | number = val.folder == void 0 ? void 0 : val.folder;
  const metadataTemplate: undefined | number =
    val.metadata_template == void 0 ? void 0 : val.metadata_template;
  return {
    enterprise: enterprise,
    folder: folder,
    metadataTemplate: metadataTemplate,
  } satisfies RetentionPolicyAssignmentCountsField;
}
export function serializeRetentionPolicy(val: RetentionPolicy): SerializedData {
  const base: any = serializeRetentionPolicyMini(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "RetentionPolicy"' });
  }
  return {
    ...base,
    ...{
      ['description']: val.description == void 0 ? void 0 : val.description,
      ['policy_type']:
        val.policyType == void 0
          ? void 0
          : serializeRetentionPolicyPolicyTypeField(val.policyType),
      ['retention_type']:
        val.retentionType == void 0
          ? void 0
          : serializeRetentionPolicyRetentionTypeField(val.retentionType),
      ['status']:
        val.status == void 0
          ? void 0
          : serializeRetentionPolicyStatusField(val.status),
      ['created_by']:
        val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
      ['created_at']:
        val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
      ['modified_at']:
        val.modifiedAt == void 0 ? void 0 : serializeDateTime(val.modifiedAt),
      ['can_owner_extend_retention']:
        val.canOwnerExtendRetention == void 0
          ? void 0
          : val.canOwnerExtendRetention,
      ['are_owners_notified']:
        val.areOwnersNotified == void 0 ? void 0 : val.areOwnersNotified,
      ['custom_notification_recipients']:
        val.customNotificationRecipients == void 0
          ? void 0
          : (val.customNotificationRecipients.map(function (
              item: UserMini
            ): SerializedData {
              return serializeUserMini(item);
            }) as readonly any[]),
      ['assignment_counts']:
        val.assignmentCounts == void 0
          ? void 0
          : serializeRetentionPolicyAssignmentCountsField(val.assignmentCounts),
    },
  };
}
export function deserializeRetentionPolicy(val: any): RetentionPolicy {
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const policyType: undefined | RetentionPolicyPolicyTypeField =
    val.policy_type == void 0
      ? void 0
      : deserializeRetentionPolicyPolicyTypeField(val.policy_type);
  const retentionType: undefined | RetentionPolicyRetentionTypeField =
    val.retention_type == void 0
      ? void 0
      : deserializeRetentionPolicyRetentionTypeField(val.retention_type);
  const status: undefined | RetentionPolicyStatusField =
    val.status == void 0
      ? void 0
      : deserializeRetentionPolicyStatusField(val.status);
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  const canOwnerExtendRetention: undefined | boolean =
    val.can_owner_extend_retention == void 0
      ? void 0
      : val.can_owner_extend_retention;
  const areOwnersNotified: undefined | boolean =
    val.are_owners_notified == void 0 ? void 0 : val.are_owners_notified;
  const customNotificationRecipients: undefined | readonly UserMini[] =
    val.custom_notification_recipients == void 0
      ? void 0
      : sdIsList(val.custom_notification_recipients)
      ? (val.custom_notification_recipients.map(function (
          itm: SerializedData
        ): UserMini {
          return deserializeUserMini(itm);
        }) as readonly any[])
      : [];
  const assignmentCounts: undefined | RetentionPolicyAssignmentCountsField =
    val.assignment_counts == void 0
      ? void 0
      : deserializeRetentionPolicyAssignmentCountsField(val.assignment_counts);
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
    description: description,
    policyType: policyType,
    retentionType: retentionType,
    status: status,
    createdBy: createdBy,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    canOwnerExtendRetention: canOwnerExtendRetention,
    areOwnersNotified: areOwnersNotified,
    customNotificationRecipients: customNotificationRecipients,
    assignmentCounts: assignmentCounts,
    policyName: policyName,
    retentionLength: retentionLength,
    dispositionAction: dispositionAction,
    id: id,
    type: type,
  } satisfies RetentionPolicy;
}
