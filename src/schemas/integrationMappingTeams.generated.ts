import { serializeIntegrationMappingBaseTypeField } from './integrationMappingBase.generated';
import { deserializeIntegrationMappingBaseTypeField } from './integrationMappingBase.generated';
import { serializeIntegrationMappingPartnerItemTeams } from './integrationMappingPartnerItemTeams.generated';
import { deserializeIntegrationMappingPartnerItemTeams } from './integrationMappingPartnerItemTeams.generated';
import { serializeIntegrationMappingBase } from './integrationMappingBase.generated';
import { deserializeIntegrationMappingBase } from './integrationMappingBase.generated';
import { serializeIntegrationMappingPartnerItemTeamsUnion } from './integrationMappingPartnerItemTeamsUnion.generated';
import { deserializeIntegrationMappingPartnerItemTeamsUnion } from './integrationMappingPartnerItemTeamsUnion.generated';
import { serializeFolderReference } from './folderReference.generated';
import { deserializeFolderReference } from './folderReference.generated';
import { serializeDateTime } from '../internal/utils';
import { deserializeDateTime } from '../internal/utils';
import { IntegrationMappingBaseTypeField } from './integrationMappingBase.generated';
import { IntegrationMappingPartnerItemTeams } from './integrationMappingPartnerItemTeams.generated';
import { IntegrationMappingBase } from './integrationMappingBase.generated';
import { IntegrationMappingPartnerItemTeamsUnion } from './integrationMappingPartnerItemTeamsUnion.generated';
import { FolderReference } from './folderReference.generated';
import { BoxSdkError } from '../box/errors';
import { DateTime } from '../internal/utils';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type IntegrationMappingTeamsIntegrationTypeField = 'teams' | string;
export class IntegrationMappingTeams extends IntegrationMappingBase {
  readonly integrationType?: IntegrationMappingTeamsIntegrationTypeField;
  readonly isOverriddenByManualMapping?: boolean;
  readonly partnerItem!: IntegrationMappingPartnerItemTeamsUnion;
  readonly boxItem!: FolderReference;
  readonly createdAt?: DateTime;
  readonly modifiedAt?: DateTime;
  constructor(fields: IntegrationMappingTeams) {
    super(fields);
    if (fields.integrationType !== undefined) {
      this.integrationType = fields.integrationType;
    }
    if (fields.isOverriddenByManualMapping !== undefined) {
      this.isOverriddenByManualMapping = fields.isOverriddenByManualMapping;
    }
    if (fields.partnerItem !== undefined) {
      this.partnerItem = fields.partnerItem;
    }
    if (fields.boxItem !== undefined) {
      this.boxItem = fields.boxItem;
    }
    if (fields.createdAt !== undefined) {
      this.createdAt = fields.createdAt;
    }
    if (fields.modifiedAt !== undefined) {
      this.modifiedAt = fields.modifiedAt;
    }
  }
}
export function serializeIntegrationMappingTeamsIntegrationTypeField(
  val: IntegrationMappingTeamsIntegrationTypeField,
): SerializedData {
  return val;
}
export function deserializeIntegrationMappingTeamsIntegrationTypeField(
  val: SerializedData,
): IntegrationMappingTeamsIntegrationTypeField {
  if (val == 'teams') {
    return val;
  }
  if (sdIsString(val)) {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize IntegrationMappingTeamsIntegrationTypeField",
  });
}
export function serializeIntegrationMappingTeams(
  val: IntegrationMappingTeams,
): SerializedData {
  const base: any = serializeIntegrationMappingBase(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "IntegrationMappingTeams"',
    });
  }
  return {
    ...base,
    ...{
      ['integration_type']:
        val.integrationType == void 0
          ? val.integrationType
          : serializeIntegrationMappingTeamsIntegrationTypeField(
              val.integrationType,
            ),
      ['is_overridden_by_manual_mapping']: val.isOverriddenByManualMapping,
      ['partner_item']: serializeIntegrationMappingPartnerItemTeamsUnion(
        val.partnerItem,
      ),
      ['box_item']: serializeFolderReference(val.boxItem),
      ['created_at']:
        val.createdAt == void 0
          ? val.createdAt
          : serializeDateTime(val.createdAt),
      ['modified_at']:
        val.modifiedAt == void 0
          ? val.modifiedAt
          : serializeDateTime(val.modifiedAt),
    },
  };
}
export function deserializeIntegrationMappingTeams(
  val: SerializedData,
): IntegrationMappingTeams {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "IntegrationMappingTeams"',
    });
  }
  const integrationType:
    | undefined
    | IntegrationMappingTeamsIntegrationTypeField =
    val.integration_type == void 0
      ? void 0
      : deserializeIntegrationMappingTeamsIntegrationTypeField(
          val.integration_type,
        );
  if (
    !(val.is_overridden_by_manual_mapping == void 0) &&
    !sdIsBoolean(val.is_overridden_by_manual_mapping)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_overridden_by_manual_mapping" of type "IntegrationMappingTeams"',
    });
  }
  const isOverriddenByManualMapping: undefined | boolean =
    val.is_overridden_by_manual_mapping == void 0
      ? void 0
      : val.is_overridden_by_manual_mapping;
  if (val.partner_item == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "partner_item" of type "IntegrationMappingTeams" to be defined',
    });
  }
  const partnerItem: IntegrationMappingPartnerItemTeamsUnion =
    deserializeIntegrationMappingPartnerItemTeamsUnion(val.partner_item);
  if (val.box_item == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "box_item" of type "IntegrationMappingTeams" to be defined',
    });
  }
  const boxItem: FolderReference = deserializeFolderReference(val.box_item);
  if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "created_at" of type "IntegrationMappingTeams"',
    });
  }
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "modified_at" of type "IntegrationMappingTeams"',
    });
  }
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  if (val.id == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "id" of type "IntegrationMappingTeams" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "IntegrationMappingTeams"',
    });
  }
  const id: string = val.id;
  if (val.type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "type" of type "IntegrationMappingTeams" to be defined',
    });
  }
  const type: IntegrationMappingBaseTypeField =
    deserializeIntegrationMappingBaseTypeField(val.type);
  return {
    integrationType: integrationType,
    isOverriddenByManualMapping: isOverriddenByManualMapping,
    partnerItem: partnerItem,
    boxItem: boxItem,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    id: id,
    type: type,
  } satisfies IntegrationMappingTeams;
}
