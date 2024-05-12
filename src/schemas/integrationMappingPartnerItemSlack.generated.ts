import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type IntegrationMappingPartnerItemSlackTypeField = 'channel';
export class IntegrationMappingPartnerItemSlack {
  readonly type: IntegrationMappingPartnerItemSlackTypeField =
    'channel' as IntegrationMappingPartnerItemSlackTypeField;
  readonly id!: string;
  readonly slackWorkspaceId?: string;
  readonly slackOrgId?: string;
  constructor(
    fields: Omit<IntegrationMappingPartnerItemSlack, 'type'> &
      Partial<Pick<IntegrationMappingPartnerItemSlack, 'type'>>
  ) {
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.id) {
      this.id = fields.id;
    }
    if (fields.slackWorkspaceId) {
      this.slackWorkspaceId = fields.slackWorkspaceId;
    }
    if (fields.slackOrgId) {
      this.slackOrgId = fields.slackOrgId;
    }
  }
}
export interface IntegrationMappingPartnerItemSlackInput {
  readonly type?: IntegrationMappingPartnerItemSlackTypeField;
  readonly id: string;
  readonly slackWorkspaceId?: string;
  readonly slackOrgId?: string;
}
export function serializeIntegrationMappingPartnerItemSlackTypeField(
  val: IntegrationMappingPartnerItemSlackTypeField
): SerializedData {
  return val;
}
export function deserializeIntegrationMappingPartnerItemSlackTypeField(
  val: SerializedData
): IntegrationMappingPartnerItemSlackTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "IntegrationMappingPartnerItemSlackTypeField"',
    });
  }
  if (val == 'channel') {
    return 'channel';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeIntegrationMappingPartnerItemSlack(
  val: IntegrationMappingPartnerItemSlack
): SerializedData {
  return {
    ['type']: serializeIntegrationMappingPartnerItemSlackTypeField(val.type),
    ['id']: val.id,
    ['slack_workspace_id']:
      val.slackWorkspaceId == void 0 ? void 0 : val.slackWorkspaceId,
    ['slack_org_id']: val.slackOrgId == void 0 ? void 0 : val.slackOrgId,
  };
}
export function deserializeIntegrationMappingPartnerItemSlack(
  val: SerializedData
): IntegrationMappingPartnerItemSlack {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "IntegrationMappingPartnerItemSlack"',
    });
  }
  if (val.type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "type" of type "IntegrationMappingPartnerItemSlack" to be defined',
    });
  }
  const type: IntegrationMappingPartnerItemSlackTypeField =
    deserializeIntegrationMappingPartnerItemSlackTypeField(val.type);
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "IntegrationMappingPartnerItemSlack" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "IntegrationMappingPartnerItemSlack"',
    });
  }
  const id: string = val.id;
  if (
    !(val.slack_workspace_id == void 0) &&
    !sdIsString(val.slack_workspace_id)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "slack_workspace_id" of type "IntegrationMappingPartnerItemSlack"',
    });
  }
  const slackWorkspaceId: undefined | string =
    val.slack_workspace_id == void 0 ? void 0 : val.slack_workspace_id;
  if (!(val.slack_org_id == void 0) && !sdIsString(val.slack_org_id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "slack_org_id" of type "IntegrationMappingPartnerItemSlack"',
    });
  }
  const slackOrgId: undefined | string =
    val.slack_org_id == void 0 ? void 0 : val.slack_org_id;
  return {
    type: type,
    id: id,
    slackWorkspaceId: slackWorkspaceId,
    slackOrgId: slackOrgId,
  } satisfies IntegrationMappingPartnerItemSlack;
}
export function serializeIntegrationMappingPartnerItemSlackInput(
  val: IntegrationMappingPartnerItemSlackInput
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeIntegrationMappingPartnerItemSlackTypeField(val.type),
    ['id']: val.id,
    ['slack_workspace_id']:
      val.slackWorkspaceId == void 0 ? void 0 : val.slackWorkspaceId,
    ['slack_org_id']: val.slackOrgId == void 0 ? void 0 : val.slackOrgId,
  };
}
export function deserializeIntegrationMappingPartnerItemSlackInput(
  val: SerializedData
): IntegrationMappingPartnerItemSlackInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "IntegrationMappingPartnerItemSlackInput"',
    });
  }
  const type: undefined | IntegrationMappingPartnerItemSlackTypeField =
    val.type == void 0
      ? void 0
      : deserializeIntegrationMappingPartnerItemSlackTypeField(val.type);
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "IntegrationMappingPartnerItemSlackInput" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "IntegrationMappingPartnerItemSlackInput"',
    });
  }
  const id: string = val.id;
  if (
    !(val.slack_workspace_id == void 0) &&
    !sdIsString(val.slack_workspace_id)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "slack_workspace_id" of type "IntegrationMappingPartnerItemSlackInput"',
    });
  }
  const slackWorkspaceId: undefined | string =
    val.slack_workspace_id == void 0 ? void 0 : val.slack_workspace_id;
  if (!(val.slack_org_id == void 0) && !sdIsString(val.slack_org_id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "slack_org_id" of type "IntegrationMappingPartnerItemSlackInput"',
    });
  }
  const slackOrgId: undefined | string =
    val.slack_org_id == void 0 ? void 0 : val.slack_org_id;
  return {
    type: type,
    id: id,
    slackWorkspaceId: slackWorkspaceId,
    slackOrgId: slackOrgId,
  } satisfies IntegrationMappingPartnerItemSlackInput;
}
